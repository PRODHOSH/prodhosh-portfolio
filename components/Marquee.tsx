"use client";

import { Sparkles } from "lucide-react";

const words = [
  { text: "FRONTEND" },
  { text: "BACKEND" },
  { text: "DATABASES" },
  { text: "AI & DATA SCIENCE" },
  { text: "CLOUD & DEVOPS" },
  { text: "AUTOMATIONS" },
  { text: "SEO" },
];

export default function Marquee() {
  const items = [...words, ...words, ...words, ...words, ...words, ...words];

  return (
    <div className="w-full bg-transparent py-5 border-y border-white/10 overflow-hidden flex whitespace-nowrap mt-32">
      <div className="flex shrink-0 animate-[marquee_50s_linear_infinite] min-w-full justify-around">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-8 mx-8">
            <span className="font-display text-xl tracking-widest text-emerald-400 font-bold">{item.text}</span>
            <Sparkles className="w-5 h-5 text-neutral-600" />
          </div>
        ))}
      </div>
      <div className="flex shrink-0 animate-[marquee_50s_linear_infinite] min-w-full justify-around">
        {items.map((item, i) => (
          <div key={`dup-${i}`} className="flex items-center gap-8 mx-8">
            <span className="font-display text-xl tracking-widest text-emerald-400 font-bold">{item.text}</span>
            <Sparkles className="w-5 h-5 text-neutral-600" />
          </div>
        ))}
      </div>
    </div>
  );
}
