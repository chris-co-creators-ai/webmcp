# Competitor / topic-gap report — WebMCP.md — 2026-06-24

> Scope per team-lead brief. WebMCP.md has **no direct commercial rival** — it sells a $49
> "WebMCP Agent Skill". The competition is for the **topic space** ("WebMCP", "make my site
> agent-ready", "llms.txt", "AEO/GEO") owned by docs sites, dev blogs, tooling vendors and
> awesome-lists. ANALYZE ONLY — no Payload writes, no content shipped.

## 0. Our current coverage (the baseline)

Routes in `src/app/sitemap.ts`: **`/`, `/skill`, `/about`** (3 indexable URLs). Plus machine
endpoints not in sitemap: `/.well-known/web-mcp`, `/llms.txt`, `/api/mcp`, `/download`.

Homepage sections (`src/components/Sections.tsx` + `src/lib/site.ts`):
- Hero / ticker (announcement framing)
- DemoSection ("without it the agent guesses")
- **WhatIsWebMCP** — ~1 short paragraph + 3 concept cards + a 4-item timeline
- **AgentInstructions** — 4-step agent loop + 1 code snippet (~4 lines)
- SkillFeatures / Pricing / SelfDemo / UpdateCTA (all commercial)
- `/skill` — the agent-facing "how to operate a WebMCP site" (4 steps + self-tool list)

**Editorial footprint = effectively zero.** We have one thin "what is" block and one tiny
imperative snippet, both embedded in a sales page. We rank for nothing informational. Every
competitor below is a *standalone, indexable, long-form* asset; ours are page sections.

Notable factual gaps vs. canonical docs (`docs/webmcp-spec/`): our copy says "announced at
Google I/O May 19" and "Chrome 149"; the canonical spec mirror + the wider ecosystem date the
**announcement to 2026-02-10** and cite **Chrome origin trial from 146/149**. Worth a fact-pass,
but out of scope here (flagging only).

---

## 1. The competitor set (topic-space, not commercial)

| # | Property | Type | What they own |
|---|----------|------|---------------|
| C1 | **developer.chrome.com/docs/ai/webmcp** | 1st-party authority docs (Google) | overview, imperative API, declarative API, secure-tools, devtools, Lighthouse |
| C2 | **webmachinelearning.github.io/webmcp** (W3C) | The spec itself | normative spec, explainers, security/privacy questionnaire |
| C3 | **webmcp.dev** | OSS library + live-demo docs site | Tools/Prompts/Resources/Sampling, "connect to this site", getting-started |
| C4 | **webfuse.com** (blog + cheat sheet) | Vendor dev-blog | "What is WebMCP", "WebMCP vs MCP", **cheat sheet** (single-page reference) |
| C5 | **DataCamp / DEV / Medium / VyomEdge / No Hacks / Discovered Labs / locomotive.agency** | Independent how-to + explainer blogs | "what is", step-by-step build tutorials, "explained" |
| C6 | **Platinum.ai / WellKnownMCP / Lawrence Hitches** | Standards-comparison blogs | WebMCP vs MCP vs llms.txt vs SDF/CAP, "agentic web standards map 2026" |
| C7 | **webmcp-checker.com / webmcpchecker.com / webmcpinspector.com / mcpcat.io** | Free **tooling** (checker/inspector) + tool guides | "test if your site is agent-ready", validators, inspector guides |
| C8 | **llmstxt.org + AnswerDotAI/llms-txt** | Adjacent-standard authority | the /llms.txt spec, directory of adopters |
| C9 | **Jasper / Frase / Scrunch / Surmado / Evergreen** | AEO/GEO marketing blogs | AEO vs GEO vs SEO, "agent-ready content", tool roundups |
| C10 | **github.com/webmcpnet/awesome-webmcp, LeanMCP/awesome-webmcp, GoogleChromeLabs/webmcp-tools** | Curated awesome-lists / directories | the canonical link hubs of the niche |
| — | **webmcp.nl** | Dutch sibling (NOT a rival) | parity reference only |

---

## 2. Sitemap / topic-coverage matrix

Columns grouped: Chrome+W3C (authority), webmcp.dev (OSS docs), Blogs (C4/C5/C6), Tooling (C7),
AEO/GEO (C9). `✓` = covered as a standalone asset, `partial` = thin/embedded, `✗` = absent.

| Topic bucket | **WebMCP.md (us)** | Chrome+W3C | webmcp.dev | Blogs | Tooling | AEO/GEO |
|---|---|---|---|---|---|---|
| **What-is WebMCP** (explainer) | partial (page section) | ✓ | ✓ | ✓✓✓ | ✓ | partial |
| **How-to / build tutorial** (code) | partial (4-line snippet) | ✓ | ✓ | ✓✓✓ | ✓ | ✗ |
| **Imperative API** reference | ✗ | ✓ | ✓ | ✓ | ✓ | ✗ |
| **Declarative API** (HTML form) | ✗ | ✓ | partial | ✓ | ✓ | ✗ |
| **WebMCP vs MCP** comparison | ✗ | partial | partial | ✓✓ | — | ✗ |
| **WebMCP vs llms.txt / standards map** | ✗ | ✗ | ✗ | ✓✓ | ✗ | ✓ |
| **Security / permission model** | ✗ | ✓ | ✗ | partial | ✗ | ✗ |
| **Cheat sheet / quick reference** | ✗ | ✗ | ✗ | ✓ (webfuse) | ✗ | ✗ |
| **Agent-readiness checker (tool)** | ✗ (we have a self-demo only) | ✗ | partial | ✗ | ✓✓✓ | partial |
| **llms.txt explainer / how-to** | ✗ (we *serve* one, no page) | ✗ | ✗ | ✓ | ✗ | ✓✓ |
| **AEO/GEO "agent-ready content"** | ✗ | ✗ | ✗ | partial | ✗ | ✓✓✓ |
| **Examples / demos gallery** | partial (SelfDemo) | ✓ | ✓✓ | ✓ | ✓ | ✗ |
| **Spec status / changelog / timeline** | partial (4-item) | ✓ | ✗ | partial | ✗ | ✗ |
| **FAQ (schema-eligible)** | ✗ | ✗ | ✗ | ✓ | ✗ | ✓ |
| **Blog / news cadence** | ✗ | ✓ (Chrome blog) | ✗ | ✓✓✓ | partial | ✓✓✓ |

**Headline:** we are present (thinly) in exactly 2 buckets (what-is, how-to) and absent in 13.
Worse, our two "present" buckets are page *sections* inside a sales page, so they can't win an
informational query against a dedicated, well-structured article.

---

## 3. What format/length actually ranks (evidence)

- **Long-form "what is / explained"** dominates the SERP: VyomEdge "complete guide", Webfuse
  "practical guide", Discovered Labs "complete guide", DataCamp tutorial. These are 2k–4k-word
  standalone pages with H2-per-subtopic structure, a code block, and often an FAQ. Our
  `WhatIsWebMCP` is ~80 words.
- **Step-by-step build tutorials with runnable code** rank for the high-intent dev query
  ("build your first WebMCP application", "implement WebMCP Chrome 146+"). The winning shape is:
  imperative `registerTool({...})` example **+** declarative `<form toolname=...>` example side
  by side. We have a 4-line read-only snippet and no declarative example at all.
- **Comparison tables** ("WebMCP vs MCP", "llms.txt vs WebMCP vs SDF vs CAP") earn links and
  featured-snippet/AI-overview citations because they're extractable. Zero on our site.
- **Free interactive checker tools** (webmcp-checker.com "score in 15 seconds", Chrome Web Store
  inspectors) are the single best **backlink magnet** in the niche — every how-to article links
  to a checker. We have a `/self-demo` that demos *our* tools, not a tool that audits *the
  reader's* site.
- **Cheat sheet / single-page reference** (webfuse) is a low-effort, high-link-equity format we
  could match quickly from `docs/webmcp-spec/`.
- **FAQ with FAQPage schema** appears across the AEO/GEO winners and is the cheapest path to
  AI-overview citations; we ship no structured FAQ.

---

## 4. Top-5 prioritized content gaps

Impact / Effort on 1–5 (5 = highest impact / most effort).

| # | Gap (new asset) | Format | Impact | Effort | Why / evidence |
|---|---|---|---|---|---|
| 1 | **`/what-is-webmcp`** standalone pillar | Long-form (2–3k) + FAQ schema + 2 code blocks (imperative + declarative) | 5 | 3 | The single highest-volume query; 6+ rivals own it, we have an 80-word section. Anchors the whole topic cluster and our internal links. |
| 2 | **Free "Is your site agent-ready?" WebMCP checker** | Interactive tool page (enter URL → score + copy-paste fix) | 5 | 4 | The niche's #1 backlink magnet (webmcp-checker.com, inspector extensions). We already run `/api/mcp` + `/.well-known/web-mcp` — we can detect support natively. Turns our demo asset into a linkable utility. |
| 3 | **`/webmcp-vs-mcp` (and a standards-map variant)** | Comparison article + table | 4 | 2 | High-intent disambiguation query; extractable table wins AI-overview citations; low effort from `docs/webmcp-spec/`. Feeds gap #6's cluster. |
| 4 | **`/docs/declarative-api` + `/docs/imperative-api`** how-to pair | Step-by-step tutorial w/ runnable code | 4 | 3 | Captures the high-conversion *developer* query that precedes buying the Skill. Chrome owns it but a vendor-neutral, copy-paste version converts to the $49 product. |
| 5 | **`/llms-txt-and-webmcp` explainer + WebMCP cheat sheet** | Explainer + single-page reference | 3 | 2 | We already serve `/llms.txt` but have no page explaining it; llms.txt is an 844k-site, high-traffic adjacent term that funnels into WebMCP. Cheat sheet matches webfuse's link-earning format cheaply. |

Routing of the work (for the lead): #1/#3/#5 → `seo-content-creator`; #2/#4 →
`seo-content-creator` + `full-stack-engineer` (the checker is a real feature, not just copy).

---

## 5. Backlink / digital-PR angles (top 10)

No Ahrefs/SEMrush available — these are derived from the link-hub patterns visible in research
(awesome-lists, "every how-to links to a checker", standards-map round-ups). Manual
`link:competitor` minus `link:webmcp.md` should be run when a tool is available; targets below
are the highest-probability inbound sources.

| # | Target / hub | Currently links to | Links to us? | Pitch angle |
|---|---|---|---|---|
| 1 | **github.com/webmcpnet/awesome-webmcp** | Chrome docs, webmcp.dev, checkers, tutorials | ✗ | PR-add our checker (gap #2) + the cheat sheet under "Tools" / "Tutorials". Highest-value, lowest-friction link in the niche. |
| 2 | **github.com/LeanMCP/awesome-webmcp** | same class of resources | ✗ | Same PR-add; two awesome-lists = two canonical hub links. |
| 3 | **GoogleChromeLabs/webmcp-tools / mcpcat.io tool guides** | inspector + eval tooling | ✗ | List our checker as a complementary "readiness audit" alongside the official inspector. |
| 4 | **webmcp-checker.com / webmcpinspector.com** ecosystem | tutorials & each other | ✗ | Cross-link: our pillar (#1) cites their inspector; ask for reciprocal "further reading" link. |
| 5 | **Platinum.ai / WellKnownMCP standards-map** | WebMCP, MCP, llms.txt, CAP, SDF | ✗ | Offer our `/webmcp-vs-mcp` table (#3) as the canonical disambiguation they link from "WebMCP" row. |
| 6 | **Webfuse / DataCamp / DEV tutorial authors** | Chrome docs, spec | ✗ | Our checker (#2) as the "now test your implementation" CTA at the end of their tutorials — natural editorial link. |
| 7 | **llmstxt.org adopter directory + AnswerDotAI/llms-txt** | sites serving /llms.txt | ✗ | We serve a real `/llms.txt`; submit for the adopters list and pair with our llms-txt explainer (#5). |
| 8 | **AEO/GEO blogs (Jasper / Frase / Scrunch / Surmado)** | AEO tools, structured-data guides | ✗ | Pitch "WebMCP is the action layer of AEO" guest angle + original data ("X% of top sites expose a tool") from our checker's aggregate scans. |
| 9 | **Hacker News / r/webdev / dev.to** | trending agentic-web posts | ✗ | Launch the free checker as a Show HN / dev.to post — checkers in this niche reliably attract discussion links. |
| 10 | **webmcp.nl (Dutch sibling)** | — | partial | Hreflang + reciprocal cross-link between .md and .nl to consolidate brand authority (parity, not a rival). |

The unifying insight: **gap #2 (the free checker) is also the engine for half the backlink
plan** — awesome-lists, tutorial CTAs, AEO data-PR, and Show HN all want a linkable utility, and
we are uniquely positioned to ship one because the site already implements WebMCP end-to-end.

---

## Sources
- https://developer.chrome.com/docs/ai/webmcp
- https://webmachinelearning.github.io/webmcp/
- https://webmcp.dev/
- https://www.webfuse.com/blog/what-is-webmcp-the-practical-guide-to-the-web-model-context-protocol
- https://www.webfuse.com/webmcp-cheat-sheet
- https://www.datacamp.com/tutorial/webmcp-tutorial
- https://www.vyomedge.com/blog/what-is-webmcp-complete-guide
- https://www.platinum.ai/ai-agent-web-standards
- https://wellknownmcp.org/en/news/2026-02-15-agentic-web-standards-map-2026-complete-guide
- https://www.lawrencehitches.com/anthropic-mcp-vs-webmcp/
- https://llmstxt.org/
- https://github.com/AnswerDotAI/llms-txt
- https://www.jasper.ai/blog/geo-aeo
- https://www.frase.io/blog/what-is-answer-engine-optimization-the-complete-guide-to-getting-cited-by-ai
- https://webmcp-checker.com/
- https://mcpcat.io/guides/declarative-webmcp-tools-html-form-attributes/
- https://github.com/webmcpnet/awesome-webmcp
- https://github.com/leanMCP/awesome-webmcp
- https://github.com/GoogleChromeLabs/webmcp-tools
