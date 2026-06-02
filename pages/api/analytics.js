import { promises as fs } from "fs";
import path from "path";

// This endpoint logs analytics and provides stats
// Data is stored in .data/chatbot-analytics.json

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  const dataDir = path.join(process.cwd(), ".data");
  const analyticsFile = path.join(dataDir, "chatbot-analytics.json");

  // Ensure .data directory exists
  try {
    await fs.mkdir(dataDir, { recursive: true });
  } catch (error) {
    // Directory might already exist
  }

  if (req.method === "POST") {
    try {
      const entry = {
        timestamp: req.body.timestamp || new Date().toISOString(),
        messageLength: req.body.message?.length || 0,
        answerLength: req.body.answerLength || 0,
        hasEmail: req.body.hasEmail || false,
        userEmail: req.body.userEmail || null,
      };

      let analytics = [];
      try {
        const existingData = await fs.readFile(analyticsFile, "utf-8");
        analytics = JSON.parse(existingData);
      } catch {
        analytics = [];
      }

      analytics.push(entry);

      await fs.writeFile(analyticsFile, JSON.stringify(analytics, null, 2));

      return res.status(200).json({
        success: true,
        message: "Analytics logged successfully",
      });
    } catch (error) {
      console.error("Analytics logging error:", error);
      return res.status(400).json({
        error: "Failed to log analytics",
      });
    }
  }

  if (req.method === "GET") {
    try {
      let analytics = [];
      try {
        const data = await fs.readFile(analyticsFile, "utf-8");
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

      return res.status(200).json({
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
      return res.status(500).json({
        error: "Failed to retrieve analytics",
      });
    }
  }

  return res.status(405).json({
    error: "Method not allowed",
  });
}
