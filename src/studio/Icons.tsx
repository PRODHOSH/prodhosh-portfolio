// Sticker-style service icons: orange fill, thick black outline, peach drop shadow (same language as the reference).
// Every icon has its own little motion (class "ic-*", keyframes live in studio.css), like the reference's animated stickers.

const S = { stroke: "#0b0b0b", strokeWidth: 5, strokeLinecap: "round", strokeLinejoin: "round" } as const;

function Tile({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden className="icon-svg">
      <rect x="14" y="16" width="96" height="96" rx="26" fill="#fcc7b0" />
      <g transform="translate(0 -4)">{children}</g>
    </svg>
  );
}

const O = "#ff5400";
const W = "#fdf8f5";
const B = "#0b0b0b";

export const icons: Record<string, () => React.ReactElement> = {
  web: () => (
    <Tile>
      <rect x="14" y="22" width="90" height="72" rx="14" fill={W} {...S} />
      <path d="M14 42H104" {...S} />
      <circle cx="28" cy="32" r="3" fill={O} stroke={B} strokeWidth="2.5" />
      <circle cx="40" cy="32" r="3" fill={O} stroke={B} strokeWidth="2.5" />
      <rect className="ic-block" x="28" y="54" width="30" height="26" rx="6" fill={O} {...S} />
      <path d="M68 58H90M68 70H84" {...S} />
      <path className="ic-cursor" d="M74 84L88 94L82 80Z" fill={B} stroke={B} strokeWidth="3" strokeLinejoin="round" />
    </Tile>
  ),
  apps: () => (
    <Tile>
      <path className="ic-l3" d="M18 74L59 94L100 74" {...S} />
      <path className="ic-l2" d="M18 58L59 78L100 58" {...S} />
      <path className="ic-l1" d="M59 22L100 42L59 62L18 42Z" fill={O} {...S} />
    </Tile>
  ),
  mobile: () => (
    <Tile>
      <g className="ic-phone">
        <rect x="34" y="14" width="52" height="92" rx="14" fill={W} {...S} />
        <rect className="ic-screen" x="42" y="28" width="36" height="52" rx="6" fill={O} {...S} />
        <path d="M52 20H68" {...S} />
        <circle cx="60" cy="92" r="4" fill={B} />
      </g>
    </Tile>
  ),
  software: () => (
    <Tile>
      <rect x="12" y="24" width="96" height="70" rx="12" fill={B} {...S} />
      <path className="ic-prompt" d="M32 46L46 58L32 70" stroke={O} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path className="ic-caret" d="M56 72H82" stroke={W} strokeWidth="7" strokeLinecap="round" />
    </Tile>
  ),
  ai: () => (
    <Tile>
      <path className="ic-spark" d="M60 14C62 38 74 50 100 56C74 62 62 74 60 100C58 74 46 62 20 56C46 50 58 38 60 14Z" fill={O} {...S} />
      <path className="ic-spark2" d="M94 18C95 26 99 30 106 32C99 34 95 38 94 46C93 38 89 34 82 32C89 30 93 26 94 18Z" fill={W} stroke={B} strokeWidth="4" strokeLinejoin="round" />
    </Tile>
  ),
  logo: () => (
    <Tile>
      <g className="ic-nib">
        <path d="M60 14L88 56L74 84H46L32 56Z" fill={O} {...S} />
        <path d="M60 14V62" {...S} />
        <circle className="ic-dot" cx="60" cy="68" r="6" fill={W} stroke={B} strokeWidth="4" />
      </g>
      <rect x="42" y="88" width="36" height="14" rx="7" fill={B} />
    </Tile>
  ),
  auto: () => (
    <Tile>
      <circle className="ic-ring" cx="60" cy="58" r="30" fill={W} {...S} />
      <path className="ic-bolt" d="M66 28L46 62H60L54 90L76 54H62Z" fill={O} {...S} />
    </Tile>
  ),
  cloud: () => (
    <Tile>
      <g className="ic-cloud">
        <path d="M38 88C22 88 14 76 18 64C22 52 34 50 40 52C42 36 58 28 72 36C82 42 84 50 84 52C98 52 104 68 98 80C94 86 88 88 82 88Z" fill={O} {...S} />
        <path className="ic-up" d="M44 74L60 60L76 74" stroke={W} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </Tile>
  ),
};

/** The pencil that draws the line as you scroll. */
export function PenHead() {
  return (
    <g>
      <circle r="34" fill="#ff5400" stroke="#0b0b0b" strokeWidth="5" />
      <g transform="rotate(-45) translate(-6 -3)">
        <path d="M-4 -16L16 -16L16 16L-4 16L-22 0Z" fill="#fdf8f5" stroke="#0b0b0b" strokeWidth="4" strokeLinejoin="round" />
        <path d="M-22 0L-14 -5V5Z" fill="#0b0b0b" />
        <path d="M2 -16V16" stroke="#0b0b0b" strokeWidth="4" />
      </g>
    </g>
  );
}
