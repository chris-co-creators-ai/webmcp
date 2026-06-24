import { Container, Button } from "./primitives";
import { HeroSearch } from "./HeroSearch";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Right-side white→blue light bloom — a slow ambient loop behind the wordmark,
          with the bloom still as its poster so it paints instantly. */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-bloom.jpg"
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
      >
        <source src="/videos/hero-ambient.mp4" type="video/mp4" />
      </video>

      <Container className="relative">
        <div className="reveal flex flex-col items-center pt-24 pb-20 text-center sm:pt-32">
          <p className="eyebrow">[&nbsp;INSTRUCTIONS FOR AI AGENTS&nbsp;]</p>

          <h1 className="text-display mt-8 max-w-[14ch] sm:text-[80px]">
            Operate the web directly.
          </h1>

          <p className="text-body-lg mt-7 max-w-[640px] text-ash">
            WebMCP is a proposed open web standard from Google &amp; Microsoft that lets a site
            expose its functions and forms as callable tools. Stop scraping screenshots — an
            agent calls the tool and reads the structured result.
          </p>

          <HeroSearch />

          {/* Announcement banner — floats on canvas, no background or border */}
          <div className="mt-14 flex w-full max-w-[600px] flex-col items-center gap-4 sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-body text-stellar-white">
                A proposed W3C standard — live to try in Chrome 149.
              </p>
              <p className="text-body text-ash">
                Built by Google &amp; Microsoft. Under incubation.
              </p>
            </div>
            <Button href="/skill" variant="secondary">
              Read the docs
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
