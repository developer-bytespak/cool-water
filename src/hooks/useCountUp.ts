"use client";
import { useEffect, useRef, useState } from "react";

export function useCountUp(end: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true;
            const start = performance.now();

            const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

            const animate = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const easedProgress = easeOut(progress);
              setCount(Math.round(easedProgress * end));

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setDone(true);
              }
            };

            requestAnimationFrame(animate);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { ref, count, done };
}
