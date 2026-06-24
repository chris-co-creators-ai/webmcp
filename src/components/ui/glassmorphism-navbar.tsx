"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface GlassmorphismNavBarProps {
  items: NavItem[];
  className?: string;
  defaultTheme?: "light" | "dark";
  onThemeChange?: (theme: "light" | "dark") => void;
  /** Optional trailing control (e.g. theme toggle) rendered after a divider. */
  trailing?: React.ReactNode;
}

export function GlassmorphismNavBar({
  items,
  className,
  trailing,
}: GlassmorphismNavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);

  // Keep the lamp in sync with the section in view / current hash.
  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash || "#";
      const match = items.find((i) => i.url === hash || i.url === window.location.pathname);
      if (match) setActiveTab(match.name);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [items]);

  return (
    <div className={cn("fixed bottom-0 sm:bottom-auto sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:mb-0 sm:pt-5", className)}>
      <div
        className="flex items-center gap-2 rounded-full border border-white/10 bg-background/40 px-1.5 py-1.5 shadow-lg"
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer rounded-full px-5 py-2 font-mono text-[12px] uppercase tracking-[0.08em] transition-colors",
                "text-foreground/70 hover:text-foreground",
                isActive && "text-foreground",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={1.75} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 -z-10 w-full rounded-full bg-white/[0.06]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-primary">
                    <div className="absolute -left-2 -top-2 h-6 w-12 rounded-full bg-primary/30 blur-md" />
                    <div className="absolute -top-1 h-6 w-8 rounded-full bg-primary/30 blur-md" />
                    <div className="absolute left-2 top-0 h-4 w-4 rounded-full bg-primary/30 blur-sm" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}

        {trailing && (
          <>
            <div className="mx-1 h-6 w-px bg-border/60" />
            {trailing}
          </>
        )}
      </div>
    </div>
  );
}
