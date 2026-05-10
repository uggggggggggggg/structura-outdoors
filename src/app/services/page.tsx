import type { Metadata } from "next";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import { LayoutGrid, Flower2, Shield, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Decking, Garden Design & Foundation Repair — Calgary",
  description:
    "Premium decking, modern garden design, and foundation repair for Calgary homes and commercial properties. Engineered for Alberta extremes.",
};

const services = [
  {
    id: "decking",
    title: "Decking",
    tagline: "Purpose-built for Calgary&apos;s four seasons.",
    description:
      "From low-maintenance composite to natural cedar, we engineer decks that survive freeze-thaw cycles without warping, splintering, or fading. Your deck should be the part of your home you use the most — not the part you worry about.",
    icon: LayoutGrid,
    image: "/images/decking-hero.jpg",
    features: [
      "Composite, cedar, and pressure-treated options",
      "Engineered for Alberta freeze-thaw extremes",
      "Integrated lighting and railing systems",
      "Permit-ready plans and structural engineering",
    ],
  },
  {
    id: "garden-design",
    title: "Modern Garden Design",
    tagline: "Landscaping is upkeep. Garden design is architecture.",
    description:
      "We design outdoor spaces with clean lines, intentional planting, integrated lighting, and year-round structure. No fussy flower beds. No Saturday mornings spent weeding. Just a landscape that looks better every season.",
    icon: Flower2,
    image: "/images/garden-hero.jpg",
    features: [
      "Architectural planting schemes with year-round interest",
      "Integrated hardscaping and softscaping",
      "Low-maintenance native and climate-adapted species",
      "Outdoor lighting design for evening drama",
    ],
  },
  {
    id: "foundation-repair",
    title: "Foundation Repair",
    tagline: "We don&apos;t patch and pray. We diagnose and fix.",
    description:
      "Structura Outdoors doesn&apos;t patch and pray. We diagnose the root cause — drainage, soil movement, structural load — and fix it permanently. Piering, underpinning, crack injection, waterproofing. Done once. Done right. Warranty-backed.",
    icon: Shield,
    image: "/images/foundation-hero.jpg",
    features: [
      "Helical piering and push pier systems",
      "Interior and exterior waterproofing",
      "Crack injection and structural epoxy repair",
      "Drainage correction and soil stabilization",
    ],
    pas: {
      problem:
        "Calgary&apos;s clay soil expands and contracts with every season. Your foundation takes the hit. Hairline cracks become water entry points. Settling turns into structural damage.",
      agitation:
        "Every winter you ignore it, the damage compounds. Water seeps in, freezes, and widens. What starts as a minor cosmetic crack becomes a $30,000 problem — and a liability if you&apos;re managing a commercial property.",
    },
  },
];

export default function ServicesPage() {
  return (
    <>
      <Section className="bg-brand-dark text-white">
        <div className="max-w-3xl">
          <ScrollReveal>
            <Badge className="bg-white/10 text-brand-accent">Our Services</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
              Everything your property needs. Nothing it doesn&apos;t.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-lg leading-relaxed text-brand-light/60">
              Three core disciplines. One team. Zero subcontractors who
              don&apos;t share our standards.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {services.map((service, i) => (
        <Section
          key={service.id}
          id={service.id}
          className={i % 2 === 1 ? "bg-brand-warm" : "bg-white"}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-accent/20">
                    <service.icon size={22} className="text-brand-dark" />
                  </div>
                  <Badge>{service.title}</Badge>
                </div>

                <h2 className="font-serif text-3xl font-bold text-brand-dark sm:text-4xl">
                  {service.tagline}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-brand-dark/60">
                  {service.description}
                </p>

                {service.pas && (
                  <div className="mt-6 rounded-lg border border-brand-accent/30 bg-brand-warm p-6 space-y-3">
                    <p className="text-sm font-semibold text-brand-cta uppercase tracking-wider">
                      The Problem
                    </p>
                    <p className="text-base text-brand-dark/80">
                      {service.pas.problem}
                    </p>
                    <p className="text-sm font-semibold text-brand-cta uppercase tracking-wider">
                      Why It Gets Worse
                    </p>
                    <p className="text-base text-brand-dark/80">
                      {service.pas.agitation}
                    </p>
                  </div>
                )}

                <ul className="mt-8 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-base text-brand-dark/70"
                    >
                      <Check
                        size={18}
                        className="mt-0.5 shrink-0 text-brand-cta"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button variant="primary" size="lg" href="/request-quote">
                    Get a Free Quote for {service.title}
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-brand-accent/20">
                <div className="absolute inset-0 flex items-center justify-center text-brand-accent/40">
                  <service.icon size={64} />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Section>
      ))}

      <Section className="bg-white">
        <ScrollReveal>
          <div className="rounded-2xl border border-brand-border bg-brand-warm p-8 md:p-12 text-center">
            <h2 className="font-serif text-3xl font-bold text-brand-dark">
              Not sure which service you need?
            </h2>
            <p className="mt-3 text-lg text-brand-dark/60 max-w-lg mx-auto">
              Most projects involve two or all three of our disciplines. Book a
              consultation and we&apos;ll assess your property for free.
            </p>
            <div className="mt-6">
              <Button variant="primary" size="lg" href="/request-quote">
                Book a Free Assessment
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
