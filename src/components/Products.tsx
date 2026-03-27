"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RippleButton from "./RippleButton";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: "Premium Natural Spring Water",
    subtitle: "24 - 16 oz. Bottles Per Case",
    badge: "Most Popular",
    featured: true,
    features: ["Sourced from protected natural springs", "Crisp, refreshing taste", "BPA-free recyclable bottles"],
    image: "/content/product-1.jpg",
  },
  {
    name: "Premium Alkaline Water Ph9+",
    subtitle: "24 - 16 oz. Bottles Per Case",
    badge: null,
    featured: false,
    features: ["Enhanced pH 9+ for optimal hydration", "Electrolyte-infused", "Smooth, clean finish"],
    image: "/content/product-2.jpg",
  },
  {
    name: "Saint Michael Premium Sparkling Water",
    subtitle: "24 - 16 oz. Bottles Per Case",
    badge: null,
    featured: false,
    features: ["Fine, effervescent bubbles", "Zero calories, zero sugar", "Perfect for any occasion"],
    image: "/content/product-3.jpg",
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".products-header > *",
        { opacity: 0, y: 50, rotationX: 15, transformPerspective: 800 },
        {
          opacity: 1, y: 0, rotationX: 0,
          duration: 1, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ".products-header", start: "top 85%" },
        }
      );

      // Product cards stagger from bottom with scale
      gsap.fromTo(
        ".product-card",
        { opacity: 0, y: 100, scale: 0.9 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.9, stagger: 0.2, ease: "back.out(1.4)",
          scrollTrigger: { trigger: ".products-grid", start: "top 80%" },
        }
      );

      // Product images float in
      gsap.fromTo(
        ".product-image",
        { opacity: 0, scale: 0.6, rotation: -5 },
        {
          opacity: 1, scale: 1, rotation: 0,
          duration: 1, stagger: 0.25, ease: "elastic.out(1, 0.5)",
          scrollTrigger: { trigger: ".products-grid", start: "top 75%" },
        }
      );

      // Badges pop in
      gsap.fromTo(
        ".product-badge",
        { opacity: 0, scale: 0, y: -20 },
        {
          opacity: 1, scale: 1, y: 0,
          duration: 0.6, ease: "back.out(2)",
          scrollTrigger: { trigger: ".products-grid", start: "top 75%" },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="relative bg-light py-[120px] overflow-hidden">
      {/* Subtle water droplet SVG pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 C30 10 20 25 20 32 A10 10 0 0040 32 C40 25 30 10 30 10Z' fill='%23009FE3'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 60px",
      }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 products-header">
          <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-4">Our Products</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-[48px] font-bold text-dark leading-tight">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-ocean to-deep bg-clip-text text-transparent">
              Perfect Fit
            </span>
          </h2>
          <p className="text-dark/50 text-lg mt-4 max-w-2xl mx-auto">
            From office gallons to personal bottles, we have the right size for every need.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 products-grid">
          {products.map((product, i) => (
            <div
              key={i}
              className={`product-card group relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-3 ${
                product.featured
                  ? "bg-white border-2 border-ocean shadow-xl shadow-ocean/10 hover:shadow-2xl hover:shadow-ocean/18 hover:-translate-y-3.5"
                  : "bg-white/70 border border-ocean/10 hover:bg-light/80 hover:shadow-xl hover:shadow-ocean/18"
              }`}
            >
              {/* Badge */}
              {product.badge && (
                <div className="product-badge absolute -top-3 left-1/2 -translate-x-1/2 bg-ocean text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-ocean/30">
                  {product.badge}
                </div>
              )}

              {/* Product Image Area */}
              <div className="flex justify-center mb-8 pt-4">
                <div className="product-image h-52 w-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={300}
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="text-center space-y-3">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-dark">
                  {product.name}
                </h3>
                <p className="text-dark/50 text-sm">{product.subtitle}</p>
                {/* <p className="text-ocean text-2xl font-bold">{product.price}</p> */}
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
