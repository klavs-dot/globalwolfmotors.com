import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mosphera from "@/components/Mosphera";
import AISection from "@/components/AISection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Mosphera />
      <AISection />
      <Contact />
      <Footer />
    </main>
  );
}
