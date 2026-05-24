import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ContentPage from "./ContentPage";
import { findClusterBySlug } from "../content/siteContent";

function ClusterPage() {
  const { slug } = useParams();
  const page = findClusterBySlug(slug);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <ContentPage
      page={page}
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: "Projects", to: "/projects" },
        { label: page.title, to: page.path },
      ]}
      relatedTitle="Continue the Topic Cluster"
      relatedIntro="These links connect the case study or engineering note back to its pillar pages and related supporting content."
    />
  );
}

export default ClusterPage;
