import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Reveal from "../Reveal";
import Breadcrumbs from "../SEO/Breadcrumbs";
import Seo from "../SEO/Seo";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { createPersonSchema, createWebsiteSchema } from "../../content/siteContent";

function About() {
  return (
    <>
      <Seo
        title="About Carlos Miguel Samson | Full Stack Developer Profile"
        description="Learn about Carlos Miguel Samson, a full stack developer with experience across React, Next.js, Python, AI chatbots, and business web systems."
        path="/about"
        keywords={["about full stack developer", "react next.js developer profile"]}
        schema={[createWebsiteSchema(), createPersonSchema()]}
      />
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
            ]}
          />
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Reveal
              as={Col}
              md={7}
              delay={60}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Reveal>
            <Reveal
              as={Col}
              md={5}
              delay={180}
              direction="right"
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Reveal>
          </Row>

          <Reveal delay={80}>
            <h2 className="project-heading">
              Professional <strong className="purple">Skillset </strong>
            </h2>
          </Reveal>

          <Techstack />

          <Reveal delay={80}>
            <h2 className="project-heading">
              <strong className="purple">Tools</strong> I use
            </h2>
          </Reveal>
          <Toolstack />

          <Reveal delay={120}>
            <Github />
          </Reveal>
        </Container>
      </Container>
    </>
  );
}

export default About;
