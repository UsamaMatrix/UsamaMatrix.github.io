export interface ExpertiseCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  accentColor: "cyan" | "red" | "blue" | "purple";
}

export const expertiseCards: ExpertiseCard[] = [
  {
    id: "rust-systems",
    icon: "Cpu",
    title: "Rust Systems Engineering",
    description:
      "Building fast, reliable, and security-focused systems using Rust, async runtimes, CLI tooling, and backend services.",
    tags: ["Rust", "Tokio", "Axum", "CLI", "Async"],
    accentColor: "red",
  },
  {
    id: "api-security",
    icon: "Shield",
    title: "API & SaaS Security Testing",
    description:
      "Testing APIs and SaaS platforms for broken access control, authentication flaws, data exposure, rate-limit issues, and OWASP API Top 10 risks.",
    tags: ["API Security", "OWASP API Top 10", "BOLA", "Auth Testing"],
    accentColor: "cyan",
  },
  {
    id: "pentesting",
    icon: "Target",
    title: "Penetration Testing & Red Teaming",
    description:
      "Security testing focused on real-world attack paths, vulnerability discovery, exploit validation, and practical risk reporting.",
    tags: ["Pentesting", "Recon", "Red Teaming", "Vulnerability Assessment"],
    accentColor: "red",
  },
  {
    id: "secure-backend",
    icon: "Server",
    title: "Secure Backend Engineering",
    description:
      "Designing backend systems with strong validation, access control, logging, monitoring, and secure deployment practices.",
    tags: ["Backend", "Secure APIs", "Docker", "Linux"],
    accentColor: "blue",
  },
  {
    id: "blockchain",
    icon: "Link",
    title: "Blockchain & Web3 Security",
    description:
      "Working with blockchain systems, transaction flows, wallet logic, smart contract review workflows, and Web3 security concepts.",
    tags: ["Blockchain", "Web3", "Smart Contracts", "Security"],
    accentColor: "purple",
  },
  {
    id: "threat-intel",
    icon: "Activity",
    title: "Threat Intelligence Automation",
    description:
      "Building automation pipelines for security monitoring, detection workflows, reporting, and intelligence-driven decision support.",
    tags: ["Automation", "Threat Intel", "Python", "AI Workflows"],
    accentColor: "cyan",
  },
  {
    id: "security-tools",
    icon: "Wrench",
    title: "Security Tool Development",
    description:
      "Creating custom tools for API protection, scanning, monitoring, testing, and developer-first security workflows.",
    tags: ["Rust", "Python", "Security Tools", "CLI"],
    accentColor: "red",
  },
  {
    id: "devsecops",
    icon: "Cloud",
    title: "Cloud & DevSecOps Security",
    description:
      "Working with secure deployments, DNS, Cloudflare, GitHub Actions, Linux environments, and security-focused infrastructure workflows.",
    tags: ["Cloudflare", "GitHub Actions", "Linux", "DevSecOps"],
    accentColor: "blue",
  },
];
