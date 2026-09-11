"use client";

import { useState } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import WavyUnderline from "./WavyUnderline";
import Timeline from "./Timeline";
import Typewriter from "./Typewriter";
import SkillsPyramid from "./skills/SkillsPyramid";
import Image from "next/image";
import dynamic from "next/dynamic";

// Fix hydration mismatch for GitHub Calendar by loading it only on the client
const GitHubCalendar = dynamic(() => import("react-github-calendar").then((mod) => mod.GitHubCalendar), { 
  ssr: false,
  loading: () => <div className="h-[150px] w-full animate-pulse bg-white/5 rounded-xl"></div>
});

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

export default function About() {
  const [selectedYear, setSelectedYear] = useState<number | 'last'>('last');
  const years: (number | 'last')[] = ['last', 2024, 2023];
  return (
    <section className="w-full bg-transparent py-32 px-6" id="about">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* ABOUT SECTION: Left Photo, Right Text */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          {/* Left Side: Sticky Photo sliding in from left */}
          <div className="lg:w-[350px] shrink-0 relative z-10 w-full">
            <div className="sticky top-32 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", type: "spring", bounce: 0.4 }}
                className="relative group rounded-[32px] overflow-hidden aspect-[4/5] border border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.1)] bg-[#050505]"
              >
                <Image 
                  src="/prodhosh_photo.jpeg"
                  alt="Prodhosh"
                  fill
                  sizes="(max-width: 1024px) 100vw, 350px"
                  className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                  priority
                />
                <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex justify-start"
              >
                <a 
                  href="/latest_resume.pdf" 
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 px-8 text-center border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black font-bold tracking-widest transition-all duration-300 rounded-2xl hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                >
                  VIEW RESUME
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Scrollable Content (About, Heatmap, Email) */}
          <div className="lg:flex-1 space-y-24 pr-0 lg:pr-12 pt-8 lg:pt-0">
            
            {/* About Me Text */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-left space-y-4 relative"
              >
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white capitalize relative inline-block font-display">
                  About Me
                  <WavyUnderline className="text-emerald-500/70" />
                </h2>
              </motion.div>

              <div className="space-y-12 text-neutral-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                <p className="text-white/90 font-medium text-xl md:text-2xl leading-normal min-h-[4rem]">
                  <Typewriter text="CS Sophomore at VIT Chennai and IIT Madras BS Data Science." delay={0} />
                  <br className="hidden md:block"/>
                  <Typewriter text="I like building things that people actually use." delay={0.8} />
                </p>
                
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <p>
                    I'm interested in AI engineering and building products that can think, learn, and scale. Most of my time is spent designing and developing SaaS-style platforms, developer tools, and software solutions for businesses, communities, and organizations.
                  </p>
                  <p>
                    Over the past few years, I've worked on <strong className="text-white">7+ freelance projects</strong>, built products used by thousands of users, contributed to open source, and launched everything from learning platforms and analytics tools to AI-powered applications.
                  </p>
                  <p>
                    I enjoy working across the entire stack, from UI and user experience to architecture, databases, APIs, performance, SEO, and system design. Currently, I'm focused on full stack development, AI products, and becoming a better engineer with every project I build.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* GitHub Heatmap */}
            <div className="space-y-8 pt-12 border-t border-white/5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-left"
              >
                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                   <h3 className="text-3xl md:text-4xl font-display font-bold text-white">Days I Code</h3>
                   <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 w-max">
                     {years.map((year) => (
                       <button
                         key={year}
                         onClick={() => setSelectedYear(year)}
                         className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                           selectedYear === year 
                           ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]' 
                           : 'text-neutral-400 hover:text-white hover:bg-white/5'
                         }`}
                       >
                         {year === 'last' ? 'Last Year' : year}
                       </button>
                     ))}
                   </div>
                 </div>
                 <div className="relative group w-full">
                   <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-[24px] md:rounded-[32px] blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                   <div className="relative p-4 md:p-8 rounded-[24px] md:rounded-[32px] bg-[#050505] border border-white/10 shadow-2xl w-full hover:border-white/20 transition-colors duration-300 overflow-hidden [&_article]:w-full [&_svg]:w-full [&_svg]:h-auto [&_.react-activity-calendar]:w-full">
                     <GitHubCalendar 
                       username="PRODHOSH" 
                       colorScheme="dark"
                       year={selectedYear}
                       theme={{
                         dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
                       }}
                     />
                   </div>
                 </div>
              </motion.div>
            </div>

            {/* Email Contact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-12 border-t border-white/5"
            >
              <p className="text-lg md:text-xl text-neutral-400 mb-6 max-w-2xl">
                If you're building something interesting, looking for a collaborator, or looking to hire:
              </p>
              <a 
                href="mailto:hello@prodhosh.me" 
                className="text-white hover:text-emerald-400 transition-colors text-3xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight inline-flex items-center gap-4 group"
              >
                hello@prodhosh.me
                <span className="text-emerald-500 font-mono text-3xl md:text-5xl group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300">↗</span>
              </a>
            </motion.div>

          </div>
        </div>

        {/* FULL WIDTH: What I Do Section */}
        <div className="space-y-16 pt-16 border-t border-white/5" id="what-i-do">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center md:text-left space-y-4 relative"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white capitalize relative inline-block font-display">
              What I Do
              <WavyUnderline className="text-emerald-500/70" />
            </h2>
          </motion.div>
          
          <div className="flex flex-col w-full border-t border-white/10 mt-12">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border-b border-white/10 hover:border-emerald-500/30 transition-colors duration-500 bg-transparent"
              >
                <div className="w-full py-8 md:py-12 flex flex-col cursor-default">
                  
                  {/* Visible Title Row */}
                  <div className="flex items-center justify-between w-full relative z-10 pr-2 md:pr-4">
                    <div className="flex items-center gap-6 md:gap-12">
                      <span className="text-5xl md:text-7xl font-black font-display text-neutral-500 group-hover:text-emerald-500/20 transition-colors duration-500 shrink-0">
                        {service.id}
                      </span>
                      <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-neutral-300 group-hover:text-white transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-4">
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Animated Arrow -> Cross Icon */}
                    <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-colors duration-500 shrink-0 overflow-hidden">
                      {/* Arrow */}
                      <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-full group-hover:opacity-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-6 h-6 md:w-8 md:h-8">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </div>
                      {/* Cross */}
                      <div className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:opacity-100">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black w-6 h-6 md:w-8 md:h-8 rotate-45">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Content (Grid Rows trick for smooth height animation) */}
                  <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                    <div className="overflow-hidden">
                      <div className="pt-8 md:pl-[10rem]">
                        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-3xl mb-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 ease-[cubic-bezier(0.23,1,0.32,1)]">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2 md:gap-3 pb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 ease-[cubic-bezier(0.23,1,0.32,1)]">
                          {service.tags.map((tag, idx) => (
                            <span 
                              key={idx} 
                              className="px-4 py-2 text-xs font-mono font-semibold rounded-lg bg-white/5 border border-white/10 text-neutral-300 uppercase tracking-wider group-hover:border-emerald-500/30 transition-colors"
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

        {/* FULL WIDTH: Experience */}
        <div className="space-y-16 pt-16 border-t border-white/5" id="experience">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center md:text-left space-y-4"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white capitalize relative inline-block font-display">
              Experience
              <WavyUnderline className="text-emerald-500/70" />
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mt-6">
              My professional journey building software for startups, communities, and companies.
            </p>
          </motion.div>

          <div className="w-full mt-12">
            <Timeline />
          </div>
        </div>

        {/* FULL WIDTH: Technical Skills */}
        <div className="space-y-16 pt-16 border-t border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center space-y-4"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white capitalize relative inline-block font-display">
              Technical Arsenal
              <WavyUnderline className="text-emerald-500/70" />
            </h2>
          </motion.div>

          <div className="w-full mt-12">
            <SkillsPyramid />
          </div>
        </div>

      </div>
    </section>
  );
}
