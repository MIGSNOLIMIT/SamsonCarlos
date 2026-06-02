import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
  AiFillGithub,
  AiFillPhone,
  AiOutlineDownload,
  AiOutlineMail,
} from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import Particle from "../Particle";
import Reveal from "../Reveal";
import Breadcrumbs from "../SEO/Breadcrumbs";
import Seo from "../SEO/Seo";
import resumePdf from "../../Assets/Resume/Resume v3.pdf";
import {
  careerHighlights,
  createPersonSchema,
  createWebsiteSchema,
  siteConfig,
} from "../../content/siteContent";

function ResumeNew() {
  const hiringBadges = [...siteConfig.availability, ...siteConfig.workModes];

  return (
    <div>
      <Seo
        title="Resume and Contact | Carlos Miguel Samson"
        description="Resume, contact information, experience, and project links for Carlos Miguel Samson, a full stack developer focused on practical web products and internal tools."
        path="/resume"
        keywords={["software engineer resume", "full stack developer resume"]}
        schema={[createWebsiteSchema(), createPersonSchema()]}
      />
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Resume", to: "/resume" },
            ]}
          />
        </Container>
        <Reveal
          as={Row}
          style={{ justifyContent: "center", position: "relative" }}
        >
          <Col lg={8} className="text-center">
            <h1 className="project-heading">
              Resume and <strong className="purple">Contact</strong>
            </h1>
            <p className="resume-intro">
              Full Stack Developer with experience building production-ready
              websites, custom CMS platforms, applicant management systems, and
              AI-powered applications using Next.js, React, Node.js, Python,
              PostgreSQL, and related tools.
            </p>
            <div className="resume-hiring-card">
              <p className="resume-hiring-kicker">Hiring Snapshot</p>
              <h2 className="resume-hiring-title">
                Open to full-time, freelance, and project-based opportunities
              </h2>
              <p className="resume-hiring-copy">
                Preferred roles: {siteConfig.preferredRoles.join(", ")}.
              </p>
              <div className="hero-hiring-pill-list">
                {hiringBadges.map((item) => (
                  <span key={item} className="hero-hiring-pill">
                    {item}
                  </span>
                ))}
              </div>
              <p className="resume-hiring-note">
                {siteConfig.workRegion}. {siteConfig.relocation}.
              </p>
              <Button variant="primary" href={`mailto:${siteConfig.email}`}>
                <AiOutlineMail />
                &nbsp;Email Me About Opportunities
              </Button>
            </div>
            <div className="resume-impact-section">
              <p className="impact-kicker">Selected impact</p>
              <div className="impact-grid resume-impact-grid">
                {careerHighlights.map((highlight) => (
                  <div key={highlight.label} className="impact-card">
                    <p className="impact-value">{highlight.value}</p>
                    <p className="impact-label">{highlight.label}</p>
                    <p className="impact-context">{highlight.context}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="resume-actions">
              <Button variant="primary" href="mailto:migsnolimit26@gmail.com">
                <AiOutlineMail />
                &nbsp;Email
              </Button>
              <Button variant="primary" href="tel:+639668293379">
                <AiFillPhone />
                &nbsp;Call
              </Button>
              <Button
                variant="primary"
                href="https://www.linkedin.com/in/carlos-miguel-samson-80268a36a/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
                &nbsp;LinkedIn
              </Button>
              <Button
                variant="primary"
                href={resumePdf}
                download="Carlos-Miguel-Samson-Resume.pdf"
              >
                <AiOutlineDownload />
                &nbsp;Download Resume
              </Button>
              <Button
                variant="primary"
                href="https://github.com/MIGSNOLIMIT"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
                &nbsp;GitHub
              </Button>
            </div>
          </Col>
        </Reveal>

        <Row className="resume">
          <Col md={6} className="resume-left">
            <Reveal delay={40}>
              <h3 className="resume-title">Experience</h3>
            </Reveal>
            <Reveal className="resume-item" delay={100} direction="left">
              <h4>Full Stack Web Developer</h4>
              <h5 className="resume-title">March 2024 - April 2026</h5>
              <p>
                <em>STATE101 Visa Assistance Consultancy - Pasig</em>
              </p>
              <ul>
                <li>
                  Led development of the public-facing website, custom CMS, and
                  administrative dashboard using Next.js, React, Prisma,
                  PostgreSQL, and Supabase.
                </li>
                <li>
                  Built a centralized applicant management system supporting
                  50+ visa applications per week and streamlining review
                  workflows.
                </li>
                <li>
                  Implemented RBAC for 15 internal users, including 5
                  administrators and 10 content editors.
                </li>
                <li>
                  Developed editable content and branding modules across 4
                  website pages, with media management, audit logging, and rich
                  text editing for stronger content governance.
                </li>
                <li>
                  Supported approximately 300+ monthly visitors while
                  maintaining performance, reliability, and scalability through
                  Vercel deployments.
                </li>
              </ul>
            </Reveal>

            <Reveal className="resume-item" delay={220} direction="left">
              <h4>Freelance Web Developer</h4>
              <h5 className="resume-title">March 2025 - June 2025</h5>
              <p>
                <em>Lindela Travel and Tours - Remote Contract</em>
              </p>
              <ul>
                <li>
                  Designed, developed, and deployed a responsive travel services
                  website showcasing tours, flights, and visa assistance.
                </li>
                <li>
                  Improved site structure, navigation, and mobile
                  responsiveness for a more intuitive experience across
                  devices.
                </li>
                <li>
                  Contributed to an estimated 70% increase in website visits and
                  customer inquiries following launch.
                </li>
                <li>
                  Collaborated directly with stakeholders to translate business
                  requirements into a production-ready web solution.
                </li>
              </ul>
            </Reveal>

            <Reveal className="resume-item" delay={300} direction="left">
              <h4>Software Developer Intern</h4>
              <h5 className="resume-title">February 2022 - February 2024</h5>
              <p>
                <em>ExxonMobil Philippines - Remote Internship</em>
              </p>
              <ul>
                <li>
                  Contributed to an information and inquiry platform with AI
                  chatbot capabilities.
                </li>
                <li>
                  Built Streamlit-based interfaces to support interactive user
                  workflows.
                </li>
                <li>
                  Integrated APIs and developed backend functionality using
                  Python while assisting with debugging, testing, and feature
                  enhancements.
                </li>
              </ul>
            </Reveal>

            <Reveal delay={60}>
              <h3 className="resume-title">Education</h3>
            </Reveal>
            <Reveal className="resume-item" delay={400} direction="left">
              <h4>Bachelor of Science in Information Technology</h4>
              <h5 className="resume-title">2022 - 2026 (Expected Graduation: 2026)</h5>
              <p>
                <em>STI College Ortigas-Cainta</em>
              </p>
            </Reveal>
          </Col>

          <Col md={6} className="resume-right">
            <Reveal delay={80}>
              <h3 className="resume-title">Profile Snapshot</h3>
            </Reveal>
            <Reveal className="resume-item" delay={120} direction="right">
              <h4>Summary</h4>
              <ul>
                <li>
                  4 years of hands-on experience across full-stack product
                  delivery, production websites, applicant management systems,
                  custom CMS platforms, and AI-powered applications.
                </li>
                <li>
                  Strongest in Next.js, React, TypeScript, Node.js, Python,
                  PostgreSQL, Prisma, Supabase, REST APIs, and API-connected
                  product workflows.
                </li>
                <li>
                  Best fit for roles where ownership, product judgment, and
                  practical execution matter as much as raw coding speed.
                </li>
              </ul>
            </Reveal>

            <Reveal className="resume-item" delay={220} direction="right">
              <h4>Preferred Roles and Work Setup</h4>
              <ul>
                {siteConfig.preferredRoles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
                <li>
                  Available for {siteConfig.availability.join(", ").toLowerCase()} work.
                </li>
                <li>
                  Open to {siteConfig.workModes.join(", ").toLowerCase()} arrangements.
                </li>
                <li>{siteConfig.workRegion}.</li>
                <li>{siteConfig.relocation}.</li>
              </ul>
            </Reveal>

            <Reveal className="resume-item" delay={300} direction="right">
              <h4>Core Strengths</h4>
              <ul>
                <li>Responsive frontend work with React and Next.js.</li>
                <li>Backend workflows, CMS architecture, and applicant management systems.</li>
                <li>AI chatbot experiences, RAG workflows, prompt engineering, and automation.</li>
                <li>Webflow, WordPress, Payload CMS, and cloud-connected integrations.</li>
                <li>Independent execution and direct collaboration with founders or small teams.</li>
              </ul>
            </Reveal>

            <Reveal
              className="resume-item resume-contact"
              delay={380}
              direction="right"
            >
              <h4>Contact</h4>
              <ul>
                <li>Carlos Miguel Samson</li>
                <li>#878 Barrio Rd., Binangonan, Rizal</li>
                <li>{siteConfig.workRegion}</li>
                <li>
                  <a href="tel:+639668293379">+63 966 829 3379</a>
                </li>
                <li>
                  <a href="mailto:migsnolimit26@gmail.com">
                    migsnolimit26@gmail.com
                  </a>
                </li>
                <li>English - Expert</li>
                <li>{siteConfig.relocation}</li>
              </ul>
            </Reveal>

            <Reveal className="resume-item" delay={460} direction="right">
              <h4>Links</h4>
              <ul>
                <li>
                  <a
                    href="https://state101-travel-website.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CgWebsite /> State101 Travel Website
                  </a>
                </li>
                <li>
                  <a
                    href="https://lindelatravel.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CgWebsite /> Lindela Travel Website
                  </a>
                </li>
                <li>
                  <a
                    href="https://state101travel-ai-chatbot.streamlit.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CgWebsite /> Travel and Visa AI Assistant
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/MIGSNOLIMIT/State101TravelWebsite"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub /> GitHub Project
                  </a>
                </li>
                <li>
                  MOBI Chatbot for ExxonMobil PH - private internship project
                </li>
                <li>
                  <a href={resumePdf} download="Carlos-Miguel-Samson-Resume.pdf">
                    <AiOutlineDownload /> Download PDF Resume
                  </a>
                </li>
              </ul>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
