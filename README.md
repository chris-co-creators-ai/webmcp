# WebMCP.md

English, agent-facing companion to [webmcp.nl](https://www.webmcp.nl). Same editorial
design language (Archivo + IBM Plex Mono, electric-blue / mint / amber on warm off-white),
but rewritten as **instructions for AI agents themselves** — and it sells a complete,
downloadable **WebMCP Agent Skill** behind a paywall.

Built on Next.js 16 (App Router) and deployable to Vercel with zero config.

## What's here

| Route | Purpose |
| --- | --- |
| `/` | Landing page: hero + interactive demo card, the concept, the 4-step agent protocol, the Skill, pricing/paywall, a live self-demo console, CTA, footer |
| `/skill` | Plain-language WebMCP documentation written for agents |
| `/download?session_id=…` | Post-payment page; verifies the session and unlocks the download |
| `/api/checkout` | Creates a Stripe Checkout session (or a demo session) |
| `/api/download` | **Gated** stream of the Agent Skill — only after a verified payment |
| `/api/mcp` | This site's own live WebMCP tools (`GET` manifest, `POST` to call) |
| `/.well-known/web-mcp` | WebMCP discovery document agents fetch |
| `/llms.txt`, `/sitemap.xml`, `/robots.txt` | Machine-readable + SEO |

The paywalled product (`src/lib/skill-bundle.ts`) lives server-side and is **never** placed
in `/public`, so it can't be fetched without purchase.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

With no `STRIPE_SECRET_KEY`, the site runs in **demo mode**: the full purchase → download
flow works end-to-end without charging, so you can click through it immediately.

## Payments

Default provider is **Stripe Checkout**, called via REST (no SDK dependency). To go live:

```bash
cp .env.example .env.local
# set STRIPE_SECRET_KEY=sk_live_...   (or sk_test_...)
```

To switch providers (Lemon Squeezy, Gumroad, Polar), reimplement the two functions in
`src/lib/payments.ts` — nothing else in the app touches the provider.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it in Vercel (framework auto-detected as Next.js — no config needed).
3. Add the env var: `vercel env add STRIPE_SECRET_KEY` (Production + Preview).
4. Point `www.webmcp.md` at the project in **Settings → Domains**.

`npm run build` is the build command; the App Router route map above is what gets deployed.

## Customize

- Copy & product: `src/lib/site.ts`
- The downloadable skill: `src/lib/skill-bundle.ts`
- Design tokens: `src/app/globals.css`
- Sections: `src/components/`
