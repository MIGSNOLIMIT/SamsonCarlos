import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";

function LinkCollectionSection({
  title,
  intro,
  items = [],
  compact = false,
  variant = "default",
  actionLabel,
}) {
  if (!items.length) {
    return null;
  }

  const renderMeta = (item) => {
    const metaItems = [];

    if (item.readingMinutes) {
      metaItems.push(`${item.readingMinutes} min read`);
    }

    if (item.articleCount) {
      metaItems.push(`${item.articleCount} article${item.articleCount === 1 ? "" : "s"}`);
    }

    if (item.totalReadingMinutes) {
      metaItems.push(`about ${item.totalReadingMinutes} min total`);
    }

    if (!metaItems.length) {
      return null;
    }

    return (
      <div className="content-link-meta-row">
        {metaItems.map((meta) => (
          <span key={meta} className="content-link-meta-pill">
            {meta}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className={`content-link-section${compact ? " compact" : ""}`}>
      <Reveal delay={60}>
        <h2 className="project-heading">{title}</h2>
      </Reveal>
      {intro ? <p className="content-section-intro">{intro}</p> : null}
      <Container fluid className="px-0">
        <Row className="g-4">
          {items.map((item, index) => (
            <Reveal
              key={`${item.path}-${item.title}`}
              as={Col}
              md={6}
              lg={4}
              delay={80 + index * 70}
            >
              <article className={`content-link-card content-link-card-${variant}`}>
                <p className="content-link-type">{item.type}</p>
                {renderMeta(item)}
                <h3>{item.title}</h3>
                <p>{item.description || item.metaDescription}</p>
                <Link className="content-link-anchor" to={item.path}>
                  {actionLabel || `Explore ${item.title}`}
                </Link>
              </article>
            </Reveal>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default LinkCollectionSection;
