import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Particle from "../components/Particle";
import Reveal from "../components/Reveal";
import Seo from "../components/SEO/Seo";
import Breadcrumbs from "../components/SEO/Breadcrumbs";
import LinkCollectionSection from "../components/SeoHub/LinkCollectionSection";
import {
  createPersonSchema,
  createWebsiteSchema,
  findBlogCategoryBySlug,
  getAbsoluteUrl,
  getBlogPostsByCategoryId,
  getReadingMinutes,
  getTotalReadingMinutes,
  siteConfig,
} from "../content/siteContent";

function BlogCategoryPage() {
  const { slug } = useParams();
  const category = findBlogCategoryBySlug(slug);

  if (!category) {
    return <Navigate to="/blog" replace />;
  }

  const posts = getBlogPostsByCategoryId(category.id);
  const postItems = posts.map((post) => ({
    ...post,
    readingMinutes: getReadingMinutes(post),
  }));
  const schema = [
    createWebsiteSchema(),
    createPersonSchema(),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: category.title,
      description: category.description,
      url: getAbsoluteUrl(category.path),
      author: {
        "@type": "Person",
        name: siteConfig.siteName,
      },
    },
  ];

  return (
    <>
      <Seo
        title={`${category.title} | Developer Blog Category`}
        description={category.description}
        path={category.path}
        keywords={[category.title, "developer blog category"]}
        schema={schema}
      />
      <Particle />
      <Container fluid className="authority-page-section">
        <Container className="authority-page-shell">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Blog", to: "/blog" },
              { label: category.title, to: category.path },
            ]}
          />
          <Reveal delay={40}>
            <p className="authority-kicker">Blog Category</p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="authority-title">{category.title}</h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="authority-lead">{category.description}</p>
          </Reveal>
          <Reveal delay={165}>
            <p className="authority-meta">
              {postItems.length} articles | about {getTotalReadingMinutes(posts)} min of reading
            </p>
          </Reveal>

          <LinkCollectionSection
            title="Articles in This Category"
            intro="Each article links back into the portfolio&apos;s pillar pages, projects, and related technical content."
            items={postItems}
            actionLabel="Read article"
          />
        </Container>
      </Container>
    </>
  );
}

export default BlogCategoryPage;
