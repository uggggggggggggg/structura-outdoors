import type { Metadata } from "next";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import Badge from "@/components/Badge";
import QuoteForm from "@/components/QuoteForm";
import { Star, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Quote | Free Design Consultation — Calgary",
  description:
    "Get a free, no-obligation design consultation for your Calgary deck, garden, or foundation project. Fast, detailed, and pressure-free.",
};

export default function RequestQuotePage() {
  return (
    <>
      <Section className="bg-brand-dark text-white">
        <div className="max-w-3xl">
          <ScrollReveal>
            <Badge className="bg-white/10 text-brand-accent">
              Free Consultation
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
              Let&apos;s talk about your property.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-lg leading-relaxed text-brand-light/60">
              Fill out the form below and we&apos;ll get back to you within 24
              hours with your free design consultation — no obligation, no
              pressure.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ScrollReveal>
              <h2 className="font-serif text-2xl font-bold text-brand-dark mb-8">
                Your Project Details
              </h2>
              <QuoteForm />
            </ScrollReveal>
          </div>

          <div className="space-y-8">
            <ScrollReveal delay={0.1}>
              <div className="rounded-xl border border-brand-border bg-brand-warm p-6">
                <Quote size={24} className="text-brand-cta/40 mb-4" />
                <blockquote className="text-base leading-relaxed text-brand-dark/70 italic">
                  &ldquo;Structura transformed our unusable slope into a
                  multi-level deck and garden that&apos;s become the focal point
                  of our home. The 3D design process made us feel completely
                  confident before they even broke ground.&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div>
                    <p className="font-semibold text-sm text-brand-dark">
                      David & Sarah Mitchell
                    </p>
                    <p className="text-xs text-brand-dark/40">
                      Springbank Hill, Calgary
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-brand-cta text-brand-cta"
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="rounded-xl border border-brand-border bg-brand-warm p-6">
                <h3 className="font-semibold text-brand-dark mb-4">
                  What happens next?
                </h3>
                <ol className="space-y-3 text-sm text-brand-dark/60">
                  <li className="flex gap-2">
                    <span className="font-bold text-brand-dark">1.</span>
                    We review your request within 24 hours.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-brand-dark">2.</span>
                    We&apos;ll call or email to schedule your free on-site consultation.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-brand-dark">3.</span>
                    We visit your property, listen to your goals, and take measurements.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-brand-dark">4.</span>
                    You receive a 3D design and detailed quote — no obligation.
                  </li>
                </ol>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="rounded-xl border border-brand-border bg-brand-warm p-6">
                <h3 className="font-semibold text-brand-dark mb-3">
                  Prefer to call?
                </h3>
                <p className="text-sm text-brand-dark/60 mb-3">
                  We answer our phones. No automated systems, no overseas call
                  centers.
                </p>
                <a
                  href="tel:+14035551234"
                  className="text-xl font-bold text-brand-dark hover:text-brand-cta transition-colors"
                >
                  (403) 555-1234
                </a>
                <p className="text-xs text-brand-dark/40 mt-2">
                  Monday–Friday, 8am–6pm · Saturday, 9am–2pm
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>
    </>
  );
}
