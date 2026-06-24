# WebMCP.md

An independent, **informational** explainer of **WebMCP** — the proposed open web standard
(W3C, by Google & Microsoft) that lets a website expose its functions and forms as structured
tools AI agents can discover and call **directly in the browser**.

Built on Next.js 16 (App Router) + Tailwind v4. Deployable to Vercel with zero config.
Dark "cosmic void" design system. No accounts, no payments — purely informational.

## What's here

| Route | Purpose |
| --- | --- |
| `/` | Hero, interactive sector use-cases (run real tool examples), what WebMCP is, the agent protocol, FAQ |
| `/skill` | Plain-language agent documentation: the in-browser protocol + links to the official spec |
| `/about` | Placeholder portfolio block (noindex until filled) |
| `/api/mcp`, `/.well-known/web-mcp` | An **optional server-side mirror** of a few info tools for headless testing — **not** part of the WebMCP spec |
| `/llms.txt`, `/sitemap.xml`, `/robots.txt` | Machine-readable + SEO |

## The real WebMCP mechanism (what the site teaches)

WebMCP is an **in-browser API**, not a `/.well-known` + REST model:

- **Imperative:** `document.modelContext.registerTool({ name, description, inputSchema, execute })`
- **Declarative:** annotate an HTML form with `toolname` / `tooldescription`

An in-browser agent discovers the tools the page registered (`getTools()`), reads each tool's
JSON-Schema `inputSchema`, and calls it (`executeTool()`); the browser runs it visibly.
**Status:** W3C Draft Community Group Report (under incubation) · Chrome 149 origin trial.

The official documentation is mirrored verbatim under `docs/webmcp-spec/` (W3C + Chrome docs,
under their respective licenses), and the canonical sources are linked throughout the site.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

`npm run build` for the production build; `npm run lint` / `npm run check` to verify.

## Deploy to Vercel

Push to GitHub and import the repo in Vercel — the framework is auto-detected (Next.js), no
configuration or environment variables required.

## Customize

- Copy & content: `src/lib/site.ts`
- Sector use-cases (the interactive tools): `SECTOR_USECASES` in `src/lib/site.ts`
- FAQ (feeds both the visible section and the FAQPage JSON-LD): `FAQ` in `src/lib/site.ts`
- Design tokens: `src/app/globals.css`
- Structured data: `src/lib/seo/jsonLd.ts`
- SEO working docs & PRD: `docs/seo/`

## Project notes

- `docs/webmcp-spec/` — the official WebMCP docs, mirrored word-for-word for accuracy.
- `docs/seo/` — SEO/AEO audits + the implementation PRD.
- `.claude/agents/` — a small SEO-agent squad scoped to this project.
