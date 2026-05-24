import { useEffect } from "react";
import { getAbsoluteUrl, siteConfig } from "../../content/siteContent";

function setMetaTag(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function setLinkTag(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function Seo({
  title,
  description,
  path = "/",
  image = siteConfig.defaultImage,
  type = "website",
  keywords = [],
  schema = [],
}) {
  useEffect(() => {
    const canonicalUrl = getAbsoluteUrl(path);
    const imageUrl = image.startsWith("http") ? image : getAbsoluteUrl(image);
    const pageTitle = title || siteConfig.siteName;
    const allKeywords = [...siteConfig.keywords, ...keywords].join(", ");

    document.title = pageTitle;

    setMetaTag('meta[name="description"]', {
      name: "description",
      content: description,
    });
    setMetaTag('meta[name="keywords"]', {
      name: "keywords",
      content: allKeywords,
    });
    setMetaTag('meta[property="og:type"]', {
      property: "og:type",
      content: type,
    });
    setMetaTag('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    setMetaTag('meta[property="og:title"]', {
      property: "og:title",
      content: pageTitle,
    });
    setMetaTag('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    setMetaTag('meta[property="og:image"]', {
      property: "og:image",
      content: imageUrl,
    });
    setMetaTag('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    setMetaTag('meta[name="twitter:url"]', {
      name: "twitter:url",
      content: canonicalUrl,
    });
    setMetaTag('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: pageTitle,
    });
    setMetaTag('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    setMetaTag('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: imageUrl,
    });
    setMetaTag('meta[itemprop="name"]', {
      itemprop: "name",
      content: pageTitle,
    });
    setMetaTag('meta[itemprop="description"]', {
      itemprop: "description",
      content: description,
    });
    setMetaTag('meta[itemprop="image"]', {
      itemprop: "image",
      content: imageUrl,
    });
    setLinkTag('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });

    const scriptId = "page-jsonld";
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }, [description, image, keywords, path, schema, title, type]);

  return null;
}

export default Seo;
