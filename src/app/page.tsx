import Link from "next/link";
import CountUp from "@/components/CountUp";
import HeroBackground from "@/components/HeroBackground";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TechShowcase from "@/components/TechShowcase";
import {
  accreditations,
  benefits,
  brands,
  company,
  faqs,
  industries,
  mission,
  processSteps,
  safetyCommitments,
  serviceGroups,
  serviceIcons,
  vision,
} from "@/lib/site";

const industryIcons: Record<string, string> = {
  "Oil & Gas": "flame",
  Maritime: "ship",
  Petrochemical: "flask",
  Pharmaceutical: "pill",
  "Power Generation": "bolt",
  Municipalities: "city",
};

const stats = [
  { to: 40, suffix: "+", label: "Inspection techniques" },
  { to: 35, suffix: "+", label: "Specialist instruments" },
  { to: 8, suffix: "", label: "Service lines" },
  { to: 7, suffix: "", label: "Accreditations & memberships" },
];

function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <div className={`marquee overflow-hidden ${className}`}>
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="mx-8 flex items-center gap-3 whitespace-nowrap text-lg font-bold tracking-wide"
          >
            <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function HeroPanel() {
  return (
    <div className="animate-fade-up relative hidden lg:block" style={{ animationDelay: "350ms" }}>
      <div className="rounded-2xl border border-white/15 bg-[#0d2444]/70 p-6 shadow-2xl shadow-black/30 backdrop-blur-md">
        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-slate-300">
          <span>Sample A-scan</span>
          <span className="flex items-center gap-2">
            <span className="hero-blip h-2 w-2 rounded-full bg-emerald-400" /> Live
          </span>
        </div>
        <svg viewBox="0 0 320 120" className="mt-4 w-full">
          <path d="M0 100H320" stroke="white" strokeOpacity="0.15" />
          {[40, 80, 120, 160, 200, 240, 280].map((x) => (
            <path key={x} d={`M${x} 10V110`} stroke="white" strokeOpacity="0.06" />
          ))}
          <path
            d="M0 100 L30 100 L34 20 L38 105 L42 60 L46 100 L120 100 L124 78 L128 102 L132 88 L136 100 L220 100 L224 40 L228 104 L232 70 L236 100 L320 100"
            fill="none"
            stroke="#7dd3fc"
            strokeWidth="2"
          />
          <path d="M200 50H260" stroke="#f87171" strokeWidth="2.5" />
        </svg>
        <div className="mt-5 grid grid-cols-3 gap-3 text-center">
          {[
            { k: "Technique", v: "PAUT" },
            { k: "Coverage", v: "100%" },
            { k: "Grid", v: "0.5 mm" },
          ].map((m) => (
            <div key={m.k} className="rounded-lg bg-white/10 px-2 py-3">
              <p className="text-[10px] uppercase tracking-widest text-slate-300">{m.k}</p>
              <p className="mt-1 font-bold">{m.v}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-16 -left-8 flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-slate-900 shadow-xl">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Icon name="shield" className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-bold">Safety first</p>
          <p className="text-xs text-slate-500">In-service, on-stream inspection</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <HeroBackground />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 md:py-32 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-200 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {company.descriptor}
            </p>
            <h1
              className="animate-fade-up mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl"
              style={{ animationDelay: "100ms" }}
            >
              Protecting the integrity of your{" "}
              <span className="bg-gradient-to-r from-red-300 to-accent bg-clip-text text-transparent">
                critical assets
              </span>
            </h1>
            <p
              className="animate-fade-up mt-6 max-w-xl text-lg text-slate-200"
              style={{ animationDelay: "200ms" }}
            >
              Conventional and advanced NDT, asset integrity, engineering and inspection
              services for oil & gas, petrochemical, power and marine operators.
            </p>
            <div
              className="animate-fade-up mt-10 flex flex-wrap gap-4"
              style={{ animationDelay: "300ms" }}
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 font-semibold shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:bg-red-700"
              >
                Explore our services
                <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-white/40 px-6 py-3.5 font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Request a quote
              </Link>
            </div>
            <p
              className="animate-fade-up mt-10 text-sm font-medium text-slate-300"
              style={{ animationDelay: "400ms" }}
            >
              {company.tagline}
            </p>
          </div>
          <HeroPanel />
        </div>
      </section>

      {/* Accreditations marquee */}
      <section className="border-b border-slate-200 bg-white py-6 text-slate-400">
        <Marquee items={accreditations} />
      </section>

      {/* Stats */}
      <section className="relative z-10 mx-auto -mb-12 max-w-6xl px-4 pt-16">
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-200/70 ring-1 ring-slate-100 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 100}
              variant="zoom"
              className="border-slate-100 p-8 text-center [&:not(:last-child)]:border-r"
            >
              <p className="text-4xl font-extrabold text-brand md:text-5xl">
                <CountUp to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-slate-500">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About intro */}
      <section className="bg-muted pt-28 pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="Your partner for inspection and asset integrity"
              text="Core Spect cares for the integrity of your equipment using the latest inspection technologies, from routine weld checks to on-stream corrosion screening."
            />
            <Reveal delay={150}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Conventional & advanced NDT",
                  "In-service, on-stream inspection",
                  "Engineering design to ASME / API",
                  "Vendor & third-party inspection",
                  "Rope access teams",
                  "Technical training",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 font-medium text-slate-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-brand hover:text-accent"
              >
                More about us <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-5">
            <Reveal variant="right" className="rounded-2xl bg-brand p-8 text-white shadow-xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-200">Our mission</p>
              <p className="mt-3 text-xl font-semibold leading-snug">{mission}</p>
            </Reveal>
            <Reveal
              variant="right"
              delay={120}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Our vision</p>
              <p className="mt-3 text-xl font-semibold leading-snug text-slate-800">{vision}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="What we do"
            title="Complete inspection & integrity services"
            text="One partner for testing, inspection, engineering and the people and materials to support them."
          />
          <Reveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-brand px-5 py-2.5 font-semibold text-brand transition hover:bg-brand hover:text-white"
            >
              All services <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceGroups.map((g, i) => (
            <Reveal key={g.slug} delay={(i % 4) * 90}>
              <Link
                href={`/services#${g.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl hover:shadow-brand/15"
              >
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand to-accent transition-transform duration-500 group-hover:scale-x-100" />
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <Icon name={serviceIcons[g.slug]} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{g.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{g.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand opacity-70 transition group-hover:gap-2 group-hover:opacity-100">
                  Learn more <Icon name="arrow" className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-gradient-to-b from-muted to-white py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Technology"
            title="Advanced techniques, real numbers"
            text="A look at some of the advanced methods our teams run in the field."
          />
          <Reveal className="mt-12">
            <TechShowcase />
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 py-24">
        <SectionHeading
          eyebrow="How we work"
          title="From scope to report"
          align="center"
        />
        <div className="relative mt-14 grid gap-8 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-brand/10 via-brand/40 to-brand/10 md:block" />
          {processSteps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120} className="relative text-center">
              <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-lg font-extrabold text-brand shadow-lg ring-4 ring-brand/15">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why us + industries (dark) */}
      <section className="relative overflow-hidden bg-brand-dark py-24 text-white">
        <HeroBackground variant="subtle" />
        <div className="relative mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Why Core Spect"
            title="Built around uptime, safety and accuracy"
            dark
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal
                key={b.title}
                delay={i * 100}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white shadow-lg shadow-accent/30">
                  <Icon name={b.icon} />
                </span>
                <h3 className="mt-5 text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{b.text}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-20">
            <Reveal>
              <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-red-300">
                Industries we serve
              </p>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {industries.map((name, i) => (
                <Reveal
                  key={name}
                  delay={i * 70}
                  variant="zoom"
                  className="flex flex-col items-center gap-3 rounded-xl border border-white/10 p-5 text-center transition hover:border-white/30 hover:bg-white/5"
                >
                  <Icon name={industryIcons[name]} className="h-8 w-8 text-sky-300" />
                  <span className="text-sm font-semibold">{name}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-24 lg:grid-cols-2">
        <Reveal variant="left" className="relative">
          <div className="rounded-3xl bg-gradient-to-br from-accent to-red-800 p-10 pb-16 text-white shadow-2xl shadow-accent/30">
            <Icon name="shield" className="h-14 w-14" />
            <p className="mt-6 text-3xl font-extrabold leading-tight">
              Safety, Health and Environment comes first.
            </p>
            <p className="mt-4 text-red-100">
              We never compromise on the health and safety of our customers and our people.
            </p>
          </div>
          <div className="absolute -bottom-8 right-8 hidden rounded-2xl bg-white px-6 py-4 shadow-xl ring-1 ring-slate-100 sm:block">
            <p className="text-sm font-semibold text-slate-500">Target</p>
            <p className="text-2xl font-extrabold text-brand">Zero harm</p>
          </div>
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="HSE"
            title="A documented Safety & Health Management System"
            text="Hazard identification, risk assessment, competency and continual improvement are built into every job."
          />
          <ul className="mt-8 space-y-3">
            {safetyCommitments.slice(0, 4).map((c, i) => (
              <Reveal as="li" key={c} delay={i * 80} className="flex gap-3 text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                {c}
              </Reveal>
            ))}
          </ul>
          <Reveal delay={350}>
            <Link
              href="/equipment-safety#safety"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-brand hover:text-accent"
            >
              Our safety approach <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Equipment brands */}
      <section className="border-y border-slate-200 bg-muted py-14">
        <Reveal>
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Equipment we operate
          </p>
        </Reveal>
        <Marquee items={brands} className="mt-6 text-slate-500" />
      </section>

      {/* FAQ */}
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-24 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions"
          text="Can't find what you need? Our engineers are happy to help."
        />
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 80}>
              <details className="group rounded-xl border border-slate-200 bg-white p-5 transition open:border-brand/40 open:shadow-lg">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                  {f.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-brand transition-transform duration-300 group-open:rotate-45">
                    <Icon name="plus" className="h-4 w-4" />
                  </span>
                </summary>
                <p className="mt-3 text-slate-600">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <Reveal
          variant="zoom"
          className="relative overflow-hidden rounded-3xl bg-brand-dark px-8 py-16 text-center text-white md:px-16"
        >
          <HeroBackground variant="subtle" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Planning a shutdown or in-service inspection?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-200">
              Find defects early, shorten downtime and avoid last-minute surprises. Talk to our
              engineers about the right technique for your asset.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-accent px-7 py-3.5 font-semibold shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:bg-red-700"
              >
                Contact us
              </Link>
              <a
                href={`tel:${company.phones[0]}`}
                className="rounded-lg border border-white/40 px-7 py-3.5 font-semibold transition hover:bg-white/10"
              >
                Call {company.phones[0]}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
