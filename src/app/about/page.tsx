import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { accreditations, company, mission, values, vision } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow={`About ${company.name}`}
        title="Caring for the integrity of"
        highlight="your equipment"
        subtitle="An Egyptian inspection and integrity company delivering NDT, engineering and asset reliability services with the latest technologies."
        icon="badge"
        chips={["ISO 9001", "ASME", "API", "ASNT", "IRATA"]}
        primary={{ href: "/services", label: "Our services" }}
        secondary={{ href: "/contact", label: "Contact us" }}
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2">
        <Reveal variant="left" className="rounded-lg border-l-4 border-brand bg-muted p-8">
          <h2 className="text-xl font-bold text-brand">Our Mission</h2>
          <p className="mt-3 text-lg">{mission}</p>
        </Reveal>
        <Reveal
          variant="right"
          delay={120}
          className="rounded-lg border-l-4 border-accent bg-muted p-8"
        >
          <h2 className="text-xl font-bold text-accent">Our Vision</h2>
          <p className="mt-3 text-lg">{vision}</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <Reveal>
          <div className="mb-3 h-1 w-14 bg-accent" />
          <h2 className="text-3xl font-bold">Our Values</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {values.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 120}
              className="rounded-lg border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-brand">{v.title}</h3>
              <p className="mt-2 text-slate-600">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <div className="mb-3 h-1 w-14 bg-accent" />
            <h2 className="text-3xl font-bold">Accreditations & Memberships</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {accreditations.map((a, i) => (
              <Reveal
                key={a}
                variant="zoom"
                delay={(i % 4) * 80}
                className="flex items-center justify-center rounded-lg bg-white p-6 text-center font-semibold text-brand shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                {a}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
