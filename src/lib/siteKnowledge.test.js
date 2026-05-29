import { hasPortfolioIntent, searchSiteKnowledge } from "./siteKnowledge";

test("prioritizes Carlos profile content for personal questions", () => {
  const results = searchSiteKnowledge("Tell me about Carlos.", { limit: 3 });
  const combinedContent = results.map((result) => result.content).join(" ");

  expect(["site-profile", "profile-experience-summary"]).toContain(
    results[0].id,
  );
  expect(combinedContent).toMatch(/4 years of hands-on experience/i);
  expect(combinedContent).toMatch(/Next\.js|React|Python/i);
});

test("recognizes portfolio topics and rejects unrelated topics", () => {
  expect(hasPortfolioIntent("What projects did Carlos build?")).toBe(true);
  expect(hasPortfolioIntent("Can I hire him for React work?")).toBe(true);
  expect(hasPortfolioIntent("What is the capital of France?")).toBe(false);
});
