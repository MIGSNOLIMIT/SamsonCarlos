export const siteConfig = {
  siteName: "Carlos Miguel Samson",
  siteUrl: "https://samson-carlos.vercel.app",
  defaultImage: "/favicon.png",
  email: "migsnolimit26@gmail.com",
  phone: "+63 966 829 3379",
  jobTitle: "Full Stack Developer",
  location: "Binangonan, Rizal, Philippines",
  preferredRoles: [
    "Full Stack Developer",
    "Webflow Developer",
    "AI Chatbot Developer",
    "React / Next.js Developer",
  ],
  availability: ["Full-time", "Freelance", "Project-based"],
  workModes: ["Remote", "Hybrid", "On-site"],
  workRegion:
    "Available for on-site or hybrid work within NCR and CALABARZON",
  relocation: "Willing to relocate",
  naturalLanguages: ["English", "Filipino"],
  yearsOfExperience: 4,
  keywords: [
    "full stack developer portfolio",
    "react developer philippines",
    "next.js developer portfolio",
    "web developer philippines",
    "software engineer portfolio",
    "frontend backend engineering case studies",
  ],
  socialLinks: [
    "https://github.com/MIGSNOLIMIT",
    "https://www.linkedin.com/in/carlos-miguel-samson-80268a36a/",
  ],
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Python",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Prisma",
    "Supabase",
    "Vercel",
    "Streamlit",
    "REST APIs",
    "AI Chatbots",
    "RAG",
    "Prompt Engineering",
    "Embeddings",
    "Google Sheets API",
    "WordPress",
    "Payload CMS",
    "Webflow",
  ],
};

export const careerHighlights = [
  {
    value: "50+",
    label: "Visa applications supported weekly",
    context: "Centralized applicant management at STATE101",
  },
  {
    value: "60-100",
    label: "Customer inquiries handled weekly",
    context: "Travel and Visa AI Assistant during deployment",
  },
  {
    value: "300+",
    label: "Monthly website visitors supported",
    context: "STATE101 public website on Vercel",
  },
  {
    value: "~70%",
    label: "Increase in visits and inquiries",
    context: "Estimated lift after the Lindela website launch",
  },
  {
    value: "15",
    label: "Internal CMS users enabled",
    context: "5 administrators and 10 content editors",
  },
];

export const projectEntities = [
  {
    id: "project-state101-website",
    title: "State101 Travel Website",
    path: "/projects",
    type: "Project",
    cardMeta: "Client Website | React | Next.js",
    role: "Frontend / Full Stack Web Developer",
    description:
      "Responsive travel and visa assistance website built with React and Next.js to make services easier to understand and inquiries easier to start.",
    owned:
      "Responsive frontend delivery, page structure, content hierarchy, and inquiry-focused UX for the public website.",
    constraint:
      "The consultancy needed a clearer public-facing website that explained multiple services well and felt trustworthy across mobile and desktop.",
    result:
      "Supported approximately 300+ monthly visitors with a reliable, scalable public website deployed through Vercel.",
    impactHighlights: [
      { value: "300+", label: "Monthly visitors supported" },
      { value: "4", label: "Editable website pages" },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://state101-travel-website.vercel.app",
    repoUrl: "https://github.com/MIGSNOLIMIT/State101TravelWebsite",
    relatedIds: [
      "pillar-react-nextjs-developer",
      "cluster-react-travel-website-conversion-ux",
      "blog-seo-react-portfolio-architecture",
    ],
  },
  {
    id: "project-state101-ai",
    title: "State101 Travel AI Assistant Platform",
    path: "/projects",
    type: "Project",
    cardMeta: "Full Stack AI Developer | Python | Streamlit | Groq API",
    role: "Full Stack AI Developer",
    description:
      "Streamlit and Groq-powered AI travel assistant built to answer after-hours travel and visa inquiries using company knowledge.",
    owned:
      "Assistant workflow design, Streamlit UI, LLM integration, knowledge-base grounding, and lightweight content operations.",
    constraint:
      "The business could miss potential customers when inquiries arrived outside office hours and no one was available to respond immediately.",
    result:
      "Processed approximately 60-100 customer inquiries per week during deployment, reducing the manual response workload.",
    impactHighlights: [
      { value: "60-100", label: "Customer inquiries handled weekly" },
      { value: "24/7", label: "First-response coverage" },
    ],
    techStack: [
      "Python",
      "Streamlit",
      "Groq API",
      "Google Sheets API",
      "LLM Workflow Design",
    ],
    liveUrl: "https://state101travel-ai-chatbot.streamlit.app",
    repoUrl: "https://github.com/MIGSNOLIMIT/State101Travel-AI-Chatbot",
    relatedIds: [
      "cluster-state101-travel-ai-assistant",
      "cluster-python-streamlit-chatbot-knowledge-base",
      "blog-google-sheets-ai-assistant-ops",
    ],
  },
  {
    id: "project-custom-cms",
    title: "Custom CMS and Applicant Management System",
    path: "/projects",
    type: "Project",
    cardMeta: "Internal Platform | Next.js | Prisma | PostgreSQL",
    role: "Full Stack Web Developer",
    description:
      "Next.js, Prisma, PostgreSQL, and Supabase-based internal platform built for applicant workflows, content operations, media management, and auditability.",
    owned:
      "Dashboard architecture, CMS modules, role-based access, media handling, rich text editing, and audit logging.",
    constraint:
      "The team needed one scalable place to review visa applications and manage content, branding, roles, and media without repeated developer intervention.",
    result:
      "Supported 50+ visa applications per week while enabling 15 internal users to manage review and content workflows with clearer operational control.",
    impactHighlights: [
      { value: "50+", label: "Visa applications supported weekly" },
      { value: "15", label: "Internal users enabled" },
      { value: "4", label: "Editable website pages" },
    ],
    techStack: [
      "Next.js",
      "React",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Role-Based Access",
    ],
    relatedIds: [
      "cluster-custom-cms-admin-dashboard",
      "cluster-nextjs-prisma-admin-dashboard-architecture",
      "blog-react-nextjs-dashboard-architecture",
    ],
  },
  {
    id: "project-lindela-website",
    title: "Lindela Travel Website",
    path: "/projects",
    type: "Project",
    cardMeta: "Freelance | Travel Services Website | Responsive UX",
    role: "Freelance Web Developer",
    description:
      "Freelance travel services website focused on clearer service presentation, responsive UX, and a better inquiry path.",
    owned:
      "Homepage structure, responsive frontend delivery, service-page clarity, and inquiry-focused user experience.",
    constraint:
      "The client needed a more credible way to present multiple travel services and make the next step clearer for visitors.",
    result:
      "Contributed to an estimated 70% increase in website visits and customer inquiries following the launch.",
    impactHighlights: [
      { value: "~70%", label: "Increase in visits and inquiries" },
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    liveUrl: "https://lindelatravel.com/",
    relatedIds: [
      "cluster-react-travel-website-conversion-ux",
      "pillar-web-development-case-studies",
      "blog-travel-booking-case-study",
    ],
  },
  {
    id: "project-exxonmobil-ai",
    title: "MOBI Chatbot for ExxonMobil PH",
    path: "/projects",
    type: "Project",
    cardMeta: "ExxonMobil Philippines Internship | Python | AI Chatbot",
    role: "Software Developer Intern",
    description:
      "AI chatbot and inquiry experience for oil and vehicle questions, built with Python and Streamlit-supported interaction flows.",
    owned:
      "AI inquiry flow development, Python backend support, and Streamlit-based interaction work for product questions.",
    constraint:
      "Customers needed faster, clearer answers to oil and vehicle questions without depending only on manual support.",
    result:
      "Made the first support layer more scalable and improved the clarity of product-related inquiries.",
    techStack: ["Python", "Streamlit", "AI Chatbot", "Support Workflow"],
    liveUrl: "https://exxonmobil1ph-ai-chatbot-mobi.streamlit.app",
    repoUrl: "https://github.com/MIGSNOLIMIT/ExxonMobil1Ph-AI-Chatbot",
    relatedIds: [
      "cluster-exxonmobil-ai-chatbot",
      "cluster-python-streamlit-chatbot-knowledge-base",
      "pillar-full-stack-developer",
    ],
  },
];

export const pillarPages = [
  {
    id: "pillar-home",
    slug: "",
    path: "/",
    type: "Pillar Page",
    title:
      "Full Stack Developer Portfolio in the Philippines | React, Next.js, Python",
    metaTitle:
      "Full Stack Developer Portfolio in the Philippines | Carlos Miguel Samson",
    metaDescription:
      "Explore a full stack developer portfolio with React, Next.js, Python, AI chatbot, CMS, and case study content built for real business workflows.",
    keyword: "full stack developer portfolio",
    intro:
      "I built this portfolio to do more than show a few polished screenshots. It is meant to show how I think through real product work across frontend, backend, content systems, and AI-assisted support flows.",
    sections: [
      {
        heading: "What This Developer Portfolio Covers",
        paragraphs: [
          "The projects here cover public-facing websites, internal dashboards, custom CMS work, and lightweight AI products. That mix reflects the kind of work I actually enjoy: builds where the code has to make sense for the business, not just pass a demo.",
          "Some of the strongest examples are a React and Next.js travel site, a Prisma and PostgreSQL-backed content platform, and AI assistants built to handle real support questions after office hours.",
        ],
        bullets: [
          "React and Next.js work for websites and dashboards",
          "Backend and data work using Node.js, Python, Prisma, and PostgreSQL",
          "AI assistants tied to actual business questions and content sources",
          "Case studies that explain the problem, the build, and the tradeoffs",
        ],
      },
      {
        heading: "Why the Site Is Structured This Way",
        paragraphs: [
          "One long homepage was not enough for the kind of work I wanted to show. Different people come in with different questions: some want to see full stack range, some care about React or Next.js, and some want proof through actual case studies.",
          "Breaking the site into broader topic pages and more specific supporting pages makes it easier to browse, and it also gives search engines clearer signals about what each page is really about.",
        ],
      },
      {
        heading: "Themes That Keep Showing Up in My Work",
        paragraphs: [
          "The same themes show up again and again in the projects on this site: clearer customer journeys, less manual admin work, and systems that help a team move faster without creating new messes later.",
        ],
        bullets: [
          "Frontend work that helps people understand what to do next",
          "Internal tools that give non-technical teams more control",
          "AI support flows that solve a narrow problem well",
          "Writeups that explain decisions instead of just listing tools",
        ],
      },
    ],
    relatedIds: [
      "pillar-full-stack-developer",
      "pillar-react-nextjs-developer",
      "pillar-web-development-case-studies",
      "projects-hub",
      "blog-hub",
    ],
  },
  {
    id: "pillar-full-stack-developer",
    slug: "full-stack-developer",
    path: "/full-stack-developer",
    type: "Pillar Page",
    title:
      "Full Stack Developer Portfolio: Building Business-Ready Web Products",
    metaTitle:
      "Full Stack Developer Portfolio for React, Python, and CMS Delivery",
    metaDescription:
      "See how a full stack developer portfolio can demonstrate frontend, backend, database, and AI-assisted product delivery across websites, admin systems, and chatbots.",
    keyword: "full stack developer portfolio",
    intro:
      "To me, full stack work is not about touching every layer just to say I did. It is about carrying a product from the user-facing experience all the way through the data, workflow, and maintenance decisions behind it.",
    sections: [
      {
        heading: "What Full Stack Delivery Means in Practice",
        paragraphs: [
          "In real projects, the work is rarely split into neat boxes. One day the problem is page structure and user trust. The next day it is roles, data relationships, or how a team updates content without asking a developer every time.",
          "The projects on this page show that kind of end-to-end thinking. Some are public websites, some are internal systems, and some are support tools built around a very specific operational gap.",
        ],
      },
      {
        heading: "Core Technical Coverage",
        bullets: [
          "React and Next.js for responsive interfaces and structured content",
          "Python and Streamlit for lightweight AI and operations tools",
          "Prisma and PostgreSQL for data models that need to stay clean over time",
          "Supabase and external APIs for content, media, and integrations",
        ],
      },
      {
        heading: "How I Want This Page to Be Read",
        paragraphs: [
          "I do not want this portfolio to read like a tool inventory. The more useful question is why a stack choice made sense for the problem: reducing missed inquiries, removing content bottlenecks, or making a complex service easier to understand.",
        ],
      },
    ],
    relatedIds: [
      "cluster-state101-travel-ai-assistant",
      "cluster-custom-cms-admin-dashboard",
      "cluster-exxonmobil-ai-chatbot",
      "cluster-nextjs-prisma-admin-dashboard-architecture",
      "blog-react-nextjs-dashboard-architecture",
    ],
  },
  {
    id: "pillar-react-nextjs-developer",
    slug: "react-nextjs-developer",
    path: "/react-nextjs-developer",
    type: "Pillar Page",
    title:
      "React and Next.js Developer Portfolio for Marketing Sites and Dashboards",
    metaTitle:
      "React and Next.js Developer Portfolio | Web Apps, Dashboards, SEO",
    metaDescription:
      "Browse React and Next.js developer work covering responsive websites, internal dashboards, and SEO-aware frontend architecture.",
    keyword: "react next.js developer portfolio",
    intro:
      "Most of my React and Next.js work lives somewhere between product thinking and frontend engineering. I care about whether the interface makes a task clearer, whether the structure will scale, and whether the codebase stays workable after the first release.",
    sections: [
      {
        heading: "Frontend Work Beyond Components",
        paragraphs: [
          "The frontend work I value most is not about adding more sections or effects. It is about helping people understand a service, finish a task, or operate a system with less confusion.",
          "That shows up differently across projects. A public website needs trust and clear hierarchy. An internal dashboard needs predictable flows and cleaner structure. The same tools are involved, but the priorities change.",
        ],
      },
      {
        heading: "Frontend Themes on This Site",
        bullets: [
          "Responsive layouts for service businesses",
          "Dashboard interfaces that support real operations work",
          "Reusable sections and content patterns that stay maintainable",
          "Route and metadata decisions that help the site stay readable and searchable",
        ],
      },
    ],
    relatedIds: [
      "cluster-react-travel-website-conversion-ux",
      "cluster-react-portfolio-seo-architecture",
      "cluster-nextjs-prisma-admin-dashboard-architecture",
      "blog-seo-react-portfolio-architecture",
      "projects-hub",
    ],
  },
  {
    id: "pillar-web-development-case-studies",
    slug: "web-development-case-studies",
    path: "/web-development-case-studies",
    type: "Pillar Page",
    title: "Web Development Case Studies: Travel, CMS, and AI Product Delivery",
    metaTitle:
      "Web Development Case Studies | Travel Websites, CMS, AI Chatbots",
    metaDescription:
      "Read web development case studies covering travel websites, custom CMS architecture, and AI chatbot workflows tied to real business use cases.",
    keyword: "web development case studies",
    intro:
      "Case studies are where the portfolio becomes believable. Instead of saying I can build something, these pages show what the problem was, what I chose to build, and why that choice made sense for the client or team.",
    sections: [
      {
        heading: "What I Try to Show in a Case Study",
        paragraphs: [
          "I want the reader to understand the messy part, not just the final result. That means showing the business constraint, the build decisions, and the practical outcome instead of jumping straight to screenshots and tech names.",
        ],
        bullets: [
          "What the team or client was struggling with",
          "How the product or system was shaped around that problem",
          "Which frontend, backend, or workflow decisions mattered most",
          "What changed after the build was in place",
        ],
      },
      {
        heading: "Why This Matters for Hiring",
        paragraphs: [
          "A project gallery can show range, but case studies show judgment. They make it easier to see how I handle tradeoffs, incomplete requirements, and the gap between a technical idea and a usable result.",
        ],
      },
    ],
    relatedIds: [
      "cluster-state101-travel-ai-assistant",
      "cluster-custom-cms-admin-dashboard",
      "cluster-exxonmobil-ai-chatbot",
      "blog-travel-booking-case-study",
      "projects-hub",
    ],
  },
];

export const clusterPages = [
  {
    id: "cluster-state101-travel-ai-assistant",
    slug: "state101-travel-ai-assistant",
    path: "/case-studies/state101-travel-ai-assistant",
    type: "Case Study",
    title:
      "State101 Travel AI Assistant Case Study: Handling After-Hours Travel Inquiries",
    metaTitle:
      "State101 Travel AI Assistant Case Study | Python, Streamlit, Groq API",
    metaDescription:
      "A technical case study on building a Streamlit and Groq-powered travel AI assistant that answers after-hours customer questions using a company knowledge base.",
    keyword: "travel ai assistant case study",
    intro:
      "This project came from a simple problem with real cost behind it: people were asking about travel and visa services after office hours, and those inquiries could sit unanswered until the next day. The goal was to give the business a fast first response without turning the experience into generic chatbot fluff.",
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "Travel and visa inquiries often come in when people finally have time to ask questions, which is not always during business hours. A delayed reply can mean lost momentum, repeated manual work, or answers that depend too much on which staff member responds later.",
        ],
      },
      {
        heading: "Solution",
        paragraphs: [
          "I built the assistant with Python and Streamlit because speed mattered more than building a custom frontend from scratch. The responses were grounded in company information so the bot could stay close to the actual services, processes, and common customer questions.",
          "I also kept the content operations lightweight. The system needed to be maintainable by the business, not just technically interesting to build.",
        ],
        bullets: [
          "Streamlit UI for a fast and usable support flow",
          "Groq-powered model orchestration for conversational answers",
          "Knowledge-base grounding so replies stayed relevant",
          "Google Sheets-connected workflows for simple content updates",
        ],
      },
      {
        heading: "Impact",
        paragraphs: [
          "The result was a lightweight assistant that processed approximately 60-100 customer inquiries per week during deployment. It reduced the manual response workload, covered the first layer of support when staff were unavailable, and created a better handoff into human follow-up when needed.",
        ],
      },
    ],
    relatedIds: [
      "pillar-full-stack-developer",
      "pillar-web-development-case-studies",
      "cluster-python-streamlit-chatbot-knowledge-base",
      "blog-google-sheets-ai-assistant-ops",
      "projects-hub",
    ],
    projectIds: ["project-state101-ai"],
  },
  {
    id: "cluster-custom-cms-admin-dashboard",
    slug: "custom-cms-admin-dashboard",
    path: "/case-studies/custom-cms-admin-dashboard",
    type: "Case Study",
    title:
      "Custom CMS and Admin Dashboard Case Study: Content Control Without Bottlenecks",
    metaTitle:
      "Custom CMS Case Study | Next.js, Prisma, PostgreSQL, Supabase",
    metaDescription:
      "See how a custom CMS and admin dashboard was built with Next.js, Prisma, PostgreSQL, and Supabase to reduce content update bottlenecks.",
    keyword: "custom cms admin dashboard case study",
    intro:
      "This platform started with a practical operations problem: the business needed to review a growing visa application workload while also updating content, managing media, and controlling access without asking a developer to step in for every small change.",
    sections: [
      {
        heading: "Business Constraint",
        paragraphs: [
          "Manual update requests create drag fast. Once content, branding, media, and user permissions all start living in different places, even small edits turn into unnecessary back-and-forth between the team and engineering.",
        ],
      },
      {
        heading: "Implementation",
        paragraphs: [
          "I used Next.js and React for the admin experience, Prisma and PostgreSQL for the data model, and Supabase-backed media handling for assets. The platform also included role-based access for 15 internal users, audit logs, and editable modules across 4 website pages so the system felt practical to operate, not just complete on paper.",
        ],
        bullets: [
          "Role-based access to reduce accidental changes",
          "Rich text and media flows built for non-technical users",
          "Audit logging for visibility and accountability",
          "Editable branding and content modules for faster updates",
        ],
      },
      {
        heading: "Result",
        paragraphs: [
          "The centralized applicant management system supported 50+ visa applications per week. It also gave 5 administrators and 10 content editors more independence over day-to-day work, creating a cleaner operational base instead of scaling through more developer requests.",
        ],
      },
    ],
    relatedIds: [
      "pillar-full-stack-developer",
      "pillar-web-development-case-studies",
      "cluster-nextjs-prisma-admin-dashboard-architecture",
      "blog-react-nextjs-dashboard-architecture",
      "projects-hub",
    ],
    projectIds: ["project-custom-cms"],
  },
  {
    id: "cluster-exxonmobil-ai-chatbot",
    slug: "exxonmobil-ai-chatbot",
    path: "/case-studies/exxonmobil-ai-chatbot",
    type: "Case Study",
    title:
      "ExxonMobil PH AI Chatbot Case Study: Scalable Answers for Product Questions",
    metaTitle:
      "ExxonMobil PH AI Chatbot Case Study | Python and Streamlit",
    metaDescription:
      "A case study on building an AI chatbot and inquiry flow for oil and vehicle questions using Python and Streamlit-supported interactions.",
    keyword: "ai chatbot case study python streamlit",
    intro:
      "This chatbot project was about handling product questions at scale without making the support experience feel detached. The challenge was not just adding AI, but making it easier for people to get useful answers about oils, vehicles, and related concerns.",
    sections: [
      {
        heading: "Support Challenge",
        paragraphs: [
          "People looking up vehicle or product information usually want quick clarity before they are ready to contact a representative. If that first touchpoint is confusing or thin, trust drops early.",
        ],
      },
      {
        heading: "Technical Approach",
        paragraphs: [
          "The solution combined an inquiry site with AI-assisted responses, using Python for the backend logic and Streamlit-backed flows for interaction. I treated the chatbot as part of the support journey, not as a widget to drop on the page and call finished.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The result was a clearer first-response layer that could handle more questions before a human handoff. That made the experience more scalable while still keeping the focus on usefulness and clarity.",
        ],
      },
    ],
    relatedIds: [
      "pillar-full-stack-developer",
      "pillar-web-development-case-studies",
      "cluster-python-streamlit-chatbot-knowledge-base",
      "projects-hub",
      "blog-travel-booking-case-study",
    ],
    projectIds: ["project-exxonmobil-ai"],
  },
  {
    id: "cluster-python-streamlit-chatbot-knowledge-base",
    slug: "python-streamlit-chatbot-knowledge-base",
    path: "/engineering/python-streamlit-chatbot-knowledge-base",
    type: "Engineering Breakdown",
    title:
      "Python Streamlit Chatbot Knowledge Base Architecture for Customer Support",
    metaTitle:
      "Python Streamlit Chatbot Architecture | Knowledge Base Support Workflows",
    metaDescription:
      "Learn how Python and Streamlit can support lightweight knowledge-base chatbot workflows for customer inquiries and business operations.",
    keyword: "python streamlit chatbot architecture",
    intro:
      "Python and Streamlit are a practical pair when the goal is to ship an AI support flow quickly and learn from real use. I like this stack when the problem is operational, the scope is clear, and spending weeks on frontend setup would not improve the product.",
    sections: [
      {
        heading: "Why Streamlit Works for This Kind of Product",
        paragraphs: [
          "Streamlit removes a lot of frontend overhead, which makes it easier to focus on the actual value of the tool: the support flow, the content quality, and whether the assistant helps at all. That matters more than pixel perfection when a team is still shaping the workflow.",
        ],
      },
      {
        heading: "Core Architecture Considerations",
        bullets: [
          "Clean query handling and conversation state",
          "Knowledge-base retrieval or structured context assembly",
          "Response generation grounded in business-specific content",
          "A simple operations path for updating the underlying information",
        ],
      },
      {
        heading: "Best Fit Use Cases",
        paragraphs: [
          "This setup works best for narrow, useful problems: after-hours support, product FAQs, internal guidance, or early workflow automation. I would not reach for it first if the real requirement was a highly custom web app from day one.",
        ],
      },
    ],
    relatedIds: [
      "pillar-full-stack-developer",
      "cluster-state101-travel-ai-assistant",
      "cluster-exxonmobil-ai-chatbot",
      "blog-google-sheets-ai-assistant-ops",
      "blog-travel-booking-case-study",
    ],
    projectIds: ["project-state101-ai", "project-exxonmobil-ai"],
  },
  {
    id: "cluster-nextjs-prisma-admin-dashboard-architecture",
    slug: "nextjs-prisma-admin-dashboard-architecture",
    path: "/engineering/nextjs-prisma-admin-dashboard-architecture",
    type: "Engineering Breakdown",
    title:
      "Next.js and Prisma Admin Dashboard Architecture for Internal Operations",
    metaTitle:
      "Next.js Prisma Admin Dashboard Architecture | Internal CMS Systems",
    metaDescription:
      "An engineering breakdown of Next.js, Prisma, and PostgreSQL architecture for internal dashboards, CMS workflows, and role-based content operations.",
    keyword: "next.js prisma admin dashboard architecture",
    intro:
      "Internal dashboards ask for a different kind of care than marketing sites. They have to support permissions, logging, data integrity, and everyday usability at the same time, which is why the architecture matters so much.",
    sections: [
      {
        heading: "Data and Access Design",
        paragraphs: [
          "Prisma and PostgreSQL are a strong fit when the data relationships need to stay clear over time. Once you add roles, content modules, media, and audit trails, the model has to be easy to reason about or the UI becomes harder to trust.",
        ],
      },
      {
        heading: "Why Next.js Fits the UI Layer",
        paragraphs: [
          "Next.js works well for admin interfaces because it keeps routes, data dependencies, and reusable UI structure organized. Even though SEO is not the point here, the framework still helps keep the product maintainable as the system grows.",
        ],
        bullets: [
          "Clear route organization",
          "Reusable admin components",
          "Separation between modules instead of one giant settings page",
          "Patterns that can grow with the product",
        ],
      },
      {
        heading: "Operational Payoff",
        paragraphs: [
          "The real payoff is operational. A good admin platform shortens update cycles, improves accountability, and gives the business more room to move without relying on engineering for every routine task.",
        ],
      },
    ],
    relatedIds: [
      "pillar-full-stack-developer",
      "pillar-react-nextjs-developer",
      "cluster-custom-cms-admin-dashboard",
      "blog-react-nextjs-dashboard-architecture",
      "projects-hub",
    ],
    projectIds: ["project-custom-cms"],
  },
  {
    id: "cluster-react-travel-website-conversion-ux",
    slug: "react-travel-website-conversion-ux",
    path: "/engineering/react-travel-website-conversion-ux",
    type: "Engineering Breakdown",
    title:
      "React and Next.js Travel Website UX: Structuring Trust and Conversion",
    metaTitle:
      "React Travel Website UX | Next.js Service Website Architecture",
    metaDescription:
      "Explore how React and Next.js can support travel website UX, service clarity, and a stronger customer inquiry path.",
    keyword: "react next.js travel website ux",
    intro:
      "Travel websites have to do more than look polished. They need to reduce uncertainty fast, especially when the services are a mix of tours, flights, visas, and custom assistance.",
    sections: [
      {
        heading: "Why Service Architecture Matters",
        paragraphs: [
          "When one business offers several travel-related services, the homepage can get confusing quickly. Good structure helps people understand what is offered, which service applies to them, and how to ask the next question without digging around.",
        ],
      },
      {
        heading: "Practical Frontend Priorities",
        bullets: [
          "Responsive layouts that keep inquiry actions visible",
          "Service blocks with clear hierarchy and trust cues",
          "Homepage flow that helps a visitor move toward contact",
          "Copy and layout that simplify a complex set of services",
        ],
      },
      {
        heading: "Business Result",
        paragraphs: [
          "A stronger result here is not just a prettier site. The STATE101 public website supported approximately 300+ monthly visitors, while the Lindela launch contributed to an estimated 70% increase in website visits and customer inquiries. Clearer structure helped turn frontend decisions into measurable business value.",
        ],
      },
    ],
    relatedIds: [
      "pillar-react-nextjs-developer",
      "pillar-web-development-case-studies",
      "projects-hub",
      "blog-travel-booking-case-study",
      "project-state101-website",
    ],
    projectIds: ["project-state101-website", "project-lindela-website"],
  },
  {
    id: "cluster-react-portfolio-seo-architecture",
    slug: "react-portfolio-seo-architecture",
    path: "/engineering/react-portfolio-seo-architecture",
    type: "Engineering Breakdown",
    title:
      "SEO-Friendly React Portfolio Architecture: Pillars, Clusters, and Internal Links",
    metaTitle:
      "SEO-Friendly React Portfolio Architecture | Pillar and Cluster Strategy",
    metaDescription:
      "See how a React portfolio can be structured into pillar pages, cluster pages, metadata, schema, and internal links for stronger search visibility.",
    keyword: "seo-friendly react portfolio architecture",
    intro:
      "I did not want this portfolio to stop at a homepage and a few project cards. I wanted it to explain the work from a few angles, which is why the site is structured around topic pages, case studies, and supporting articles.",
    sections: [
      {
        heading: "How the Structure Works",
        paragraphs: [
          "The site uses broader topic pages for the main themes and narrower pages for specific projects or technical questions. That makes the content easier to navigate and gives the site a cleaner shape than forcing everything into one place.",
        ],
        bullets: [
          "Pillar pages for broad topics like full stack or React work",
          "Supporting pages for case studies and technical breakdowns",
          "Blog posts that add context instead of repeating the same summary",
          "Metadata, schema, and canonicals to keep indexing cleaner",
        ],
      },
      {
        heading: "Why I Think This Helps",
        paragraphs: [
          "A recruiter might start broad, while another person might search for something very specific like a Next.js admin dashboard or a custom CMS writeup. This structure gives both of them a reasonable entry point without making the site feel like a keyword dump.",
        ],
      },
    ],
    relatedIds: [
      "pillar-home",
      "pillar-react-nextjs-developer",
      "blog-seo-react-portfolio-architecture",
      "projects-hub",
      "blog-hub",
    ],
  },
];

export const blogCategories = [
  {
    id: "category-development-case-studies",
    slug: "development-case-studies",
    path: "/blog/category/development-case-studies",
    type: "Blog Category",
    title: "Development Case Studies",
    description:
      "Project stories focused on the problem, the build, and what changed afterward.",
  },
  {
    id: "category-seo-engineering-insights",
    slug: "seo-engineering-insights",
    path: "/blog/category/seo-engineering-insights",
    type: "Blog Category",
    title: "SEO Engineering Insights",
    description:
      "Notes on metadata, structure, and how I made the portfolio easier to find and navigate.",
  },
  {
    id: "category-project-breakdowns",
    slug: "project-breakdowns",
    path: "/blog/category/project-breakdowns",
    type: "Blog Category",
    title: "Project Breakdowns",
    description:
      "Build notes about implementation choices behind real client and portfolio work.",
  },
  {
    id: "category-system-design-explanations",
    slug: "system-design-explanations",
    path: "/blog/category/system-design-explanations",
    type: "Blog Category",
    title: "System Design Explanations",
    description:
      "Architecture notes on internal tools, data models, and operational workflows.",
  },
];

export const blogPosts = [
  {
    id: "blog-travel-booking-case-study",
    slug: "travel-ai-chatbot-case-study-for-after-hours-support",
    path: "/blog/travel-ai-chatbot-case-study-for-after-hours-support",
    type: "Blog Post",
    title:
      "Travel AI Chatbot Case Study: Designing After-Hours Support That Still Feels Human",
    metaTitle:
      "Travel AI Chatbot Case Study for After-Hours Customer Support",
    metaDescription:
      "A blog post explaining how an AI travel assistant can reduce missed after-hours inquiries with knowledge-base-driven responses.",
    keyword: "travel ai chatbot case study",
    categoryId: "category-development-case-studies",
    publishedAt: "2026-05-20",
    intro:
      "A lot of businesses do not need a huge AI rollout. They need a good first response when someone asks a question after office hours. That was the real point of this kind of build.",
    learningPoints: [
      "Why after-hours support is a workflow problem before it is an AI problem",
      "How to keep a chatbot focused on a narrow job it can do well",
      "What makes a lightweight assistant useful in a real business setting",
      "How this kind of project shows product thinking, not just model usage",
    ],
    tips: [
      "Start with the repeated customer questions before you pick tools.",
      "Define which questions can be answered safely and which should wait for a human.",
      "Keep the language grounded in the actual business process.",
      "Judge the result by clarity and response speed, not by how clever the bot sounds.",
    ],
    nextSteps: [
      "Map one real support flow from first message to human handoff.",
      "Open the State101 case study to see this pattern in a live project.",
      "Read the Streamlit architecture page if you want the implementation angle.",
    ],
    sections: [
      {
        heading: "The Real Problem Was Timing",
        paragraphs: [
          "The company did not need to replace a support team. It needed a way to answer the first wave of questions when no one was online. Once I framed it that way, the product became much easier to design.",
        ],
      },
      {
        heading: "The Stack Needed to Be Fast and Practical",
        paragraphs: [
          "Python and Streamlit let me move quickly, while the knowledge-base workflow kept the answers tied to company information instead of generic model behavior. For a narrow support tool, that tradeoff made a lot more sense than overbuilding the UI.",
        ],
      },
      {
        heading: "Why I Like Showing Work Like This",
        paragraphs: [
          "This kind of project shows more than prompt experimentation. It shows that I can take a messy business gap, narrow it into a useful product, and choose a stack that matches the actual job.",
        ],
      },
    ],
    relatedIds: [
      "cluster-state101-travel-ai-assistant",
      "cluster-python-streamlit-chatbot-knowledge-base",
      "pillar-web-development-case-studies",
      "projects-hub",
    ],
  },
  {
    id: "blog-service-website-structure",
    slug: "how-i-structure-travel-and-visa-service-websites",
    path: "/blog/how-i-structure-travel-and-visa-service-websites",
    type: "Blog Post",
    title:
      "How I Structure Travel and Visa Service Websites So People Know What to Do Next",
    metaTitle:
      "How I Structure Travel and Visa Service Websites | Frontend UX Notes",
    metaDescription:
      "A practical breakdown of how I think about content hierarchy, trust signals, and inquiry flow when building travel and visa service websites.",
    keyword: "travel service website structure",
    categoryId: "category-project-breakdowns",
    publishedAt: "2026-05-20",
    intro:
      "When I build service websites, I usually start with the confusion. On travel and visa sites, people are often trying to figure out what the business actually offers, whether it feels trustworthy, and what they should do next.",
    learningPoints: [
      "How I structure service websites around user uncertainty",
      "Why hierarchy matters more than adding more homepage sections",
      "What usually improves inquiry flow the fastest",
      "Where trust cues actually help on this kind of site",
    ],
    tips: [
      "List the first questions a visitor is likely to ask before laying out the page.",
      "Keep inquiry actions visible on mobile.",
      "Group related services so the page feels easier to scan.",
      "Put trust cues near the places where a visitor is likely to hesitate.",
    ],
    nextSteps: [
      "Audit your homepage and mark the spots where a visitor may still feel unsure.",
      "Read the travel website engineering breakdown for the frontend version of this idea.",
      "Compare your current service hierarchy against the questions users bring with them.",
    ],
    sections: [
      {
        heading: "I Start With the Questions People Already Have",
        paragraphs: [
          "On a travel or visa site, people usually want three answers quickly: what the business helps with, whether it looks credible, and how to ask about their case. If those answers are buried, the site can still look polished but it will not feel useful.",
        ],
      },
      {
        heading: "Hierarchy Usually Matters More Than More Content",
        paragraphs: [
          "I would rather have a cleaner homepage with clearer service grouping than a long page filled with extra sections that say the same thing. Good hierarchy reduces friction faster than decoration does.",
        ],
      },
      {
        heading: "What I Usually Try to Fix",
        paragraphs: [
          "Most of the gains come from clearer service blocks, smoother mobile reading, and fewer moments where the visitor has to guess what the company actually does. That usually matters more than adding one more visual flourish.",
        ],
      },
    ],
    relatedIds: [
      "cluster-react-travel-website-conversion-ux",
      "pillar-react-nextjs-developer",
      "pillar-web-development-case-studies",
      "projects-hub",
    ],
  },
  {
    id: "blog-react-nextjs-dashboard-architecture",
    slug: "react-nextjs-dashboard-architecture-for-content-operations",
    path: "/blog/react-nextjs-dashboard-architecture-for-content-operations",
    type: "Blog Post",
    title:
      "React and Next.js Dashboard Architecture for Content Operations Teams",
    metaTitle:
      "React Next.js Dashboard Architecture for Content Operations",
    metaDescription:
      "A project breakdown of dashboard architecture decisions for content operations, permissions, and media workflows using React, Next.js, and Prisma.",
    keyword: "react next.js dashboard architecture",
    categoryId: "category-system-design-explanations",
    publishedAt: "2026-05-20",
    intro:
      "A dashboard can look finished in screenshots and still be annoying to use every day. For internal tools, I care a lot more about whether the workflow feels clear to the team operating it.",
    learningPoints: [
      "Why internal dashboards should be treated like products for operators",
      "How the data model affects usability more than people expect",
      "What makes a content-heavy dashboard easier to maintain",
      "How architecture choices affect team speed and dependency on developers",
    ],
    tips: [
      "Map roles and permissions before designing the interface.",
      "Keep the content model clean enough that the UI can follow it naturally.",
      "Treat logs and permissions as core product features.",
      "If simple updates still need a developer, the dashboard is not doing enough yet.",
    ],
    nextSteps: [
      "Read the custom CMS case study for the business context behind this architecture.",
      "Sketch the roles and approval flow your admin product really needs.",
      "Open the Prisma and Next.js architecture article for the deeper system view.",
    ],
    sections: [
      {
        heading: "Admin Platforms Are Operations Products",
        paragraphs: [
          "An internal CMS is not just a bunch of forms. It is an operations product, which means permissions, logging, and structure directly affect how fast the team can move and how risky mistakes become.",
        ],
      },
      {
        heading: "The Data Model Shapes the UX",
        paragraphs: [
          "Prisma and PostgreSQL helped because roles, media, audit trails, and content modules could all be modeled clearly. When the data model is messy, the dashboard usually feels messy too.",
        ],
      },
      {
        heading: "The Best Dashboards Reduce Dependencies",
        paragraphs: [
          "The real win is when the business can move faster without waiting on developers for ordinary work. That is why workflow design and access control matter more to me than flashy admin UI patterns.",
        ],
      },
    ],
    relatedIds: [
      "cluster-custom-cms-admin-dashboard",
      "cluster-nextjs-prisma-admin-dashboard-architecture",
      "pillar-full-stack-developer",
      "projects-hub",
    ],
  },
  {
    id: "blog-custom-cms-worth-building",
    slug: "what-makes-a-custom-cms-worth-building",
    path: "/blog/what-makes-a-custom-cms-worth-building",
    type: "Blog Post",
    title: "What Makes a Custom CMS Worth Building Instead of Using a Generic Tool",
    metaTitle: "When a Custom CMS Is Worth Building | Full Stack Product Notes",
    metaDescription:
      "My thinking on when a business should build a custom CMS instead of relying on a generic content management tool.",
    keyword: "when to build a custom cms",
    categoryId: "category-system-design-explanations",
    publishedAt: "2026-05-20",
    intro:
      "I do not think a custom CMS is automatically the smart choice. Most teams should use something simpler unless the workflow itself keeps fighting the tool.",
    learningPoints: [
      "How I judge whether a generic CMS is enough",
      "What repeated workflow friction usually points to",
      "Why editorial complexity matters more than raw page count",
      "How to frame CMS decisions around independence and speed",
    ],
    tips: [
      "Do not recommend a custom CMS just because 'more control' sounds nice.",
      "Watch for repeated update bottlenecks and brittle manual work.",
      "Separate simple editing pain from deeper workflow pain.",
      "Be clear about the actual goal: speed, consistency, governance, or autonomy.",
    ],
    nextSteps: [
      "List the content tasks the business still has to escalate to developers.",
      "Read the custom CMS case study to see this friction in a real build.",
      "Open the dashboard architecture post for the technical follow-up.",
    ],
    sections: [
      {
        heading: "A Generic CMS Breaks Down When the Workflow Gets Specific",
        paragraphs: [
          "The moment a team needs custom permissions, editorial rules, media handling, audit trails, or business-specific modules, the CMS stops being just a publishing tool. At that point, the workflow itself starts becoming part of the product.",
        ],
      },
      {
        heading: "I Look for Repeated Friction First",
        paragraphs: [
          "If the team keeps needing developer help for updates, role changes, or simple consistency checks, that is usually the stronger signal. Repeated friction gets expensive even when each individual request looks small.",
        ],
      },
      {
        heading: "The Best Outcome Is Operational Independence",
        paragraphs: [
          "A good custom CMS gives the business more control over routine work without turning every edit into a dev ticket. That is the payoff I care about most.",
        ],
      },
    ],
    relatedIds: [
      "cluster-custom-cms-admin-dashboard",
      "cluster-nextjs-prisma-admin-dashboard-architecture",
      "pillar-full-stack-developer",
      "projects-hub",
    ],
  },
  {
    id: "blog-seo-react-portfolio-architecture",
    slug: "seo-engineering-for-react-portfolio-websites",
    path: "/blog/seo-engineering-for-react-portfolio-websites",
    type: "Blog Post",
    title:
      "SEO Engineering for React Portfolio Websites: Making the Work Easier to Find",
    metaTitle:
      "SEO Engineering for React Portfolio Websites | Structure and Internal Links",
    metaDescription:
      "How I structured a React portfolio with topic pages, supporting content, schema, and internal links so the work is easier to find.",
    keyword: "seo engineering react portfolio website",
    categoryId: "category-seo-engineering-insights",
    publishedAt: "2026-05-20",
    intro:
      "I did not want this portfolio to rely only on my name or a single homepage. I wanted the site to explain different parts of my work clearly enough that someone could land on a specific topic page and still understand what I do.",
    learningPoints: [
      "Why a portfolio needs structure if you want it to rank beyond branded searches",
      "How broad pages and supporting pages work together",
      "What metadata and schema help with in practice",
      "Why I think of SEO as site structure, not a separate layer",
    ],
    tips: [
      "Give each page one clear job.",
      "Use internal links when they answer the next obvious question.",
      "Write around real projects and decisions, not random keywords.",
      "Do not make every page sound like the same sales pitch.",
    ],
    nextSteps: [
      "Read the internal-linking post next for the more practical follow-up.",
      "Open the portfolio architecture page if you want the system view.",
      "Check your site for pages that still feel disconnected from the rest.",
    ],
    sections: [
      {
        heading: "The Problem With Thin Portfolio Content",
        paragraphs: [
          "A lot of portfolios look good but explain very little. If everything lives on one homepage or one grid of projects, it is harder for both people and search engines to understand what kind of work you actually want to be found for.",
        ],
      },
      {
        heading: "What Worked Better for Me",
        paragraphs: [
          "A broader page for the main topic plus narrower supporting pages gave the site more shape. It let me keep the overview pages simple while giving the project and technical details their own space.",
        ],
      },
      {
        heading: "Why Internal Links Matter",
        paragraphs: [
          "Internal links are where the structure starts feeling useful instead of theoretical. If one page raises the next obvious question, another page should be there to answer it.",
        ],
      },
    ],
    relatedIds: [
      "cluster-react-portfolio-seo-architecture",
      "pillar-react-nextjs-developer",
      "pillar-home",
      "blog-hub",
    ],
  },
  {
    id: "blog-developer-portfolio-internal-links",
    slug: "how-i-think-about-internal-linking-on-developer-portfolios",
    path: "/blog/how-i-think-about-internal-linking-on-developer-portfolios",
    type: "Blog Post",
    title:
      "How I Think About Internal Linking on Developer Portfolios Without Making Them Feel Weird",
    metaTitle:
      "Internal Linking for Developer Portfolios | Personal SEO Notes",
    metaDescription:
      "A practical explanation of how I approach internal linking on developer portfolio sites so they feel useful to people and clearer to search engines.",
    keyword: "internal linking developer portfolio",
    categoryId: "category-seo-engineering-insights",
    publishedAt: "2026-05-20",
    intro:
      "Internal linking is one of those things that can make a portfolio feel thoughtful or instantly fake. The difference is whether the links genuinely help the reader keep going.",
    learningPoints: [
      "How to make internal links feel useful instead of forced",
      "What I look for when choosing the next page to link to",
      "How broader pages and deeper pages can support each other",
      "What makes a portfolio still feel human while being SEO-aware",
    ],
    tips: [
      "Link to the page that answers the next obvious question.",
      "Do not repeat the same anchor text everywhere.",
      "Give broad pages a few different paths forward.",
      "If a page has no natural links in or out, its purpose may be unclear.",
    ],
    nextSteps: [
      "Open one topic page and trace whether the links feel natural.",
      "Compare this with the SEO architecture article for the bigger picture.",
      "Review your projects page and add links that explain the work, not just the demo.",
    ],
    sections: [
      {
        heading: "I Treat Links Like Continuations, Not Decorations",
        paragraphs: [
          "If a page mentions a dashboard, an AI assistant, or a CMS workflow, I want the next link to answer the follow-up question a reader is likely to have. That usually means a case study, a project page, or a technical breakdown, not a random keyword link.",
        ],
      },
      {
        heading: "The Best Links Feel Like Helpful Routing",
        paragraphs: [
          "When someone lands on a broad page, the next step should feel obvious. They might want a real example, a deeper technical explanation, or a simpler summary. Good internal linking gives them those choices without making the page feel crowded.",
        ],
      },
      {
        heading: "Why This Matters for Portfolio Credibility",
        paragraphs: [
          "A portfolio should still feel like it belongs to a real person. The links should make the work easier to understand, not make the site sound like it is trying to rank for every phrase it can find.",
        ],
      },
    ],
    relatedIds: [
      "cluster-react-portfolio-seo-architecture",
      "pillar-home",
      "pillar-react-nextjs-developer",
      "blog-hub",
    ],
  },
  {
    id: "blog-google-sheets-ai-assistant-ops",
    slug: "google-sheets-operations-for-ai-assistant-content",
    path: "/blog/google-sheets-operations-for-ai-assistant-content",
    type: "Blog Post",
    title:
      "Google Sheets Operations for AI Assistant Content and Lightweight Admin Workflows",
    metaTitle:
      "Google Sheets Operations for AI Assistant Content Workflows",
    metaDescription:
      "A project breakdown of using Google Sheets APIs for AI assistant content operations and lightweight admin systems.",
    keyword: "google sheets ai assistant workflow",
    categoryId: "category-project-breakdowns",
    publishedAt: "2026-05-20",
    intro:
      "I like lightweight admin workflows when the problem is still simple. Sometimes Google Sheets is enough to keep AI assistant content maintainable without stopping the project to build a full back office first.",
    learningPoints: [
      "Why a lightweight workflow can beat a full admin panel early on",
      "How Google Sheets can work as an operational content layer",
      "What the API integration actually solves",
      "Where this approach starts to break down",
    ],
    tips: [
      "Use spreadsheet-backed workflows only while the data shape is still simple.",
      "Set naming and ownership rules before multiple people edit the file.",
      "Test how content changes appear in the assistant before trusting the workflow.",
      "Move to a stronger admin model once permissions and relationships get more complex.",
    ],
    nextSteps: [
      "Identify one workflow in your project that does not need a full admin panel yet.",
      "Read the State101 AI assistant case study for the business side of this pattern.",
      "Follow up with the Streamlit MVP post for the broader product tradeoffs.",
    ],
    sections: [
      {
        heading: "Why Lightweight Admin Models Matter",
        paragraphs: [
          "Teams often need an editable source of truth before they need a custom back office. Google Sheets can fill that gap when the data model is simple, the users are already comfortable with spreadsheets, and speed matters more than polish.",
        ],
      },
      {
        heading: "What the API Layer Solves",
        paragraphs: [
          "The API layer turns the spreadsheet into something operational instead of passive. It gives the business a way to update support content or references without touching application code for every small revision.",
        ],
      },
      {
        heading: "Where I Would Stop Using It",
        paragraphs: [
          "This works best for lightweight operational needs. Once the data gets deeply relational, permission-heavy, or highly sensitive, I would rather move to a stronger admin model than keep stretching a spreadsheet.",
        ],
      },
    ],
    relatedIds: [
      "cluster-state101-travel-ai-assistant",
      "cluster-python-streamlit-chatbot-knowledge-base",
      "pillar-full-stack-developer",
      "blog-hub",
    ],
  },
  {
    id: "blog-streamlit-ai-mvps",
    slug: "when-i-use-streamlit-for-ai-product-mvps",
    path: "/blog/when-i-use-streamlit-for-ai-product-mvps",
    type: "Blog Post",
    title: "When I Use Streamlit for AI Product MVPs and When I Would Not",
    metaTitle: "When to Use Streamlit for AI MVPs | Python Product Notes",
    metaDescription:
      "A practical look at when Streamlit is a strong choice for AI MVPs, customer-support tools, and lightweight internal products.",
    keyword: "when to use streamlit for ai mvp",
    categoryId: "category-system-design-explanations",
    publishedAt: "2026-05-20",
    intro:
      "I like Streamlit when the product question is clear and the team needs something usable quickly. I would not use it for everything, but it is a strong choice when the value is in the workflow more than the frontend polish.",
    learningPoints: [
      "When Streamlit is a strong product decision",
      "How I separate MVP speed from long-term frontend needs",
      "What kinds of workflow products fit it well",
      "Why a pragmatic stack choice still says something good about engineering judgment",
    ],
    tips: [
      "Use Streamlit when the interaction itself is the product value.",
      "Do not let speed hide an unclear workflow.",
      "Keep the interface simple enough that people focus on the task.",
      "Reassess once the product needs richer client-side behavior.",
    ],
    nextSteps: [
      "List the features that are actually essential for version one.",
      "Read the chatbot architecture article for the supporting system view.",
      "Compare your frontend expectations against the real needs of the MVP.",
    ],
    sections: [
      {
        heading: "Where Streamlit Helps Me Move Fast",
        paragraphs: [
          "If the product is centered on a prompt flow, knowledge-base interaction, support assistant, or lightweight internal workflow, Streamlit cuts out a lot of setup. That lets me focus on whether the interaction is actually useful.",
        ],
      },
      {
        heading: "Where I Start Getting More Cautious",
        paragraphs: [
          "Once the product needs highly custom interactions, more complex account flows, or heavier client-side behavior, I start thinking about moving toward a more traditional web app stack.",
        ],
      },
      {
        heading: "Why I Still Put It in a Full Stack Portfolio",
        paragraphs: [
          "Choosing a practical stack is still an engineering decision. Using Streamlit for the right problem shows judgment, especially when the goal is to validate a support or operations workflow quickly.",
        ],
      },
    ],
    relatedIds: [
      "cluster-python-streamlit-chatbot-knowledge-base",
      "cluster-state101-travel-ai-assistant",
      "cluster-exxonmobil-ai-chatbot",
      "pillar-full-stack-developer",
    ],
  },
  {
    id: "blog-after-hours-support-systems",
    slug: "turning-missed-after-hours-inquiries-into-a-support-workflow",
    path: "/blog/turning-missed-after-hours-inquiries-into-a-support-workflow",
    type: "Blog Post",
    title:
      "Turning Missed After-Hours Inquiries Into a Real Support Workflow",
    metaTitle:
      "After-Hours Inquiry Support Workflow | AI Assistant Product Thinking",
    metaDescription:
      "A case-study-style blog post on turning missed after-hours customer inquiries into a repeatable support workflow with AI assistance.",
    keyword: "after-hours inquiry support workflow",
    categoryId: "category-development-case-studies",
    publishedAt: "2026-05-20",
    intro:
      "One thing I keep noticing in support work is that the issue is often timing, not volume. A business can be perfectly capable during the day and still lose opportunities because the first question arrived when nobody was around to answer it.",
    learningPoints: [
      "Why after-hours support should be framed as a workflow problem",
      "How to define safe boundaries and handoff logic",
      "What makes an AI support layer feel useful instead of gimmicky",
      "How support automation can strengthen trust instead of weaken it",
    ],
    tips: [
      "Design the handoff path before polishing the answer generation.",
      "Treat the first reply as a trust moment.",
      "Write answers that help the user take the next step.",
      "Keep a clear line between safe automation and issues that need a human.",
    ],
    nextSteps: [
      "Map which customer questions your team can safely automate today.",
      "Read the travel AI chatbot case study and compare the framing.",
      "Open the Google Sheets workflow article for the lightweight operations side.",
    ],
    sections: [
      {
        heading: "The Workflow Problem Comes Before the Model Problem",
        paragraphs: [
          "Before thinking about which model to use, I want to understand the inquiry path. What repeats? What needs an immediate answer? What can wait for a human? That framing shapes the product more than the model choice does.",
        ],
      },
      {
        heading: "Useful Support Feels Grounded, Not Clever",
        paragraphs: [
          "For after-hours support, I care much more about clarity and reliability than fancy responses. If the assistant helps the person understand the service and take the next step, it is doing its job.",
        ],
      },
      {
        heading: "Why This Kind of Project Belongs in a Portfolio",
        paragraphs: [
          "It shows the ability to connect customer experience, operations, and implementation in one flow. That tells me a lot more about a project than simply embedding a chatbot and calling it innovation.",
        ],
      },
    ],
    relatedIds: [
      "cluster-state101-travel-ai-assistant",
      "cluster-python-streamlit-chatbot-knowledge-base",
      "pillar-web-development-case-studies",
      "projects-hub",
    ],
  },
];

export function getAbsoluteUrl(path = "/") {
  if (!path) {
    return siteConfig.siteUrl;
  }

  return `${siteConfig.siteUrl}${path === "/" ? "" : path}`;
}

export function findPillarBySlug(slug) {
  return pillarPages.find((page) => page.slug === slug);
}

export function findClusterBySlug(slug) {
  return clusterPages.find((page) => page.slug === slug);
}

export function findBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}

export function findBlogCategoryBySlug(slug) {
  return blogCategories.find((category) => category.slug === slug);
}

export function getBlogPostsByCategoryId(categoryId) {
  return blogPosts.filter((post) => post.categoryId === categoryId);
}

export const staticLinkableItems = [
  {
    id: "projects-hub",
    path: "/projects",
    title: "Projects Hub",
    type: "Pillar Page",
    description:
      "Portfolio projects page with live demos, GitHub links, and case study connections.",
  },
  {
    id: "blog-hub",
    path: "/blog",
    title: "Developer Blog Hub",
    type: "Blog Hub",
    description:
      "Articles on case studies, SEO engineering, project breakdowns, and system design.",
  },
];

function countWords(value = "") {
  return value
    .toString()
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export function getReadingMinutes(post) {
  const content = [
    post.title,
    post.intro,
    ...(post.learningPoints || []),
    ...(post.tips || []),
    ...(post.nextSteps || []),
    ...(post.sections || []).flatMap((section) => [
      section.heading,
      ...(section.paragraphs || []),
      ...(section.bullets || []),
    ]),
  ];

  const totalWords = content.reduce((sum, entry) => sum + countWords(entry), 0);

  return Math.max(4, Math.ceil(totalWords / 180));
}

export function getTotalReadingMinutes(posts = []) {
  return posts.reduce((sum, post) => sum + getReadingMinutes(post), 0);
}

export function getAllLinkableContent() {
  return [
    ...staticLinkableItems,
    ...projectEntities,
    ...pillarPages.filter((page) => page.id !== "pillar-home"),
    ...clusterPages,
    ...blogCategories,
    ...blogPosts,
  ];
}

export function getLinkableItemsByIds(ids = []) {
  const contentMap = new Map(
    getAllLinkableContent().map((item) => [item.id, item]),
  );

  return ids.map((id) => contentMap.get(id)).filter(Boolean);
}

export function getProjectsByIds(ids = []) {
  const projectMap = new Map(projectEntities.map((project) => [project.id, project]));

  return ids.map((id) => projectMap.get(id)).filter(Boolean);
}

export function createPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.siteName,
    jobTitle: siteConfig.jobTitle,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rizal",
      addressCountry: "PH",
    },
    knowsAbout: siteConfig.skills,
    url: siteConfig.siteUrl,
    sameAs: siteConfig.socialLinks,
  };
}

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.siteName} Portfolio`,
    url: siteConfig.siteUrl,
    description:
      "Full stack developer portfolio with case studies, project breakdowns, and practical engineering writeups.",
    author: {
      "@type": "Person",
      name: siteConfig.siteName,
    },
    inLanguage: "en",
  };
}
