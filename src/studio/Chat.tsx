"use client";

// askPro: floating AI chat. Chats are kept in localStorage, replies come from /api/chat (OpenRouter),
// and the finished conversation is emailed to the site owner via /api/log-chat (Gmail SMTP, server-side).

import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { ArrowUp, MessageCircle, Mic, RotateCcw, X } from "lucide-react";
import { gsap, reducedMotion } from "./motion";

type Msg = { id: number; sender: "user" | "bot"; text: string; isAi?: boolean };

const STORE = "askpro:v1";
const HELLO: Msg = { id: 1, sender: "bot", text: "yo, i'm askPro. ask me anything about prodhosh, his work or hiring him." };
const CHIPS = ["what do u build?", "is he open for freelance?", "show me his projects", "how do i hire him?"];

function linkify(text: string) {
  const parts = text.split(/(https?:\/\/[^\s]+|[\w.+-]+@[\w-]+\.[\w.]+|(?:cal\.com|links\.prodhosh\.me|bsprep\.in|[a-z0-9-]+\.prodhosh\.me)[^\s]*)/gi);
  return parts.map((p, i) => {
    if (i % 2 === 0) return <Fragment key={i}>{p}</Fragment>;
    const clean = p.replace(/[.,!?]+$/, "");
    const tail = p.slice(clean.length);
    const href = clean.includes("@") ? `mailto:${clean}` : clean.startsWith("http") ? clean : `https://${clean}`;
    return (
      <Fragment key={i}>
        <a href={href} target="_blank" rel="noopener noreferrer">{clean}</a>{tail}
      </Fragment>
    );
  });
}

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([HELLO]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [listening, setListening] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const end = useRef<HTMLDivElement>(null);
  const logged = useRef(0);
  const msgsRef = useRef(msgs);
  const rec = useRef<{ start: () => void; stop: () => void } | null>(null);
  const seq = useRef(100);
  useEffect(() => { msgsRef.current = msgs; }, [msgs]);

  // restore chat from localStorage
  useEffect(() => {
    const t = window.setTimeout(() => {
      try {
        const saved = JSON.parse(localStorage.getItem(STORE) || "null") as Msg[] | null;
        if (Array.isArray(saved) && saved.length) {
          setMsgs(saved);
          logged.current = saved.length;
          seq.current = Math.max(seq.current, ...saved.map((m) => m.id)) + 1;
        }
      } catch { /* storage can be blocked */ }
    }, 0);
    return () => window.clearTimeout(t);
  }, []);
  useEffect(() => {
    try { localStorage.setItem(STORE, JSON.stringify(msgs.slice(-40))); } catch { /* ignore */ }
  }, [msgs]);

  // email the transcript when the chat is closed or the page is left (only if there is something new)
  const log = useCallback((beacon: boolean) => {
    const list = msgsRef.current;
    if (list.length <= logged.current || !list.some((m) => m.sender === "user")) return;
    logged.current = list.length;
    const body = JSON.stringify({ messages: list });
    if (beacon && navigator.sendBeacon) navigator.sendBeacon("/api/log-chat", body);
    else fetch("/api/log-chat", { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true }).catch(() => undefined);
  }, []);
  useEffect(() => {
    const onHide = () => log(true);
    window.addEventListener("pagehide", onHide);
    return () => window.removeEventListener("pagehide", onHide);
  }, [log]);

  // hide the launcher while the contact overlay is open
  useEffect(() => {
    const onToggle = (e: Event) => setHidden((e as CustomEvent<{ open: boolean }>).detail.open);
    window.addEventListener("contact:toggle", onToggle);
    return () => window.removeEventListener("contact:toggle", onToggle);
  }, []);

  useEffect(() => { end.current?.scrollIntoView({ behavior: "smooth", block: "end" }); }, [msgs, typing, open]);

  useEffect(() => {
    if (!panel.current || reducedMotion()) return;
    if (open) gsap.fromTo(panel.current, { y: 30, opacity: 0, scale: 0.92 }, { y: 0, opacity: 1, scale: 1, duration: 0.55, ease: "back.out(1.5)" });
  }, [open]);

  const close = () => { setOpen(false); log(false); };

  const send = async (text: string) => {
    const t = text.trim();
    if (!t || typing) return;
    const next = [...msgsRef.current, { id: ++seq.current, sender: "user" as const, text: t }];
    setMsgs(next);
    setInput("");
    setTyping(true);
    let reply = "";
    try {
      const history = next.slice(-7).map((m) => ({ role: m.sender === "user" ? "user" : "assistant", content: m.text }));
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: history }) });
      const data = await res.json().catch(() => ({}));
      reply = data.response || "hmm, my brain glitched. try again?";
    } catch {
      reply = "my ai brain is a bit fried right now tbh. try again in a sec, or email hello@prodhosh.me";
    }
    setTyping(false);
    setMsgs((m) => [...m, { id: ++seq.current, sender: "bot", text: reply, isAi: true }]);
  };

  const reset = () => {
    log(false);
    setMsgs([HELLO]);
    logged.current = 0;
  };

  const mic = () => {
    type SR = new () => { continuous: boolean; interimResults: boolean; onresult: (e: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void; onend: () => void; onerror: () => void; start: () => void; stop: () => void };
    const w = window as unknown as { SpeechRecognition?: SR; webkitSpeechRecognition?: SR };
    const Ctor = w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!Ctor) return;
    if (listening) { rec.current?.stop(); return; }
    const r = new Ctor();
    r.continuous = false;
    r.interimResults = true;
    r.onresult = (e) => setInput(Array.from(e.results).map((x) => x[0].transcript).join(""));
    r.onend = () => setListening(false);
    r.onerror = () => setListening(false);
    rec.current = r;
    setInput("");
    setListening(true);
    r.start();
  };

  return (
    <div className="chat" style={{ display: hidden ? "none" : undefined }}>
      {open && (
        <div className="chat-panel" ref={panel} role="dialog" aria-label="askPro chat">
          <div className="chat-head">
            <div>
              <h3>askPro</h3>
              <p><i className="dot" />ready to answer</p>
            </div>
            <div className="chat-head-btns">
              <button onClick={reset} aria-label="Start a new chat" title="New chat"><RotateCcw size={16} strokeWidth={2.4} /></button>
              <button onClick={close} aria-label="Close chat" data-cursor="CLOSE"><X size={18} strokeWidth={2.6} /></button>
            </div>
          </div>

          <div className="chat-body">
            {msgs.map((m) => (
              <div key={m.id} className={`bubble ${m.sender}`}>{m.sender === "bot" ? linkify(m.text) : m.text}</div>
            ))}
            {typing && <div className="bubble bot typing"><span /><span /><span /></div>}
            {msgs.length === 1 && !typing && (
              <div className="chat-chips">
                {CHIPS.map((c) => <button key={c} onClick={() => send(c)}>{c}</button>)}
              </div>
            )}
            <div ref={end} />
          </div>

          <form className="chat-input" onSubmit={(e) => { e.preventDefault(); send(input); }}>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="ask me anything…" maxLength={400} aria-label="Message" />
            <button type="button" className={`mic ${listening ? "on" : ""}`} onClick={mic} aria-label="Speak"><Mic size={17} strokeWidth={2.4} /></button>
            <button type="submit" className="go" disabled={!input.trim() || typing} aria-label="Send"><ArrowUp size={18} strokeWidth={2.8} /></button>
          </form>
          <p className="chat-note">AI can make mistakes. This chat is emailed to Prodhosh so he can follow up.</p>
        </div>
      )}

      <button className={`chat-fab ${open ? "is-open" : ""}`} onClick={() => (open ? close() : setOpen(true))} aria-label={open ? "Close chat" : "Open chat"} data-cursor={open ? "CLOSE" : "ASK"}>
        {open ? <X size={22} strokeWidth={2.6} /> : <><MessageCircle size={20} strokeWidth={2.4} /><span>Ask me</span></>}
      </button>
    </div>
  );
}
