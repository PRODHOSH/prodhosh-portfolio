"use client";

// Full-screen "Let's talk" overlay. Choreography is modelled on the reference:
// fat brush strokes wipe the screen (stroke-width + DrawSVG), then logo, close pill, heading letters (pop with a random
// tilt, then settle), copy, emails, social pills and the photo-with-sign all spring in; closing reverses the timeline.

import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { CoolArrow, HandSign } from "./Doodles";
import { gsap, reducedMotion, setupGsap } from "./motion";
import { me } from "./data";

const BRUSHES = [
  "M -140 110 C 300 -110 520 300 820 200 C 1120 100 1320 420 1580 310",
  "M -140 460 C 260 300 470 710 820 530 C 1120 390 1360 720 1580 570",
  "M -140 810 C 300 650 520 1010 870 830 C 1170 690 1370 960 1580 870",
];
const BRUSH_W = 1800;

const HEADING = [
  { t: "WANT TO", o: 14 },
  { t: "START", o: 26 },
  { t: "A NEW", o: 0 },
  { t: "PROJECT?", o: 20 },
];

function Chars({ text, cls }: { text: string; cls: string }) {
  return (
    <>
      {text.split("").map((c, i) => (
        <span key={i} className={cls} style={{ display: "inline-block", whiteSpace: "pre" }}>{c === " " ? " " : c}</span>
      ))}
    </>
  );
}

export default function Contact() {
  const root = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const [open, setOpen] = useState(false);

  const toggle = useCallback((next: boolean) => {
    setOpen(next);
    window.dispatchEvent(new CustomEvent("contact:toggle", { detail: { open: next } }));
    if (!tl.current) return;
    if (next) tl.current.timeScale(1).play();
    else tl.current.timeScale(1.4).reverse();
  }, []);

  useEffect(() => {
    setupGsap();
    const el = root.current!;
    const q = <T extends Element>(s: string) => Array.from(el.querySelectorAll<T>(s));
    const brushes = q<SVGPathElement>(".ct-brush");
    const heading = q(".ct-h");
    const sub = q(".ct-sub");
    const pills = q(".ct-pill");

    gsap.set(el, { autoAlpha: 0 });
    gsap.set(brushes, { drawSVG: "100% 100%", strokeWidth: 0 });
    gsap.set(".ct-logo", { scale: 0, opacity: 0 });
    gsap.set(".ct-close", { scale: 0.4, opacity: 0, y: 20 });
    gsap.set(heading, { opacity: 0 });
    gsap.set(sub, { yPercent: 110, opacity: 0 });
    gsap.set(".ct-label", { y: 20, opacity: 0 });
    gsap.set(".ct-mail-ch", { opacity: 0 });
    gsap.set(pills, { scale: 0.4, opacity: 0, y: 20 });
    gsap.set(".ct-photo", { scale: 0.8, opacity: 0, rotation: gsap.utils.random(-3, 3), transformOrigin: "50% 100%" });

    if (reducedMotion()) {
      const t = gsap.timeline({ paused: true });
      t.set(el, { autoAlpha: 1 }).set(brushes, { drawSVG: "0% 100%", strokeWidth: BRUSH_W })
        .set([".ct-logo", ".ct-close", heading, sub, ".ct-label", ".ct-mail-ch", pills, ".ct-photo"], { opacity: 1, scale: 1, y: 0, yPercent: 0, rotation: 0 });
      tl.current = t;
      return () => { t.kill(); };
    }

    const t = gsap.timeline({ paused: true });
    t.set(el, { autoAlpha: 1 }, 0);
    brushes.forEach((b, i) => {
      t.to(b, { drawSVG: "0% 100%", strokeWidth: BRUSH_W, duration: 0.9, ease: "power2.inOut" }, i * 0.1);
    });
    t.fromTo(".ct-bg", { opacity: 0 }, { opacity: 1, duration: 0.15 }, 0.85);
    const c0 = 0.45;
    t.to(".ct-logo", { scale: 1, opacity: 1, duration: 0.65, ease: "back.out(2.2)" }, c0)
      .to(".ct-close", { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "back.out(2.5)" }, c0 + 0.1);
    heading.forEach((ch, i) => {
      const start = c0 + 0.15 + i * 0.022;
      t.to(ch, { opacity: 1, scale: 1.1, rotation: gsap.utils.random(-6, 6), duration: 0.45, ease: "back.out(2)" }, start)
        .to(ch, { scale: 1, rotation: 0, duration: 0.6, ease: "power2.out" }, start + 0.45);
    });
    t.to(sub, { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.1, ease: "back.out(1.4)" }, c0 + 0.8)
      .to(".ct-label", { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out" }, c0 + 0.35)
      .to(".ct-mail-ch", { opacity: 1, duration: 0.01, stagger: 0.018 }, c0 + 0.5);
    pills.forEach((p, i) => {
      t.to(p, { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "back.out(2.5)" }, c0 + 0.45 + i * 0.12);
    });
    t.to(".ct-photo", { opacity: 1, scale: 1, rotation: 0, duration: 0.75, ease: "back.out(1.8)" }, c0 + 0.4);
    tl.current = t;

    // email hover: letters pop with a random tilt
    const popers = q(".ct-mail");
    const hovers = popers.map((m) => {
      const chars = Array.from(m.querySelectorAll<HTMLElement>(".ct-mail-ch"));
      const enter = () => chars.forEach((c, i) => {
        gsap.to(c, { scale: 1.14, rotation: gsap.utils.random(-7, 7), duration: 0.38, delay: i * 0.035, ease: "back.out(1.8)", overwrite: "auto",
          onComplete: () => { gsap.to(c, { scale: 1, rotation: 0, duration: 0.5, ease: "power2.out" }); } });
      });
      m.addEventListener("mouseenter", enter);
      return () => m.removeEventListener("mouseenter", enter);
    });

    const onOpen = () => toggle(true);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") toggle(false); };
    window.addEventListener("contact:open", onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      t.kill();
      hovers.forEach((h) => h());
      window.removeEventListener("contact:open", onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, [toggle]);

  return (
    <div className="ct" ref={root} role="dialog" aria-modal="true" aria-label="Contact" aria-hidden={!open} style={{ pointerEvents: open ? "auto" : "none" }}>
      <svg className="ct-brushes" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden>
        {BRUSHES.map((d, i) => (
          <path key={i} className="ct-brush" d={d} fill="none" stroke="#ff5400" strokeLinecap="round" strokeLinejoin="round" />
        ))}
      </svg>
      <div className="ct-bg" aria-hidden />

      <div className="ct-top">
        <span className="ct-logo">PRODHOSH</span>
        <button className="ct-close" onClick={() => toggle(false)} data-cursor="CLOSE" tabIndex={open ? 0 : -1}>
          <X size={16} strokeWidth={2.6} /><span>Close</span>
        </button>
      </div>

      <div className="ct-body">
        <h2 className="ct-title" aria-label="Want to start a new project? Or just say hello!">
          {HEADING.map((l) => (
            <span key={l.t} className="ct-line" style={{ marginLeft: `${l.o}%` }} aria-hidden><Chars text={l.t} cls="ct-h" /></span>
          ))}
          <span className="ct-hello" aria-hidden><span className="ct-subwrap"><span className="ct-sub">or just say hello!</span></span></span>
        </h2>

        <div className="ct-side">
          <p className="ct-label">Projects &amp; freelance work</p>
          <a className="ct-mail" href={`mailto:${me.email}`} data-cursor="MAIL" tabIndex={open ? 0 : -1}><Chars text={me.email} cls="ct-mail-ch" /><CoolArrow /></a>
          <p className="ct-label second">Prefer a quick call?</p>
          <a className="ct-mail" href={me.call} target="_blank" rel="noopener noreferrer" data-cursor="CALL" tabIndex={open ? 0 : -1}><Chars text="Book 15 minutes" cls="ct-mail-ch" /><CoolArrow /></a>
        </div>

        <div className="ct-photo" aria-hidden>
          <HandSign className="ct-hand" />
        </div>
      </div>

      <a className="ct-pill left" href={me.socials[0].href} target="_blank" rel="noopener noreferrer" data-cursor="OPEN" tabIndex={open ? 0 : -1}>
        {me.socials[0].label}<CoolArrow />
      </a>
      <a className="ct-pill right" href={me.socials[1].href} target="_blank" rel="noopener noreferrer" data-cursor="OPEN" tabIndex={open ? 0 : -1}>
        {me.socials[1].label}<CoolArrow />
      </a>
    </div>
  );
}
