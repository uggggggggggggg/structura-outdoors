"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

let nextId = 0;
function genId() {
  return `msg-${++nextId}-${Date.now()}`;
}

const BUDGET_CHIPS = [
  "Under $10,000",
  "$10,000 – $30,000",
  "$30,000 – $75,000",
  "$75,000+",
  "Not sure yet",
];

export default function ChatAgent() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const sendMessage = useCallback(
    async (text: string) => {
      if (status === "loading") return;

      const userMsg: Message = {
        id: genId(),
        role: "user",
        content: text,
      };

      const updatedMessages = [...messages, userMsg];
      setMessages(updatedMessages);
      setStatus("loading");

      try {
        const res = await fetch("/api/chat?mode=json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: updatedMessages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          }),
        });

        const data = await res.json();

        if (data.content) {
          setMessages((prev) => [
            ...prev,
            {
              id: genId(),
              role: "assistant",
              content: data.content,
            },
          ]);
        }
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: genId(),
            role: "assistant",
            content:
              "I'm having trouble connecting right now. Please try again in a moment.",
          },
        ]);
      } finally {
        setStatus("idle");
      }
    },
    [messages, status],
  );

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    sendMessage(text);
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

  const loading = status === "loading";

  const showBudgetChips = useMemo(() => {
    if (messages.length === 0) return false;
    const lastAssistant = [...messages]
      .reverse()
      .find((m) => m.role === "assistant");
    if (!lastAssistant) return false;

    const text = lastAssistant.content.toLowerCase();
    const hasBudgetKeywords =
      text.includes("budget") ||
      text.includes("spend") ||
      text.includes("investment") ||
      text.includes("price") ||
      text.includes("cost") ||
      text.includes("looking to invest");

    const userMentionedBudget = messages.some(
      (m) =>
        m.role === "user" &&
        (m.content.includes("$") ||
          m.content.toLowerCase().includes("budget") ||
          m.content.toLowerCase().includes("under 10") ||
          m.content.toLowerCase().includes("not sure")),
    );

    return hasBudgetKeywords && !userMentionedBudget;
  }, [messages]);

  return (
    <>
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

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FAFBF7]">
              {messages.length === 0 && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-white border border-[#DCE2D6] px-4 py-2.5 text-sm leading-relaxed text-[#3D4A38]">
                    Hi, I&apos;m Ava — Senior Design Consultant at Structura
                    Outdoors. I specialize in Japandi-style landscaping for
                    Calgary properties. What&apos;s your name?
                  </div>
                </div>
              )}

              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-[#1a2e1a] text-white rounded-br-md"
                        : "bg-white border border-[#DCE2D6] text-[#3D4A38] rounded-bl-md"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {showBudgetChips && !loading && (
                <motion.div
                  className="flex flex-wrap gap-2 pl-2"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {BUDGET_CHIPS.map((chip) => (
                    <motion.button
                      key={chip}
                      type="button"
                      onClick={() => sendMessage(chip)}
                      className="rounded-full border border-[#DCE2D6] bg-white px-3 py-1.5 text-xs font-medium text-[#3D4A38] hover:border-[#5A7D4A] hover:bg-[#5A7D4A]/5 transition-colors"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {chip}
                    </motion.button>
                  ))}
                </motion.div>
              )}

              {loading && (
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
                disabled={loading}
                className="flex-1 rounded-full border border-[#DCE2D6] bg-[#F2F5ED] px-4 py-2.5 text-sm text-brand-dark placeholder:text-[#A0B09A] focus:border-[#5A7D4A] focus:outline-none focus:ring-1 focus:ring-[#5A7D4A] transition-all duration-200 disabled:opacity-50"
              />
              <motion.button
                type="submit"
                disabled={!input.trim() || loading}
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
