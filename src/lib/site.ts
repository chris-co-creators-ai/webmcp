// Central content + product config for webmcp.md
// English. Audience: AI agents and the developers who deploy them.

export const SITE = {
  name: "WebMCP.md",
  domain: "webmcp.md",
  tagline: "The web standard agents can operate directly.",
};

export const NAV_LINKS = [
  { label: "What is WebMCP", href: "#what" },
  { label: "For agents", href: "#agents" },
  { label: "Use-cases", href: "#self-demo" },
  { label: "Docs", href: "/skill" },
  { label: "FAQ", href: "#faq" },
];

// Scrolling announcement ticker (monospace), mirrors the .nl marquee.
export const TICKER = [
  "Chrome 149 — origin trial",
  "W3C Draft Community Group Report",
  "Gemini in Chrome — in preview",
  "Imperative + Declarative APIs",
  "WebMCP = proposed open web standard (W3C)",
  "Built by Google & Microsoft",
];

// The real, in-browser WebMCP flow an agent follows, in order — grounded in the
// official spec (docs/webmcp-spec/). NOT a /.well-known + REST model.
export const AGENT_STEPS = [
  {
    n: "01",
    title: "Discover registered tools",
    body: "On the open page, query the browser for the tools it exposes. The site registers them in JavaScript with document.modelContext.registerTool(...) or by annotating an HTML <form toolname>. If tools are present, call them — stop scraping the DOM.",
  },
  {
    n: "02",
    title: "Read each tool's schema",
    body: "Every tool carries a name, a plain-language description, and a JSON-Schema inputSchema for its arguments. Read the schema to learn the exact fields, types, and enums before you build a call.",
  },
  {
    n: "03",
    title: "Call the tool — the browser runs it visibly",
    body: "Invoke the tool with structured arguments that validate against its inputSchema. The browser executes it on the page in front of the user: an imperative tool runs its execute() callback; a declarative form is brought into focus and populated. Never invent fields the schema doesn't list.",
  },
  {
    n: "04",
    title: "Verify & recover from the result",
    body: "Read the structured result the tool returns. On a validation or execution error, repair the arguments from the schema and the error message, then retry — never fabricate success.",
  },
];

// Canonical, citation-grade definition. Reused BYTE-IDENTICAL in the visible
// "What is WebMCP" block, the FAQ, and the FAQPage JSON-LD (AEO: one repeated
// quotable string is what answer engines lift).
export const WEBMCP_DEFINITION =
  "WebMCP is a proposed open web standard that lets a website expose its own functions — JavaScript actions or HTML forms — as structured tools that AI agents can discover and call directly in the browser.";

export const WHAT_IS_WEBMCP = {
  definition: WEBMCP_DEFINITION,
  provenance:
    "WebMCP — short for Web Model Context Protocol — is being incubated in the W3C Web Machine Learning Community Group, proposed by Google and Microsoft.",
  detail:
    "Instead of an agent guessing at buttons by reading pixels and the DOM, the page declares each action as a tool with a name, a description, and a JSON Schema for its inputs — using either the imperative document.modelContext.registerTool() API or by annotating an HTML <form toolname>. The browser-integrated agent then calls those tools, and the browser executes them visibly on the page, keeping the user in the loop. WebMCP is a client-side, in-browser API — not a backend or server integration — and it works as a progressive enhancement on top of your existing site.",
};

// Visible FAQ (renders on the home page) + source for the FAQPage JSON-LD.
// Same array feeds both, so on-page text == schema text by construction.
// Ordered by query volume (AEO). Answers grounded in docs/webmcp-spec/.
export const FAQ: { question: string; answer: string }[] = [
  {
    question: "What is WebMCP?",
    answer:
      WEBMCP_DEFINITION +
      " The page describes each tool with a name, a description, and a JSON Schema for its inputs, so an agent can act reliably instead of guessing at the UI. WebMCP — short for Web Model Context Protocol — is being incubated in the W3C Web Machine Learning Community Group, proposed by Google and Microsoft.",
  },
  {
    question: "WebMCP vs MCP — what's the difference?",
    answer:
      "MCP (Model Context Protocol) is a backend integration: a service registers tools with an AI platform, and the platform talks to the service's servers over an API, bypassing the website's UI. WebMCP is the in-browser counterpart: tools are defined in the page's own JavaScript and run client-side, visibly, with shared page context and the user watching. They are complementary — WebMCP is designed to complement, not replace MCP — and it deliberately borrows MCP's vocabulary of tools, schemas, and parameters.",
  },
  {
    question: "WebMCP vs llms.txt — which do I need?",
    answer:
      "They solve different problems. llms.txt is a static text file that describes your site to language models for reading and context; WebMCP lets an agent act on your site by calling real, executable tools in the browser. llms.txt is about discoverability and content comprehension; WebMCP is about actuation and task completion. They stack — you can ship both — but neither is a substitute for the other.",
  },
  {
    question: "How do I add WebMCP to my website?",
    answer:
      "Register at least one tool the browser can expose to agents. The quickest path is the imperative API: call document.modelContext.registerTool({ name, description, inputSchema, execute }) for a high-intent action like search or checkout. Or use the declarative API — add toolname and tooldescription attributes to an existing HTML form. Start with your most valuable action, then validate it with the Chrome flag and the Model Context Tool Inspector.",
  },
  {
    question: "What's the difference between the imperative and declarative WebMCP APIs?",
    answer:
      "The imperative API registers tools in JavaScript and can run any client-side logic — form input, navigation, or state changes — via document.modelContext.registerTool(). The declarative API instead annotates an existing HTML form with toolname and tooldescription attributes, and the browser turns the form's fields into tool parameters automatically. Use declarative for straightforward form submissions and imperative when a task needs real JavaScript. Most sites use both.",
  },
  {
    question: "How does an AI agent discover a site's WebMCP tools?",
    answer:
      "When the page is open, a browser-integrated agent queries the browser for the tools the document has registered — there is no separate crawl or fetch step, because tools are registered at runtime in the page. Each discovered tool exposes its name, description, and a JSON-Schema inputSchema, and the browser fires a toolchange event when the available set changes. By default tools are visible to same-origin documents and the built-in agent; cross-origin sharing is opt-in via permissions policy and the exposedTo list.",
  },
  {
    question: "Is WebMCP a W3C standard yet?",
    answer:
      "Not yet. WebMCP is a proposed standard, published as a W3C Draft Community Group Report and still under incubation in the Web Machine Learning Community Group — it is not a ratified W3C Standard. The API is under active discussion and is expected to change. Treat it as an emerging standard to build against early, not a finalized one.",
  },
  {
    question: "Does WebMCP work in every browser?",
    answer:
      "Not yet. WebMCP is available in Chrome 149 as an origin trial, and for local development behind the flag at chrome://flags/#enable-webmcp-testing. The stated goal is for any browser with agentic capabilities to implement it, but today Chrome's experimental support is where you build and test. It also requires an open browser tab — there is no headless tool-calling.",
  },
  {
    question: "Is WebMCP a Google ranking factor?",
    answer:
      "No. WebMCP is an agent-actuation and discoverability layer, not a classic SEO signal — Googlebot does not rank you higher for registering tools, because they are JavaScript-registered at runtime and are not a crawl, link, or Core Web Vitals input. Its value is a different funnel: being the site an agent can reliably operate once a user is already in a task. It pairs well with ordinary SEO and AEO, but it does not replace or boost them.",
  },
  {
    question: "How is WebMCP different from screen-scraping or DOM automation?",
    answer:
      "Screen-scraping has an agent infer intent from screenshots, the DOM, and the accessibility tree, then simulate clicks — brittle, slow, and prone to breaking when the layout shifts. WebMCP replaces guesswork with a contract: the site declares each action's purpose and inputs as a tool, so the agent calls it directly with structured arguments. The two coexist — if a page exposes no suitable tool, an agent can still fall back to general browser automation.",
  },
  {
    question: "Is my site WebMCP-ready?",
    answer:
      "Your site is WebMCP-ready when it registers at least one tool an agent can discover and call — either imperatively via document.modelContext.registerTool() or declaratively by adding toolname/tooldescription to a key form. Good candidates are your highest-intent actions: search, booking, checkout, quote requests, or support routing. You can validate locally today with the Chrome flag and the Model Context Tool Inspector extension, which lists registered tools and lets you call them with natural language.",
  },
];

export const CONCEPT_CARDS = [
  {
    tag: "The problem",
    title: "Agents guess today",
    body: "Without a contract, an agent reads pixels, guesses at buttons, and breaks the moment your layout shifts. Slow, brittle, and impossible to trust with a transaction.",
    accent: "amber" as const,
  },
  {
    tag: "The fix",
    title: "A direct channel",
    body: "WebMCP lets you describe your functions — forms, actions — as callable tools. The agent calls them directly. No scraping, no screenshots, no guessing.",
    accent: "mint" as const,
  },
  {
    tag: "Why now",
    title: "Gemini in Chrome",
    body: "Agentic browsing reached a Chrome origin trial in 2026. The assistants your users already run are learning to operate the web. Sites that expose tools get chosen.",
    accent: "primary" as const,
  },
];

export const TIMELINE = [
  { tag: "Early Preview", title: "Proposal", body: "Google & Microsoft propose WebMCP in the W3C Web ML Community Group." },
  { tag: "W3C", title: "Draft Report", body: "Published as a Draft Community Group Report — under incubation, not yet a standard." },
  { tag: "Chrome 149", title: "Origin trial", body: "WebMCP ships as an experimental Chrome origin trial (+ chrome://flags)." },
  { tag: "Now", title: "Early preview", body: "Build and test today via the origin trial or the local flag." },
];

// One WebMCP pattern, many sectors. Each sector registers several real
// in-browser tools (document.modelContext.registerTool). The `result` is a
// representative structured response, so the "run" buttons demonstrate the
// call → structured-result loop client-side (these are illustrative tools).
export type SectorTool = {
  name: string;
  desc: string;
  args: Record<string, unknown>;
  result: unknown;
};
export const SECTOR_USECASES: { sector: string; tools: SectorTool[] }[] = [
  {
    sector: "E-commerce",
    tools: [
      {
        name: "search_products",
        desc: "Search the catalog and return matching products.",
        args: { query: "trail running shoes", max: 3 },
        result: { ok: true, count: 24, top: [{ sku: "TR-42", title: "Trail Runner 42", price: "$129.00" }, { sku: "TR-Lite", title: "Trail Lite", price: "$99.00" }] },
      },
      {
        name: "add_to_cart",
        desc: "Add a product to the cart by SKU and quantity.",
        args: { sku: "TR-42", quantity: 1 },
        result: { ok: true, cart: { items: 1, subtotal: "$129.00" } },
      },
      {
        name: "start_checkout",
        desc: "Begin checkout and return a payment URL (needs user confirmation).",
        args: {},
        result: { ok: true, next: "open_url_for_user_approval", checkout_url: "/checkout/9f2a" },
      },
    ],
  },
  {
    sector: "Travel",
    tools: [
      {
        name: "search_flights",
        desc: "Search flights between two airports on a date.",
        args: { from: "AMS", to: "JFK", date: "2026-08-01" },
        result: { ok: true, results: [{ flight: "DL71", depart: "10:25", price: "$612" }, { flight: "KL641", depart: "13:40", price: "$588" }] },
      },
      {
        name: "get_seat_map",
        desc: "Return available seats for a flight.",
        args: { flight: "KL641" },
        result: { ok: true, available: ["12A", "12C", "30F"] },
      },
      {
        name: "book_trip",
        desc: "Hold a seat; payment is handed to the user to confirm.",
        args: { flight: "KL641", seat: "12A" },
        result: { ok: true, pnr: "X7K2QP", note: "payment requires user confirmation" },
      },
    ],
  },
  {
    sector: "SaaS & support",
    tools: [
      {
        name: "search_docs",
        desc: "Search the knowledge base and return passages.",
        args: { query: "rate limits" },
        result: { ok: true, hits: [{ title: "API rate limits", url: "/docs/limits" }] },
      },
      {
        name: "create_ticket",
        desc: "Open a support ticket and route it to the right team.",
        args: { subject: "Intermittent 429s on /v1/search", priority: "urgent" },
        result: { ok: true, id: "TK-4821", routedTo: "Platform", eta: "2h" },
      },
      {
        name: "run_diagnostics",
        desc: "Run an account health check (read-only).",
        args: {},
        result: { ok: true, checks: { api: "pass", auth: "pass", quota: "92% used" } },
      },
    ],
  },
  {
    sector: "Healthcare",
    tools: [
      {
        name: "check_availability",
        desc: "Return open slots for a service on a date.",
        args: { service: "dental cleaning", date: "2026-08-03" },
        result: { ok: true, slots: ["09:00", "11:30", "15:00"] },
      },
      {
        name: "book_appointment",
        desc: "Book an open slot (state-changing — confirm with the user first).",
        args: { service: "dental cleaning", date: "2026-08-03", time: "11:30" },
        result: { ok: true, confirmation: "APPT-5567" },
      },
    ],
  },
  {
    sector: "Finance & insurance",
    tools: [
      {
        name: "get_quote",
        desc: "Return a quote for the requested cover.",
        args: { product: "travel insurance", amount: 5000 },
        result: { ok: true, premium: "$38.50", currency: "USD", validUntil: "2026-07-15" },
      },
      {
        name: "list_coverage",
        desc: "List what a product covers.",
        args: { product: "travel insurance" },
        result: { ok: true, covers: ["medical", "cancellation", "baggage", "delay"] },
      },
    ],
  },
  {
    sector: "Real estate",
    tools: [
      {
        name: "search_listings",
        desc: "Search listings by city and budget.",
        args: { city: "Lisbon", maxPrice: 600000 },
        result: { ok: true, count: 12, top: [{ id: "LIS-3391", title: "2-bed, Alfama", price: "€540,000" }] },
      },
      {
        name: "schedule_viewing",
        desc: "Schedule a property viewing for a listing.",
        args: { listingId: "LIS-3391", date: "2026-08-05" },
        result: { ok: true, confirmed: true, ref: "VW-2210" },
      },
    ],
  },
];

// The informational tools THIS site exposes — it practices what it preaches.
export const SELF_TOOLS = [
  {
    name: "get_webmcp_status",
    desc: "Returns WebMCP's current standardization + browser status.",
    args: "{}",
  },
  {
    name: "list_docs",
    desc: "Lists the agent-facing documentation sections on this site.",
    args: "{}",
  },
  {
    name: "search_knowledge",
    desc: "Searches the WebMCP knowledge base and returns matching passages.",
    args: `{ "query": "tool discovery" }`,
  },
];
