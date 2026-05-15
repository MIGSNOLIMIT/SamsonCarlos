import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and developed by Carlos Miguel Samson</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright (c) {year} Carlos Miguel Samson</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/MIGSNOLIMIT"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/carlos-miguel-samson-80268a36a/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a href="mailto:migsnolimit26@gmail.com" style={{ color: "white" }}>
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://bold.pro/my/carlos-miguelsamson-260422144939"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CgWebsite />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
