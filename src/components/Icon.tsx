// Small stroke icon set used across the site.
const paths: Record<string, React.ReactNode> = {
  wave: <path d="M2 12h3l2-6 3 12 3-9 2 6 2-3h5" />,
  radar: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <path d="M12 12l6-6" />
    </>
  ),
  tubes: (
    <>
      <circle cx="7" cy="7" r="3" />
      <circle cx="17" cy="7" r="3" />
      <circle cx="7" cy="17" r="3" />
      <circle cx="17" cy="17" r="3" />
    </>
  ),
  brush: (
    <>
      <path d="M4 20l6-6" />
      <path d="M14 4l6 6-7 7-6-6z" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-5-5" />
    </>
  ),
  ruler: (
    <>
      <path d="M3 17L17 3l4 4L7 21z" />
      <path d="M7 13l2 2M10 10l2 2M13 7l2 2" />
    </>
  ),
  rope: (
    <>
      <path d="M12 2v20" />
      <path d="M8 6h8M8 12h8M8 18h8" />
    </>
  ),
  cap: (
    <>
      <path d="M2 9l10-5 10 5-10 5z" />
      <path d="M6 11v5c3 2 9 2 12 0v-5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14L7 22l5-3 5 3-1.5-8" />
    </>
  ),
  chip: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </>
  ),
  report: (
    <>
      <path d="M6 2h9l5 5v15H6z" />
      <path d="M15 2v5h5M9 13h6M9 17h6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  flame: <path d="M12 2c1 4 6 6 6 12a6 6 0 01-12 0c0-3 2-5 3-6 0 2 1 3 2 3 0-4-1-6 1-9z" />,
  ship: (
    <>
      <path d="M3 17l2 4h14l2-4z" />
      <path d="M6 17V9h12v8M12 9V4" />
    </>
  ),
  flask: (
    <>
      <path d="M9 2h6M10 2v6L4 20h16L14 8V2" />
      <path d="M7 14h10" />
    </>
  ),
  pill: (
    <>
      <rect x="3" y="8" width="18" height="8" rx="4" />
      <path d="M12 8v8" />
    </>
  ),
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
  city: (
    <>
      <path d="M3 21V9l6-3v15M9 21V3h8v18M17 21V11l4 2v8" />
      <path d="M2 21h20" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: (
    <path d="M5 3h4l2 5-2.5 1.5a11 11 0 006 6L16 13l5 2v4a2 2 0 01-2 2A16 16 0 013 5a2 2 0 012-2z" />
  ),
  fax: (
    <>
      <path d="M7 9V3h10v6" />
      <rect x="3" y="9" width="18" height="9" rx="2" />
      <path d="M7 14h10v7H7z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
    </>
  ),
  send: <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />,
  chat: <path d="M21 12a8 8 0 01-11.5 7.2L4 21l1.8-5A8 8 0 1121 12z" />,
  check: <path d="M5 12l5 5 9-10" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
};

export default function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths[name] ?? paths.check}
    </svg>
  );
}
