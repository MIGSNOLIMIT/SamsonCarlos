import { promises as fs } from "fs";
import path from "path";

export const config = {
  runtime: "edge",
};

const ANALYTICS_FILE = "/tmp/chatbot-analytics.json";

function buildHeaders(contentType = "application/json") {
  return {
    "Content-Type": contentType,
    "Cache-Control": "no-store",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: buildHeaders(),
  });
}

async function readAnalytics() {
  try {
    // For edge runtime, we'll use a simple in-memory store
    // In production, use a database or KV store
    return [];
  } catch (error) {
    return [];
  }
}

async function appendAnalytics(entry) {
  try {
    // For edge runtime with Vercel, analytics will be stored per deployment
    // This is a placeholder - consider using:
    // - Vercel KV for persistent storage
    // - A database service like Supabase
    // - An external analytics service
    
    // For now, log to response headers for visibility
    console.log("[CHATBOT ANALYTICS]", JSON.stringify(entry));
  } catch (error) {
    console.error("Failed to log analytics:", error);
  }
}

async function getAnalyticsSummary() {
  try {
    // Return a summary based on available data
    // This is a placeholder that would connect to your data store
    return {
      status: "configured",
      message: "Analytics tracking is active. Data is being collected.",
      note: "For persistent storage, integrate with Vercel KV, Supabase, or your database.",
    };
  } catch (error) {
    return {
      error: "Failed to retrieve analytics",
      status: "error",
    };
  }
}

export default async function handler(request) {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: buildHeaders("text/plain; charset=utf-8"),
    });
  }

  if (request.method === "POST") {
    try {
      const payload = await request.json();

      // Log the interaction
      const analyticsEntry = {
        timestamp: payload.timestamp || new Date().toISOString(),
        messageLength: payload.message?.length || 0,
        answerLength: payload.answerLength || 0,
        hasEmail: payload.hasEmail || false,
        userEmail: payload.userEmail || null,
      };

      await appendAnalytics(analyticsEntry);

      return jsonResponse({
        success: true,
        message: "Analytics logged successfully",
      });
    } catch (error) {
      return jsonResponse(
        {
          error: "Failed to log analytics",
        },
        400,
      );
    }
  }

  if (request.method === "GET") {
    try {
      const summary = await getAnalyticsSummary();
      return jsonResponse(summary);
    } catch (error) {
      return jsonResponse(
        {
          error: "Failed to retrieve analytics",
        },
        500,
      );
    }
  }

  return jsonResponse(
    {
      error: "Method not allowed",
    },
    405,
  );
}
