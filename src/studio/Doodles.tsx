// Hand-drawn style SVG doodles. Every stroke has class "draw" so GSAP DrawSVG can write it on.

export function Loop({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 460 1100" fill="none" aria-hidden>
      <path
        className="draw"
        d="M 40 1060 C 40 880 210 820 210 660 L 210.3 649.6 L 211.3 639.3 L 212.9 629.1 L 215.1 619.1 L 218.0 609.2 L 221.4 599.6 L 225.5 590.3 L 230.1 581.3 L 235.2 572.7 L 240.8 564.5 L 246.8 556.8 L 253.3 549.6 L 260.1 542.8 L 267.3 536.7 L 274.8 531.1 L 282.6 526.1 L 290.5 521.8 L 298.6 518.0 L 306.8 514.9 L 315.0 512.5 L 323.2 510.7 L 331.4 509.5 L 339.5 509.0 L 347.4 509.1 L 355.2 509.9 L 362.7 511.2 L 369.9 513.1 L 376.7 515.6 L 383.2 518.5 L 389.2 522.0 L 394.8 525.9 L 399.9 530.3 L 404.5 535.0 L 408.6 540.1 L 412.0 545.4 L 414.9 551.1 L 417.1 556.9 L 418.7 562.8 L 419.7 568.9 L 420.0 575.0 L 419.7 581.1 L 418.7 587.2 L 417.1 593.1 L 414.9 598.9 L 412.0 604.6 L 408.6 609.9 L 404.5 615.0 L 399.9 619.7 L 394.8 624.1 L 389.2 628.0 L 383.2 631.5 L 376.7 634.4 L 369.9 636.9 L 362.7 638.8 L 355.2 640.1 L 347.4 640.9 L 339.5 641.0 L 331.4 640.5 L 323.2 639.3 L 315.0 637.5 L 306.8 635.1 L 298.6 632.0 L 290.5 628.2 L 282.6 623.9 L 274.8 618.9 L 267.3 613.3 L 260.1 607.2 L 253.3 600.4 L 246.8 593.2 L 240.8 585.5 L 235.2 577.3 L 230.1 568.7 L 225.5 559.7 L 221.4 550.4 L 218.0 540.8 L 215.1 530.9 L 212.9 520.9 L 211.3 510.7 L 210.3 500.4 L 210.0 490.0 C 210.0 370.0 110 330 -80 300"
        stroke="currentColor"
        strokeWidth="40"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Asterisk({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="14" strokeLinecap="round">
        <path className="draw" d="M50 8V92" />
        <path className="draw" d="M14 29L86 71" />
        <path className="draw" d="M86 29L14 71" />
      </g>
    </svg>
  );
}

export function Squiggle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 40" fill="none" aria-hidden>
      <path
        className="draw"
        d="M6 20C26 -2 46 -2 66 20S106 42 126 20S166 -2 186 20S206 36 214 24"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 120" fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
        <path className="draw" d="M8 20C50 8 120 20 130 84" />
        <path className="draw" d="M104 66L130 92L152 60" />
      </g>
    </svg>
  );
}

/** Line-art illustration for the FAQ: a sleepy laptop, a coffee, zzz, and a chunky arrow pointing at the questions. */
export function FaqDoodle({ className }: { className?: string }) {
  const k = { stroke: "#0b0b0b", strokeWidth: 6, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" } as const;
  return (
    <svg className={className} viewBox="0 0 620 470" aria-hidden>
      {/* zzz */}
      <g {...k}>
        <path className="draw" d="M400 118H428L400 152H428" />
        <path className="draw" d="M440 76H474L440 118H474" />
        <path className="draw" d="M486 24H528L486 76H528" />
      </g>
      {/* laptop */}
      <g {...k}>
        <rect className="draw" x="110" y="150" width="320" height="200" rx="20" />
        <path className="draw" d="M60 352H480L452 398H88Z" />
        <path className="draw" d="M214 392H326" />
        {/* sleeping face */}
        <path className="draw" d="M190 238Q212 258 234 238" />
        <path className="draw" d="M306 238Q328 258 350 238" />
        <path className="draw" d="M240 292Q270 314 300 292" />
      </g>
      <circle className="fill" cx="186" cy="282" r="12" fill="#ff5400" />
      <circle className="fill" cx="354" cy="282" r="12" fill="#ff5400" />
      {/* coffee */}
      <g {...k}>
        <path className="draw" d="M8 286H76V346Q76 380 42 380Q8 380 8 346Z" />
        <path className="draw" d="M76 298Q108 298 108 326Q108 354 76 354" />
        <path className="draw" d="M30 268Q16 248 30 228M54 268Q40 248 54 228" />
      </g>
      {/* chunky arrow, pointing right at the questions */}
      <g className="fill">
        <path d="M470 420L548 420L548 394L610 436L548 478L548 452L470 452Z" fill="#0b0b0b" transform="translate(6 6) scale(.9)" />
        <path d="M470 420L548 420L548 394L610 436L548 478L548 452L470 452Z" fill="#ff5400" transform="scale(.9)" />
      </g>
    </svg>
  );
}

/** Hand-drawn, chunky "go" arrow: a slightly curved shaft with a bold head. Springs forward on hover (see .cool-arrow in CSS). */
export function CoolArrow({ className }: { className?: string }) {
  return (
    <svg className={`cool-arrow ${className ?? ""}`} viewBox="0 0 48 48" fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 39C14 31 22 22 35 13" />
        <path d="M19 10.500H36.500V28" />
      </g>
    </svg>
  );
}

/** A hand making a peace sign and holding up a "LET'S TALK" card (line-art illustration, same language as the reference). */
export function HandSign({ className }: { className?: string }) {
  const skin = "#fda078";
  const k = { stroke: "#0b0b0b", strokeWidth: 5, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  return (
    <svg className={className} viewBox="0 0 360 560" aria-hidden>
      {/* raised fingers (behind the card) */}
      <g transform="rotate(-6 138 330)">
        <rect x="108" y="130" width="52" height="210" rx="26" fill={skin} {...k} />
        <path d="M118 262Q134 270 150 262" fill="none" {...k} />
      </g>
      <g transform="rotate(7 212 330)">
        <rect x="186" y="118" width="52" height="222" rx="26" fill={skin} {...k} />
        <path d="M196 270Q212 278 228 270" fill="none" {...k} />
      </g>
      {/* palm + wrist */}
      <path d="M100 318C84 368 92 430 112 470L108 570H266L266 470C296 428 302 360 262 318C230 296 130 296 100 318Z" fill={skin} {...k} />
      {/* folded fingers */}
      <rect x="214" y="320" width="84" height="44" rx="22" fill={skin} transform="rotate(-14 256 342)" {...k} />
      <rect x="226" y="366" width="74" height="40" rx="20" fill={skin} transform="rotate(-10 262 386)" {...k} />
      {/* thumb across them */}
      <path d="M120 440C150 456 206 430 252 372C262 360 276 372 266 386C228 440 170 484 122 478Z" fill={skin} {...k} />
      <path d="M244 372Q256 366 262 378" fill="none" {...k} />
      {/* card */}
      <g transform="rotate(-6 180 90)">
        <rect x="18" y="14" width="324" height="156" fill="#fdf8f5" {...k} />
        <text x="46" y="108" fill="#ff5400" fontFamily="Mdnichrometest, 'Hanken Grotesk Variable', sans-serif" fontWeight="700" fontSize="92" textLength="268" lengthAdjust="spacingAndGlyphs">LET’S TALK</text>
        <g {...k} fill="none" strokeWidth="4.500">
          <circle cx="262" cy="142" r="16" />
          <path d="M254 138V140M270 138V140" />
          <path d="M254 147Q262 154 270 147" />
        </g>
      </g>
    </svg>
  );
}
