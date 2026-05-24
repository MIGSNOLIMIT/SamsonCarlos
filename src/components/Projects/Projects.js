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
  const projectMedia = {
    "project-state101-website": {
      imgPath: state101Website,
      caseStudyLink: "/engineering/react-travel-website-conversion-ux",
      ghLink: "https://github.com/MIGSNOLIMIT/State101TravelWebsite",
      demoLink: "https://state101-travel-website.vercel.app",
    },
    "project-state101-ai": {
      imgPaths: [state101AiChatbot, state101AiChatbotAlt],
      caseStudyLink: "/case-studies/state101-travel-ai-assistant",
      ghLink: "https://github.com/MIGSNOLIMIT/State101Travel-AI-Chatbot",
      demoLink: "https://state101travel-ai-chatbot.streamlit.app",
    },
    "project-custom-cms": {
      imgPath: customCms,
      caseStudyLink: "/case-studies/custom-cms-admin-dashboard",
    },
    "project-lindela-website": {
      imgPath: lindelaHomepage,
      caseStudyLink: "/engineering/react-travel-website-conversion-ux",
      demoLink: "https://lindelatravel.com/travel_lite/public/",
    },
    "project-exxonmobil-ai": {
      imgPaths: [mobiChatbot, mobiChatbotAlt, mobilPhChatbot],
      caseStudyLink: "/case-studies/exxonmobil-ai-chatbot",
      ghLink: "https://github.com/MIGSNOLIMIT/ExxonMobil1Ph-AI-Chatbot",
      demoLink: "https://exxonmobil1ph-ai-chatbot-mobi.streamlit.app",
    },
  };

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
            These are the projects I would want a recruiter, client, or hiring
            manager to open first. Each card makes the role, ownership, stack,
            constraint, and result explicit so the work is easier to evaluate quickly.
          </p>
          <Row className="project-grid">
            {projectEntities.map((project, index) => {
              const media = projectMedia[project.id] || {};

              return (
                <Reveal
                  key={project.id}
                  as={Col}
                  md={4}
                  className="project-card"
                  delay={80 + index * 100}
                >
                  <ProjectCard
                    {...media}
                    isBlog={false}
                    title={project.title}
                    meta={project.cardMeta}
                    description={project.description}
                    projectFacts={[
                      { label: "Role", text: project.role },
                      { label: "Owned", text: project.owned },
                      { label: "Solved", text: project.constraint },
                      { label: "What Changed", text: project.result },
                    ]}
                    skills={project.techStack}
                  />
                </Reveal>
              );
            })}
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
