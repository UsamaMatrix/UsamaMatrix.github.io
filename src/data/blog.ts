export interface BlogPost {
  id: string;
  title: string;
  description: string;
  tags: string[];
  readTime: string;
  href: string;
  accentColor: "cyan" | "red" | "blue" | "purple";
}

export const blogPosts: BlogPost[] = [
  {
    id: "api-security-2026",
    title: "API Security Vulnerabilities in 2026",
    description:
      "A practical breakdown of modern API risks, broken authorization, authentication flaws, excessive data exposure, and weak rate limits.",
    tags: ["API Security", "OWASP", "Auth Flaws"],
    readTime: "8 min read",
    href: "#blog",
    accentColor: "red",
  },
  {
    id: "bola-saas",
    title: "BOLA Explained for SaaS Teams",
    description:
      "A focused guide on Broken Object Level Authorization and why SaaS platforms must validate ownership on every request.",
    tags: ["BOLA", "SaaS Security", "Authorization"],
    readTime: "6 min read",
    href: "#blog",
    accentColor: "cyan",
  },
  {
    id: "owasp-api-top10",
    title: "OWASP API Top 10 Practical Guide",
    description:
      "A developer-friendly guide to understanding and preventing the most common API security risks.",
    tags: ["OWASP API Top 10", "API Security", "Developer Guide"],
    readTime: "10 min read",
    href: "#blog",
    accentColor: "blue",
  },
  {
    id: "rust-security-tooling",
    title: "Rust for Security Tooling",
    description:
      "Why Rust is a strong choice for building fast, reliable, and memory-safe security tools.",
    tags: ["Rust", "Security Tools", "Memory Safety"],
    readTime: "7 min read",
    href: "#blog",
    accentColor: "red",
  },
  {
    id: "api-firewall-design",
    title: "Building Developer-First API Firewalls",
    description:
      "Design principles behind API security gateways that developers can actually use.",
    tags: ["API Firewall", "Security Design", "Developer UX"],
    readTime: "9 min read",
    href: "#blog",
    accentColor: "purple",
  },
];
