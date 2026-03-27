"use client";
import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    num: 1,
    title: "Source",
    desc: "Water sourced from protected natural springs",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: 2,
    title: "Sediment Filter",
    desc: "Removes particles, sand and suspended solids",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: 3,
    title: "Carbon Filter",
    desc: "Eliminates chlorine, odor and organic compounds",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
        <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: 4,
    title: "UV Purification",
    desc: "Destroys 99.99% of bacteria and viruses",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2"/>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: 5,
    title: "Sealed & Delivered",
    desc: "Hygienically sealed and delivered to your door",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="1" y="3" width="15" height="13" rx="2" stroke="white" strokeWidth="2"/>
        <path d="M16 8h4l3 3v5a2 2 0 01-2 2h-1M16 19h-2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="5.5" cy="18.5" r="2.5" stroke="white" strokeWidth="2"/>
        <circle cx="18.5" cy="18.5" r="2.5" stroke="white" strokeWidth="2"/>
      </svg>
    ),
  },
];

export default function PurificationProcess() {
  const sectionRef = useScrollReveal();
  const svgRef = useRef<SVGSVGElement>(null);
  const [drawProgress, setDrawProgress] = useState(0);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let start: number | null = null;
            const duration = 1200;

            const animate = (ts: number) => {
              if (!start) start = ts;
              const elapsed = ts - start;
              const progress = Math.min(elapsed / duration, 1);
              setDrawProgress(progress);
              if (progress < 1) requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
            observer.unobserve(svg);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  const lineLength = 800;

  return (
    <section id="process" className="relative bg-white py-[120px] overflow-hidden">
      {/* Faint water texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 Q60 30 50 50 Q40 70 50 90' stroke='%23009FE3' fill='none' strokeWidth='1'/%3E%3C/svg%3E")`,
        backgroundSize: "100px 100px",
      }} />

      <div ref={sectionRef} className="scroll-reveal max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="stagger-child text-ocean font-semibold text-sm uppercase tracking-widest mb-4">
            Our Process
          </p>
          <h2 className="stagger-child font-[family-name:var(--font-display)] text-4xl md:text-[48px] font-bold text-dark leading-tight">
            From Source to{" "}
            <span className="bg-gradient-to-r from-ocean to-deep bg-clip-text text-transparent">
              Your Glass
            </span>
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* SVG Line */}
          <svg
            ref={svgRef}
            className="absolute top-[60px] left-[10%] w-[80%] h-[4px]"
            viewBox={`0 0 ${lineLength} 4`}
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="2"
              x2={lineLength}
              y2="2"
              stroke="#E6F7FF"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="0"
              y1="2"
              x2={lineLength}
              y2="2"
              stroke="#009FE3"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={lineLength}
              strokeDashoffset={lineLength * (1 - drawProgress)}
            />
          </svg>

          {/* Steps */}
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, i) => {
              const stepThreshold = (i + 1) / steps.length;
              const visible = drawProgress >= stepThreshold - 0.1;
              return (
                <div key={i} className="flex flex-col items-center text-center">
                  {/* Circle */}
                  <div
                    className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-ocean to-deep flex items-center justify-center shadow-lg shadow-ocean/20 transition-transform duration-500"
                    style={{
                      transform: visible ? "scale(1)" : "scale(0)",
                      transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                      transitionDelay: `${i * 200}ms`,
                    }}
                  >
                    <div className="text-center">
                      {step.icon}
                      <div className="text-white/60 text-xs mt-1 font-bold">{`0${step.num}`}</div>
                    </div>
                  </div>

                  {/* Text */}
                  <h4
                    className="font-[family-name:var(--font-display)] text-lg font-bold text-dark mt-6 transition-all duration-500"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(10px)",
                      transitionDelay: `${i * 200 + 200}ms`,
                    }}
                  >
                    {step.title}
                  </h4>
                  <p
                    className="text-dark/50 text-sm mt-2 max-w-[180px] transition-all duration-500"
                    style={{
                      opacity: visible ? 1 : 0,
                      transitionDelay: `${i * 200 + 300}ms`,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="stagger-child flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-ocean to-deep flex items-center justify-center shrink-0 shadow-lg shadow-ocean/20">
                {step.icon}
              </div>
              <div>
                <div className="text-ocean text-xs font-bold mb-1">Step {step.num}</div>
                <h4 className="font-[family-name:var(--font-display)] text-lg font-bold text-dark">
                  {step.title}
                </h4>
                <p className="text-dark/50 text-sm mt-1">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
