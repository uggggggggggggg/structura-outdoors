"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Loader2, BookOpen } from "lucide-react";
import { useExitIntent } from "@/hooks/useExitIntent";

export default function LeadGenPopup() {
  const { showPopup, dismiss } = useExitIntent();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => email.trim().length > 0 && email.includes("@");

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!validate()) return;
      setStatus("loading");
      try {
        await fetch("/api/guide", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        setStatus("success");
      } catch {
        setStatus("success");
      }
    },
    [email],
  );

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-brand-dark/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
          />

          <motion.div
            className="relative z-10 flex w-full max-w-2xl overflow-hidden rounded-2xl bg-[#FDFCFA] shadow-2xl"
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 30 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          >
            {/* Left: image panel */}
            <div className="relative hidden md:block w-2/5 bg-[#8B9D8B] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7D8B7A]/90 to-[#6B7A68]/95" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#A3B5A1_0%,transparent_70%)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <BookOpen size={40} className="text-white/60 mb-4" />
                <p className="font-serif text-xl font-semibold text-white/80 leading-relaxed">
                  Calgary Outdoor Living
                  <br />
                  <span className="text-white/50 text-base font-sans font-normal">
                    Investment Guide
                  </span>
                </p>
                <div className="mt-6 w-16 h-px bg-white/20" />
              </div>
            </div>

            {/* Right: content */}
            <div className="relative flex-1 p-6 sm:p-8 md:p-10">
              <motion.button
                type="button"
                onClick={dismiss}
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-[#8C8C88] hover:bg-[#E5E0D8] hover:text-brand-dark transition-colors"
                whileTap={{ scale: 0.9 }}
                aria-label="Close"
              >
                <X size={16} />
              </motion.button>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center py-8 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-[#8B9D8B]/15 mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                    >
                      <Check size={28} className="text-[#7D8B7A]" />
                    </motion.div>
                    <h3 className="font-serif text-xl font-bold text-brand-dark">
                      Check your inbox.
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#4A4A47] max-w-xs">
                      Your copy of <em>The Calgary Outdoor Living Investment Guide</em>{" "}
                      is on its way. If you don&apos;t see it, check your spam folder.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C8C88]">
                      Free Resource
                    </p>

                    <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-bold text-brand-dark leading-tight tracking-tight">
                      Increase Your Property Value.
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-[#4A4A47]">
                      Download <em>The Calgary Outdoor Living Investment Guide</em>.
                      Learn the exact materials and modern designs that survive
                      Alberta winters and maximize your home&apos;s equity.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your email address"
                          required
                          className="w-full rounded-lg border border-[#E5E0D8] bg-[#F5F3F0] px-4 py-3 text-sm text-brand-dark placeholder:text-[#B8A99A] focus:border-[#7D8B7A] focus:outline-none focus:ring-1 focus:ring-[#7D8B7A] transition-all duration-200"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={status === "loading"}
                        className="flex items-center justify-center gap-2 rounded-lg bg-[#7D8B7A] px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#6B7A68] disabled:opacity-60"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 size={14} className="animate-spin" /> Sending...
                          </>
                        ) : (
                          "Get the Free Guide"
                        )}
                      </motion.button>
                    </form>

                    <p className="mt-4 text-xs text-[#B8A99A] leading-relaxed">
                      No spam. Unsubscribe anytime. We&apos;ll never share your email.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
