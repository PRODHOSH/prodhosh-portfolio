"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, reducedMotion, setupGsap } from "./motion";
import { me } from "./data";

export function Loader({ onDone }: { onDone: () => void }) {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setupGsap();
    const root = el.current!;
    const hide = () => { root.style.display = "none"; };
    if (reducedMotion()) { hide(); onDone(); return; }

    // the wordmark pops in, rests for a beat (and waits for the fonts), then the screen lifts away
    let played = false;
    let fontsReady = false;
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      window.clearTimeout(hard);
      gsap.timeline({ onComplete: hide })
        .to(".ld-ch", { yPercent: -110, opacity: 0, duration: 0.55, ease: "power4.in", stagger: 0.025 })
        .to(root, { yPercent: -112, duration: 1, ease: "expo.inOut" }, "-=0.2")
        .call(onDone, undefined, "-=0.75");
    };
    const check = () => { if (played && fontsReady) finish(); };
    const hard = window.setTimeout(() => { played = true; fontsReady = true; finish(); }, 6000);

    Promise.all([
      document.fonts.load('700 100px "Mdnichrometest"'),
      document.fonts.load('800 100px "Mdnichrometest Dark"'),
    ]).catch(() => undefined).then(() => { fontsReady = true; check(); });

    const tl = gsap.timeline({ delay: 0.15, onComplete: () => { played = true; check(); } });
    tl.fromTo(".ld-ch", { yPercent: 115, opacity: 0, rotate: () => gsap.utils.random(-12, 12) },
      { yPercent: 0, opacity: 1, rotate: 0, duration: 0.8, stagger: 0.055, ease: "back.out(1.8)" })
      .to({}, { duration: 0.55 });

    return () => { window.clearTimeout(hard); tl.kill(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="loader" ref={el} aria-label="Prodhosh V S">
      <p className="ld-word" aria-hidden>
        {Array.from("PRODHOSH").map((c, i) => <span key={i} className="ld-ch">{c}</span>)}
        <span className="ld-gap" />
        {Array.from("VS").map((c, i) => <span key={`v${i}`} className="ld-ch o">{c}</span>)}
      </p>
      <div className="loader-curve" />
    </div>
  );
}

export function Nav() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" }).format(new Date());
    const first = window.setTimeout(() => setTime(fmt()), 0);
    const id = window.setInterval(() => setTime(fmt()), 30000);
    return () => { window.clearTimeout(first); window.clearInterval(id); };
  }, []);

  return (
    <header className="nav">
      <nav className="nav-l">
        <a className="pill-w" href="#work" data-cursor="GO">Work</a>
        <a className="pill-w" href="#services" data-cursor="GO">Services</a>
      </nav>
      <a className="logo" href="#top" aria-label="Prodhosh V S, home">PRODHOSH</a>
      <div className="nav-r">
        <p className="nav-hours">{me.location}<br />{time ? `${time} IST` : " "}</p>
        <a className="cta" href="#contact" data-contact data-cursor="HI">
          <span>Hire me</span>
          <i><ArrowUpRight size={14} strokeWidth={2.4} /></i>
        </a>
      </div>
    </header>
  );
}

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const d = dot.current!;
    const x = gsap.quickTo(d, "x", { duration: 0.35, ease: "power3" });
    const y = gsap.quickTo(d, "y", { duration: 0.35, ease: "power3" });
    const move = (e: PointerEvent) => {
      d.style.opacity = "1";
      x(e.clientX);
      y(e.clientY);
      const t = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      if (t) {
        label.current!.textContent = t.dataset.cursor || "";
        d.classList.add("big");
      } else {
        d.classList.remove("big");
      }
    };
    const leave = () => { d.style.opacity = "0"; };
    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);
    return () => { window.removeEventListener("pointermove", move); document.removeEventListener("pointerleave", leave); };
  }, []);

  return (
    <div className="cursor" ref={dot} aria-hidden>
      <span ref={label} />
    </div>
  );
}
