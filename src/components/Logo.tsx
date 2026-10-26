import Image from "next/image";

// Official Core Spect logo (vector files in public/images).
// `tone="dark"` uses the silver/white version for dark backgrounds.
export default function Logo({
  tone = "light",
  className,
  priority,
}: {
  tone?: "light" | "dark";
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={tone === "dark" ? "/images/core-spect-logo-dark.svg" : "/images/core-spect-logo.svg"}
      alt="Core Spect - Inspection & Integrity Services"
      width={1005}
      height={310}
      priority={priority}
      unoptimized
      className={className}
    />
  );
}
