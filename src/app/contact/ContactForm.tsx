"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { serviceGroups } from "@/lib/site";

const assetTypes = [
  "Piping / pipelines",
  "Storage tanks",
  "Pressure vessels",
  "Heat exchangers / boilers",
  "Welds / fabrication",
  "Lifting equipment",
  "Offshore / marine structures",
  "Other",
];

const fieldClass =
  "peer mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15 [&:user-invalid]:border-red-400 [&:user-invalid]:ring-red-100";

function Field({
  label,
  required,
  children,
  className = "",
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block text-sm font-semibold text-slate-700 ${className}`}>
      {label}
      {required && <span className="text-accent"> *</span>}
      {children}
    </label>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [services, setServices] = useState<string[]>([]);

  function toggle(slug: string) {
    setServices((s) => (s.includes(slug) ? s.filter((x) => x !== slug) : [...s, slug]));
  }

  // TODO: connect to an email service or API route to actually deliver messages.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  }

  if (status === "sent") {
    return (
      <div className="animate-fade-up flex h-full flex-col items-center justify-center py-12 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <Icon name="check" className="h-8 w-8" />
        </span>
        <h3 className="mt-6 text-2xl font-extrabold text-slate-900">Thank you!</h3>
        <p className="mt-2 max-w-sm text-slate-600">
          Your request has been received. One of our engineers will contact you shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setServices([]);
            setStatus("idle");
          }}
          className="mt-8 font-semibold text-brand hover:text-accent"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <Field label="Full name" required>
        <input name="name" required autoComplete="name" placeholder="Your name" className={fieldClass} />
      </Field>
      <Field label="Company">
        <input name="company" autoComplete="organization" placeholder="Company name" className={fieldClass} />
      </Field>
      <Field label="Email" required>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className={fieldClass}
        />
      </Field>
      <Field label="Phone">
        <input name="phone" type="tel" autoComplete="tel" placeholder="+20 ..." className={fieldClass} />
      </Field>

      <fieldset className="sm:col-span-2">
        <legend className="text-sm font-semibold text-slate-700">Services of interest</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {serviceGroups.map((g) => {
            const on = services.includes(g.slug);
            return (
              <button
                key={g.slug}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(g.slug)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
                  on
                    ? "border-brand bg-brand text-white shadow-md shadow-brand/25"
                    : "border-slate-300 bg-white text-slate-600 hover:border-brand hover:text-brand"
                }`}
              >
                {on && <Icon name="check" className="h-3.5 w-3.5" />}
                {g.title}
              </button>
            );
          })}
        </div>
        <input type="hidden" name="services" value={services.join(",")} />
      </fieldset>

      <Field label="Asset type" className="sm:col-span-2">
        <select name="asset" defaultValue="" className={fieldClass}>
          <option value="">Select asset type</option>
          {assetTypes.map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>
      </Field>

      <Field label="Project details" required className="sm:col-span-2">
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Location, asset size or quantity, preferred dates, applicable codes..."
          className={fieldClass}
        />
      </Field>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          Fields marked <span className="text-accent">*</span> are required.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-semibold text-white shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:bg-red-700 disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Sending...
            </>
          ) : (
            <>
              Send request
              <Icon name="send" className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
