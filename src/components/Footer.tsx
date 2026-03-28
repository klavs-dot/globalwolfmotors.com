"use client";

import Image from "next/image";

const footerLinks = [
  {
    title: "Solutions",
    links: [
      { label: "Hardware Platforms", href: "#about" },
      { label: "AI Automation", href: "#ai" },
      { label: "Mosphera", href: "#mosphera" },
    ],
  },
  {
    title: "Sectors",
    links: [
      { label: "Defence", href: "#mosphera" },
      { label: "Emergency Services", href: "#mosphera" },
      { label: "Law Enforcement", href: "#mosphera" },
      { label: "Government", href: "#ai" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="section-padding section-max-width py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand — logo only, bigger */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Image
                src="/assets/logos/gwm-logo.png"
                alt="Global Wolf Motors"
                width={200}
                height={108}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gwm-muted leading-relaxed max-w-sm mb-6">
              Developing unique hardware platforms and AI automation solutions
              for B2B, emergency, defence, and public administration sectors.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-gwm-muted">
                Active &amp; Operational
              </span>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gwm-silver mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gwm-muted hover:text-gwm-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gwm-muted">
            &copy; {new Date().getFullYear()} SIA Global Wolf Motors. All rights
            reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs text-gwm-muted">
              Reg. Nr. 42103108904
            </span>
            <div className="w-px h-3 bg-gwm-steel" />
            <span className="text-xs text-gwm-muted">Liepaja, Latvia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
