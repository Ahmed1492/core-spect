import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import { accreditations, company, nav, serviceGroups } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0b1f3b] text-slate-300">
      {/* Subtle grid + glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* CTA band */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 py-12 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">
              Ready when you are
            </p>
            <p className="mt-2 text-2xl font-extrabold text-white md:text-3xl">
              Need an inspection team on site?
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-white shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:bg-red-700"
            >
              Request a quote
              <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${company.phones[0]}`}
              className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <Icon name="phone" className="h-4 w-4" />
              {company.phones[0]}
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.2fr_1.2fr]">
          <div>
            <Logo id="logo-footer" tone="dark" className="h-14 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Inspection, integrity, engineering and asset reliability services, using the latest
              technologies to keep your equipment safe and in service.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {accreditations.slice(0, 5).map((a) => (
                <span
                  key={a}
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-300"
                >
                  {a.replace(/\s*\(.*\)/, "")}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-white">Company</p>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 transition hover:text-white"
                  >
                    <span className="h-px w-3 bg-accent transition-all group-hover:w-5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-white">Services</p>
            <ul className="mt-5 space-y-3 text-sm">
              {serviceGroups.slice(0, 6).map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/services#${g.slug}`}
                    className="group inline-flex items-center gap-2 transition hover:text-white"
                  >
                    <span className="h-px w-3 bg-accent transition-all group-hover:w-5" />
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-white">Get in touch</p>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sky-300">
                  <Icon name="pin" className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-slate-400">
                    Egypt - Main office
                  </span>
                  {company.address}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sky-300">
                  <Icon name="phone" className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-slate-400">Mobile</span>
                  {company.phones.map((p) => (
                    <a key={p} href={`tel:${p}`} className="block transition hover:text-white">
                      {p}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sky-300">
                  <Icon name="fax" className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-slate-400">Telefax</span>
                  {company.telefax}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="hidden tracking-wide md:block">{company.tagline}</p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
