import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Metrics from "@/components/Metrics";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Metrics />
      <CTA />
      <Footer />
    </main>
  );
}
