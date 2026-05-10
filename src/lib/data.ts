import type { Metadata } from "next";

const baseUrl = "https://structuraoutdoors.ca";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Structura Outdoors | Premium Landscaping & Design — Calgary, AB",
    template: "%s | Structura Outdoors",
  },
  description:
    "Structura Outdoors designs and builds luxury decks, modern gardens, and rock-solid foundations for Calgary homeowners and commercial properties. Request a free design consultation.",
  keywords: [
    "landscaping Calgary",
    "deck builder Calgary",
    "garden design Calgary",
    "foundation repair Calgary",
    "outdoor living Calgary",
    "luxury landscaping Alberta",
  ],
  authors: [{ name: "Structura Outdoors" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: baseUrl,
    siteName: "Structura Outdoors",
    title: "Structura Outdoors | Premium Landscaping & Design — Calgary, AB",
    description:
      "Luxury decks, modern garden design, and foundation repair engineered for Calgary extremes. Request your free design consultation.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Structura Outdoors | Premium Landscaping & Design",
    description:
      "Luxury decks, modern garden design, and foundation repair — Calgary, AB.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "The Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    slug: "decking",
    title: "Decking",
    tagline: "Purpose-built for Calgary's four seasons.",
    description:
      "From low-maintenance composite to natural cedar, we engineer decks that survive freeze-thaw cycles without warping, splintering, or fading. Your deck should be the part of your home you use the most — not the part you worry about.",
    image: "/images/decking-hero.jpg",
    features: [
      "Composite, cedar, and pressure-treated options",
      "Engineered for Alberta freeze-thaw extremes",
      "Integrated lighting and railing systems",
      "Permit-ready plans and structural engineering",
    ],
    icon: "LayoutGrid",
  },
  {
    slug: "garden-design",
    title: "Modern Garden Design",
    tagline: "Landscaping is upkeep. Garden design is architecture.",
    description:
      "We design outdoor spaces with clean lines, intentional planting, integrated lighting, and year-round structure. No fussy flower beds. No Saturday mornings spent weeding. Just a landscape that looks better every season.",
    image: "/images/garden-hero.jpg",
    features: [
      "Architectural planting schemes with year-round interest",
      "Integrated hardscaping and softscaping",
      "Low-maintenance native and climate-adapted species",
      "Outdoor lighting design for evening drama",
    ],
    icon: "Flower2",
  },
  {
    slug: "foundation-repair",
    title: "Foundation Repair",
    tagline: "We don't patch and pray. We diagnose and fix.",
    problem:
      "Calgary's clay soil expands and contracts with every season. Your foundation takes the hit. Hairline cracks become water entry points. Settling turns into structural damage.",
    agitation:
      "Every winter you ignore it, the damage compounds. Water seeps in, freezes, and widens. What starts as a minor cosmetic crack becomes a $30,000 problem — and a liability if you're managing a commercial property.",
    solution:
      "Structura Outdoors doesn't patch and pray. We diagnose the root cause — drainage, soil movement, structural load — and fix it permanently. Piering, underpinning, crack injection, waterproofing. Done once. Done right. Warranty-backed.",
    image: "/images/foundation-hero.jpg",
    features: [
      "Helical piering and push pier systems",
      "Interior and exterior waterproofing",
      "Crack injection and structural epoxy repair",
      "Drainage correction and soil stabilization",
    ],
    icon: "Shield",
  },
];

export const processSteps = [
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
      "No mess. No delays. No punch list that drags on for weeks. Just the outdoor space you pictured — backed by a 5-year workmanship warranty and a team that answers your call.",
    icon: "Sparkles",
  },
];

export const testimonials = [
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

export const portfolioItems = [
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

export const certifications = [
  "BBB Accredited",
  "CHBA Member",
  "Fully Insured",
  "WCB Covered",
  "5-Year Warranty",
];

export const blogPosts = [
  {
    title: "What Calgary Clay Soil Means for Your Foundation (And What to Do About It)",
    slug: "calgary-clay-soil-foundation-guide",
    excerpt:
      "Calgary's unique soil composition creates foundation challenges most homeowners don't discover until it's too late. Here's what to look for and when to act.",
    date: "2026-04-15",
    category: "Foundation Repair",
  },
  {
    title: "Composite vs. Cedar Decking in Alberta: What Actually Survives the Winter",
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
    title: "How to Choose a Landscaping Contractor in Calgary: 7 Questions to Ask",
    slug: "choose-landscaping-contractor-calgary",
    excerpt:
      "Before you sign any contract, ask these seven questions. They'll separate the professionals from the pretenders.",
    date: "2026-02-20",
    category: "Advice",
  },
];
