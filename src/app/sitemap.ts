import type { MetadataRoute } from "next";

const BASE = "https://www.webmcp.md";

// Bump when page content materially changes (freshness signal for crawlers).
const LAST_MODIFIED = new Date("2026-06-24");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/skill`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.5 },
  ];
}
