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
            <h2 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h2>
            <p className="home-about-body">
              I am Carlos Miguel Samson, a full stack developer with
              <span className="purple"> 4 years of hands-on experience </span>
              building modern web applications for real business workflows
              across production websites, applicant management systems, custom
              CMS platforms, and AI chatbot experiences.
              <br />
              <br />
              My day-to-day work includes
              <i>
                <b className="purple">
                  {" "}
                  Next.js, React, TypeScript, Node.js, Python, REST APIs, and
                  CMS/admin tooling
                </b>
              </i>
              , and I am comfortable owning both frontend and backend delivery.
              <br />
              <br />
              I enjoy building
              <i>
                <b className="purple">
                  {" "}
                  AI chatbot features, Webflow experiences, performance-focused
                  interfaces, custom dashboards,
                </b>
              </i>
              and data-driven product experiences that help teams move faster.
              At STATE101, that included a centralized system supporting
              <span className="purple"> 50+ visa applications per week </span>
              and an AI assistant handling
              <span className="purple"> 60-100 weekly inquiries </span>
              during deployment.
              <br />
              <br />
              I am especially comfortable working with
              <i>
                <b className="purple">
                  {" "}
                  PostgreSQL, Supabase, NoSQL databases,
                </b>
              </i>
              and third-party services such as Google Sheets, cloud APIs, and
              AI-assisted workflows.
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
