"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Calendar } from "lucide-react";
import WavyUnderline from "./WavyUnderline";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Background Video - No overlays for maximum clarity */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          src="/hero-section.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-100"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md mb-8"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span className="text-sm text-neutral-200 font-medium">Full Stack Developer & AI Engineer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-[110px] leading-[0.95] tracking-tight font-display mb-8 drop-shadow-2xl"
        >
          Prodhosh <span className="text-neutral-400">VS</span><br />
          <span className="relative text-neutral-400 inline-block">
            thecodeguy
            <WavyUnderline animate />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-300 max-w-2xl font-sans mb-12 drop-shadow-lg"
        >
          A passionate individual who always thrives to work on end-to-end products which develop sustainable and scalable social and technical systems to create impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >

          <motion.a
            href="/latest_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-8 py-4 rounded-full font-medium text-base text-white border border-white/20 hover:bg-white/10 transition-colors"
          >
            View Resume <ArrowUpRight className="w-5 h-5" />
          </motion.a>
          
          <motion.button
            data-cal-namespace="15min"
            data-cal-link="itzprodhosh/15min"
            data-cal-config='{"layout":"month_view"}'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-8 py-4 rounded-full font-medium text-base border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
          >
            Book a Call <Calendar className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
