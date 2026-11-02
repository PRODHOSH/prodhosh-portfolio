import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <main className="nf">
      <Link className="nf-logo" href="/" aria-label="Prodhosh V S, home">PRODHOSH</Link>
      <div className="nf-body">
        <p className="nf-tag"><i className="dot" />Error 404</p>
        <h1 className="nf-code" aria-label="404">
          <span>4</span><span className="nf-o">0</span><span>4</span>
        </h1>
        <p className="nf-title">This page shipped… somewhere else.</p>
        <p className="nf-sub">The link may be old, or I never built it. Head back to the work that does exist.</p>
        <div className="nf-btns">
          <Link className="ft-call" href="/">Back home</Link>
          <Link className="nf-ghost" href="/#work">See my work</Link>
        </div>
      </div>
    </main>
  );
}
