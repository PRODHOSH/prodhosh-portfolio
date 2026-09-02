"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Code, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
      setIsMenuOpen(false);
    }
  });

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "fixed top-0 inset-x-0 z-[60] flex justify-center pointer-events-none transition-all duration-300",
          isScrolled ? "mt-0 px-0" : "mt-6 px-4"
        )}
      >
        <motion.div
          animate={{
            width: isScrolled ? "100%" : "auto",
            borderRadius: isScrolled ? "0px" : "9999px",
            backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.95)" : "rgba(10, 10, 10, 0.4)",
            backdropFilter: "blur(12px)",
            borderColor: isScrolled ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.1)",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={cn(
            "pointer-events-auto flex items-center justify-between gap-8 md:gap-16 py-3 border-b md:border shadow-[0_0_30px_rgba(0,0,0,0.5)] relative",
            isScrolled ? "px-8 w-full" : "px-6 border-white/10"
          )}
        >
          <div className="flex items-center gap-3">
            <img src="/favicon.png" alt="Logo" className="w-7 h-7 md:w-8 md:h-8 object-cover rounded-full" />
            <span className="font-display text-base tracking-tight text-white">
              Prodhosh VS
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Always show links on desktop */}
            <div className="hidden lg:flex items-center gap-8 mr-4">
              <Link href="/" className="text-sm text-neutral-400 hover:text-white transition-colors">Home</Link>
              <Link href="/services" className="text-sm text-neutral-400 hover:text-white transition-colors">Services</Link>
              <Link href="/projects" className="text-sm text-neutral-400 hover:text-white transition-colors">Projects</Link>
              <Link href="/experience" className="text-sm text-neutral-400 hover:text-white transition-colors">Experience</Link>
              <Link href="/contact" className="text-sm text-neutral-400 hover:text-white transition-colors">Contact</Link>
            </div>

            <a href="/latest_resume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-neutral-200 transition-colors hidden md:block">
              Resume
            </a>

            {/* Hamburger Menu Toggle (Mobile only) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors lg:hidden"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </motion.div>
      </motion.header>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden bg-[#050505] flex flex-col pt-32 pb-12 px-6"
          >
            <div className="flex flex-col gap-10 flex-1 items-center justify-center text-center">
              {[
                { label: "HOME", href: "/" },
                { label: "SERVICES", href: "/services" },
                { label: "PROJECTS", href: "/projects" },
                { label: "EXPERIENCE", href: "/experience" },
                { label: "CONTACT", href: "/contact" }
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="text-4xl sm:text-5xl font-display font-bold text-white tracking-widest hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </motion.div>
                </Link>
              ))}
            </div>

            <motion.a
              href="/latest_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-emerald-500 text-black px-6 py-5 rounded-full font-medium text-lg tracking-wide hover:bg-emerald-400 transition-colors mt-auto flex items-center justify-center gap-2"
            >
              RESUME
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
