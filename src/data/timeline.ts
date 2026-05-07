export interface TimelineItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  accentColor: "cyan" | "red" | "blue" | "purple";
}

export const timelineItems: TimelineItem[] = [
  {
    id: "uzyntra-founder",
    role: "Founder",
    company: "UZYNTRA Security",
    period: "2024 — Present",
    description:
      "Building a cybersecurity and secure engineering company focused on API security, penetration testing, backend systems, automation, blockchain, and security-first products.",
    tags: ["API Security", "Pentesting", "Rust", "Startup"],
    accentColor: "cyan",
  },
  {
    id: "rust-api-security",
    role: "Rust API Security Product Development",
    company: "Independent",
    period: "2024 — Present",
    description:
      "Developing Rust-based security tooling, including API firewall concepts, mitigation systems, request inspection, rate limiting, and security event monitoring.",
    tags: ["Rust", "Axum", "Tokio", "API Firewall"],
    accentColor: "red",
  },
  {
    id: "cybersecurity-consulting",
    role: "Cybersecurity Consulting & Tooling",
    company: "Independent",
    period: "2023 — Present",
    description:
      "Working across vulnerability assessment, penetration testing, API security, recon workflows, and practical security reporting.",
    tags: ["Pentesting", "Recon", "API Security", "Reporting"],
    accentColor: "blue",
  },
  {
    id: "blockchain-work",
    role: "Blockchain & Secure Engineering",
    company: "Independent",
    period: "2023 — Present",
    description:
      "Exploring blockchain systems, Web3 security workflows, smart contract review practices, and secure decentralized application patterns.",
    tags: ["Blockchain", "Web3", "Smart Contracts", "Security"],
    accentColor: "purple",
  },
  {
    id: "ai-automation",
    role: "AI & Automation Experimentation",
    company: "Independent",
    period: "2023 — Present",
    description:
      "Building automation workflows and AI-assisted systems for security reporting, productivity, research, and technical execution.",
    tags: ["AI Workflows", "n8n", "LLM", "Automation"],
    accentColor: "cyan",
  },
];
