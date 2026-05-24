import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../components/Particle";
import Reveal from "../components/Reveal";
import Breadcrumbs from "../components/SEO/Breadcrumbs";
import Seo from "../components/SEO/Seo";
import LinkCollectionSection from "../components/SeoHub/LinkCollectionSection";
import {
  createPersonSchema,
  createWebsiteSchema,
  getAbsoluteUrl,
  getLinkableItemsByIds,
  getProjectsByIds,
  getReadingMinutes,
  siteConfig,
} from "../content/siteContent";

function createCreativeWorkSchema(page, projectLinks) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: page.title,
    name: page.title,
    description: page.metaDescription,
    url: getAbsoluteUrl(page.path),
    author: {
      "@type": "Person",
      name: siteConfig.siteName,
    },
    about: projectLinks.map((project) => ({
      "@type": "SoftwareApplication",
      name: project.title,
      applicationCategory: "DeveloperPortfolioProject",
      description: project.description,
      url: project.liveUrl || getAbsoluteUrl(project.path),
    })),
  };
}

function createBlogPostingSchema(page) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: page.title,
    name: page.title,
    description: page.metaDescription,
    url: getAbsoluteUrl(page.path),
    datePublished: page.publishedAt,
    dateModified: page.publishedAt,
    author: {
      "@type": "Person",
      name: siteConfig.siteName,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.siteName,
    },
  };
}

function ContentPage({ page, breadcrumbs = [], relatedTitle, relatedIntro }) {
  const relatedLinks = getLinkableItemsByIds(page.relatedIds);
  const linkedProjects = getProjectsByIds(page.projectIds);
  const readingMinutes = page.type === "Blog Post" ? getReadingMinutes(page) : null;
  const schema = [
    createWebsiteSchema(),
    createPersonSchema(),
    page.type === "Blog Post"
      ? createBlogPostingSchema(page)
      : createCreativeWorkSchema(page, linkedProjects),
  ];

  return (
    <>
      <Seo
        title={page.metaTitle}
        description={page.metaDescription}
        path={page.path}
        type="article"
        keywords={[page.keyword, page.title]}
        schema={schema}
      />
      <Particle />
      <Container fluid className="authority-page-section">
        <Container className="authority-page-shell">
          <Breadcrumbs items={breadcrumbs} />

          <Reveal delay={40}>
            <p className="authority-kicker">{page.type}</p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="authority-title">{page.title}</h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="authority-lead">{page.intro}</p>
          </Reveal>
          {page.publishedAt ? (
            <Reveal delay={170}>
              <p className="authority-meta">
                Published on {page.publishedAt} | {page.type}
                {readingMinutes ? ` | ${readingMinutes} min read` : ""}
              </p>
            </Reveal>
          ) : null}

          {page.type === "Blog Post" && (page.learningPoints?.length || page.tips?.length) ? (
            <div className="authority-study-grid">
              {page.learningPoints?.length ? (
                <Reveal
                  className="authority-block authority-block-float"
                  delay={185}
                  direction="left"
                >
                  <section>
                    <h2>What This Post Covers</h2>
                    <ul>
                      {page.learningPoints.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </section>
                </Reveal>
              ) : null}

              {page.tips?.length ? (
                <Reveal
                  className="authority-block authority-block-accent authority-block-float"
                  delay={205}
                  direction="right"
                >
                  <section>
                    <h2>Practical Notes</h2>
                    <ul>
                      {page.tips.map((tip) => (
                        <li key={tip}>{tip}</li>
                      ))}
                    </ul>
                  </section>
                </Reveal>
              ) : null}
            </div>
          ) : null}

          <div className="authority-content">
            {page.sections.map((section, index) => (
              <Reveal
                key={section.heading}
                className="authority-block authority-block-float"
                delay={190 + index * 70}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <section>
                  <h2>{section.heading}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets?.length ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              </Reveal>
            ))}
          </div>

          {page.type === "Blog Post" && page.nextSteps?.length ? (
            <Reveal
              className="authority-block authority-block-accent authority-block-float"
              delay={240}
              direction="up"
            >
              <section>
                <h2>Keep Reading</h2>
                <ul>
                  {page.nextSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ) : null}

          {linkedProjects.length ? (
            <LinkCollectionSection
              title="Related Portfolio Projects"
              intro="These portfolio projects connect directly to the technical topic on this page."
              items={linkedProjects}
              compact
            />
          ) : null}

          <LinkCollectionSection
            title={relatedTitle || "Related Content"}
            intro={
              relatedIntro ||
              "Continue through the linked pillar pages, case studies, and articles to see how the topics connect across the portfolio."
            }
            items={relatedLinks}
          />
        </Container>
      </Container>
    </>
  );
}

export default ContentPage;
