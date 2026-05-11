import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import Badge from "@/components/Badge";
import PortfolioGrid from "@/components/PortfolioGrid";
import { pageHeroes } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio | Our Work — Structura Outdoors Calgary",
  description:
    "Browse our portfolio of luxury decking, modern garden design, and foundation repair projects across Calgary. Before-and-after transformations.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative min-h-[55vh] flex items-end bg-brand-dark">
        <Image
          src={pageHeroes.portfolio.src}
          alt={pageHeroes.portfolio.alt}
          fill
          className="absolute inset-0 object-cover"
          style={{ opacity: 0.35 }}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/50 to-brand-dark/15" />
        <div className="relative z-10 w-full mx-auto max-w-7xl px-6 pb-14 pt-28 lg:px-8">
          <ScrollReveal>
            <Badge className="bg-white/10 text-white/80">Our Work</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl max-w-3xl">
              The work speaks for itself.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-lg leading-relaxed text-white/60 max-w-2xl">
              Every project is a transformation. Drag the slider on any image to
              see the before and after — or browse the galleries below.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <PortfolioGrid />
    </>
  );
}
