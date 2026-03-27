"use client";
import { useState, useEffect, useCallback } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    text: "Clear Cool Water has completely changed how we think about water at home. The taste is incredible, and delivery is always on time. We've been subscribers for over a year now.",
    name: "Sarah Mitchell",
    area: "South Tampa",
    rating: 5,
  },
  {
    text: "As a business owner, I need reliable water delivery for my office. Clear Cool Water delivers consistently, and the quality is unmatched. My team can taste the difference.",
    name: "Kevin Brooks",
    area: "Westchase",
    rating: 5,
  },
  {
    text: "Switched from a local supplier to Clear Cool Water six months ago. The difference is night and day. Crystal clear, no aftertaste, and their customer service is exceptional.",
    name: "Maria Lopez",
    area: "Carrollwood",
    rating: 5,
  },
  {
    text: "As a mother of three, water safety is my top priority. Clear Cool Water gives me peace of mind knowing my children are drinking the purest water available in Tampa.",
    name: "Jessica Turner",
    area: "Brandon",
    rating: 5,
  },
  {
    text: "We installed Clear Cool Water dispensers across our restaurant chain. Our customers frequently compliment the water quality. It's become part of our premium dining experience.",
    name: "David Chen",
    area: "New Tampa",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useScrollReveal();
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section
      id="testimonials"
      className="relative py-[120px] overflow-hidden"
      style={{ background: "linear-gradient(135deg, #000428 0%, #004E92 100%)" }}
    >
      {/* Decorative blob */}
      <div
        className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] animate-[blob-morph_10s_ease-in-out_infinite_alternate]"
        style={{ background: "rgba(0,159,227,0.06)" }}
      />

      <div ref={ref} className="scroll-reveal max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="stagger-child text-ocean font-semibold text-sm uppercase tracking-widest mb-4">
            Testimonials
          </p>
          <h2 className="stagger-child font-[family-name:var(--font-display)] text-4xl md:text-[48px] font-bold text-white leading-tight">
            What Our Customers{" "}
            <span className="bg-gradient-to-r from-ocean to-mist bg-clip-text text-transparent">
              Say
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-600"
              style={{
                transform: `translateX(-${active * 100}%)`,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDuration: "600ms",
              }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full shrink-0 px-4">
                  <div
                    className={`glass rounded-3xl p-10 md:p-12 transition-transform duration-300 ${
                      i === active ? "scale-100" : "scale-[0.98]"
                    }`}
                  >
                    {/* Quote mark */}
                    <div className="font-[family-name:var(--font-display)] text-6xl text-ocean/40 leading-none mb-4">
                      &ldquo;
                    </div>

                    <p className="text-white/80 text-lg leading-relaxed mb-8">
                      {t.text}
                    </p>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <svg key={j} width="20" height="20" viewBox="0 0 24 24" fill="#009FE3">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    {/* Customer */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-ocean/20 flex items-center justify-center text-ocean font-bold text-lg">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-semibold">{t.name}</p>
                        <p className="text-white/40 text-sm">{t.area}, Tampa</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 bg-ocean"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
