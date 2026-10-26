import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";
import Icon from "@/components/Icon";

type Action = { href: string; label: string };

export default function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  icon = "radar",
  chips = [],
  primary,
  secondary,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  icon?: string;
  chips?: string[];
  primary?: Action;
  secondary?: Action;
  breadcrumb?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-dark text-white">
      <HeroBackground />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-12 md:pb-24 md:pt-16 lg:grid-cols-[1.5fr_1fr]">
        <div>
          {breadcrumb && (
            <nav aria-label="Breadcrumb" className="animate-fade-up flex items-center gap-2 text-sm text-slate-300">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <Icon name="arrow" className="h-3.5 w-3.5 opacity-60" />
              <span className="font-semibold text-white">{breadcrumb}</span>
            </nav>
          )}

          {eyebrow && (
            <p
              className="animate-fade-up mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-200 backdrop-blur"
              style={{ animationDelay: "60ms" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {eyebrow}
            </p>
          )}

          <h1
            className="animate-fade-up mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl"
            style={{ animationDelay: "120ms" }}
          >
            {title}
            {highlight && (
              <>
                {" "}
                <span className="bg-gradient-to-r from-red-300 to-accent bg-clip-text text-transparent">
                  {highlight}
                </span>
              </>
            )}
          </h1>

          {subtitle && (
            <p
              className="animate-fade-up mt-5 max-w-2xl text-lg text-slate-200"
              style={{ animationDelay: "200ms" }}
            >
              {subtitle}
            </p>
          )}

          {chips.length > 0 && (
            <ul className="animate-fade-up mt-7 flex flex-wrap gap-2" style={{ animationDelay: "280ms" }}>
              {chips.map((c) => (
                <li
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-slate-100 backdrop-blur"
                >
                  <Icon name="check" className="h-3.5 w-3.5 text-red-300" />
                  {c}
                </li>
              ))}
            </ul>
          )}

          {(primary || secondary) && (
            <div className="animate-fade-up mt-9 flex flex-wrap gap-4" style={{ animationDelay: "360ms" }}>
              {primary && (
                <Link
                  href={primary.href}
                  className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:bg-red-700"
                >
                  {primary.label}
                  <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              )}
              {secondary && (
                <Link
                  href={secondary.href}
                  className="rounded-lg border border-white/40 px-6 py-3 font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Decorative emblem */}
        <div className="animate-fade-up relative hidden justify-self-center lg:block" style={{ animationDelay: "250ms" }}>
          <div className="relative flex h-64 w-64 items-center justify-center">
            <span className="hero-ring absolute inset-0 rounded-full border border-white/20" />
            <span
              className="hero-ring absolute inset-0 rounded-full border border-white/20"
              style={{ animationDelay: "2s" }}
            />
            <span
              className="hero-ring absolute inset-0 rounded-full border border-white/20"
              style={{ animationDelay: "4s" }}
            />
            <div className="absolute inset-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm" />
            <div className="relative flex h-32 w-32 rotate-3 items-center justify-center rounded-3xl bg-gradient-to-br from-accent to-red-800 shadow-2xl shadow-accent/40 transition duration-500 hover:rotate-0">
              <Icon name={icon} className="h-16 w-16 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Angled bottom edge */}
      <svg
        className="absolute inset-x-0 bottom-0 h-10 w-full text-white"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0 40L1440 0V40Z" fill="currentColor" />
      </svg>
    </section>
  );
}
