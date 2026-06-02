import React from "react";
import { Col, Row } from "react-bootstrap";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import {
  SiGithub,
  SiPayloadcms,
  SiWebflow,
  SiWordpress,
} from "react-icons/si";
import Reveal from "../Reveal";

function Toolstack() {
  const tools = [
    {
      icon: <img src={chrome} alt="chrome" className="tech-icon-images" />,
      label: "Google Chrome",
    },
    {
      icon: <img src={vsCode} alt="vs code" className="tech-icon-images" />,
      label: "VS Code",
    },
    {
      icon: <img src={Postman} alt="postman" className="tech-icon-images" />,
      label: "Postman",
    },
    {
      icon: <img src={Git} alt="git" className="tech-icon-images" />,
      label: "Git",
    },
    {
      icon: <SiGithub fontSize={"24px"} />,
      label: "GitHub",
    },
    {
      icon: <SiWebflow fontSize={"24px"} />,
      label: "Webflow",
    },
    {
      icon: <SiWordpress fontSize={"24px"} />,
      label: "WordPress",
    },
    {
      icon: <SiPayloadcms fontSize={"24px"} />,
      label: "Payload CMS",
    },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Reveal
          as={Col}
          xs={6}
          md={2}
          className="tech-icons"
          key={tool.label}
          delay={index * 70}
        >
          {tool.icon}
          <div className="tech-icons-text">{tool.label}</div>
        </Reveal>
      ))}
    </Row>
  );
}

export default Toolstack;
