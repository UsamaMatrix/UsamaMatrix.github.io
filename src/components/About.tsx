import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Shield, Rocket } from "lucide-react";

const cards = [
  {
    icon: Cpu,
    title: "Systems Builder",
    description:
      "Focused on Rust, backend engineering, API security, and secure architecture. Building systems that are fast, reliable, and designed with security as a first-class concern.",
    accentColor: "red" as const,
  },
  {
    icon: Shield,
    title: "Cybersecurity Engineer",
    description:
      "Penetration testing, API security testing, vulnerability assessment, red teaming, and threat modeling. Finding real attack paths and translating them into actionable fixes.",
    accentColor: "cyan" as const,
  },
  {
    icon: Rocket,
    title: "Founder",
    description:
      "Founder of UZYNTRA Security — a company providing cybersecurity, secure software engineering, blockchain, and automation services to startups and businesses.",
    accentColor: "blue" as const,
  },
];

const accentMap = {
  red: {
    icon: "text-red-400",
    bg: "bg-red-400/10",
    border: "border-red-400/20",
    hover: "hover:border-red-400/40 hover:shadow-red-500/10",
  },
  cyan: {
    icon: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
    hover: "hover:border-cyan-400/40 hover:shadow-cyan-500/10",
  },
  blue: {
    icon: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    hover: "hover:border-blue-400/40 hover:shadow-blue-500/10",
  },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-cyan-400" />
            <span className="text-cyan-400 text-sm font-mono uppercase tracking-widest">About</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Building at the intersection of{" "}
            <span className="text-gradient-cyan">security</span> and{" "}
            <span className="text-gradient-red">engineering</span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mb-16">
            Muhammad Usama is a Rust and cybersecurity-focused engineer working across secure backend
            systems, offensive security tooling, blockchain systems, API security, automation, and
            threat-intelligence-driven products. He is the founder of{" "}
            <span className="text-cyan-400 font-medium">UZYNTRA Security</span>, a cybersecurity and
            secure engineering company focused on helping startups and businesses build secure digital
            systems.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((card, i) => {
              const accent = accentMap[card.accentColor];
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className={`glass-card rounded-xl p-6 border ${accent.border} ${accent.hover} hover:shadow-lg transition-all duration-300`}
                >
                  <div className={`w-10 h-10 rounded-lg ${accent.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${accent.icon}`} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
