"use client";

import { useState } from "react";
import Section from "./Section";
import ScrollReveal from "./ScrollReveal";
import Badge from "./Badge";
import BeforeAfter from "./BeforeAfter";

const projects = [
  {
    title: "Springbank Hill Multi-Level Deck",
    category: "Decking",
    description:
      "Composite deck with integrated lighting and glass railings, maximizing a steep slope property.",
    before: "/images/portfolio-1-before.jpg",
    after: "/images/portfolio-1-after.jpg",
  },
  {
    title: "Elbow Park Modern Garden",
    category: "Garden Design",
    description:
      "Architectural planting scheme with native grasses, corten steel edging, and integrated LED mood lighting.",
    before: "/images/portfolio-2-before.jpg",
    after: "/images/portfolio-2-after.jpg",
  },
  {
    title: "Downtown Commercial Foundation",
    category: "Foundation Repair",
    description:
      "Complete underpinning and waterproofing of a 1960s commercial building with zero tenant disruption.",
    before: "/images/portfolio-3-before.jpg",
    after: "/images/portfolio-3-after.jpg",
  },
  {
    title: "Aspen Woods Rooftop Deck",
    category: "Decking",
    description:
      "Custom cedar rooftop deck with built-in planters, privacy screens, and outdoor kitchen rough-in.",
    before: "/images/portfolio-4-before.jpg",
    after: "/images/portfolio-4-after.jpg",
  },
  {
    title: "Mount Royal Heritage Garden",
    category: "Garden Design",
    description:
      "Period-sensitive modern garden design for a heritage property, blending contemporary structure with classic plantings.",
    before: "/images/portfolio-5-before.jpg",
    after: "/images/portfolio-5-after.jpg",
  },
  {
    title: "Riverside Estates Full Exterior",
    category: "Foundation Repair",
    description:
      "Exterior waterproofing and drainage correction for a 14-unit riverside complex, including new retaining walls.",
    before: "/images/portfolio-6-before.jpg",
    after: "/images/portfolio-6-after.jpg",
  },
];

const categories = ["All", "Decking", "Garden Design", "Foundation Repair"];

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <Section className="bg-white">
      <div className="text-center">
        <ScrollReveal>
          <Badge>Portfolio</Badge>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 font-serif text-3xl font-bold text-brand-dark sm:text-4xl">
            The work speaks for itself.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-brand-dark/60">
            Drag the slider on any project to see the before-and-after transformation.
          </p>
        </ScrollReveal>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              filter === cat
                ? "bg-brand-dark text-white"
                : "bg-brand-warm text-brand-dark/60 hover:bg-brand-accent/20 hover:text-brand-dark"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 0.1}>
            <div className="group rounded-xl overflow-hidden border border-brand-border bg-white hover:shadow-lg transition-shadow">
              <BeforeAfter
                beforeUrl={project.before}
                afterUrl={project.after}
              />
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                  {project.category}
                </span>
                <h3 className="mt-1 font-serif text-lg font-bold text-brand-dark">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-dark/60">
                  {project.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
