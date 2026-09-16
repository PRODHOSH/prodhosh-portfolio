"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Mic, Send, Bot, User } from "lucide-react";
import { getChatbotResponse } from "@/lib/chatbotLogic";

export default function AskProWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm askPro. How can I help you?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recog = new SpeechRecognition();
        recog.continuous = false;
        recog.interimResults = true;
        
        recog.onresult = (event: any) => {
          let currentTranscript = "";
          for (let i = event.resultIndex; i < event.results.length; i++) {
            currentTranscript += event.results[i][0].transcript;
          }
          setInput(currentTranscript);
        };
        
        recog.onerror = (event: any) => {
          console.error("Speech recognition error", event.error);
          setIsListening(false);
        };
        
        recog.onend = () => {
          setIsListening(false);
        };
        
        setRecognition(recog);
      }
    }
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    // Add user message
    setMessages(prev => [...prev, { id: Date.now(), text: userMsg, sender: "user" }]);
    setInput("");
    setIsTyping(true);

    // Get response from logic engine
    const botResponse = getChatbotResponse(userMsg);
    
    // Calculate dynamic typing delay (simulate human typing speed)
    const typingDelay = Math.min(Math.max(botResponse.length * 20, 600), 2000);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        text: botResponse, 
        sender: "bot" 
      }]);
    }, typingDelay);
  };

  const toggleListen = () => {
    if (!recognition) {
      alert("Speech recognition is not supported in your browser.");
      return;
    }
    
    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      setInput(""); // clear input when starting to listen
      recognition.start();
      setIsListening(true);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[350px] sm:w-[380px] h-[500px] max-h-[calc(100vh-160px)] bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 border border-emerald-500/30">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white tracking-tight flex items-center gap-2">
                    askPro 
                    <span className="text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">BETA</span>
                  </h3>
                  <p className="text-xs text-emerald-500 flex items-center gap-1.5 mt-0.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Ready to answer
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 custom-scrollbar">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex items-start gap-3 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    msg.sender === "user" ? "bg-white/10 text-white" : "bg-emerald-500/20 text-emerald-500"
                  }`}>
                    {msg.sender === "user" ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  
                  <div className={`px-4 py-3 rounded-2xl max-w-[80%] text-sm leading-relaxed ${
                    msg.sender === "user" 
                      ? "bg-white text-black rounded-tr-sm font-medium" 
                      : "bg-white/10 text-neutral-200 rounded-tl-sm border border-white/5"
                  }`}>
                    {msg.sender === "user" ? (
                      msg.text
                    ) : (
                      <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="px-4 py-4 rounded-2xl rounded-tl-sm bg-white/10 text-neutral-200 flex items-center gap-1.5 border border-white/5">
                    <motion.div className="w-1.5 h-1.5 bg-neutral-400 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                    <motion.div className="w-1.5 h-1.5 bg-neutral-400 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                    <motion.div className="w-1.5 h-1.5 bg-neutral-400 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <div className="flex items-end gap-2 bg-black/40 rounded-xl p-2 border border-white/5 focus-within:border-emerald-500/50 transition-colors">
                <textarea 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent border-none outline-none text-white text-sm resize-none max-h-32 min-h-[32px] py-1.5 px-2"
                  rows={1}
                />
                
                <div className="flex items-center gap-1 pb-1">
                  <button 
                    onClick={toggleListen}
                    title={recognition ? "Click to speak" : "Speech not supported"}
                    className={`p-2 rounded-lg transition-colors ${
                      isListening ? "bg-red-500/20 text-red-500" : "text-neutral-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Mic size={18} className={isListening ? "animate-pulse" : ""} />
                  </button>
                  <button 
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className="p-2 bg-emerald-500 text-black rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-400 transition-colors"
                  >
                    <Send size={18} className="translate-x-[-1px] translate-y-[1px]" />
                  </button>
                </div>
              </div>
              <p className="text-[10px] text-center text-neutral-500 mt-3 font-medium">
                askPro uses hardcoded logic. Responses are limited to predefined topics.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-emerald-500 text-black rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)] z-50 hover:bg-emerald-400 transition-colors"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageSquare size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
