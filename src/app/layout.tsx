import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Wolf Motors — Advanced Hardware Platforms & AI Automation",
  description:
    "Developing unique hardware platforms and AI automation solutions for B2B, emergency, defence, and public administration sectors.",
  keywords: [
    "hardware platforms",
    "defence technology",
    "emergency systems",
    "AI automation",
    "B2B solutions",
    "Global Wolf Motors",
    "Mosphera",
    "electric vehicles",
    "public administration AI",
  ],
  openGraph: {
    title: "Global Wolf Motors — Advanced Hardware Platforms & AI Automation",
    description:
      "Developing unique hardware platforms and AI automation solutions for B2B, emergency, defence, and public administration sectors.",
    url: "https://www.globalwolfmotors.com",
    siteName: "Global Wolf Motors",
    type: "website",
  },
  icons: {
    icon: "/assets/logos/favicon.png",
    apple: "/assets/logos/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gwm-black text-gwm-light antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
