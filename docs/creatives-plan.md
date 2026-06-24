# WebMCP.md — Creatives Plan (Higgsfield)

All creatives obey the xAI "cosmic void" brand rules in `branding-reference/usethis.md`:
**abstract & atmospheric only — no photography, humans, product shots, or screenshots.**
Palette: void-black `#0c0c0b`, stellar-white, signal-blue `#2563eb`, amber `#ff6308` horizon.
Model: **GPT Image 2** (`gpt_image_2`) — best for on-image text + design. ~7 credits per
16:9/2k render.

Card line-art stays vector SVG (sharper than raster, on-brand). Higgsfield generates the
raster atmospheric assets the site can't do in CSS at high fidelity.

| # | Asset | File | Size / ratio | Used by | Est. credits |
|---|-------|------|--------------|---------|--------------|
| A | **OG / social share** — wordmark "WebMCP.md" over a void with a single white→blue light thread from the right | `src/app/opengraph-image.png` (+ `twitter-image.png`) | 1200×630 (16:9 gen → crop) | `layout.tsx` OG + Twitter cards | 7 |
| B | **Hero light bloom** — abstract white→blue radial bloom on void, no text; layered behind hero at low opacity to replace the CSS bloom | `public/images/hero-bloom.webp` | 16:9, 4k | `Hero.tsx` | ~10 |
| C | **App icon** — luminous abstract "W" thread mark on void | `src/app/icon.png` + `apple-icon.png` | 512×512, 1:1 | favicon / PWA | 7 |
| D | **Footer horizon** — amber→blue atmospheric horizon wash on void, abstract | `public/images/horizon.webp` | 16:9 | `Footer.tsx` glow | 7 |
| E | *(optional)* **Ambient hero loop** — slow-drifting cosmic bloom, 6s, muted loop | `public/videos/hero-ambient.mp4` | 16:9, Seedance | hero background video | ~40+ |

**Essentials (A + B + C):** ~24 credits.
**Full still set (A–D):** ~31 credits.
**+ Ambient video (E):** +~40.

> **CHOSEN SCOPE: Full + ambient video (A–E), ~70 credits.** Awaiting credit top-up + go-ahead before generating.

## Prompts (ready to fire)

**A — OG image**
> Ultra-minimal cosmic-void poster. Near-black #0c0c0b canvas. A single luminous thread of
> white-to-blue light blooming from the right edge like a star emerging from behind the
> frame. Centered thin sans-serif wordmark "WebMCP.md" in pure white, generous negative
> space, subtle film grain. No people, no objects, no UI. Atmospheric, restrained, premium.

**B — Hero bloom (no text)**
> Abstract atmospheric light bloom on a near-black #0c0c0b void. A soft radial gradient of
> white-to-blue luminance radiating from the upper-right, like a distant star. Faint cool-blue
> haze, deep blacks, no hard edges, no text, no objects. Cinematic, minimal, premium.

**C — App icon**
> Minimal luminous monogram on a near-black #0c0c0b square. A single thin white "W" formed
> from a continuous light thread, faint blue glow, centered, lots of dark space. Iconographic,
> geometric, no text, no border.

**D — Footer horizon**
> Abstract atmospheric horizon on a near-black #0c0c0b void. Warm amber light bleeding up from
> the bottom edge, transitioning through cool blue toward the center, like a sunrise seen from
> space. Very low contrast, soft gradient, no objects, no text, no horizon line — pure light wash.

## Feature images (NEW — match xAI "AI for all humanity" card style)

Style lock for all four: near-black `#0c0c0b` void · thin 1px luminous wireframe linework in
perspective · scattered glowing square particles in blue `#97c4ff`/white + occasional faint
amber · deep blacks · heavy negative space · atmospheric depth · **no text, no people, no UI
screenshots** · cinematic, premium. Model: GPT Image 2, `--aspect_ratio 16:9 --resolution 2k`
(~7 cr each). Wired into `Sections.tsx`, replacing the current SVG line-art.

| # | Card | File | Replaces |
|---|------|------|----------|
| F1 | The problem — "Agents guess today" | `public/images/card-problem.webp` | `ManifestFrame` |
| F2 | The fix — "A direct channel" | `public/images/card-fix.webp` | `CometArc` |
| F3 | Why now — "Gemini in Chrome" | `public/images/card-why.webp` | `NodeGraph` |
| F4 | The complete Agent Skill | `public/images/skill-hero.webp` | `StackedDocs` |

**F1 — Agents guess today (problem)**
> Abstract cosmic-void illustration on near-black #0c0c0b. A scattered, fragmented field of
> faint disconnected pixel-squares and broken thin 1px wireframe rectangles drifting out of
> alignment, a few dim blue and white glowing particles, suggesting blind guessing and
> fragility. Thin grey linework, deep blacks, subtle blue glow, heavy negative space, no text,
> no people, cinematic and minimal.

**F2 — A direct channel (fix)**
> Abstract cosmic-void illustration on near-black #0c0c0b. A single luminous white-to-blue
> light thread traveling through a thin 1px wireframe perspective channel, connecting two
> glowing nodes directly, with bright blue and faint amber particle-squares flowing along the
> line. Clean, precise, perspective depth, deep blacks, generous negative space, no text, no
> people, cinematic and minimal.

**F3 — Gemini in Chrome (why now)**
> Abstract cosmic-void illustration on near-black #0c0c0b. A thin 1px wireframe browser window
> in perspective, connected to a small constellation of glowing nodes by faint light threads,
> scattered blue and white particle-squares, suggesting an AI agent operating the web. Deep
> blacks, subtle blue luminance, lots of negative space, no text, no people, cinematic and minimal.

**F4 — The complete Agent Skill**
> Abstract cosmic-void illustration on near-black #0c0c0b. A luminous central core emitting
> thin radiating light threads outward in a fine starburst, like a single skill radiating
> capability, scattered glowing blue and white particle-squares across deep black space, faint
> warm amber undertone. Thin 1px linework, atmospheric depth, heavy negative space, no text, no
> people, cinematic and premium.

**Updated batch total:** Full still set (A–D) + video (E) + feature images (F1–F4) ≈ **99 credits.**

## Run procedure (after top-up)
For each asset: `higgsfield generate create gpt_image_2 --prompt "…" --aspect_ratio 16:9
--resolution 2k --wait`, download the returned URL to the target path, convert to webp where
noted, then wire into the component (OG/icon are auto-detected by Next.js file conventions).
