import Image from "next/image";

// Official Core Spect logo (transparent PNGs in public/images).
// "header": mark + English wordmark; "full": also includes the Arabic name.
// tone="dark" uses the silver version for dark backgrounds.
const files = {
  header: { light: "/images/logo-header.png", dark: "/images/logo-header-dark.png", width: 1394, height: 429 },
  full: { light: "/images/logo.png", dark: "/images/logo-dark.png", width: 1394, height: 607 },
};

export default function Logo({
  variant = "header",
  tone = "light",
  className,
  priority,
}: {
  variant?: keyof typeof files;
  tone?: "light" | "dark";
  className?: string;
  priority?: boolean;
}) {
  const f = files[variant];
  return (
    <Image
      src={tone === "dark" ? f.dark : f.light}
      alt="Core Spect - Inspection & Integrity Services"
      width={f.width}
      height={f.height}
      priority={priority}
      sizes="320px"
      className={className}
    />
  );
}
