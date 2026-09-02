"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function MagneticIcon({ children, name }: { children: React.ReactNode, name: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="relative group/icon flex flex-col items-center">
      <motion.div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="p-4 rounded-xl bg-white/5 border border-white/10 text-neutral-500 hover:text-white hover:bg-white/10 hover:border-white/30 transition-colors cursor-pointer flex items-center justify-center relative z-10"
      >
        {children}
      </motion.div>
      <span className="absolute -bottom-6 opacity-0 group-hover/icon:opacity-100 transition-opacity text-[10px] font-mono text-neutral-400 tracking-wider pointer-events-none whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}
