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

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col lg={8} className="text-center">
            <h1 className="project-heading">
              Resume and <strong className="purple">Contact</strong>
            </h1>
            <p className="resume-intro">
              Full Stack Web Developer with experience building Next.js, React,
              Node.js, Python, and database-driven applications for real
              business operations. I enjoy shipping practical products that
              balance clean UI, reliable backend workflows, AI-assisted user
              experiences, and long-term maintainability.
            </p>
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
                href="https://bold.pro/my/carlos-miguelsamson-260422144939"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineDownload />
                &nbsp;View Resume
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
        </Row>

        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <div className="resume-item">
              <h4>Full Stack Web Developer</h4>
              <h5 className="resume-title">March 2024 - April 2026</h5>
              <p>
                <em>STATE101 Visa Assistance Consultancy - Pasig</em>
              </p>
              <ul>
                <li>
                  Built a custom full-stack CMS and admin dashboard using
                  Next.js, React, Prisma, and PostgreSQL.
                </li>
                <li>
                  Implemented role-based access control, media management via
                  Supabase, rich text editing, and audit logging.
                </li>
                <li>
                  Supported editable branding and content modules so the team
                  could manage website updates without developer bottlenecks.
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Software Developer</h4>
              <h5 className="resume-title">February 2022 - February 2024</h5>
              <p>
                <em>ExxonMobil Internship - Philippines - Remote</em>
              </p>
              <ul>
                <li>
                  Built an information and inquiry website with AI chatbot
                  integration to answer basic to complex questions about oils
                  and vehicles.
                </li>
                <li>
                  Supported backend web development in Python, including
                  Streamlit-based functionality for interactive user flows.
                </li>
                <li>
                  Contributed to software design, product problem-solving, and
                  delivery across a remote internship environment.
                </li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Science in Information Technology</h4>
              <h5 className="resume-title">January 2022 - January 2026</h5>
              <p>
                <em>STI College - Pasig</em>
              </p>
            </div>
          </Col>

          <Col md={6} className="resume-right">
            <h3 className="resume-title">Profile Snapshot</h3>
            <div className="resume-item">
              <h4>Summary</h4>
              <ul>
                <li>
                  Hands-on experience with Next.js, React, Node.js, and
                  Python across full-stack product delivery.
                </li>
                <li>
                  Comfortable with APIs, AI chatbot integrations, NoSQL
                  databases, PostgreSQL, Supabase, and third-party services.
                </li>
                <li>
                  Interested in meaningful, challenging products where speed,
                  clarity, and ownership matter.
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Core Strengths</h4>
              <ul>
                <li>Frontend development with responsive, performance-aware UI.</li>
                <li>Backend workflows, admin systems, and business tooling.</li>
                <li>AI chatbot experiences, automation, and cloud-connected integrations.</li>
                <li>Independent execution and direct collaboration with founders or small teams.</li>
              </ul>
            </div>

            <div className="resume-item resume-contact">
              <h4>Contact</h4>
              <ul>
                <li>Carlos Miguel Samson</li>
                <li>Binangonan 1940, Rizal</li>
                <li>
                  <a href="tel:+639668293379">+63 966 829 3379</a>
                </li>
                <li>
                  <a href="mailto:migsnolimit26@gmail.com">
                    migsnolimit26@gmail.com
                  </a>
                </li>
                <li>English - Expert</li>
                <li>Willing to relocate anywhere</li>
              </ul>
            </div>

            <div className="resume-item">
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
                  <a
                    href="https://bold.pro/my/carlos-miguelsamson-260422144939"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineDownload /> Bold.pro Profile
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
