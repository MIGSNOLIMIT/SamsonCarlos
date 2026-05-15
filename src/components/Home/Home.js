import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi there,
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> CARLOS MIGUEL SAMSON</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

              <p className="home-tagline">
                Full Stack Web Developer based in Binangonan, Rizal. I build
                modern web products with Next.js, React, Node.js, and scalable
                backend services.
              </p>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home illustration"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
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
        </Row>
      </Container>
    </section>
  );
}

export default Home;
