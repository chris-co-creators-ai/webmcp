import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "./icons";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  // Page max-width 1200px, centered.
  return <div className={cn("mx-auto w-full max-w-[1200px] px-6 sm:px-8", className)}>{children}</div>;
}

// Eyebrow — '[ INSTRUCTIONS ]' technical metadata in GeistMono.
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("eyebrow", className)}>
      [&nbsp;{children}&nbsp;]
    </p>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  arrow?: boolean;
  className?: string;
  external?: boolean;
};

// All CTAs are ghost pills — no filled / colored buttons (no distinct CTA color).
export function Button({
  href,
  children,
  variant = "primary",
  arrow = true,
  className,
  external,
}: ButtonProps) {
  const cls = cn(
    "ghost-pill",
    variant === "secondary" && "ghost-pill-secondary",
    className,
  );
  const inner = (
    <>
      {children}
      {arrow && <ArrowUpRight className="h-3 w-3" />}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  // Section gap 96–120px.
  return (
    <section id={id} className={cn("scroll-mt-24 py-24 sm:py-28", className)}>
      {children}
    </section>
  );
}
