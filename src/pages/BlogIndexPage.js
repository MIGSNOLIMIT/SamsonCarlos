import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../components/Particle";
import Reveal from "../components/Reveal";
import Seo from "../components/SEO/Seo";
import Breadcrumbs from "../components/SEO/Breadcrumbs";
import LinkCollectionSection from "../components/SeoHub/LinkCollectionSection";
import {
  blogCategories,
  blogPosts,
  createPersonSchema,
  createWebsiteSchema,
  getAbsoluteUrl,
  getReadingMinutes,
  getTotalReadingMinutes,
  pillarPages,
  siteConfig,
} from "../content/siteContent";

function BlogIndexPage() {
  const postItems = blogPosts.map((post) => ({
    ...post,
    readingMinutes: getReadingMinutes(post),
  }));

  const categoryItems = blogCategories.map((category) => ({
    ...category,
    articleCount: blogPosts.filter((post) => post.categoryId === category.id).length,
    totalReadingMinutes: getTotalReadingMinutes(
      blogPosts.filter((post) => post.categoryId === category.id),
    ),
    description: category.description,
  }));

  const schema = [
    createWebsiteSchema(),
    createPersonSchema(),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Developer Blog Hub",
      description:
        "Blog categories and posts covering case studies, SEO engineering, project breakdowns, and system design explanations.",
      url: getAbsoluteUrl("/blog"),
      author: {
        "@type": "Person",
        name: siteConfig.siteName,
      },
    },
  ];

  return (
    <>
      <Seo
        title="Developer Blog Hub | Case Studies, SEO Engineering, System Design"
        description="Explore developer writing on case studies, SEO engineering, project breakdowns, and system design explanations."
        path="/blog"
        keywords={["developer blog", "software engineering case studies"]}
        schema={schema}
      />
      <Particle />
      <Container fluid className="authority-page-section">
        <Container className="authority-page-shell">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Blog", to: "/blog" },
            ]}
          />
          <Reveal delay={40}>
            <p className="authority-kicker">Blog Hub</p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="authority-title">
              Notes From My Projects, Case Studies, and Engineering Decisions
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="authority-lead">
              This is where I unpack the work behind the portfolio. Some posts
              are project stories, some are build notes, and some are just me
              being honest about why I chose one approach over another.
            </p>
          </Reveal>
          <Reveal delay={165}>
            <p className="authority-meta">
              {postItems.length} articles | about {getTotalReadingMinutes(blogPosts)} min of reading
            </p>
          </Reveal>
          <Reveal className="authority-block blog-guide-block" delay={190} direction="left">
            <section>
              <h2>What You&apos;ll Find Here</h2>
              <p>
                The categories below are just a simple way to browse. If you
                already know what you care about, jump straight into the posts.
              </p>
              <p>
                I wrote these pages to explain what the screenshots alone do
                not show: the tradeoffs, constraints, and product decisions
                behind the builds.
              </p>
            </section>
          </Reveal>
          <Reveal className="authority-block authority-block-float" delay={230} direction="right">
            <section>
              <h2>If You Want a Starting Point</h2>
              <ul>
                <li>Start with the case-study posts if you want the problem, constraints, and outcome first.</li>
                <li>Open the system-design posts if you want the architecture behind those projects.</li>
                <li>Read the SEO posts last if you want to see how I structured the portfolio itself.</li>
              </ul>
            </section>
          </Reveal>

          <LinkCollectionSection
            title="Browse by Topic"
            intro="These category pages group the writing by theme."
            items={categoryItems}
            variant="category"
            actionLabel="Open category"
          />

          <LinkCollectionSection
            title="Start With These Articles"
            intro="These are the actual posts. Each one connects back to projects, case studies, or broader topic pages."
            items={postItems}
            actionLabel="Read article"
          />

          <LinkCollectionSection
            title="Pillar Pages Supported by the Blog"
            intro="These broader pages tie the project and blog content together."
            items={pillarPages.filter((page) => page.id !== "pillar-home")}
            compact
          />
        </Container>
      </Container>
    </>
  );
}

export default BlogIndexPage;
