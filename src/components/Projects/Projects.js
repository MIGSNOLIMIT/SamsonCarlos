import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bitsOfCode from "../../Assets/Projects/blog.png";
import chatify from "../../Assets/Projects/chatify.png";
import editor from "../../Assets/Projects/codeEditor.png";
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
        <p style={{ color: "white" }}>
          A mix of public launches and private product work from my recent full
          stack experience.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="State101 Travel Website"
              description="A public-facing travel and visa assistance website built with a modern React and Next.js workflow. I focused on clean responsive UX, clear content structure, and a setup that supports ongoing business updates."
              ghLink="https://github.com/MIGSNOLIMIT/State101TravelWebsite"
              demoLink="https://state101-travel-website.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Custom CMS and Admin Dashboard"
              description="Built a full-stack internal platform using Next.js, React, Prisma, PostgreSQL, and Supabase. The system included role-based access control, media management, rich text editing, audit logging, and editable branding and content modules."
              demoLink="https://state101-travel-website.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SaaS and Integration Work"
              description="Alongside client-facing delivery, I have worked on SaaS-style features, chatbot flows, Google Sheets integrations, cloud-connected APIs, and real-time experiences. I enjoy shaping backend logic and frontend usability together so products stay fast and practical."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
