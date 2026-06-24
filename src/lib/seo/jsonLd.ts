// Structured-data builders. Each reads from src/lib/site.ts so the JSON-LD
// stays in sync with the page. Render the output in a route as:
//   <script type="application/ld+json"
//     dangerouslySetInnerHTML={{ __html: JSON.stringify(builder()) }} />
import { SITE, AGENT_STEPS } from "@/lib/site";

const SITE_URL = "https://www.webmcp.md";

export function orgAndWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE.name,
        url: SITE_URL,
        description: SITE.tagline,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/apple-icon.png` },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE.name,
        url: SITE_URL,
        description: SITE.tagline,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
      },
    ],
  };
}

export function agentProtocolHowToJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How an AI agent operates a WebMCP site",
    description:
      "The in-browser WebMCP protocol: how a browser AI agent discovers the tools a page registers via document.modelContext (or declarative <form> annotations), calls them with schema-valid arguments, and verifies the structured result.",
    totalTime: "PT2M",
    step: AGENT_STEPS.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.body,
      url: `${SITE_URL}/skill#step-${i + 1}`,
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

// Caller passes the SAME FAQ array that renders the visible <section>
// (import { FAQ } from "@/lib/site"). Schema text == on-page text by construction.
export function faqJsonLd(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

// Small helper component-free renderer kept inline at call sites.
export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data);
}
