import { TICKER } from "@/lib/site";

export function Ticker() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="ticker-wrap overflow-hidden border-y border-graphite bg-void-black">
      <div className="flex w-max animate-ticker whitespace-nowrap py-2.5">
        {items.map((t, i) => (
          <span key={i} className="mono-badge mx-6 inline-flex items-center gap-3 text-ash">
            <span className="text-smoke">/</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
