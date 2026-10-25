"use client";

import { useEffect, useRef, useState } from "react";

// Counts from 0 to `to` once the number scrolls into view.
export default function CountUp({
  to,
  suffix = "",
  duration = 1600,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setValue(0);
    let timer: ReturnType<typeof setInterval> | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = Date.now();
      timer = setInterval(() => {
        const t = Math.min(1, (Date.now() - start) / duration);
        setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
        if (t >= 1) clearInterval(timer);
      }, 30);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, [to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
