import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Sections";
import { Container, Eyebrow } from "@/components/primitives";
import { JsonLd } from "@/components/JsonLd";
import { GlassmorphismPortfolio } from "@/components/ui/glassmorphism-portfolio";

export const metadata: Metadata = {
  title: "About — Christian Bleeker",
  description:
    "Christian Bleeker — AI Partner Creator & TEDx speaker. Founder of Co-Creatie.ai and creator of the open-source Soulcreator framework for persistent AI identity.",
  alternates: { canonical: "/about" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Christian Bleeker",
  url: "https://www.christianbleeker.com",
  jobTitle: "AI Partner Creator",
  description:
    "AI Partner Creator and TEDx speaker building lasting partnerships between people and AI.",
  sameAs: [
    "https://www.linkedin.com/in/christianbleeker/",
    "https://www.christianbleeker.com",
    "https://www.co-creatie.ai",
    "https://www.soulcreator.ai",
    "https://www.youtube.com/watch?v=eOZOeLhRdcs",
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <SiteHeader />
      <main className="flex-1 pb-24 pt-20 sm:pb-20">
        <section className="py-20">
          <Container>
            <div className="mx-auto max-w-[1000px]">
              <Eyebrow>About</Eyebrow>
              <h1 className="text-heading-lg mt-6 max-w-[18ch]">The person behind WebMCP.md</h1>
              <p className="text-body-lg mt-6 max-w-[62ch] text-ash">
                WebMCP.md is built by Christian Bleeker — an AI Partner Creator and TEDx
                speaker who designs lasting partnerships between people and AI.
              </p>
            </div>
            <div className="mt-16">
              <GlassmorphismPortfolio />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
