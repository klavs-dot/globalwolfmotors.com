"use client";

import ScrollReveal from "./ScrollReveal";

const industries = [
  {
    title: "B2B & Enterprise",
    description:
      "Scalable platform and automation solutions for commercial and industrial partners requiring operational excellence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Emergency Services",
    description:
      "Rapid-response platforms and intelligent coordination systems for EMS, fire, and disaster response operations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Law Enforcement",
    description:
      "Patrol platforms, crowd management systems, and operational tools designed for modern police forces and security agencies.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Defence & Military",
    description:
      "Tactical hardware platforms for armed forces, border protection, reconnaissance, and special operations deployment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Government & Public Administration",
    description:
      "AI-powered workflow automation, decision support systems, and digital transformation solutions for state and municipal governance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Special Operations",
    description:
      "High-demand platforms for unconventional deployment scenarios — stealth operations, rapid insertion, and mission-critical field use.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-section-gradient" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gwm-accent/20 to-transparent" />

      <div className="relative z-10 section-padding section-max-width">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="line-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gwm-accent">
                Sectors We Serve
              </span>
              <div className="line-accent" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gwm-white mb-6">
              Industries &{" "}
              <span className="text-gradient">Applications</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-gwm-silver text-base sm:text-lg leading-relaxed">
              Our platforms and intelligent systems serve sectors where failure
              is not an option — where technology must perform under pressure,
              in the field, and at the highest operational standard.
            </p>
          </ScrollReveal>
        </div>

        {/* Industry Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, i) => (
            <ScrollReveal key={i} delay={100 + i * 70}>
              <div className="glass-panel rounded-xl p-7 card-hover group relative overflow-hidden h-full flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gwm-accent/10 flex items-center justify-center text-gwm-accent mb-5 group-hover:bg-gwm-accent/20 group-hover:scale-110 transition-all duration-300">
                  {industry.icon}
                </div>

                <h3 className="text-lg font-bold text-gwm-white mb-3">
                  {industry.title}
                </h3>

                <p className="text-sm text-gwm-muted leading-relaxed">
                  {industry.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-auto pt-5">
                  <div className="w-8 h-px bg-gwm-accent/30 group-hover:w-16 group-hover:bg-gwm-accent transition-all duration-500" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
