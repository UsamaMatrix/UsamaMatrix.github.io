import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Terminal, ChevronDown } from "lucide-react";

const terminalLines = [
  { prompt: "$", command: "cargo build --release",            output: "Building secure API protection layer..."         },
  { prompt: "$", command: "scan --target api.uzyntra.local",  output: "Detecting suspicious request patterns..."        },
  { prompt: "$", command: "firewall --mode adaptive",         output: "Mitigation rules applied successfully..."        },
  { prompt: "$", command: "blockchain-audit --smart-contract",output: "Reviewing transaction flow and access control..." },
  { prompt: "$", command: "recon --scope full --stealth",     output: "Mapping attack surface, 0 traces left..."        },
  { prompt: "$", command: "threat-intel --feed live",         output: "Ingesting IOCs, updating detection rules..."     },
];

const badges = [
  "Rust", "Cybersecurity", "API Security", "Blockchain",
  "Red Teaming", "Secure Backend Engineering", "Threat Intelligence", "Automation",
];

const stats = [
  { label: "Rust Systems",    icon: "⚙️" },
  { label: "API Security",    icon: "🛡️" },
  { label: "Blockchain",      icon: "🔗" },
  { label: "Founder",         icon: "🚀" },
  { label: "Security Tooling",icon: "🔧" },
];

function AnimatedTerminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [phase, setPhase]         = useState<"command" | "output" | "pause">("command");
  const [displayed, setDisplayed] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = terminalLines[lineIndex];
    const text = phase === "command" ? current.command : current.output;

    if (charIndex < text.length) {
      const t = setTimeout(() => {
        setDisplayed((p) => p + text[charIndex]);
        setCharIndex((c) => c + 1);
      }, phase === "command" ? 45 : 20);
      return () => clearTimeout(t);
    } else if (phase === "command") {
      const t = setTimeout(() => { setPhase("output"); setDisplayed(""); setCharIndex(0); }, 300);
      return () => clearTimeout(t);
    } else if (phase === "output") {
      const t = setTimeout(() => setPhase("pause"), 1200);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIndex((i) => (i + 1) % terminalLines.length);
        setPhase("command"); setDisplayed(""); setCharIndex(0);
      }, 800);
      return () => clearTimeout(t);
    }
  }, [charIndex, phase, lineIndex]);

  const current = terminalLines[lineIndex];

  return (
    /* terminal-card class gets light-mode override in globals.css */
    <div className="terminal-card glass-card rounded-xl overflow-hidden border border-white/8 font-mono text-sm">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/3 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <div className="flex items-center gap-1.5 ml-2">
          <Terminal className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-slate-500 text-xs">uzyntra-shell — bash</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 space-y-2 min-h-[160px]">
        {terminalLines.slice(Math.max(0, lineIndex - 2), lineIndex).map((line, i) => (
          <div key={i} className="opacity-30">
            <div className="flex gap-2">
              <span className="text-cyan-400">{line.prompt}</span>
              <span className="text-slate-300">{line.command}</span>
            </div>
            <div className="text-green-400/80 pl-4">{">"} {line.output}</div>
          </div>
        ))}

        <div>
          <div className="flex gap-2">
            <span className="text-cyan-400">{current.prompt}</span>
            <span className="text-slate-200">
              {phase === "command" ? displayed : current.command}
              {phase === "command" && <span className="cursor-blink text-cyan-400">▋</span>}
            </span>
          </div>
          {(phase === "output" || phase === "pause") && (
            <div className="text-green-400 pl-4">
              {">"} {displayed}
              {phase === "output" && <span className="cursor-blink text-green-400">▋</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col grid-bg overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* ── Main content — grows to fill, centres vertically ── */}
      <div className="flex-1 flex items-center w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Identity badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="hero-badge-handle px-3 py-1 rounded-full text-xs font-mono bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                  @UsamMatrix
                </span>
                <span className="hero-badge-founder px-3 py-1 rounded-full text-xs font-mono bg-red-400/10 text-red-400 border border-red-400/20">
                  Founder · UZYNTRA Security
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
                  style={{ color: "var(--text-primary)" }}>
                Rust / Cybersecurity{" "}
                <span className="text-gradient-cyan">Engineer</span>{" "}
                Building{" "}
                <span className="text-gradient-red">Secure Systems</span>
              </h1>

              <p className="text-lg leading-relaxed mb-8 max-w-xl" style={{ color: "var(--text-muted)" }}>
                I design and build security-focused software, API protection systems, offensive
                security tools, blockchain solutions, and developer-first cybersecurity products.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-4 mb-8">
                <a
                  href="https://github.com/UsamMatrix"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors text-sm"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  <Github className="w-4 h-4" />
                  <span className="font-mono">github.com/UsamMatrix</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/UsamMatrix"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="font-mono">/UsamMatrix</span>
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 mb-10">
                <button
                  onClick={() => scrollTo("#projects")}
                  className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-all duration-200 text-sm"
                >
                  View Projects
                </button>
                <button
                  onClick={() => scrollTo("#uzyntra")}
                  className="px-5 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 hover:border-red-500/60 font-semibold rounded-lg transition-all duration-200 text-sm"
                >
                  Explore UZYNTRA
                </button>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="btn-ghost px-5 py-2.5 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 font-semibold rounded-lg transition-all duration-200 text-sm"
                >
                  Contact Me
                </button>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="skill-chip px-2.5 py-1 text-xs font-mono bg-white/4 border border-white/8 rounded-md transition-all duration-200"
                    style={{ color: "var(--text-faint)" }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4"
            >
              <AnimatedTerminal />

              {/* Stat cards */}
              <div className="grid grid-cols-5 gap-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="stat-card glass-card rounded-lg p-3 text-center border border-white/6 hover:border-cyan-400/30 transition-all duration-200 group"
                  >
                    <div className="text-xl mb-1">{stat.icon}</div>
                    <div
                      className="text-[10px] leading-tight font-mono transition-colors group-hover:text-cyan-400"
                      style={{ color: "var(--text-faint)" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator — pinned to bottom of section ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex justify-center pb-8"
      >
        <button
          onClick={() => scrollTo("#about")}
          className="animate-bounce transition-colors"
          style={{ color: "var(--text-faint)" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#06b6d4")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--text-faint)")}
          aria-label="Scroll to About"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </motion.div>
    </section>
  );
}
