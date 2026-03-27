"use client";

const items = [
  { icon: "💧", text: "100% Pure" },
  { icon: "🔬", text: "Lab Tested" },
  { icon: "✅", text: "WHO Certified" },
  { icon: "🚚", text: "Same-Day Delivery" },
  { icon: "🏠", text: "Home & Office" },
  { icon: "⭐", text: "10,000+ Customers" },
];

export default function TrustMarquee() {
  const doubled = [...items, ...items];

  return (
    <section className="bg-ocean py-4 overflow-hidden relative">
      <div className="animate-[marquee_30s_linear_infinite] flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2 mx-8 text-white font-medium text-sm md:text-base shrink-0"
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.text}</span>
            <span className="text-white/30 ml-6">·</span>
          </div>
        ))}
      </div>
    </section>
  );
}
