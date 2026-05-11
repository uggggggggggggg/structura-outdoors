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
    images: [
      {
        url: "/images/og-image-structura-outdoors.jpg",
        width: 1200,
        height: 630,
        alt: "Structura Outdoors Calgary — premium landscaping, decking, garden design and foundation repair company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Structura Outdoors | Premium Landscaping & Design",
    description:
      "Luxury decks, modern garden design, and foundation repair — Calgary, AB.",
    images: ["/images/og-image-structura-outdoors.jpg"],
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
    image: "/images/service-decking-calgary.jpg",
    imageAlt:
      "Custom composite deck Calgary Alberta — Structura Outdoors luxury decking designed for four-season durability and Calgary climate extremes",
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
    image: "/images/service-garden-design-calgary.jpg",
    imageAlt:
      "Modern architectural garden design Calgary — low-maintenance landscaping with integrated hardscaping and outdoor lighting by Structura Outdoors",
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
    image: "/images/service-foundation-repair-calgary.jpg",
    imageAlt:
      "Professional foundation repair and waterproofing Calgary — residential and commercial structural repair, piering and underpinning by Structura Outdoors",
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
    slug: "springbank-hill-multi-level-deck",
    title: "Springbank Hill Multi-Level Deck",
    category: "Decking",
    location: "Springbank Hill, Calgary",
    description:
      "Composite deck with integrated lighting and glass railings, maximizing a steep slope property in Calgary's Springbank Hill neighbourhood.",
    extendedDescription:
      "The Mitchell family's Springbank Hill property featured a dramatic 22-degree slope that had gone unused since construction — a dead zone of overgrown grass and erosion gullies. Our brief: turn 1,400 square feet of unusable terrain into the home's signature outdoor living space. The resulting three-tier composite deck cascades down the slope in staggered platforms, each with its own purpose: an upper dining terrace, a mid-level lounge with a fire table, and a lower sun deck with glass railings that preserve the panoramic foothills view.",
    challenge:
      "The property had a steep 22-degree slope with severe drainage issues that caused erosion across the entire hillside. Calgary's freeze-thaw cycles meant any structural solution had to be engineered for significant ground movement. Access for equipment was restricted to a narrow side yard.",
    solution:
      "We designed a three-tier composite deck anchored on helical piles driven 12 feet into stable soil below the frost line. Each tier is structurally independent to accommodate differential ground movement. Integrated channel drains redirect surface water away from the foundation. The upper tier connects directly to the kitchen, creating a seamless indoor-outdoor transition.",
    highlights: [
      "Three-tier composite deck with dedicated dining, lounge, and sun deck zones",
      "Helical pile foundation engineered for Calgary's expansive clay soil",
      "Frameless glass railings preserving unobstructed foothills views",
      "Integrated LED step lighting and under-rail ambient lighting",
      "Built-in irrigation channels to manage hillside drainage",
      "Permitted and built in 9 weeks — ahead of the 12-week estimate",
    ],
    completionDate: "2025-08",
    before: "/images/portfolio-deck-before-springbank.jpg",
    after: "/images/portfolio-deck-after-springbank.jpg",
    beforeAlt:
      "Springbank Hill Calgary sloping property before multi-level composite deck installation by Structura Outdoors",
    afterAlt:
      "Springbank Hill luxury multi-level composite deck with glass railings and integrated lighting — Structura Outdoors Calgary deck builder",
  },
  {
    slug: "elbow-park-modern-garden",
    title: "Elbow Park Modern Garden",
    category: "Garden Design",
    location: "Elbow Park, Calgary",
    description:
      "Architectural planting scheme with native grasses, corten steel edging, and integrated LED mood lighting in Calgary's Elbow Park.",
    extendedDescription:
      "The Harrison family's Elbow Park home had a traditional landscape that demanded constant watering, weeding, and seasonal replanting — precisely the kind of maintenance they no longer wanted. We stripped the site back to its bones and designed a modern, architectural garden that looks more intentional with every passing season. Corten steel retaining walls double as sculptural edging. Mass plantings of Karl Foerster feather reed grass and Little Bluestem provide year-round structure, while integrated uplighting transforms the garden into a dramatic evening landscape.",
    challenge:
      "The existing garden was high-maintenance, water-hungry, and lacked any sense of design cohesion. The homeowners wanted something that looked curated and modern but required almost no weekly upkeep beyond seasonal trimming.",
    solution:
      "We implemented a full hardscape-to-softscape redesign anchored by corten steel edging that defines clean planting zones. Every plant was selected for Calgary's hardiness zone (3b) and drought tolerance. Drip irrigation runs throughout. LED uplighting on timers highlights the steel and grasses after sunset.",
    highlights: [
      "Corten steel retaining walls and edging for sculptural, maintenance-free definition",
      "Mass planting of native and climate-adapted grasses for year-round structure",
      "Full drip irrigation system reducing water consumption by 60%",
      "Programmable LED uplighting for dramatic evening curb appeal",
      "Zero-mow, zero-fertilizer design — seasonal trim only",
      "Property value increase estimated at 8–12% by local realtor",
    ],
    completionDate: "2025-09",
    before: "/images/portfolio-garden-before-elbowpark.jpg",
    after: "/images/portfolio-garden-after-elbowpark.jpg",
    beforeAlt:
      "Elbow Park Calgary backyard before modern garden design and architectural landscaping transformation by Structura Outdoors",
    afterAlt:
      "Elbow Park Calgary modern architectural garden with native grasses, corten steel edging and integrated LED lighting — Structura Outdoors garden design",
  },
  {
    slug: "downtown-commercial-foundation",
    title: "Downtown Commercial Foundation",
    category: "Foundation Repair",
    location: "Downtown Calgary",
    description:
      "Complete underpinning and waterproofing of a 1960s commercial building in Downtown Calgary with zero tenant disruption.",
    extendedDescription:
      "A 1964 commercial building in Calgary's downtown core had been managing foundation issues with patch repairs for two decades. When Michael Chen took over property management, he inherited basement leaks across three tenant spaces, visible cracking in the parking garage, and an insurance renewal contingent on a structural assessment. Our team conducted a full geotechnical survey, identified the root cause — decades of poor drainage saturating expansive clay — and executed a complete underpinning and waterproofing program. All three commercial tenants remained operational throughout the 14-week project.",
    challenge:
      "A 60-year-old commercial building with active foundation settlement, water infiltration into tenant spaces, and structural cracking visible in the underground parking. Work had to proceed without disrupting three operating businesses. Insurance renewal was at risk.",
    solution:
      "After a geotechnical survey confirmed expansive clay saturation, we installed 28 helical piers to bedrock, applied full interior and exterior waterproofing membranes, replaced the failed perimeter drainage system, and injected all structural cracks with high-strength epoxy. Work was staged in zones to keep tenants operational.",
    highlights: [
      "28 helical piers driven to bedrock across three building elevations",
      "Full interior and exterior waterproofing membrane system",
      "Complete perimeter drainage replacement with sump pump backup",
      "Structural crack epoxy injection — 47 linear feet total",
      "Zero tenant disruption during the 14-week project",
      "Post-repair structural report cleared insurance renewal conditions",
    ],
    completionDate: "2025-11",
    before: "/images/portfolio-foundation-before-downtown.jpg",
    after: "/images/portfolio-foundation-after-downtown.jpg",
    beforeAlt:
      "Downtown Calgary 1960s commercial building before foundation underpinning and waterproofing by Structura Outdoors",
    afterAlt:
      "Downtown Calgary commercial foundation repair completed — structural underpinning, waterproofing and piering by Structura Outdoors",
  },
  {
    slug: "aspen-woods-rooftop-deck",
    title: "Aspen Woods Rooftop Deck",
    category: "Decking",
    location: "Aspen Woods, Calgary",
    description:
      "Custom cedar rooftop deck with built-in planters, privacy screens, and outdoor kitchen rough-in in Calgary's Aspen Woods.",
    extendedDescription:
      "A flat rooftop in Aspen Woods that served only as a mechanical access point became one of Calgary's most dramatic outdoor entertaining spaces. Working within the structural constraints of the existing roof, we engineered a lightweight cedar deck system that added less than 12 pounds per square foot. Built-in cedar planters soften the perimeter, louvered privacy screens provide wind protection, and the outdoor kitchen rough-in — with gas, water, and electrical — awaits the client's final appliance selection.",
    challenge:
      "The existing flat roof had strict structural load limits. Calgary's wind exposure at this elevation demanded wind-rated privacy screens. Access for materials was limited to a narrow exterior staircase.",
    solution:
      "We engineered a lightweight cedar deck system using aluminum substructure to minimize dead load. Louvered privacy screens are rated for 120 km/h wind loads. All materials were crane-hoisted in a single day. Built-in planters use lightweight growing medium to stay within structural limits.",
    highlights: [
      "Lightweight cedar deck system on aluminum substructure — under 12 psf dead load",
      "Wind-rated louvered privacy screens (120 km/h)",
      "Built-in cedar planters with integrated drip irrigation",
      "Outdoor kitchen rough-in: gas line, hot/cold water, GFCI electrical",
      "All materials crane-hoisted in one day to minimize disruption",
      "Engineered and permitted in 6 weeks, built in 7",
    ],
    completionDate: "2025-07",
    before: "/images/portfolio-rooftop-before-aspenwoods.jpg",
    after: "/images/portfolio-rooftop-after-aspenwoods.jpg",
    beforeAlt:
      "Aspen Woods Calgary rooftop before custom cedar deck installation by Structura Outdoors",
    afterAlt:
      "Aspen Woods Calgary custom cedar rooftop deck with built-in planters, privacy screens and outdoor kitchen — Structura Outdoors luxury decking",
  },
  {
    slug: "mount-royal-heritage-garden",
    title: "Mount Royal Heritage Garden",
    category: "Garden Design",
    location: "Mount Royal, Calgary",
    description:
      "Period-sensitive modern garden design for a heritage property in Calgary's Mount Royal, blending contemporary structure with classic plantings.",
    extendedDescription:
      "A 1920s character home in Mount Royal needed a front garden that honored its heritage while signaling that the owners had taste for this century, not the last. Working within the community's architectural guidelines, we designed a restrained modern garden that uses period-appropriate limestone hardscaping as its foundation, then layers in contemporary plant groupings, a minimalist water feature, and hidden LED pathway lighting. The result respects the streetscape but stands apart — exactly the balance the homeowners wanted.",
    challenge:
      "The property is in a heritage district with strict architectural guidelines. The front garden needed to complement the 1920s character home while introducing a modern sensibility. Community association approval was required.",
    solution:
      "We used period-appropriate limestone for all hardscaping to satisfy the heritage board, then introduced modern elements through plant selection, a minimalist reflecting pool, and hidden LED lighting. All plantings are historically compatible species arranged in contemporary mass groupings. The design passed community review in a single submission.",
    highlights: [
      "Limestone hardscaping approved by the Mount Royal heritage board",
      "Minimalist reflecting pool as a contemporary focal point",
      "Historically compatible plantings in modern mass groupings",
      "Hidden LED pathway and uplighting — no visible fixtures",
      "Community association approval in a single submission",
      "Featured in Avenue Calgary's 'Best Front Gardens' 2025",
    ],
    completionDate: "2025-06",
    before: "/images/portfolio-garden-before-mountroyal.jpg",
    after: "/images/portfolio-garden-after-mountroyal.jpg",
    beforeAlt:
      "Mount Royal Calgary heritage property garden before period-sensitive modern garden renovation by Structura Outdoors",
    afterAlt:
      "Mount Royal Calgary heritage modern garden design blending contemporary structure with classic plantings — Structura Outdoors",
  },
  {
    slug: "riverside-estates-full-exterior",
    title: "Riverside Estates Full Exterior",
    category: "Foundation Repair",
    location: "Bowness, Calgary",
    description:
      "Exterior waterproofing and drainage correction for a 14-unit riverside complex in Calgary's Bowness, including new retaining walls.",
    extendedDescription:
      "When the Riverside Estates HOA noticed water staining in ground-floor units and a retaining wall that had begun to lean, they called Structura. The 14-unit complex sits on a riverside slope in Bowness where seasonal groundwater migration was overwhelming a 40-year-old drainage system. We executed a comprehensive exterior waterproofing program across all four building elevations, installed a modern perimeter drainage system with dual sump pumps, and replaced the failing retaining wall with an engineered segmental block wall rated for the hydraulic pressure of the site. The project was completed two weeks ahead of the board's schedule and $18,000 under budget.",
    challenge:
      "A 14-unit riverside complex with water infiltration into ground-floor units, a leaning retaining wall approaching structural failure, and a 40-year-old drainage system that couldn't handle seasonal groundwater migration on a river-adjacent site.",
    solution:
      "Full exterior excavation to footing depth on all four elevations. Applied a multi-layer waterproofing membrane with dimple board drainage mat. Installed a modern perimeter drainage system with dual sump pumps on battery backup. Replaced the failing retaining wall with an engineered segmental block system rated for the site's hydraulic pressure. Grade correction directed surface water away from all foundations.",
    highlights: [
      "Full exterior excavation and waterproofing on 4 building elevations",
      "Multi-layer membrane system with dimple board drainage mat",
      "New perimeter drainage with dual sump pumps on battery backup",
      "Engineered segmental block retaining wall replacing the failed structure",
      "Grade correction and surface water management across the site",
      "Completed 2 weeks ahead of schedule, $18,000 under budget",
    ],
    completionDate: "2025-10",
    before: "/images/portfolio-exterior-before-riverside.jpg",
    after: "/images/portfolio-exterior-after-riverside.jpg",
    beforeAlt:
      "Riverside Estates Bowness Calgary multi-unit complex before exterior waterproofing and drainage correction by Structura Outdoors",
    afterAlt:
      "Riverside Estates Calgary 14-unit complex outdoor revitalization with retaining walls and drainage — Structura Outdoors commercial landscaping",
  },
];

export const heroImage = {
  src: "/images/hero-modern-outdoor-living-space.jpg",
  alt: "Modern luxury outdoor living deck and patio in Calgary with integrated lighting and contemporary design by Structura Outdoors — premium landscaping and deck builder Calgary Alberta",
};

export const aboutImage = {
  src: "/images/about-team-calgary.jpg",
  alt: "Structura Outdoors team — Calgary-based landscaping, decking and foundation repair professionals serving Calgary and surrounding areas",
};

export const pageHeroes = {
  services: {
    src: "/images/hero-services.jpg",
    alt: "Professional construction and decking workmanship by Structura Outdoors — Calgary luxury landscaping and outdoor construction",
  },
  portfolio: {
    src: "/images/hero-portfolio.jpg",
    alt: "Luxury outdoor living portfolio gallery — Structura Outdoors Calgary landscaping, decking and garden design projects",
  },
  process: {
    src: "/images/hero-process.jpg",
    alt: "Architectural design and blueprint process — Structura Outdoors Calgary design-build methodology",
  },
  about: {
    src: "/images/about-team-calgary.jpg",
    alt: "Structura Outdoors team — Calgary-based landscaping, decking and foundation repair professionals serving Calgary and surrounding areas",
  },
  quote: {
    src: "/images/hero-quote.jpg",
    alt: "Modern luxury outdoor living space with composite decking — request your free consultation from Structura Outdoors Calgary",
  },
  blog: {
    src: "/images/hero-blog.jpg",
    alt: "Landscaping insights, guides and tips for Calgary homeowners — Structura Outdoors blog and resources",
  },
  contact: {
    src: "/images/hero-contact.jpg",
    alt: "Contact Structura Outdoors Calgary — premium landscaping, decking and foundation repair for Calgary and surrounding areas",
  },
  guide: {
    src: "/images/hero-guide.jpg",
    alt: "The Calgary Outdoor Living Investment Guide — free resource from Structura Outdoors, Calgary's landscaping experts",
  },
};

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
