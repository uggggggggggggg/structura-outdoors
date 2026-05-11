"use client";

import { useState } from "react";
import Section from "./Section";
import ScrollReveal from "./ScrollReveal";
import Badge from "./Badge";
import BeforeAfter from "./BeforeAfter";
import { portfolioItems } from "@/lib/data";

const categories = ["All", "Decking", "Garden Design", "Foundation Repair"];

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === filter);

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
            Drag the slider on any project to see the before-and-after transformation
            — real Calgary projects by Structura Outdoors.
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
                beforeAlt={project.beforeAlt}
                afterAlt={project.afterAlt}
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
