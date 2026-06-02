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
  /\bwhere (are|is|do)\b/i,
  /\blocation\b/i,
  /\bcity\b/i,
  /\bbased\b/i,
  /\bliving\b/i,
  /\bresid(e|ing)\b/i,
  /\bcan you start\b/i,
  /\bcan you begin\b/i,
  /\bwhen can you start\b/i,
  /\bopen to\b/i,
  /\blooking for (work|a job|opportunities)\b/i,
  /\bseeking\b/i,
  /\brate\b/i,
  /\bsalary\b/i,
  /\bcost\b/i,
  /\bprice\b/i,
  /\bhourly\b/i,
  /\bfull-?time\b/i,
  /\bfreelance\b/i,
  /\bproject-?based\b/i,
  /\bremote\b/i,
  /\bhybrid\b/i,
  /\bon-?site\b/i,
  /\bwork (from|remotely)\b/i,
  /\bflexible\b/i,
  /\bschedule\b/i,
  /\bcompany\b/i,
  /\bcompanies\b/i,
  /\bprevious (work|jobs?|employers?)\b/i,
  /\bwork history\b/i,
  /\bcareer\b/i,
  /\bcase study|case studies\b/i,
  /\btell me about\b/i,
  /\bdescribe\b/i,
  /\bwhat (have you|have you|have you) (built|made|created|worked|done)\b/i,
  /\bdo you (know|have|use|work with)\b/i,
  /\bfamiliar with\b/i,
  /\bexperienced with\b/i,
  /\bcontact\b/i,
  /\breach (me|you|out)\b/i,
  /\bemail\b/i,
  /\bphone\b/i,
  /\blinkedin\b/i,
  /\bgithub\b/i,
  /\bresume\b/i,
  /\bcv\b/i,
  /\bhow (long|many|much)\b/i,
  /\btimeline\b/i,
  /\bdeadline\b/i,
  /\bdelivery\b/i,
  /\bteam\b/i,
  /\bcollaboration\b/i,
  /\bteamwork\b/i,
  /\bstate101\b/i,
  /\blindela\b/i,
  /\bexxonmobil\b/i,
  /\bvisa\b/i,
  /\btravel\b/i,
  /\bcms\b/i,
  /\bdashboard\b/i,
  /\bchatbot\b/i,
  /\bai\b/i,
  /\bpython\b/i,
  /\bnode\b/i,
  /\bpostgres\b/i,
  /\bprisma\b/i,
  /\bstreamlit\b/i,
  /\bgroq\b/i,
  /\bwebflow\b/i,
  /\badmin\b/i,
  /\bapplicant\b/i,
];
const IMPACT_INTENT_PATTERNS = [
  /\bapplications?\b/i,
  /\binquiries?\b/i,
  /\bmetrics?\b/i,
  /\bimpact\b/i,
  /\bvisitors?\b/i,
  /\bviews?\b/i,
  /\btraffic\b/i,
  /\bpercent(age)?\b/i,
  /\bweekly\b/i,
  /\bmonthly\b/i,
];
const PORTFOLIO_INTENT_PATTERNS = [
  ...PROFILE_INTENT_PATTERNS,
  ...IMPACT_INTENT_PATTERNS,
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
  /\bwebflow\b/i,
  /\bvisa\b/i,
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

function hasImpactIntent(value = "") {
  return IMPACT_INTENT_PATTERNS.some((pattern) => pattern.test(value));
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
        "Profile summary: Carlos Miguel Samson is a full stack developer from Binangonan, Rizal, Philippines with 4 years of hands-on experience building production-ready websites, custom CMS platforms, applicant management systems, and AI-powered applications.",
        `Job title: ${siteConfig.jobTitle}`,
        `Location: ${siteConfig.location}`,
        `Natural languages: ${siteConfig.naturalLanguages.join(", ")}`,
        `Years of experience: ${siteConfig.yearsOfExperience} years`,
        "Experience level: 4 years of hands-on full-stack development experience.",
        `Preferred roles: ${siteConfig.preferredRoles.join(", ")}`,
        `Availability: ${siteConfig.availability.join(", ")}`,
        `Work modes: ${siteConfig.workModes.join(", ")}`,
        `Region: ${siteConfig.workRegion}`,
        `Relocation: ${siteConfig.relocation}`,
        `Skills: ${siteConfig.skills.join(", ")}`,
        "Programming languages and technologies: JavaScript, TypeScript, Python, React, Next.js, Tailwind CSS, Node.js, Express.js, Streamlit, REST APIs, PostgreSQL, MySQL, MongoDB, Prisma ORM, Supabase, Vercel, OpenAI, Groq, RAG, prompt engineering, embeddings, Google Sheets automation, WordPress, Payload CMS, Webflow, Git/GitHub, and Postman.",
        "Work history summary: 4 years total experience across startup environments, client consultancies, and corporate internships.",
        "Current employment: Full Stack Web Developer at STATE101 Visa Assistance Consultancy from March 2024 to April 2026, leading frontend development, CMS architecture, and internal admin platforms that support 50+ visa applications weekly and serve 300+ monthly website visitors.",
        "Freelance work: Freelance Web Developer for Lindela Travel and Tours from March 2025 to June 2025, delivering a responsive travel services website that contributed to 70% increase in website visits and customer inquiries.",
        "Internship: Software Developer Intern at ExxonMobil Philippines from February 2022 to February 2024, built AI chatbot for product support using Python and Streamlit.",
        "Impact highlights: supported 50+ visa applications per week through a centralized applicant management system; enabled 15 internal users including 5 administrators and 10 content editors; delivered editable modules across 4 website pages; supported approximately 300+ monthly visitors; processed approximately 60-100 weekly travel and visa AI assistant inquiries during deployment; contributed to an estimated 70% increase in website visits and customer inquiries after the Lindela website launch.",
        "Education: Bachelor of Science in Information Technology at STI College Ortigas-Cainta, 2022-2026, with expected graduation in 2026.",
        "Core strengths: responsive frontend work, backend workflows, CMS architecture, applicant management systems, AI chatbot experiences, automation, cloud-connected integrations, and practical product execution.",
        "Project portfolio: 4 major projects including STATE101 Travel Website (Next.js, React, TypeScript), STATE101 Travel AI Assistant Platform (Python, Streamlit, Groq API), Custom CMS and Applicant Management System (Next.js, Prisma, PostgreSQL), and Lindela Travel Website (Next.js, React, TypeScript).",
        `Contact email: ${siteConfig.email}`,
        `Contact phone: ${siteConfig.phone}`,
        `GitHub: https://github.com/MIGSNOLIMIT`,
        `LinkedIn: https://www.linkedin.com/in/carlos-miguel-samson-80268a36a/`,
        "Portfolio website: https://samson-carlos.vercel.app",
        "Hiring information: Currently open to Full-time, Freelance, and Project-based opportunities. Available for immediate start. Remote work preferred but flexible for hybrid or on-site within NCR and CALABARZON regions.",
        "Work approach: Focus on building for real product needs rather than polish alone. Values clear customer journeys, minimal manual overhead for teams, systems that scale, and honest case studies that explain tradeoffs.",
        "Specializations: Travel and visa industry expertise from STATE101 work; AI assistant and knowledge-base systems; Next.js and React for responsive web applications; Python for backend and AI workflows; Prisma and PostgreSQL for data architecture; internal admin dashboards and CMS platforms.",
      ],
      keywords: [
        siteConfig.keywords,
        siteConfig.skills,
        siteConfig.naturalLanguages,
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
          "natural languages",
          "tech stack",
          "availability",
          "hire Carlos",
          "Binangonan",
          "Rizal",
          "Philippines",
          "where Carlos lives",
          "where is Carlos",
          "Carlos location",
          "based in",
          "years of experience",
          "English",
          "Filipino",
          "contact",
          "email",
          "phone",
          "GitHub",
          "LinkedIn",
          "resume",
          "CV",
          "available",
          "open to opportunities",
          "looking for work",
          "hire",
          "remote",
          "full-time",
          "freelance",
          "project-based",
          "start date",
          "can you start",
          "availability",
          "STATE101",
          "Lindela",
          "ExxonMobil",
          "visa",
          "travel",
          "AI chatbot",
          "CMS",
          "dashboard",
          "applicant management",
          "work history",
          "previous companies",
          "case studies",
          "projects",
          "portfolio",
          "impact metrics",
          "experience",
          "background",
          "skills",
          "React",
          "Next.js",
          "Python",
          "PostgreSQL",
          "Prisma",
          "Streamlit",
          "Groq",
          "Webflow",
          "TypeScript",
          "Node.js",
          "Express",
          "Tailwind",
          "expertise",
          "specialization",
          "what can you do",
          "what have you built",
          "tell me about your work",
          "education",
          "degree",
          "STI College",
          "graduation",
          "team work",
          "collaboration",
          "remote work",
          "hybrid",
          "on-site",
          "flexible",
          "schedule",
          "timeline",
          "delivery",
          "rate",
          "salary",
        ],
      ],
    }),
  );

  documents.push(
    createKnowledgeDocument({
      id: "profile-impact-summary",
      sourceId: "profile-impact-summary",
      type: "Resume Snapshot",
      title: "Carlos Miguel Samson Resume-Backed Portfolio Impact Metrics",
      path: "/resume",
      contentParts: [
        "STATE101 applicant management system: supported 50+ visa applications per week.",
        "STATE101 internal platform: enabled 15 internal users, including 5 administrators and 10 content editors.",
        "STATE101 public website: supported approximately 300+ monthly visitors through reliable Vercel deployments.",
        "STATE101 content operations: delivered editable content and branding modules across 4 website pages.",
        "Travel and Visa AI Assistant: processed approximately 60-100 customer inquiries per week during deployment, reducing manual response workload.",
        "Lindela Travel and Tours website: contributed to an estimated 70% increase in website visits and customer inquiries following launch.",
      ],
      keywords: [
        [
          "resume metrics",
          "portfolio impact",
          "visa applications",
          "internal users",
          "website visitors",
          "website views",
          "monthly traffic",
          "customer inquiries",
          "weekly inquiries",
          "estimated increase",
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
        "Location: Binangonan, Rizal, Philippines. Languages: English and Filipino.",
        "He builds production-ready websites, applicant management systems, custom CMS platforms, and AI-powered applications using Next.js, React, TypeScript, Node.js, Python, PostgreSQL, Prisma, Supabase, Streamlit, and REST API integrations.",
        "Experience includes Full Stack Web Developer at STATE101 Visa Assistance Consultancy from March 2024 to April 2026, Freelance Web Developer for Lindela Travel and Tours from March 2025 to June 2025, and Software Developer Intern at ExxonMobil Philippines from February 2022 to February 2024.",
        "Resume-backed outcomes include 50+ visa applications supported per week, 15 internal CMS users, 4 editable website pages, approximately 300+ monthly visitors, approximately 60-100 weekly AI assistant inquiries during deployment, and an estimated 70% increase in Lindela website visits and customer inquiries after launch.",
        "He is open to full-time, freelance, and project-based opportunities, with remote, hybrid, and on-site work options.",
        "Preferred roles include Full Stack Developer, Webflow Developer, AI Chatbot Developer, and React / Next.js Developer.",
        "Education: Bachelor of Science in Information Technology at STI College Ortigas-Cainta, with expected graduation in 2026.",
      ],
      keywords: [
        siteConfig.skills,
        siteConfig.naturalLanguages,
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
          "natural languages",
          "English",
          "Filipino",
          "availability",
          "location",
          "Binangonan",
          "Rizal",
          "Philippines",
          "where",
          "based",
          "living",
        ],
      ],
    }),
  );

  documents.push(
    createKnowledgeDocument({
      id: "hiring-contact-info",
      sourceId: "hiring-contact-info",
      type: "Hiring Information",
      title: "How to Hire Carlos Miguel Samson - Contact and Availability",
      path: "/",
      contentParts: [
        "Hiring Status: Carlos Miguel Samson is currently open to Full-time, Freelance, and Project-based opportunities.",
        "Immediate Availability: Available to start immediately or with short notice. No competing commitments preventing quick onboarding.",
        "Work Arrangement Options: Remote work preferred. Also available for Hybrid work or On-site work within NCR (Metro Manila) and CALABARZON regions (Cavite, Laguna, Batangas, Rizal, Quezon provinces).",
        "Relocation: Willing to relocate for the right opportunity.",
        "Time Zone: Philippine Standard Time (PHT), UTC+8. Works during standard business hours with flexibility for overlap with other time zones.",
        "Primary Contact Email: migsnolimit26@gmail.com",
        "Phone: +63 966 829 3379",
        "GitHub Profile: https://github.com/MIGSNOLIMIT - See actual code, repositories, and contribution history.",
        "LinkedIn Profile: https://www.linkedin.com/in/carlos-miguel-samson-80268a36a/ - Full professional profile and recommendations.",
        "Portfolio Website: https://samson-carlos.vercel.app - Comprehensive case studies, projects, and impact metrics.",
        "Resume: Available upon request at email or LinkedIn.",
        "Experience Level: 4 years of hands-on full-stack development experience with demonstrated impact across startup consultancies, client services, and corporate environments.",
        "Preferred Roles and Job Titles: Full Stack Developer, Webflow Developer, AI Chatbot Developer, React / Next.js Developer.",
        "Technical Depth: Deep expertise in Next.js and React for frontend; Node.js and Python for backend; Prisma and PostgreSQL for database architecture; Streamlit and Groq for AI applications; and CMS platforms.",
        "Industry Experience: Specialization in travel and visa services domain from 2+ years at STATE101. Understands applicant workflows, content operations, and customer-facing digital experiences in this space.",
        "Hiring Timeline: Flexible. Can discuss project scope, timeline, and deliverables. Experienced with fixed-timeline deliveries and ongoing retainer work.",
        "Technical Interview Readiness: Comfortable with technical assessments, system design discussions, take-home coding challenges, and live coding interviews.",
        "Team Fit: Collaborates well with designers, product managers, and other developers. Prefers clear communication, documented decisions, and honest feedback. Works across startup speed and corporate process.",
        "Project Portfolio Available: 4 major case studies available on portfolio site covering travel websites, admin dashboards, AI assistants, and applicant management systems.",
      ],
      keywords: [
        [
          "hire",
          "hiring",
          "recruitment",
          "contact",
          "email",
          "phone",
          "GitHub",
          "LinkedIn",
          "resume",
          "CV",
          "available",
          "start date",
          "can you start",
          "availability",
          "open to opportunities",
          "looking for work",
          "full-time",
          "freelance",
          "project-based",
          "remote",
          "hybrid",
          "on-site",
          "relocation",
          "flexible",
          "schedule",
          "timezone",
          "time zone",
          "PHT",
          "business hours",
          "immediate",
          "when can you start",
          "quick turnaround",
          "ready to start",
          "work arrangement",
          "work location",
          "location flexible",
          "geographic",
          "metro manila",
          "NCR",
          "CALABARZON",
          "reach out",
          "get in touch",
          "reach me",
          "contact me",
          "how to contact",
          "communication",
          "technical interview",
          "assessment",
          "coding challenge",
          "system design",
          "live coding",
          "team fit",
          "collaboration",
          "developer skills",
          "experience level",
          "years",
          "4 years",
          "startup",
          "corporate",
          "consultancy",
          "freelance work",
          "project rate",
          "hourly rate",
          "salary expectations",
          "compensation",
          "rate",
          "terms",
          "terms and conditions",
          "engagement",
          "contract",
          "agreement",
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

  if (hasImpactIntent(normalizedQuery) && document.id === "profile-impact-summary") {
    score += 50;
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
