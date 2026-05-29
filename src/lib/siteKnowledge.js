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
const STOPWORD_TOKENS = new Set([
  "about",
  "also",
  "and",
  "are",
  "can",
  "does",
  "for",
  "from",
  "has",
  "his",
  "how",
  "into",
  "is",
  "me",
  "my",
  "of",
  "on",
  "or",
  "tell",
  "the",
  "this",
  "to",
  "what",
  "which",
  "who",
  "with",
  "you",
]);
const PROFILE_INTENT_PATTERNS = [
  /\bcarlos\b/i,
  /\babout me\b/i,
  /\babout him\b/i,
  /\bwho (is|are)\b/i,
  /\bbackground\b/i,
  /\bexperience\b/i,
  /\bskills?\b/i,
  /\btech stack\b/i,
  /\blanguages?\b/i,
  /\bavailable\b/i,
  /\bavailability\b/i,
  /\bhire\b/i,
  /\bwork setup\b/i,
];
const PORTFOLIO_INTENT_PATTERNS = [
  ...PROFILE_INTENT_PATTERNS,
  /\bprojects?\b/i,
  /\bportfolio\b/i,
  /\bcase stud(y|ies)\b/i,
  /\bchatbots?\b/i,
  /\bai\b/i,
  /\bcms\b/i,
  /\badmin\b/i,
  /\bdashboard\b/i,
  /\bfrontend\b/i,
  /\bbackend\b/i,
  /\bfull stack\b/i,
  /\bnext\.?js\b/i,
  /\breact\b/i,
  /\bnode\b/i,
  /\bpython\b/i,
  /\bpostgresql\b/i,
  /\bresume\b/i,
  /\bcontact\b/i,
  /\bemail\b/i,
  /\blinkedin\b/i,
  /\bgithub\b/i,
  /\bstate101\b/i,
  /\blindela\b/i,
  /\bexxonmobil\b/i,
];
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
        .filter(
          (token) =>
            token.length >= TOKEN_MIN_LENGTH && !STOPWORD_TOKENS.has(token),
        ),
    ),
  );
}

function hasProfileIntent(value = "") {
  return PROFILE_INTENT_PATTERNS.some((pattern) => pattern.test(value));
}

export function hasPortfolioIntent(value = "") {
  return PORTFOLIO_INTENT_PATTERNS.some((pattern) => pattern.test(value));
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
        "Profile summary: Carlos Miguel Samson is a full stack developer from Binangonan, Rizal, Philippines with 4 years of hands-on experience building websites, CMS platforms, admin systems, and AI-assisted workflows.",
        `Job title: ${siteConfig.jobTitle}`,
        `Location: ${siteConfig.location}`,
        "Experience level: 4 years of hands-on full-stack development experience.",
        `Preferred roles: ${siteConfig.preferredRoles.join(", ")}`,
        `Availability: ${siteConfig.availability.join(", ")}`,
        `Work modes: ${siteConfig.workModes.join(", ")}`,
        `Region: ${siteConfig.workRegion}`,
        `Relocation: ${siteConfig.relocation}`,
        `Skills: ${siteConfig.skills.join(", ")}`,
        "Programming languages and technologies: JavaScript, TypeScript, Python, Java, SQL, C++, Haskell, Go, React, Next.js, Node.js, PostgreSQL, Prisma, Supabase, Streamlit, Firebase, Docker, AWS, Redis, Redux, Tailwind, MUI, MongoDB, Kafka, and API integrations.",
        "Work history: Full Stack Web Developer at STATE101 Visa Assistance Consultancy from March 2024 to April 2026; Freelance Web Developer for Lindela Travel and Tours from March 2025 to June 2025; Software Developer intern with ExxonMobil from February 2022 to February 2024.",
        "Education: Bachelor of Science in Information Technology from STI College - Ortigas-Cainta.",
        "Core strengths: responsive frontend work, backend workflows, CMS architecture, internal admin systems, AI chatbot experiences, automation, cloud-connected integrations, and practical product execution.",
        `Contact email: ${siteConfig.email}`,
        `Contact phone: ${siteConfig.phone}`,
      ],
      keywords: [
        siteConfig.keywords,
        siteConfig.skills,
        siteConfig.preferredRoles,
        [
          "Carlos Miguel Samson",
          "about Carlos",
          "about me",
          "who is Carlos",
          "developer profile",
          "portfolio summary",
          "experience summary",
          "skills summary",
          "programming languages",
          "tech stack",
          "availability",
          "hire Carlos",
        ],
      ],
    }),
  );

  documents.push(
    createKnowledgeDocument({
      id: "profile-experience-summary",
      sourceId: "profile-experience-summary",
      type: "Resume Snapshot",
      title: "Carlos Miguel Samson Experience and Skills Summary",
      path: "/resume",
      contentParts: [
        "Carlos Miguel Samson is a Full Stack Developer with 4 years of hands-on experience.",
        "He builds websites, admin systems, CMS platforms, and AI-assisted workflows using Next.js, React, Node.js, Python, PostgreSQL, Prisma, Supabase, Streamlit, and API integrations.",
        "Experience includes Full Stack Web Developer at STATE101 Visa Assistance Consultancy from March 2024 to April 2026, Freelance Web Developer for Lindela Travel and Tours from March 2025 to June 2025, and Software Developer intern with ExxonMobil from February 2022 to February 2024.",
        "He is open to full-time, freelance, and project-based opportunities, with remote, hybrid, and on-site work options.",
        "Preferred roles include Full Stack Developer, React / Next.js Developer, CMS and Internal Tools Developer, and AI Workflow and Automation Developer.",
        "Education: Bachelor of Science in Information Technology from STI College - Ortigas-Cainta.",
      ],
      keywords: [
        siteConfig.skills,
        siteConfig.preferredRoles,
        [
          "Carlos",
          "Carlos Miguel Samson",
          "about Carlos",
          "who is Carlos",
          "profile",
          "resume",
          "experience",
          "4 years",
          "skills",
          "languages",
          "availability",
        ],
      ],
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

  if (hasProfileIntent(normalizedQuery)) {
    if (document.id === "site-profile") {
      score += 40;
    }

    if (document.id === "profile-experience-summary") {
      score += 36;
    }

    if (document.path === "/resume" || document.path === "/about") {
      score += 12;
    }
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
