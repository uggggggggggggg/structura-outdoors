import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import { pageHeroes } from "@/lib/data";
import { BookOpen, Check, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Guide | Calgary Outdoor Living Investment Guide",
  description:
    "Download our free guide: real project costs, contractor questions, material comparisons, and a foundation crack diagnostic. Make a smart investment in your property.",
};

export default function FreeGuidePage() {
  return (
    <>
      <section className="relative bg-brand-dark">
        <div className="grid lg:grid-cols-2 min-h-[50vh]">
          <div className="relative min-h-[280px] lg:min-h-full order-2 lg:order-1">
            <Image
              src={pageHeroes.guide.src}
              alt={pageHeroes.guide.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-brand-dark/20 lg:bg-gradient-to-r lg:from-brand-dark/10 lg:to-brand-dark/50" />
          </div>
          <div className="flex items-center px-6 py-14 lg:px-12 lg:py-20 order-1 lg:order-2">
            <div className="max-w-xl">
              <ScrollReveal>
                <Badge className="bg-white/10 text-white/80">Free Resource</Badge>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  The Calgary Outdoor Living Investment Guide.
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="mt-4 text-lg leading-relaxed text-white/60">
                  Everything you need to know before investing in an outdoor
                  project — real costs, smart questions, and insider knowledge
                  from Calgary&apos;s landscaping experts.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-accent/20">
                  <BookOpen size={28} className="text-brand-dark" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-brand-dark">
                    What&apos;s inside
                  </h2>
                  <p className="text-sm text-brand-dark/50">
                    12-page PDF · Free · Instant Download
                  </p>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Real project cost ranges for decks, gardens, and foundations in Calgary (actual numbers, not ranges you find on generic websites)",
                  "5 questions to ask before hiring any outdoor contractor — and the answers you should expect",
                  "Material comparison chart: composite vs. cedar vs. pressure-treated vs. aluminum (durability, cost, maintenance, lifespan)",
                  "What your foundation cracks are actually telling you — a visual diagnostic guide with photos and urgency ratings",
                  "The Structura Outdoors project checklist: what happens from the first phone call to the final walkthrough",
                  "Seasonal timing guide: when to build what in Calgary (and why starting in April is very different from starting in September)",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-brand-dark/70"
                  >
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-brand-cta"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border border-brand-border bg-white px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark"
                  required
                />
                <Button variant="primary" size="lg" type="submit">
                  <Download size={16} className="mr-2" />
                  Download Free Guide
                </Button>
              </form>

              <p className="mt-3 text-xs text-brand-dark/40">
                We respect your inbox. No spam. Unsubscribe anytime. Your email
                is never shared.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div className="relative mx-auto max-w-xs">
              <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-brand-warm to-brand-accent/20 shadow-2xl flex items-center justify-center border border-brand-border">
                <div className="text-center p-8">
                  <BookOpen size={40} className="mx-auto text-brand-dark/30" />
                  <p className="mt-4 font-serif text-lg font-bold text-brand-dark/50">
                    The Calgary Outdoor Living Investment Guide
                  </p>
                  <p className="mt-2 text-sm text-brand-dark/30">
                    Structura Outdoors
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section className="bg-brand-warm">
        <ScrollReveal>
          <div className="rounded-2xl border border-brand-border bg-white p-8 md:p-12 text-center">
            <h2 className="font-serif text-3xl font-bold text-brand-dark">
              Ready to apply what you learn?
            </h2>
            <p className="mt-3 text-lg text-brand-dark/60 max-w-lg mx-auto">
              Once you&apos;ve read the guide, you&apos;ll know exactly what to
              ask. When you&apos;re ready, we&apos;re here.
            </p>
            <div className="mt-6">
              <Button variant="primary" size="lg" href="/request-quote">
                Request Your Free Consultation
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
