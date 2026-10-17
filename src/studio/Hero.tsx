"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { gsap, ScrollTrigger, SplitText, reducedMotion, setupGsap } from "./motion";
import { Asterisk, Loop } from "./Doodles";

export default function Hero({ ready }: { ready: boolean }) {
  const root = useRef<HTMLElement>(null);
  const intro = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    setupGsap();
    const reduce = reducedMotion();
    const fine = window.matchMedia("(pointer: fine)").matches;
    const ctx = gsap.context(() => {
      const split = SplitText.create(".hero-title .ln", { type: "chars" });

      // Everything starts hidden; the intro timeline plays once the loader hands over.
      gsap.set(split.chars, { yPercent: 120 });
      gsap.set(".hero .pill", { scale: 0, rotate: 0 });
      gsap.set(".portrait", { yPercent: 105 });
      gsap.set(".hero-card.l", { xPercent: -140, rotate: -30 });
      gsap.set(".hero-card.r", { xPercent: 140, rotate: 30 });
      gsap.set(".hero .draw", { drawSVG: "0%" });
      gsap.set(".hero-hint", { opacity: 0 });

      const tl = gsap.timeline({ paused: true, defaults: { ease: "power4.out" } });
      tl.to(".hero .draw", { drawSVG: "100%", duration: 2.2, ease: "power2.inOut", stagger: 0.12 }, 0)
        .to(split.chars, { yPercent: 0, duration: 1.1, stagger: 0.03 }, 0.2)
        .to(".portrait", { yPercent: 0, duration: 1.5, ease: "expo.out" }, 0.4)
        .to(".hero-card.l", { xPercent: 0, rotate: -7, duration: 1.3, ease: "back.out(1.3)" }, 0.85)
        .to(".hero-card.r", { xPercent: 0, rotate: 6, duration: 1.3, ease: "back.out(1.3)" }, 0.95)
        .to(".hero .pill", { scale: 1, duration: 0.9, ease: "back.out(2.2)", stagger: 0.12, rotate: (i) => [-6, 4, 5, -4][i % 4] }, 1.1)
        .to(".hero-hint", { opacity: 1, duration: 0.8 }, 1.6);
      intro.current = tl;
      if (reduce) tl.progress(1);

      if (!reduce) {
        // idle float on the tags
        gsap.utils.toArray<HTMLElement>(".hero .pill").forEach((p, i) => {
          gsap.to(p, { y: i % 2 ? -8 : 8, duration: 2.2 + i * 0.3, ease: "sine.inOut", yoyo: true, repeat: -1 });
        });
        gsap.to(".hero-star", { rotate: 360, duration: 14, ease: "none", repeat: -1 });

        // scroll: the photo grows a little, signs and loops drift
        ScrollTrigger.create({
          trigger: root.current, start: "top top", end: "bottom 30%", scrub: 0.6,
          animation: gsap.timeline()
            .to(".portrait", { scale: 1.07, transformOrigin: "50% 100%", ease: "none" }, 0)
            .to(".hero-title", { yPercent: -18, ease: "none" }, 0)
            .to(".hero-card.l", { x: -80, rotate: -14, ease: "none" }, 0)
            .to(".hero-card.r", { x: 80, rotate: 12, ease: "none" }, 0)
            .to(".hero-loops", { yPercent: -16, ease: "none" }, 0),
        });
      }

      if (!reduce && fine) {
        const nodes = gsap.utils.toArray<HTMLElement>("[data-depth]").map((n) => ({
          depth: parseFloat(n.dataset.depth || "0"),
          x: gsap.quickTo(n, "x", { duration: 0.9, ease: "power3" }),
          y: gsap.quickTo(n, "y", { duration: 0.9, ease: "power3" }),
        }));
        const move = (e: PointerEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          nodes.forEach((n) => { n.x(nx * 60 * n.depth); n.y(ny * 40 * n.depth); });
        };
        window.addEventListener("pointermove", move);
        return () => window.removeEventListener("pointermove", move);
      }
    }, root);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (ready) intro.current?.play();
  }, [ready]);

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero-loops" aria-hidden>
        <Loop className="loop l" />
        <Loop className="loop r" />
      </div>

      <div className="hero-head">
        <h1 className="hero-title">
          <span className="ln">I BUILD PRODUCTS</span>
          <span className="ln">THAT ACTUALLY SHIP</span>
        </h1>
        <span className="pill p1" data-depth="0.8">Full-stack developer</span>
        <span className="pill p2" data-depth="-0.6"><i className="dot" />Open for freelance</span>
        <span className="pill p3" data-depth="0.6">Chennai, India</span>
        <span className="pill p4" data-depth="-0.8">Websites, apps &amp; AI</span>
      </div>

      <div className="hero-stage">
        <div className="hero-card l" data-depth="-0.5"><b>FULL</b></div>
        <div className="portrait">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="base" src="/me-cut.webp" alt="Prodhosh V S" />
        </div>
        <div className="hero-card r" data-depth="-0.5"><b>STACK</b></div>
      </div>

      <div className="hero-hint">
        <Asterisk className="hero-star" />
        <span>Scroll</span>
        <ArrowDown size={16} strokeWidth={2.4} />
      </div>

    </section>
  );
}
