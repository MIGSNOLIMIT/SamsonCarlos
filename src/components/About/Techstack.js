import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiPrisma,
  SiPython,
  SiStreamlit,
  SiSupabase,
  SiVercel,
  SiWebflow,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
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
      icon: <SiMysql fontSize={"24px"} />,
      label: "MySQL",
    },
    {
      icon: <SiMongodb fontSize={"24px"} />,
      label: "MongoDB",
    },
    {
      icon: <SiPrisma fontSize={"24px"} />,
      label: "Prisma ORM",
    },
    {
      icon: <SiSupabase fontSize={"24px"} />,
      label: "Supabase",
    },
    {
      icon: <SiExpress fontSize={"24px"} />,
      label: "Express.js",
    },
    {
      icon: <img src={Tailwind} alt="tailwind" className="tech-icon-images" />,
      label: "Tailwind CSS",
    },
    {
      icon: <SiPython fontSize={"24px"} />,
      label: "Python",
    },
    {
      icon: <SiStreamlit fontSize={"24px"} />,
      label: "Streamlit",
    },
    {
      icon: <TbApi fontSize={"24px"} />,
      label: "REST APIs",
    },
    {
      icon: <SiOpenai fontSize={"24px"} />,
      label: "AI / RAG",
    },
    {
      icon: <SiWebflow fontSize={"24px"} />,
      label: "Webflow",
    },
    {
      icon: <SiVercel fontSize={"24px"} />,
      label: "Vercel",
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
