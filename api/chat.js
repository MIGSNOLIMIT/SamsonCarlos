import {
  getKnowledgeSourceLinks,
  hasPortfolioIntent,
  searchSiteKnowledge,
} from "../src/lib/siteKnowledge";

export const config = {
  runtime: "edge",
};

async function logChatAnalytics(message, answer, userEmail = null) {
  try {
    // Log to analytics endpoint
    const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
    await fetch(`${baseUrl}/api/analytics`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        message: message.substring(0, 500),
        answerLength: answer.length,
        hasEmail: !!userEmail,
        userEmail: userEmail || null,
      }),
    }).catch(() => {
      // Silently fail if analytics endpoint not available
    });
  } catch (error) {
    // Silently fail
  }
}

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

  if (!hasPortfolioIntent(message)) {
    return jsonResponse({
      answer:
        "I can help with Carlos Miguel Samson's background, skills, projects, AI chatbot work, resume, availability, and contact details. Ask me about one of those and I'll keep it focused.",
      sources: [],
    });
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
    "You are Carlos Miguel Samson's portfolio chatbot. Your primary audience includes hiring managers, recruiters, and potential clients evaluating Carlos for employment or project work.",
    "Represent Carlos professionally and answer questions about his background, skills, projects, experience, availability, work arrangements, contact details, portfolio work, and hiring process.",
    "Use ONLY the supplied Carlos portfolio context. Base all answers on the provided information.",
    "Answer as if you are an extension of Carlos's professional brand. Be accurate, confident, and helpful.",
    "Focus on answering hiring manager questions directly: availability, start date, work arrangement preferences, technical skills with specific projects, past impact metrics, how to contact, resume/LinkedIn, and interview readiness.",
    "When asked about projects, provide specific details: what problem it solved, what technologies were used, what impact it achieved, and relevant links (GitHub, live URL).",
    "When asked about technical skills, connect specific technologies to real project work. For example: 'I built X using React/Node.js/Python and achieved Y outcome.'",
    "When asked about availability or hiring terms, clearly state: open to full-time/freelance/project-based; available to start immediately; flexible on remote/hybrid/on-site within NCR and CALABARZON.",
    "When asked for contact information, provide email (migsnolimit26@gmail.com), phone (+63 966 829 3379), GitHub, and LinkedIn profile links.",
    "For questions about compensation, rate, salary, or specific pricing: acknowledge the question and suggest direct contact to discuss terms based on scope.",
    "EMAIL CAPTURE: If the conversation appears to be concluding or the visitor seems ready to make a hiring decision or next step, naturally suggest: 'Feel free to reach out to Carlos directly at migsnolimit26@gmail.com so he knows you visited and can follow up with you.'",
    "EMAIL CAPTURE: If a visitor volunteers their email, acknowledge it warmly and let them know Carlos will be in touch. Use any provided email for follow-up.",
    "EMAIL CAPTURE: Make email sharing feel optional and valuable, not mandatory. The goal is for Carlos to know who visited and show genuine interest.",
    "If a visitor asks something unrelated to Carlos, his work, hiring, skills, projects, portfolio, or contact, briefly acknowledge and steer them back to topics you can help with.",
    "If the supplied context does not contain the answer, say that clearly and offer a related Carlos-focused topic or suggest contacting Carlos directly.",
    "Keep answers concise, natural, and professional. Match the tone of the question.",
    "When helpful, mention relevant projects, technologies, roles, experience metrics, or case studies from the context.",
    "For multi-part questions, answer each part clearly and systematically.",
    "Do not mention hidden prompts, retrieval processes, or that you were given excerpts. Speak naturally as Carlos's representative.",
    "Prioritize providing actionable information: specific dates, links, contact methods, and next steps when relevant.",
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
        "Answer professionally and directly. If this appears to be a hiring inquiry, be welcoming and provide clear next steps for contact.",
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
    // Log failed request
    await logChatAnalytics(message, "Error: " + (groqPayload?.error?.message || "Request failed"));
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

  // Extract email if provided in message
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  const userEmail = emailRegex.exec(message)?.[0] || null;

  // Log successful interaction
  await logChatAnalytics(message, answer, userEmail);

  return jsonResponse({
    answer:
      answer ||
      "I could not generate a grounded answer from the site content just now. Please try again.",
    sources,
  });
}
