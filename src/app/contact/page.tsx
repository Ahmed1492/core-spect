import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "./ContactForm";
import { company, faqs } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

// TODO: replace with the office's exact coordinates or Google Maps place link for a precise pin.
const mapQuery = encodeURIComponent("Mostorod, Qalyubia Governorate, Egypt");

const contactCards = [
  {
    icon: "pin",
    title: "Main office",
    lines: [company.address],
    href: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
    action: "Get directions",
  },
  {
    icon: "phone",
    title: "Mobile",
    lines: company.phones,
    href: `tel:${company.phones[0]}`,
    action: "Call now",
  },
  {
    icon: "fax",
    title: "Telefax",
    lines: [company.telefax],
    href: `tel:${company.telefax.replace(/\s/g, "")}`,
    action: "Call office",
  },
  {
    icon: "globe",
    title: "Website",
    lines: [company.website],
    href: `https://${company.website}`,
    action: "Visit",
  },
];

const nextSteps = [
  { title: "We review your request", text: "An engineer reads your scope, asset type and timing." },
  { title: "We get in touch", text: "We call or email to clarify details and access requirements." },
  { title: "You receive a proposal", text: "A technical and commercial offer with the recommended techniques." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Get in touch"
        title="Let's talk about"
        highlight="your assets"
        subtitle="Tell us what you need inspected, tested or designed, and our team will get back to you with the right approach."
        icon="chat"
        chips={["Quick response", "Site visits", "Technical proposals"]}
      />

      {/* Quick-call strip overlapping the hero */}
      <section className="relative z-10 mx-auto -mt-12 max-w-6xl px-4">
        <Reveal
          variant="zoom"
          className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-100 sm:flex-row sm:items-center"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/30">
              <Icon name="phone" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm text-slate-500">Prefer to talk? Call us directly</p>
              <p className="text-lg font-bold text-slate-900">
                {company.phones.join("  ·  ")}
              </p>
            </div>
          </div>
          <a
            href={`tel:${company.phones[0]}`}
            className="rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            Call now
          </a>
        </Reveal>
      </section>

      {/* Contact cards */}
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-2xl hover:shadow-brand/15"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <Icon name={c.icon} />
                </span>
                <h3 className="mt-5 text-sm font-bold uppercase tracking-wider text-slate-500">
                  {c.title}
                </h3>
                <div className="mt-1 flex-1 font-semibold text-slate-900">
                  {c.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-all group-hover:gap-2">
                  {c.action} <Icon name="arrow" className="h-4 w-4" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + next steps */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <Reveal className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-200/70 ring-1 ring-slate-100">
          <div className="grid lg:grid-cols-[1fr_1.6fr]">
            <div className="relative overflow-hidden bg-brand-dark p-8 text-white md:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-orange-400/10 blur-3xl" />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">
                  Request a quote
                </p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight">
                  Send us your inspection requirements
                </h2>
                <p className="mt-4 text-slate-300">
                  The more detail you share about the asset, location and timing, the faster we
                  can propose the right solution.
                </p>

                <p className="mt-10 text-sm font-bold uppercase tracking-wider text-slate-400">
                  What happens next
                </p>
                <ol className="mt-5 space-y-6">
                  {nextSteps.map((s, i) => (
                    <li key={s.title} className="flex gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-bold">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold">{s.title}</p>
                        <p className="text-sm text-slate-300">{s.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_2fr]">
          <div className="flex flex-col justify-center">
            <SectionHeading
              eyebrow="Visit us"
              title="Egypt main office"
              text={company.address}
            />
            <Reveal delay={150}>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-brand hover:text-accent"
              >
                Open in Google Maps <Icon name="arrow" className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
          <Reveal variant="zoom" className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
            <iframe
              title="Core Spect office location"
              src={`https://www.google.com/maps?q=${mapQuery}&z=14&output=embed`}
              className="h-80 w-full grayscale-[30%] md:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="bg-muted py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            eyebrow="Before you ask"
            title="Quick answers"
            text="A few things clients often ask us before getting in touch."
          />
          <div className="space-y-4">
            {faqs.slice(0, 3).map((f, i) => (
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
            <Reveal delay={260}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-semibold text-brand hover:text-accent"
              >
                Browse all services <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
