"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone } from "lucide-react";
import { navLinks } from "@/lib/data";
import Button from "./Button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

const easeOut = [0.25, 0.46, 0.45, 0.94] as const;
const stagger = { animate: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } };
const linkAnim = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.35, ease: easeOut } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
};

export default function MobileMenu({ open, onClose, pathname }: MobileMenuProps) {
  const dragRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 lg:hidden">
          <motion.div
            className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          <motion.div
            ref={dragRef}
            className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-brand-light shadow-xl overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={{ left: 0, right: 0.3 }}
            onDragEnd={(_e, info) => {
              if (info.offset.x > 100 || info.velocity.x > 500) onClose();
            }}
          >
            <motion.div
              className="flex items-center justify-between px-6 py-4 border-b border-brand-border"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <Link
                href="/"
                className="text-xl font-bold tracking-tight font-serif"
                onClick={onClose}
              >
                Structura Outdoors
              </Link>
              <motion.button
                type="button"
                className="p-2 text-brand-dark"
                onClick={onClose}
                aria-label="Close menu"
                whileTap={{ scale: 0.85 }}
              >
                <X size={24} />
              </motion.button>
            </motion.div>

            <motion.nav
              className="px-6 py-8 flex flex-col gap-1"
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={linkAnim}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`block text-lg font-medium py-3 transition-colors ${
                      pathname === link.href
                        ? "text-brand-cta"
                        : "text-brand-dark hover:text-brand-cta"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div
              className="px-6 py-6 border-t border-brand-border flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <a
                href="tel:+14035551234"
                className="flex items-center gap-2 text-sm font-medium text-brand-dark/70"
              >
                <Phone size={16} />
                (403) 555-1234
              </a>
              <Button
                variant="primary"
                size="lg"
                href="/request-quote"
                className="w-full"
              >
                Request a Quote
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
