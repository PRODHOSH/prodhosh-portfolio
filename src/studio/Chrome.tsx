"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, reducedMotion, setupGsap } from "./motion";
import { me } from "./data";

const LINES = ["hey, stranger.", "wait… are you stalking me? 👀", "ok fine. welcome in."];

export function Loader({ onDone }: { onDone: () => void }) {
  const el = useRef<HTMLDivElement>(null);
  const typed = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLElement>(null);
  const num = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setupGsap();
    const root = el.current!;
    const hide = () => { root.style.display = "none"; };
    if (reducedMotion()) { hide(); onDone(); return; }

    const prog = { v: 0 };
    const renderProg = () => {
      if (bar.current) bar.current.style.transform = `scaleX(${prog.v / 100})`;
      if (num.current) num.current.textContent = String(Math.round(prog.v)).padStart(3, "0");
    };

    // gate: the typing has to finish AND the real assets (fonts + hero photo) have to be ready
    let climbed = false;
    let loaded = false;
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      window.clearTimeout(hard);
      gsap.timeline({ onComplete: hide })
        .to(prog, { v: 100, duration: 0.35, ease: "power2.out", onUpdate: renderProg })
        .to(".loader-type", { yPercent: -120, opacity: 0, duration: 0.6, ease: "power4.in" }, "+=0.35")
        .to(".loader-meta", { opacity: 0, duration: 0.3 }, "<")
        .to(root, { yPercent: -112, duration: 1.1, ease: "expo.inOut" }, "-=0.15")
        .call(onDone, undefined, "-=0.8");
    };
    const check = () => { if (climbed && loaded) finish(); };
    const hard = window.setTimeout(() => { climbed = true; loaded = true; finish(); }, 8000);

    Promise.all([
      document.fonts.load('800 100px "Mdnichrometest Dark"'),
      document.fonts.load('700 100px "Mdnichrometest"'),
      new Promise<void>((res) => { const i = new Image(); i.onload = () => res(); i.onerror = () => res(); i.src = "/me-cut.webp"; }),
    ]).catch(() => undefined).then(() => { loaded = true; check(); });

    // typewriter: type a line, hold, backspace it, next line (the last line stays).
    // Timer-driven on purpose: if the page is busy hydrating, it just runs a little slower and never skips letters.
    let dead = false;
    const sleep = (ms: number) => new Promise<void>((r) => window.setTimeout(r, ms));
    const total = LINES.reduce((n, l) => n + Array.from(l).length, 0);
    let typedCount = 0;
    const run = async () => {
      await sleep(350);
      for (let li = 0; li < LINES.length && !dead; li++) {
        const chars = Array.from(LINES[li]);
        for (let c = 1; c <= chars.length && !dead; c++) {
          if (typed.current) typed.current.textContent = chars.slice(0, c).join("");
          typedCount++;
          prog.v = (typedCount / total) * 92;
          renderProg();
          await sleep(chars[c - 1] === " " ? 55 : 36);
        }
        if (li < LINES.length - 1) {
          await sleep(li === 0 ? 450 : 700);
          for (let c = chars.length - 1; c >= 0 && !dead; c--) {
            if (typed.current) typed.current.textContent = chars.slice(0, c).join("");
            await sleep(12);
          }
          await sleep(120);
        } else {
          await sleep(500);
        }
      }
      if (!dead) { climbed = true; check(); }
    };
    run();

    return () => { dead = true; window.clearTimeout(hard); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="loader" ref={el}>
      <div className="loader-top loader-meta"><span>prodhosh.me</span><span>portfolio · {new Date().getFullYear()}</span></div>
      <p className="loader-type" aria-label="Welcome to Prodhosh's portfolio">
        <span ref={typed} />
        <i className="loader-caret" />
      </p>
      <div className="loader-bottom loader-meta">
        <span>loading the good stuff</span>
        <span><span ref={num}>000</span>%</span>
      </div>
      <div className="loader-bar"><i ref={bar as React.RefObject<HTMLElement>} /></div>
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
