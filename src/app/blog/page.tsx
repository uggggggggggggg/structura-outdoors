import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import Badge from "@/components/Badge";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Landscaping Tips, Guides & Insights — Calgary",
  description:
    "Expert advice on decking, garden design, foundation repair, and outdoor living in Calgary. Tips, guides, and seasonal maintenance insights.",
};

const blogPosts = [
  {
    title:
      "What Calgary Clay Soil Means for Your Foundation (And What to Do About It)",
    slug: "calgary-clay-soil-foundation-guide",
    excerpt:
      "Calgary's unique soil composition creates foundation challenges most homeowners don't discover until it's too late. Here's what to look for and when to act.",
    date: "2026-04-15",
    category: "Foundation Repair",
  },
  {
    title:
      "Composite vs. Cedar Decking in Alberta: What Actually Survives the Winter",
    slug: "composite-vs-cedar-decking-calgary",
    excerpt:
      "Not all decking materials are created equal — especially when temperatures swing 60 degrees in a single January week. We break down the real cost of each option.",
    date: "2026-03-28",
    category: "Decking",
  },
  {
    title: "5 Design Principles for a Low-Maintenance Luxury Garden",
    slug: "low-maintenance-luxury-garden-design",
    excerpt:
      "A high-end garden doesn't have to mean high upkeep. These five design principles deliver year-round beauty with minimal maintenance.",
    date: "2026-03-10",
    category: "Garden Design",
  },
  {
    title:
      "How to Choose a Landscaping Contractor in Calgary: 7 Questions to Ask",
    slug: "choose-landscaping-contractor-calgary",
    excerpt:
      "Before you sign any contract, ask these seven questions. They'll separate the professionals from the pretenders.",
    date: "2026-02-20",
    category: "Advice",
  },
  {
    title: "Winter-Proofing Your Deck: A Calgary Homeowner's Checklist",
    slug: "winter-proofing-deck-calgary",
    excerpt:
      "Six steps to take before the first snowfall to protect your deck from freeze-thaw damage, ice buildup, and spring surprises.",
    date: "2026-01-15",
    category: "Decking",
  },
  {
    title: "Why Your Basement Smells Like Damp Earth (And When to Worry)",
    slug: "basement-moisture-foundation-signs",
    excerpt:
      "That musty smell isn't just unpleasant — it's a warning sign. Here's how to tell the difference between humidity and a foundation leak.",
    date: "2025-12-05",
    category: "Foundation Repair",
  },
];

export default function BlogPage() {
  return (
    <>
      <Section className="bg-brand-dark text-white">
        <div className="max-w-3xl">
          <ScrollReveal>
            <Badge className="bg-white/10 text-brand-accent">Resources</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
              Calgary landscaping insights, straight from the pros.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-lg leading-relaxed text-brand-light/60">
              No fluff. No filler. Just practical advice on decks, gardens, and
              foundations from the team that builds them every day.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-xl border border-brand-border bg-white p-6 transition-all hover:border-brand-accent hover:shadow-md hover:-translate-y-1"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                  {post.category}
                </span>
                <h3 className="mt-2 font-serif text-lg font-bold text-brand-dark group-hover:text-brand-cta transition-colors">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-dark/60 flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-brand-dark/40">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString("en-CA", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium text-brand-cta group-hover:gap-2 transition-all">
                    Read <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
