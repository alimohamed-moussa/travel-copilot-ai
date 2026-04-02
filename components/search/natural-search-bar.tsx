"use client";

import { useState } from "react";

export function NaturalSearchBar() {
  const [prompt, setPrompt] = useState(
    "I want a 4-day trip in May from Paris under €180"
  );
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    try {
      setLoading(true);

      const response = await fetch("/api/copilot/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-[28px] border border-white/90 bg-white/80 p-[18px] shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <div className="grid items-center gap-3 rounded-[18px] border border-slate-900/8 bg-white p-3 md:grid-cols-[1fr_auto]">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full bg-transparent px-3 py-2 text-base text-slate-900 outline-none"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="rounded-[14px] bg-gradient-to-br from-blue-600 to-blue-500 px-5 py-3 font-semibold text-white shadow-[0_16px_30px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5 disabled:opacity-60"
        >
          {loading ? "Searching..." : "Search flights"}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2.5">
        {[
          "Weekend under €150",
          "Direct flights only",
          "Paris in May",
          "Rome business trip",
        ].map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-slate-900/8 bg-white px-3 py-2 text-[13px] font-semibold text-slate-600"
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}