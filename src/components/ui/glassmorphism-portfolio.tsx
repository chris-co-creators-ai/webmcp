import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Glassmorphism portfolio block for the /about page — real info about the
// person behind WebMCP.md (Christian Bleeker).

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

const LINKS = [
  { label: "Website", href: "https://www.christianbleeker.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/christianbleeker/" },
  { label: "Co-Creatie.ai", href: "https://www.co-creatie.ai" },
  { label: "Soulcreator.ai", href: "https://www.soulcreator.ai" },
];

const THEMES = [
  "Human–AI partnership",
  "Persistent AI identity",
  "Claude & agent design",
  "AI strategy",
  "Co-creation",
  "Cognitive science",
];

const VENTURES = [
  {
    tag: "Venture",
    title: "Co-Creatie.ai",
    desc: "Personalized AI partners for entrepreneurs — bespoke Claude instances that act as a contextual business advisor, running locally with persistent memory and their own voice.",
    href: "https://www.co-creatie.ai",
    cta: "Visit",
  },
  {
    tag: "Open source",
    title: "Soulcreator.ai",
    desc: "An open-source (MIT) framework that gives AI a stable identity across conversations — a three-layer behavioral architecture of values, voice and adaptive mission, grounded in cognitive science.",
    href: "https://www.soulcreator.ai",
    cta: "Visit",
  },
  {
    tag: "TEDxEindhoven",
    title: "Traveling through time together with AI",
    desc: "My TEDx talk on how people and AI can grow together — each strong where the other is weak.",
    href: "https://www.youtube.com/watch?v=eOZOeLhRdcs&t=344s",
    cta: "Watch",
  },
];

export function GlassmorphismPortfolio() {
  return (
    <div className="mx-auto grid max-w-[1000px] gap-6 md:grid-cols-3">
      {/* Identity card */}
      <Glass className="md:col-span-1">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]">
          <span className="text-heading text-foreground">CB</span>
        </div>
        <h2 className="text-heading mt-6 text-foreground">Christian Bleeker</h2>
        <p className="mono-badge mt-2 text-ash">[ AI Partner Creator · TEDx Speaker ]</p>
        <p className="text-body mt-4 text-ash">
          From Nijmegen, I build lasting partnerships between people and AI — helping founders
          move past disposable AI tools toward partners that keep their context, write in their
          voice, and grow with them.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-ash transition-colors hover:text-foreground"
            >
              {s.label}
            </a>
          ))}
        </div>
      </Glass>

      {/* About + themes */}
      <Glass className="md:col-span-2">
        <p className="mono-badge text-ash">[ About ]</p>
        <h3 className="text-heading-lg mt-4 text-foreground">One shift: tool → partner</h3>
        <p className="text-body-lg mt-5 text-ash">
          My work is about a single shift — from AI as a tool you forget the moment you close
          the window, to AI as a partner that knows you better tomorrow than today. Through
          Co-Creatie.ai I design personalized AI partners for entrepreneurs; through the
          open-source Soulcreator framework I give AI systems a stable, persistent identity.
          Living with aphantasia and inspired by science-fiction writers like Asimov, Dick,
          Adams and Herbert, I&apos;m fascinated by how humans and machines complement each
          other — and I shared that on the TEDxEindhoven stage.
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {THEMES.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-body text-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </Glass>

      {/* Venture cards */}
      {VENTURES.map((p) => (
        <Glass key={p.title} className="md:col-span-1">
          <p className="mono-badge text-ash">[ {p.tag} ]</p>
          <h4 className="text-body-lg mt-3 text-foreground">{p.title}</h4>
          <p className="text-body mt-2 text-ash">{p.desc}</p>
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mono-badge mt-5 inline-block normal-case text-ash transition-colors hover:text-foreground"
          >
            {p.cta} →
          </a>
        </Glass>
      ))}
    </div>
  );
}
