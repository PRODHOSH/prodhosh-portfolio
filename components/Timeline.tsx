"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Cpu, Terminal, Briefcase } from "lucide-react";

const experienceData = [
  {
    role: "Software Engineer Intern",
    company: "Annexra",
    period: "Aug 2026 - Present",
    type: "Internship · Remote",
    icon: <Code2 className="w-5 h-5" />,
    description: "Developing robust full-stack applications and architecting scalable backend systems for enterprise clients.",
    details: []
  },
  {
    role: "Next.js Developer Intern",
    company: "Sindra",
    period: "Jul 2026 - Present",
    type: "Internship · Remote",
    icon: <Terminal className="w-5 h-5" />,
    description: "Building dynamic, high-performance web applications and internal tools using Next.js, TypeScript, and Tailwind CSS.",
    details: []
  },
  {
    role: "Founding Engineer",
    company: "BS Prep",
    period: "Jan 2026 - Present",
    type: "Part-time · Remote",
    icon: <Cpu className="w-5 h-5" />,
    description: "Leading technical development and product growth of BSPrep, driving platform architecture, product strategy, and engineering execution from end to end.",
    details: []
  },
  {
    role: "Developer Intern",
    company: "EnlightEd",
    period: "Jun 2026 - Jul 2026",
    type: "Internship · Remote",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Contributed to frontend development and UI/UX enhancements for an emerging ed-tech platform.",
    details: []
  }
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto py-10">
      {/* Vertical Line Background */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 transform md:-translate-x-1/2" />
      
      {/* Animated Vertical Line Fill */}
      <motion.div 
        className="absolute left-8 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-emerald-400 to-emerald-600 transform md:-translate-x-1/2"
        style={{ height: lineHeight }}
      />

      {experienceData.map((item, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <div key={index} className="relative flex items-start md:justify-between w-full mb-16 last:mb-0 group">
            
            {/* Center Icon */}
            <div className="absolute left-8 md:left-1/2 w-10 h-10 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center transform -translate-x-1/2 mt-1 z-10 group-hover:border-emerald-500 group-hover:text-emerald-400 transition-colors duration-300">
              {item.icon}
            </div>

            {/* Desktop Left Content (Empty for Odd) */}
            <div className={`hidden md:block w-[45%] pr-12 text-right ${!isEven ? 'opacity-0' : ''}`}>
              {isEven && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{item.role}</h3>
                  <p className="text-emerald-500 font-medium mb-3">{item.company}</p>
                  <div className="text-neutral-500 text-sm font-mono mb-4">{item.period} • {item.type}</div>
                  <p className="text-neutral-400 leading-relaxed text-sm">{item.description}</p>
                  
                  {item.details.length > 0 && (
                    <ul className="mt-4 space-y-2 text-sm text-neutral-400 text-left md:text-right list-inside">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start md:justify-end gap-2">
                          <span className="hidden md:block flex-1">{detail}</span>
                          <span className="text-emerald-500/50 hidden md:block">•</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              )}
            </div>

            {/* Desktop Right Content (Empty for Even) / Mobile Content (Always Right) */}
            <div className={`w-full pl-20 md:w-[45%] md:pl-12 ${isEven ? 'md:opacity-0' : ''}`}>
              {(!isEven || true) && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className={isEven ? 'md:hidden' : ''}
                >
                  <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{item.role}</h3>
                  <p className="text-emerald-500 font-medium mb-3">{item.company}</p>
                  <div className="text-neutral-500 text-sm font-mono mb-4">{item.period} • {item.type}</div>
                  <p className="text-neutral-400 leading-relaxed text-sm">{item.description}</p>
                  
                  {item.details.length > 0 && (
                    <ul className="mt-4 space-y-2 text-sm text-neutral-400 text-left list-inside">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-500/50 mt-1">•</span>
                          <span className="flex-1">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              )}
            </div>
            
          </div>
        );
      })}
    </div>
  );
}
