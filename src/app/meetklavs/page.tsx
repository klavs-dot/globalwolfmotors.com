"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MeetKlavs() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gwm-accent/5 rounded-full blur-[300px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/3 rounded-full blur-[250px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 section-padding py-6">
        <div className="section-max-width flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/assets/logos/gwm-logo.png"
              alt="Global Wolf Motors"
              width={140}
              height={40}
              className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
          </Link>
          <Link
            href="/#contact"
            className="text-xs font-semibold uppercase tracking-wider text-gwm-muted hover:text-gwm-accent transition-colors duration-300"
          >
            ← Back to site
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10 section-padding pb-16">
        <div className="section-max-width">
          {/* Title */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="line-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gwm-accent">
                Schedule a Meeting
              </span>
              <div className="line-accent" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gwm-white mb-4">
              Meet with{" "}
              <span className="text-gradient">Klavs Asmanis</span>
            </h1>
            <p className="text-gwm-muted text-base sm:text-lg max-w-2xl mx-auto">
              Book a convenient time for a video call to discuss partnerships,
              products, or collaboration opportunities.
            </p>
          </div>

          {/* Calendly Embed */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel rounded-2xl overflow-hidden">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/klavsasmanis/new-meeting?hide_gdpr_banner=1&background_color=161a1f&text_color=e2e8f0&primary_color=3b82f6"
                style={{ minWidth: "320px", height: "1000px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
