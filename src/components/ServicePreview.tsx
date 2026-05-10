import Link from "next/link";
import { LayoutGrid, Flower2, Shield, ArrowRight } from "lucide-react";
import Section from "./Section";
import ScrollReveal from "./ScrollReveal";
import Badge from "./Badge";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  LayoutGrid,
  Flower2,
  Shield,
};

interface ServicePreviewCardProps {
  title: string;
  tagline: string;
  description: string;
  slug: string;
  icon: string;
  index: number;
}

function ServicePreviewCard({
  title,
  tagline,
  description,
  slug,
  icon,
  index,
}: ServicePreviewCardProps) {
  const Icon = iconMap[icon] ?? Shield;

  return (
    <ScrollReveal delay={index * 0.1}>
      <Link
        href={`/services#${slug}`}
        className="group relative flex flex-col rounded-xl border border-brand-border bg-white p-8 transition-all duration-300 hover:border-brand-accent hover:shadow-lg hover:-translate-y-1"
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-accent/15 text-brand-dark">
          <Icon size={22} />
        </div>

        <h3 className="font-serif text-xl font-bold text-brand-dark">
          {title}
        </h3>
        <p className="mt-2 text-sm font-medium text-brand-accent leading-relaxed">
          {tagline}
        </p>
        <p className="mt-3 text-base leading-relaxed text-brand-dark/60">
          {description}
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-brand-cta group-hover:gap-3 transition-all">
          Learn more <ArrowRight size={16} />
        </div>
      </Link>
    </ScrollReveal>
  );
}

export default function ServicePreview() {
  const services = [
    {
      slug: "decking",
      title: "Decking",
      tagline: "Purpose-built for Calgary's four seasons.",
      description:
        "From low-maintenance composite to natural cedar, we engineer decks that survive freeze-thaw cycles without warping, splintering, or fading.",
      icon: "LayoutGrid",
    },
    {
      slug: "garden-design",
      title: "Modern Garden Design",
      tagline: "Landscaping is upkeep. Garden design is architecture.",
      description:
        "Clean lines, intentional planting, integrated lighting, and year-round structure. No fussy flower beds. No weekends spent weeding.",
      icon: "Flower2",
    },
    {
      slug: "foundation-repair",
      title: "Foundation Repair",
      tagline: "We don't patch and pray. We diagnose and fix.",
      description:
        "We diagnose the root cause — drainage, soil movement, structural load — and fix it permanently. Warranty-backed.",
      icon: "Shield",
    },
  ];

  return (
    <Section className="bg-brand-warm">
      <div className="text-center">
        <ScrollReveal>
          <Badge>Our Services</Badge>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 font-serif text-3xl font-bold text-brand-dark sm:text-4xl">
            Everything your property needs. Nothing it doesn&apos;t.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-brand-dark/60">
            Three core disciplines. One team. Zero subcontractors who don&apos;t
            share our standards.
          </p>
        </ScrollReveal>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <ServicePreviewCard key={service.slug} {...service} index={i} />
        ))}
      </div>
    </Section>
  );
}
