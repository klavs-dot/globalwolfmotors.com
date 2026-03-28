"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const platforms = [
  {
    image: "/assets/images/defence.png",
    title: "Defence & Border Security",
    description:
      "Tactical-grade platform engineered for military patrols, border surveillance, and rapid-deployment operations in hostile terrain. Silent, agile, and mission-ready.",
    badge: "DEFENCE",
  },
  {
    image: "/assets/images/emergency.png",
    title: "Emergency Medical Response",
    description:
      "Purpose-configured for paramedic and EMS operations. Rapid crowd penetration, medical equipment integration, and response-time optimisation for mass events and urban emergencies.",
    badge: "EMS",
  },
  {
    image: "/assets/images/police.png",
    title: "Law Enforcement & Police",
    description:
      "Designed for police patrol, crowd management, and community safety operations. High-visibility configuration with integrated communication and rapid-response capability.",
    badge: "POLICE",
  },
];

export default function Mosphera() {
  return (
    <section id="mosphera" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gwm-accent/20 to-transparent" />

      {/* Background effects */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-gwm-accent/3 rounded-full blur-[200px]" />
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-gwm-cyan/3 rounded-full blur-[200px]" />

      <div className="relative z-10 section-padding section-max-width">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="line-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gwm-accent">
                  Flagship Platform
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              {/* Mosphera Logo */}
              <div className="mb-6">
                <Image
                  src="/assets/logos/mosphera-logo-white.png"
                  alt="Mosphera"
                  width={320}
                  height={71}
                  className="opacity-90"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-gwm-silver text-base sm:text-lg leading-relaxed mb-8">
                Mosphera represents the pinnacle of Global Wolf Motors&apos;
                hardware platform engineering — a modular, all-terrain mobility
                system designed from the ground up for defence, emergency, and
                law enforcement deployment. Each variant is purpose-configured
                for its operational environment.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <a
                href="https://www.mosphera.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-3 px-6 inline-flex items-center gap-2"
              >
                Visit Mosphera.com
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                </svg>
              </a>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <div className="glass-panel rounded-xl px-6 py-4 inline-flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium uppercase tracking-wider text-gwm-silver">
                Field-Proven &amp; Operational
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {platforms.map((platform, i) => (
            <ScrollReveal key={i} delay={150 + i * 100}>
              <div className="glass-panel rounded-xl overflow-hidden card-hover group h-full">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={platform.image}
                    alt={platform.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gwm-dark via-gwm-dark/30 to-transparent" />
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-gwm-accent/20 backdrop-blur-md border border-gwm-accent/30 text-[10px] font-bold uppercase tracking-wider text-gwm-accent-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-gwm-accent" />
                      {platform.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gwm-white mb-3">
                    {platform.title}
                  </h3>
                  <p className="text-sm text-gwm-muted leading-relaxed">
                    {platform.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
