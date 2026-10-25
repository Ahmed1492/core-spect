import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { serviceGroups } from "@/lib/site";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="What we do"
        title="Inspection & integrity"
        highlight="services"
        subtitle="From routine weld inspection to on-stream corrosion screening, engineering design and technical training."
        icon="wave"
        chips={["8 service lines", "Conventional & advanced NDT", "In-service inspection"]}
        primary={{ href: "/contact", label: "Request a quote" }}
        secondary={{ href: "/equipment-safety", label: "Our equipment" }}
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <Reveal as="div" className="flex flex-wrap gap-2">
          {serviceGroups.map((g) => (
            <a
              key={g.slug}
              href={`#${g.slug}`}
              className="rounded-full border border-slate-300 px-4 py-1.5 text-sm transition hover:border-brand hover:bg-brand hover:text-white"
            >
              {g.title}
            </a>
          ))}
        </Reveal>
      </section>

      <div className="mx-auto max-w-6xl space-y-8 px-4 pb-20">
        {serviceGroups.map((g, i) => (
          <Reveal
            as="section"
            key={g.slug}
            id={g.slug}
            className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h2 className="text-2xl font-bold text-brand">{g.title}</h2>
                <p className="mt-1 text-slate-600">{g.summary}</p>
              </div>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {g.items.map((item) => (
                <li key={item} className="flex gap-2 text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}

        <Reveal variant="zoom" className="rounded-xl bg-muted p-8 text-center">
          <p className="text-lg font-semibold">Not sure which technique fits your asset?</p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-md bg-accent px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg"
          >
            Ask our engineers
          </Link>
        </Reveal>
      </div>
    </>
  );
}
