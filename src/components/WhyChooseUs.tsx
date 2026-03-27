"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

function StatCard({
  end,
  suffix,
  label,
  icon,
}: {
  end: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}) {
  const { ref, count, done } = useCountUp(end);

  return (
    <div
      ref={ref}
      className="stagger-child glass-light rounded-3xl p-8 text-center hover:shadow-xl hover:shadow-ocean/10 transition-all duration-300"
    >
      <div className="w-16 h-16 rounded-full bg-ocean/10 flex items-center justify-center mx-auto mb-5">
        {icon}
      </div>
      <div className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-dark">
        {count.toLocaleString()}
        {done && <span className="text-ocean">{suffix}</span>}
      </div>
      <p className="text-dark/50 font-medium mt-2 text-sm uppercase tracking-wider">{label}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  const ref = useScrollReveal();

  const stats = [
    {
      end: 10000,
      suffix: "+",
      label: "Happy Customers",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#009FE3" strokeWidth="2" strokeLinecap="round" />
          <circle cx="9" cy="7" r="4" stroke="#009FE3" strokeWidth="2" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#009FE3" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      end: 99,
      suffix: ".8%",
      label: "Purity Rate",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0c0-5-7-13-7-13z" stroke="#009FE3" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      end: 2,
      suffix: "-Hour",
      label: "Delivery Time",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#009FE3" strokeWidth="2" />
          <path d="M12 6v6l4 2" stroke="#009FE3" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      end: 5,
      suffix: "★",
      label: "Customer Rating",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#009FE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-us" className="relative bg-mist py-[120px] overflow-hidden">
      {/* Background Blob */}
      <div
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] animate-[blob-morph_10s_ease-in-out_infinite_alternate]"
        style={{ background: "rgba(0,159,227,0.07)" }}
      />

      <div ref={ref} className="scroll-reveal max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="stagger-child text-ocean font-semibold text-sm uppercase tracking-widest mb-4">
            Why Choose Us
          </p>
          <h2 className="stagger-child font-[family-name:var(--font-display)] text-4xl md:text-[48px] font-bold text-dark leading-tight">
            Numbers That{" "}
            <span className="bg-gradient-to-r from-ocean to-deep bg-clip-text text-transparent">
              Speak Trust
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
