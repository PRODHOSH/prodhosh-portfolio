"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import WavyUnderline from "./WavyUnderline";
import { GitHubCalendar } from "react-github-calendar";

const projects = [
  {
    name: "GSSoC Tracker",
    desc: "A fast, personal tracker for GSSoC contributors and mentors to view PRs, labels, and track scores using the official formula. Built to provide a clearer way to understand contributions.",
    link: "https://gssoc-tracker.vercel.app/",
    github: "https://github.com/PRODHOSH/gssoc-tracker",
    image: "/images/gssoc_logo.png",
    tags: ["Next.js 15", "TypeScript", "Recharts", "Framer Motion", "Nodemailer", "Vercel"]
  },
  {
    name: "OSSfolio",
    desc: "Your open-source identity, beyond GitHub. A free, open-source platform where every contributor gets a public profile page showing merged PRs, issues, orgs, and program participations.",
    link: "https://ossfolio.me",
    github: "https://github.com/PRODHOSH/ossfolio",
    image: "/images/github-repo.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Cloudflare Pages"]
  },
  {
    name: "NBA 2026 Playoff Predictor",
    desc: "A Streamlit web app that shows the real 2026 NBA playoff bracket and lets you simulate the remaining rounds using Monte Carlo methods. Built with live data from the official NBA stats API.",
    link: "",
    github: "https://github.com/PRODHOSH/nba-playoff-predictor",
    image: "/images/projects_image.svg",
    tags: ["Python", "Streamlit", "SciPy", "Pandas", "Monte Carlo"]
  },
  {
    name: "FlashFetch",
    desc: "A Retrieval-Augmented Generation (RAG) powered document QA system. Upload PDFs, TXT, or Markdown files and ask questions in natural language. Every answer is grounded in your documents with source citations.",
    link: "https://flashfetch.app",
    github: "https://github.com/PRODHOSH/rag-document-qa-bot",
    image: "/images/cine-ai.png",
    tags: ["Next.js", "FastAPI", "FAISS", "Supabase", "Groq LLaMA 3"]
  },
  {
    name: "BS Prep - IITM BS Learning Platform",
    desc: "A full-stack learning platform designed for the IITM BS student community. Handles authentication, course enrollment, payment workflows, and live session delivery.",
    link: "https://www.bsprep.com",
    github: "https://github.com/PRODHOSH/bs-prep",
    image: "/images/prodshell.png",
    tags: ["Next.js 16", "TypeScript", "Supabase", "Razorpay", "Google Sheets API"]
  },
  {
    name: "Nallamala House - IIT Madras Official Website",
    desc: "Built and maintaining the official website for Nallamala House, IIT Madras. Central hub for house leadership, communities, blogs, updates, and events.",
    link: "https://nallamala.iitm.ac.in",
    github: "https://github.com/PRODHOSH/nallamala-website",
    image: "/images/nallamala-house.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"]
  },
  {
    name: "CodeCrafters Coding Society",
    desc: "Designed, developed, and deployed the official website for CodeCrafters Coding Society at IIT Madras BS. Central hub for events, council, domains, and community engagement.",
    link: "https://codecrafters.iitmbs.org",
    github: "https://github.com/CodeCrafters-IITMBS/code-crafters",
    image: "/images/code-crafters.png",
    tags: ["React 18", "TypeScript", "Vite", "Framer Motion", "Three.js"]
  },
  {
    name: "BB84 Quantum Simulator",
    desc: "An interactive 3D simulator demonstrating the BB84 Quantum Key Distribution protocol. Visualizes photon polarization, key generation, and eavesdropping detection in real-time.",
    link: "",
    github: "https://github.com/PRODHOSH/bb84-simulator",
    image: "/images/bb84_photo.png",
    tags: ["Qiskit", "Python", "Three.js", "Quantum Computing"]
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
            Building scalable web platforms, AI-powered systems, and innovative solutions. From RAG-powered document intelligence to quantum cryptography simulators.
          </p>
        </motion.div>
      </div>

      {/* GitHub Calendar Section */}
      <div className="w-full max-w-5xl mx-auto mb-24 flex flex-col items-center">
         <h3 className="text-2xl font-display font-semibold text-white mb-8 text-center flex items-center gap-3">
            <FaGithub className="w-6 h-6" /> GitHub Contributions
         </h3>
         <div className="p-4 md:p-8 rounded-3xl bg-[#050505] border border-white/10 shadow-[0_0_40px_rgba(16,185,129,0.05)] w-full overflow-x-auto flex justify-center hover:border-emerald-500/30 transition-colors duration-500">
            <GitHubCalendar 
              username="PRODHOSH" 
              colorScheme="dark" 
              theme={{
                light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                dark: ['#161b22', '#064e3b', '#047857', '#10b981', '#059669'],
              }}
              fontSize={14}
              blockSize={12}
              blockMargin={4}
            />
         </div>
      </div>

      {/* Grid Layout for Projects */}
      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => {
          return (
            <div 
              key={i}
              className="w-full h-full"
            >
              <div className="relative w-full h-full bg-[#050505] border border-white/10 rounded-[32px] p-6 flex flex-col shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.8)] origin-top group hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-500">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] to-transparent pointer-events-none rounded-[32px]" />
                
                {/* Top: Image */}
                <div className="w-full h-48 bg-[#0a0a0a] rounded-2xl p-6 flex items-center justify-center border border-white/10 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-auto h-auto max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out relative z-20"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col relative z-20">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-display tracking-tight text-white leading-tight">
                      {project.name}
                    </h3>
                    <div className="flex gap-2 shrink-0">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors border border-white/5"
                        >
                          <FaGithub className="w-4 h-4" />
                        </a>
                      )}
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 transition-colors border border-emerald-500/20"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-neutral-400 leading-relaxed text-sm mb-8 flex-1">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 text-[10px] sm:text-xs font-mono rounded-full bg-white/5 border border-white/10 text-emerald-400/80 uppercase tracking-wider">
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
