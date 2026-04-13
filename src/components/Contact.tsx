"use client";

import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gwm-accent/20 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gwm-accent/5 rounded-full blur-[300px]" />
      </div>

      <div className="relative z-10 section-padding section-max-width">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="line-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gwm-accent">
                  Leadership
                </span>
                <div className="line-accent" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gwm-white mb-4">
                Founded by{" "}
                <span className="text-gradient">Klavs Asmanis</span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Company Details Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Company Registration */}
            <ScrollReveal delay={200}>
              <div className="glass-panel rounded-xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gwm-accent/10 flex items-center justify-center text-gwm-accent">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                      <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gwm-white">Company Details</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-gwm-muted mb-1">Legal Name</div>
                    <div className="text-sm font-semibold text-gwm-white">SIA GLOBAL WOLF MOTORS</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-gwm-muted mb-1">Registration No.</div>
                    <div className="text-sm font-semibold text-gwm-white">42103108904</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-gwm-muted mb-1">VAT</div>
                    <div className="text-sm font-semibold text-gwm-white">LV42103108904</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-gwm-muted mb-1">Address</div>
                    <div className="text-sm font-semibold text-gwm-white">Nicas iela 21B, Liepaja, LV-3411, Latvia</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-gwm-muted mb-1">IBAN</div>
                    <div className="text-sm font-semibold text-gwm-white font-mono">LV74UNLA0055001698013</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={300}>
              <div className="glass-panel rounded-xl p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gwm-accent/10 flex items-center justify-center text-gwm-accent">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                      <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gwm-white">Get in Touch</h3>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-gwm-muted mb-1">Email</div>
                    <a href="mailto:klavs@globalwolfmotors.com" className="text-sm font-semibold text-gwm-accent-light hover:text-gwm-white transition-colors duration-300">
                      klavs@globalwolfmotors.com
                    </a>
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-gwm-muted mb-1">Web</div>
                    <div className="text-sm font-semibold text-gwm-white">www.globalwolfmotors.com</div>
                  </div>
                </div>

                {/* Book Meeting Button */}
                <div className="mt-auto flex flex-col space-y-3">
                  <a
                    href="https://calendly.com/klavsasmanis/new-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-gwm-accent/10 border border-gwm-accent/30 text-gwm-accent hover:bg-gwm-accent/20 hover:border-gwm-accent/50 transition-all duration-300 group"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 group-hover:scale-110 transition-transform duration-300">
                      <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs font-medium uppercase tracking-wider text-gwm-accent/70">Calendly</div>
                      <div className="text-sm font-semibold">Book online meeting</div>
                    </div>
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href="https://api.whatsapp.com/send?phone=37120323388&text=Hello!%20I%20am%20interested%20for%20your%20amazing%20Mosphera!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 hover:border-[#25D366]/50 transition-all duration-300 group"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 group-hover:scale-110 transition-transform duration-300">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs font-medium uppercase tracking-wider text-[#25D366]/70">WhatsApp</div>
                      <div className="text-sm font-semibold">+371 20 323 388</div>
                    </div>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
