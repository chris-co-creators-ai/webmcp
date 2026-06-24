# PRD — WebMCP.md SEO / AEO Optimization

**Date:** 2026-06-24 · **Status:** Draft for implementation · **Owner:** maintainer
**Inputs:** 7 SEO-squad audits (links in §9) + the official spec mirror in `docs/webmcp-spec/`
**Scope:** the WebMCP.md site (Next.js 16 App Router, Vercel). Analysis-only was done; this PRD is the build plan.

---

## 1. Executive summary

WebMCP.md is technically clean and has **best-in-niche machine surfaces** (`/llms.txt`,
`/.well-known/web-mcp`, `/api/mcp`) — genuinely ahead of every competitor blog. But as a *search and
answer-engine asset* it under-performs:

- **Zero answer-engine citation footprint** today on the core topic cluster (verified live). Citation-signal
  score **~1.5/5**.
- **Zero JSON-LD** anywhere on the site (grep-confirmed) — the biggest low-effort gap.
- **Editorial footprint ≈ 0**: "what is" and "how-to" exist only as thin sections inside a sales page, so we
  rank for nothing informational. Competitors win with standalone long-form explainers + comparison pages.
- **Two correctness risks** that must be fixed first: (a) a root **canonical** that may be de-indexing
  sub-routes, and (b) **factual overclaims** ("Chrome 149 stable", "shipping", "Stable") that contradict the
  official spec (origin trial / incubation) — an E-E-A-T hit, doubly bad on an agent-facing site.

The plan: fix correctness (P0) → build the AEO + structured-data foundation (P1) → ship the content/IA
clusters (P2) → exploit the one thing competitors can't fake — our live origin — as a backlink/authority
engine (P3) → performance polish (P4).

---

## 2. The strategic question: "Can we use WebMCP itself to optimize SEO?"

**Honest verdict (from the AEO analysis, grounded in the real spec): WebMCP is _not_ a ranking lever, and
selling it as "SEO" is the main risk.** It operates on a different funnel than search. Three funnels stack;
don't conflate them:

**REAL levers (where WebMCP genuinely helps):**
1. **Reference-implementation authority → backlinks.** A *live, working* WebMCP origin is link bait for the
   ~20 explainer/tutorial blogs already ranking ("here's a real site that does it"). Backlinks are the
   strongest *indirect* classic-SEO + AEO payoff. This is the highest-value lever.
2. **Adjacent structured-data win.** The WebMCP/agent mindset naturally pushes rich JSON-LD (FAQ/HowTo/
   TechArticle) — which *does* help AEO. (The win is from the JSON-LD, not from WebMCP per se.)
3. **Agent-actuation channel.** Sites agents can operate once they arrive — a real new channel, but it's
   *downstream of discovery* and does not acquire the visit. Not "SEO."

**HYPE (reject — do not put in copy):**
- ❌ "WebMCP boosts Google rankings" — no mechanism.
- ❌ "Add WebMCP → get cited" — citations come from prose + schema, not a tool manifest.
- ❌ "WebMCP replaces SEO" — different funnel; they stack.
- ❌ "llms.txt ranks you" — no ranking credit.
- ⚠️ Mild *risk*: extra imperative-API JS can slightly hurt Core Web Vitals.

**Reframe the pitch:** from *"the new SEO"* → *"the new agent-discoverability funnel that stacks on top of
AEO."* More credible, and the three-funnel framing itself becomes citable thought-leadership.

---

## 3. Findings by area (condensed — full reports in §9)

- **Technical:** robots `Disallow: /api/` blocks the live tool endpoint `/api/mcp`; no apex→www 301; root
  canonical risk; hero video LCP (1.55 MB autoplay on `/`); raw `<img>` everywhere (no next/image); sitemap
  has no `lastModified`; hreflang correctly **N/A today** (no NL site in repo — defer).
- **On-page:** homepage meta description 205 chars (overflows); homepage H1 has no keyword; 4 content images
  have empty `alt`; `/about` is indexed placeholder content; `/skill` metadata otherwise solid.
- **Schema:** zero JSON-LD. Ready-to-wire builders authored for Organization, WebSite, **Product+Offer ($49
  Skill — rich-result win)**, HowTo (`/skill`), FAQPage, BreadcrumbList (read values from `src/lib/site.ts`).
- **Keywords:** 3 clusters (learn → compare → act). Biggest gap = the **"WebMCP vs MCP"** comparison cluster
  (competitors own it; we have nothing). Quick wins map to existing pages (e.g. "how to implement webmcp" →
  `/skill`, which already *is* the impl doc).
- **Competitors:** no commercial rival — a topic space owned by docs sites, dev blogs, tooling vendors and
  awesome-lists. The niche's #1 backlink magnet is a **free "is your site agent-ready?" checker** (every
  tutorial links to one) — and we can build it natively on `/api/mcp` + `/.well-known/web-mcp`.
- **AEO:** ~1.5/5 citation signals. Missing: direct-answer opener, FAQ+FAQPage, freshness/dateModified,
  question-form H2s. Machine surfaces = A. Quick wins #1–5 take the score to ~5/5 in ~1 day, no new routes.
- **Internal linking:** promote homepage sections to standalone indexable pages (`/#what` → `/what-is-webmcp`,
  `/#agents` → `/implement-webmcp`); wire a 3-cluster pillar→spoke link graph.

> **Reconcile (do not skip):** Two agents flagged "no OG image." The repo *does* ship
> `src/app/opengraph-image.jpg` + `twitter-image.jpg` (Next file convention). Likely a false positive (they
> read `metadata.openGraph.images`, which is empty, and missed the file convention). **Action: verify the
> rendered `og:image` tag once; if present, close as done.**

---

## 4. Implementation backlog (prioritized)

Impact/Effort are 1–5. Priority = do P0 first. "Owner" = the SEO agent whose detailed doc carries the spec.

### P0 — Correctness & indexing risk  *(≈ half a day; do first)*
| # | Action | Imp | Eff | File(s) | Owner |
|---|--------|-----|-----|---------|-------|
| 0.1 | **Fix factual overclaims** — "Chrome 149 stable"→"Chrome 149 origin trial"; "Gemini in Chrome: shipping"→"in preview"; concept card "shipped to the stable channel"→"in an origin trial"; timeline "Stable"→"Origin trial"; verify the I/O date claim. Keep "proposed open web standard". Ground every change in `docs/webmcp-spec/`. | 5 | 1 | `src/lib/site.ts` (TICKER, TIMELINE, CONCEPT_CARDS), `src/components/Hero.tsx` | onpage/tech |
| 0.2 | **Canonical fix** — root `alternates.canonical` is hardcoded to `/` and inherited by every route → sub-route deindex risk. Remove the root-level hardcode so each route self-canonicalizes, or add per-route `alternates.canonical`. Verify in rendered HTML. | 5 | 2 | `src/app/layout.tsx:52`, `src/app/skill/page.tsx`, `src/app/about/page.tsx` | onpage/tech |
| 0.3 | **Trim homepage meta description** to ≤155 chars (keep primary keyword + CTA). | 5 | 1 | `src/app/layout.tsx:26` | onpage |
| 0.4 | **Allow `/api/mcp` in robots** (keep `/api/checkout`, `/api/download`, `/download` disallowed). The product's live endpoint must be crawlable. | 4 | 1 | `src/app/robots.ts` | tech |
| 0.5 | **`/about`: noindex now + drop from sitemap** (it's literal placeholder text). Revisit with real bio later (E-E-A-T). | 4 | 1 | `src/app/about/page.tsx`, `src/app/sitemap.ts` | onpage/aeo |

### P1 — AEO foundation + structured data  *(≈ 1–2 days; highest ROI after P0)*
| # | Action | Imp | Eff | File(s) | Owner |
|---|--------|-----|-----|---------|-------|
| 1.1 | **JSON-LD suite** — add a `src/lib/seo/jsonLd.ts` helper that reads `src/lib/site.ts`, and render `<script type="application/ld+json">` for: Organization + WebSite (layout), **Product+Offer for the $49 Skill** (home/pricing), HowTo (`/skill`), BreadcrumbList. Snippets already authored. | 5 | 3 | `src/lib/seo/jsonLd.ts` (new), `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/skill/page.tsx` | schema |
| 1.2 | **Direct-answer opener** — a clean, quotable first sentence: *"WebMCP is an open web standard (W3C, Google + Microsoft) that lets a site expose its functions as callable tools for AI agents…"* BEFORE the "new SEO" framing. | 5 | 2 | `src/lib/site.ts`, `src/components/Sections.tsx` | aeo |
| 1.3 | **Visible FAQ + FAQPage JSON-LD** — 8–10 Q&As (what is WebMCP, vs llms.txt, vs MCP, how agents discover tools, is my site ready, *is it a Google ranking factor?*). | 5 | 2 | `src/components/Faq.tsx` (new), `src/lib/site.ts`, route | aeo/schema |
| 1.4 | **Question-form headings** — convert slogan H2/H3 ("Without it, the agent guesses", "One pattern, every sector") to question forms matching search intent. | 4 | 2 | `src/lib/site.ts`, `src/components/Sections.tsx` | aeo |
| 1.5 | **Freshness signals** — visible "Last updated", `dateModified` in TechArticle schema, real `lastModified` in sitemap. | 4 | 2 | `src/lib/site.ts`, `src/app/sitemap.ts` | aeo/tech |
| 1.6 | **Alt text** — add `alt` to the 3 concept-card images + skill-hero (keep hero video + footer horizon `aria-hidden`). | 3 | 2 | `src/lib/site.ts` (add `alt` field), `src/components/Sections.tsx` | onpage |
| 1.7 | **Homepage H1 keyword** — keep the slogan but introduce "WebMCP" near the H1 (eyebrow/subhead) so the primary term is in the first heading block. | 3 | 1 | `src/components/Hero.tsx` | onpage |
| 1.8 | **AI-crawler allow rules** — explicit allow for GPTBot, ClaudeBot, PerplexityBot, Google-Extended. | 2 | 1 | `src/app/robots.ts` | aeo/tech |
| 1.9 | **Verify OG image** (file-convention) renders `og:image`; close the false-positive. | 2 | 1 | `src/app/opengraph-image.jpg` | onpage |

### P2 — Content & information architecture  *(≈ 1–2 weeks)*
| # | Action | Imp | Eff | File(s) | Owner |
|---|--------|-----|-----|---------|-------|
| 2.1 | **Build `/webmcp-vs-mcp`** (comparison + table + FAQ schema) — the top content gap; competitors own it, we have nothing. | 5 | 3 | new route `src/app/webmcp-vs-mcp/` | keywords/competitors |
| 2.2 | **Promote `/#what` → `/what-is-webmcp`** — long-form Cluster-1 pillar with direct-answer + FAQ. Leave a teaser on `/` linking out. | 5 | 3 | new route, `src/components/Sections.tsx` | linking/keywords |
| 2.3 | **Promote `/#agents` → `/implement-webmcp`** — Cluster-2/build pillar (declarative + imperative API, grounded in `docs/webmcp-spec/`). | 5 | 3 | new route | linking |
| 2.4 | **Expand `/skill`** as the Cluster-3 how-to pillar; seed `/docs/declarative-api` + `/docs/imperative-api` tutorial spokes with runnable code. | 4 | 3 | `src/app/skill/`, new doc routes | competitors |
| 2.5 | **Wire the internal-link graph** — pillar→spoke + teaser→page links; repoint nav "WebMCP" + footer "Protocol" from `/#what` to `/what-is-webmcp`; add `/implement-webmcp`. | 4 | 2 | `src/components/SiteHeader.tsx`, `src/components/Sections.tsx` (footer) | linking |
| 2.6 | **Sitemap + llms.txt** — add new routes (priorities), `lastModified`; make `/llms.txt` URLs absolute + dated. | 3 | 1 | `src/app/sitemap.ts`, `public/llms.txt` | tech |

### P3 — Differentiators & growth  *(the real moat; ongoing)*
| # | Action | Imp | Eff | File(s) | Owner |
|---|--------|-----|-----|---------|-------|
| 3.1 | **Free "Is your site agent-ready?" checker** — URL → score + fixes, detecting `/.well-known/web-mcp`, `/llms.txt`, schema. The niche's #1 backlink magnet; we can build it natively on `/api/mcp`. | 5 | 4 | new route + API | competitors/aeo + builder |
| 3.2 | **Original-data asset** — a dated, first-party `discover → call → verify` transcript against our own origin (+ latency). The most citable, uniquely-credible thing on the site. | 4 | 3 | new route/section + `/api/mcp` | aeo |
| 3.3 | **Backlink/PR campaign** — PR our checker + a cheat sheet to `awesome-webmcp` hubs; end-of-tutorial CTA outreach (Webfuse/DataCamp/DEV); standards-map round-ups; submit `/llms.txt` to the adopters directory; AEO data-PR + a Show HN / dev.to launch of the checker. | 4 | 3 | `docs/seo/backlinks/` | backlink-builder |
| 3.4 | **Blog infrastructure + cluster spokes** — MDX blog, then publish the comparison/how-to spokes on a cadence. | 4 | 3 | `content/blog/`, blog route | content-creator |

### P4 — Performance & infra
| # | Action | Imp | Eff | File(s) | Owner |
|---|--------|-----|-----|---------|-------|
| 4.1 | **Hero video CWV** — compress, `preload="none"`, honor `prefers-reduced-motion`, drop on mobile, poster via next/image. | 4 | 3 | `src/components/Hero.tsx`, `public/videos/hero-ambient.mp4` | tech/frontend |
| 4.2 | **apex→www 301** — Vercel domain redirect (preferred) or `next.config.ts redirects()`. | 4 | 2 | Vercel settings / `next.config.ts` | devops |
| 4.3 | **Migrate raw `<img>` → next/image** (AVIF + reserved space, fixes CLS). | 3 | 3 | `src/components/Sections.tsx`, `src/components/Hero.tsx` | frontend |
| 4.4 | **Single-source the tool manifest** — export from `src/lib/site.ts`, import in both `/api/mcp` and `/.well-known/web-mcp` so they can't drift. | 3 | 2 | `src/lib/site.ts`, `src/app/api/mcp/route.ts`, `src/app/.well-known/web-mcp/route.ts` | tech |
| 4.5 | **hreflang EN↔NL** — **DEFERRED.** Do not add now (would point at nothing); plan `app/[locale]` + `alternates.languages` when an NL/i18n build ships. | — | — | tech |

---

## 5. Suggested sequencing
- **Sprint 1 (this week):** all of **P0** + AEO quick wins **1.2–1.5, 1.7** (per AEO: ~1.5→~5/5 citation signals in ~1 day, no new routes) + **1.1** JSON-LD suite. This is the highest-ROI bundle and is mostly content already in `site.ts`.
- **Sprint 2:** rest of P1 + **2.1** (`/webmcp-vs-mcp`) + **2.2** (`/what-is-webmcp`) + internal links (2.5).
- **Sprint 3:** remaining P2, start **3.1** (checker) + **3.3** (backlinks).
- **Ongoing:** P3 content cadence; P4 perf as capacity allows.

## 6. Factual-accuracy appendix (correct against `docs/webmcp-spec/`)
The site must match the real spec. Corrections (sources: `docs/webmcp-spec/INDEX.md`, `w3c/README.md`,
`chrome/overview.md`):
- WebMCP is a **proposed standard / Draft Community Group Report** (W3C Web Machine Learning CG) — **not** a
  ratified W3C Standard. ✅ keep "proposed open web standard"; ❌ remove "Stable" framing.
- Browser status: **Chrome 149 origin trial (experimental)** + a dev flag — **not** "stable" / "shipping".
- It's a **joint Google + Microsoft** initiative (editors: Walderman/Microsoft, Sagar & Farolino/Google).
- Verify the "announced at Google I/O, May 19" claim before publishing authority content (the ecosystem cites
  an earlier 2026 announcement); when in doubt, cite the spec's own status section.

## 7. Measurement & baseline
- **Baseline (today): 0 answer-engine citations** across the query cluster (definitional / vs / how-to /
  product-intent / ecosystem — seed query set in `docs/seo/aeo/2026-06-24-audit.md §6`).
- **Set up:** Google Search Console (export CSV weekly), Vercel Speed Insights (confirm the hero-video LCP
  hypothesis), and the weekly AEO mention tracker (`docs/seo/aeo/`).
- **KPIs:** citation coverage % (Perplexity/AIO), organic clicks & avg position (GSC), # indexable pages,
  rich-result eligibility (Product/FAQ/HowTo), and **Agent Skill checkouts** (the conversion that matters).
- **Cadence:** weekly report via `seo-reporting` once GSC has data.

## 8. Risks & dependencies
- **0.2 canonical** must verify against *rendered* HTML (needs a build + inspect) — blocks indexing-dependent wins.
- **0.1 / 6 copy** is content-owned: confirm the softer "origin trial / preview" framing is acceptable (it
  reduces the marketing claim but is the truthful, defensible position).
- **3.1 checker** and **2.4 API tutorials** are real features → need a builder, not just content.
- **4.2 apex→www** is a Vercel/devops change, not a code edit.
- **GSC/Speed Insights** data is currently unavailable — CWV findings are code-level risk only until measured.

## 9. Source findings (full detail)
- `docs/seo/technical/2026-06-24-audit.md`
- `docs/seo/onpage/2026-06-24-audit.md`
- `docs/seo/schema/2026-06-24-plan.md`
- `docs/seo/keywords/2026-06-24-research.md` · `docs/seo/keywords/clusters.md`
- `docs/seo/competitors/2026-06-24-gap-report.md`
- `docs/seo/aeo/2026-06-24-audit.md` · `docs/seo/aeo/webmcp-as-seo-lever.md`
- `docs/seo/linking/2026-06-24-plan.md`
- Spec ground truth: `docs/webmcp-spec/`
