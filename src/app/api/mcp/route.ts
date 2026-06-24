import { NextResponse } from "next/server";
import { SELF_TOOLS } from "@/lib/site";

// Optional server-side mirror of this site's informational tools (NOT the WebMCP
// spec — see /skill). GET returns the manifest; POST executes a tool.

const MANIFEST = {
  version: "1.0",
  service: "webmcp.md",
  note: "Server-side mirror for headless testing — not part of the WebMCP spec.",
  tools: [
    {
      name: "get_webmcp_status",
      description: "Returns WebMCP's current standardization + browser status.",
      input_schema: { type: "object", properties: {}, additionalProperties: false },
    },
    {
      name: "list_docs",
      description: "Lists the agent-facing documentation sections on this site.",
      input_schema: { type: "object", properties: {}, additionalProperties: false },
    },
    {
      name: "search_knowledge",
      description: "Searches the WebMCP knowledge base and returns matching passages.",
      input_schema: {
        type: "object",
        required: ["query"],
        properties: { query: { type: "string" } },
        additionalProperties: false,
      },
    },
  ],
};

const KNOWLEDGE = [
  { id: "discovery", title: "Tool discovery", body: "An in-browser agent reads the tools a page registers via document.modelContext; there is no crawl or fetch step." },
  { id: "loop", title: "Call loop", body: "Invoke a tool with schema-valid args, read the structured result, repair from the schema on error." },
  { id: "apis", title: "Imperative vs declarative", body: "Imperative registers tools with document.modelContext.registerTool; declarative annotates an HTML form with toolname/tooldescription." },
  { id: "safety", title: "Safety", body: "Tools that move money or send messages require explicit user confirmation." },
];

export async function GET() {
  return NextResponse.json(MANIFEST);
}

export async function POST(req: Request) {
  const { tool, args = {} } = await req.json().catch(() => ({ tool: null }));

  switch (tool) {
    case "get_webmcp_status":
      return NextResponse.json({
        ok: true,
        standard: "proposed",
        body: "W3C Web Machine Learning Community Group",
        report: "Draft Community Group Report (under incubation)",
        ratified: false,
        browser: "Chrome 149 origin trial (chrome://flags/#enable-webmcp-testing)",
        proposedBy: ["Google", "Microsoft"],
      });

    case "list_docs":
      return NextResponse.json({
        ok: true,
        docs: ["/skill", "/.well-known/web-mcp", "/llms.txt"],
        tools: SELF_TOOLS.map((t) => t.name),
      });

    case "search_knowledge": {
      const q = String(args.query ?? "").toLowerCase();
      const hits = KNOWLEDGE.filter(
        (k) => k.title.toLowerCase().includes(q) || k.body.toLowerCase().includes(q),
      );
      return NextResponse.json({ ok: true, query: args.query ?? "", results: hits });
    }

    default:
      return NextResponse.json(
        { ok: false, error: `Unknown tool: ${tool}`, available: MANIFEST.tools.map((t) => t.name) },
        { status: 400 },
      );
  }
}
