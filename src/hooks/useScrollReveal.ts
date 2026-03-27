"use client";
import { useEffect, useRef } from "react";

export function useScrollReveal(staggerDelay = 80) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");

            const children = entry.target.querySelectorAll(".stagger-child");
            children.forEach((child, i) => {
              setTimeout(() => {
                child.classList.add("revealed");
              }, i * staggerDelay);
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [staggerDelay]);

  return ref;
}
