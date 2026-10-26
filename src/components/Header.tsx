"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import { company, nav, serviceGroups, serviceIcons } from "@/lib/site";

function ServicesMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid w-[720px] grid-cols-[1fr_220px] overflow-hidden rounded-2xl bg-white shadow-2xl shadow-slate-900/15 ring-1 ring-slate-200">
      <div className="grid grid-cols-2 gap-1 p-3">
        {serviceGroups.map((g) => (
          <Link
            key={g.slug}
            href={`/services#${g.slug}`}
            onClick={onNavigate}
            className="group flex gap-3 rounded-xl p-3 transition hover:bg-muted"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
              <Icon name={serviceIcons[g.slug]} className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-slate-900 group-hover:text-brand">
                {g.title}
              </span>
              <span className="mt-0.5 line-clamp-2 block text-xs text-slate-500">{g.summary}</span>
            </span>
          </Link>
        ))}
      </div>
      <div className="relative flex flex-col justify-between overflow-hidden bg-brand-dark p-6 text-white">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/30 blur-2xl" />
        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">Not sure?</p>
          <p className="mt-2 text-lg font-bold leading-snug">
            Our engineers will recommend the right technique.
          </p>
        </div>
        <div className="relative space-y-2">
          <Link
            href="/services"
            onClick={onNavigate}
            className="flex items-center justify-between rounded-lg bg-white/10 px-4 py-2.5 text-sm font-semibold transition hover:bg-white/20"
          >
            All services <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            onClick={onNavigate}
            className="flex items-center justify-between rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold transition hover:bg-red-700"
          >
            Ask an engineer <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      // Hysteresis: separate collapse/expand points so small scroll jumps can't flip the state.
      setScrolled((prev) => (prev ? y > 10 : y > 120));
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Close menus on route change and lock body scroll while the mobile menu is open.
  useEffect(() => {
    setOpen(false);
    setMenu(false);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const openMenu = () => {
    clearTimeout(closeTimer.current);
    setMenu(true);
  };
  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setMenu(false), 120);
  };

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      {/* Top info bar: normal flow (not sticky), so it scrolls away without changing layout height */}
      <div className="hidden bg-[#0a0b0e] text-xs text-slate-300 md:block">
        <div className="mx-auto flex h-10 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <a href={`tel:${company.phones[0]}`} className="flex items-center gap-2 transition hover:text-white">
              <Icon name="phone" className="h-3.5 w-3.5 text-red-300" />
              {company.phones[0]}
            </a>
            <span className="flex items-center gap-2">
              <Icon name="pin" className="h-3.5 w-3.5 text-red-300" />
              {company.address}
            </span>
          </div>
          <span className="tracking-wide">{company.tagline}</span>
        </div>
      </div>

      <header className="sticky top-0 z-50">
      {/* Main bar: fixed height; only visual styles change on scroll */}
      <div
        className={`relative border-b transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled
            ? "border-transparent bg-white/85 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
            : "border-slate-200 bg-white"
        }`}
      >
        <div
          className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3"
        >
          <Link href="/" className="shrink-0" aria-label="Core Spect home">
            <Logo
              priority
              className={`h-12 w-auto origin-left transition-transform duration-300 md:h-[56px] ${
                scrolled ? "scale-[0.85]" : ""
              }`}
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) => {
              const active = isActive(item.href);
              const isServices = item.href === "/services";
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={isServices ? openMenu : undefined}
                  onMouseLeave={isServices ? closeMenu : undefined}
                >
                  <Link
                    href={item.href}
                    aria-haspopup={isServices ? "true" : undefined}
                    aria-expanded={isServices ? menu : undefined}
                    onFocus={isServices ? openMenu : undefined}
                    className={`group relative flex items-center gap-1 px-3.5 py-2 text-[15px] font-semibold transition-colors ${
                      active ? "text-brand" : "text-slate-700 hover:text-brand"
                    }`}
                  >
                    {item.label}
                    {isServices && (
                      <svg
                        viewBox="0 0 20 20"
                        className={`h-4 w-4 transition-transform duration-200 ${menu ? "rotate-180" : ""}`}
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z" />
                      </svg>
                    )}
                    <span
                      className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-accent transition-transform duration-300 ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>

                  {isServices && (
                    <div
                      className={`absolute left-1/2 top-full pt-4 transition-all duration-200 ${
                        menu
                          ? "pointer-events-auto -translate-x-1/2 translate-y-0 opacity-100"
                          : "pointer-events-none -translate-x-1/2 translate-y-2 opacity-0"
                      }`}
                      onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget as Node)) setMenu(false);
                      }}
                    >
                      <ServicesMenu onNavigate={() => setMenu(false)} />
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${company.phones[0]}`}
              aria-label={`Call ${company.phones[0]}`}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-brand transition hover:border-brand hover:bg-brand hover:text-white"
            >
              <Icon name="phone" className="h-4.5 w-4.5" />
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:-translate-y-0.5 hover:bg-red-700"
            >
              Request a quote
              <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>

          <button
            type="button"
            className="relative flex h-11 w-11 items-center justify-center rounded-lg text-slate-800 transition hover:bg-muted lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 rounded bg-current transition-all duration-300 ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 rounded bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-6 rounded bg-current transition-all duration-300 ${
                  open ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Scroll progress */}
        <span
          aria-hidden
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-red-400"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-y-auto border-b border-slate-200 bg-white transition-all duration-300 lg:hidden ${
          open ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-6xl space-y-1 px-4 py-4" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between rounded-lg px-4 py-3 font-semibold ${
                isActive(item.href) ? "bg-brand text-white" : "text-slate-800 hover:bg-muted"
              }`}
            >
              {item.label}
              <Icon name="arrow" className="h-4 w-4 opacity-60" />
            </Link>
          ))}

          <p className="px-4 pt-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Services
          </p>
          <div className="grid grid-cols-2 gap-2 pt-2">
            {serviceGroups.map((g) => (
              <Link
                key={g.slug}
                href={`/services#${g.slug}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700"
              >
                <Icon name={serviceIcons[g.slug]} className="h-4 w-4 shrink-0 text-brand" />
                <span className="truncate">{g.title}</span>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4">
            <a
              href={`tel:${company.phones[0]}`}
              className="flex items-center justify-center gap-2 rounded-lg border border-brand px-4 py-3 font-semibold text-brand"
            >
              <Icon name="phone" className="h-4 w-4" /> Call us
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-lg bg-accent px-4 py-3 font-semibold text-white"
            >
              Get a quote
            </Link>
          </div>
        </nav>
      </div>
      </header>
    </>
  );
}
