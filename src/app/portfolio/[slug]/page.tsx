import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, MapPin, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import Badge from "@/components/Badge";
import BeforeAfter from "@/components/BeforeAfter";
import Button from "@/components/Button";
import { portfolioItems } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioItems.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | Portfolio | Structura Outdoors`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Structura Outdoors Calgary`,
      description: project.description,
      images: [{ url: project.after, width: 1200, height: 630, alt: project.afterAlt }],
    },
  };
}

export default async function PortfolioProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = portfolioItems.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = portfolioItems.findIndex((p) => p.slug === slug);
  const related = portfolioItems
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 2);
  const prev = currentIndex > 0 ? portfolioItems[currentIndex - 1] : null;
  const next = currentIndex < portfolioItems.length - 1 ? portfolioItems[currentIndex + 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end bg-brand-dark">
        <Image
          src={project.after}
          alt={project.afterAlt}
          fill
          className="absolute inset-0 object-cover"
          style={{ opacity: 0.45 }}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />

        <div className="relative z-10 w-full mx-auto max-w-7xl px-6 pb-12 pt-32 lg:px-8">
          <ScrollReveal>
            <Badge className="bg-white/10 text-white/80">{project.category}</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {project.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-3 flex items-center gap-2 text-sm text-white/60">
              <MapPin size={14} />
              {project.location}
              <span className="mx-2 text-white/20">|</span>
              <Calendar size={14} />
              Completed {new Date(project.completionDate + "-01").toLocaleDateString("en-CA", { year: "numeric", month: "long" })}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-3 gap-12">
          <ScrollReveal className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-bold text-brand-dark mb-4">
              Project overview
            </h2>
            <p className="text-lg leading-relaxed text-brand-dark/60">
              {project.extendedDescription}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-brand-border bg-brand-warm p-6 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-accent">
                Project details
              </h3>
              <div className="flex justify-between">
                <span className="text-sm text-brand-dark/50">Category</span>
                <span className="text-sm font-medium text-brand-dark">{project.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-brand-dark/50">Location</span>
                <span className="text-sm font-medium text-brand-dark">{project.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-brand-dark/50">Completed</span>
                <span className="text-sm font-medium text-brand-dark">
                  {new Date(project.completionDate + "-01").toLocaleDateString("en-CA", { year: "numeric", month: "long" })}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Before & After */}
      <Section className="bg-brand-warm">
        <ScrollReveal>
          <h2 className="font-serif text-2xl font-bold text-brand-dark text-center mb-2">
            Before &amp; after
          </h2>
          <p className="text-center text-brand-dark/50 mb-10">
            Drag the slider to see the transformation
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="max-w-4xl mx-auto">
            <BeforeAfter
              beforeUrl={project.before}
              afterUrl={project.after}
              beforeAlt={project.beforeAlt}
              afterAlt={project.afterAlt}
            />
          </div>
        </ScrollReveal>
      </Section>

      {/* Challenge & Solution */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="rounded-xl border border-brand-border bg-brand-warm p-6 md:p-8 h-full">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-cta mb-3">
                The challenge
              </h3>
              <p className="text-base leading-relaxed text-brand-dark/70">
                {project.challenge}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-brand-border bg-brand-warm p-6 md:p-8 h-full">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-cta mb-3">
                Our solution
              </h3>
              <p className="text-base leading-relaxed text-brand-dark/70">
                {project.solution}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Highlights */}
      <Section className="bg-brand-warm">
        <ScrollReveal>
          <h2 className="font-serif text-2xl font-bold text-brand-dark text-center mb-10">
            Project highlights
          </h2>
        </ScrollReveal>
        <div className="max-w-3xl mx-auto grid gap-4 sm:grid-cols-2">
          {project.highlights.map((item, i) => (
            <ScrollReveal key={item} delay={i * 0.08}>
              <div className="flex items-start gap-3 rounded-lg border border-brand-border bg-white p-4">
                <Check size={18} className="mt-0.5 shrink-0 text-brand-cta" />
                <span className="text-sm leading-relaxed text-brand-dark/70">{item}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Related projects */}
      {related.length > 0 && (
        <Section className="bg-white">
          <ScrollReveal>
            <h2 className="font-serif text-2xl font-bold text-brand-dark text-center mb-10">
              More {project.category.toLowerCase()} projects
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {related.map((r) => (
              <ScrollReveal key={r.slug} delay={0.1}>
                <Link
                  href={`/portfolio/${r.slug}`}
                  className="group block rounded-xl overflow-hidden border border-brand-border bg-white hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className="relative aspect-[3/2] bg-brand-accent/20">
                    <Image
                      src={r.after}
                      alt={r.afterAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                      {r.category}
                    </span>
                    <h3 className="mt-1 font-serif text-lg font-bold text-brand-dark group-hover:text-brand-cta transition-colors">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-dark/60 line-clamp-2">
                      {r.description}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      )}

      {/* Navigation */}
      <Section className="bg-white border-t border-brand-border">
        <div className="flex items-center justify-between">
          {prev ? (
            <Link
              href={`/portfolio/${prev.slug}`}
              className="flex items-center gap-2 text-sm font-medium text-brand-dark/60 hover:text-brand-dark transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline">{prev.title}</span>
              <span className="sm:hidden">Previous</span>
            </Link>
          ) : (
            <div />
          )}
          <Link
            href="/portfolio"
            className="text-sm font-medium text-brand-accent hover:text-brand-dark transition-colors"
          >
            All projects
          </Link>
          {next ? (
            <Link
              href={`/portfolio/${next.slug}`}
              className="flex items-center gap-2 text-sm font-medium text-brand-dark/60 hover:text-brand-dark transition-colors group"
            >
              <span className="hidden sm:inline">{next.title}</span>
              <span className="sm:hidden">Next</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-brand-dark">
        <ScrollReveal>
          <div className="text-center">
            <Badge className="bg-white/10 text-brand-accent">
              Your property, transformed
            </Badge>
            <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl">
              Want a transformation like this?
            </h2>
            <p className="mt-4 max-w-lg mx-auto text-lg leading-relaxed text-brand-light/60">
              Every project starts with a free, no-obligation design consultation.
              Let&apos;s talk about what your property could become.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="xl" href="/request-quote">
                Request Your Free Consultation
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
