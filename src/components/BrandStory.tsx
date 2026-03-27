"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const proofPoints = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#009FE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Mountain Source",
    desc: "Sourced from protected natural springs, untouched by pollution.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#009FE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Multi-Stage Filtration",
    desc: "5-layer purification process removes 99.9% of contaminants.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="5" stroke="#009FE3" strokeWidth="2"/>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#009FE3" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "UV Purification",
    desc: "Advanced ultraviolet treatment eliminates all harmful bacteria.",
  },
];

export default function BrandStory() {
  const ref = useScrollReveal();

  return (
    <section id="brand-story" className="relative bg-white py-[120px] overflow-hidden">
      {/* Blob behind image */}
      <div
        className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] animate-[blob-morph_10s_ease-in-out_infinite_alternate]"
        style={{ background: "rgba(0,159,227,0.07)" }}
      />

      <div ref={ref} className="scroll-reveal max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left - Image */}
        <div className="stagger-child relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-light to-mist/30">
            {/* Placeholder image using gradient + SVG */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="200" height="200" viewBox="0 0 200 200" className="opacity-20" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 20 C100 20 40 80 40 120 A60 60 0 00160 120 C160 80 100 20 100 20Z" fill="#009FE3"/>
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-deep/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass-light rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ocean/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0c0-5-7-13-7-13z" fill="#009FE3"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark">100% Natural Spring</p>
                    <p className="text-xs text-dark/60">Protected source, tested daily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Content */}
        <div className="space-y-8">
          <div className="stagger-child flex items-center gap-4">
            <div className="w-1 h-16 bg-gradient-to-b from-ocean to-deep rounded-full" />
            <div>
              <p className="text-ocean font-semibold text-sm uppercase tracking-widest">Our Story</p>
            </div>
          </div>

          <h2 className="stagger-child font-[family-name:var(--font-display)] text-4xl md:text-[48px] font-bold text-dark leading-tight">
            Born from the{" "}
            <span className="bg-gradient-to-r from-ocean to-deep bg-clip-text text-transparent">
              Purest Source
            </span>
          </h2>

          <p className="stagger-child text-dark/60 text-lg leading-relaxed max-w-lg">
            At Clear Cool Water, we believe water isn&apos;t just a necessity — it&apos;s an experience.
            Every drop travels through nature&apos;s finest filters before our advanced
            purification process ensures it meets the highest international standards.
            Serving homes and offices across Tampa with water you can truly trust.
          </p>

          <div className="space-y-6 pt-4">
            {proofPoints.map((point, i) => (
              <div key={i} className="stagger-child flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-light flex items-center justify-center shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-dark text-base">{point.title}</h4>
                  <p className="text-dark/50 text-sm mt-1">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
