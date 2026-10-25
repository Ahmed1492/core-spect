"use client";

import { useState } from "react";
import { technologies } from "@/lib/site";

export default function TechShowcase() {
  const [active, setActive] = useState(technologies[0].key);
  const tech = technologies.find((t) => t.key === active) ?? technologies[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <div role="tablist" aria-label="Technologies" className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
        {technologies.map((t) => {
          const on = t.key === active;
          return (
            <button
              key={t.key}
              role="tab"
              aria-selected={on}
              onClick={() => setActive(t.key)}
              className={`shrink-0 rounded-lg border px-4 py-3 text-left text-sm font-semibold transition-all duration-300 ${
                on
                  ? "border-brand bg-brand text-white shadow-lg shadow-brand/30"
                  : "border-slate-200 bg-white text-slate-700 hover:border-brand/50 hover:text-brand"
              }`}
            >
              {t.name}
            </button>
          );
        })}
      </div>

      <div
        key={tech.key}
        role="tabpanel"
        className="animate-fade-up relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60 md:p-10"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/5" />
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{tech.name}</p>
        <h3 className="mt-2 text-2xl font-extrabold text-slate-900 md:text-3xl">{tech.title}</h3>
        <p className="mt-4 max-w-2xl text-slate-600">{tech.text}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {tech.specs.map((s) => (
            <div key={s.label} className="rounded-xl bg-muted p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{s.label}</p>
              <p className="mt-1 text-xl font-bold text-brand">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
