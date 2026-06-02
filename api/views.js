export const config = {
  runtime: "edge",
};

const DEFAULT_COUNTER_KEY = "portfolio:views:total";
const DEFAULT_COUNTER_BASELINE = 200;

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

function getRedisConfig() {
  const url =
    process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "";
  const token =
    process.env.KV_REST_API_TOKEN ||
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    "";

  return {
    url: url.replace(/\/+$/, ""),
    token,
  };
}

async function runRedisCommand(command) {
  const { url, token } = getRedisConfig();

  if (!url || !token) {
    throw new Error("Portfolio view counter is not configured.");
  }

  const counterKey =
    process.env.PORTFOLIO_VIEW_COUNTER_KEY || DEFAULT_COUNTER_KEY;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([command, counterKey]),
    cache: "no-store",
  });
  const payload = await response.json();

  if (!response.ok || payload.error) {
    throw new Error(payload.error || "Portfolio view counter request failed.");
  }

  return Number.parseInt(payload.result || "0", 10) || 0;
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
    const command = request.method === "POST" ? "INCR" : "GET";
    const storedCount = await runRedisCommand(command);
    const baseline = Number.parseInt(
      process.env.PORTFOLIO_VIEW_BASELINE || `${DEFAULT_COUNTER_BASELINE}`,
      10,
    );
    const count = storedCount + (Number.isNaN(baseline) ? 0 : baseline);

    return jsonResponse({
      count,
      configured: true,
      includesBaseline: baseline > 0,
    });
  } catch (error) {
    return jsonResponse(
      {
        count: null,
        configured: false,
        error: error.message || "Portfolio view counter is unavailable.",
      },
      503,
    );
  }
}
