import Section from "./Section";
import ScrollReveal from "./ScrollReveal";
import Button from "./Button";
import Badge from "./Badge";

export default function CTASection() {
  return (
    <Section className="bg-brand-warm">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-2xl bg-brand-dark px-8 py-16 md:px-16 md:py-20 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#C26E3D15,transparent_60%)]" />
          <div className="relative z-10">
            <Badge className="bg-white/10 text-brand-accent">
              Your Property, Upgraded
            </Badge>
            <h2 className="mt-6 font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Ready to see what your property can become?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg leading-relaxed text-brand-light/60">
              A free design consultation. No obligation. No hard sell. Just an
              honest conversation about your property and a 3D design that&apos;ll
              stop you in your tracks.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="xl" href="/request-quote">
                Request Your Free Consultation
              </Button>
              <Button
                variant="ghost"
                size="xl"
                href="tel:+14035551234"
                className="text-white/70 hover:text-white"
              >
                Call (403) 555-1234
              </Button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
