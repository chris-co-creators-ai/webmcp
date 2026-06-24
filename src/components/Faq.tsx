import { Container, Eyebrow, Section } from "./primitives";
import { FAQ } from "@/lib/site";

// Fully-visible FAQ (no JS-hidden content) — feeds the FAQPage JSON-LD from the
// same FAQ array, so on-page text == schema text. Ordered by query volume.
export function Faq() {
  return (
    <Section id="faq" className="border-t border-graphite">
      <Container>
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="text-heading-lg mt-6 max-w-[16ch]">WebMCP, answered</h2>
        <dl className="mt-12 border-t border-graphite">
          {FAQ.map((item) => (
            <div key={item.question} className="border-b border-graphite py-7">
              <dt className="text-body-lg text-stellar-white">{item.question}</dt>
              <dd className="text-body mt-3 max-w-[72ch] text-ash">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
