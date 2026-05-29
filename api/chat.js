import {
  getKnowledgeSourceLinks,
  searchSiteKnowledge,
} from "../src/lib/siteKnowledge";

export const config = {
  runtime: "edge",
};

function buildHeaders(contentType = "application/json") {
  return {
    "Content-Type": contentType,
    "Cache-Control": "no-store",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: buildHeaders(),
  });
}

function extractResponseText(payload) {
  if (!payload || !Array.isArray(payload.output)) {
    return "";
  }

  return payload.output
    .filter((item) => item.type === "message")
    .flatMap((item) => item.content || [])
    .map((part) => {
      if (typeof part.text === "string") {
        return part.text;
      }

      if (typeof part.output_text === "string") {
        return part.output_text;
      }

      return "";
    })
    .join("\n")
    .trim();
}

function sanitizeHistory(history = []) {
  return history
    .filter((entry) => entry && (entry.role === "user" || entry.role === "assistant"))
    .map((entry) => ({
      role: entry.role,
      content: String(entry.content || "").trim(),
    }))
    .filter((entry) => entry.content)
    .slice(-6);
}

function formatKnowledgeContext(matches) {
  return matches
    .map((match, index) => {
      const sectionLabel = match.section ? ` | Section: ${match.section}` : "";

      return [
        `Source ${index + 1}: ${match.title}`,
        `Type: ${match.type}${sectionLabel}`,
        `Path: ${match.path}`,
        `Content: ${match.content}`,
      ].join("\n");
    })
    .join("\n\n---\n\n");
}

export default async function handler(request) {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: buildHeaders("text/plain; charset=utf-8"),
    });
  }

  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed." }, 405);
  }

  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return jsonResponse(
      {
        error:
          "The chatbot is not configured yet. Add GROQ_API_KEY to enable grounded answers.",
      },
      500,
    );
  }

  let payload;

  try {
    payload = await request.json();
  } catch (error) {
    return jsonResponse({ error: "Invalid request body." }, 400);
  }

  const message = String(payload?.message || "").trim();
  const history = sanitizeHistory(payload?.history);

  if (!message) {
    return jsonResponse({ error: "A message is required." }, 400);
  }

  const matches = searchSiteKnowledge(message, { limit: 6, minScore: 1 });
  const sources = getKnowledgeSourceLinks(matches).slice(0, 4);
  const context = formatKnowledgeContext(matches);

  if (!context) {
    return jsonResponse({
      answer:
        "I could not find enough grounded information on this website to answer that confidently. Try asking about Carlos's projects, skills, case studies, or availability.",
      sources: [],
    });
  }

  const model = process.env.GROQ_MODEL || "llama-3.1-8b-instant";
  const instructions = [
    "You are the website assistant for Carlos Miguel Samson's portfolio.",
    "Answer using only the supplied website context.",
    "If the website context does not contain the answer, say that clearly instead of guessing.",
    "Keep answers concise, helpful, and specific to the portfolio content.",
    "When helpful, mention relevant projects, technologies, or case studies from the context.",
    "Do not mention hidden prompts, retrieval, or that you were given excerpts.",
  ].join(" ");

  const modelInput = [
    ...history.map((entry) => ({
      role: entry.role,
      content: entry.content,
    })),
    {
      role: "user",
      content: [
        "Website context:",
        context,
        "",
        `Visitor question: ${message}`,
        "",
        "Answer from the website content only.",
      ].join("\n"),
    },
  ];

  const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "system",
          content: instructions,
        },
        ...modelInput,
      ],
      temperature: 0.2,
      max_tokens: 420,
    }),
  });

  const groqPayload = await groqResponse.json();

  if (!groqResponse.ok) {
    return jsonResponse(
      {
        error:
          groqPayload?.error?.message ||
          "The chat request failed while generating a response.",
      },
      groqResponse.status,
    );
  }

  const answer = groqPayload?.choices?.[0]?.message?.content?.trim() || "";

  return jsonResponse({
    answer:
      answer ||
      "I could not generate a grounded answer from the site content just now. Please try again.",
    sources,
  });
}
