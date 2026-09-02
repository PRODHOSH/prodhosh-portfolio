"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

export default function Metrics() {
  return (
    <section className="w-full bg-transparent py-32 px-6 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-emerald-500/5 blur-[120px] rounded-full scale-150 transform -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center text-center space-y-4 group"
          >
            <h2 className="text-7xl md:text-8xl font-display tracking-tighter text-white group-hover:scale-105 transition-transform duration-500">
              <AnimatedCounter value={15} />+
            </h2>
            <div className="space-y-2 flex flex-col items-center">
              <h3 className="text-xl font-display tracking-tight text-emerald-400">
                Projects Completed
              </h3>
              <p className="text-neutral-500 text-base leading-relaxed max-w-[250px]">
                Ranging from AI systems to full-stack platforms.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center justify-center text-center space-y-4 group"
          >
            <h2 className="text-7xl md:text-8xl font-display tracking-tighter text-white group-hover:scale-105 transition-transform duration-500">
              <AnimatedCounter value={50} />+
            </h2>
            <div className="space-y-2 flex flex-col items-center">
              <h3 className="text-xl font-display tracking-tight text-emerald-400">
                Open Source Contributions
              </h3>
              <p className="text-neutral-500 text-base leading-relaxed max-w-[250px]">
                Merged PRs across global OSS programs.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center text-center space-y-4 group"
          >
            <h2 className="text-7xl md:text-8xl font-display tracking-tighter text-white group-hover:scale-105 transition-transform duration-500">
              <AnimatedCounter value={5} />
            </h2>
            <div className="space-y-2 flex flex-col items-center">
              <h3 className="text-xl font-display tracking-tight text-emerald-400">
                Professional Experiences
              </h3>
              <p className="text-neutral-500 text-base leading-relaxed max-w-[250px]">
                Internships and freelance roles delivering production code.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
