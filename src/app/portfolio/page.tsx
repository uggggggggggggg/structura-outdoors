import type { Metadata } from "next";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import Badge from "@/components/Badge";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio | Our Work — Structura Outdoors Calgary",
  description:
    "Browse our portfolio of luxury decking, modern garden design, and foundation repair projects across Calgary. Before-and-after transformations.",
};

export default function PortfolioPage() {
  return (
    <>
      <Section className="bg-brand-dark text-white">
        <div className="max-w-3xl">
          <ScrollReveal>
            <Badge className="bg-white/10 text-brand-accent">Our Work</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
              The work speaks for itself.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-lg leading-relaxed text-brand-light/60">
              Every project is a transformation. Drag the slider on any image to
              see the before and after — or browse the galleries below.
            </p>
          </ScrollReveal>
        </div>
      </Section>
      <PortfolioGrid />
    </>
  );
}
