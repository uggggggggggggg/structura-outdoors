import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import { pageHeroes } from "@/lib/data";
import { PenLine, Hammer, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "The Process | Design, Build, Enjoy — Structura Outdoors",
  description:
    "How we work: 3D design, transparent build management, and a 5-year warranty. See the Structura Outdoors process from consultation to completion.",
};

const processSteps = [
  {
    step: 1,
    title: "Design",
    icon: PenLine,
    description:
      "We come to your site. We listen to your vision, assess the terrain, and design in 3D. You see exactly what your space will look like before a single shovel touches soil.",
    details: [
      "Free on-site consultation within 5 business days",
      "3D renderings delivered within 2 weeks of consultation",
      "Material samples, color palettes, and plant selections provided",
      "Detailed, line-item quote — no hidden costs, no surprises",
      "Permit review and application handled by our team",
    ],
  },
  {
    step: 2,
    title: "Build",
    icon: Hammer,
    description:
      "Our crew handles everything — permits, excavation, installation, and finish work. You get weekly photo updates, a dedicated project lead, and zero surprises on timeline or budget.",
    details: [
      "Dedicated project lead as your single point of contact",
      "Weekly progress photos and updates via email or text",
      "All permits coordinated and posted before Day 1",
      "Weather-smart scheduling: we build around Calgary's seasons",
      "Daily site clean-up: we leave your property better than we found it",
    ],
  },
  {
    step: 3,
    title: "Enjoy",
    icon: Sparkles,
    description:
      "No mess. No delays. No punch list that drags on for weeks. Just the outdoor space you pictured — backed by a 5-year workmanship warranty and a team that answers your call.",
    details: [
      "Final walkthrough with your project lead",
      "Care and maintenance guide specific to your build",
      "5-year workmanship warranty on all installations",
      "Material warranties passed through from manufacturers",
      "Annual check-in: we follow up every spring to make sure everything held up",
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className="relative bg-brand-dark">
        <div className="grid lg:grid-cols-2 min-h-[50vh]">
          <div className="relative min-h-[280px] lg:min-h-full order-2 lg:order-1">
            <Image
              src={pageHeroes.process.src}
              alt={pageHeroes.process.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-brand-dark/20 lg:bg-gradient-to-r lg:from-brand-dark/10 lg:to-brand-dark/50" />
          </div>
          <div className="flex items-center px-6 py-14 lg:px-12 lg:py-20 order-1 lg:order-2 bg-brand-dark">
            <div className="max-w-xl">
              <ScrollReveal>
                <Badge className="bg-white/10 text-white/80">The Process</Badge>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  How we turn your property into its best self.
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="mt-4 text-lg leading-relaxed text-white/60">
                  Three steps. Zero confusion. Here&apos;s exactly what working with
                  Structura Outdoors looks like — from the first phone call to the
                  final walkthrough.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {processSteps.map((step, i) => (
        <Section
          key={step.step}
          className={i % 2 === 1 ? "bg-brand-warm" : "bg-white"}
        >
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <ScrollReveal className="lg:col-span-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-dark text-white font-serif text-2xl font-bold shadow-lg shrink-0">
                  {step.step}
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-brand-dark">
                    {step.title}
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    <step.icon size={16} className="text-brand-cta" />
                    <span className="text-sm font-medium text-brand-accent uppercase tracking-wider">
                      Step {step.step}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-brand-dark/60">
                {step.description}
              </p>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-8" delay={0.1}>
              <div className="rounded-xl border border-brand-border bg-brand-light p-6 md:p-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-4">
                  What You Get
                </h4>
                <ul className="space-y-3">
                  {step.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-base text-brand-dark/70"
                    >
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-cta shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </Section>
      ))}

      <Section className="bg-white">
        <ScrollReveal>
          <div className="rounded-2xl border-2 border-brand-accent/30 bg-brand-warm p-8 md:p-12 text-center">
            <h2 className="font-serif text-3xl font-bold text-brand-dark">
              The best time to start is now.
            </h2>
            <p className="mt-3 text-lg text-brand-dark/60 max-w-lg mx-auto">
              Calgary&apos;s building season fills up fast. Book your free
              consultation and get on our schedule before the rush.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="/request-quote">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" href="/contact">
                Ask a Question
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
