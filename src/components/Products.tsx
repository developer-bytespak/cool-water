"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import RippleButton from "./RippleButton";

const products = [
  {
    name: "19L Gallon",
    subtitle: "Home & Office Essential",
    badge: "Most Popular",
    featured: true,
    features: ["Perfect for families & offices", "Free dispenser available", "Subscribe & save 15%"],
    price: "Rs. 150",
  },
  {
    name: "1.5L Bottle",
    subtitle: "Daily Hydration",
    badge: null,
    featured: false,
    features: ["Pack of 12 bottles", "Ideal for on-the-go", "Slim fridge-friendly design"],
    price: "Rs. 350/pack",
  },
  {
    name: "500ml Bottle",
    subtitle: "Compact & Portable",
    badge: null,
    featured: false,
    features: ["Pack of 24 bottles", "Perfect for events", "Recyclable PET material"],
    price: "Rs. 480/pack",
  },
];

function BottleIcon({ size = "lg" }: { size?: "lg" | "md" | "sm" }) {
  const dims = size === "lg" ? { w: 80, h: 140 } : size === "md" ? { w: 50, h: 100 } : { w: 35, h: 70 };
  return (
    <svg viewBox="0 0 80 140" width={dims.w} height={dims.h} xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="2" width="20" height="12" rx="2" fill="#009FE3" />
      <rect x="28" y="12" width="24" height="8" rx="2" fill="#E6F7FF" />
      <path
        d="M28 20 L28 35 Q15 45 15 55 L15 120 Q15 135 30 135 L50 135 Q65 135 65 120 L65 55 Q65 45 52 35 L52 20 Z"
        fill="url(#prodBottle)"
        stroke="#009FE3"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
      <rect x="20" y="65" width="40" height="40" rx="4" fill="rgba(0,159,227,0.1)" />
      <text x="40" y="85" textAnchor="middle" fill="#009FE3" fontSize="8" fontWeight="bold" fontFamily="serif">Aqua</text>
      <text x="40" y="95" textAnchor="middle" fill="#004E92" fontSize="6" fontFamily="serif">Pure</text>
      <defs>
        <linearGradient id="prodBottle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E6F7FF" />
          <stop offset="100%" stopColor="#B3ECFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Products() {
  const ref = useScrollReveal();

  return (
    <section id="products" className="relative bg-light py-[120px] overflow-hidden">
      {/* Subtle water droplet SVG pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 C30 10 20 25 20 32 A10 10 0 0040 32 C40 25 30 10 30 10Z' fill='%23009FE3'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 60px",
      }} />

      <div ref={ref} className="scroll-reveal max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="stagger-child text-ocean font-semibold text-sm uppercase tracking-widest mb-4">Our Products</p>
          <h2 className="stagger-child font-[family-name:var(--font-display)] text-4xl md:text-[48px] font-bold text-dark leading-tight">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-ocean to-deep bg-clip-text text-transparent">
              Perfect Fit
            </span>
          </h2>
          <p className="stagger-child text-dark/50 text-lg mt-4 max-w-2xl mx-auto">
            From office gallons to personal bottles, we have the right size for every need.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div
              key={i}
              className={`stagger-child group relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-3 ${
                product.featured
                  ? "bg-white border-2 border-ocean shadow-xl shadow-ocean/10 hover:shadow-2xl hover:shadow-ocean/18 hover:-translate-y-3.5"
                  : "bg-white/70 border border-ocean/10 hover:bg-light/80 hover:shadow-xl hover:shadow-ocean/18"
              }`}
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ocean text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-ocean/30">
                  {product.badge}
                </div>
              )}

              {/* Product Image Area */}
              <div className="flex justify-center mb-8 pt-4">
                <div className={`w-32 h-32 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
                  product.featured ? "bg-ocean/10" : "bg-light"
                }`}>
                  <BottleIcon size={product.featured ? "lg" : "md"} />
                </div>
              </div>

              {/* Info */}
              <div className="text-center space-y-3">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-dark">
                  {product.name}
                </h3>
                <p className="text-dark/50 text-sm">{product.subtitle}</p>
                <p className="text-ocean text-2xl font-bold">{product.price}</p>
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-3">
                {product.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-dark/70">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#E6F7FF" />
                      <path d="M5 8l2 2 4-4" stroke="#009FE3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8 flex justify-center">
                <RippleButton variant={product.featured ? "ocean" : "white"} className="w-full group-hover:translate-y-[-2px] transition-transform duration-300">
                  Order Now
                </RippleButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
