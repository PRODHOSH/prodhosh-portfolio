import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WavyUnderline from "@/components/WavyUnderline";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Frontend Architecture",
    description: "Building responsive, highly scalable, and pixel-perfect web applications. Specialized in modern JavaScript frameworks to deliver seamless user experiences and intuitive interfaces.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    icon: <img src="/undraw/web_devices.svg" alt="Frontend Architecture" className="w-full h-auto drop-shadow-[0_0_15px_rgba(16,185,129,0.1)]" />
  },
  {
    title: "Backend & Databases",
    description: "Designing robust server architectures, secure RESTful APIs, and complex relational data models. Focused on high availability, fast querying, and scalable infrastructure.",
    tech: ["Python", "Node.js", "PostgreSQL", "MySQL", "Supabase"],
    icon: <img src="/undraw/server_status.svg" alt="Backend & Databases" className="w-full h-auto drop-shadow-[0_0_15px_rgba(16,185,129,0.1)]" />
  },
  {
    title: "AI & Data Science",
    description: "Integrating powerful LLMs into real-world applications. Expertise in building Retrieval-Augmented Generation (RAG) pipelines, developing ML systems, and analyzing complex datasets.",
    tech: ["LLMs", "RAG", "Vector DBs", "Scikit-Learn", "FastAPI"],
    icon: <img src="/undraw/ai.svg" alt="AI & Data Science" className="w-full h-auto drop-shadow-[0_0_15px_rgba(16,185,129,0.1)]" />
  },
  {
    title: "Cloud & DevOps",
    description: "Deploying and managing applications on modern cloud platforms. Implementing CI/CD pipelines, containerizing applications with Docker, and utilizing scalable serverless architectures.",
    tech: ["Docker", "Vercel", "Netlify", "Railway", "AWS"],
    icon: <img src="/undraw/cloud.svg" alt="Cloud & DevOps" className="w-full h-auto drop-shadow-[0_0_15px_rgba(16,185,129,0.1)]" />
  },
  {
    title: "Business Automations",
    description: "Streamlining operations through custom workflow automations. Connecting disparate systems and APIs to reduce manual work and drastically improve business efficiency.",
    tech: ["n8n", "Webhooks", "API Integration", "Automated Workflows"],
    icon: <img src="/undraw/search.svg" alt="Business Automations" className="w-full h-auto drop-shadow-[0_0_15px_rgba(16,185,129,0.1)]" />
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
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                    {service.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 text-sm font-mono rounded-full bg-white/5 border border-white/10 text-emerald-400/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-40 mb-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
            Ready to build something great?
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-10">
            Whether you need a scalable web platform, an AI integration, or an automated workflow, I'm here to help bring your vision to life.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] group"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
