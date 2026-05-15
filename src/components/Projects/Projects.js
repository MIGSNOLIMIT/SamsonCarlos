import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import state101Website from "../../Assets/Projects/State101Website.png";
import customCms from "../../Assets/Projects/CustomCMS.png";
import mobiChatbot from "../../Assets/Projects/Mobichatbot.png";
import mobiChatbotAlt from "../../Assets/Projects/mobichatbot1.png";
import mobilPhChatbot from "../../Assets/Projects/mobilphchatbot.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Selected <strong className="purple">Work </strong>
        </h1>
        <p className="project-intro">
          A focused mix of public launch work, private admin tooling, and AI
          chatbot product delivery across consultancy and internship experience.
        </p>
        <Row className="project-grid">
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={state101Website}
              isBlog={false}
              title="State101 Travel Website"
              meta="Client Website | React | Next.js"
              description="A public-facing travel and visa assistance website built with a modern React and Next.js workflow. I focused on clean responsive UX, clear content structure, and a setup that supports ongoing business updates."
              skills={["Responsive UI", "Content Architecture", "Frontend Delivery"]}
              ghLink="https://github.com/MIGSNOLIMIT/State101TravelWebsite"
              demoLink="https://state101-travel-website.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={customCms}
              isBlog={false}
              title="Custom CMS and Admin Dashboard"
              meta="Internal Platform | Next.js | Prisma | PostgreSQL"
              description="Built a full-stack internal platform using Next.js, React, Prisma, PostgreSQL, and Supabase. The system included role-based access control, media management, rich text editing, audit logging, and editable branding and content modules."
              skills={["Role-Based Access", "Media Management", "Audit Logging"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[mobiChatbot, mobiChatbotAlt, mobilPhChatbot]}
              isBlog={false}
              title="MOBI Chatbot for ExxonMobil PH"
              meta="ExxonMobil Internship | Python | AI Chatbot"
              description="Built an information and inquiry website with AI chatbot integration for ExxonMobil PH. The platform was designed to answer basic to complex questions about oils and vehicles while supporting a clearer digital customer experience."
              skills={[
                "AI Software Development",
                "Back-End Web Development",
                "Python",
                "Streamlit Integration",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
