import Reveal from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  const center = align === "center";
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${
          dark ? "text-red-300" : "text-accent"
        }`}
      >
        <span className="h-px w-8 bg-current" />
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-extrabold tracking-tight md:text-4xl ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-lg ${dark ? "text-slate-300" : "text-slate-600"}`}>{text}</p>
      )}
    </Reveal>
  );
}
