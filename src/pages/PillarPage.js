import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ContentPage from "./ContentPage";
import { findPillarBySlug } from "../content/siteContent";

function PillarPage({ slug: slugProp }) {
  const params = useParams();
  const slug = slugProp || params.slug;
  const page = findPillarBySlug(slug);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <ContentPage
      page={page}
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: page.title, to: page.path },
      ]}
      relatedTitle="Supporting Cluster Pages"
      relatedIntro="These supporting pages expand the broader topic with more specific case studies, architecture notes, and long-tail content."
    />
  );
}

export default PillarPage;
