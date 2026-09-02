"use client";

import { motion } from "framer-motion";

export default function Typewriter({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  // Split by words instead of characters to avoid breaking layouts and to make the animation smoother
  const words = text.split(" ");
  
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.2, delay: delay + (i * 0.05) }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
