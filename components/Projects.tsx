"use client";

import { motion } from "framer-motion";
import { Globe, GitBranch, Terminal, Cpu, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import WavyUnderline from "./WavyUnderline";

const projects = [
  {
    id: "01",
    name: "GSSoC Tracker",
    icon: <Globe className="w-5 h-5" />,
    desc: "A fast, personal tracker for GSSoC contributors and mentors to view PRs, labels, and track scores using the official formula. Built with Next.js and Recharts.",
    link: "https://gssoc-tracker.vercel.app/",
    github: "https://github.com/prodHOSH/gssoc-tracker",
    image: "https://opengraph.githubassets.com/1/prodHOSH/gssoc-tracker",
    tags: ["Next.js", "Recharts", "Tailwind"]
  },
  {
    id: "02",
    name: "BS Prep",
    icon: <Cpu className="w-5 h-5" />,
    desc: "A full-stack learning platform designed for the IITM BS student community. Handles authentication, course enrollment, and live session delivery.",
    link: "https://www.bsprep.com",
    github: "https://github.com/PRODHOSH/bs-prep",
    image: "https://opengraph.githubassets.com/1/PRODHOSH/bs-prep",
    tags: ["Full Stack", "Education", "Auth"]
  },
  {
    id: "03",
    name: "OSSfolio",
    icon: <GitBranch className="w-5 h-5" />,
    desc: "A free, open-source platform where every contributor gets a public profile page showing merged PRs, issues, orgs, and program participations.",
    link: "https://ossfolio.me",
    github: "https://github.com/prodHOSH/ossfolio",
    image: "https://opengraph.githubassets.com/1/prodHOSH/ossfolio",
    tags: ["Open Source", "TypeScript", "Vercel"]
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
          <h2 className="text-4xl md:text-6xl font-display tracking-tight text-white relative inline-block">
            featured projects
            <WavyUnderline className="text-emerald-500/70" />
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Building scalable web platforms, AI-powered systems, and innovative solutions. From RAG-powered document intelligence to open-source tools.
          </p>
        </motion.div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto flex flex-col gap-12 md:gap-24">
        {projects.map((project, i) => {
          return (
            <div 
              key={i}
              className="w-full"
            >
              <div className="relative w-full h-auto min-h-[550px] bg-[#030303] border border-white/10 rounded-[32px] p-6 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.8)] origin-top">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] to-transparent pointer-events-none rounded-[32px]" />
                
                {/* Left Side: Image / GitHub Photo (Small) */}
                <div className="w-full md:w-[320px] shrink-0 h-64 md:h-[200px] bg-black rounded-2xl overflow-hidden border border-white/10 relative group mt-2">
                  <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover object-top md:object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Right Side: Content */}
                <div className="w-full flex-1 flex flex-col py-2">
                  <div className="space-y-6 md:space-y-8">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white relative z-10">
                        {project.icon}
                      </div>
                      <div className="flex gap-4 relative z-20">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-3.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors border border-white/5"
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-3.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 transition-colors border border-emerald-500/20 group"
                        >
                          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-5xl font-display tracking-tight text-white">
                        {project.name}
                      </h3>
                      <p className="text-neutral-400 leading-relaxed text-base md:text-lg pr-4">
                        {project.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto pt-10">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-4 py-2 text-xs md:text-sm font-mono rounded-full bg-white/5 border border-white/10 text-neutral-300 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
