"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
          <motion.button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              filter === cat
                ? "bg-brand-dark text-white"
                : "bg-brand-warm text-brand-dark/60 hover:bg-brand-accent/20 hover:text-brand-dark"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{
                duration: 0.35,
                delay: i * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group rounded-xl overflow-hidden border border-brand-border bg-white hover:shadow-lg transition-shadow"
              whileHover={{ y: -4 }}
            >
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
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
