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
        id: 1,
        title: "ERPNext Implementation",
        description: "End-to-end implementation of ERPNext for shipyard operations, including legacy data migration and custom workflow development.",
        tech: ["ERPNext", "Python", "MariaDB", "Linux"],
        link: "#",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "IoT SmartLock System",
        description: "Developed a smart lock system using ESP32 and Arduino, featured in the Ming Chi University workshop.",
        tech: ["C++", "ESP32", "IoT", "Arduino"],
        link: "#",
        image: "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Network Security Hardening",
        description: "Fortified network perimeters against various attack vectors using pfSense and open-source firewalls.",
        tech: ["pfSense", "Networking", "Security", "Firewall"],
        link: "#",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
    }
];
