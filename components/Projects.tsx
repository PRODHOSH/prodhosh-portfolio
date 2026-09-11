"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WavyUnderline from "./WavyUnderline";
import Image from "next/image";

const projects = [
  {
    name: "BS Prep",
    category: "LEARNING PLATFORM",
    desc: "A full-stack learning platform designed for the IITM BS student community. Handles authentication, course enrollment, payment workflows, and live session delivery.",
    link: "https://www.bsprep.com",
    github: "https://github.com/PRODHOSH/bs-prep",
    image: "/projects/bsprep-screenshot.png",
  },
  {
    name: "FlashFetch",
    category: "AI SaaS",
    desc: "A Retrieval-Augmented Generation (RAG) powered document QA system. Upload PDFs, TXT, or Markdown files and ask questions in natural language. Every answer is grounded with source citations.",
    link: "https://flashfetch.app",
    github: "https://github.com/PRODHOSH/rag-document-qa-bot",
    image: "/projects/flashfetch-screenshot.png",
  },
  {
    name: "OSS Connect",
    category: "OPEN SOURCE",
    desc: "Your open-source identity, beyond GitHub. A free, open-source platform where every contributor gets a public profile page showing merged PRs, issues, orgs, and program participations.",
    link: "https://ossconnect.me",
    github: "https://github.com/PRODHOSH/ossconnect",
    image: "/projects/ossconnect-screenshot.png",
  },
  {
    name: "Annexra",
    category: "WEB AGENCY",
    desc: "A modern, highly optimized portfolio and landing page for Annexra Web Agency. Built with Next.js and Tailwind CSS for blazing fast performance.",
    link: "https://annexra.com",
    github: "https://github.com/PRODHOSH/annexra",
    image: "/projects/annexra-screenshot.png",
  },
  {
    name: "EcoLens",
    category: "AI PLATFORM",
    desc: "An AI-powered environmental monitoring platform. Leverages computer vision to detect and classify waste in real-time, helping communities manage sustainability.",
    link: "#",
    github: "https://github.com/PRODHOSH/ecolens",
    image: "/projects/ecolens-screenshot.png",
  },
  {
    name: "FlickMood",
    category: "ENTERTAINMENT",
    desc: "A semantic movie recommendation engine. Describe your mood in natural language, and FlickMood uses vector embeddings to find the perfect movie for you.",
    link: "#",
    github: "https://github.com/PRODHOSH/flickmood",
    image: "/projects/flickmood-screenshot.png",
  },
  {
    name: "Nallamala",
    category: "ECOMMERCE",
    desc: "A beautifully designed, full-stack ecommerce platform for Nallamala products. Features a robust cart system, secure checkout, and a custom admin dashboard.",
    link: "#",
    github: "https://github.com/PRODHOSH/nallamala",
    image: "/projects/nallamala-screenshot.png",
  }
];

export default function Projects() {
  return (
    <section className="w-full bg-transparent pt-32 pb-32 px-6 relative" id="projects">
      <div className="max-w-7xl mx-auto mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center space-y-6"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tighter text-white capitalize relative inline-block">
            Featured Projects
            <WavyUnderline className="text-emerald-500/70" />
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto">
            Building scalable web platforms, AI-powered systems, and innovative solutions. From RAG document intelligence to community-driven hubs.
          </p>
        </motion.div>
      </div>

      {/* Grid Layout for Projects */}
      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {projects.map((project, i) => {
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className={`w-full h-full flex ${i === 6 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
            >
              <div className="relative w-full bg-[#0a0a0a] rounded-[40px] flex flex-col group shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)]">
                
                {/* Top: Image Container */}
                <div className="w-full h-80 lg:h-[400px] relative overflow-hidden bg-neutral-900 border-b border-white/5 rounded-t-[40px]">
                  <Image 
                    src={project.image} 
                    alt={project.name} 
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>

                {/* Bottom: Content Container */}
                <div className="flex-1 flex flex-col p-8 sm:p-10 relative bg-[#0a0a0a] rounded-b-[40px]">
                  
                  <h3 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white mb-4 pr-16">
                    {project.name}
                  </h3>
                  <p className="text-neutral-400 text-lg leading-relaxed mb-10 flex-1 pr-12">
                    {project.desc}
                  </p>

                  <div className="flex items-center mt-auto pb-4">
                    <span className="px-4 py-2 bg-white/5 text-neutral-300 text-xs font-mono font-semibold rounded-lg border border-white/10 uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>

                  {/* Corner Action Button (Cutout style) */}
                  <a 
                    href={project.link || project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="absolute bottom-0 right-0 w-24 h-24 sm:w-28 sm:h-28 bg-emerald-500 flex items-center justify-center text-black z-20 overflow-hidden border-[8px] border-black transition-colors duration-300 group-hover:bg-emerald-400"
                    style={{
                      borderTopLeftRadius: '48px',
                      borderBottomRightRadius: '40px',
                    }}
                    aria-label={`View ${project.name}`}
                  >
                    <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 transform group-hover:scale-110 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
                
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
