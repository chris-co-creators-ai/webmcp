import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { Ticker } from "@/components/Ticker";
import { Hero } from "@/components/Hero";
import {
  WhatIsWebMCP,
  AgentInstructions,
  UpdateCTA,
  Footer,
} from "@/components/Sections";
import { UseCases } from "@/components/UseCases";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/seo/jsonLd";
import { FAQ } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* Visible FAQ renders below; FAQPage JSON-LD mirrors the same FAQ array. */}
      <JsonLd data={faqJsonLd(FAQ)} />
      <SiteHeader />
      {/* clears the bottom nav on mobile, the floating top pill on desktop */}
      <div className="pb-24 sm:pb-0 sm:pt-20">
        <Ticker />
        <main className="flex-1">
          <Hero />
          <UseCases />
          <WhatIsWebMCP />
          <AgentInstructions />
          <Faq />
          <UpdateCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
