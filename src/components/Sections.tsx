import Link from "next/link";
import { Container, Eyebrow, Section, Button } from "./primitives";
import { CONCEPT_CARDS, AGENT_STEPS, TIMELINE, SITE, WHAT_IS_WEBMCP } from "@/lib/site";

const CARD_IMG = [
  "/images/card-problem.jpg",
  "/images/card-fix.jpg",
  "/images/card-why.jpg",
];
const CARD_LINKS: [string, string][] = [
  ["How it works", "#agents"],
  ["Read the docs", "/skill"],
  ["See use-cases", "#self-demo"],
];

export function WhatIsWebMCP() {
  return (
    <Section id="what" className="border-t border-graphite">
      <Container>
        <Eyebrow>The concept</Eyebrow>
        <h2 className="text-heading-lg mt-6 max-w-[18ch]">What is WebMCP?</h2>
        {/* Direct-answer definition first (citation-grade), then the framing. */}
        <p className="text-body-lg mt-6 max-w-[62ch] text-stellar-white">
          {WHAT_IS_WEBMCP.definition}
        </p>
        <p className="text-body mt-5 max-w-[64ch] text-ash">{WHAT_IS_WEBMCP.detail}</p>
        <p className="text-body mt-4 max-w-[64ch] text-ash">
          Think of it as the new SEO, but for AI agents: SEO made you findable on Google;
          WebMCP makes you operable by the assistant your customer already runs — ChatGPT,
          Gemini, Claude.
        </p>

        {/* Borderless typographic columns — defined by column gap only */}
        <div className="mt-20 grid gap-x-6 gap-y-16 md:grid-cols-3">
          {CONCEPT_CARDS.map((c, i) => {
            const [label, href] = CARD_LINKS[i];
            return (
              <div key={c.title} className="flex flex-col">
                <p className="mono-badge text-ash">{c.tag}</p>
                <h3 className="text-heading mt-4">{c.title}</h3>
                <p className="text-body mt-4 text-ash">{c.body}</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={CARD_IMG[i]}
                  alt=""
                  loading="lazy"
                  className="mt-8 h-[180px] w-full object-cover"
                />
                <div className="mt-8">
                  <Button href={href} variant="secondary">
                    {label}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline — mono metadata columns */}
        <div className="mt-24 grid gap-x-6 gap-y-10 border-t border-graphite pt-12 sm:grid-cols-2 md:grid-cols-4">
          {TIMELINE.map((t) => (
            <div key={t.title}>
              <p className="mono-badge text-ash">{t.tag}</p>
              <p className="text-body-lg mt-3 text-stellar-white">{t.title}</p>
              <p className="text-body mt-2 text-ash">{t.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function AgentInstructions() {
  return (
    <Section id="agents" className="border-t border-graphite">
      <Container>
        <Eyebrow>If you are an agent, read this</Eyebrow>
        <h2 className="text-heading-lg mt-6 max-w-[16ch]">One pattern, every sector</h2>
        <p className="text-body-lg mt-6 max-w-[60ch] text-ash">
          The procedure below is the entire protocol. It is the same whether you are
          booking a restaurant, ordering parts, or requesting an insurance quote.
        </p>

        <ol className="mt-20 grid gap-x-6 gap-y-14 md:grid-cols-2">
          {AGENT_STEPS.map((s) => (
            <li key={s.n} className="flex gap-5">
              <span className="text-heading shrink-0 text-smoke">{s.n}</span>
              <div>
                <h3 className="text-body-lg text-stellar-white">{s.title}</h3>
                <p className="text-body mt-2 text-ash">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Code block — the REAL in-browser imperative API (getTools / executeTool) */}
        <div className="mt-16 border border-graphite p-6">
          <p className="mono-badge text-smoke">{"// minimal in-browser agent loop"}</p>
          <pre className="mt-3 overflow-x-auto font-mono text-[12.5px] leading-relaxed text-ash">
            <code>{`// discover the tools the page registered, then call one
const [tool] = await document.modelContext.getTools();
const result = await document.modelContext.executeTool(
  tool, JSON.stringify({ date, time, guests, name }),
);
// on a schema error, repair from tool.inputSchema and retry — never fake success`}</code>
          </pre>
        </div>

        <div className="mt-10">
          <Button href="/skill">Full agent documentation</Button>
        </div>
      </Container>
    </Section>
  );
}

export function UpdateCTA() {
  return (
    <Section className="border-t border-graphite">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <Eyebrow>Make your site agent-ready</Eyebrow>
          <h2 className="text-heading-lg mt-6">
            Expose your actions as tools — agents do the rest.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/skill">Read the agent docs</Button>
            <Button
              href="https://webmachinelearning.github.io/webmcp/"
              variant="secondary"
              external
            >
              View the WebMCP spec
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function Footer() {
  const cols = [
    { title: "Learn", links: [["What is WebMCP", "/#what"], ["For agents", "/#agents"], ["FAQ", "/#faq"]] },
    { title: "Docs", links: [["Agent docs", "/skill"], ["Use-cases", "/#self-demo"], ["WebMCP spec ↗", "https://webmachinelearning.github.io/webmcp/"], ["About", "/about"]] },
    { title: "Machine", links: [["/.well-known/web-mcp", "/.well-known/web-mcp"], ["llms.txt", "/llms.txt"], ["sitemap.xml", "/sitemap.xml"]] },
  ];
  return (
    <footer className="relative overflow-hidden border-t border-graphite">
      {/* Footer horizon glow — the only large-scale color event (dark mode only) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/horizon.jpg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[380px] w-full object-cover opacity-55"
      />
      <Container className="relative">
        {/* Wordmark band */}
        <div className="flex flex-col gap-8 border-b border-graphite py-16 md:flex-row md:items-end md:justify-between">
          <div>
            <Link href="/" className="text-heading-lg text-foreground">
              WebMCP<span className="text-ash">.md</span>
            </Link>
            <p className="text-body-lg mt-4 max-w-[34ch] text-ash">{SITE.tagline}</p>
          </div>
          <Button href="/skill">Read the agent docs</Button>
        </div>

        {/* Link columns — mono headers, no dividers */}
        <div className="grid gap-10 py-16 sm:grid-cols-3">
          {cols.map((col) => (
            <div key={col.title}>
              <p className="mono-badge text-ash">{col.title}</p>
              <ul className="mt-5 space-y-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-body text-foreground transition-opacity hover:opacity-60"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mono-badge border-t border-graphite py-8 normal-case text-ash">
          © {new Date().getFullYear()} {SITE.domain} · WebMCP is a proposed open web
          standard. Not affiliated with Google or Microsoft.
        </p>
      </Container>
    </footer>
  );
}
