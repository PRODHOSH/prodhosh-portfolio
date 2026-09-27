"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import WavyUnderline from "./WavyUnderline";

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
  },
  {
    name: "Kivo",
    category: "DESKTOP AI",
    desc: "tell your computer simply. Kivo is a lightning-fast, privacy-first desktop voice assistant that automates your OS workflows using local LLMs and Whisper.net.",
    link: "#",
    github: "https://github.com/PRODHOSH/kivo",
    image: "/projects/kivo-screenshot.png",
  },
  {
    name: "Relay",
    category: "PRODUCTIVITY",
    desc: "The local-first document and email engine. Generate dynamic LaTeX PDFs and dispatch bulk emails directly from your machine.",
    link: "#",
    github: "https://github.com/PRODHOSH/relay",
    image: "/projects/relay-screenshot.png",
  },
  {
    name: "Vector",
    category: "TASK MANAGEMENT",
    desc: "A modern, kanban-driven task management operating system built specifically for students. Replaces the chaos of scattered notes with a fluid interface, calendar sync, and smart integrations.",
    link: "#",
    github: "https://github.com/PRODHOSH/vector",
    image: "/projects/vector-screenshot.png",
  }
];

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateScrollRange = () => {
      if (scrollRef.current) {
        setScrollRange(scrollRef.current.scrollWidth - window.innerWidth);
      }
    };
    
    updateScrollRange();
    window.addEventListener("resize", updateScrollRange);
    return () => window.removeEventListener("resize", updateScrollRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map scroll progress exactly to the remaining width
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section className="w-full bg-transparent relative z-10" id="projects">
      
      {/* MOBILE LAYOUT (Stacked) */}
      <div className="lg:hidden pt-24 pb-24 px-6 flex flex-col gap-16">
        <div className="text-center">
          <h2 className="text-5xl font-black font-display text-white mb-4 relative inline-block">
            Featured Projects
            <WavyUnderline className="text-emerald-500/70" />
          </h2>
          <p className="text-neutral-400 mt-6">
            A selection of my recent work and personal projects.
          </p>
        </div>
        
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-6 bg-neutral-900/40 p-5 rounded-[32px] border border-white/5"
          >
            <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-transparent">
              <Image 
                src={project.image} 
                alt={project.name} 
                fill
                className={["Kivo", "Relay", "Vector"].includes(project.name) ? "object-contain" : "object-cover object-top"}
              />
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-display font-bold text-white">
                    {project.name}
                  </h3>
                  <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest mt-1 block">
                    {project.category}
                  </span>
                </div>
                <span className="text-neutral-600 font-mono text-xl font-bold">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
              </div>
              
              <p className="text-neutral-400 text-base leading-relaxed">
                {project.desc}
              </p>
              
              <div className="flex flex-col gap-3 mt-2">
                <a 
                  href={project.link !== "#" ? project.link : project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full py-3.5 bg-white text-black text-center rounded-xl font-bold hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  Live Demo <ArrowUpRight className="w-4 h-4" />
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full py-3.5 bg-white/5 text-white border border-white/10 text-center rounded-xl font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  Source Code <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* DESKTOP LAYOUT (Horizontal Scroll) */}
      <div 
        className="hidden lg:block h-[400vh] relative"
        ref={targetRef}
      >
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          
          <div className="pl-12 lg:pl-24 mb-16 relative z-10">
            <h2 className="text-6xl xl:text-7xl font-black font-display tracking-tighter text-white relative inline-block">
              Featured <span className="text-emerald-500">Projects</span>
              <div className="absolute -bottom-4 left-0 right-0">
                <WavyUnderline className="text-emerald-500/70" />
              </div>
            </h2>
            <p className="text-neutral-400 mt-8 text-xl max-w-lg leading-relaxed">
              A selection of my recent work, SaaS platforms, and open-source contributions.
            </p>
          </div>

          <motion.div ref={scrollRef} style={{ x }} className="flex gap-8 pl-12 lg:pl-24 pr-[10vw] w-max">
            {projects.map((project, i) => (
              <div 
                key={i}
                className="w-[450px] xl:w-[550px] shrink-0 flex flex-col gap-6 bg-[#0a0a0a] p-6 rounded-[32px] border border-white/10 hover:border-emerald-500/30 hover:bg-[#0f0f0f] transition-colors duration-500 group shadow-2xl"
              >
                {/* Image */}
                <div className="w-full aspect-[16/10] rounded-[24px] overflow-hidden relative bg-transparent">
                  <Image 
                    src={project.image} 
                    alt={project.name} 
                    fill
                    className={`${["Kivo", "Relay", "Vector"].includes(project.name) ? "object-contain" : "object-cover object-top"} transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105`}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                {/* Info */}
                <div className="flex flex-col gap-4 flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl xl:text-4xl font-display font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                        {project.name}
                      </h3>
                      <span className="text-emerald-500/80 font-mono text-sm uppercase tracking-widest mt-1 block font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <span className="text-neutral-700 font-mono text-3xl font-black opacity-50 group-hover:text-emerald-500/30 transition-colors">
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  
                  <p className="text-neutral-400 leading-relaxed min-h-[5rem]">
                    {project.desc}
                  </p>
                  
                  {/* Links */}
                  <div className="mt-auto pt-6 flex gap-3">
                    <a 
                      href={project.link !== "#" ? project.link : project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex-1 py-3.5 px-4 bg-white text-black text-center rounded-xl font-bold hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 group/btn"
                    >
                      Live Demo 
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex-1 py-3.5 px-4 bg-white/5 text-white border border-white/10 text-center rounded-xl font-bold hover:bg-white/10 hover:border-white/20 transition-colors flex items-center justify-center gap-2 group/btn2"
                    >
                      GitHub 
                      <ArrowUpRight className="w-4 h-4 group-hover/btn2:translate-x-0.5 group-hover/btn2:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

