import React, { Component } from "react";

export default class CertificatesImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        width="500"
        height="375"
        aria-label="Certificates illustration"
      >
        {/* Background blob */}
        <ellipse
          cx="400"
          cy="520"
          rx="320"
          ry="55"
          fill={theme.imageHighlight}
          opacity="0.08"
        />

        {/* ── Desk surface ── */}
        <rect
          x="120"
          y="400"
          width="560"
          height="16"
          rx="4"
          fill={theme.text}
          opacity="0.08"
        />

        {/* ── Large certificate on desk ── */}
        <rect
          x="200"
          y="260"
          width="260"
          height="180"
          rx="10"
          fill="#fff"
          stroke={theme.imageHighlight}
          strokeWidth="2.5"
        />
        {/* cert top stripe */}
        <rect
          x="200"
          y="260"
          width="260"
          height="36"
          rx="10"
          fill={theme.imageHighlight}
          opacity="0.85"
        />
        <rect
          x="200"
          y="282"
          width="260"
          height="14"
          fill={theme.imageHighlight}
          opacity="0.85"
        />
        {/* cert lines */}
        <rect
          x="225"
          y="315"
          width="170"
          height="8"
          rx="4"
          fill={theme.imageHighlight}
          opacity="0.3"
        />
        <rect
          x="225"
          y="332"
          width="140"
          height="7"
          rx="3"
          fill={theme.imageHighlight}
          opacity="0.2"
        />
        <rect
          x="225"
          y="348"
          width="155"
          height="7"
          rx="3"
          fill={theme.imageHighlight}
          opacity="0.2"
        />
        {/* seal */}
        <circle
          cx="330"
          cy="400"
          r="26"
          fill="#fff"
          stroke={theme.imageHighlight}
          strokeWidth="2.5"
        />
        <circle
          cx="330"
          cy="400"
          r="19"
          fill={theme.imageHighlight}
          opacity="0.2"
        />
        {/* star */}
        <polygon
          points="330,385 333.5,394 343,394 335.5,399.5 338,409 330,404 322,409 324.5,399.5 317,394 326.5,394"
          fill={theme.imageHighlight}
          opacity="0.9"
        />
        {/* ribbon tails */}
        <polygon
          points="320,422 327,440 330,432 333,440 340,422"
          fill={theme.imageHighlight}
          opacity="0.7"
        />

        {/* ── Small certificate leaning right ── */}
        <g transform="rotate(8 530 330)">
          <rect
            x="450"
            y="270"
            width="160"
            height="120"
            rx="8"
            fill="#fff"
            stroke={theme.imageHighlight}
            strokeWidth="2"
            opacity="0.9"
          />
          <rect
            x="450"
            y="270"
            width="160"
            height="28"
            rx="8"
            fill={theme.imageHighlight}
            opacity="0.7"
          />
          <rect
            x="450"
            y="284"
            width="160"
            height="14"
            fill={theme.imageHighlight}
            opacity="0.7"
          />
          <rect
            x="466"
            y="312"
            width="100"
            height="7"
            rx="3"
            fill={theme.imageHighlight}
            opacity="0.25"
          />
          <rect
            x="466"
            y="326"
            width="80"
            height="6"
            rx="3"
            fill={theme.imageHighlight}
            opacity="0.18"
          />
          <circle
            cx="530"
            cy="365"
            r="16"
            fill="#fff"
            stroke={theme.imageHighlight}
            strokeWidth="2"
          />
          <polygon
            points="530,355 532.5,362 540,362 534,366 536,374 530,370 524,374 526,366 520,362 527.5,362"
            fill={theme.imageHighlight}
            opacity="0.85"
          />
        </g>

        {/* ── Person sitting ── */}
        {/* body */}
        <ellipse
          cx="165"
          cy="445"
          rx="42"
          ry="18"
          fill={theme.imageHighlight}
          opacity="0.15"
        />
        {/* legs */}
        <path
          d="M145,420 Q135,450 125,455"
          stroke={theme.text}
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M185,420 Q195,450 205,455"
          stroke={theme.text}
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        {/* torso */}
        <rect
          x="140"
          y="360"
          width="50"
          height="65"
          rx="14"
          fill={theme.imageHighlight}
          opacity="0.75"
        />
        {/* left arm - holding pen */}
        <path
          d="M140,380 Q110,390 100,410"
          stroke={theme.imageHighlight}
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
        {/* right arm */}
        <path
          d="M190,380 Q220,390 230,375"
          stroke={theme.imageHighlight}
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
        {/* neck */}
        <rect x="157" y="340" width="16" height="22" rx="7" fill="#ee8e9e" />
        {/* head */}
        <circle cx="165" cy="325" r="28" fill="#ee8e9e" />
        {/* hair */}
        <path
          d="M138,315 Q140,290 165,288 Q190,290 192,315 Q188,300 165,298 Q142,300 138,315Z"
          fill={theme.text}
          opacity="0.8"
        />
        {/* eye dots */}
        <circle cx="157" cy="323" r="3" fill={theme.text} opacity="0.7" />
        <circle cx="173" cy="323" r="3" fill={theme.text} opacity="0.7" />
        {/* smile */}
        <path
          d="M157,334 Q165,340 173,334"
          stroke={theme.text}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* pen in left hand */}
        <line
          x1="100"
          y1="410"
          x2="85"
          y2="430"
          stroke={theme.text}
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.6"
        />
        <polygon
          points="85,430 80,438 90,435"
          fill={theme.imageHighlight}
          opacity="0.8"
        />

        {/* ── Floating sparkles / stars ── */}
        <circle
          cx="600"
          cy="200"
          r="5"
          fill={theme.imageHighlight}
          opacity="0.4"
        />
        <circle
          cx="620"
          cy="180"
          r="3"
          fill={theme.imageHighlight}
          opacity="0.25"
        />
        <circle
          cx="580"
          cy="175"
          r="4"
          fill={theme.imageHighlight}
          opacity="0.3"
        />

        <circle
          cx="100"
          cy="200"
          r="6"
          fill={theme.imageHighlight}
          opacity="0.3"
        />
        <circle
          cx="75"
          cy="180"
          r="4"
          fill={theme.imageHighlight}
          opacity="0.2"
        />
        <circle
          cx="115"
          cy="165"
          r="3"
          fill={theme.imageHighlight}
          opacity="0.2"
        />

        {/* ── Badge / medal floating upper right ── */}
        <circle
          cx="650"
          cy="280"
          r="35"
          fill="#fff"
          stroke={theme.imageHighlight}
          strokeWidth="2.5"
        />
        <circle
          cx="650"
          cy="280"
          r="27"
          fill={theme.imageHighlight}
          opacity="0.15"
        />
        <polygon
          points="650,262 654,274 667,274 657,282 660,295 650,288 640,295 643,282 633,274 646,274"
          fill={theme.imageHighlight}
          opacity="0.9"
        />
        {/* ribbon */}
        <polygon
          points="640,313 647,330 650,320 653,330 660,313"
          fill={theme.imageHighlight}
          opacity="0.65"
        />

        {/* ── Plant / decoration ── */}
        <rect
          x="680"
          y="370"
          width="12"
          height="35"
          rx="4"
          fill="#a8a8a8"
          opacity="0.5"
        />
        <ellipse
          cx="686"
          cy="365"
          rx="18"
          ry="22"
          fill="#46455b"
          opacity="0.35"
        />
        <ellipse
          cx="672"
          cy="355"
          rx="14"
          ry="18"
          fill={theme.imageHighlight}
          opacity="0.4"
        />
        <ellipse
          cx="700"
          cy="355"
          rx="14"
          ry="18"
          fill={theme.imageHighlight}
          opacity="0.3"
        />
      </svg>
    );
  }
}
