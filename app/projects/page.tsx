import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      
      <div className="pt-40 pb-16 px-6 max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* unDraw Hero Illustration */}
        <div className="w-full max-w-sm mb-12 relative flex justify-center">
           <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
           <img src="/undraw/programming.svg" alt="Programming" className="w-full h-auto opacity-90 drop-shadow-[0_0_15px_rgba(16,185,129,0.2)] relative z-10" />
        </div>
        <div className="text-center space-y-4 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white">
            My Work
          </h1>
          <p className="text-neutral-400 text-lg">
            Building scalable platforms, developer tools, and engaging user experiences.
          </p>
        </div>
      </div>

      <Projects />
      <Footer />
    </main>
  );
}
