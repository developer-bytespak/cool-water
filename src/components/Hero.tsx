"use client";
import { useEffect, useState } from "react";
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
      {/* H1 */}
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
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
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/content/water.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-dark/60" />

      {/* Parallax BG Layer */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          transform: "translateY(calc(var(--scroll-y, 0) * 0.2px))",
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(0,159,227,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,78,146,0.2) 0%, transparent 50%)",
        }}
      />

      {/* Wave Background */}
      <WaveBackground />

      {/* Content — centered single column */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center pt-24 md:pt-0">
        <HeroTextReveal />
      </div>
    </section>
  );
}
