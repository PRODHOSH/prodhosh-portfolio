"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the loader after 2.6 seconds to allow animations to finish
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2600);
    return () => clearTimeout(timer);
  }, []);

  const text = "Prodhosh VS";
  
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center pointer-events-auto"
        >
          <motion.div 
            className="flex flex-col items-center gap-8"
          >
            {/* Favicon Logo */}
            <motion.img 
              src="/favicon.png" 
              alt="Logo" 
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
            
            {/* Typing Effect Text */}
            <div className="flex overflow-hidden h-12">
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.08, duration: 0.4, ease: "easeOut" }}
                  className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
            
            {/* Loading Bar */}
            <motion.div 
              className="w-48 md:w-64 h-[2px] bg-white/10 rounded-full mt-4 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div 
                className="h-full bg-emerald-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
