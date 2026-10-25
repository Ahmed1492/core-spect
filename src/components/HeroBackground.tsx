// Decorative inspection-themed backdrop: blueprint grid, ultrasonic A-scan traces,
// acoustic-emission rings and a sweeping scan beam. Purely visual (aria-hidden).

// Builds an A-scan style trace: flat baseline with damped echo bursts.
function ascanPath(width: number, baseline: number, echoes: { x: number; h: number }[]) {
  let d = `M0 ${baseline}`;
  for (let x = 0; x <= width; x += 4) {
    let y = baseline;
    for (const e of echoes) {
      const dx = x - e.x;
      if (Math.abs(dx) < 60) {
        const envelope = Math.exp(-(dx * dx) / 500);
        y -= e.h * envelope * Math.sin(dx / 3.2);
      }
    }
    d += ` L${x} ${y.toFixed(1)}`;
  }
  return d;
}

const W = 1600;
const traceA = ascanPath(W, 520, [
  { x: 180, h: 70 },
  { x: 620, h: 38 },
  { x: 980, h: 55 },
  { x: 1420, h: 80 },
]);
const traceB = ascanPath(W, 610, [
  { x: 360, h: 30 },
  { x: 820, h: 60 },
  { x: 1240, h: 28 },
]);

export default function HeroBackground({ variant = "full" }: { variant?: "full" | "subtle" }) {
  const full = variant === "full";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#2a63ad_0%,#1f4e8c_35%,#0d2444_100%)]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${W} 800`}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="grid-sm" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
          </pattern>
          <pattern id="grid-lg" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="url(#grid-sm)" />
            <path d="M100 0H0V100" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
          </pattern>
          <linearGradient id="trace" x1="0" x2="1">
            <stop offset="0" stopColor="#7dd3fc" stopOpacity="0" />
            <stop offset="0.25" stopColor="#7dd3fc" stopOpacity="0.9" />
            <stop offset="0.75" stopColor="#7dd3fc" stopOpacity="0.9" />
            <stop offset="1" stopColor="#7dd3fc" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="trace-red" x1="0" x2="1">
            <stop offset="0" stopColor="#f87171" stopOpacity="0" />
            <stop offset="0.3" stopColor="#f87171" stopOpacity="0.8" />
            <stop offset="0.7" stopColor="#f87171" stopOpacity="0.8" />
            <stop offset="1" stopColor="#f87171" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beam" x1="0" x2="1">
            <stop offset="0" stopColor="#7dd3fc" stopOpacity="0" />
            <stop offset="0.85" stopColor="#7dd3fc" stopOpacity="0.12" />
            <stop offset="1" stopColor="#bae6fd" stopOpacity="0.55" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="fade-mask-g" cx="0.7" cy="0.4" r="0.8">
            <stop offset="0" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.15" />
          </radialGradient>
          <mask id="fade-mask">
            <rect width={W} height="800" fill="url(#fade-mask-g)" />
          </mask>
        </defs>

        <g mask="url(#fade-mask)">
          <rect width={W} height="800" fill="url(#grid-lg)" />

          {/* Acoustic emission rings around a "source" point */}
          <g transform="translate(1220 260)" fill="none" stroke="white">
            {[0, 1, 2, 3].map((i) => (
              <circle
                key={i}
                r="40"
                strokeOpacity="0.35"
                strokeWidth="1.5"
                className="hero-ring"
                style={{ animationDelay: `${i * 1.5}s` }}
              />
            ))}
            <circle r="5" fill="#f87171" stroke="none" className="hero-blip" />
            <path d="M-120 0H120M0 -120V120" strokeOpacity="0.15" strokeDasharray="4 6" />
          </g>

          {full && (
            <>
              {/* Ultrasonic A-scan traces */}
              <path
                d={traceA}
                fill="none"
                stroke="url(#trace)"
                strokeWidth="2"
                filter="url(#glow)"
                className="hero-trace"
              />
              <path
                d={traceB}
                fill="none"
                stroke="url(#trace-red)"
                strokeWidth="1.5"
                filter="url(#glow)"
                className="hero-trace"
                style={{ animationDelay: "-3s", animationDuration: "9s" }}
              />

              {/* Gate markers like on a flaw detector */}
              <g stroke="white" strokeOpacity="0.25" strokeWidth="1">
                <path d="M940 440V560" strokeDasharray="3 5" />
                <path d="M1060 440V560" strokeDasharray="3 5" />
                <path d="M940 450H1060" stroke="#f87171" strokeOpacity="0.6" strokeWidth="2" />
              </g>
            </>
          )}

          {/* Sweeping scan beam */}
          <rect className="hero-beam" x="-260" y="0" width="260" height="800" fill="url(#beam)" />
        </g>
      </svg>

      {/* Vignette for text legibility on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d2444]/90 via-[#0d2444]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d2444]/60 to-transparent" />
    </div>
  );
}
