"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, Phone } from "lucide-react";
import { navLinks } from "@/lib/data";
import Button from "./Button";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 z-40 w-full transition-shadow duration-300 ${
          scrolled
            ? "shadow-md border-b border-brand-border/50"
            : "border-b border-transparent"
        } bg-brand-light/90 backdrop-blur-md`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            <span className="font-serif font-bold text-brand-dark">Structura</span>
            <span className="font-light text-brand-accent"> Outdoors</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-cta ${
                  pathname === link.href
                    ? "text-brand-cta"
                    : "text-brand-dark/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+14035551234"
              className="flex items-center gap-2 text-sm font-medium text-brand-dark/70 hover:text-brand-dark transition-colors"
            >
              <Phone size={16} />
              (403) 555-1234
            </a>
            <Button variant="primary" size="sm" href="/request-quote">
              Request a Quote
            </Button>
          </div>

          <motion.button
            type="button"
            className="lg:hidden p-2 text-brand-dark"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            whileTap={{ scale: 0.85 }}
          >
            <Menu size={24} />
          </motion.button>
        </div>
      </motion.header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
