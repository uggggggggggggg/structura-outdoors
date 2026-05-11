import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import { pageHeroes } from "@/lib/data";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Structura Outdoors — Calgary, AB",
  description:
    "Get in touch with Structura Outdoors. Call, email, or visit our Calgary office for your decking, garden design, or foundation repair project.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-warm">
        <div className="grid lg:grid-cols-5 min-h-[40vh]">
          <div className="lg:col-span-3 flex items-center px-6 py-12 lg:px-14 lg:py-16 order-1">
            <div className="max-w-xl">
              <ScrollReveal>
                <Badge>Contact</Badge>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="mt-4 font-serif text-3xl font-bold text-brand-dark sm:text-4xl lg:text-5xl">
                  Let&apos;s start a conversation.
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="mt-4 text-lg leading-relaxed text-brand-dark/60">
                  We answer our own phones. No automated systems, no overseas
                  call centers — just real people who know landscaping.
                </p>
              </ScrollReveal>
            </div>
          </div>
          <div className="lg:col-span-2 relative min-h-[220px] lg:min-h-full order-2">
            <Image
              src={pageHeroes.contact.src}
              alt={pageHeroes.contact.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16">
          <ScrollReveal>
            <div>
              <h2 className="font-serif text-2xl font-bold text-brand-dark mb-6">
                Get in touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/20 shrink-0">
                    <Phone size={18} className="text-brand-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark">Phone</h3>
                    <a
                      href="tel:+14035551234"
                      className="text-lg text-brand-dark/70 hover:text-brand-cta transition-colors"
                    >
                      (403) 555-1234
                    </a>
                    <p className="text-sm text-brand-dark/40 mt-1">
                      Monday–Friday, 8am–6pm · Saturday, 9am–2pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/20 shrink-0">
                    <Mail size={18} className="text-brand-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark">Email</h3>
                    <a
                      href="mailto:hello@structuraoutdoors.ca"
                      className="text-lg text-brand-dark/70 hover:text-brand-cta transition-colors"
                    >
                      hello@structuraoutdoors.ca
                    </a>
                    <p className="text-sm text-brand-dark/40 mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/20 shrink-0">
                    <MapPin size={18} className="text-brand-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark">Office</h3>
                    <p className="text-lg text-brand-dark/70">
                      1420 Meridian Road NE
                      <br />
                      Calgary, AB T2A 2N9
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/20 shrink-0">
                    <Clock size={18} className="text-brand-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark">
                      Service Area
                    </h3>
                    <p className="text-lg text-brand-dark/70">
                      Calgary and surrounding areas within 45 km
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button variant="primary" size="lg" href="/request-quote">
                  Skip the Form — Request a Quote
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.1}>
            <div className="rounded-xl border border-brand-border bg-brand-warm p-8">
              <h2 className="font-serif text-2xl font-bold text-brand-dark mb-6">
                Send us a message
              </h2>
              <form className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-brand-dark/70 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-brand-border bg-white px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-dark/70 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-brand-border bg-white px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-dark/70 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full rounded-lg border border-brand-border bg-white px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-brand-dark px-6 py-3 text-sm font-medium text-white hover:bg-brand-dark/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section className="bg-brand-warm">
        <ScrollReveal>
          <div className="rounded-xl bg-brand-accent/15 h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={32} className="mx-auto text-brand-accent" />
              <p className="mt-2 text-sm text-brand-dark/50">
                Interactive map placeholder — 1420 Meridian Road NE, Calgary, AB
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
