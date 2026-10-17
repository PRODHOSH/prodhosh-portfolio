"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { gsap, motion, reducedMotion, ScrollTrigger, setupGsap } from "./motion";
import { Cursor, Loader, Nav } from "./Chrome";
import Hero from "./Hero";
import Contact from "./Contact";
import Chat from "./Chat";
import { About, Faq, Footer, Process, Ribbon, Services, Skills, Story, Work } from "./Sections";

export default function Studio() {
  const [ready, setReady] = useState(false);
  const lenis = useRef<Lenis | null>(null);
  const done = useCallback(() => { gsap.ticker.lagSmoothing(0); setReady(true); }, []);

  useEffect(() => {
    setupGsap();
    const l = new Lenis({ lerp: 0.09, smoothWheel: !reducedMotion() });
    lenis.current = l;
    l.stop(); // locked until the loader hands over
    l.on("scroll", (e: Lenis) => { motion.velocity = e.velocity; ScrollTrigger.update(); });
    const tick = (t: number) => l.raf(t * 1000);
    gsap.ticker.add(tick);

    const onClick = (e: MouseEvent) => {
      const trigger = (e.target as HTMLElement).closest<HTMLElement>("[data-contact]");
      if (trigger) {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent("contact:open"));
        return;
      }
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      e.preventDefault();
      const href = a.getAttribute("href")!;
      l.scrollTo(href === "#top" ? 0 : href, { duration: 1.5 });
    };
    document.addEventListener("click", onClick);
    const onToggle = (e: Event) => {
      const isOpen = (e as CustomEvent<{ open: boolean }>).detail.open;
      document.documentElement.style.overflow = isOpen ? "hidden" : "";
      if (isOpen) l.stop(); else l.start();
    };
    window.addEventListener("contact:toggle", onToggle);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      gsap.ticker.remove(tick);
      l.destroy();
      document.removeEventListener("click", onClick);
      window.removeEventListener("contact:toggle", onToggle);
      window.removeEventListener("load", refresh);
    };
  }, []);

  useEffect(() => {
    if (ready) lenis.current?.start();
  }, [ready]);

  return (
    <>
      <Loader onDone={done} />
      <Cursor />
      <Nav />
      <Contact />
      <Chat />
      <main>
        <Hero ready={ready} />
        <Ribbon />
        <About />
        <Services />
        <Work />
        <Process />
        <Story />
        <Skills />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
