"use client";

import Link from "next/link";
import { useState } from "react";
import { Container, Eyebrow, Section } from "./primitives";
import { Terminal } from "./icons";
import { SECTOR_USECASES, type SectorTool } from "@/lib/site";

type Line = { kind: "in" | "out"; text: string };

export function UseCases() {
  const [active, setActive] = useState(0);
  const [log, setLog] = useState<Line[]>([
    { kind: "out", text: "Pick a sector, then run a tool to see the structured result." },
  ]);
  const sector = SECTOR_USECASES[active];

  function selectSector(i: number) {
    setActive(i);
    setLog([{ kind: "out", text: `${SECTOR_USECASES[i].sector} — pick a tool and press run.` }]);
  }

  function run(t: SectorTool) {
    setLog((l) => [
      ...l,
      { kind: "in", text: `> call ${t.name}(${JSON.stringify(t.args)})` },
      { kind: "out", text: JSON.stringify(t.result, null, 2) },
    ]);
  }

  return (
    <Section id="self-demo" className="border-t border-graphite">
      <Container>
        <Eyebrow>Every sector</Eyebrow>
        <h2 className="text-heading-lg mt-6 max-w-[22ch]">
          How does an AI agent call a WebMCP tool?
        </h2>
        <p className="text-body-lg mt-6 max-w-[64ch] text-ash">
          The same WebMCP pattern fits every sector: register your highest-intent actions as
          tools, and an agent calls them directly — visibly, with structured arguments —
          instead of reading pixels. Pick a sector, then run a tool to see the result an agent
          gets back.
        </p>

        {/* Sector pills */}
        <div className="mt-10 flex flex-wrap gap-2">
          {SECTOR_USECASES.map((s, i) => (
            <button
              key={s.sector}
              onClick={() => selectSector(i)}
              className={`rounded-full border px-4 py-2 font-mono text-[12px] tracking-[0.04em] transition-colors ${
                i === active
                  ? "border-stellar-white text-stellar-white"
                  : "border-smoke text-ash hover:text-stellar-white"
              }`}
            >
              {s.sector}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Tool list with run buttons */}
          <div className="border-t border-graphite">
            {sector.tools.map((t) => (
              <div key={t.name} className="border-b border-graphite py-5">
                <div className="flex items-center justify-between gap-3">
                  <code className="font-mono text-body text-stellar-white">{t.name}()</code>
                  <button
                    onClick={() => run(t)}
                    className="rounded-full border border-smoke px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-ash transition-colors hover:border-stellar-white hover:text-stellar-white"
                  >
                    run
                  </button>
                </div>
                <p className="text-body mt-2 text-ash">{t.desc}</p>
                <p className="mono-badge mt-2 normal-case text-smoke">
                  args: {JSON.stringify(t.args)}
                </p>
              </div>
            ))}
          </div>

          {/* Console */}
          <div className="border border-graphite">
            <div className="flex items-center gap-2 border-b border-graphite px-4 py-3">
              <Terminal className="h-4 w-4 text-ash" />
              <span className="mono-badge text-ash">{sector.sector.toLowerCase()} · console</span>
            </div>
            <pre className="max-h-[440px] min-h-[300px] overflow-auto p-4 font-mono text-[12px] leading-relaxed">
              {log.map((line, i) => (
                <div key={i} className={line.kind === "in" ? "text-stellar-white" : "text-ash"}>
                  {line.text}
                </div>
              ))}
              <span className="text-stellar-white">
                {"> "}
                <span className="caret">▋</span>
              </span>
            </pre>
          </div>
        </div>

        <p className="mono-badge mt-8 max-w-[80ch] normal-case text-smoke">
          These are illustrative tools — each is a real{" "}
          <span className="text-ash">document.modelContext.registerTool</span> shape. This page
          also mirrors its own tools over HTTP at <span className="text-ash">/api/mcp</span> for
          headless testing — a convenience, not the WebMCP spec.{" "}
          <Link href="/skill" className="text-ash underline underline-offset-2 hover:text-stellar-white">
            See the docs
          </Link>
          .
        </p>
      </Container>
    </Section>
  );
}
