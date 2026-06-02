import React from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineFundProjectionScreen, AiOutlineMail } from "react-icons/ai";
import { CgFileDocument, CgWebsite } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.png";
import resumePdf from "../../Assets/Resume/Resume v3.pdf";
import Particle from "../Particle";
import Reveal from "../Reveal";
import Seo from "../SEO/Seo";
import LinkCollectionSection from "../SeoHub/LinkCollectionSection";
import Home2 from "./Home2";
import Type from "./Type";
import {
  blogPosts,
  clusterPages,
  createPersonSchema,
  createWebsiteSchema,
  pillarPages,
  siteConfig,
} from "../../content/siteContent";

function Home() {
  const heroTech = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "AI Chatbots",
  ];
  const hiringBadges = [...siteConfig.availability, ...siteConfig.workModes];
  const homeSchema = [
    createWebsiteSchema(),
    createPersonSchema(),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Full Stack Developer Portfolio in the Philippines",
      description:
        "Homepage for a full stack developer portfolio covering React, Next.js, Python, AI assistants, and project case studies.",
      url: siteConfig.siteUrl,
      author: {
        "@type": "Person",
        name: siteConfig.siteName,
      },
    },
  ];

  return (
    <>
      <Seo
        title="Full Stack Developer Portfolio in the Philippines | Carlos Miguel Samson"
        description="Full stack developer portfolio featuring React, Next.js, Python, AI assistants, CMS systems, and web development case studies built from real client and product work."
        path="/"
        keywords={["full stack developer portfolio", "web developer philippines"]}
        schema={homeSchema}
      />
      <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <Reveal delay={40}>
                <p className="hero-kicker">
                  Full Stack Developer building production-ready websites,
                  internal platforms, and AI-assisted customer experiences
                </p>
              </Reveal>

              <Reveal delay={120}>
                <h1 className="heading hero-heading">
                  I build websites, internal tools, and AI-assisted workflows
                  that help teams move faster and make things clearer for users.
                </h1>
              </Reveal>

              <Reveal delay={210}>
                <p className="heading-name">
                  <strong className="main-name">CARLOS MIGUEL SAMSON</strong>
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="home-type-wrap">
                  <Type />
                </div>
              </Reveal>

              <Reveal delay={390}>
                <p className="home-tagline">
                  I bring 4 years of hands-on experience using Next.js, React,
                  TypeScript, Node.js, Python, and PostgreSQL to ship responsive
                  websites, applicant management systems, custom CMS platforms,
                  and AI chatbot experiences for real business workflows.
                </p>
              </Reveal>

              <Reveal delay={480}>
                <div className="hero-hiring-card">
                  <p className="hero-hiring-kicker">Open to Opportunities</p>
                  <h2 className="hero-hiring-title">
                    Available for full-time, freelance, and project-based work
                  </h2>
                  <p className="hero-hiring-copy">
                    Preferred roles: {siteConfig.preferredRoles.join(", ")}.
                  </p>
                  <div className="hero-hiring-pill-list">
                    {hiringBadges.map((item) => (
                      <span key={item} className="hero-hiring-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="hero-hiring-note">
                    {siteConfig.workRegion}. {siteConfig.relocation}.
                  </p>
                  <Button variant="primary" href={`mailto:${siteConfig.email}`}>
                    <AiOutlineMail />
                    &nbsp;Email Me About a Role
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={540}>
                <div className="hero-actions">
                  <Button as={Link} to="/projects" variant="primary">
                    <AiOutlineFundProjectionScreen />
                    &nbsp;View Projects
                  </Button>
                  <Button as={Link} to="/full-stack-developer" variant="primary">
                    <CgWebsite />
                    &nbsp;Explore Work
                  </Button>
                  <Button as={Link} to="/resume" variant="primary">
                    <CgFileDocument />
                    &nbsp;View Resume
                  </Button>
                  <Button
                    variant="primary"
                    href={resumePdf}
                    download="Carlos-Miguel-Samson-Resume.pdf"
                  >
                    <CgFileDocument />
                    &nbsp;Download Resume
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={620}>
                <div className="hero-tech-strip">
                  <p className="hero-tech-label">Tech I use most</p>
                  <div className="hero-tech-list">
                    {heroTech.map((tech) => (
                      <span key={tech} className="hero-tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </Col>

            <Reveal
              as={Col}
              md={5}
              delay={220}
              direction="right"
              style={{ paddingBottom: 20 }}
            >
              <img
                src={homeLogo}
                alt="home illustration"
                className="img-fluid hero-illustration"
                loading="eager"
              />
            </Reveal>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container fluid className="authority-home-section">
        <Container className="authority-page-shell">
          <Reveal delay={60}>
            <p className="authority-kicker">Home Pillar Page</p>
          </Reveal>
          <Reveal delay={110}>
            <h2 className="authority-title authority-home-title">
              A Portfolio Built Around Real Work, Not Just Screenshots
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="authority-lead">
              This homepage acts as the entry point to the rest of the site. It
              gives a quick view of the broader themes in my work, then links
              into deeper pages for projects, case studies, and technical
              writeups.
            </p>
          </Reveal>

          <div className="authority-content">
            <Reveal className="authority-block" delay={220} direction="left">
              <section>
                <h2>Topics This Portfolio Can Rank Around</h2>
                <p>
                  Instead of acting only as a visual portfolio, the site also
                  gives people a few different ways to find and evaluate my
                  work: broad skill pages, specific case studies, and technical
                  breakdowns tied to real projects.
                </p>
                <ul>
                  <li>Full stack developer portfolio and case studies</li>
                  <li>React and Next.js developer work</li>
                  <li>Web developer work in the Philippines</li>
                  <li>Frontend and backend engineering breakdowns</li>
                </ul>
              </section>
            </Reveal>

            <Reveal className="authority-block" delay={300} direction="right">
              <section>
                <h2>How the Internal Linking System Works</h2>
                <p>
                  Broad topic hubs link down to case studies, engineering
                  breakdowns, and blog posts. Those supporting pages link back
                  up to their parent topics and sideways to related articles so
                  no page sits in isolation.
                </p>
                <p>
                  That structure helps search engines understand how the pages
                  relate, but more importantly it helps a reader move from a
                  broad overview into the exact work they want to inspect.
                </p>
              </section>
            </Reveal>
          </div>

          <LinkCollectionSection
            title="Pillar Pages"
            intro="Start here if you want the broader view before jumping into individual projects."
            items={pillarPages.filter((page) => page.id !== "pillar-home")}
          />

          <LinkCollectionSection
            title="Featured Case Studies and Engineering Breakdowns"
            intro="These pages go deeper into the product problems, architecture choices, and tradeoffs behind the work."
            items={clusterPages.slice(0, 6)}
          />

          <LinkCollectionSection
            title="Latest Blog Posts"
            intro="The blog adds more context around the same projects, decisions, and technical themes."
            items={blogPosts}
          />
        </Container>
      </Container>

      <Container>
        <Reveal
          as={Row}
          delay={120}
          style={{ paddingTop: "50px", paddingBottom: "80px" }}
        >
          <Col md={12} className="home-about-social">
            <h2>Find Me On</h2>
            <p>
              Feel free to <span className="purple">connect </span>or explore
              my work
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MIGSNOLIMIT"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/carlos-miguel-samson-80268a36a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:migsnolimit26@gmail.com"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Reveal>
      </Container>
      </section>
    </>
  );
}

export default Home;
