"use client";

import { motion } from "framer-motion";
import { Globe, GitBranch, Terminal, Cpu, ArrowUpRight } from "lucide-react";
import WavyUnderline from "./WavyUnderline";

const projects = [
  {
    id: "01",
    name: "GSSoC Tracker",
    icon: <Globe className="w-5 h-5" />,
    desc: "A fast, personal tracker for GSSoC contributors and mentors to view PRs, labels, and track scores using the official formula. Built with Next.js and Recharts.",
    link: "https://gssoc-tracker.vercel.app/",
    tags: ["Next.js", "Recharts", "Tailwind"]
  },
  {
    id: "02",
    name: "OSSfolio",
    icon: <GitBranch className="w-5 h-5" />,
    desc: "A free, open-source platform where every contributor gets a public profile page showing merged PRs, issues, orgs, and program participations.",
    link: "https://ossfolio.me",
    tags: ["Open Source", "TypeScript", "Vercel"]
  },
  {
    id: "03",
    name: "FlashFetch",
    icon: <Terminal className="w-5 h-5" />,
    desc: "A Retrieval-Augmented Generation (RAG) powered document QA system. Upload PDFs or Markdown and ask questions in natural language. Powered by LLaMA 3.",
    link: "https://flashfetch.app",
    tags: ["AI", "RAG", "LLaMA 3"]
  },
  {
    id: "04",
    name: "BS Prep",
    icon: <Cpu className="w-5 h-5" />,
    desc: "A full-stack learning platform designed for the IITM BS student community. Handles authentication, course enrollment, and live session delivery.",
    link: "https://www.bsprep.com",
    tags: ["Full Stack", "Education", "Auth"]
  }
];

export default function Projects() {
  return (
    <section className="w-full bg-transparent py-32 px-6 overflow-hidden relative" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24 space-y-6"
        >
          <h2 className="text-4xl md:text-6xl font-display tracking-tight text-white relative inline-block">
            featured projects
            <WavyUnderline className="text-emerald-500/70" />
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Building scalable web platforms, AI-powered systems, and innovative solutions. From RAG-powered document intelligence to open-source tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="group relative block rounded-3xl"
            >
              {/* Animated Border Gradient */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-[24px] opacity-100 group-hover:from-emerald-500/50 transition-colors duration-500" />
              
              <div className="relative h-full bg-[#030303]/80 backdrop-blur-xl p-8 rounded-[24px] flex flex-col justify-between overflow-hidden shadow-2xl">
                
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div>
                  <div className="w-full flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-emerald-500/20 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all duration-300 relative z-10">
                      {project.icon}
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-neutral-600 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>

                  <h3 className="text-2xl font-display tracking-tight text-white mb-4 group-hover:text-emerald-400 transition-colors relative z-10">
                    {project.name}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed text-sm relative z-10 mb-8">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-neutral-300 uppercase tracking-wider group-hover:border-white/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
