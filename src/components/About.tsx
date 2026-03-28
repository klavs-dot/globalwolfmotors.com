"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gwm-accent/20 to-transparent" />
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gwm-accent/5 rounded-full blur-[120px]" />

      <div className="section-padding section-max-width">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="line-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gwm-accent">
                  Who We Are
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gwm-white leading-tight mb-8">
                Building the Future of
                <br />
                <span className="text-gradient">Operational Technology</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-gwm-silver leading-relaxed text-base sm:text-lg mb-6">
                Global Wolf Motors is an advanced engineering and systems company
                that develops two core product lines: unique hardware platforms
                and intelligent AI automation solutions. We deliver real-world
                deployable systems for the world&apos;s most demanding sectors —
                from defence and emergency response to enterprise and public
                administration.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-gwm-muted leading-relaxed mb-8">
                Our hardware platforms serve defence, police, and emergency
                operations. Our AI solutions transform how enterprises and
                governments manage processes, make decisions, and optimise
                operations.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex gap-4">
                <a href="#mosphera" className="btn-primary text-xs py-3 px-6">
                  See Mosphera
                </a>
                <a href="#ai" className="btn-outline text-xs py-3 px-6">
                  AI Solutions
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column — Key Figures */}
          <div>
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    value: "Hardware",
                    label: "Platform Development",
                    desc: "Purpose-built systems designed for extreme operational demands",
                  },
                  {
                    value: "AI",
                    label: "Automation Solutions",
                    desc: "Standalone intelligent systems for enterprises and public administration",
                  },
                  {
                    value: "Defence",
                    label: "Grade Platforms",
                    desc: "Field-proven platforms for military, police, and emergency sectors",
                  },
                  {
                    value: "B2B",
                    label: "Enterprise AI",
                    desc: "AI-driven process management for business and government operations",
                  },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={300 + i * 100}>
                    <div className="glass-panel rounded-xl p-6 card-hover group">
                      <div className="text-2xl sm:text-3xl font-black text-gwm-white mb-1 group-hover:text-gradient transition-all duration-300">
                        {item.value}
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-gwm-accent mb-3">
                        {item.label}
                      </div>
                      <p className="text-xs text-gwm-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
