"use client";

import { motion } from "framer-motion";
import { Code2, Database, BrainCircuit, Cloud } from "lucide-react";
import WavyUnderline from "./WavyUnderline";
import Timeline from "./Timeline";
import Typewriter from "./Typewriter";

import MagneticIcon from "./MagneticIcon";
import { 
  SiPython, SiC, SiCplusplus, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiVite, 
  SiHtml5, SiCss, SiTailwindcss, SiFastapi, SiPostgresql, SiMysql, SiSupabase, SiPrisma, 
  SiNumpy, SiPandas, SiScikitlearn, SiCloudflare, SiDigitalocean, SiDocker
} from "react-icons/si";
import { FaJava, FaAws, FaGoogle } from "react-icons/fa";

const techSkills = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: <SiPython className="w-6 h-6" /> },
      { name: "C", icon: <SiC className="w-6 h-6" /> },
      { name: "C++", icon: <SiCplusplus className="w-6 h-6" /> },
      { name: "Java", icon: <FaJava className="w-6 h-6" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-6 h-6" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" /> }
    ]
  },
  {
    category: "Web Development",
    skills: [
      { name: "React", icon: <SiReact className="w-6 h-6" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" /> },
      { name: "Vite", icon: <SiVite className="w-6 h-6" /> },
      { name: "HTML5", icon: <SiHtml5 className="w-6 h-6" /> },
      { name: "CSS3", icon: <SiCss className="w-6 h-6" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="w-6 h-6" /> }
    ]
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "FastAPI", icon: <SiFastapi className="w-6 h-6" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6" /> },
      { name: "MySQL", icon: <SiMysql className="w-6 h-6" /> },
      { name: "Supabase", icon: <SiSupabase className="w-6 h-6" /> },
      { name: "Prisma", icon: <SiPrisma className="w-6 h-6" /> }
    ]
  },
  {
    category: "Data Science & ML",
    skills: [
      { name: "NumPy", icon: <SiNumpy className="w-6 h-6" /> },
      { name: "Pandas", icon: <SiPandas className="w-6 h-6" /> },
      { name: "Scikit-Learn", icon: <SiScikitlearn className="w-6 h-6" /> }
    ]
  },
  {
    category: "Cloud & Infra",
    skills: [
      { name: "AWS", icon: <FaAws className="w-6 h-6" /> },
      { name: "Google Cloud", icon: <FaGoogle className="w-6 h-6" /> },
      { name: "Cloudflare", icon: <SiCloudflare className="w-6 h-6" /> },
      { name: "DigitalOcean", icon: <SiDigitalocean className="w-6 h-6" /> },
      { name: "Docker", icon: <SiDocker className="w-6 h-6" /> }
    ]
  }
];

export default function About() {
  return (
    <section className="w-full bg-transparent py-32 px-6 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto space-y-48">

        {/* About Me Text */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-left md:text-center space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-display tracking-tight text-white relative inline-block">
              about me
              <WavyUnderline className="text-emerald-500/70" />
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6 text-neutral-400 text-lg md:text-xl leading-relaxed">
            <p className="text-white/90 font-medium text-xl md:text-2xl mb-8 leading-normal min-h-[4rem]">
              <Typewriter text="CS Sophomore at VIT Chennai and IIT Madras BS Data Science." delay={0} />
              <br className="hidden md:block"/>
              <Typewriter text="I like building things that people actually use." delay={0.8} />
            </p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I'm interested in AI engineering and building products that can think, learn, and scale. Most of my time is spent designing and developing SaaS-style platforms, developer tools, and software solutions for businesses, communities, and organizations.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Over the past few years, I've worked on <strong className="text-white">7+ freelance projects</strong>, built products used by thousands of users, contributed to open source, and launched everything from learning platforms and analytics tools to AI-powered applications.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              I enjoy working across the entire stack, from UI and user experience to architecture, databases, APIs, performance, SEO, and system design. Currently, I'm focused on full stack development, AI products, and becoming a better engineer with every project I build.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6"
            >
              If you're building something interesting, looking for a collaborator, or looking to hire, feel free to reach out at <a href="mailto:hello@prodhosh.me" className="text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-4 decoration-emerald-500/30">hello@prodhosh.me</a>.
            </motion.p>
          </div>
        </div>

        {/* Experience - Horizontal Timeline */}
        <div className="space-y-24 pt-16" id="experience">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-display tracking-tight text-white relative inline-block">
              experience
              <WavyUnderline className="text-emerald-500/70" />
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto mt-6">
              My professional journey building software for startups, communities, and companies.
            </p>
          </motion.div>

          <div className="mt-16">
            <Timeline />
          </div>
        </div>

        {/* Technical Skills */}
        <div className="space-y-16 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-left md:text-center space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-display tracking-tight text-white relative inline-block">
              technical arsenal
              <WavyUnderline className="text-emerald-500/70" />
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
            {techSkills.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col group hover:border-emerald-500/30 hover:bg-emerald-500/[0.02] transition-colors"
              >
                <h3 className="text-2xl font-display tracking-tight text-neutral-400 group-hover:text-emerald-400 transition-colors duration-300 mb-8">
                  {section.category}
                </h3>
                
                <div className="flex flex-wrap gap-4 mt-auto">
                  {section.skills.map((skill, idx) => (
                    <MagneticIcon key={idx} name={skill.name}>
                      {skill.icon}
                    </MagneticIcon>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
