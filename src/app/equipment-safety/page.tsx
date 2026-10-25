import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { equipmentGroups, safetyCommitments, safetySystem } from "@/lib/site";

export const metadata: Metadata = { title: "Equipment & Safety" };

export default function EquipmentSafetyPage() {
  return (
    <>
      <PageHero
        breadcrumb="Equipment & Safety"
        eyebrow="Equipment & HSE"
        title="Field-proven equipment,"
        highlight="safety first"
        subtitle="A broad fleet of conventional and advanced inspection equipment, operated under a documented Safety and Health Management System."
        icon="shield"
        chips={["Advanced NDT fleet", "Calibrated equipment", "Zero harm target"]}
        primary={{ href: "#safety", label: "Our safety approach" }}
        secondary={{ href: "/contact", label: "Contact us" }}
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <div className="mb-3 h-1 w-14 bg-accent" />
          <h2 className="text-3xl font-bold">Our Equipment</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            We own and maintain a broad fleet of conventional and advanced inspection
            equipment, covered by a preventative maintenance and calibration programme.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {equipmentGroups.map((g, i) => (
            <Reveal
              key={g.title}
              delay={(i % 2) * 120}
              className="rounded-xl border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-brand">{g.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {g.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="safety" className="bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <div className="mb-3 h-1 w-14 bg-accent" />
            <h2 className="text-3xl font-bold">Health, Safety & Environment</h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Safety, Health and Environment comes first. We never compromise on the health
              and safety of our customers and our people, and we manage responsibly the impact
              our business has on the environment.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <Reveal>
                <h3 className="text-xl font-semibold text-brand">Our commitments</h3>
              </Reveal>
              <ul className="mt-4 space-y-3">
                {safetyCommitments.map((c, i) => (
                  <Reveal
                    as="li"
                    key={c}
                    variant="left"
                    delay={i * 80}
                    className="flex gap-3 rounded-lg bg-white p-4 shadow-sm"
                  >
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" />
                    </svg>
                    <span>{c}</span>
                  </Reveal>
                ))}
              </ul>
            </div>
            <div>
              <Reveal>
                <h3 className="text-xl font-semibold text-brand">Our management system</h3>
              </Reveal>
              <ol className="mt-4 space-y-3">
                {safetySystem.map((s, i) => (
                  <Reveal
                    as="li"
                    key={s.title}
                    variant="right"
                    delay={i * 80}
                    className="flex gap-4 rounded-lg bg-white p-4 shadow-sm"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold">{s.title}</p>
                      <p className="text-sm text-slate-600">{s.text}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
