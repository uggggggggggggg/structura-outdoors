import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import { aboutImage } from "@/lib/data";
import { ShieldCheck, Award, Building2, HardHat, Clock, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Calgary's Premium Landscaping Company",
  description:
    "Structura Outdoors is a Calgary-based landscaping company specializing in decking, garden design, and foundation repair. Licensed, insured, and built for Alberta extremes.",
};

const certifications = [
  { label: "BBB Accredited", icon: Award, desc: "A+ rating with the Better Business Bureau" },
  { label: "CHBA Member", icon: Building2, desc: "Canadian Home Builders' Association — Calgary Region" },
  { label: "Fully Insured", icon: ShieldCheck, desc: "$5M commercial general liability coverage" },
  { label: "WCB Covered", icon: HardHat, desc: "Workers' Compensation Board compliant" },
  { label: "5-Year Warranty", icon: Clock, desc: "On all workmanship — materials pass-through covered" },
];

export default function AboutPage() {
  return (
    <>
      <Section className="bg-brand-dark text-white">
        <div className="max-w-3xl">
          <ScrollReveal>
            <Badge className="bg-white/10 text-brand-accent">About Us</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
              We build spaces that make Calgary properties worth more.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-lg leading-relaxed text-brand-light/60">
              Structura Outdoors was born here in Calgary — because we
              understand that this climate doesn&apos;t forgive poor
              craftsmanship. Every deck we build, every foundation we repair,
              every garden we design is engineered for Alberta extremes.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <h2 className="font-serif text-3xl font-bold text-brand-dark">
                Calgary roots. Calgary standards.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-dark/60">
                We&apos;re not a franchise. We&apos;re not a crew that
                subcontracts everything to the lowest bidder. Structura Outdoors
                is a Calgary company with an in-house team of designers,
                carpenters, concrete specialists, and horticulturists. We answer
                our own phones. We stand behind our work.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-brand-dark/60">
                Our clients range from luxury homeowners in Springbank and Elbow
                Park to commercial property managers overseeing multi-unit
                complexes downtown. The common thread: they expect more from
                their outdoor space — and from the people who build it.
              </p>
              <div className="mt-6">
                <Button variant="primary" size="lg" href="/request-quote">
                  Work With Us
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div className="relative aspect-[4/5] rounded-xl bg-brand-accent/20 overflow-hidden">
              <Image
                src={aboutImage.src}
                alt={aboutImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section className="bg-brand-warm">
        <div className="text-center mb-12">
          <ScrollReveal>
            <Badge>Credentials</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-4 font-serif text-3xl font-bold text-brand-dark">
              Licensed. Insured. Accountable.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-brand-dark/60">
              Every contractor says they&apos;re the best. Here&apos;s what we
              can actually prove.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map(({ label, icon: Icon, desc }, i) => (
            <ScrollReveal key={label} delay={i * 0.1}>
              <div className="rounded-xl border border-brand-border bg-white p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-accent/20">
                  <Icon size={22} className="text-brand-dark" />
                </div>
                <h3 className="mt-4 font-semibold text-brand-dark">{label}</h3>
                <p className="mt-2 text-sm text-brand-dark/50">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-brand-border px-6 py-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-brand-cta text-brand-cta" />
              ))}
            </div>
            <span className="text-sm font-medium text-brand-dark/70">
              4.9/5 from 120+ Calgary reviews on Google
            </span>
          </div>
        </div>
      </Section>
    </>
  );
}
