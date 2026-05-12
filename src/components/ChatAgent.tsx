"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "@ai-sdk/react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

export default function ChatAgent() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, status, sendMessage } = useChat();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const handleSend = () => {
    const text = input.trim();
    if (!text || status === "submitted") return;
    sendMessage({ text });
    setInput("");
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend();
  };

  const submitting = status === "submitted";

  return (
    <>
      {/* Toggle button — always visible */}
      <motion.button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1a2e1a] text-white shadow-xl hover:bg-[#1f3d1f] transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        aria-label={open ? "Close chat" : "Chat with our design consultant"}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
        {!open && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#3E5C3A]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3E5C3A]/60" />
            <Sparkles size={8} className="text-white relative z-10" />
          </span>
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed z-40 bottom-20 right-5 w-[calc(100%-40px)] max-w-sm overflow-hidden rounded-2xl border border-[#DCE2D6] bg-white shadow-2xl flex flex-col"
            style={{ maxHeight: "min(560px, calc(100dvh - 140px))" }}
            initial={{ opacity: 0, scale: 0.9, y: 20, x: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20, x: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 bg-[#1a2e1a] text-white shrink-0">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <Sparkles size={16} className="text-white/90" />
              </div>
              <div>
                <p className="text-sm font-semibold font-serif">Ava</p>
                <p className="text-[11px] text-white/60">
                  Senior Design Consultant
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FAFBF7]">
              {/* Welcome message shown when no messages yet */}
              {messages.length === 0 && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-white border border-[#DCE2D6] px-4 py-2.5 text-sm leading-relaxed text-[#3D4A38]">
                    Hi, I&apos;m Ava — Senior Design Consultant at Structura
                    Outdoors. I specialize in Japandi-style landscaping for
                    Calgary properties. What&apos;s your name?
                  </div>
                </div>
              )}

              {messages.map((m) => {
                const msg = m as {
                  id: string;
                  role: string;
                  parts: Array<{ type: string; text: string }>;
                };
                return (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-[#1a2e1a] text-white rounded-br-md"
                          : "bg-white border border-[#DCE2D6] text-[#3D4A38] rounded-bl-md"
                      }`}
                    >
                      {msg.parts
                        .filter((p) => p.type === "text")
                        .map((part, i) => (
                          <span key={i}>{part.text}</span>
                        ))}
                    </div>
                  </div>
                );
              })}

              {submitting && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-white border border-[#DCE2D6] px-4 py-2.5">
                    <div className="flex items-center gap-2 text-sm text-[#3D4A38]">
                      <span className="inline-block w-1.5 h-1.5 bg-[#5A7D4A] rounded-full animate-pulse" />
                      <span className="text-[#A0B09A]">Typing...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={onFormSubmit}
              className="flex items-center gap-2 px-4 py-3 border-t border-[#DCE2D6] bg-white shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Type your message..."
                disabled={submitting}
                className="flex-1 rounded-full border border-[#DCE2D6] bg-[#F2F5ED] px-4 py-2.5 text-sm text-brand-dark placeholder:text-[#A0B09A] focus:border-[#5A7D4A] focus:outline-none focus:ring-1 focus:ring-[#5A7D4A] transition-all duration-200 disabled:opacity-50"
              />
              <motion.button
                type="submit"
                disabled={!input.trim() || submitting}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a2e1a] text-white hover:bg-[#1f3d1f] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.93 }}
              >
                <Send size={15} />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
