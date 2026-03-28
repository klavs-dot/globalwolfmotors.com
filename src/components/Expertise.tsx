"use client";

import ScrollReveal from "./ScrollReveal";

const expertiseAreas = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 6V2m0 4a4 4 0 100 8 4 4 0 000-8zm6 4h4M2 10h4m13.07-4.07l2.83-2.83M2.1 17.9l2.83-2.83m0-8.14L2.1 4.1m17.8 13.8l-2.83-2.83" strokeLinecap="round" />
      </svg>
    ),
    title: "Hardware Platform Development",
    description:
      "Designing and engineering unique, purpose-built hardware platforms from concept to production. Our systems are built for durability, performance, and real-world deployment in the most demanding environments.",
    tags: ["Engineering", "Prototyping", "Production"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" />
      </svg>
    ),
    title: "B2B Solutions",
    description:
      "Enterprise-grade platform solutions tailored for commercial and industrial partners. We deliver scalable, integrated systems that create measurable operational advantages for businesses across sectors.",
    tags: ["Enterprise", "Scalable", "Integration"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 9v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Emergency & Response Systems",
    description:
      "Mission-critical platforms engineered for emergency medical services, disaster response, and first responder operations. Speed, reliability, and field readiness are non-negotiable in our designs.",
    tags: ["EMS", "First Response", "Field-Ready"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Defence-Oriented Platforms",
    description:
      "Robust, tactical-grade platforms designed for military and border security applications. Built to operate in hostile conditions with the precision and dependability that defence operations require.",
    tags: ["Military", "Tactical", "Security"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "AI Automation for Products",
    description:
      "Embedding intelligent automation directly into hardware platforms. Our AI layer enhances product capabilities with predictive analytics, autonomous decision-making, and adaptive performance optimisation.",
    tags: ["Machine Learning", "Predictive", "Adaptive"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "AI for Enterprises & Public Administration",
    description:
      "Transforming how organisations and governments operate through AI-driven workflow automation, executive decision support, and intelligent process management across public and private sectors.",
    tags: ["Governance", "Workflow", "Decision Support"],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-section-gradient" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gwm-accent/5 rounded-full blur-[150px]" />

      <div className="relative z-10 section-padding section-max-width">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="line-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gwm-accent">
                Core Expertise
              </span>
              <div className="line-accent" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gwm-white mb-6">
              What We <span className="text-gradient">Engineer</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-gwm-silver text-base sm:text-lg leading-relaxed">
              Six integrated disciplines that define our capability to deliver
              complete, field-ready solutions — from physical platforms to
              intelligent systems.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertiseAreas.map((area, i) => (
            <ScrollReveal key={i} delay={100 + i * 80}>
              <div className="glass-panel rounded-xl p-7 card-hover group relative overflow-hidden h-full">
                {/* Hover glow */}
                <div className="card-glow absolute inset-0 opacity-0 transition-opacity duration-500 bg-gradient-to-br from-gwm-accent/5 to-transparent rounded-xl" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-gwm-accent/10 flex items-center justify-center text-gwm-accent mb-5 group-hover:bg-gwm-accent/20 transition-colors duration-300">
                    {area.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gwm-white mb-3 group-hover:text-gradient transition-all duration-300">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gwm-muted leading-relaxed mb-5">
                    {area.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 text-gwm-silver"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
