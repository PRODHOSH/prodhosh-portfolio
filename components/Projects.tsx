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
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px", // Trigger strictly in the center
        threshold: 0,
      }
    );

    const projectElements = document.querySelectorAll(".project-card");
    projectElements.forEach((el) => observer.observe(el));

    return () => {
      projectElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

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
            className="flex flex-col gap-6"
          >
            <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden bg-neutral-900 border border-white/5">
              <Image 
                src={project.image} 
                alt={project.name} 
                fill
                className="object-cover object-top"
              />
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-emerald-500 font-mono font-bold text-lg">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
                <h3 className="text-3xl font-display font-bold text-white">
                  {project.name}
                </h3>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 text-neutral-300 text-xs font-mono rounded-lg uppercase tracking-widest">
                  {project.category}
                </span>
              </div>
              
              <p className="text-neutral-400 text-lg leading-relaxed">
                {project.desc}
              </p>
              
              <a 
                href={project.link || project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-emerald-400 font-semibold mt-2"
              >
                View Project <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* DESKTOP LAYOUT (Sticky + Scroll) */}
      <div 
        className="hidden lg:flex max-w-[1400px] mx-auto px-12 relative items-start pb-40 pt-20"
        ref={containerRef}
      >
        
        {/* Left Side: Sticky Listings */}
        <div className="w-[45%] sticky top-[10vh] h-[80vh] flex flex-col justify-center pr-16 z-10">
          
          <h2 className="text-6xl xl:text-7xl font-black font-display tracking-tighter text-white mb-16 relative inline-block w-fit">
            Featured <br/>
            <span className="text-emerald-500 relative">
              Projects
              <div className="absolute -bottom-2 left-0 right-0">
                <WavyUnderline className="text-emerald-500/70" />
              </div>
            </span>
            
            {/* Ambient glow behind title */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-32 h-32 bg-emerald-500/20 blur-[100px] -z-10 rounded-full" />
          </h2>

          <div className="relative h-[450px] w-full mt-8">
            {projects.map((project, index) => {
              const isActive = activeIndex === index;
              const isPast = index < activeIndex;
              
              return (
                <div
                  key={index}
                  className="absolute inset-0 flex flex-col gap-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: `translateY(${isActive ? 0 : isPast ? -40 : 40}px)`,
                    pointerEvents: isActive ? 'auto' : 'none',
                    visibility: Math.abs(index - activeIndex) > 1 ? 'hidden' : 'visible'
                  }}
                >
                  <div className="flex items-center gap-6">
                    <span className="text-3xl font-mono font-bold text-emerald-500">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <h3 className="text-5xl xl:text-6xl font-display font-bold text-white tracking-tight">
                      {project.name}
                    </h3>
                  </div>
                  
                  <div className="pl-16 pr-8">
                    <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold rounded-lg uppercase tracking-widest mb-6">
                      {project.category}
                    </span>
                    <p className="text-neutral-300 text-xl leading-relaxed mb-10">
                      {project.desc}
                    </p>
                    
                    <a 
                      href={project.link || project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-2 text-black bg-white hover:bg-emerald-400 px-6 py-3 rounded-full font-bold transition-colors group/btn shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                    >
                      View Project
                      <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        {/* Right Side: Scrolling Cards */}
        <div className="w-[55%] py-[20vh] flex flex-col gap-[30vh]">
          {projects.map((project, i) => (
            <div 
              key={i} 
              data-index={i} 
              className="project-card relative w-full aspect-[4/3] xl:aspect-[16/11] rounded-[40px] overflow-hidden shadow-2xl border border-white/10 group bg-neutral-900"
            >
              {/* Image Parallax Effect Wrapper */}
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                <Image 
                  src={project.image} 
                  alt={project.name} 
                  fill
                  sizes="(max-width: 1400px) 50vw, 800px"
                  className="object-cover object-top"
                />
              </div>
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              
              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none rounded-[40px]"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

