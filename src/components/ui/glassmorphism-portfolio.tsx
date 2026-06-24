import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Glassmorphism portfolio block — brand-aligned placeholder for the /about page.
// Swap for the 21st.dev `glassmorphism-portfolio-block-shadcnui` registry item
// once authenticated; this mirrors its shape so content carries over.

function Glass({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl",
        className,
      )}
      style={{ backdropFilter: "blur(20px) saturate(160%)", WebkitBackdropFilter: "blur(20px) saturate(160%)" }}
    >
      {children}
    </div>
  );
}

const PROJECTS = [
  { title: "Project One", desc: "Short description of what you built and the outcome." },
  { title: "Project Two", desc: "Short description of what you built and the outcome." },
  { title: "Project Three", desc: "Short description of what you built and the outcome." },
  { title: "Project Four", desc: "Short description of what you built and the outcome." },
];

const SKILLS = ["WebMCP", "Next.js", "TypeScript", "AI agents", "Design systems", "Vercel"];

export function GlassmorphismPortfolio() {
  return (
    <div className="mx-auto grid max-w-[1000px] gap-6 md:grid-cols-3">
      {/* Identity card */}
      <Glass className="md:col-span-1">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]">
          <span className="text-heading text-foreground">{"—"}</span>
        </div>
        <h2 className="text-heading mt-6 text-foreground">Your Name</h2>
        <p className="mono-badge mt-2 text-ash">[ Your role / title ]</p>
        <p className="text-body mt-4 text-ash">
          A short bio goes here — who you are, what you build, and what you care about. Replace
          this placeholder with your own words.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["Email", "GitHub", "X", "LinkedIn"].map((s) => (
            <Link
              key={s}
              href="#"
              className="rounded-full border border-white/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-ash transition-colors hover:text-foreground"
            >
              {s}
            </Link>
          ))}
        </div>
      </Glass>

      {/* About + skills */}
      <Glass className="md:col-span-2">
        <p className="mono-badge text-ash">[ About ]</p>
        <h3 className="text-heading-lg mt-4 text-foreground">A bit about me</h3>
        <p className="text-body-lg mt-5 text-ash">
          Use this space to introduce yourself in more depth — your background, what you&apos;re
          working on now, and why WebMCP. This whole block is a placeholder you can fill in later.
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {SKILLS.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-body text-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </Glass>

      {/* Project grid */}
      {PROJECTS.map((p) => (
        <Glass key={p.title} className="md:col-span-1">
          <p className="mono-badge text-ash">[ Project ]</p>
          <h4 className="text-body-lg mt-3 text-foreground">{p.title}</h4>
          <p className="text-body mt-2 text-ash">{p.desc}</p>
          <Link
            href="#"
            className="mono-badge mt-5 inline-block normal-case text-ash transition-colors hover:text-foreground"
          >
            View →
          </Link>
        </Glass>
      ))}
    </div>
  );
}
