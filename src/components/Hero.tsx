"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/hero.jpg"
          alt="Mosphera advanced platform"
          fill
          className={`object-cover object-center transition-all duration-[2s] ${
            loaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
          priority
          quality={90}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-gwm-black/80 via-gwm-black/40 to-transparent" />
        <div className="absolute inset-0 bg-hero-gradient" />
        {/* Cinematic vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gwm-black/60" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full section-padding section-max-width flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Tag */}
          <div
            className={`inline-flex items-center gap-2 mb-8 transition-all duration-700 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-8 h-px bg-gwm-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gwm-accent">
              Engineering the Future
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6 transition-all duration-700 delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-gwm-white block">Advanced Hardware</span>
            <span className="text-gwm-white block">Platforms &</span>
            <span className="text-gradient block mt-1">
              AI Solutions
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-base sm:text-lg md:text-xl text-gwm-silver max-w-xl leading-relaxed mb-10 transition-all duration-700 delay-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Developing unique hardware platforms and AI-driven automation
            solutions for B2B, emergency, defence, and public administration
            sectors.
          </p>

          {/* CTA Button */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-900 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a href="#about" className="btn-primary">
              Who We Are
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-[1200ms] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-gwm-muted">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-gwm-accent to-transparent animate-pulse" />
        </div>
      </div>

      {/* Decorative corner element */}
      <div className="absolute top-24 right-8 lg:right-16 hidden lg:block">
        <div className={`transition-all duration-1000 delay-[1000ms] ${loaded ? "opacity-100" : "opacity-0"}`}>
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gwm-accent/30 to-transparent" />
          <div className="mt-4 text-[10px] tracking-[0.2em] text-gwm-muted uppercase writing-mode-vertical" style={{ writingMode: "vertical-rl" }}>
            Est. Global Wolf Motors
          </div>
        </div>
      </div>
    </section>
  );
}
