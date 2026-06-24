# WebMCP — Official Documentation (mirrored verbatim)

This folder is a **word-for-word archive** of the real, official WebMCP documentation,
scraped on **2026-06-24**. Nothing here is summarized or rewritten — it is the source text
exactly as published. Use it as the authoritative reference for what WebMCP actually is.

WebMCP (Web Model Context Protocol) is a **proposed web standard**, developed in the
**W3C Web Machine Learning Community Group** as a **joint Google + Microsoft initiative**.
As of the snapshot it is a *Draft Community Group Report* (published 2026-03-09) — under
incubation, not yet a W3C Standard. Browser support: Chrome origin trial from **Chrome 149**
(+ `chrome://flags/#enable-webmcp-testing` for local dev).

---

## `w3c/` — The specification & explainers (the standard itself)
Source repo: <https://github.com/webmachinelearning/webmcp> ·
Published spec: <https://webmachinelearning.github.io/webmcp/>
License: **W3C Software and Document License** (see `w3c/LICENSE.md`).

| File | What it is |
|------|------------|
| `w3c/README.md` | The main explainer — background, motivation, in-browser vs backend tools, full design (verbatim) |
| `w3c/index.bs` | The **Bikeshed source of the normative spec** — the exact authored spec text |
| `w3c/rendered-spec.html` | The published spec as rendered at webmachinelearning.github.io/webmcp/ |
| `w3c/declarative-api-explainer.md` | Explainer for the declarative (HTML `<form>`) API |
| `w3c/docs/service-workers.md` | Service-workers design doc |
| `w3c/security-privacy-questionnaire.md` | W3C TAG self-review security/privacy questionnaire |
| `w3c/CONTRIBUTING.md`, `w3c/w3c.json`, `w3c/LICENSE.md` | Repo meta + license |

## `chrome/` — Google's Chrome for Developers docs
Source: <https://developer.chrome.com/docs/ai/webmcp> (and related) · Author: Google Chrome team.
© Google LLC — content licensed under **CC BY 4.0**. Each file keeps its source URL in a header.
`.md` = verbatim text extracted from the page article body · `.html` = the exact archived page.

| File | Source URL |
|------|-----------|
| `chrome/overview.md` | https://developer.chrome.com/docs/ai/webmcp |
| `chrome/imperative-api.md` | https://developer.chrome.com/docs/ai/webmcp/imperative-api |
| `chrome/declarative-api.md` | https://developer.chrome.com/docs/ai/webmcp/declarative-api |
| `chrome/secure-tools.md` | https://developer.chrome.com/docs/ai/webmcp/secure-tools |
| `chrome/agent-security.md` | https://developer.chrome.com/docs/agents/security |
| `chrome/devtools-debug.md` | https://developer.chrome.com/docs/devtools/application/webmcp |
| `chrome/lighthouse-registered-tools.md` | https://developer.chrome.com/docs/lighthouse/agentic-browsing/registered-webmcp-tools |
| `chrome/blog-early-preview.md` | https://developer.chrome.com/blog/webmcp-epp |

---

## Provenance & licensing
- **W3C material** is licensed under the W3C Software and Document License (2023). Mirrored with
  attribution; see `w3c/LICENSE.md`.
- **Chrome for Developers material** is © Google LLC, licensed under CC BY 4.0. Each `chrome/*.md`
  retains the original source URL and attribution header.
- The `.html` files are the exact pages as fetched (byte-for-byte) for full fidelity; the `.md`
  files are clean, readable extractions of the same text (article body only, no nav/chrome).

To refresh: re-run the scrape against the source URLs above. The spec is a living draft — check
the "Last updated" dates in the Chrome docs and the spec's status section for changes.
