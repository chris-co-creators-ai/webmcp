import { NextResponse } from "next/server";

// WebMCP discovery document. Agents fetch this on the origin to learn which
// tools the site exposes and where to call them. Mirrors GET /api/mcp.

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json({
    version: "1.0",
    service: "webmcp.md",
    endpoint: "/api/mcp",
    docs: "/skill",
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
  });
}
