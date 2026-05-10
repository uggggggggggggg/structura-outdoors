import Section from "./Section";
import ScrollReveal from "./ScrollReveal";
import Button from "./Button";
import { BookOpen } from "lucide-react";

export default function LeadMagnetBanner() {
  return (
    <Section className="bg-white">
      <ScrollReveal>
        <div className="rounded-2xl border-2 border-brand-accent/30 bg-gradient-to-br from-brand-warm to-white p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex h-16 w-16 md:h-20 md:w-20 shrink-0 items-center justify-center rounded-2xl bg-brand-accent/20">
              <BookOpen size={32} className="text-brand-dark" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold text-brand-dark">
                Free Guide: The Calgary Outdoor Living Investment Guide
              </h3>
              <p className="mt-3 text-base leading-relaxed text-brand-dark/60 max-w-xl">
                Real project cost ranges, 5 questions to ask before hiring any
                contractor, material comparison charts, and a foundation crack
                diagnostic guide — before you spend a dollar.
              </p>
            </div>
            <div className="shrink-0">
              <Button variant="primary" size="lg" href="/free-guide">
                Download Free Guide
              </Button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
