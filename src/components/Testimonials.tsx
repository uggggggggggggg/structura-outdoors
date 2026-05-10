"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Section from "./Section";
import ScrollReveal from "./ScrollReveal";
import Badge from "./Badge";

interface Testimonial {
  name: string;
  location: string;
  role: string;
  quote: string;
  rating: number;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    name: "David & Sarah Mitchell",
    location: "Springbank Hill, Calgary",
    role: "Homeowners",
    quote:
      "Structura transformed our unusable slope into a multi-level deck and garden that's become the focal point of our home. The 3D design process made us feel completely confident before they even broke ground.",
    rating: 5,
    project: "Multi-Level Deck & Garden",
  },
  {
    name: "Michael Chen",
    location: "Downtown Calgary",
    role: "Commercial Property Manager",
    quote:
      "We had foundation issues across three of our buildings. Structura diagnosed the root cause — drainage — and fixed everything. Zero tenant complaints since. Their commercial team is the most professional I've worked with in 15 years.",
    rating: 5,
    project: "Commercial Foundation Repair",
  },
  {
    name: "The Harrison Family",
    location: "Elbow Park, Calgary",
    role: "Homeowners",
    quote:
      "We wanted a low-maintenance garden that still looked high-end. The team designed something that looks better every year with almost no upkeep. It's exactly what they promised — and more.",
    rating: 5,
    project: "Modern Garden Design",
  },
  {
    name: "Riverside Estates HOA",
    location: "Bowness, Calgary",
    role: "Commercial Client",
    quote:
      "Structura handled the complete outdoor revitalization of our 14-unit complex. On budget. Two weeks ahead of schedule. The residents still talk about it two years later.",
    rating: 5,
    project: "Multi-Unit Outdoor Revitalization",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <Section className="bg-brand-dark text-white">
      <div className="text-center">
        <ScrollReveal>
          <Badge className="bg-white/10 text-brand-accent">
            Client Stories
          </Badge>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
            Don&apos;t take our word for it.
          </h2>
        </ScrollReveal>
      </div>

      <div
        className="mt-16 mx-auto max-w-3xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <ScrollReveal delay={0.2}>
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-sm">
            <Quote
              size={40}
              className="text-brand-cta/40 mb-6"
              aria-hidden="true"
            />

            <blockquote className="text-lg md:text-xl leading-relaxed text-brand-light/90">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-brand-light/50">
                  {t.role} &middot; {t.location}
                </p>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-1">
                <div className="flex items-center gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-brand-cta text-brand-cta"
                    />
                  ))}
                </div>
                <span className="text-xs font-medium text-brand-accent uppercase tracking-wider">
                  {t.project}
                </span>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-8 bg-brand-cta"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
