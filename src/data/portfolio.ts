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
  link?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "securebatch-qr",
    title: "SecureBatch QR — Privacy-first contact sharing",
    role: "Founder & Developer",
    year: "2024",
    tags: ["React", "TypeScript", "Vite", "Privacy"],
    cover: "from-[#FFB199] via-[#FF8C7C] to-[#FF6A88]",
    blurb:
      "A secure batch QR code contact maker that generates multiple QR codes with vCard data securely.",
    problem:
      "Sharing contacts in bulk often involves privacy risks or clunky third-party tools that store your data.",
    process: [
      "Designed a client-side only generation engine to ensure zero data ever leaves the device.",
      "Implemented vCard standard compatibility across iOS and Android scanners.",
      "Built a batch processing UI that allows users to upload CSVs and get a ZIP of high-res QR codes.",
    ],
    outcome:
      "Successfully launched on Vercel, providing a free tool for events and professional networking.",
    link: "https://qr-code-contact-maker.vercel.app/",
    github: "https://github.com/alzithetrivialmind/securebatch-qr",
  },
  {
    slug: "palma-shipyard",
    title: "Palma Shipyard — Industrial digital presence",
    role: "Lead Developer",
    year: "2022 — Now",
    tags: ["WordPress", "B2B", "Industrial"],
    cover: "from-[#A1C4FD] via-[#7BB1F0] to-[#C2E9FB]",
    blurb:
      "Official corporate website for PT Palma Progress Shipyard, showcasing facilities and services.",
    problem:
      "The shipyard lacked a digital footprint, making it difficult for international clients to audit facilities remotely.",
    process: [
      "Conducted a site audit of the shipyard to capture high-fidelity media for the portfolio.",
      "Developed a custom WordPress theme optimized for industrial showcase.",
      "Implemented a client-facing service portal for documentation access.",
    ],
    outcome:
      "Established a professional digital presence that significantly improved trust during international bidding processes.",
    link: "https://www.palmashipyard.com",
  },
  {
    slug: "disciplinr",
    title: "Disciplinr — Time boxing perfected",
    role: "Founder & Developer",
    year: "2023",
    tags: ["Laravel", "PHP", "Productivity"],
    cover: "from-[#D4FC79] via-[#9BE15D] to-[#96E6A1]",
    blurb:
      "A time boxing and blocking management app featuring analytics, trend analysis, and automatic scoring.",
    problem:
      "Standard calendars don't help with deep work discipline. People schedule time but don't stick to it.",
    process: [
      "Built a scoring algorithm that compares 'planned vs actual' time spent on tasks.",
      "Designed a minimalist dashboard focused on the 'Deep Work' score.",
      "Implemented SQLite for local-first performance and simple deployment.",
    ],
    outcome:
      "Personal productivity tool used daily to manage complex IT projects and consulting work.",
    github: "https://github.com/alzithetrivialmind/Disciplinr-Time-Boxing-and-Blocking-Management-App",
  },
  {
    slug: "erpnext-implementation",
    title: "ERPNext — Enterprise orchestration",
    role: "IT Developer & Consultant",
    year: "2022 — 2024",
    tags: ["ERP", "Python", "Business Logic"],
    cover: "from-[#0F2027] via-[#203A43] to-[#2C5364]",
    blurb:
      "End-to-end implementation of ERPNext for shipyard operations, including legacy data migration.",
    problem:
      "Manual paperwork and fragmented spreadsheets led to significant delays in procurement and inventory tracking.",
    process: [
      "Mapped complex shipyard workflows into standard ERP functional modules.",
      "Developed custom Python scripts for data cleaning and migration from legacy systems.",
      "Trained 50+ staff members on new digital SOPs.",
    ],
    outcome:
      "Procurement lifecycle reduced by 30%. Inventory accuracy increased to 98% within the first year.",
  },
];

export const blogPosts = [
  {
    slug: "it-strategy-for-startups",
    title: "IT Strategy for growing startups",
    excerpt:
      "Why 'moving fast' shouldn't mean leaving your infrastructure in a mess. A guide to scalable IT foundations.",
    date: "Oct 12, 2024",
    readTime: "6 min",
  },
  {
    slug: "cybersecurity-shipyards",
    title: "Cybersecurity in industrial environments",
    excerpt:
      "Lessons learned from hardening a shipyard network against modern attack vectors.",
    date: "Aug 05, 2024",
    readTime: "10 min",
  },
];

export const timeline = [
  { year: "2024 — Now", what: "Founder & Principal Consultant at DigiSentral Solusi. ERPNext & IT Strategy." },
  { year: "2022 — Now", what: "IT Developer at PT Palma Progress Shipyard. ERP, Security, and Network Infrastructure." },
  { year: "2020 — 2022", what: "IT Intern at Universitas Internasional Batam. Cybersecurity & Server Admin." },
  { year: "2023 — 2025", what: "Master of Management at Universitas Internasional Batam. GPA 3.92." },
  { year: "2019 — 2023", what: "Bachelor of Computer Science at Universitas Internasional Batam. GPA 3.90." },
];

export const tools = [
    "ERPNext",
    "Python",
    "React",
    "TypeScript",
    "Networking (Cisco, Mikrotik)",
    "Cybersecurity (Penetration Testing)",
    "Linux Administration",
    "Docker & VMware",
    "SQL Server",
    "Laravel",
];
