"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WavyUnderline from "./WavyUnderline";

const services = [
  {
    id: "01",
    title: "Frontend Architecture",
    description: "Building scalable, high-performance, and visually stunning web interfaces using React, Next.js, and Tailwind CSS. Obsessed with micro-animations and perfect responsive layouts.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: "02",
    title: "Backend & Databases",
    description: "Designing robust server architectures, RESTful APIs, and managing complex relational data models. Ensuring low-latency communication and secure data flow.",
    tags: ["FastAPI", "Node.js", "PostgreSQL", "Supabase", "Prisma"]
  },
  {
    id: "03",
    title: "AI & Data Science",
    description: "Integrating powerful LLMs, building Retrieval-Augmented Generation (RAG) pipelines, and analyzing large datasets to extract meaningful insights.",
    tags: ["LLaMA", "RAG pipelines", "Python", "NumPy", "Pandas"]
  },
  {
    id: "04",
    title: "Cloud & DevOps",
    description: "Deploying applications on modern cloud infrastructure, automating CI/CD pipelines, and utilizing serverless architectures for global scale.",
    tags: ["AWS", "Google Cloud", "Docker", "Vercel", "Cloudinary"]
  },
  {
    id: "05",
    title: "Business Automations & SEO",
    description: "Streamlining operations through custom workflow automations and developing highly optimized websites that rank well on search engines and convert visitors.",
    tags: ["SEO Optimization", "Web Scraping", "API Integrations", "Analytics"]
  }
];

export default function Services() {
  return (
    <section className="w-full bg-transparent py-32 px-6 relative" id="what-i-do">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Sticky Header */}
        <div className="lg:w-1/3 lg:sticky lg:top-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-left"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight text-white inline-block relative">
              What I Do?
              <WavyUnderline className="text-emerald-500/70" />
            </h2>
            <p className="mt-8 text-neutral-400 text-lg leading-relaxed">
              I specialize in building scalable, intelligent, and highly optimized digital products from end to end.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Services Accordion List */}
        <div className="lg:w-2/3 flex flex-col w-full border-t border-white/10">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-b border-white/10"
            >
              <div className="w-full py-8 md:py-10 flex flex-col justify-center cursor-default">
                
                {/* Visible Title Row */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-6 md:gap-8">
                    <span className="text-emerald-400 font-mono text-sm md:text-base font-bold group-hover:text-emerald-300 transition-colors">
                      / {service.id}
                    </span>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-display tracking-tight text-neutral-300 group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 group-hover:text-emerald-400 group-hover:-rotate-45 transition-all duration-300 transform shrink-0" />
                </div>

                {/* Expandable Content (Shown on Hover) */}
                <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    <div className="pt-6 md:pt-8 pl-[4.5rem] md:pl-[5.5rem]">
                      <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl mb-6">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2 md:gap-3 pb-4">
                        {service.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1.5 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-neutral-300 uppercase tracking-wider group-hover:border-emerald-500/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
