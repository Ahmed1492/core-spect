// Decorative inspection-themed backdrop: an industrial skyline (columns, tanks, pipe rack,
// flare stack) in layered silhouettes, and a foreground pipeline being scanned by a
// phased-array probe. Purely visual (aria-hidden).

const W = 1600;
const H = 800;
const FAR_BASE = 640;
const MID_BASE = 668;

// Far skyline: [x, width, height]
const far: [number, number, number][] = [
  [40, 60, 120], [110, 30, 200], [150, 90, 90], [260, 40, 160], [320, 120, 70],
  [460, 26, 240], [500, 80, 110], [600, 50, 180], [680, 140, 80], [840, 30, 220],
  [880, 70, 130], [980, 110, 90], [1110, 36, 250], [1160, 90, 120], [1270, 60, 170],
  [1350, 130, 85], [1500, 40, 210], [1550, 60, 120],
];

// Mid skyline elements
const columns: [number, number, number][] = [
  [470, 30, 190], [920, 34, 260], [965, 24, 200], [1240, 40, 300], [1292, 28, 230],
];
const tanks: [number, number, number][] = [
  [610, 150, 72], [785, 110, 56], [1360, 150, 78],
];

function Column({ x, w, h }: { x: number; w: number; h: number }) {
  const top = MID_BASE - h;
  const platforms = [];
  for (let y = top + 40; y < MID_BASE - 20; y += 52) {
    platforms.push(<rect key={y} x={x - 5} y={y} width={w + 10} height={3} />);
  }
  return (
    <g>
      <rect x={x} y={top} width={w} height={h} rx={w / 2} />
      <rect x={x} y={top + w / 2} width={w} height={h - w / 2} />
      {platforms}
    </g>
  );
}

function Tank({ x, w, h }: { x: number; w: number; h: number }) {
  const top = MID_BASE - h;
  return (
    <g>
      <rect x={x} y={top} width={w} height={h} />
      <path d={`M${x} ${top} Q${x + w / 2} ${top - w * 0.16} ${x + w} ${top} Z`} />
    </g>
  );
}

export default function HeroBackground({ variant = "full" }: { variant?: "full" | "subtle" }) {
  const full = variant === "full";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Sky */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#2c3139_0%,#16191f_45%,#0a0b0e_100%)]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <pattern id="hb-grid-sm" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="white" strokeOpacity="0.04" strokeWidth="1" />
          </pattern>
          <pattern id="hb-grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="url(#hb-grid-sm)" />
            <path d="M100 0H0V100" fill="none" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
          </pattern>
          <linearGradient id="hb-grid-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="white" />
            <stop offset="0.75" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="hb-grid-mask">
            <rect width={W} height={H} fill="url(#hb-grid-fade)" />
          </mask>

          <radialGradient id="hb-horizon" cx="0.72" cy="0.82" r="0.45">
            <stop offset="0" stopColor="#ff7a3d" stopOpacity="0.35" />
            <stop offset="0.4" stopColor="#c8102e" stopOpacity="0.12" />
            <stop offset="1" stopColor="#c8102e" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hb-haze" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0a0b0e" stopOpacity="0" />
            <stop offset="1" stopColor="#0a0b0e" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="hb-ground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#121418" />
            <stop offset="1" stopColor="#07080a" />
          </linearGradient>
          <linearGradient id="hb-pipe" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#c3cad3" />
            <stop offset="0.18" stopColor="#7a838f" />
            <stop offset="0.55" stopColor="#3a4049" />
            <stop offset="1" stopColor="#111317" />
          </linearGradient>
          <linearGradient id="hb-fan" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#bae6fd" stopOpacity="0.9" />
            <stop offset="1" stopColor="#7dd3fc" stopOpacity="0.05" />
          </linearGradient>
          <radialGradient id="hb-flame" cx="0.5" cy="0.7" r="0.6">
            <stop offset="0" stopColor="#ffe08a" />
            <stop offset="0.45" stopColor="#ff8a2a" />
            <stop offset="1" stopColor="#c8102e" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hb-beam" x1="0" x2="1">
            <stop offset="0" stopColor="#e2e8f0" stopOpacity="0" />
            <stop offset="0.85" stopColor="#e2e8f0" stopOpacity="0.06" />
            <stop offset="1" stopColor="#f1f5f9" stopOpacity="0.22" />
          </linearGradient>
          <filter id="hb-shadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#020a18" floodOpacity="0.7" />
          </filter>
          <filter id="hb-blur" x="-20%" y="-50%" width="140%" height="200%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
          <filter id="hb-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Blueprint grid, fading toward the horizon */}
        <rect width={W} height={H} fill="url(#hb-grid)" mask="url(#hb-grid-mask)" />

        {/* Warm horizon glow behind the plant */}
        <rect width={W} height={H} fill="url(#hb-horizon)" />

        {/* Far skyline */}
        <g fill="#9aa4b2" fillOpacity="0.09">
          {far.map(([x, w, h]) => (
            <rect key={x} x={x} y={FAR_BASE - h} width={w} height={h} />
          ))}
        </g>
        <rect y={520} width={W} height={150} fill="url(#hb-haze)" />

        {/* Mid skyline: plant silhouettes with rim light and drop shadow */}
        <g filter="url(#hb-shadow)">
          <g fill="#16191f" stroke="#ffb27a" strokeOpacity="0.16" strokeWidth="1">
            {tanks.map(([x, w, h]) => (
              <Tank key={x} x={x} w={w} h={h} />
            ))}
            {columns.map(([x, w, h]) => (
              <Column key={x} x={x} w={w} h={h} />
            ))}
            {/* Chimney */}
            <rect x={1062} y={MID_BASE - 330} width={18} height={330} />
            {/* Pipe rack */}
            <rect x={900} y={548} width={430} height={6} />
            <rect x={900} y={590} width={430} height={6} />
            {[930, 1030, 1130, 1230, 1320].map((x) => (
              <rect key={x} x={x} y={548} width={5} height={MID_BASE - 548} />
            ))}
            {/* Flare stack */}
            <rect x={1532} y={MID_BASE - 360} width={12} height={360} />
            <path d={`M1520 ${MID_BASE} L1538 ${MID_BASE - 120} L1556 ${MID_BASE} Z`} fill="none" />
          </g>
        </g>

        {/* Plant lights */}
        <g fill="#ffd27a">
          {[
            [935, 470], [935, 522], [1258, 420], [1258, 472], [1258, 524], [977, 520],
            [483, 530], [1305, 490], [690, 620], [1430, 618],
          ].map(([x, y], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={2.2}
              className="hero-blip"
              style={{ animationDelay: `${i * 0.37}s`, animationDuration: "3s" }}
            />
          ))}
          <circle cx={1071} cy={MID_BASE - 326} r={3} fill="#f87171" className="hero-blip" />
        </g>

        {/* Flare flame */}
        <g transform={`translate(1538 ${MID_BASE - 362})`}>
          <ellipse rx="34" ry="40" cy="-14" fill="url(#hb-flame)" opacity="0.35" filter="url(#hb-blur)" />
          <ellipse rx="9" ry="22" cy="-16" fill="url(#hb-flame)" className="hero-flame" />
        </g>

        {/* Ground */}
        <rect y={MID_BASE} width={W} height={H - MID_BASE} fill="url(#hb-ground)" />
        <path d={`M0 ${MID_BASE}H${W}`} stroke="#ffffff" strokeOpacity="0.08" />

        {full && (
          <>
            {/* Foreground pipeline with cast shadow */}
            <ellipse cx={1120} cy={792} rx={560} ry={14} fill="#000" opacity="0.55" filter="url(#hb-blur)" />
            <rect x={560} y={690} width={1100} height={90} rx={4} fill="url(#hb-pipe)" />
            <rect x={560} y={696} width={1100} height={6} fill="white" opacity="0.12" />
            {[760, 1000, 1240, 1480].map((x) => (
              <g key={x}>
                <rect x={x} y={690} width={10} height={90} fill="#d5dae2" opacity="0.22" />
                <rect x={x - 6} y={780} width={22} height={20} fill="#0e1014" />
              </g>
            ))}
            <rect x={556} y={686} width={14} height={98} rx={3} fill="#8a94a1" />

            {/* Phased-array probe scanning the pipe wall */}
            <g>
              <path d="M1130 690 L1082 780 L1178 780 Z" fill="url(#hb-fan)" className="hero-fan" />
              {[0, 1, 2, 3, 4].map((i) => (
                <path
                  key={i}
                  d={`M1130 690 L${1090 + i * 20} 780`}
                  stroke="#bae6fd"
                  strokeOpacity="0.35"
                  strokeWidth="1"
                />
              ))}
              <rect x={1098} y={662} width={64} height={28} rx={6} fill="#c8102e" filter="url(#hb-shadow)" />
              <rect x={1104} y={666} width={52} height={5} rx={2} fill="white" opacity="0.25" />
              <circle cx={1108} cy={692} r={5} fill="#1b2433" />
              <circle cx={1152} cy={692} r={5} fill="#1b2433" />
              <path d="M1130 662 C1120 610 1060 600 1010 640" fill="none" stroke="#c8102e" strokeOpacity="0.7" strokeWidth="2.5" />
            </g>

            {/* Detected flaw with acoustic rings */}
            <g transform="translate(1152 760)">
              {[0, 1, 2].map((i) => (
                <circle
                  key={i}
                  r="10"
                  fill="none"
                  stroke="#f87171"
                  strokeOpacity="0.6"
                  strokeWidth="1.5"
                  className="hero-ring"
                  style={{ animationDelay: `${i * 2}s` }}
                />
              ))}
              <circle r="4.5" fill="#f87171" filter="url(#hb-glow)" className="hero-blip" />
            </g>
          </>
        )}

        {!full && (
          <g transform="translate(1220 260)" fill="none" stroke="white">
            {[0, 1, 2].map((i) => (
              <circle
                key={i}
                r="40"
                strokeOpacity="0.25"
                strokeWidth="1.5"
                className="hero-ring"
                style={{ animationDelay: `${i * 2}s` }}
              />
            ))}
          </g>
        )}

        {/* Sweeping scan beam */}
        <rect className="hero-beam" x="-260" y="0" width="260" height={H} fill="url(#hb-beam)" />
      </svg>

      {/* Vignettes for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0e]/95 via-[#0a0b0e]/55 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0b0e]/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#07080a]/70 to-transparent" />
    </div>
  );
}
