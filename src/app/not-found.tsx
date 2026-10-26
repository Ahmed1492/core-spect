import type { Metadata } from "next";
import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";
import Icon from "@/components/Icon";
import { company, nav } from "@/lib/site";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-brand-dark text-white">
      <HeroBackground />
      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-4 py-24">
        <p className="animate-fade-up inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-200 backdrop-blur">
          <span className="hero-blip h-1.5 w-1.5 rounded-full bg-accent" />
          Error 404 - no signal
        </p>

        <h1
          className="animate-fade-up mt-6 text-7xl font-extrabold leading-none tracking-tight md:text-9xl"
          style={{ animationDelay: "100ms" }}
        >
          <span className="bg-gradient-to-r from-red-300 to-accent bg-clip-text text-transparent">
            404
          </span>
        </h1>

        <p
          className="animate-fade-up mt-6 text-3xl font-extrabold md:text-4xl"
          style={{ animationDelay: "180ms" }}
        >
          We scanned everywhere, but found no page here.
        </p>
        <p
          className="animate-fade-up mt-4 max-w-xl text-lg text-slate-300"
          style={{ animationDelay: "240ms" }}
        >
          The link may be broken or the page may have moved. Try one of the pages below, or get in
          touch and we&apos;ll point you in the right direction.
        </p>

        <div className="animate-fade-up mt-10 flex flex-wrap gap-4" style={{ animationDelay: "300ms" }}>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 font-semibold shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:bg-red-700"
          >
            Back to home
            <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
          <a
            href={`tel:${company.phones[0]}`}
            className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3.5 font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            <Icon name="phone" className="h-4 w-4" />
            {company.phones[0]}
          </a>
        </div>

        <div className="animate-fade-up mt-14" style={{ animationDelay: "380ms" }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Popular pages</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {nav
              .filter((item) => item.href !== "/")
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:border-white/40 hover:bg-white/10"
                  >
                    {item.label}
                    <Icon name="arrow" className="h-3.5 w-3.5 opacity-60" />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
