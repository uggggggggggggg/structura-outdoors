import Link from "next/link";
import { Mail, MapPin, Phone, Star } from "lucide-react";
import { navLinks } from "@/lib/data";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight">
              <span className="font-serif font-bold">Structura</span>
              <span className="font-light text-brand-accent"> Outdoors</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-brand-light/60">
              Premium decking, modern garden design, and foundation repair for
              Calgary homeowners and commercial properties. Licensed. Insured.
              Built to last.
            </p>
            <div className="mt-4 flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-brand-cta text-brand-cta" />
              ))}
              <span className="ml-2 text-sm text-brand-light/60">
                4.9/5 from 120+ Calgary reviews
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-accent">
              Services
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              <Link
                href="/services#decking"
                className="text-sm text-brand-light/60 hover:text-brand-light transition-colors"
              >
                Decking
              </Link>
              <Link
                href="/services#garden-design"
                className="text-sm text-brand-light/60 hover:text-brand-light transition-colors"
              >
                Modern Garden Design
              </Link>
              <Link
                href="/services#foundation-repair"
                className="text-sm text-brand-light/60 hover:text-brand-light transition-colors"
              >
                Foundation Repair
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-accent">
              Company
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              {navLinks
                .filter((l) => l.label !== "Home")
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-brand-light/60 hover:text-brand-light transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-accent">
              Contact
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <p className="flex items-start gap-3 text-sm text-brand-light/60">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-accent" />
                Serving Calgary, Alberta and surrounding areas
              </p>
              <a
                href="tel:+14035551234"
                className="flex items-center gap-3 text-sm text-brand-light/60 hover:text-brand-light transition-colors"
              >
                <Phone size={16} className="text-brand-accent" />
                (403) 555-1234
              </a>
              <a
                href="mailto:hello@structuraoutdoors.ca"
                className="flex items-center gap-3 text-sm text-brand-light/60 hover:text-brand-light transition-colors"
              >
                <Mail size={16} className="text-brand-accent" />
                hello@structuraoutdoors.ca
              </a>
            </div>
            <div className="mt-6">
              <Button variant="primary" size="sm" href="/request-quote">
                Get Free Estimate
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-light/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-light/40">
            &copy; {new Date().getFullYear()} Structura Outdoors. All rights reserved.
          </p>
          <p className="text-xs text-brand-light/40">
            Proudly serving Calgary, Alberta. BBB Accredited. Fully Insured. WCB
            Covered.
          </p>
        </div>
      </div>
    </footer>
  );
}
