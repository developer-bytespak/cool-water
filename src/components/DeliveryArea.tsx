"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const areas = [
  "DHA", "Clifton", "Gulshan-e-Iqbal", "PECHS", "Saddar",
  "Gulistan-e-Johar", "North Nazimabad", "Bahria Town", "Malir",
  "Korangi", "FB Area", "Scheme 33",
];

const pins = [
  { top: "35%", left: "25%" },
  { top: "42%", left: "30%" },
  { top: "30%", left: "55%" },
  { top: "50%", left: "45%" },
  { top: "55%", left: "35%" },
  { top: "38%", left: "65%" },
  { top: "60%", left: "55%" },
  { top: "45%", left: "72%" },
];

export default function DeliveryArea() {
  const ref = useScrollReveal();

  return (
    <section id="delivery" className="relative bg-white py-[120px] overflow-hidden">
      <div ref={ref} className="scroll-reveal max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="stagger-child text-ocean font-semibold text-sm uppercase tracking-widest mb-4">
            Delivery Coverage
          </p>
          <h2 className="stagger-child font-[family-name:var(--font-display)] text-4xl md:text-[48px] font-bold text-dark leading-tight">
            Delivering Across Karachi in{" "}
            <span className="bg-gradient-to-r from-ocean to-deep bg-clip-text text-transparent">
              Under 2 Hours
            </span>
          </h2>
          <p className="stagger-child text-dark/50 text-lg mt-4 max-w-2xl mx-auto">
            From DHA to North Nazimabad, we cover all major areas of Karachi with same-day delivery.
          </p>
        </div>

        {/* Map Area */}
        <div className="stagger-child relative mx-auto max-w-3xl">
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-gradient-to-br from-deep/5 to-ocean/10 border border-ocean/10">
            {/* Abstract map shape */}
            <svg
              viewBox="0 0 800 500"
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Karachi abstract shape */}
              <path
                d="M150 300 Q200 200 300 180 Q350 170 400 190 Q500 220 550 180 Q600 150 650 200 Q700 250 680 320 Q660 380 580 400 Q500 420 400 410 Q300 400 220 370 Q160 350 150 300Z"
                fill="rgba(0,159,227,0.08)"
                stroke="rgba(0,159,227,0.2)"
                strokeWidth="2"
              />
              {/* Inner detail */}
              <path
                d="M250 280 Q300 240 380 250 Q440 260 480 240 Q520 220 560 250 Q590 270 570 310 Q550 340 480 350 Q400 360 330 340 Q260 320 250 280Z"
                fill="rgba(0,159,227,0.05)"
                stroke="rgba(0,159,227,0.1)"
                strokeWidth="1"
              />
              {/* Road lines */}
              <line x1="200" y1="280" x2="650" y2="250" stroke="rgba(0,159,227,0.08)" strokeWidth="1" strokeDasharray="8 4" />
              <line x1="350" y1="180" x2="400" y2="400" stroke="rgba(0,159,227,0.08)" strokeWidth="1" strokeDasharray="8 4" />
            </svg>

            {/* Pulsing Pins */}
            {pins.map((pin, i) => (
              <div
                key={i}
                className="absolute"
                style={{ top: pin.top, left: pin.left }}
              >
                {/* Pulse ring */}
                <div className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ocean/30 animate-[pulse-pin_2s_ease-out_infinite]" style={{ animationDelay: `${i * 250}ms` }} />
                {/* Pin dot */}
                <div className="absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ocean shadow-lg shadow-ocean/40" />
              </div>
            ))}

            {/* Center label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-light rounded-2xl px-6 py-3">
              <p className="text-dark font-bold text-sm">KARACHI</p>
              <p className="text-ocean text-xs font-medium">Full Coverage</p>
            </div>
          </div>
        </div>

        {/* Area Chips */}
        <div className="stagger-child flex flex-wrap justify-center gap-3 mt-12">
          {areas.map((area, i) => (
            <span
              key={i}
              className="px-5 py-2.5 rounded-full bg-light text-dark/80 text-sm font-medium border border-ocean/10 hover:bg-ocean hover:text-white hover:border-ocean transition-all duration-300 cursor-default"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
