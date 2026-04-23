export type Project = {
  slug: string;
  title: string;
  role: string;
  year: string;
  tags: string[];
  cover: string; // gradient class
  blurb: string;
  problem: string;
  process: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "hevo-data",
    title: "Hevo Data — Pipelines reimagined",
    role: "Lead Product Designer",
    year: "2023 — Now",
    tags: ["SaaS", "Data", "Workflows"],
    cover: "from-[#FFB199] via-[#FF8C7C] to-[#FF6A88]",
    blurb:
      "Rebuilding the pipeline creation experience for thousands of data engineers — from a 9-step wizard to a single fluid canvas.",
    problem:
      "Setting up a new pipeline took 20+ minutes and required jumping between disconnected screens. Engineers dropped off mid-flow constantly.",
    process: [
      "Shadowed 12 customers across 3 timezones, mapped every click in their first-pipeline journey.",
      "Stripped the 9-step wizard into 3 progressive sections with inline validation.",
      "Co-designed a live preview component with engineering — query → schema → first row in under 5 seconds.",
      "Shipped a private beta to 40 accounts and iterated weekly for 6 weeks.",
    ],
    outcome:
      "Median time-to-first-pipeline dropped from 22 min → 6 min. Activation up 38% in the first quarter after rollout.",
  },
  {
    slug: "clazar-design-system",
    title: "Clazar — Design system from zero",
    role: "Founding Designer",
    year: "2024",
    tags: ["Design System", "Tokens", "Foundations"],
    cover: "from-[#A1C4FD] via-[#7BB1F0] to-[#C2E9FB]",
    blurb:
      "Built Clazar's first proper design system — tokens, components, docs and a Figma library — solo, in 9 weeks.",
    problem:
      "An early team shipping fast had 4 button styles, 6 shades of blue, and zero shared spacing. Onboarding new engineers cost a week each.",
    process: [
      "Audited every screen, photographed every inconsistency on a giant FigJam wall.",
      "Defined a 3-layer token model (primitive → semantic → component) inspired by Polaris.",
      "Shipped foundations + 22 components in Figma + Tailwind, paired with a Storybook docs site.",
      "Ran a weekly office hour for adoption — answered 130+ questions in the first month.",
    ],
    outcome:
      "100% of new screens use the system. Design → engineering handoff time cut roughly in half.",
  },
  {
    slug: "messageplus",
    title: "MessagePlus — Inbox that thinks",
    role: "Product Designer",
    year: "2022",
    tags: ["Mobile", "Productivity", "AI"],
    cover: "from-[#D4FC79] via-[#9BE15D] to-[#96E6A1]",
    blurb:
      "An AI-assisted messaging app that quietly drafts your replies in your voice — never the assistant's.",
    problem:
      "Reply suggestions in messaging apps feel generic and corporate. People skip them.",
    process: [
      "Studied 200+ real conversations to model what 'voice' actually looks like in chat.",
      "Designed a confidence-bar UI: AI only suggests when it's >80% sure.",
      "Built a tone-shaping pill: tap to nudge formal ↔ casual.",
    ],
    outcome:
      "Suggestion acceptance rate hit 47% — about 4× industry average for smart replies.",
  },
  {
    slug: "simbian-ai",
    title: "Simbian.ai — Security copilot",
    role: "Senior Product Designer",
    year: "2023",
    tags: ["AI", "Security", "Enterprise"],
    cover: "from-[#0F2027] via-[#203A43] to-[#2C5364]",
    blurb:
      "Designing the human-in-the-loop layer for an autonomous SOC agent — analysts trust it because they can see exactly what it did.",
    problem:
      "Security analysts don't trust AI agents. Black-box automation is a non-starter in regulated environments.",
    process: [
      "Designed an audit timeline that shows every tool call, decision and rollback the agent made.",
      "Created an 'approve / edit / reject' triage tray that keeps the analyst in command.",
      "Built reasoning cards that translate agent thinking into plain English.",
    ],
    outcome:
      "Pilot customers reported 70%+ trust in agent actions after using the timeline for two weeks.",
  },
  {
    slug: "kite-payments",
    title: "Kite — Payments without the dread",
    role: "Product Designer",
    year: "2021",
    tags: ["Fintech", "Mobile", "B2C"],
    cover: "from-[#FBC2EB] via-[#A18CD1] to-[#F5A2B8]",
    blurb:
      "A consumer payments app that treats sending money like sending a note — warm, personal, and a little playful.",
    problem:
      "Payment flows are sterile. Sending ₹500 to a friend feels the same as paying a tax bill.",
    process: [
      "Designed expressive transaction cards with notes, stickers and reactions.",
      "Stripped confirmation flows to a single haptic-tap with undo.",
    ],
    outcome:
      "P2P weekly active rate up 2.3× after launch. NPS +18.",
  },
  {
    slug: "studio-notes",
    title: "Studio Notes — Writing for builders",
    role: "Self-initiated",
    year: "2020",
    tags: ["Side Project", "Editorial"],
    cover: "from-[#F6D365] via-[#F0B36A] to-[#FDA085]",
    blurb:
      "A small writing app I built for myself to think out loud about design problems — no folders, no clutter, just a daily blank page.",
    problem:
      "Every notes app I tried optimised for organisation. I wanted one that optimised for showing up.",
    process: [
      "Designed a single endless scroll, one entry per day.",
      "Removed every menu — just keyboard shortcuts and a soft autosave.",
    ],
    outcome:
      "Used it daily for 3 years. Open-sourced the editor; small community of writers using it now.",
  },
];

export const blogPosts = [
  {
    slug: "ai-first-workflows",
    title: "AI-first workflows for product designers",
    excerpt:
      "Less Figma frames, more shipped pixels. How I rebuilt my workflow around AI prototyping in 2024.",
    date: "Mar 18, 2025",
    readTime: "8 min",
  },
  {
    slug: "design-systems-team-of-one",
    title: "Building a design system as a team of one",
    excerpt:
      "What I learned shipping Clazar's design system in 9 weeks — and what I'd do differently if I started today.",
    date: "Feb 02, 2025",
    readTime: "12 min",
  },
  {
    slug: "stop-designing-pages",
    title: "Stop designing pages. Start designing systems of decisions.",
    excerpt:
      "A short note on why most product design is asking the wrong question one screen at a time.",
    date: "Dec 11, 2024",
    readTime: "5 min",
  },
  {
    slug: "the-design-builder",
    title: "What I mean when I say 'design builder'",
    excerpt:
      "Designers who ship. The label, the practice, and why I think it's the most useful role in product right now.",
    date: "Oct 20, 2024",
    readTime: "6 min",
  },
];

export const timeline = [
  { year: "2024 — Now", what: "Founding Designer at Clazar. Built the design system, shipping product daily." },
  { year: "2022 — 2024", what: "Lead Product Designer at Hevo Data. Owned pipeline, transformations, observability." },
  { year: "2020 — 2022", what: "Senior Product Designer at MessagePlus. Mobile-first, AI-assisted messaging." },
  { year: "2018 — 2020", what: "Product Designer at Kite. Consumer fintech, payments, growth flows." },
  { year: "2015 — 2018", what: "Designer at a small Bangalore studio. Brand + product, learned to ship." },
  { year: "2014", what: "Started designing professionally. First job at a 4-person startup." },
];

export const tools = [
  "Figma",
  "Framer",
  "Lovable",
  "Cursor + Claude",
  "v0",
  "Linear",
  "Notion",
  "Principle",
  "After Effects",
];
