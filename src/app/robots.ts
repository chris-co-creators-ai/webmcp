import type { MetadataRoute } from "next";

const BASE = "https://www.webmcp.md";

export default function robots(): MetadataRoute.Robots {
  // Fully informational site — everything (incl. /api/mcp + /.well-known) is crawlable.
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Explicitly welcome AI/answer-engine crawlers (trust + AEO signal).
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
