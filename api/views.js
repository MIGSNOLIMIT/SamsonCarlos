export const config = {
  runtime: "nodejs",
};

import { promises as fs } from "fs";
import path from "path";

const DEFAULT_COUNTER_BASELINE = 200;
const VIEWS_FILE = path.join(process.cwd(), ".data", "views-counter.json");

function buildHeaders(contentType = "application/json") {
  return {
    "Content-Type": contentType,
    "Cache-Control": "no-store",
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

async function getOrInitializeCounter() {
  try {
    // Ensure .data directory exists
    const dataDir = path.join(process.cwd(), ".data");
    try {
      await fs.mkdir(dataDir, { recursive: true });
    } catch (error) {
      // Directory might already exist
    }

    // Try to read existing counter
    try {
      const data = await fs.readFile(VIEWS_FILE, "utf-8");
      return parseInt(JSON.parse(data).count, 10) || 0;
    } catch (error) {
      // File doesn't exist, return 0
      return 0;
    }
  } catch (error) {
    return 0;
  }
}

async function incrementCounter() {
  try {
    const dataDir = path.join(process.cwd(), ".data");
    await fs.mkdir(dataDir, { recursive: true });

    let currentCount = 0;
    try {
      const data = await fs.readFile(VIEWS_FILE, "utf-8");
      currentCount = parseInt(JSON.parse(data).count, 10) || 0;
    } catch (error) {
      // File doesn't exist
    }

    const newCount = currentCount + 1;
    await fs.writeFile(
      VIEWS_FILE,
      JSON.stringify({ count: newCount, lastUpdated: new Date().toISOString() }, null, 2)
    );

    return newCount;
  } catch (error) {
    console.error("Failed to increment counter:", error);
    return 0;
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
    const baseline = DEFAULT_COUNTER_BASELINE;
    let count = 0;

    if (request.method === "POST") {
      // Increment on POST (new visit)
      count = await incrementCounter();
    } else {
      // Get current count on GET (returning visitor)
      count = await getOrInitializeCounter();
    }

    const totalCount = count + baseline;

    return jsonResponse({
      count: totalCount,
      configured: true,
      includesBaseline: baseline > 0,
    });
  } catch (error) {
    console.error("Portfolio view counter error:", error);
    return jsonResponse(
      {
        count: DEFAULT_COUNTER_BASELINE,
        configured: false,
        error: "Portfolio view counter encountered an error.",
      },
      503,
    );
  }
  }
}
