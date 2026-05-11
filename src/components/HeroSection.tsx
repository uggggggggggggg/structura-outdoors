import Image from "next/image";
import Button from "./Button";
import ScrollReveal from "./ScrollReveal";
import { heroImage } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden bg-brand-dark">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        className="absolute inset-0 object-cover"
        style={{ opacity: 0.55 }}
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 to-brand-dark/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center py-32">
        <ScrollReveal>
          <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Your Property Is Worth More Than It Looks.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-6 text-lg leading-relaxed text-brand-light/80 sm:text-xl md:text-2xl max-w-2xl mx-auto">
            Structura Outdoors designs and builds decks, gardens, and foundations
            that turn Calgary properties into premium assets — inside and out.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="xl" href="/request-quote">
              Request Your Free Design Consultation
            </Button>
            <Button variant="outline" size="xl" href="/portfolio" className="border-white/30 text-white hover:bg-white hover:text-brand-dark">
              See What&apos;s Possible
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
