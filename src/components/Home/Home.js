import React from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineFundProjectionScreen, AiOutlineMail } from "react-icons/ai";
import { CgFileDocument, CgWebsite } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.png";
import resumePdf from "../../Assets/Resume/Resume v1.pdf";
import Particle from "../Particle";
import Reveal from "../Reveal";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const heroTech = [
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "PostgreSQL",
    "AI Chatbots",
  ];

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <Reveal delay={40}>
                <p className="hero-kicker">
                  Full Stack Developer with 4 years of experience across
                  websites, CMS platforms, and AI-assisted customer experiences
                </p>
              </Reveal>

              <Reveal delay={120}>
                <h1 className="heading hero-heading">
                  I build business-ready web products that help teams launch
                  faster, answer better, and operate with less friction.
                </h1>
              </Reveal>

              <Reveal delay={210}>
                <h1 className="heading-name">
                  <strong className="main-name">CARLOS MIGUEL SAMSON</strong>
                </h1>
              </Reveal>

              <Reveal delay={300}>
                <div className="home-type-wrap">
                  <Type />
                </div>
              </Reveal>

              <Reveal delay={390}>
                <p className="home-tagline">
                  I bring 4 years of hands-on experience using Next.js, React,
                  Node.js, Python, and PostgreSQL to ship responsive websites,
                  admin systems, and AI chatbot experiences for real business
                  workflows.
                </p>
              </Reveal>

              <Reveal delay={480}>
                <div className="hero-actions">
                  <Button as={Link} to="/project" variant="primary">
                    <AiOutlineFundProjectionScreen />
                    &nbsp;View Projects
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

              <Reveal delay={560}>
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
              />
            </Reveal>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Reveal
          as={Row}
          delay={120}
          style={{ paddingTop: "50px", paddingBottom: "80px" }}
        >
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
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
              <li className="social-icons">
                <a
                  href="https://bold.pro/my/carlos-miguelsamson-260422144939"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <CgWebsite />
                </a>
              </li>
            </ul>
          </Col>
        </Reveal>
      </Container>
    </section>
  );
}

export default Home;
