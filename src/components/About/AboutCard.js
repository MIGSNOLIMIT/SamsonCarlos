import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { siteConfig } from "../../content/siteContent";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Carlos Miguel Samson</span> from{" "}
            <span className="purple">Binangonan, Rizal, Philippines</span>.
            <br />
            I bring <span className="purple">4 years of hands-on experience</span>{" "}
            building web products for business and customer-facing workflows.
            <br />
            I worked as a{" "}
            <span className="purple">Full Stack Web Developer</span> at{" "}
            <span className="purple">STATE101 Visa Assistance Consultancy</span>
            , and earlier as a <span className="purple">Software Developer</span>{" "}
            intern with <span className="purple">ExxonMobil</span>.
            <br />I earned my{" "}
            <span className="purple">
              Bachelor of Science in Information Technology
            </span>{" "}
            from <span className="purple">STI College - Ortigas-Cainta</span>.
            <br />
            <br />
            I enjoy working on products that combine solid engineering with
            practical business value:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building CMS, admin dashboards, and internal
              tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Integrating APIs, databases, cloud services, and
              AI chatbot flows
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing fast, clean user experiences for web
              products
            </li>
            <li className="about-activity">
              <ImPointRight /> Open to full-time, freelance, and project-based
              work, with remote, hybrid, and on-site options. {siteConfig.workRegion}.{" "}
              {siteConfig.relocation}
            </li>
          </ul>

          <p className="about-quote">
            "Build useful products, keep them fast, and make them easy for
            people to use."
          </p>
          <footer className="blockquote-footer">Carlos Miguel Samson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
