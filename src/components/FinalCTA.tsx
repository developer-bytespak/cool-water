"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RippleButton from "./RippleButton";
import WaveBackground from "./WaveBackground";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Title with split effect
      gsap.fromTo(
        ".cta-content > *",
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 1, stagger: 0.2, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        }
      );

      // Buttons bounce in
      gsap.fromTo(
        ".cta-buttons",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8, ease: "back.out(1.7)",
          scrollTrigger: { trigger: el, start: "top 75%" },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative py-[120px] overflow-hidden"
      style={{ background: "linear-gradient(135deg, #000428 0%, #004E92 100%)" }}
    >
      <WaveBackground />

      {/* Decorative blobs */}
      <div
        className="absolute top-[20%] right-[10%] w-[300px] h-[300px] animate-[blob-morph_10s_ease-in-out_infinite_alternate]"
        style={{ background: "rgba(0,159,227,0.06)" }}
      />

      <div className="cta-content relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-[56px] font-bold text-white leading-tight">
          Stay Hydrated.{" "}
          <span className="bg-gradient-to-r from-ocean to-mist bg-clip-text text-transparent">
            Start Today.
          </span>
        </h2>

        <p className="text-white/50 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
          Free delivery on your first order · Same-day delivery in Tampa
        </p>

        <div className="cta-buttons flex flex-wrap items-center justify-center gap-4 mt-10">
          <RippleButton variant="white" className="text-lg px-10 py-5">
            <span>📞</span> Call to Order
          </RippleButton>
          <RippleButton variant="green" className="text-lg px-10 py-5">
            <span>💬</span> WhatsApp Us
          </RippleButton>
        </div>

        <p className="text-white/30 text-sm mt-8">
          Available 7 days a week · 8 AM to 10 PM · Tampa-wide delivery
        </p>
      </div>
    </section>
  );
}
