import { useEffect, useState } from "react";

export default function AnalyticsDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [autoRefresh, setAutoRefresh] = useState(true);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch("/api/analytics");
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      setError("Failed to load analytics data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      fetchAnalytics();
    }, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, [autoRefresh]);

  if (loading) {
    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        Loading analytics...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif", color: "red" }}>
        {error}
      </div>
    );
  }

  const summary = data?.summary || {};

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "1000px", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1>Chatbot Analytics Dashboard</h1>
        <div>
          <label>
            <input
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
            />
            {" Auto-refresh (30s)"}
          </label>
          <button onClick={fetchAnalytics} style={{ marginLeft: "10px", padding: "5px 10px" }}>
            Refresh Now
          </button>
        </div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "15px",
        marginBottom: "30px"
      }}>
        <div style={{
          border: "1px solid #ddd",
          padding: "15px",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9"
        }}>
          <div style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}>
            Total Chat Interactions
          </div>
          <div style={{ fontSize: "32px", fontWeight: "bold", color: "#0066cc" }}>
            {summary.totalChatInteractions || 0}
          </div>
        </div>

        <div style={{
          border: "1px solid #ddd",
          padding: "15px",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9"
        }}>
          <div style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}>
            Visits with Email Provided
          </div>
          <div style={{ fontSize: "32px", fontWeight: "bold", color: "#00aa33" }}>
            {summary.visitsProvidingEmail || 0}
          </div>
          <div style={{ fontSize: "11px", color: "#999", marginTop: "5px" }}>
            {summary.emailProvisionRate || "0%"} of visits
          </div>
        </div>

        <div style={{
          border: "1px solid #ddd",
          padding: "15px",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9"
        }}>
          <div style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}>
            Unique Emails Collected
          </div>
          <div style={{ fontSize: "32px", fontWeight: "bold", color: "#ff6600" }}>
            {summary.uniqueEmailsCollected || 0}
          </div>
        </div>

        <div style={{
          border: "1px solid #ddd",
          padding: "15px",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9"
        }}>
          <div style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}>
            Avg Message Length
          </div>
          <div style={{ fontSize: "32px", fontWeight: "bold", color: "#9900cc" }}>
            {summary.metrics?.averageMessageLength || 0}
          </div>
          <div style={{ fontSize: "11px", color: "#999", marginTop: "5px" }}>
            characters
          </div>
        </div>

        <div style={{
          border: "1px solid #ddd",
          padding: "15px",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9"
        }}>
          <div style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}>
            Avg Answer Length
          </div>
          <div style={{ fontSize: "32px", fontWeight: "bold", color: "#0099cc" }}>
            {summary.metrics?.averageAnswerLength || 0}
          </div>
          <div style={{ fontSize: "11px", color: "#999", marginTop: "5px" }}>
            characters
          </div>
        </div>
      </div>

      {summary.recentEmails && summary.recentEmails.length > 0 && (
        <div style={{
          border: "1px solid #ddd",
          padding: "15px",
          borderRadius: "8px",
          backgroundColor: "#fafafa"
        }}>
          <h2 style={{ marginTop: 0, marginBottom: "15px", fontSize: "18px" }}>
            Recent Emails ({summary.recentEmails.length})
          </h2>
          <div style={{ 
            maxHeight: "300px", 
            overflowY: "auto",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "4px"
          }}>
            {summary.recentEmails.map((email, idx) => (
              <div 
                key={idx}
                style={{
                  padding: "8px",
                  borderBottom: idx < summary.recentEmails.length - 1 ? "1px solid #eee" : "none",
                  fontSize: "14px",
                  wordBreak: "break-all"
                }}
              >
                <span style={{ 
                  display: "inline-block",
                  padding: "2px 6px",
                  backgroundColor: "#e6f2ff",
                  borderRadius: "3px",
                  fontSize: "12px",
                  marginRight: "8px"
                }}>
                  {idx + 1}
                </span>
                {email}
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{
        marginTop: "30px",
        padding: "15px",
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
        fontSize: "12px",
        color: "#666"
      }}>
        <p>
          <strong>Last updated:</strong> {new Date().toLocaleString()}
        </p>
        <p style={{ margin: "5px 0 0 0" }}>
          <strong>How this works:</strong> Every time someone chats with your chatbot, an interaction is logged. If they share their email, it's captured and displayed here. This helps you follow up with interested visitors.
        </p>
      </div>
    </div>
  );
}
