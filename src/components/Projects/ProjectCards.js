import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  const images =
    props.imgPaths && props.imgPaths.length > 0
      ? props.imgPaths
      : props.imgPath
        ? [props.imgPath]
        : [];

  return (
    <Card className="project-card-view">
      {images.length > 0 && (
        <div className="project-media">
          {images.length === 1 ? (
            <div className="project-image-frame">
              <Card.Img
                variant="top"
                src={images[0]}
                alt={`${props.title} preview`}
                className="project-card-image"
              />
            </div>
          ) : (
            <Carousel
              className="project-carousel"
              controls
              indicators
              interval={null}
              touch
            >
              {images.map((image, index) => (
                <Carousel.Item key={`${props.title}-${index}`}>
                  <div className="project-image-frame">
                    <Card.Img
                      variant="top"
                      src={image}
                      alt={`${props.title} preview ${index + 1}`}
                      className="project-card-image"
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </div>
      )}
      <Card.Body>
        {props.meta && <p className="project-card-meta">{props.meta}</p>}
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="project-card-description">{props.description}</Card.Text>
        {props.skills && props.skills.length > 0 && (
          <div className="project-skill-list">
            {props.skills.map((skill) => (
              <span key={skill} className="project-skill-chip">
                {skill}
              </span>
            ))}
          </div>
        )}
        {(props.ghLink || (!props.isBlog && props.demoLink)) && (
          <div className="project-card-actions">
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
              >
                <CgWebsite /> &nbsp;Live Site
              </Button>
            )}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
