"use client";
import { useEffect, useState } from "react";
import RippleButton from "./RippleButton";
import WaveBackground from "./WaveBackground";

function HeroTextReveal() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 0),
      setTimeout(() => setStage(2), 100),
      setTimeout(() => setStage(3), 220),
      setTimeout(() => setStage(4), 340),
      setTimeout(() => setStage(5), 460),
      setTimeout(() => setStage(6), 700),
      setTimeout(() => setStage(7), 1000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const wordClass = (minStage: number) =>
    `inline-block transition-all duration-700 ${
      stage >= minStage
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-6"
    }`;

  return (
    <div className="space-y-6">
      {/* Badge */}
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/80 text-sm font-medium tracking-wide transition-all duration-700 ${
          stage >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        Premium Water Delivery
      </div>

      {/* H1 */}
      <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-[96px] font-bold text-white leading-[1.05] tracking-tight">
        <span className={wordClass(2)} style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
          <span className="bg-gradient-to-r from-ocean to-mist bg-clip-text text-transparent">Pure</span>
        </span>{" "}
        <span className={wordClass(3)} style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
          Water.
        </span>
        <br />
        <span className={wordClass(4)} style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
          Perfectly
        </span>{" "}
        <span className={wordClass(5)} style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
          Delivered.
        </span>
      </h1>

      {/* Subtitle */}
      <p
        className={`text-white/60 text-lg md:text-xl max-w-xl transition-all duration-700 ${
          stage >= 6 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        Clean, safe hydration for your home and office in Karachi.
        Delivered fresh, every time.
      </p>

      {/* Buttons */}
      <div
        className={`flex flex-wrap gap-4 pt-2 transition-all duration-700 ${
          stage >= 7 ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <RippleButton variant="ocean">Order Now</RippleButton>
        <RippleButton variant="outline">Learn More</RippleButton>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #000428 0%, #004E92 100%)" }}
    >
      {/* Parallax BG Layer */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          transform: "translateY(calc(var(--scroll-y, 0) * 0.2px))",
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(0,159,227,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,78,146,0.2) 0%, transparent 50%)",
        }}
      />

      {/* Decorative blobs at 0.5x parallax */}
      <div
        className="absolute top-[10%] right-[10%] w-[400px] h-[400px] rounded-full animate-[blob-morph_10s_ease-in-out_infinite_alternate]"
        style={{
          background: "rgba(0,159,227,0.07)",
          transform: "translateY(calc(var(--scroll-y, 0) * 0.5px))",
        }}
      />
      <div
        className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] rounded-full animate-[blob-morph_10s_ease-in-out_infinite_alternate-reverse]"
        style={{
          background: "rgba(0,78,146,0.06)",
          transform: "translateY(calc(var(--scroll-y, 0) * 0.3px))",
        }}
      />

      {/* Wave Background */}
      <WaveBackground />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-24 md:pt-0">
        {/* Left - Text Content */}
        <div className="lg:col-span-1">
          <HeroTextReveal />
        </div>

        {/* Right - Product Bottle */}
        <div className="lg:col-span-1 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glassmorphism backdrop */}
            <div className="absolute inset-[-40px] rounded-[32px] glass" />

            {/* Floating Bottle */}
            <div className="relative z-10 animate-[float_4.5s_ease-in-out_infinite]">
              <div className="w-[260px] h-[420px] md:w-[300px] md:h-[480px] relative">
                {/* Bottle SVG Illustration */}
                <svg viewBox="0 0 200 400" className="w-full h-full drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
                  {/* Bottle Cap */}
                  <rect x="78" y="10" width="44" height="30" rx="4" fill="#E6F7FF" />
                  <rect x="82" y="0" width="36" height="16" rx="3" fill="#009FE3" />

                  {/* Bottle Neck */}
                  <path d="M78 40 L78 80 Q60 95 60 110 L60 110" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                  <path d="M122 40 L122 80 Q140 95 140 110 L140 110" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />

                  {/* Bottle Body */}
                  <path
                    d="M78 40 L78 80 Q55 100 55 120 L55 340 Q55 370 80 370 L120 370 Q145 370 145 340 L145 120 Q145 100 122 80 L122 40 Z"
                    fill="url(#bottleGrad)"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                  />

                  {/* Water Level */}
                  <clipPath id="bottleClip">
                    <path d="M78 40 L78 80 Q55 100 55 120 L55 340 Q55 370 80 370 L120 370 Q145 370 145 340 L145 120 Q145 100 122 80 L122 40 Z" />
                  </clipPath>
                  <rect x="55" y="100" width="90" height="270" fill="url(#waterGrad)" clipPath="url(#bottleClip)" opacity="0.6" />

                  {/* Label */}
                  <rect x="65" y="180" width="70" height="100" rx="8" fill="rgba(255,255,255,0.15)" />
                  <text x="100" y="220" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="serif">Aqua</text>
                  <text x="100" y="238" textAnchor="middle" fill="#B3ECFF" fontSize="12" fontWeight="bold" fontFamily="serif">Pure</text>
                  <text x="100" y="260" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7">PREMIUM WATER</text>

                  {/* Highlight Reflection */}
                  <ellipse cx="80" cy="200" rx="8" ry="60" fill="rgba(255,255,255,0.08)" transform="rotate(-5 80 200)" />

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="bottleGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
                      <stop offset="50%" stopColor="rgba(255,255,255,0.06)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                    </linearGradient>
                    <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#009FE3" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#004E92" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Decorative floating droplets */}
            <div className="absolute top-4 right-[-20px] w-3 h-3 rounded-full bg-ocean/30 animate-[float_3s_ease-in-out_infinite_0.5s]" />
            <div className="absolute bottom-20 left-[-15px] w-2 h-2 rounded-full bg-mist/40 animate-[float_3.5s_ease-in-out_infinite_1s]" />
            <div className="absolute top-1/3 right-[-30px] w-4 h-4 rounded-full bg-ocean/20 animate-[float_4s_ease-in-out_infinite_1.5s]" />
          </div>
        </div>
      </div>
    </section>
  );
}
