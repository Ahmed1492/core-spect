// Vector recreation of the Core Spect logo: crisp at any size, transparent background.
// `tone="dark"` is for dark backgrounds (footer); `id` keeps gradient ids unique per instance.

export function LogoMark({ id, className }: { id: string; className?: string }) {
  return (
    <svg viewBox="0 0 84 84" className={className} aria-hidden>
      <MarkDefs id={id} />
      <Mark id={id} />
    </svg>
  );
}

function MarkDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-chrome`} x1="0" y1="0" x2="0.35" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="0.28" stopColor="#aeb7c4" />
        <stop offset="0.5" stopColor="#5d6878" />
        <stop offset="0.62" stopColor="#d9dee6" />
        <stop offset="1" stopColor="#3f4856" />
      </linearGradient>
      <linearGradient id={`${id}-red`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#ff7a3d" />
        <stop offset="0.5" stopColor="#ef2b2b" />
        <stop offset="1" stopColor="#b80d24" />
      </linearGradient>
      <linearGradient id={`${id}-redtext`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ff4a3a" />
        <stop offset="1" stopColor="#c8102e" />
      </linearGradient>
      <linearGradient id={`${id}-silver`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="0.55" stopColor="#e3e7ec" />
        <stop offset="1" stopColor="#a9b2be" />
      </linearGradient>
      <linearGradient id={`${id}-steel`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#e9edf2" />
        <stop offset="0.45" stopColor="#aab3bf" />
        <stop offset="0.55" stopColor="#8a95a4" />
        <stop offset="1" stopColor="#c3cad3" />
      </linearGradient>
    </defs>
  );
}

function Mark({ id }: { id: string }) {
  return (
    <g transform="translate(6 4) skewX(-8)">
      {/* Outer dark edge for depth */}
      <path
        d="M72 13H27Q14 13 14 26V28Q14 41 27 41H55Q68 41 68 54V56Q68 69 55 69H9"
        fill="none"
        stroke="#2b3340"
        strokeWidth="16"
        strokeLinejoin="round"
      />
      {/* Chrome S */}
      <path
        d="M72 13H27Q14 13 14 26V28Q14 41 27 41H55Q68 41 68 54V56Q68 69 55 69H9"
        fill="none"
        stroke={`url(#${id}-chrome)`}
        strokeWidth="12"
        strokeLinejoin="round"
      />
      {/* Red streaks */}
      <path d="M38 10.5L78 9L75 15.5L35 16.5Z" fill={`url(#${id}-red)`} />
      <path d="M12 39L50 37.5L47 44L9 45Z" fill={`url(#${id}-red)`} />
      {/* Ultrasonic pulse */}
      <polyline
        points="16,41 20,41 22,37.5 24.5,44.5 27,37.5 29.5,44.5 32,37.5 34,41 38,41"
        fill="none"
        stroke="#ffd54a"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </g>
  );
}

export default function Logo({
  id,
  tone = "light",
  className,
}: {
  id: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <svg
      viewBox="0 0 300 96"
      className={className}
      role="img"
      aria-label="Core Spect - Inspection & Integrity Services"
    >
      <MarkDefs id={id} />
      <g transform="translate(0 6)">
        <Mark id={id} />
      </g>
      <g fontFamily="var(--font-geist-sans), Arial, Helvetica, sans-serif" fontWeight={800}>
        <text
          x="92"
          y="42"
          fontSize="38"
          textLength="200"
          lengthAdjust="spacingAndGlyphs"
          fill={`url(#${id}-${dark ? "silver" : "steel"})`}
          stroke={dark ? "#9aa4b2" : "#3f4856"}
          strokeWidth={dark ? 1.2 : 1.6}
          paintOrder="stroke"
        >
          CORE
        </text>
        <text
          x="92"
          y="79"
          fontSize="38"
          textLength="200"
          lengthAdjust="spacingAndGlyphs"
          fill={`url(#${id}-redtext)`}
          stroke="#7a0a1b"
          strokeWidth="0.8"
          paintOrder="stroke"
        >
          SPECT
        </text>
        <text
          x="93"
          y="93"
          fontSize="9"
          fontWeight={600}
          textLength="198"
          lengthAdjust="spacing"
          fill={dark ? "#cbd5e1" : "#1b2433"}
        >
          INSPECTION &amp; INTEGRITY SERVICES
        </text>
      </g>
    </svg>
  );
}
