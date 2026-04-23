export const PROFILE = {
    name: "Alzi",
    title: "IT Project Analyst | ERP Functional & Technical Consultant",
    location: "Batam, Riau Islands, Indonesia",
    about: "IT Professional with nearly 4 years of experience in ERP implementation, Cybersecurity, and Network Administration. Proven track record in securing network infrastructures, managing server performance, and leading technical projects. Experienced in ERPNext, pfSense, Linux servers, and network security.",
    image: "/profile.jpg",
    social: {
        linkedin: "https://www.linkedin.com/in/itsalzi/",
        github: "https://github.com/alzithetrivialmind",
        email: "alzi@example.com"
    }
};

export const SKILLS = [
    "Backup & Restore", "IT Strategy", "Archiving", "Project Implementation",
    "Cisco Networking", "Microsoft SQL Server", "Mikrotik", "Wireless Networking",
    "VMware vSphere", "WAN", "Technical Support", "IT Hardware Support",
    "Network Security", "Adobe Photoshop", "Data Analysis",
    "Raspberry Pi", "ESP32", "Arduino", "ERPNext", "Linux Administration",
    "Cybersecurity", "Penetration Testing"
];

export interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    companyUrl?: string;
    period: string;
    description: string;
}

export const EXPERIENCE: ExperienceItem[] = [
    {
        id: 0,
        role: "Founder & Principal Consultant",
        company: "DigiSentral Solusi",
        companyUrl: "https://digisentralsolusi.id/",
        period: "Present",
        description: "Leading a digital transformation consultancy focused on delivering tailored IT solutions.\nSpecializing in ERPNext implementation, custom software development, and strategic IT consulting for businesses ranging from startups to established enterprises.\nDriving technical innovation and ensuring successful digital adoption for clients."
    },
    {
        id: 1,
        role: "Information Technology Developer",
        company: "PT Palma Progress Shipyard",
        companyUrl: "https://palmashipyard.com/",
        period: "May 2022 - Present",
        description: "ERP Functional & Technical Consultant: Managed end-to-end ERPNext implementation, including system customization, development of company SOPs/workflow guides, and execution of legacy data migration.\n\nWebsite Developer: Designed and developed the official company website (palmashipyard.com), establishing the company's digital presence.\n\nCyber Security Analyst: Fortified network perimeters against DDoS, NBT, CIFS, NETBUS, and Blaster Worm attacks using pfSense, OPNSense, and IPFire. Secured Microsoft OneDrive environments and maintained updated security scripts.\n\nServer Administrator: Maintained performance and stability for Ubiquiti, Synology NAS, and Linux NAS servers. Engineered automated Cron jobs for daily, weekly, monthly, and yearly backups and system auto-updates.\n\nMonitoring & Observability: Optimized real-time monitoring and log analysis using PRTG, Prometheus, and Grafana to ensure high system availability.\n\nProject Analyst: Spearheaded the planning and implementation of enterprise Biometric Fingerprint systems, Wireless workshop infrastructure, CCTV networks, and Fiber Optic facilities.\n\nNetwork Analyst: Managed bandwidth allocation, network stability, and IP address security while leading the Setup and installation of new network expansions."
    },
    {
        id: 2,
        role: "Information Technology Intern",
        company: "Universitas Internasional Batam",
        companyUrl: "https://www.uib.ac.id/",
        period: "Jul 2020 - May 2022",
        description: "Cybersecurity Analyst (Jan 2022 - May 2022):\n- Conducting Penetration Testing on UIB websites.\n- Analyzing and monitoring attacks on the UIB network.\n- Conducting research on network structure vulnerabilities.\n- Configuring firewall devices (Sangfor, Fortinet, pfSense, OPNSense).\n\nIT Server Administrator (May 2021 - May 2022):\n- Maintenance of On-Premise Physical Server devices.\n- Backup, Replication, and Recovery of Servers.\n- Setup of VMWare Server.\n- Monitoring of Server performance using PRTG and Prometheus.\n\nIT Network Intern (Jul 2020 - May 2021):\n- Troubleshooting and repair of network issues (Wireless/LAN).\n- Setup and relocation of network facilities.\n- Configuration of routers (Mikrotik, Cisco, pfSense) and WLAN Controllers.\n- Mapping of network structure and management of VLAN."
    }
];

export const EDUCATION = [
    {
        id: 1,
        school: "Universitas Internasional Batam",
        degree: "Master of Management, Business, Management, Marketing",
        period: "May 2023 - Mar 2025",
        grade: "3.92"
    },
    {
        id: 2,
        school: "Universitas Internasional Batam",
        degree: "Bachelor's degree, Computer Science",
        period: "Aug 2019 - Jan 2023",
        grade: "GPA: 3.90/4.00"
    },
    {
        id: 3,
        school: "Ming Chi University of Technology",
        degree: "Workshop: IoT SmartLock",
        period: "Jul 2020 - Oct 2020",
        grade: ""
    }
];

export const PROJECTS = [
    {
        id: 0,
        title: "SnapCuller",
        description: "The fastest photo culling and RAW sorting tool for professional photographers, featuring an ultra-lightweight engine for instant sorting with zero import lag.",
        tech: ["React", "TypeScript", "Tailwind", "Electron", "AI"],
        link: "https://www.snapculler.com",
        github: ""
    },
    {
        id: 2,
        title: "Palma Shipyard",
        description: "Designed and developed the official company profile website, establishing a strong digital presence for shipyard operations and facilities.",
        tech: ["WordPress", "Elementor", "cPanel", "CSS"],
        link: "https://www.palmashipyard.com",
        github: "" // Closed source
    },
    {
        id: 3,
        title: "Digisentral Solusi",
        description: "A digital consulting firm dedicated to simplifying complex business processes and scaling companies through tailored technological solutions and digitalization services.",
        tech: ["WordPress", "Elementor", "cPanel"],
        link: "https://www.digisentralsolusi.id",
        github: "" // Closed source
    },
    {
        id: 4,
        title: "ERPNext Implementation",
        description: "End-to-end implementation capacity from zero to production, providing tailored ERPNext solutions for both cloud and on-premise environments.",
        tech: ["ERPNext", "Python", "MariaDB", "Linux"],
        link: "#",
        github: "#"
    },
    {
        id: 1,
        title: "SecureBatch QR",
        description: "A privacy-focused, client-side QR code generator that enables instant batch creation of branded QR codes from CSV files without any server uploads.",
        tech: ["React", "TypeScript", "Vite", "QR Code", "vCard"],
        link: "https://qr-code-contact-maker.vercel.app/",
        github: "https://github.com/alzithetrivialmind/securebatch-qr"
    },
    {
        id: 6,
        title: "Network Security Hardening",
        description: "Fortified network perimeters against various attack vectors using pfSense and open-source firewalls.",
        tech: ["pfSense", "Networking", "Security", "Firewall"],
        link: "#",
        github: "#"
    },
    {
        id: 7,
        title: "Disciplinr",
        description: "Laravel-based productivity application featuring weekly time-boxing checklists, automated scoring, and trend analytics to help users optimize daily focus.",
        tech: ["Laravel", "PHP", "Bootstrap", "SQLite"],
        link: "https://github.com/alzithetrivialmind/Disciplinr-Time-Boxing-and-Blocking-Management-App",
        github: "https://github.com/alzithetrivialmind/Disciplinr-Time-Boxing-and-Blocking-Management-App"
    },
    {
        id: 8,
        title: "Personal Money Manager",
        description: "React Native mobile app for straightforward finance tracking, supporting multi-currency income/expenses, savings goals, and offline functionality.",
        tech: ["React Native", "Expo", "TypeScript", "SQLite"],
        link: "https://github.com/alzithetrivialmind/personalmoneymanager",
        github: "https://github.com/alzithetrivialmind/personalmoneymanager"
    }
];
