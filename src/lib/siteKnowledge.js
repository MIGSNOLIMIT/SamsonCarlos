import {
  blogCategories,
  blogPosts,
  clusterPages,
  getAbsoluteUrl,
  pillarPages,
  projectEntities,
  siteConfig,
  staticLinkableItems,
} from "../content/siteContent";

const TOKEN_MIN_LENGTH = 2;
const MAX_EXCERPT_LENGTH = 280;
const IGNORED_KEYS = new Set([
  "id",
  "slug",
  "path",
  "relatedIds",
  "projectIds",
  "categoryId",
  "publishedAt",
  "liveUrl",
  "repoUrl",
  "siteUrl",
  "defaultImage",
  "socialLinks",
]);

let knowledgeCache = null;

function sentenceCase(value = "") {
  return value
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .trim()
    .replace(/^\w/, (char) => char.toUpperCase());
}

function normalizeWhitespace(value = "") {
  return value.toString().replace(/\s+/g, " ").trim();
}

function clipText(value = "", maxLength = MAX_EXCERPT_LENGTH) {
  const normalized = normalizeWhitespace(value);

  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength - 1).trimEnd()}...`;
}

function tokenize(value = "") {
  return Array.from(
    new Set(
      value
        .toLowerCase()
        .split(/[^a-z0-9+.]+/i)
        .map((token) => token.trim())
        .filter((token) => token.length >= TOKEN_MIN_LENGTH),
    ),
  );
}

function escapeForRegex(value = "") {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function collectTextEntries(value, key = "") {
  if (value == null || value === "") {
    return [];
  }

  if (typeof value === "string" || typeof value === "number") {
    if (!key) {
      return [normalizeWhitespace(value)];
    }

    return [`${sentenceCase(key)}: ${normalizeWhitespace(value)}`];
  }

  if (Array.isArray(value)) {
    if (value.every((entry) => typeof entry === "string")) {
      if (!key) {
        return value.map((entry) => normalizeWhitespace(entry));
      }

      return [`${sentenceCase(key)}: ${value.map((entry) => normalizeWhitespace(entry)).join(", ")}`];
    }

    return value.flatMap((entry) => collectTextEntries(entry, key));
  }

  if (typeof value === "object") {
    return Object.entries(value).flatMap(([childKey, childValue]) => {
      if (IGNORED_KEYS.has(childKey)) {
        return [];
      }

      return collectTextEntries(childValue, childKey);
    });
  }

  return [];
}

function createKnowledgeDocument({
  id,
  sourceId,
  type,
  title,
  path = "/",
  section = "",
  contentParts = [],
  keywords = [],
}) {
  const cleanedParts = contentParts
    .map((part) => normalizeWhitespace(part))
    .filter(Boolean);
  const content = cleanedParts.join("\n");
  const excerpt = clipText(cleanedParts.join(" "));
  const url = getAbsoluteUrl(path);
  const keywordText = keywords
    .flatMap((entry) => (Array.isArray(entry) ? entry : [entry]))
    .map((entry) => normalizeWhitespace(entry))
    .filter(Boolean)
    .join(" ");
  const searchText = [
    title,
    section,
    type,
    path,
    keywordText,
    content,
  ]
    .join(" ")
    .toLowerCase();

  return {
    id,
    sourceId,
    title,
    type,
    path,
    url,
    section,
    excerpt,
    content,
    keywords: tokenize(keywordText),
    titleTokens: tokenize([title, section].join(" ")),
    searchText,
  };
}

function createPrimaryDocument(item, extraParts = [], extraKeywords = []) {
  return createKnowledgeDocument({
    id: item.id,
    sourceId: item.id,
    type: item.type || "Website Content",
    title: item.title || item.siteName,
    path: item.path || "/",
    contentParts: [...collectTextEntries(item), ...extraParts],
    keywords: [item.keyword, extraKeywords],
  });
}

function createSectionDocuments(item) {
  return (item.sections || []).map((section, index) =>
    createKnowledgeDocument({
      id: `${item.id}::section-${index + 1}`,
      sourceId: item.id,
      type: item.type || "Website Content",
      title: item.title,
      path: item.path || "/",
      section: section.heading || `Section ${index + 1}`,
      contentParts: [
        section.heading,
        ...(section.paragraphs || []),
        ...(section.bullets || []),
      ],
      keywords: [item.keyword, item.title, section.heading],
    }),
  );
}

function buildKnowledgeBase() {
  if (knowledgeCache) {
    return knowledgeCache;
  }

  const documents = [];

  documents.push(
    createKnowledgeDocument({
      id: "site-profile",
      sourceId: "site-profile",
      type: "Website Profile",
      title: `${siteConfig.siteName} Portfolio Overview`,
      path: "/",
      contentParts: [
        `Site owner: ${siteConfig.siteName}`,
        `Job title: ${siteConfig.jobTitle}`,
        `Location: ${siteConfig.location}`,
        `Preferred roles: ${siteConfig.preferredRoles.join(", ")}`,
        `Availability: ${siteConfig.availability.join(", ")}`,
        `Work modes: ${siteConfig.workModes.join(", ")}`,
        `Region: ${siteConfig.workRegion}`,
        `Relocation: ${siteConfig.relocation}`,
        `Skills: ${siteConfig.skills.join(", ")}`,
        `Contact email: ${siteConfig.email}`,
        `Contact phone: ${siteConfig.phone}`,
      ],
      keywords: [siteConfig.keywords, siteConfig.skills, siteConfig.preferredRoles],
    }),
  );

  staticLinkableItems.forEach((item) => {
    documents.push(
      createPrimaryDocument(item, [item.description], [item.title, item.type]),
    );
  });

  projectEntities.forEach((project) => {
    documents.push(
      createPrimaryDocument(
        project,
        [
          `Role: ${project.role}`,
          `Summary: ${project.description}`,
          `Owned work: ${project.owned}`,
          `Constraint: ${project.constraint}`,
          `Result: ${project.result}`,
          `Tech stack: ${(project.techStack || []).join(", ")}`,
        ],
        [project.cardMeta, project.role, project.techStack],
      ),
    );
  });

  [...pillarPages, ...clusterPages, ...blogCategories, ...blogPosts].forEach(
    (item) => {
      documents.push(createPrimaryDocument(item));
      documents.push(...createSectionDocuments(item));
    },
  );

  knowledgeCache = documents;
  return knowledgeCache;
}

function scoreDocument(document, queryTokens, normalizedQuery) {
  let score = 0;

  queryTokens.forEach((token) => {
    if (document.titleTokens.includes(token)) {
      score += 10;
    }

    if (document.keywords.includes(token)) {
      score += 7;
    }

    if (document.path.toLowerCase().includes(token)) {
      score += 4;
    }

    const directMatches = document.searchText.match(
      new RegExp(
        `(^|[^a-z0-9+])${escapeForRegex(token)}([^a-z0-9+]|$)`,
        "g",
      ),
    );

    if (directMatches) {
      score += Math.min(6, directMatches.length);
    }
  });

  if (normalizedQuery && document.searchText.includes(normalizedQuery)) {
    score += 14;
  }

  return score;
}

export function getSiteKnowledgeBase() {
  return buildKnowledgeBase();
}

export function searchSiteKnowledge(query, options = {}) {
  const { limit = 6, minScore = 1 } = options;
  const normalizedQuery = normalizeWhitespace(query).toLowerCase();
  const queryTokens = tokenize(query);
  const knowledgeBase = getSiteKnowledgeBase();

  if (!normalizedQuery) {
    return knowledgeBase.slice(0, limit);
  }

  return knowledgeBase
    .map((document) => ({
      ...document,
      score: scoreDocument(document, queryTokens, normalizedQuery),
    }))
    .filter((document) => document.score >= minScore)
    .sort((left, right) => right.score - left.score)
    .slice(0, limit);
}

export function getKnowledgeSourceLinks(documents = []) {
  const uniqueSources = new Map();

  documents.forEach((document) => {
    if (!uniqueSources.has(document.sourceId)) {
      uniqueSources.set(document.sourceId, {
        id: document.sourceId,
        title: document.title,
        type: document.type,
        url: document.url,
        path: document.path,
      });
    }
  });

  return Array.from(uniqueSources.values());
}
