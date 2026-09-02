"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

export default function FloatingHireMe() {
  const [isDismissed, setIsDismissed] = useState(false);
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500) {
      setHasScrolledPastHero(true);
    } else {
      setHasScrolledPastHero(false);
    }
  });

  const isVisible = hasScrolledPastHero && !isDismissed;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30, delay: 1 }}
          className="fixed bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 z-[100] px-4 w-full max-w-fit"
        >
          <div className="bg-[#050505]/80 backdrop-blur-xl border border-white/10 p-1.5 sm:p-2 rounded-full flex items-center justify-between gap-2 sm:gap-4 md:gap-6 shadow-2xl relative mx-auto w-max max-w-[95vw]">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-transparent pointer-events-none rounded-full" />
            
            <div className="flex items-center gap-1.5 sm:gap-2 bg-emerald-500/10 border border-emerald-500/20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest">Available</span>
            </div>

            <span className="text-neutral-300 text-xs sm:text-sm font-medium hidden sm:block whitespace-nowrap">
              Looking for a passionate engineer?
            </span>

            <a 
              href="#contact" 
              className="flex items-center gap-1 sm:gap-2 bg-white text-black px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-neutral-200 transition-colors shrink-0"
            >
              Hire Me <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>

            <button 
              onClick={() => setIsDismissed(true)} 
              className="text-neutral-500 hover:text-white transition-colors mr-1 sm:mr-2 p-1 shrink-0"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
