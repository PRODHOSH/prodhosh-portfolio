"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { gsap, motion, reducedMotion, ScrollTrigger, SplitText, setupGsap } from "./motion";
import { Arrow, Asterisk, FaqDoodle, Loop, Squiggle } from "./Doodles";
import { icons, PenHead } from "./Icons";
import {
  certs, education, experience, faq, filters, me, process, projects, services, skills, stats,
  type Project,
} from "./data";

/* ---------- Curved ribbon (text rides an arc, speeds up with scroll) ---------- */

const RIBBON_TEXT = "FREELANCE  •  WEBSITES  •  WEB APPS  •  MOBILE APPS  •  SOFTWARE  •  AI  •  AUTOMATIONS  •  LOGOS  •  ";
const ARC = "M-120 330Q720 -90 1560 330";

export function Ribbon() {
  const tp = useRef<SVGTextPathElement>(null);

  useEffect(() => {
    setupGsap();
    const el = tp.current!;
    let unit = 0;
    let offset = 0;
    let on = false;
    let dead = false;
    const measure = () => {
      el.textContent = RIBBON_TEXT;
      unit = el.getComputedTextLength();
      el.textContent = RIBBON_TEXT.repeat(Math.ceil(2600 / Math.max(unit, 1)) + 2);
    };
    const tick = (_t: number, dt: number) => {
      if (!unit) return;
      const speed = 90 + Math.min(Math.abs(motion.velocity), 40) * 22;
      offset = (offset - (speed * dt) / 1000) % unit;
      el.setAttribute("startOffset", String(offset));
    };
    document.fonts.load('800 92px "Mdnichrometest Dark"').catch(() => undefined).then(() => document.fonts.ready).then(() => {
      if (dead) return;
      measure();
      gsap.ticker.add(tick);
      on = true;
    });
    return () => { dead = true; if (on) gsap.ticker.remove(tick); };
  }, []);

  return (
    <div className="ribbon" aria-hidden>
      <svg viewBox="0 0 1440 420" preserveAspectRatio="xMidYMid slice">
        <path d={ARC} id="ribbon-arc" fill="none" stroke="var(--orange)" strokeWidth="190" />
        <text className="ribbon-text" dy="30">
          <textPath href="#ribbon-arc" ref={tp} startOffset="0">{RIBBON_TEXT}</textPath>
        </text>
      </svg>
    </div>
  );
}

/* ---------- About: scroll-filled statement + stats ---------- */

const STATEMENT =
  "I’m Prodhosh, a freelance full-stack developer and designer. I turn ideas into websites, apps and software that look sharp, scale well and actually ship.";

export function About() {
  const root = useRef<HTMLElement>(null);
  const words = STATEMENT.split(" ");

  useEffect(() => {
    setupGsap();
    const reduce = reducedMotion();
    const ctx = gsap.context(() => {
      const w = gsap.utils.toArray<HTMLElement>(".st-w");
      const pills = gsap.utils.toArray<HTMLElement>(".about .pill");
      if (reduce) gsap.set(w, { color: "var(--black)" });
      else {
        // the screen stays still: words fill in, and the badges pop up one by one as you scroll
        const per = 0.35;
        const total = (w.length - 1) * per + 1.4;
        gsap.set(pills, { scale: 0, rotate: 0 });
        const tl = gsap.timeline({
          scrollTrigger: { trigger: ".about-pin", start: "top top", end: "+=230%", pin: true, scrub: 0.6, anticipatePin: 1 },
        });
        tl.fromTo(w, { color: "#fcae88" }, { keyframes: { color: ["#fcae88", "#ff5400", "#0b0b0b"] }, ease: "none", duration: 1.4, stagger: per }, 0);
        [0.3, 0.6, 0.86].forEach((f, i) => {
          if (pills[i]) tl.to(pills[i], { scale: 1, rotate: [-5, 4, -3][i], duration: 1.1, ease: "back.out(2.4)" }, f * total);
        });
        tl.to({}, { duration: 0.8 }); // a short hold so the finished statement rests before the page moves on
        pills.forEach((p, i) => {
          gsap.to(p, { y: i % 2 ? -10 : 10, duration: 2.4 + i * 0.4, ease: "sine.inOut", yoyo: true, repeat: -1 });
        });
        gsap.from(".about-doodles .draw", {
          drawSVG: "0%", duration: 1.6, ease: "power2.inOut", stagger: 0.15,
          scrollTrigger: { trigger: ".about-pin", start: "top 70%" },
        });
      }

      gsap.utils.toArray<HTMLElement>(".stat").forEach((s, i) => {
        const target = Number(s.dataset.value);
        const num = s.querySelector<HTMLElement>(".stat-n")!;
        const obj = { v: reduce ? target : 0 };
        const fmt = () => { num.textContent = Math.round(obj.v).toLocaleString("en-US"); };
        fmt();
        gsap.from(s, { y: 60, opacity: 0, duration: 1, ease: "power4.out", delay: i * 0.1, scrollTrigger: { trigger: s, start: "top 90%" } });
        if (!reduce) gsap.to(obj, { v: target, duration: 2, ease: "power3.out", onUpdate: fmt, scrollTrigger: { trigger: s, start: "top 90%" } });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="about" id="about" ref={root}>
      <div className="about-pin">
      <p className="eyebrow">A BIT ABOUT ME</p>
      <div className="about-wrap">
        <p className="statement">
          {words.map((word, i) => (
            <span key={i} className="st-w">{word}{" "}</span>
          ))}
        </p>
        <span className="pill a1"><i className="dot" />Open for freelance</span>
        <span className="pill a2">Allergic to generic</span>
        <span className="pill a3">Ships, then polishes</span>
        <div className="about-doodles" aria-hidden>
          <Squiggle className="dd s" />
          <Asterisk className="dd a" />
          <Arrow className="dd r" />
        </div>
      </div>
      </div>
      <p className="about-sub">
        Next.js on the front, Postgres and Supabase underneath, and LLMs wired in where they actually help. Based in {me.location}, working with founders, agencies and teams anywhere.
      </p>
      <div className="stats">
        {stats.map((s) => (
          <div className="stat" key={s.label} data-value={s.value}>
            <p className="stat-big"><span className="stat-n">0</span>{s.suffix}</p>
            <h3>{s.label}</h3>
            <p>{s.note}</p>
          </div>
        ))}
      </div>
      <div className="about-links">
        <a href={me.call} target="_blank" rel="noopener noreferrer" className="solid" data-cursor="CALL">Book a free call<ArrowUpRight size={15} strokeWidth={2.4} /></a>
        {me.socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" data-cursor="OPEN">{s.label}<ArrowUpRight size={15} strokeWidth={2.4} /></a>
        ))}
        <a href={me.resume} target="_blank" rel="noopener noreferrer" data-cursor="PDF">Resume<ArrowUpRight size={15} strokeWidth={2.4} /></a>
      </div>
    </section>
  );
}

/* ---------- Services: a line that draws itself as you scroll, picking up one service at a time ---------- */

const PW = 1440;
const SEG = 430;
const TOP = 300;
const WAY = services.map((_, i) => ({ x: i % 2 ? 470 : 960, y: TOP + i * SEG }));
const PH = TOP + services.length * SEG;

type V = { x: number; y: number };
const bez = (p: V[], t: number): V => {
  const u = 1 - t;
  return {
    x: u * u * u * p[0].x + 3 * u * u * t * p[1].x + 3 * u * t * t * p[2].x + t * t * t * p[3].x,
    y: u * u * u * p[0].y + 3 * u * u * t * p[1].y + 3 * u * t * t * p[2].y + t * t * t * p[3].y,
  };
};
// split a cubic at t (de Casteljau) -> [left, right]
const lerp = (a: V, b: V, t: number): V => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t });
const split = (p: V[], t: number): [V[], V[]] => {
  const a = lerp(p[0], p[1], t), b = lerp(p[1], p[2], t), c = lerp(p[2], p[3], t);
  const d = lerp(a, b, t), e = lerp(b, c, t), f = lerp(d, e, t);
  return [[p[0], a, d, f], [f, e, c, p[3]]];
};
const cub = (p: V[]) => ` C ${p[1].x} ${p[1].y} ${p[2].x} ${p[2].y} ${p[3].x} ${p[3].y}`;

// A loop-de-loop that leaves and rejoins the line with the same heading (a trochoid), so it never kinks.
function loopPoints(m: V, tx: number, ty: number, r: number, drift: number): V[] {
  const e2 = { x: ty, y: -tx };
  const pts: V[] = [];
  const N = 90;
  for (let k = 1; k <= N; k++) {
    const f = (k / N) * Math.PI * 2;
    const fwd = (drift * k) / N + r * Math.sin(f);
    const side = r * (1 - Math.cos(f));
    pts.push({ x: m.x + tx * fwd + e2.x * side, y: m.y + ty * fwd + e2.y * side });
  }
  return pts;
}

function buildPath() {
  const start: V = { x: -140, y: 70 };
  const w0 = WAY[0];
  let d = `M ${start.x} ${start.y}` + cub([start, { x: start.x + 360, y: start.y }, { x: w0.x, y: w0.y - 200 }, w0]);
  for (let i = 1; i < WAY.length; i++) {
    const a = WAY[i - 1];
    const b = WAY[i];
    const k = SEG * 0.64;
    const c: V[] = [a, { x: a.x, y: a.y + k }, { x: b.x, y: b.y - k }, b];
    if (i === 3 || i === 6) {
      const [l, rgt] = split(c, 0.36);
      const m = l[3];
      const m2 = bez(c, 0.47);
      const dx = m2.x - m.x, dy = m2.y - m.y;
      const dist = Math.hypot(dx, dy);
      const tx = dx / dist, ty = dy / dist;
      d += cub(l);
      const lp = loopPoints(m, tx, ty, 84, dist);
      d += lp.map((q) => ` L ${q.x.toFixed(1)} ${q.y.toFixed(1)}`).join("");
      const [, rest] = split(c, 0.47);
      d += cub(rest);
      void rgt;
    } else {
      d += cub(c);
    }
  }
  const last = WAY[WAY.length - 1];
  const end: V = { x: PW + 200, y: PH - 80 };
  d += cub([last, { x: last.x, y: last.y + 300 }, { x: end.x - 520, y: end.y }, end]);
  return d;
}

const PATH_D = buildPath();

export function Services() {
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    setupGsap();
    const ctx = gsap.context(() => {
      gsap.from(".svc-title span", {
        yPercent: 110, duration: 1.1, ease: "power4.out", stagger: 0.1,
        scrollTrigger: { trigger: ".svc-title", start: "top 85%" },
      });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 900px)", () => {
        const line = root.current!.querySelector<SVGPathElement>(".sp-line")!;
        const ghost = root.current!.querySelector<SVGPathElement>(".sp-ghost")!;
        const pen = root.current!.querySelector<SVGGElement>(".sp-pen")!;
        const items = gsap.utils.toArray<HTMLElement>(".sp-item");
        const total = ghost.getTotalLength();

        // length at which the line passes each waypoint (coarse scan, the path only ever moves downward overall)
        const at = WAY.map((w) => {
          let best = 0, bd = Infinity;
          for (let l = 0; l <= total; l += 6) {
            const p = ghost.getPointAtLength(l);
            const dd = (p.x - w.x) ** 2 + (p.y - w.y) ** 2;
            if (dd < bd) { bd = dd; best = l; }
          }
          return best;
        });

        gsap.set(line, { drawSVG: "0%" });
        gsap.set(items, { autoAlpha: 0 });
        const shown = items.map(() => false);

        const place = (p: number) => {
          const len = p * total;
          const pt = ghost.getPointAtLength(len);
          const nx = ghost.getPointAtLength(Math.min(total, len + 2));
          const ang = (Math.atan2(nx.y - pt.y, nx.x - pt.x) * 180) / Math.PI;
          pen.setAttribute("transform", `translate(${pt.x} ${pt.y}) rotate(${ang})`);
          gsap.set(line, { drawSVG: `0% ${p * 100}%` });
          items.forEach((el, i) => {
            const on = len >= at[i] - (i === 0 ? 900 : 300);
            if (on === shown[i]) return;
            shown[i] = on;
            if (!on) { gsap.set(el, { autoAlpha: 0 }); return; }
            const chars = el.querySelectorAll(".sp-ch");
            const icon = el.querySelector(".sp-icon");
            const bubble = el.querySelector(".sp-bubble");
            gsap.set(el, { autoAlpha: 1 });
            gsap.fromTo(chars, { yPercent: 100, opacity: 0, rotate: () => gsap.utils.random(-14, 14) },
              { yPercent: 0, opacity: 1, rotate: 0, duration: 0.7, stagger: 0.03, ease: "back.out(1.8)", overwrite: true });
            gsap.fromTo(icon, { scale: 0, rotate: -150 }, { scale: 1, rotate: i % 2 ? 7 : -7, duration: 1, ease: "back.out(2.2)", overwrite: true });
            gsap.fromTo(bubble, { scale: 0.5, opacity: 0, y: 24 }, { scale: 1, opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "back.out(1.7)", overwrite: true });
          });
        };
        place(0);
        ScrollTrigger.create({
          trigger: ".sp-scene", start: "top 72%", end: "bottom 62%", scrub: 0.5,
          onUpdate: (self) => place(self.progress),
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="services" id="services" ref={root}>
      <div className="svc-head">
        <p className="eyebrow">SERVICES · OPEN FOR FREELANCE</p>
        <h2 className="svc-title"><span>THIS IS</span><span className="o">MY THING</span></h2>
        <p className="svc-lead">Hire me for the whole thing or just the part you’re stuck on. One person from first sketch to production, so nothing gets lost in handover.</p>
      </div>

      {/* Desktop: scroll-drawn line */}
      <div className="sp-scene" style={{ aspectRatio: `${PW} / ${PH}` }}>
        <svg className="sp-svg" viewBox={`0 0 ${PW} ${PH}`} aria-hidden>
          <path className="sp-ghost" d={PATH_D} fill="none" stroke="#fcc7b0" strokeWidth="30" strokeLinecap="round" />
          <path className="sp-line" d={PATH_D} fill="none" stroke="var(--orange)" strokeWidth="30" strokeLinecap="round" />
          <g className="sp-pen"><PenHead /></g>
        </svg>
        {services.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <div className="sp-item" key={s.n} style={{ left: `${(WAY[i].x / PW) * 100}%`, top: `${(WAY[i].y / PH) * 100}%` }}>
              <h3>
                <span className="sp-w">{s.words[0].split("").map((c, k) => <span key={k} className="sp-ch">{c}</span>)}</span>
                <i className="sp-icon"><Icon /></i>
                <span className="sp-w">{s.words[1].split("").map((c, k) => <span key={k} className="sp-ch">{c}</span>)}</span>
              </h3>
              <div className="sp-bubble" style={{ rotate: `${i % 2 ? -3 : 3}deg` }}>
                <p>{s.body}</p>
                <ul>{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile / tablet: simple expanding rows */}
      <div className="srvs">
        {services.map((s, i) => (
          <div className={`srv ${open === i ? "open" : ""}`} key={s.n} data-cursor="">
            <button className="srv-top" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
              <span className="srv-n">{s.n}</span>
              <h3>{s.title}</h3>
              <i><ArrowUpRight size={22} strokeWidth={2.4} /></i>
            </button>
            <div className="srv-more">
              <div>
                <p>{s.body}</p>
                <ul>{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="svc-cta">
        <a className="btn-o" href={me.call} data-contact data-cursor="TALK">Got a project? Let’s talk<ArrowUpRight size={18} strokeWidth={2.4} /></a>
      </div>
    </section>
  );
}

/* ---------- Work: filterable grid, wave-mask hover reveals the mobile view ---------- */

const INITIAL = 9;

const initials = (n: string) => n.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();

// Same technique as the reference: one fat scribble path. A coloured brush grows along it first, then a second copy
// (used as an SVG mask) uncovers a different section of the page underneath. stroke-width + DrawSVG are tweened together.
const BRUSH =
  "M 40 760 C 120 830 270 800 310 650 C 360 470 110 380 150 210 C 190 50 430 20 470 170 C 510 310 390 470 530 530 C 690 595 780 390 715 265 C 665 165 760 70 920 50";
const BRUSH_W = 1500;

function Card({ p }: { p: Project }) {
  const href = p.live || p.code;
  const media = useRef<HTMLDivElement>(null);
  const link = useRef<HTMLAnchorElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");

  useEffect(() => {
    setupGsap();
    if (reducedMotion()) return;
    const el = media.current!;
    const fg = el.querySelector<SVGPathElement>(".brush-fg")!;
    const mk = el.querySelector<SVGPathElement>(".brush-mask")!;
    const arrow = link.current!.querySelector<SVGElement>(".card-go svg");
    gsap.set([fg, mk], { drawSVG: "100% 100%", strokeWidth: 0 });
    const t = gsap.timeline({ paused: true });
    t.to(fg, { drawSVG: "0% 100%", strokeWidth: BRUSH_W, duration: 1.05, ease: "power2.inOut" }, 0)
      .to(mk, { drawSVG: "0% 100%", strokeWidth: BRUSH_W, duration: 1.05, ease: "power2.inOut" }, 0.35);
    if (arrow) {
      t.to(arrow, { rotation: -45, transformOrigin: "50% 50%", duration: 0.28, ease: "power2.out" }, 0)
        .to(arrow, { rotation: 0, duration: 0.65, ease: "elastic.out(1.15, 0.35)" }, 0.28);
    }
    tl.current = t;
    return () => { t.kill(); };
  }, []);

  return (
    <a
      className="card" ref={link} href={href} target="_blank" rel="noopener noreferrer" data-cursor="VISIT"
      onPointerEnter={() => tl.current?.timeScale(1).play()}
      onPointerLeave={() => tl.current?.timeScale(1.3).reverse()}
      style={{ ["--tint" as string]: p.tint }}
    >
      <div className="card-media" ref={media}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="shot" src={p.shot} alt={`${p.name} website preview`} loading="lazy" decoding="async" />
        <svg className="brush" viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <path className="brush-fg" d={BRUSH} />
        </svg>
        <svg className="brush brush-img" viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <defs>
            <mask id={`m${uid}`} maskUnits="userSpaceOnUse" x="-400" y="-400" width="1800" height="1600">
              <path className="brush-mask" d={BRUSH} stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" />
            </mask>
          </defs>
          <image href={p.shot} x="0" y="0" width="1000" height="800" preserveAspectRatio="xMidYMid slice" mask={`url(#m${uid})`} />
        </svg>
        <span className="card-tag">{p.group}</span>
      </div>
      <div className="card-info">
        <div className="card-title">
          <span className="mono">{initials(p.name)}</span>
          <div>
            <h3>{p.name}</h3>
            <span className="card-cat">{p.cat}</span>
          </div>
          <i className="card-go"><ArrowUpRight size={20} strokeWidth={2.4} /></i>
        </div>
        <p>{p.desc}</p>
        <ul>{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
      </div>
    </a>
  );
}

export function Work() {
  const root = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [all, setAll] = useState(false);

  const list = useMemo(() => {
    const f = filter === "All" ? projects : projects.filter((p) => p.group === filter);
    return all || filter !== "All" ? f : f.slice(0, INITIAL);
  }, [filter, all]);
  const total = filter === "All" ? projects.length : projects.filter((p) => p.group === filter).length;

  useEffect(() => {
    setupGsap();
    const ctx = gsap.context(() => {
      const split = SplitText.create(".work-title span", { type: "chars" });
      gsap.from(split.chars, {
        yPercent: 115, duration: 1, ease: "power4.out", stagger: 0.025,
        scrollTrigger: { trigger: ".work-title", start: "top 85%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  // Re-run the card reveal whenever the visible set changes.
  useEffect(() => {
    setupGsap();
    const ctx = gsap.context(() => {
      gsap.set(".card", { opacity: 0 });
      ScrollTrigger.batch(".card", {
        start: "top 94%",
        onEnter: (els) => gsap.fromTo(els, { y: 90, opacity: 0, rotate: (i: number) => (i % 2 ? 2 : -2) }, { y: 0, opacity: 1, rotate: 0, duration: 1.1, ease: "power4.out", stagger: 0.1, overwrite: true }),
      });
    }, root);
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 60);
    return () => { window.clearTimeout(t); ctx.revert(); };
  }, [list]);

  return (
    <section className="work" id="work" ref={root}>
      <div className="work-head">
        <p className="eyebrow">FEATURED PROJECTS</p>
        <h2 className="work-title"><span>SELECTED</span><span>WORKS</span></h2>
        <p className="work-count">{String(total).padStart(2, "0")} projects<br />and counting</p>
      </div>
      <div className="chips" role="tablist" aria-label="Filter projects">
        {filters.map((f) => (
          <button key={f} role="tab" aria-selected={filter === f} className={filter === f ? "on" : ""} onClick={() => { setFilter(f); setAll(false); }}>{f}</button>
        ))}
      </div>
      <div className="grid">
        {list.map((p) => <Card key={p.name} p={p} />)}
      </div>
      {filter === "All" && !all && projects.length > INITIAL && (
        <div className="more">
          <button className="btn-o" onClick={() => setAll(true)} data-cursor="MORE">Show all {projects.length} projects<Plus size={18} strokeWidth={2.6} /></button>
        </div>
      )}
    </section>
  );
}

/* ---------- Process ---------- */

export function Process() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    setupGsap();
    const ctx = gsap.context(() => {
      gsap.from(".prc-title span", {
        yPercent: 110, duration: 1.1, ease: "power4.out", stagger: 0.1,
        scrollTrigger: { trigger: ".prc-title", start: "top 85%" },
      });
      // quick, one-time entrance; the cards always end exactly where the layout puts them
      gsap.from(".prc", {
        y: 36, opacity: 0, rotate: (i: number) => (i % 2 ? 1.5 : -1.5), duration: 0.7, ease: "power3.out", stagger: 0.08,
        scrollTrigger: { trigger: ".prcs", start: "top 92%", once: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="process" ref={root}>
      <p className="eyebrow">HOW FREELANCING WITH ME WORKS</p>
      <h2 className="prc-title"><span>FOUR STEPS,</span><span className="o">NO DRAMA</span></h2>
      <div className="prcs">
        {process.map((p, i) => (
          <article className={`prc c${i}`} key={p.n}>
            <span>{p.n}</span>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Experience: tabs + hover-expand rows ---------- */

export function Story() {
  const root = useRef<HTMLElement>(null);
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const group = experience[tab];

  useEffect(() => {
    setupGsap();
    const ctx = gsap.context(() => {
      gsap.from(".story-title span", {
        yPercent: 110, duration: 1.1, ease: "power4.out", stagger: 0.1,
        scrollTrigger: { trigger: ".story-title", start: "top 85%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".row", { opacity: 0, y: 30, duration: 0.7, ease: "power3.out", stagger: 0.06 });
    }, root);
    return () => ctx.revert();
  }, [tab]);

  return (
    <section className="story" id="experience" ref={root}>
      <div className="story-head">
        <p className="eyebrow">EXPERIENCE</p>
        <h2 className="story-title"><span>THE STORY</span><span className="o">SO FAR</span></h2>
      </div>
      <div className="chips center" role="tablist" aria-label="Experience categories">
        {experience.map((g, i) => (
          <button key={g.id} role="tab" aria-selected={tab === i} className={tab === i ? "on" : ""} onClick={() => { setTab(i); setOpen(0); }}>
            {g.label}<sup>{g.roles.length}</sup>
          </button>
        ))}
      </div>
      <div className="rows">
        {group.roles.map((r, i) => (
          <div className={`row ${open === i ? "open" : ""}`} key={r.title + r.org} onMouseEnter={() => setOpen(i)} data-cursor="">
            <button className="row-top" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="row-logo" src={`/logos/${r.logo}`} alt={`${r.org} logo`} loading="lazy" />
              <span className="row-main">
                <h3 className="row-role">{r.title}</h3>
                <span className="row-org">{r.org}</span>
              </span>
              <span className="row-when">{r.when}<br />{r.where}</span>
            </button>
            <div className="row-more"><p>{r.body}</p></div>
          </div>
        ))}
      </div>
      <div className="also">
        {education.map((e) => (
          <div className="also-card" key={e.school}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/logos/${e.logo}`} alt="" aria-hidden />
            <span className="eyebrow-s">EDUCATION · {e.when}</span>
            <h4>{e.school}</h4>
            <p>{e.deg}</p>
          </div>
        ))}
      </div>
      <div className="certs">
        <p className="eyebrow">LICENSES &amp; CERTIFICATIONS</p>
        <div className="cert-grid">
          {certs.map((c) => (
            <div className={`cert ${c.tone}`} key={c.title}>
              {c.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className={"wide" in c && c.wide ? "wide" : ""} src={`/logos/${c.logo}`} alt="" aria-hidden />
              ) : (
                <span className="cert-mono">A</span>
              )}
              <div>
                <h4>{c.title}</h4>
                <p>{c.org} · {c.when}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Skills: sticker marquees ---------- */

export function Skills() {
  const half = Math.ceil(skills.length / 2);
  const rows = [skills.slice(0, half), skills.slice(half)];
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    setupGsap();
    const ctx = gsap.context(() => {
      gsap.from(".sk-title span", {
        yPercent: 110, duration: 1.1, ease: "power4.out", stagger: 0.1,
        scrollTrigger: { trigger: ".sk-title", start: "top 88%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="skills" ref={root}>
      <h2 className="sk-title"><span>TOOLS OF</span><span className="o">THE TRADE</span></h2>
      {rows.map((row, r) => (
        <div className={`mq ${r ? "rev" : ""}`} key={r} aria-hidden={r ? true : undefined}>
          <div className="mq-track">
            {[0, 1].map((k) => (
              <div className="mq-set" key={k}>
                {row.map((s, i) => (
                  <span className={`sticker st${(i + r) % 3}`} style={{ rotate: `${((i * 7 + r * 3) % 9) - 4}deg` }} key={s}>{s}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

/* ---------- FAQ: chat bubbles ---------- */

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    setupGsap();
    const ctx = gsap.context(() => {
      gsap.from(".faq-title", { y: 60, opacity: 0, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".faq-title", start: "top 88%" } });
      gsap.from(".faq-doodle .draw", { drawSVG: "0%", duration: 1.6, ease: "power2.inOut", stagger: 0.12, scrollTrigger: { trigger: ".faq-doodle", start: "top 88%" } });
      gsap.from(".faq-doodle .fill", { scale: 0, transformOrigin: "50% 50%", duration: 0.8, ease: "back.out(2)", scrollTrigger: { trigger: ".faq-doodle", start: "top 80%" } });
      gsap.utils.toArray<HTMLElement>(".qa").forEach((q) => {
        gsap.from(q, { opacity: 0, x: 40, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: q, start: "top 94%" } });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="faq" ref={root}>
      <div className="faq-head">
        <p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p>
        <h2 className="faq-title">THINGS YOU<br />MIGHT ASK</h2>
        <FaqDoodle className="faq-doodle" />
      </div>
      <div className="faq-list">
        {faq.map((f, i) => (
          <div className={`qa ${open === i ? "open" : ""}`} key={f.q}>
            <button className="qa-q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} data-cursor={open === i ? "−" : "+"}>
              {f.q}
            </button>
            <div className="qa-body">
              <div className="qa-a">
                <p>{f.a}</p>
                <span className="qa-av">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/me-cut.webp" alt="" aria-hidden />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Footer / contact ---------- */

export function Footer() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    setupGsap();
    const ctx = gsap.context(() => {
      const split = SplitText.create(".ft-title", { type: "words" });
      gsap.from(split.words, {
        yPercent: 110, opacity: 0, duration: 1.1, ease: "power4.out", stagger: 0.1,
        scrollTrigger: { trigger: ".ft-title", start: "top 88%" },
      });
      gsap.from(".ft-word", { yPercent: 40, opacity: 0, duration: 1.4, ease: "power4.out", scrollTrigger: { trigger: ".ft-word", start: "top 100%" } });
      gsap.from(".ft-bg .draw", { drawSVG: "0%", duration: 3, ease: "power2.inOut", stagger: 0.3, scrollTrigger: { trigger: root.current, start: "top 80%" } });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <footer className="footer" id="contact" ref={root}>
      <div className="ft-bg" aria-hidden>
        <Loop className="ftl a" />
        <Loop className="ftl b" />
      </div>
      <div className="ft-grid">
        <div className="ft-main">
          <p className="ft-eyebrow"><i className="dot" />Now booking freelance projects</p>
          <h2 className="ft-title">That’s enough scrolling. Let’s build something.</h2>
          <div className="ft-btns">
            <a className="ft-call" href={me.call} target="_blank" rel="noopener noreferrer" data-cursor="CALL">Book a free call<ArrowUpRight size={18} strokeWidth={2.4} /></a>
            <a className="ft-ghost" href={`mailto:${me.email}`} data-contact data-cursor="TALK">Let’s talk</a>
          </div>
        </div>
        <nav className="ft-col" aria-label="Footer">
          <h4>Main menu</h4>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href={me.resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </nav>
        <nav className="ft-col" aria-label="Social">
          <h4>Elsewhere</h4>
          {me.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}<ArrowUpRight size={14} strokeWidth={2.4} /></a>
          ))}
        </nav>
      </div>
      <div className="ft-meta">
        <div><h4>Email me</h4><a href={`mailto:${me.email}`}>{me.email}</a></div>
        <div><h4>Handmade by one human.</h4><p>Hand-coded, mostly caffeine-powered.</p></div>
        <div><h4>Based in</h4><p>{me.location}</p></div>
      </div>
      <p className="ft-copy">© {new Date().getFullYear()} {me.name}</p>
      <div className="ft-word" aria-hidden>PRODHOSH</div>
    </footer>
  );
}
