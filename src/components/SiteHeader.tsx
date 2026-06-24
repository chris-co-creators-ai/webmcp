"use client";

import Link from "next/link";
import { Home, Sparkles, Bot, Layers, FileText, HelpCircle } from "lucide-react";
import { GlassmorphismNavBar, type NavItem } from "./ui/glassmorphism-navbar";

// Order mirrors the on-page scroll order: Hero → Use-cases → What is WebMCP →
// For agents → FAQ, with Docs (separate page) last.
const NAV_ITEMS: NavItem[] = [
  { name: "Home", url: "/", icon: Home },
  { name: "Use-cases", url: "/#self-demo", icon: Layers },
  { name: "WebMCP", url: "/#what", icon: Sparkles },
  { name: "Agents", url: "/#agents", icon: Bot },
  { name: "FAQ", url: "/#faq", icon: HelpCircle },
  { name: "Docs", url: "/skill", icon: FileText },
];

export function SiteHeader() {
  return (
    <>
      {/* Brand mark — fixed top-left. The luminous-W on black blends into the
          void in dark mode and inverts cleanly in light mode. */}
      <Link
        href="/"
        className="fixed left-0 top-0 z-50 flex items-center gap-2.5 p-5 sm:p-6"
      >
        <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden>
          <rect width="64" height="64" rx="6" fill="#000000" />
          <path
            d="M13 19 L24 46 L32 30 L40 46 L51 19"
            fill="none"
            stroke="#ffffff"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-body-lg tracking-[-0.5px] text-foreground">WebMCP.md</span>
      </Link>

      <GlassmorphismNavBar items={NAV_ITEMS} />
    </>
  );
}
