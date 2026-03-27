"use client";

export default function WaveBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none ${className}`} style={{ height: "40%" }}>
      {/* Wave Layer 1 - slowest, most transparent */}
      <svg
        className="absolute bottom-0 w-[200%] animate-[wave-slide_25s_linear_infinite]"
        style={{ opacity: 0.08 }}
        viewBox="0 0 2880 320"
        preserveAspectRatio="none"
        height="100%"
      >
        <path
          d="M0,160 C360,240 720,80 1080,160 C1440,240 1800,80 2160,160 C2520,240 2880,80 2880,160 L2880,320 L0,320 Z"
          fill="#009FE3"
        />
      </svg>
      {/* Wave Layer 2 */}
      <svg
        className="absolute bottom-0 w-[200%] animate-[wave-slide_20s_linear_infinite_reverse]"
        style={{ opacity: 0.12 }}
        viewBox="0 0 2880 320"
        preserveAspectRatio="none"
        height="80%"
      >
        <path
          d="M0,192 C480,128 960,256 1440,192 C1920,128 2400,256 2880,192 L2880,320 L0,320 Z"
          fill="#004E92"
        />
      </svg>
      {/* Wave Layer 3 - fastest, most visible */}
      <svg
        className="absolute bottom-0 w-[200%] animate-[wave-slide_30s_linear_infinite]"
        style={{ opacity: 0.18 }}
        viewBox="0 0 2880 320"
        preserveAspectRatio="none"
        height="60%"
      >
        <path
          d="M0,224 C320,160 640,288 960,224 C1280,160 1600,288 1920,224 C2240,160 2560,288 2880,224 L2880,320 L0,320 Z"
          fill="#009FE3"
        />
      </svg>
    </div>
  );
}
