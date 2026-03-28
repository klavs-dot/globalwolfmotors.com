"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const aiCapabilities = [
  {
    title: "Product Intelligence",
    description:
      "Embedding AI directly into hardware platforms — enabling predictive maintenance, autonomous navigation, real-time environmental analysis, and adaptive performance tuning.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Enterprise Operations",
    description:
      "AI-driven workflow optimisation for business operations — automating complex processes, reducing operational overhead, and enabling data-informed management decisions at scale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Executive Decision Support",
    description:
      "Advanced analytics and AI models that empower leadership with predictive insights, scenario modelling, and strategic intelligence — transforming raw data into decisive action.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Public Administration & Governance",
    description:
      "Intelligent process management for government operations, municipal administration, and public sector workflows — improving efficiency, transparency, and citizen service delivery.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function AISection() {
  return (
    <section id="ai" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-section-gradient" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gwm-cyan/20 to-transparent" />

      {/* Ambient effects */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gwm-accent/3 rounded-full blur-[250px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gwm-cyan/3 rounded-full blur-[200px]" />

      {/* Neural network grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(59,130,246,0.5) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 section-padding section-max-width">
        {/* Header with Logo */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="line-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gwm-accent">
                Intelligent Systems
              </span>
              <div className="line-accent" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gwm-white mb-6">
              AI-Powered <span className="text-gradient">Automation</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-gwm-silver text-base sm:text-lg leading-relaxed mb-10">
              Our AI automation division develops standalone intelligent systems
              that transform how businesses and governments operate. From
              enterprise workflow automation to public administration process
              management — AI is a core product line, not just an add-on.
            </p>
          </ScrollReveal>

          {/* GWM AI Logo */}
          <ScrollReveal delay={300}>
            <div className="inline-flex items-center justify-center glass-panel rounded-2xl p-5 mb-4">
              <Image
                src="/assets/logos/gwm-ai-logo.png"
                alt="GWM AI Systems"
                width={80}
                height={80}
                className="rounded-xl"
              />
            </div>
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-gwm-muted mb-6">
              GWM Intelligent Automation Division
            </div>
            <a
              href="https://www.globalwm.lv"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-3 px-6 inline-flex items-center gap-2"
            >
              Visit GlobalWM.lv
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
              </svg>
            </a>
          </ScrollReveal>
        </div>

        {/* AI Capability Cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {aiCapabilities.map((cap, i) => (
            <ScrollReveal key={i} delay={150 + i * 80}>
              <div className="glass-panel rounded-xl p-7 card-hover group relative overflow-hidden h-full">
                {/* Hover accent */}
                <div className="card-glow absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gwm-accent to-gwm-cyan opacity-0 transition-opacity duration-500" />

                <div className="relative z-10 flex gap-5">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-gwm-accent/10 flex items-center justify-center text-gwm-accent group-hover:bg-gwm-accent/20 transition-colors duration-300">
                    {cap.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gwm-white mb-2 group-hover:text-gradient transition-all duration-300">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-gwm-muted leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Connection Statement */}
        <ScrollReveal delay={500}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 glass-panel rounded-full px-8 py-4">
              <div className="w-2 h-2 rounded-full bg-gwm-accent animate-pulse" />
              <span className="text-sm text-gwm-silver">
                Two product lines — one unified vision for operational excellence
              </span>
              <div className="w-2 h-2 rounded-full bg-gwm-cyan animate-pulse" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
