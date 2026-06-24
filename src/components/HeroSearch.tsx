"use client";

import { useState } from "react";
import { ArrowUp } from "./icons";

// The xAI signature search input, repurposed as an agent prompt. On submit it
// jumps to the live console where the query can actually be run.
export function HeroSearch() {
  const [q, setQ] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const el = document.getElementById("self-demo");
    el?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <form onSubmit={submit} className="relative mx-auto mt-12 w-full max-w-[600px]">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Ask: how do I call a WebMCP tool?"
        className="void-input py-5 pl-6 pr-16 text-center"
        aria-label="Ask about WebMCP"
      />
      <button
        type="submit"
        aria-label="Submit"
        className="absolute right-2.5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-graphite text-stellar-white transition-opacity hover:opacity-70"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </form>
  );
}
