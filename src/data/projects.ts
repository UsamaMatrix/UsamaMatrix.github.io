export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: string;
  statusColor: string;
  buttons: { label: string; href: string; variant: "primary" | "secondary" | "ghost" }[];
  accentColor: "cyan" | "red" | "blue" | "purple";
}

export const projects: Project[] = [
  {
    id: "uzyntra-api-firewall",
    title: "UZYNTRA API Firewall",
    description:
      "A developer-first API security gateway built in Rust for detecting suspicious requests, applying mitigation rules, rate limiting, blocking malicious payloads, and protecting APIs from common attack patterns.",
    tags: ["Rust", "Axum", "Tokio", "API Security", "Threat Detection", "Rate Limiting"],
    status: "Active",
    statusColor: "cyan",
    buttons: [
      { label: "GitHub", href: "https://github.com/UsamMatrix/uzyntra-api-firewall", variant: "primary" },
      { label: "Case Study", href: "#projects", variant: "secondary" },
      { label: "Live Demo", href: "#projects", variant: "ghost" },
    ],
    accentColor: "cyan",
  },
  {
    id: "uzyntra-ui",
    title: "UZYNTRA UI",
    description:
      "A dashboard interface for monitoring, managing, and visualizing API security events, mitigations, firewall activity, and developer-first security operations.",
    tags: ["React", "TypeScript", "Security Dashboard", "Tailwind CSS"],
    status: "Active",
    statusColor: "blue",
    buttons: [
      { label: "GitHub", href: "https://github.com/UsamMatrix/uzyntra-ui", variant: "primary" },
      { label: "Case Study", href: "#projects", variant: "secondary" },
      { label: "Live Demo", href: "#projects", variant: "ghost" },
    ],
    accentColor: "blue",
  },
  {
    id: "arrest-os",
    title: "ARREST OS",
    description:
      "An AI-powered operating system concept focused on automation, cyber workflows, productivity, intelligent system interaction, and security-focused execution.",
    tags: ["AI Systems", "Automation", "OS Concept", "Security Workflows"],
    status: "Concept",
    statusColor: "purple",
    buttons: [
      { label: "Overview", href: "#projects", variant: "secondary" },
      { label: "Case Study", href: "#projects", variant: "ghost" },
    ],
    accentColor: "purple",
  },
  {
    id: "blockchain-security",
    title: "Blockchain Security & Web3 Engineering",
    description:
      "Security-focused blockchain development and smart contract review workflows for safer decentralized applications, transaction logic, and Web3 systems.",
    tags: ["Blockchain", "Web3", "Smart Contracts", "Security Review"],
    status: "Ongoing",
    statusColor: "red",
    buttons: [
      { label: "Case Study", href: "#projects", variant: "secondary" },
      { label: "Contact", href: "#contact", variant: "primary" },
    ],
    accentColor: "red",
  },
];
