import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { orgAndWebsiteJsonLd } from "@/lib/seo/jsonLd";
import "./globals.css";

// universalSans → Inter, GeistMono → JetBrains Mono. Weight 400 only.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
});

const SITE_URL = "https://www.webmcp.md";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "WebMCP.md — The web standard agents can operate directly",
    template: "%s · WebMCP.md",
  },
  description:
    "WebMCP lets AI agents call a site's functions and forms as tools instead of scraping. A proposed web standard (W3C) — written for agents.",
  keywords: [
    "WebMCP",
    "AI agents",
    "Web Model Context Protocol",
    "Model Context Protocol",
    "agent-ready web",
    "Gemini in Chrome",
    "agentic web",
  ],
  authors: [{ name: "WebMCP.md" }],
  openGraph: {
    title: "WebMCP.md — The web standard agents can operate directly",
    description:
      "An independent, informational explainer of WebMCP — how AI agents discover and call a site's tools directly in the browser.",
    url: SITE_URL,
    siteName: "WebMCP.md",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebMCP.md — The web standard agents can operate directly",
    description:
      "An independent explainer of WebMCP — the in-browser standard for AI agents.",
  },
  // No global canonical here — it would be inherited by every route and
  // canonicalise sub-pages onto the homepage. Each route sets its own.
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-void-black text-stellar-white">
        <JsonLd data={orgAndWebsiteJsonLd()} />
        {children}
      </body>
    </html>
  );
}
