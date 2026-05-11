"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [dragStart, setDragStart] = useState(0);

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

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsPaused(true);
    if ("touches" in e) {
      setDragStart(e.touches[0].clientX);
    } else {
      setDragStart(e.clientX);
    }
  };

  const handleDragEnd = (e: React.TouchEvent | React.MouseEvent) => {
    let endX: number;
    if ("changedTouches" in e) {
      endX = e.changedTouches[0].clientX;
    } else {
      endX = (e as React.MouseEvent).clientX;
    }
    const diff = dragStart - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    setTimeout(() => setIsPaused(false), 2000);
  };

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
          <div
            className="relative rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-sm overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Quote
                  size={40}
                  className="text-brand-cta/40 mb-6"
                  aria-hidden="true"
                />

                <blockquote className="text-lg md:text-xl leading-relaxed text-brand-light/90">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-white">
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm text-brand-light/50">
                      {testimonials[current].role} &middot;{" "}
                      {testimonials[current].location}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1">
                    <div className="flex items-center gap-0.5">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-brand-cta text-brand-cta"
                        />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-brand-accent uppercase tracking-wider">
                      {testimonials[current].project}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-center gap-4">
              <motion.button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                whileTap={{ scale: 0.85 }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </motion.button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="h-2 rounded-full bg-white/20"
                    animate={{
                      width: i === current ? 32 : 8,
                      backgroundColor:
                        i === current
                          ? "rgba(194, 110, 61, 1)"
                          : "rgba(255,255,255,0.2)",
                    }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <motion.button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                whileTap={{ scale: 0.85 }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
