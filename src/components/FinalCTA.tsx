"use client";
import RippleButton from "./RippleButton";
import WaveBackground from "./WaveBackground";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FinalCTA() {
  const ref = useScrollReveal();

  return (
    <section
      id="cta"
      className="relative py-[120px] overflow-hidden"
      style={{ background: "linear-gradient(135deg, #000428 0%, #004E92 100%)" }}
    >
      <WaveBackground />

      {/* Decorative blobs */}
      <div
        className="absolute top-[20%] right-[10%] w-[300px] h-[300px] animate-[blob-morph_10s_ease-in-out_infinite_alternate]"
        style={{ background: "rgba(0,159,227,0.06)" }}
      />

      <div ref={ref} className="scroll-reveal relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="stagger-child font-[family-name:var(--font-display)] text-4xl md:text-[56px] font-bold text-white leading-tight">
          Stay Hydrated.{" "}
          <span className="bg-gradient-to-r from-ocean to-mist bg-clip-text text-transparent">
            Start Today.
          </span>
        </h2>

        <p className="stagger-child text-white/50 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
          Free delivery on your first order · Same-day delivery in Karachi
        </p>

        <div className="stagger-child flex flex-wrap items-center justify-center gap-4 mt-10">
          <RippleButton variant="white" className="text-lg px-10 py-5">
            <span>📞</span> Call to Order
          </RippleButton>
          <RippleButton variant="green" className="text-lg px-10 py-5">
            <span>💬</span> WhatsApp Us
          </RippleButton>
        </div>

        <p className="stagger-child text-white/30 text-sm mt-8">
          Available 7 days a week · 8 AM to 10 PM · Karachi-wide delivery
        </p>
      </div>
    </section>
  );
}
