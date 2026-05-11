import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import { services as servicesData, pageHeroes } from "@/lib/data";
import { LayoutGrid, Flower2, Shield, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Decking, Garden Design & Foundation Repair — Calgary",
  description:
    "Premium decking, modern garden design, and foundation repair for Calgary homes and commercial properties. Engineered for Alberta extremes.",
};

type ServiceIcon = typeof LayoutGrid;

const iconMap: Record<string, ServiceIcon> = {
  LayoutGrid,
  Flower2,
  Shield,
};

const services = servicesData.map((s) => ({
  ...s,
  icon: iconMap[s.icon] ?? Shield,
  pas:
    s.slug === "foundation-repair"
      ? {
          problem:
            "Calgary&apos;s clay soil expands and contracts with every season. Your foundation takes the hit. Hairline cracks become water entry points. Settling turns into structural damage.",
          agitation:
            "Every winter you ignore it, the damage compounds. Water seeps in, freezes, and widens. What starts as a minor cosmetic crack becomes a $30,000 problem — and a liability if you&apos;re managing a commercial property.",
        }
      : undefined,
}));

export default function ServicesPage() {
  return (
    <>
      <section className="relative min-h-[55vh] flex items-end bg-brand-dark">
        <Image
          src={pageHeroes.services.src}
          alt={pageHeroes.services.alt}
          fill
          className="absolute inset-0 object-cover"
          style={{ opacity: 0.4 }}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-brand-dark/20" />
        <div className="relative z-10 w-full mx-auto max-w-7xl px-6 pb-14 pt-28 lg:px-8">
          <ScrollReveal>
            <Badge className="bg-white/10 text-white/80">Our Services</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl max-w-3xl">
              Everything your property needs. Nothing it doesn&apos;t.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-lg leading-relaxed text-white/60 max-w-2xl">
              Three core disciplines. One team. Zero subcontractors who
              don&apos;t share our standards.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {services.map((service, i) => (
        <Section
          key={service.slug}
          id={service.slug}
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
                <Image
                  src={service.image}
                  alt={service.imageAlt || `${service.title} service by Structura Outdoors Calgary`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
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
