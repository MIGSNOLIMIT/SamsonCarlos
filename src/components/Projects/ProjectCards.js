import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FiZoomIn } from "react-icons/fi";

function ProjectCards(props) {
  const [showZoom, setShowZoom] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images =
    props.imgPaths && props.imgPaths.length > 0
      ? props.imgPaths
      : props.imgPath
        ? [props.imgPath]
        : [];

  const openZoom = (index) => {
    setActiveImageIndex(index);
    setShowZoom(true);
  };

  return (
    <>
      <Card className="project-card-view">
        {images.length > 0 && (
          <div className="project-media">
            {images.length === 1 ? (
              <button
                type="button"
                className="project-image-button"
                onClick={() => openZoom(0)}
                aria-label={`Zoom ${props.title} preview`}
              >
                <div className="project-image-frame">
                  <Card.Img
                    variant="top"
                    src={images[0]}
                    alt={`${props.title} preview`}
                    className="project-card-image"
                  />
                  <span className="project-zoom-hint">
                    <FiZoomIn />
                    <span>Click to zoom</span>
                  </span>
                </div>
              </button>
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
                    <button
                      type="button"
                      className="project-image-button"
                      onClick={() => openZoom(index)}
                      aria-label={`Zoom ${props.title} preview ${index + 1}`}
                    >
                      <div className="project-image-frame">
                        <Card.Img
                          variant="top"
                          src={image}
                          alt={`${props.title} preview ${index + 1}`}
                          className="project-card-image"
                        />
                        <span className="project-zoom-hint">
                          <FiZoomIn />
                          <span>Tap or click to zoom</span>
                        </span>
                      </div>
                    </button>
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
          {props.outcomes && props.outcomes.length > 0 && (
            <ul className="project-outcome-list">
              {props.outcomes.map((outcome) => (
                <li key={`${props.title}-${outcome.label}`}>
                  <strong>{outcome.label}:</strong> {outcome.text}
                </li>
              ))}
            </ul>
          )}
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

      <Modal
        show={showZoom}
        onHide={() => setShowZoom(false)}
        centered
        size="xl"
        dialogClassName="project-zoom-dialog"
        contentClassName="project-zoom-content"
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {images.length > 1 ? (
            <Carousel
              activeIndex={activeImageIndex}
              onSelect={(selectedIndex) => setActiveImageIndex(selectedIndex)}
              controls
              indicators
              interval={null}
              touch
              className="project-zoom-carousel"
            >
              {images.map((image, index) => (
                <Carousel.Item key={`${props.title}-zoom-${index}`}>
                  <div className="project-zoom-frame">
                    <Card.Img
                      variant="top"
                      src={image}
                      alt={`${props.title} preview ${index + 1}`}
                      className="project-zoom-image"
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <div className="project-zoom-frame">
              <Card.Img
                variant="top"
                src={images[0]}
                alt={`${props.title} preview`}
                className="project-zoom-image"
              />
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCards;
