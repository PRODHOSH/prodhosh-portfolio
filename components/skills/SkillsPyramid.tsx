"use client";

import { motion } from "framer-motion";
import { flatSkills } from "./skillsData";

export default function SkillsPyramid() {
  // We have exactly 25 skills.
  // A perfect pyramid sequence: 1 + 3 + 5 + 7 + 9 = 25.
  const rows = [
    flatSkills.slice(0, 1),
    flatSkills.slice(1, 4),
    flatSkills.slice(4, 9),
    flatSkills.slice(9, 16),
    flatSkills.slice(16, 25)
  ];

  return (
    <div className="w-full flex justify-center py-20 relative">
      {/* Background soft glow to make it premium */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="flex flex-col items-center gap-3 sm:gap-6 md:gap-10 z-10 relative">
        {rows.map((row, i) => (
          <div key={i} className="flex justify-center gap-3 sm:gap-6 md:gap-10 lg:gap-14">
            {row.map((skill, j) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={j}
                  // Top down cascading entrance
                  initial={{ opacity: 0, y: -30, filter: "grayscale(100%) brightness(0.5)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "grayscale(0%) brightness(1)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.8,
                    delay: i * 0.15 + j * 0.05, 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 15 
                  }}
                  className="flex flex-col items-center justify-center group cursor-pointer relative"
                >
                  <Icon 
                    // Responsive sizes: extremely small on mobile (w-8) to fit 9 items, up to w-24 on large screens
                    className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl" 
                    color={skill.color} 
                  />
                  <span 
                    className="absolute -bottom-6 md:-bottom-8 opacity-0 group-hover:opacity-100 text-[8px] sm:text-[10px] md:text-sm font-mono font-bold transition-opacity whitespace-nowrap tracking-wide"
                    style={{ color: skill.color }}
                  >
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
