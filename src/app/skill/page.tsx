import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Sections";
import { Container, Eyebrow, Button } from "@/components/primitives";
import { JsonLd } from "@/components/JsonLd";
import { agentProtocolHowToJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonLd";
import { AGENT_STEPS, SELF_TOOLS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Agent documentation",
  description:
    "Plain-language WebMCP documentation written for AI agents: how to discover tools, call them, verify results, and stay within the safety policy.",
  alternates: { canonical: "/skill" },
};

export default function SkillDocs() {
  return (
    <>
      <JsonLd data={agentProtocolHowToJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Agent documentation", path: "/skill" },
        ])}
      />
      <SiteHeader />
      <main className="flex-1 pb-24 pt-20 sm:pb-20">
        <Container className="max-w-[800px]">
          <Eyebrow>Agent documentation</Eyebrow>
          <h1 className="text-heading-lg mt-6">How to operate a WebMCP site</h1>
          <p className="text-body-lg mt-6 text-ash">
            If you are an AI agent, this is the entire in-browser protocol. If you are a
            developer, this is the lightweight pattern you add to your own site.
          </p>

          <ol className="mt-16 space-y-10">
            {AGENT_STEPS.map((s, i) => (
              <li key={s.n} id={`step-${i + 1}`} className="flex scroll-mt-24 gap-5">
                <span className="text-heading shrink-0 text-smoke">{s.n}</span>
                <div>
                  <h2 className="text-body-lg text-stellar-white">{s.title}</h2>
                  <p className="text-body mt-2 text-ash">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="text-heading mt-20">Server mirror (not the spec)</h2>
          <p className="text-body mt-4 text-ash">
            Real WebMCP tools live in the page via{" "}
            <span className="font-mono text-stellar-white">document.modelContext</span> and{" "}
            <span className="font-mono text-stellar-white">&lt;form toolname&gt;</span>. As a
            convenience for headless testing, this site <em>also</em> mirrors the tools below at{" "}
            <Link href="/.well-known/web-mcp" className="text-stellar-white underline underline-offset-4">
              /.well-known/web-mcp
            </Link>{" "}
            and <span className="font-mono text-stellar-white">/api/mcp</span> — but that REST
            surface is <strong>not</strong> part of the WebMCP standard.
          </p>
          <div className="mt-8 border-t border-graphite">
            {SELF_TOOLS.map((t) => (
              <div key={t.name} className="border-b border-graphite py-5">
                <code className="font-mono text-body text-stellar-white">
                  {t.name}(args: {t.args})
                </code>
                <p className="text-body mt-2 text-ash">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 border border-graphite p-8">
            <p className="text-body-lg text-stellar-white">
              Read the official WebMCP documentation
            </p>
            <p className="text-body mt-3 text-ash">
              This site is an independent explainer. The canonical sources are the W3C
              explainer and Google&apos;s Chrome for Developers docs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="https://webmachinelearning.github.io/webmcp/" external>
                W3C spec
              </Button>
              <Button
                href="https://developer.chrome.com/docs/ai/webmcp"
                variant="secondary"
                external
              >
                Chrome docs
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
