"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, Phone } from "lucide-react";
import { navLinks } from "@/lib/data";
import Button from "./Button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

export default function MobileMenu({ open, onClose, pathname }: MobileMenuProps) {
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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-brand-light shadow-xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight font-serif"
            onClick={onClose}
          >
            Structura Outdoors
          </Link>
          <button
            type="button"
            className="p-2 text-brand-dark"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="px-6 py-8 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`text-lg font-medium py-2 transition-colors ${
                pathname === link.href
                  ? "text-brand-cta"
                  : "text-brand-dark hover:text-brand-cta"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="px-6 py-6 border-t border-brand-border flex flex-col gap-4">
          <a
            href="tel:+14035551234"
            className="flex items-center gap-2 text-sm font-medium text-brand-dark/70"
          >
            <Phone size={16} />
            (403) 555-1234
          </a>
          <Button variant="primary" size="lg" href="/request-quote" className="w-full">
            Request a Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
