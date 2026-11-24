export const profile = {
  name: "Alzi",
  headline: "Full-stack maker, ERP consultant & IT manager",
  location: "Batam, Indonesia",
  emailEncoded: "emluemh5MjVAZ21haWwuY29t", // base64, decoded on click by EmailReveal
  resumePdf: "/resume.pdf",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/itsalzi/" },
    { label: "GitHub", href: "https://github.com/alzithetrivialmind" },
    { label: "Threads", href: "https://www.threads.net/@x.alzii_" },
  ],
};

export type Project = {
  slug: string;
  title: string;
  role: string;
  year: string;
  tags: string[];
  cover: string; // gradient class, shown when there is no image
  image?: string;
  blurb: string;
  problem: string;
  process: string[];
  outcome: string;
  link?: string;
  github?: string;
};

export function projectName(p: Project) {
  return p.title.split("—")[0].trim();
}

export const projects: Project[] = [
  {
    slug: "snapculler",
    title: "SnapCuller — Photo culling without the wait",
    role: "Founder & Developer",
    year: "2026",
    tags: ["Electron", "React", "TypeScript", "AI"],
    cover: "from-[#1E1B4B] via-[#4C1D95] to-[#7C3AED]",
    image: "/works/snapculler.webp",
    blurb:
      "A desktop photo culler for photographers who shoot thousands of RAW frames. It opens a folder directly, with no import step, and sorts with single keystrokes.",
    problem:
      "Photographers lose hours waiting for RAW files to render in heavy software, and many of the alternatives require a subscription.",
    process: [
      "Built a progressive RAW viewer: an instant preview first, then a full-quality pass in the background, with neighbouring frames prefetched.",
      "Designed a keyboard-first workflow with custom buckets, undo, and side-by-side comparison with synced zoom.",
      "Added face and blur detection, with optional cloud AI through OpenAI and Gemini.",
      "Wrote an IPTC metadata engine and XMP sidecar sync, so ratings and labels carry over to Lightroom.",
    ],
    outcome:
      "Launched on Gumroad as a one-time purchase for Windows and macOS. I handled everything from MVP to landing page, positioning and sales.",
    link: "https://www.snapculler.com",
  },
  {
    slug: "bollard-pull-test",
    title: "Bollard Pull Test App — Live load-cell data",
    role: "Software & IoT Engineer",
    year: "Palma Shipyard",
    tags: ["IoT", "Hardware integration", "Reporting"],
    cover: "from-[#0F2027] via-[#1F4B5C] to-[#2C7A7B]",
    blurb:
      "A proprietary application that runs tugboat bollard pull tests end to end, reading straight from the weighing hardware.",
    problem:
      "A bollard pull test measures a tugboat's pulling force. The shipyard needed the whole test, from reading the scale to the final report, handled in one system.",
    process: [
      "Integrated the application directly with digital weighing scales and load cells.",
      "Built live data ingestion, so readings are tracked automatically during the test.",
      "Generated the test report instantly from the recorded data.",
    ],
    outcome:
      "Deployed at PT Palma Progress Shipyard to manage the bollard pull testing process with real-time data and instant reports.",
  },
  {
    slug: "erpnext-implementation",
    title: "ERPNext — One system for the shipyard",
    role: "ERP Functional & Technical Consultant",
    year: "2022 — Now",
    tags: ["ERPNext", "Python", "MariaDB", "Linux"],
    cover: "from-[#134E5E] via-[#2F7D6B] to-[#71B280]",
    blurb:
      "End-to-end ERPNext implementation for shipyard operations: customization, legacy data migration and the SOPs people follow.",
    problem:
      "Shipyard workflows were fragmented across legacy processes and had to move into one ERP.",
    process: [
      "Mapped shipyard workflows to ERPNext and migrated the legacy data.",
      "Extended the Stock Ledger with FIFO provenance, tracing each stock issue back to the receipt it came from, with multi-currency costing.",
      "Customized purchasing: guided item codes, per-item and global discounts, receipts tied to purchase orders, and locked contract rates.",
      "Designed print formats for key purchasing and stock documents, and wrote the SOPs and workflow guides.",
    ],
    outcome:
      "ERPNext v15 with custom scripts, reports and print formats for the shipyard. The customizations are documented in a public repository.",
    github: "https://github.com/alzithetrivialmind/ERPNext-Customizations",
  },
  {
    slug: "cecs",
    title: "CECS — Equipment control for a working yard",
    role: "Full-stack Developer",
    year: "2026",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Docker"],
    cover: "from-[#3A2A1E] via-[#A3541F] to-[#F59E0B]",
    blurb:
      "Company Equipment Control System: the lifecycle of heavy equipment, vehicles and production machinery, from breakdown report to preventive maintenance.",
    problem:
      "The engineering division needed breakdowns, repairs, service schedules and inspections recorded in one place, by people reporting from the dock rather than a desk.",
    process: [
      "Made breakdown reporting mobile-first, flowing into work orders that update equipment status automatically.",
      "Scheduled preventive maintenance by hour meter or calendar, with dynamic checklists.",
      "Tracked inspections, certificates and spare-part usage, with QR asset tags on each unit.",
      "Built fleet dashboards with availability, MTTR and MTBF, plus Excel exports.",
    ],
    outcome:
      "A role-based system for admins, supervisors and technicians at PT Palma Progress Shipyard, built on Next.js, PostgreSQL and MinIO.",
  },
  {
    slug: "nor-checklist",
    title: "NOR Checklist — Ship inspection, off paper",
    role: "Full-stack Developer",
    year: "2026",
    tags: ["React", "PWA", "TypeScript"],
    cover: "from-[#7FA8E8] via-[#4C7BDD] to-[#3B5BDB]",
    blurb:
      "An installable web app for ship inspections, findings and Notice of Readiness documents, shared by the yard and its surveyors.",
    problem:
      "Inspections relied on physical paperwork shared between the shipyard team, the surveyor and the owner.",
    process: [
      "Defined three roles: admins set up projects, the yard executes checklists, external auditors review them.",
      "Added photo evidence, in-app notifications and an activity trail for each project.",
      "Blocked the Notice of Readiness until every issue and finding is closed, then generated it as a PDF.",
    ],
    outcome:
      "A progressive web app covering the inspection flow. Its Supabase backend integration is in progress.",
    github: "https://github.com/alzithetrivialmind/shipyard-nor-checklist",
  },
  {
    slug: "attendance",
    title: "Attendance — From fingerprint log to work codes",
    role: "Developer",
    year: "2025",
    tags: ["Python", "Flask", "SQLite"],
    cover: "from-[#E8836B] via-[#DB6A5E] to-[#C94F6D]",
    blurb:
      "A web app that turns attendance exports into shift and work-hour codes, ready for review and export.",
    problem: "Shift and work-hour codes had to be worked out from raw attendance exports.",
    process: [
      "Detected the shift type from each date and generated codes from clock-out times.",
      "Kept people in control with per-row edits for leave, breaks and overtime.",
      "Stored every upload with an audit trail and the original file.",
    ],
    outcome: "Ported from a desktop tool to a web app with user roles and CSV and Excel export.",
    github: "https://github.com/alzithetrivialmind/fingerspot-attendance-data-conversion",
  },
  {
    slug: "palma-shipyard",
    title: "Palma Shipyard — Corporate website",
    role: "Website Developer",
    year: "2022 — Now",
    tags: ["WordPress", "Elementor", "cPanel"],
    cover: "from-[#A1C4FD] via-[#7BB1F0] to-[#C2E9FB]",
    image: "/works/palma.webp",
    blurb:
      "The official website of PT Palma Progress Shipyard, presenting its products and infrastructure.",
    problem:
      "The shipyard needed a digital presence that showed its capabilities to a global audience.",
    process: [
      "Designed and developed the site on WordPress and Elementor.",
      "Directed its redesign and continue to manage it.",
    ],
    outcome: "Live at palmashipyard.com and maintained as the company's public face.",
    link: "https://www.palmashipyard.com",
  },
  {
    slug: "securebatch-qr",
    title: "SecureBatch QR — Private contact sharing",
    role: "Developer & Creator",
    year: "2026",
    tags: ["React", "TypeScript", "Vite"],
    cover: "from-[#1E1B4B] via-[#4338CA] to-[#A855F7]",
    image: "/works/securebatch.webp",
    blurb:
      "A vCard QR generator that makes branded codes in bulk from a CSV, entirely in the browser.",
    problem:
      "Making contact QR codes in bulk often means uploading other people's details to someone else's server.",
    process: [
      "Kept all generation client-side, so contact data never leaves the device.",
      "Added CSV import, logo embedding and consistent branding across a batch.",
      "Packaged each batch as a single ZIP download.",
    ],
    outcome: "Live, with the source open on GitHub.",
    link: "https://qr-code-contact-maker.vercel.app/",
    github: "https://github.com/alzithetrivialmind/securebatch-qr",
  },
  {
    slug: "disciplinr",
    title: "Disciplinr — Time boxing with a score",
    role: "Developer",
    year: "2025",
    tags: ["Laravel", "PHP", "Bootstrap"],
    cover: "from-[#8FBF4D] via-[#5FA24A] to-[#3F8F4F]",
    blurb:
      "A weekly time-blocking and time-boxing checklist with automatic scoring and trend analytics.",
    problem: "Calendars record a plan. They don't show whether you kept to it.",
    process: [
      "Built weekly checklists for time blocks and time boxes.",
      "Scored results automatically and charted the trend.",
      "Added a report of the blocks that fail most often.",
    ],
    outcome: "An open-source Laravel app, set up to deploy on Vercel.",
    github:
      "https://github.com/alzithetrivialmind/Disciplinr-Time-Boxing-and-Blocking-Management-App",
  },
];

export type Capability = {
  title: string;
  summary: string;
  skills: string[];
  proof: string[]; // project slugs
};

export const capabilities: Capability[] = [
  {
    title: "Software & products",
    summary:
      "Web, desktop and internal applications, taken from first idea through launch and support.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Electron",
      "Python",
      "Laravel",
      "PostgreSQL",
      "SQL Server",
    ],
    proof: ["snapculler", "cecs", "nor-checklist"],
  },
  {
    title: "ERP & business systems",
    summary:
      "ERPNext as both functional and technical consultant: process mapping, customization, migration and SOPs.",
    skills: [
      "ERPNext v15",
      "Client & server scripts",
      "Query reports",
      "Print formats",
      "Data migration",
      "SOP authoring",
    ],
    proof: ["erpnext-implementation"],
  },
  {
    title: "IoT & hardware integration",
    summary: "Software that reads from physical equipment and turns it into usable records.",
    skills: [
      "Weighing scales & load cells",
      "Fingerprint attendance",
      "ESP32",
      "Arduino",
      "Raspberry Pi",
    ],
    proof: ["bollard-pull-test", "attendance"],
  },
  {
    title: "Infrastructure & networks",
    summary: "Servers, storage, networks and monitoring for sites that have to stay up.",
    skills: [
      "Synology & Linux NAS",
      "VMware",
      "Docker",
      "Mikrotik",
      "Cisco",
      "UniFi",
      "Fiber & CCTV",
      "PRTG",
      "Prometheus",
      "Grafana",
    ],
    proof: [],
  },
  {
    title: "Cybersecurity",
    summary: "Penetration testing, firewall configuration and network traffic analysis.",
    skills: [
      "Penetration testing",
      "pfSense",
      "OPNsense",
      "Fortinet",
      "Sangfor",
      "IPFire",
      "Backup & recovery",
    ],
    proof: [],
  },
  {
    title: "AI in the workflow",
    summary: "AI inside products and in how I build them, including models that run locally.",
    skills: [
      "Ollama",
      "OpenAI & Gemini APIs",
      "MCP",
      "Face & blur detection",
      "AI-assisted development",
    ],
    proof: ["snapculler"],
  },
  {
    title: "IT leadership & governance",
    summary: "Running an agency and an IT function, including the assets and licences behind them.",
    skills: ["Agency management", "IT asset management", "Software licensing", "Google Workspace"],
    proof: [],
  },
  {
    title: "Design & frontend",
    summary: "Interfaces, corporate sites and landing pages, informed by a marketing degree.",
    skills: ["UI/UX redesign", "WordPress & Elementor", "Landing pages", "Photoshop"],
    proof: ["palma-shipyard", "securebatch-qr"],
  },
];

export type Job = {
  period: string;
  role: string;
  company: string;
  href: string;
  points: string[];
};

export const experience: Job[] = [
  {
    period: "Now",
    role: "Director",
    company: "Digisentral Solusi",
    href: "https://digisentralsolusi.id/",
    points: [
      "Lead strategy and technical execution for enterprise digital solutions and local infrastructure projects.",
      "Oversee client projects end to end: corporate networks, system automation and tailored software.",
    ],
  },
  {
    period: "May 2022 — Now",
    role: "IT Support Manager & Network Analyst / ERP Consultant",
    company: "PT Palma Progress Shipyard",
    href: "https://palmashipyard.com/",
    points: [
      "Built the Bollard Pull Test application, integrated with digital scales and load cells.",
      "Led the ERPNext implementation: customization, data migration and SOPs.",
      "Manage network security, NAS servers, CCTV, backups and monitoring.",
      "Planned fingerprint attendance, workshop wireless, CCTV and fiber optic projects.",
      "Run Google Workspace, software licensing and IT asset inventory, and manage the corporate website.",
    ],
  },
  {
    period: "Aug 2019 — May 2022",
    role: "IT & Cybersecurity Intern",
    company: "Universitas Internasional Batam",
    href: "https://www.uib.ac.id/",
    points: [
      "Cybersecurity (2022): penetration testing of UIB web applications, traffic analysis and firewall configuration.",
      "Server administration (2021 — 2022): VMware, backup and disaster recovery, Active Directory, PRTG and Prometheus.",
      "Networks (2020 — 2021): LAN and wireless troubleshooting, Mikrotik, Cisco and pfSense routing, VLAN mapping.",
      "Administrative assistant (2019 — 2020).",
    ],
  },
];

export const education = [
  {
    period: "2023 — 2025",
    degree: "Master of Management, Marketing",
    school: "Universitas Internasional Batam",
    note: "GPA 3.92 · Marketing strategy and game theory",
  },
  {
    period: "2019 — 2023",
    degree: "Bachelor's degree, Computer Science",
    school: "Universitas Internasional Batam",
    note: "GPA 3.90 · Network analysis and DevOps",
  },
  {
    period: "2020",
    degree: "Workshop: IoT SmartLock",
    school: "Ming Chi University of Technology",
    note: "Jul — Oct 2020",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  href: string;
};

// Add published posts here, then add Blogs back to the links in PillNav.
export const blogPosts: BlogPost[] = [];
