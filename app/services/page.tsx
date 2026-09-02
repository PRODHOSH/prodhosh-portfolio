import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WavyUnderline from "@/components/WavyUnderline";

const services = [
  {
    title: "Frontend Architecture",
    description: "Building scalable, high-performance, and visually stunning web interfaces using React, Next.js, and Tailwind CSS.",
    icon: <img src="/undraw/web_devices.svg" alt="Frontend Architecture" className="w-full h-auto drop-shadow-[0_0_15px_rgba(16,185,129,0.1)]" />
  },
  {
    title: "Backend & Databases",
    description: "Designing robust server architectures, RESTful APIs, and managing complex relational data models.",
    icon: <img src="/undraw/server_status.svg" alt="Backend & Databases" className="w-full h-auto drop-shadow-[0_0_15px_rgba(16,185,129,0.1)]" />
  },
  {
    title: "AI & Data Science",
    description: "Integrating powerful LLMs, building Retrieval-Augmented Generation (RAG) pipelines, and analyzing large datasets.",
    icon: <img src="/undraw/ai.svg" alt="AI & Data Science" className="w-full h-auto drop-shadow-[0_0_15px_rgba(16,185,129,0.1)]" />
  },
  {
    title: "Cloud & DevOps",
    description: "Deploying applications on modern cloud infrastructure, automating CI/CD pipelines, and utilizing serverless architectures.",
    icon: <img src="/undraw/cloud.svg" alt="Cloud & DevOps" className="w-full h-auto drop-shadow-[0_0_15px_rgba(16,185,129,0.1)]" />
  },
  {
    title: "Business Automations & SEO",
    description: "Streamlining operations through custom workflow automations and developing highly optimized websites.",
    icon: <img src="/undraw/search.svg" alt="Business Automations & SEO" className="w-full h-auto drop-shadow-[0_0_15px_rgba(16,185,129,0.1)]" />
  }
];

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black selection:bg-emerald-500/30 selection:text-emerald-200 overflow-hidden">
      <Navbar />
      
      <div className="pt-40 pb-24 px-6 max-w-7xl mx-auto w-full flex flex-col items-center">
        <div className="text-center space-y-4 max-w-2xl mb-32">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white relative inline-block">
            Services
            <WavyUnderline className="text-emerald-500/70" />
          </h1>
          <p className="text-neutral-400 text-lg">
            End-to-end engineering solutions for modern businesses and startups.
          </p>
        </div>

        <div className="flex flex-col gap-32 w-full">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 w-full`}>
                
                {/* Icon Side */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="w-full max-w-sm relative group flex justify-center py-12">
                    {/* Background glow behind Icon */}
                    <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <div className="group-hover:scale-110 transition-transform duration-700 ease-out relative z-10">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-6">
                  <div className="space-y-4">
                    <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase">0{i + 1}</span>
                    <h2 className="text-3xl md:text-5xl font-display tracking-tight text-white">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                    {service.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
