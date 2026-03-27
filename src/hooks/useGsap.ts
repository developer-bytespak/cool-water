"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "rotate-in"
  | "flip-up"
  | "stagger-up"
  | "stagger-left"
  | "stagger-scale"
  | "split-text"
  | "parallax-up";

interface UseGsapOptions {
  animation?: AnimationType;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
  scrub?: boolean | number;
  markers?: boolean;
}

export function useGsap(options: UseGsapOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const {
    animation = "fade-up",
    duration = 1,
    delay = 0,
    stagger = 0.15,
    start = "top 85%",
    scrub = false,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const children = el.querySelectorAll(".gsap-child");
      const hasChildren = children.length > 0;

      const getFromVars = (): gsap.TweenVars => {
        switch (animation) {
          case "fade-up":
            return { opacity: 0, y: 60 };
          case "fade-down":
            return { opacity: 0, y: -60 };
          case "fade-left":
            return { opacity: 0, x: -80 };
          case "fade-right":
            return { opacity: 0, x: 80 };
          case "zoom-in":
            return { opacity: 0, scale: 0.8 };
          case "zoom-out":
            return { opacity: 0, scale: 1.2 };
          case "rotate-in":
            return { opacity: 0, rotation: 8, y: 40 };
          case "flip-up":
            return { opacity: 0, rotationX: 30, y: 60, transformPerspective: 800 };
          case "stagger-up":
            return { opacity: 0, y: 80 };
          case "stagger-left":
            return { opacity: 0, x: -60 };
          case "stagger-scale":
            return { opacity: 0, scale: 0.5, y: 30 };
          case "split-text":
            return { opacity: 0, y: 40, rotationX: 20, transformPerspective: 600 };
          case "parallax-up":
            return { opacity: 0, y: 100 };
          default:
            return { opacity: 0, y: 60 };
        }
      };

      const getToVars = (): gsap.TweenVars => ({
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotation: 0,
        rotationX: 0,
        duration,
        delay,
        ease: "power3.out",
        stagger: hasChildren ? stagger : 0,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: scrub ? undefined : "play none none none",
          scrub: scrub || false,
        },
      });

      const targets = hasChildren ? children : el;
      gsap.fromTo(targets, getFromVars(), getToVars());
    }, el);

    return () => ctx.revert();
  }, [animation, duration, delay, stagger, start, scrub]);

  return ref;
}

// Utility: GSAP parallax on scroll for background elements
export function useGsapParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [speed]);

  return ref;
}

// Utility: Magnetic hover effect
export function useGsapMagnetic(strength = 0.3) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      gsap.to(el, { x, y, duration: 0.4, ease: "power2.out" });
    };

    const handleLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return ref;
}
