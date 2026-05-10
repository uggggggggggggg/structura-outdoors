import { PenLine, Hammer, Sparkles } from "lucide-react";
import Section from "./Section";
import ScrollReveal from "./ScrollReveal";
import Badge from "./Badge";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  PenLine,
  Hammer,
  Sparkles,
};

const steps = [
  {
    step: 1,
    title: "Design",
    description:
      "We come to your site. We listen to your vision, assess the terrain, and design in 3D. You see exactly what your space will look like before a single shovel touches soil.",
    icon: "PenLine",
  },
  {
    step: 2,
    title: "Build",
    description:
      "Our crew handles everything — permits, excavation, installation, and finish work. You get weekly photo updates, a dedicated project lead, and zero surprises on timeline or budget.",
    icon: "Hammer",
  },
  {
    step: 3,
    title: "Enjoy",
    description:
      "No mess. No delays. Just the outdoor space you pictured — backed by a 5-year workmanship warranty and a team that answers your call.",
    icon: "Sparkles",
  },
];

export default function ProcessSteps() {
  return (
    <Section className="bg-white">
      <div className="text-center">
        <ScrollReveal>
          <Badge>The Process</Badge>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 font-serif text-3xl font-bold text-brand-dark sm:text-4xl">
            How we turn your property into its best self
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-brand-dark/60">
            Three steps. Zero confusion. Here&apos;s what working with Structura
            actually looks like.
          </p>
        </ScrollReveal>
      </div>

      <div className="mt-16 relative">
        {/* Connecting line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-brand-border hidden lg:block" />

        <div className="grid gap-12 lg:gap-16">
          {steps.map(({ step, title, description, icon }, i) => {
            const Icon = iconMap[icon] ?? Sparkles;
            return (
              <ScrollReveal key={step} delay={i * 0.15}>
                <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-12">
                  <div className="flex lg:w-16 shrink-0 items-start justify-center lg:justify-start">
                    <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-brand-dark text-white font-serif text-xl font-bold shadow-lg">
                      {step}
                    </div>
                  </div>
                  <div className="flex-1 rounded-xl border border-brand-border bg-brand-warm p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon size={22} className="text-brand-cta" />
                      <h3 className="font-serif text-xl font-bold text-brand-dark">
                        {title}
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed text-brand-dark/60">
                      {description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
