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
  
  // New State variables for Memory and History
  const [lastIntentId, setLastIntentId] = useState<string | null>(null);
  const [inputHistory, setInputHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [aiCredits, setAiCredits] = useState(3); // Abuse protection limit
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    // Save chat history to localStorage
    if (messages.length > 1) {
      localStorage.setItem("askPro_chatHistory", JSON.stringify(messages));
    }
  }, [messages, isTyping]);

  useEffect(() => {
    // Load chat history on mount
    const saved = localStorage.getItem("askPro_chatHistory");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) { console.error(e); }
    }

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

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    // Add user message
    setMessages(prev => [...prev, { id: Date.now(), text: userMsg, sender: "user" }]);
    
    // Add to input history
    setInputHistory(prev => [userMsg, ...prev]);
    setHistoryIndex(-1);
    
    setInput("");
    setIsTyping(true);

    // Localized Name Memory Logic
    let botResponse = "";
    let intentId: string | null = null;

    const nameMatch = userMsg.match(/(?:my name is|i am|im|call me)\s+([a-zA-Z]+)/i);
    if (nameMatch) {
      const name = nameMatch[1];
      localStorage.setItem('askPro_userName', name);
      botResponse = `nice to meet u ${name}! im askPro. u can ask me about prodhosh's projects or resume.`;
      intentId = "local_name_save"; // Skip AI
    } else if (userMsg.toLowerCase().includes("remember me") || userMsg.toLowerCase().includes("what is my name") || userMsg.toLowerCase().includes("whats my name")) {
      const name = localStorage.getItem('askPro_userName');
      botResponse = name ? `yepp u are ${name}! what's up?` : `nope, u never told me ur name lol.`;
      intentId = "local_name_recall"; // Skip AI
    } else {
      // Get response from logic engine with contextual memory
      const result = getChatbotResponse(userMsg, lastIntentId);
      botResponse = result.response;
      intentId = result.intentId;
    }
    
    if (intentId) {
      setLastIntentId(intentId);
    } else {
      // Layer 2: Secure AI Fallback with Credits Limit
      if (aiCredits > 0) {
        try {
          const apiMessages = messages.slice(-5).map(m => ({
            role: m.sender === 'user' ? 'user' : 'assistant',
            content: m.text
          }));
          apiMessages.push({ role: 'user', content: userMsg });

          const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages: apiMessages })
          });
          
          if (res.ok) {
            const data = await res.json();
            botResponse = data.response;
            setAiCredits(prev => prev - 1);
          } else if (res.status === 429) {
             botResponse = "whoa slow down there! u hit the api rate limit ngl. ask about my hardcoded stuff instead!";
          }
        } catch (error) {
          console.error("AI Fallback failed", error);
        }
      } else {
        botResponse = "im out of AI juice tbh (credit limit reached). stick to asking about my projects, resume, or contact info ✌️";
      }
    }
    
    // Smart Typing: Calculate dynamic typing delay
    const baseDelay = botResponse.length * 15;
    const punctuationDelay = (botResponse.match(/[.,!?]/g) || []).length * 150;
    // If it's an AI response, we make the typing delay shorter since the API already took time
    const typingDelay = intentId ? Math.min(Math.max(baseDelay + punctuationDelay, 600), 2500) : 300;

    // Fire-and-forget email logging (does not block UI)
    fetch("/api/log-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question: userMsg,
        answer: botResponse,
        isAi: intentId === null
      })
    }).catch(err => console.error("Failed to log chat", err));

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
                    } else if (e.key === 'ArrowUp') {
                      e.preventDefault();
                      if (inputHistory.length > 0 && historyIndex < inputHistory.length - 1) {
                        const newIdx = historyIndex + 1;
                        setHistoryIndex(newIdx);
                        setInput(inputHistory[newIdx]);
                      }
                    } else if (e.key === 'ArrowDown') {
                      e.preventDefault();
                      if (historyIndex > 0) {
                        const newIdx = historyIndex - 1;
                        setHistoryIndex(newIdx);
                        setInput(inputHistory[newIdx]);
                      } else if (historyIndex === 0) {
                        setHistoryIndex(-1);
                        setInput("");
                      }
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
