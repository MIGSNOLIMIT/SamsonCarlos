import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.png";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am Carlos Miguel Samson, a full stack developer with hands-on
              experience building modern web applications for real business
              workflows.
              <br />
              <br />
              My day-to-day work includes
              <i>
                <b className="purple">
                  {" "}
                  Next.js, React, Node.js, API integrations, and CMS/admin
                  tooling
                </b>
              </i>
              , and I am comfortable owning both frontend and backend delivery.
              <br />
              <br />
              I enjoy building
              <i>
                <b className="purple">
                  {" "}
                  SaaS-style platforms, chatbot features, performance-focused
                  interfaces,
                </b>
              </i>
              and data-driven product experiences that help teams move faster.
              <br />
              <br />
              I am especially comfortable working with
              <i>
                <b className="purple">
                  {" "}
                  PostgreSQL, Supabase, NoSQL databases,
                </b>
              </i>
              and third-party services such as Google Sheets and cloud APIs.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
