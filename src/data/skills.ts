export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "rust",
    label: "Rust & Systems",
    skills: ["Rust", "Tokio", "Axum", "Actix", "CLI Tools", "Async Systems", "Secure APIs", "System Design"],
  },
  {
    id: "security",
    label: "Cybersecurity",
    skills: [
      "API Security",
      "OWASP Top 10",
      "OWASP API Top 10",
      "Recon",
      "Vulnerability Assessment",
      "Penetration Testing",
      "Red Teaming",
      "Threat Modeling",
    ],
  },
  {
    id: "backend",
    label: "Backend & Cloud",
    skills: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "SQLite",
      "Docker",
      "Linux",
      "Cloudflare",
      "Vercel",
      "GitHub Actions",
    ],
  },
  {
    id: "blockchain",
    label: "Blockchain",
    skills: [
      "Blockchain Architecture",
      "Web3 Security",
      "Smart Contract Review",
      "Wallet Flows",
      "Transaction Flows",
      "Decentralized Systems",
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Dashboards", "Security UI", "Responsive Design"],
  },
  {
    id: "automation",
    label: "Automation & AI",
    skills: ["AI Workflows", "n8n", "LLM Workflows", "Security Automation", "Report Generation", "Workflow Systems"],
  },
];
