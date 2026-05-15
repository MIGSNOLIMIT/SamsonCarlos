import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath && <Card.Img variant="top" src={props.imgPath} alt="card-img" />}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.ghLink && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;Live Site
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
