"use client";
import React, { useRef } from "react";

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "ocean" | "white" | "green" | "outline";
  children: React.ReactNode;
}

export default function RippleButton({
  variant = "ocean",
  children,
  className = "",
  ...props
}: RippleButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const span = document.createElement("span");
    span.className = "ripple-span";
    span.style.left = `${x}px`;
    span.style.top = `${y}px`;
    span.style.width = "20px";
    span.style.height = "20px";
    span.style.marginLeft = "-10px";
    span.style.marginTop = "-10px";

    if (variant === "ocean" || variant === "green") {
      span.style.background = "rgba(255,255,255,0.35)";
    } else {
      span.style.background = "rgba(0,159,227,0.3)";
    }

    btn.appendChild(span);
    setTimeout(() => span.remove(), 600);

    props.onClick?.(e);
  };

  const base =
    "relative overflow-hidden px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 cursor-pointer select-none inline-flex items-center justify-center gap-2";

  const variants: Record<string, string> = {
    ocean: "bg-ocean text-white hover:bg-deep shadow-lg shadow-ocean/25 hover:shadow-ocean/40",
    white:
      "bg-white text-dark hover:bg-light shadow-lg",
    green: "bg-whatsapp text-white hover:brightness-110 shadow-lg shadow-whatsapp/25",
    outline:
      "border-2 border-white text-white hover:bg-white/10",
  };

  return (
    <button
      ref={btnRef}
      className={`${base} ${variants[variant]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
