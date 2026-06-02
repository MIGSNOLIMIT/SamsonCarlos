import React, { useEffect, useMemo, useState } from "react";

const SESSION_KEY = "carlos-portfolio-view-counted";
let portfolioViewRequest = null;

function getRequestMethod() {
  try {
    if (window.sessionStorage.getItem(SESSION_KEY)) {
      return "GET";
    }

    window.sessionStorage.setItem(SESSION_KEY, "true");
  } catch (error) {
    return "GET";
  }

  return "POST";
}

function PortfolioViewCounter() {
  const [viewCount, setViewCount] = useState(null);
  const [includesBaseline, setIncludesBaseline] = useState(false);
  const endpoint = useMemo(
    () => process.env.REACT_APP_VIEWS_API_URL || "/api/views",
    [],
  );

  useEffect(() => {
    if (!portfolioViewRequest) {
      portfolioViewRequest = fetch(endpoint, {
        method: getRequestMethod(),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async (response) => {
          const payload = await response.json();

          if (!response.ok) {
            throw new Error(payload.error || "Portfolio view counter is unavailable.");
          }

          return {
            count: payload.count,
            includesBaseline: Boolean(payload.includesBaseline),
          };
        })
        .catch(() => null);
    }

    portfolioViewRequest.then((result) => {
      setViewCount(result?.count ?? null);
      setIncludesBaseline(Boolean(result?.includesBaseline));
    });
  }, [endpoint]);

  return (
    <div className="impact-card portfolio-view-card">
      <p className="impact-value">
        {viewCount == null ? "--" : viewCount.toLocaleString()}
      </p>
      <p className="impact-label">Portfolio views</p>
      <p className="impact-context">
        {viewCount == null
          ? "Live counter activates on the deployed site"
          : includesBaseline
            ? "Live total with a 200-view launch baseline"
            : "Live total for this portfolio website"}
      </p>
    </div>
  );
}

export default PortfolioViewCounter;
