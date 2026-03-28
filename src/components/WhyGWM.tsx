"use client";

import ScrollReveal from "./ScrollReveal";

const reasons = [
  {
    number: "01",
    title: "Hardware + AI Convergence",
    description:
      "We don't just build hardware or write software — we engineer complete systems where physical platforms and artificial intelligence work as one integrated capability.",
  },
  {
    number: "02",
    title: "Real-World Deployability",
    description:
      "Every solution we create is designed for field deployment. Our platforms are tested, proven, and operational in the environments they're built for — not just in laboratories.",
  },
  {
    number: "03",
    title: "Sector-Specific Engineering",
    description:
      "We design for specific operational demands. Defence, emergency, law enforcement, and enterprise — each solution is purpose-built, not adapted from generic products.",
  },
  {
    number: "04",
    title: "High-Value Innovation",
    description:
      "Our R&D delivers systems with genuine strategic value. We invest in technology that creates measurable operational advantages for our partners and clients.",
  },
  {
    number: "05",
    title: "Full-Stack Capability",
    description:
      "From mechanical engineering and electronics to AI systems and enterprise integration — we control the full development chain, ensuring quality and cohesion at every stage.",
  },
  {
    number: "06",
    title: "International Standards",
    description:
      "Built to meet the requirements of international defence, emergency response, and governance clients. Our work is designed for the global stage.",
  },
];

export default function WhyGWM() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gwm-accent/20 to-transparent" />
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-gwm-accent/5 rounded-full blur-[150px]" />

      <div className="relative z-10 section-padding section-max-width">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="line-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gwm-accent">
                Our Advantage
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gwm-white mb-6">
              Why <span className="text-gradient">Global Wolf Motors</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-gwm-silver text-base sm:text-lg leading-relaxed">
              In a world where hardware and software are converging, we deliver
              the rare combination of deep engineering capability and
              intelligent automation — purpose-built for sectors where
              performance is mission-critical.
            </p>
          </ScrollReveal>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <ScrollReveal key={i} delay={100 + i * 80}>
              <div className="glass-panel rounded-xl p-7 card-hover group relative overflow-hidden h-full">
                {/* Number */}
                <div className="text-5xl font-black text-gwm-accent/10 absolute top-4 right-5 group-hover:text-gwm-accent/20 transition-colors duration-500">
                  {reason.number}
                </div>

                <div className="relative z-10">
                  <div className="w-8 h-0.5 bg-gwm-accent mb-5 group-hover:w-12 transition-all duration-300" />
                  <h3 className="text-lg font-bold text-gwm-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gwm-muted leading-relaxed">
                    {reason.description}
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
