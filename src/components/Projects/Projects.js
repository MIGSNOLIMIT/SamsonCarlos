import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import state101Website from "../../Assets/Projects/State101Website.png";
import state101AiChatbot from "../../Assets/Projects/State101AIchatbot.png";
import state101AiChatbotAlt from "../../Assets/Projects/State101AIchatbot1.png";
import customCms from "../../Assets/Projects/CustomCMS.png";
import lindelaHomepage from "../../Assets/Projects/Lindela homepage.png";
import mobiChatbot from "../../Assets/Projects/Mobichatbot.png";
import mobiChatbotAlt from "../../Assets/Projects/mobichatbot1.png";
import mobilPhChatbot from "../../Assets/Projects/mobilphchatbot.png";
import Particle from "../Particle";
import Reveal from "../Reveal";
import Breadcrumbs from "../SEO/Breadcrumbs";
import Seo from "../SEO/Seo";
import LinkCollectionSection from "../SeoHub/LinkCollectionSection";
import ProjectCard from "./ProjectCards";
import {
  blogPosts,
  clusterPages,
  createPersonSchema,
  createWebsiteSchema,
  getAbsoluteUrl,
  projectEntities,
  siteConfig,
} from "../../content/siteContent";

function Projects() {
  const projectsSchema = [
    createWebsiteSchema(),
    createPersonSchema(),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Projects Hub",
      description:
        "Portfolio projects, case studies, and engineering breakdowns covering full stack development, React and Next.js delivery, and AI chatbot workflows.",
      url: getAbsoluteUrl("/projects"),
      author: {
        "@type": "Person",
        name: siteConfig.siteName,
      },
      hasPart: projectEntities.map((project) => ({
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        url: project.liveUrl || getAbsoluteUrl(project.path),
      })),
    },
  ];

  return (
    <>
      <Seo
        title="Projects and Web Development Case Studies | Carlos Miguel Samson"
        description="Browse portfolio projects, engineering case studies, live demos, and GitHub links across React, Next.js, Python, CMS, and AI chatbot delivery."
        path="/projects"
        keywords={["web development case studies", "software engineer portfolio projects"]}
        schema={projectsSchema}
      />
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Projects", to: "/projects" },
            ]}
          />
          <h1 className="project-heading">
            Selected <strong className="purple">Work </strong>
          </h1>
          <p className="project-intro">
            This page acts as the projects pillar in the site&apos;s SEO structure.
            It connects live portfolio work to deeper case studies, engineering
            breakdowns, and blog content so each project contributes to a larger
            topic authority system.
          </p>
          <Row className="project-grid">
          <Reveal as={Col} md={4} className="project-card" delay={80}>
            <ProjectCard
              imgPath={state101Website}
              isBlog={false}
              title="State101 Travel Website"
              meta="Client Website | React | Next.js"
              description="A public-facing travel and visa assistance website built with a modern React and Next.js workflow. I focused on clean responsive UX, clear content structure, and a setup that supports ongoing business updates."
              outcomes={[
                {
                  label: "Problem",
                  text: "The consultancy needed a clearer public-facing website that explained services well and felt trustworthy on mobile and desktop.",
                },
                {
                  label: "Built",
                  text: "A responsive React and Next.js website with cleaner page structure, easier navigation, and business-focused content sections.",
                },
                {
                  label: "Impact",
                  text: "Strengthened the company's online presence and made the inquiry journey easier for potential clients.",
                },
              ]}
              skills={["Responsive UI", "Content Architecture", "Frontend Delivery"]}
              caseStudyLink="/engineering/react-travel-website-conversion-ux"
              ghLink="https://github.com/MIGSNOLIMIT/State101TravelWebsite"
              demoLink="https://state101-travel-website.vercel.app"
            />
          </Reveal>

          <Reveal as={Col} md={4} className="project-card" delay={180}>
            <ProjectCard
              imgPaths={[state101AiChatbot, state101AiChatbotAlt]}
              isBlog={false}
              title="State101 Travel AI Assistant Platform"
              meta="Full Stack AI Developer | Python | Streamlit | Groq API"
              description="Built a lightweight AI SaaS-style chatbot platform for State101 Travel to handle customer questions outside office hours. The assistant uses company knowledge base content to answer common travel and visa inquiries through a fast Streamlit-based experience."
              outcomes={[
                {
                  label: "Problem",
                  text: "The company was receiving inquiries outside office hours and could miss potential customers when no one was available to respond right away.",
                },
                {
                  label: "Built",
                  text: "An AI travel and visa assistant with LLM-powered conversational flows, intelligent search, Streamlit UI, Groq API integration, and cloud-connected company data workflows.",
                },
                {
                  label: "Impact",
                  text: "Helped the business respond to after-hours questions with consistent answers from the company knowledge base, reducing missed inquiries and improving support availability.",
                },
              ]}
              skills={[
                "LLM Integration",
                "Knowledge Base Search",
                "Google Sheets API",
                "Streamlit Delivery",
              ]}
              caseStudyLink="/case-studies/state101-travel-ai-assistant"
              ghLink="https://github.com/MIGSNOLIMIT/State101Travel-AI-Chatbot"
              demoLink="https://state101travel-ai-chatbot.streamlit.app"
            />
          </Reveal>

          <Reveal as={Col} md={4} className="project-card" delay={280}>
            <ProjectCard
              imgPath={customCms}
              isBlog={false}
              title="Custom CMS and Admin Dashboard"
              meta="Internal Platform | Next.js | Prisma | PostgreSQL"
              description="Built a full-stack internal platform using Next.js, React, Prisma, PostgreSQL, and Supabase. The system included role-based access control, media management, rich text editing, audit logging, and editable branding and content modules."
              outcomes={[
                {
                  label: "Problem",
                  text: "The team needed a way to manage content, media, roles, and site updates without relying on repeated developer intervention.",
                },
                {
                  label: "Built",
                  text: "A full-stack CMS with role-based access, rich text editing, audit logging, and Supabase-backed media workflows.",
                },
                {
                  label: "Impact",
                  text: "Reduced update bottlenecks and gave the business a more scalable internal content and admin process.",
                },
              ]}
              skills={["Role-Based Access", "Media Management", "Audit Logging"]}
              caseStudyLink="/case-studies/custom-cms-admin-dashboard"
            />
          </Reveal>

          <Reveal as={Col} md={4} className="project-card" delay={380}>
            <ProjectCard
              imgPath={lindelaHomepage}
              isBlog={false}
              title="Lindela Travel Website"
              meta="Freelance | Travel Services Website | Responsive UX"
              description="Delivered a freelance public-facing website for a travel and visa services brand, with clearer service presentation, stronger homepage structure, and a smoother inquiry path for users exploring tours, flights, and visa assistance."
              outcomes={[
                {
                  label: "Problem",
                  text: "The client needed a more polished online presence that organized multiple travel services clearly and made it easier for visitors to understand offers and inquire with confidence.",
                },
                {
                  label: "Built",
                  text: "A responsive marketing website with improved homepage hierarchy, service-focused sections, and clearer calls to action for tours, flights, and visa-related inquiries.",
                },
                {
                  label: "Impact",
                  text: "Gave the business a more credible digital storefront and made the customer journey feel simpler for users comparing services or planning their next trip.",
                },
              ]}
              skills={[
                "Responsive UI",
                "Service Page Structure",
                "Marketing Website Delivery",
              ]}
              caseStudyLink="/engineering/react-travel-website-conversion-ux"
              demoLink="https://lindelatravel.com/travel_lite/public/"
            />
          </Reveal>

          <Reveal as={Col} md={4} className="project-card" delay={480}>
            <ProjectCard
              imgPaths={[mobiChatbot, mobiChatbotAlt, mobilPhChatbot]}
              isBlog={false}
              title="MOBI Chatbot for ExxonMobil PH"
              meta="ExxonMobil Internship | Python | AI Chatbot"
              description="Built an information and inquiry website with AI chatbot integration for ExxonMobil PH. The platform was designed to answer basic to complex questions about oils and vehicles while supporting a clearer digital customer experience."
              outcomes={[
                {
                  label: "Problem",
                  text: "Customers needed faster, clearer answers to oil and vehicle questions without depending only on manual support.",
                },
                {
                  label: "Built",
                  text: "An inquiry website with AI chatbot integration, Python-based backend work, and Streamlit-supported interactive flows.",
                },
                {
                  label: "Impact",
                  text: "Created a more scalable support experience that could handle both basic and more complex product questions.",
                },
              ]}
              skills={[
                "AI Software Development",
                "Back-End Web Development",
                "Python",
                "Streamlit Integration",
              ]}
              caseStudyLink="/case-studies/exxonmobil-ai-chatbot"
              ghLink="https://github.com/MIGSNOLIMIT/ExxonMobil1Ph-AI-Chatbot"
              demoLink="https://exxonmobil1ph-ai-chatbot-mobi.streamlit.app"
            />
          </Reveal>
        </Row>
          <LinkCollectionSection
            title="Case Studies and Engineering Breakdowns"
            intro="These supporting pages explain how the projects were framed, implemented, and tied to business outcomes."
            items={clusterPages}
          />

          <LinkCollectionSection
            title="Project-Related Blog Content"
            intro="The blog extends the portfolio with long-tail content that reinforces the same technical themes for search and for readers doing deeper evaluation."
            items={blogPosts}
          />
        </Container>
      </Container>
    </>
  );
}

export default Projects;
