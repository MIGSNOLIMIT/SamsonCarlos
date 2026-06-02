export const config = {
  runtime: "nodejs",
};

import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), ".data");
const ANALYTICS_FILE = path.join(DATA_DIR, "chatbot-analytics.json");

function buildHeaders(contentType = "application/json") {
  return {
    "Content-Type": contentType,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: buildHeaders(),
  });
}

async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (error) {
    // Directory might already exist
  }
}

export default async function handler(request) {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: buildHeaders("text/plain; charset=utf-8"),
    });
  }

  if (request.method !== "GET" && request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed." }, 405);
  }

  try {
    await ensureDataDir();

    if (request.method === "POST") {
      try {
        const body = await request.json();
        const entry = {
          timestamp: body.timestamp || new Date().toISOString(),
          messageLength: body.message?.length || 0,
          answerLength: body.answerLength || 0,
          hasEmail: body.hasEmail || false,
          userEmail: body.userEmail || null,
        };

        let analytics = [];
        try {
          const existingData = await fs.readFile(ANALYTICS_FILE, "utf-8");
          analytics = JSON.parse(existingData);
        } catch {
          analytics = [];
        }

        analytics.push(entry);
        await fs.writeFile(ANALYTICS_FILE, JSON.stringify(analytics, null, 2));

        return jsonResponse({
          success: true,
          message: "Analytics logged successfully",
        });
      } catch (error) {
        console.error("Analytics logging error:", error);
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
        let analytics = [];
        try {
          const data = await fs.readFile(ANALYTICS_FILE, "utf-8");
          analytics = JSON.parse(data);
        } catch {
          analytics = [];
        }

        const totalVisits = analytics.length;
        const visitsWithEmail = analytics.filter((a) => a.hasEmail).length;
        const emails = analytics
          .filter((a) => a.userEmail)
          .map((a) => a.userEmail);
        const uniqueEmails = [...new Set(emails)];

        const avgMessageLength =
          analytics.length > 0
            ? Math.round(
                analytics.reduce((sum, a) => sum + a.messageLength, 0) /
                  analytics.length,
              )
            : 0;

        const avgAnswerLength =
          analytics.length > 0
            ? Math.round(
                analytics.reduce((sum, a) => sum + a.answerLength, 0) /
                  analytics.length,
              )
            : 0;

        return jsonResponse({
          success: true,
          summary: {
            totalChatInteractions: totalVisits,
            visitsProvidingEmail: visitsWithEmail,
            emailProvisionRate:
              totalVisits > 0
                ? ((visitsWithEmail / totalVisits) * 100).toFixed(1) + "%"
                : "0%",
            uniqueEmailsCollected: uniqueEmails.length,
            recentEmails: uniqueEmails.slice(-10).reverse(),
            metrics: {
              averageMessageLength: avgMessageLength,
              averageAnswerLength: avgAnswerLength,
              totalInteractions: totalVisits,
            },
          },
          allData: analytics,
        });
      } catch (error) {
        console.error("Analytics retrieval error:", error);
        return jsonResponse(
          {
            error: "Failed to retrieve analytics",
          },
          500,
        );
      }
    }
  } catch (error) {
    console.error("Analytics handler error:", error);
    return jsonResponse(
      {
        error: "Internal server error",
      },
      500,
    );
  }
}
