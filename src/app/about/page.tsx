import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Sections";
import { Container, Eyebrow } from "@/components/primitives";
import { GlassmorphismPortfolio } from "@/components/ui/glassmorphism-portfolio";

export const metadata: Metadata = {
  title: "About",
  description: "About the person behind WebMCP.md.",
  // Placeholder content — keep out of the index until it has a real bio.
  robots: { index: false, follow: true },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pb-24 pt-20 sm:pb-20">
        <section className="py-20">
          <Container>
            <div className="mx-auto max-w-[1000px]">
              <Eyebrow>About</Eyebrow>
              <h1 className="text-heading-lg mt-6 max-w-[16ch]">The person behind WebMCP.md</h1>
              <p className="text-body-lg mt-6 max-w-[60ch] text-ash">
                This is a placeholder portfolio block in the site&apos;s glassmorphism style.
                Fill it with your own bio, projects, and links — or drop in the official
                21st.dev block once it&apos;s installed.
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
