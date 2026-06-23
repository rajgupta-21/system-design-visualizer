"use client";

import { useState } from "react";

const examples = [
  { tag: "backend", title: "URL Shortener" },
  { tag: "data", title: "Real-time Analytics" },
  { tag: "auth", title: "OAuth Flow" },
  { tag: "infra", title: "CI/CD Pipeline" },
];

export default function ExamplesPage() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? examples : examples.filter((e) => e.tag === filter);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">Examples</h1>

      {/* FILTER */}
      <div className="flex gap-2 mb-8">
        {["all", "backend", "data", "auth", "infra"].map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className="px-4 py-1 border rounded-full border-zinc-700"
          >
            {tag}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-5">
        {filtered.map((ex) => (
          <div
            key={ex.title}
            className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl"
          >
            <h3 className="font-semibold">{ex.title}</h3>
            <p className="text-zinc-400 text-sm">{ex.tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
