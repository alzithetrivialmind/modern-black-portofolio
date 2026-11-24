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
  cover: string; // gradient behind app screens
  image?: { src: string; alt: string; kind: "screen" | "full"; position?: string };
  video?: { youtubeId: string; title: string; caption: string };
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
    cover: "from-[#2A1F6B] via-[#6D3BD1] to-[#B78BFA]",
    image: {
      src: "/works/snapculler.webp",
      alt: "SnapCuller grid view with a folder of photos",
      kind: "screen",
    },
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
    image: {
      src: "/works/bollard-pull.webp",
      alt: "Tugboat Cahaya 1603 under test with the live load reading on screen",
      kind: "full",
      position: "object-[14%_50%]",
    },
    video: {
      youtubeId: "jKTn1xiJyMY",
      title: "Cahaya 1603 | Tug Boat Bollard Pull Test",
      caption:
        "Bollard pull test of the tugboat Cahaya 1603, with the live reading in the lower left. Video by Palma Progress Shipyard.",
    },
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
    image: {
      src: "/works/erpnext.svg",
      alt: "Diagram of stock issues traced back to the receipts they came from",
      kind: "full",
    },
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
    title: "CECS — Equipment control, open source",
    role: "Full-stack Developer",
    year: "2026",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Docker"],
    cover: "from-[#8A3B12] via-[#D9772B] to-[#F7B955]",
    image: {
      src: "/works/cecs.webp",
      alt: "CECS dashboard with demo equipment data",
      kind: "screen",
    },
    blurb:
      "Company Equipment Control System: a self-hosted app that follows heavy equipment, vehicles and machines through breakdowns, repairs, maintenance and inspections.",
    problem:
      "It answers one question quickly: what has happened to this machine, and is it ready to work? Most records are entered in the field, so it had to work on a phone first.",
    process: [
      "Made breakdown reporting a short phone form with photos and on-device drafts, flowing into work orders that update unit status and downtime.",
      "Scheduled preventive maintenance by operating hours or calendar, with hour-meter readings that can never go backwards.",
      "Tracked inspections, certificate expiry and spare-part usage, with a QR label for each unit.",
      "Built a fleet readiness dashboard, reports with Excel export, five roles and an audit log.",
    ],
    outcome:
      "Released under the MIT license with fictional demo data, Docker setup, and deployment, security and backup guides.",
    github: "https://github.com/alzithetrivialmind/simple-cecs",
  },
  {
    slug: "nor-checklist",
    title: "NOR Checklist — Ship inspection, off paper",
    role: "Full-stack Developer",
    year: "2026",
    tags: ["React", "PWA", "TypeScript"],
    cover: "from-[#7FA8E8] via-[#4C7BDD] to-[#3B5BDB]",
    image: {
      src: "/works/nor-checklist.webp",
      alt: "NOR Checklist admin dashboard with demo vessels",
      kind: "screen",
    },
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
    title: "Fingerspot Attendance Hub — Live fingerprint scans",
    role: "Developer",
    year: "2026",
    tags: ["FastAPI", "PostgreSQL", "Docker", "Webhooks"],
    cover: "from-[#0F3D2E] via-[#1B5E46] to-[#2E8B66]",
    image: {
      src: "/works/attendance.webp",
      alt: "Fingerspot Attendance Hub with demo scans",
      kind: "screen",
    },
    blurb:
      "A self-hosted attendance server for Fingerspot machines. It receives scans live, recovers missed ones, and manages employees across machines from one place.",
    problem:
      "Attendance machines answer commands asynchronously, and scans can be missed while a server is down. Deleting an employee from a machine can also lose their fingerprint template.",
    process: [
      "Received scans by webhook without duplicates, and pulled back any missed while the server was offline.",
      "Synced employees both ways through a queue that marks a change done only after the machine confirms it.",
      "Copied fingerprint templates before any delete or change, and cancelled the delete if the copy failed.",
      "Added a full-screen monitor, import and export, five access levels, activity logs and automatic backups.",
    ],
    outcome:
      "Released under the MIT license with automated tests and setup docs in Indonesian and English. Tested so far with the Revo WDV-204BNC.",
    github: "https://github.com/alzithetrivialmind/fingerspot-attendance-system",
  },
  {
    slug: "palma-shipyard",
    title: "Palma Shipyard — Corporate website",
    role: "Website Developer",
    year: "2022 — Now",
    tags: ["WordPress", "Elementor", "cPanel"],
    cover: "from-[#A1C4FD] via-[#7BB1F0] to-[#C2E9FB]",
    image: {
      src: "/works/palma.webp",
      alt: "Palma Shipyard website home page",
      kind: "full",
      position: "object-left-top",
    },
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
    cover: "from-[#3B2FA8] via-[#7C5CF0] to-[#E879C9]",
    image: {
      src: "/works/securebatch.webp",
      alt: "SecureBatch QR contact form",
      kind: "screen",
    },
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
    image: {
      src: "/works/disciplinr.svg",
      alt: "Illustration of a week of time boxes, kept and missed",
      kind: "full",
    },
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
      "FastAPI",
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
