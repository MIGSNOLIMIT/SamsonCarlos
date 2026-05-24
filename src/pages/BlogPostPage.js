import React from "react";
import { Navigate, useParams } from "react-router-dom";
import ContentPage from "./ContentPage";
import { blogCategories, findBlogPostBySlug } from "../content/siteContent";

function BlogPostPage() {
  const { slug } = useParams();
  const post = findBlogPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const category = blogCategories.find((item) => item.id === post.categoryId);

  return (
    <ContentPage
      page={post}
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: "Blog", to: "/blog" },
        { label: category?.title || "Category", to: category?.path || "/blog" },
        { label: post.title, to: post.path },
      ]}
      relatedTitle="Related Posts and Case Studies"
      relatedIntro="These links continue the same topic thread through projects, engineering breakdowns, and pillar pages."
    />
  );
}

export default BlogPostPage;
