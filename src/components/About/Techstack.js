import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs } from "react-icons/si";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Reveal from "../Reveal";

function Techstack() {
  const skills = [
    {
      icon: <SiNextdotjs fontSize={"24px"} />,
      label: "Next.js",
    },
    {
      icon: <img src={Javascript} alt="javascript" className="tech-icon-images" />,
      label: "JavaScript",
    },
    {
      icon: <img src={Typescript} alt="typescript" className="tech-icon-images" />,
      label: "TypeScript",
    },
    {
      icon: <img src={Node} alt="node" className="tech-icon-images" />,
      label: "Node.js",
    },
    {
      icon: <img src={ReactIcon} alt="react" className="tech-icon-images" />,
      label: "React.js",
    },
    {
      icon: <img src={SQL} alt="postgresql" className="tech-icon-images" />,
      label: "PostgreSQL",
    },
    {
      icon: <img src={SQL} alt="supabase" className="tech-icon-images" />,
      label: "Supabase",
    },
    {
      icon: <img src={Mongo} alt="nosql databases" className="tech-icon-images" />,
      label: "NoSQL Databases",
    },
    {
      icon: <img src={Tailwind} alt="tailwind" className="tech-icon-images" />,
      label: "Tailwind CSS",
    },
    {
      icon: <img src={MUI} alt="material ui" className="tech-icon-images" />,
      label: "Material UI",
    },
    {
      icon: <img src={Git} alt="git" className="tech-icon-images" />,
      label: "Git",
    },
    {
      icon: <img src={Postman} alt="postman" className="tech-icon-images" />,
      label: "Postman",
    },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Reveal
          as={Col}
          xs={6}
          md={2}
          className="tech-icons"
          key={skill.label}
          delay={index * 55}
        >
          {skill.icon}
          <div className="tech-icons-text">{skill.label}</div>
        </Reveal>
      ))}
    </Row>
  );
}

export default Techstack;
