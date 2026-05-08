import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Terminal, ChevronDown, ArrowRight } from "lucide-react";

const terminalLines = [
  { prompt: "$", command: "cargo build --release",             output: "Building secure API protection layer..."          },
  { prompt: "$", command: "scan --target api.uzyntra.local",   output: "Detecting suspicious request patterns..."         },
  { prompt: "$", command: "firewall --mode adaptive",          output: "Mitigation rules applied successfully..."         },
  { prompt: "$", command: "blockchain-audit --smart-contract", output: "Reviewing transaction flow and access control..."  },
  { prompt: "$", command: "recon --scope full --stealth",      output: "Mapping attack surface, 0 traces left..."         },
  { prompt: "$", command: "threat-intel --feed live",          output: "Ingesting IOCs, updating detection rules..."      },
];

const badges = [
  "Rust","Cybersecurity","API Security","Blockchain",
  "Red Teaming","Secure Backend","Threat Intelligence","Automation",
];

const stats = [
  { label: "Rust",     icon: "⚙️", color: "hover:border-red-400/40 hover:shadow-red-500/10"    },
  { label: "API Sec",  icon: "🛡️", color: "hover:border-cyan-400/40 hover:shadow-cyan-500/10"  },
  { label: "Chain",    icon: "🔗", color: "hover:border-blue-400/40 hover:shadow-blue-500/10"  },
  { label: "Founder",  icon: "🚀", color: "hover:border-purple-400/40 hover:shadow-purple-500/10" },
  { label: "Tooling",  icon: "🔧", color: "hover:border-cyan-400/40 hover:shadow-cyan-500/10"  },
];

function AnimatedTerminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [phase,     setPhase]     = useState<"command"|"output"|"pause">("command");
  const [displayed, setDisplayed] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const cur  = terminalLines[lineIndex];
    const text = phase === "command" ? cur.command : cur.output;
    if (charIndex < text.length) {
      const t = setTimeout(() => {
        setDisplayed(p => p + text[charIndex]);
        setCharIndex(c => c + 1);
      }, phase === "command" ? 45 : 18);
      return () => clearTimeout(t);
    }
    if (phase === "command") {
      const t = setTimeout(() => { setPhase("output"); setDisplayed(""); setCharIndex(0); }, 300);
      return () => clearTimeout(t);
    }
    if (phase === "output") {
      const t = setTimeout(() => setPhase("pause"), 1400);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIndex(i => (i + 1) % terminalLines.length);
      setPhase("command"); setDisplayed(""); setCharIndex(0);
    }, 700);
    return () => clearTimeout(t);
  }, [charIndex, phase, lineIndex]);

  const cur = terminalLines[lineIndex];

  return (
    <motion.div
      className="terminal rounded-xl overflow-hidden border font-mono text-sm"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* title bar */}
      <div className="terminal-bar flex items-center gap-2 px-4 py-2.5 border-b">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <div className="flex items-center gap-1.5 ml-2">
          <Terminal className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-slate-500 text-xs">uzyntra-shell — bash</span>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400/60 text-[10px]">live</span>
        </div>
      </div>
      {/* body */}
      <div className="p-4 space-y-2 min-h-[160px]">
        {terminalLines.slice(Math.max(0, lineIndex - 2), lineIndex).map((line, i) => (
          <div key={i} className="opacity-20">
            <div className="flex gap-2">
              <span className="text-cyan-400">{line.prompt}</span>
              <span className="text-slate-300">{line.command}</span>
            </div>
            <div className="text-green-400/70 pl-4">&gt; {line.output}</div>
          </div>
        ))}
        <div>
          <div className="flex gap-2">
            <span className="text-cyan-400">{cur.prompt}</span>
            <span className="text-slate-200">
              {phase === "command" ? displayed : cur.command}
              {phase === "command" && <span className="cursor-blink text-cyan-400">▋</span>}
            </span>
          </div>
          {(phase === "output" || phase === "pause") && (
            <div className="text-green-400 pl-4">
              &gt; {displayed}
              {phase === "output" && <span className="cursor-blink text-green-400">▋</span>}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex flex-col grid-bg overflow-hidden">
      {/* ambient glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-cyan-500/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-blue-500/3 rounded-full blur-3xl pointer-events-none" />

      {/* content */}
      <div className="flex-1 flex items-center w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 w-full">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* identity chips */}
              <motion.div
                className="flex flex-wrap gap-2 mb-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 hover:bg-cyan-500/15 transition-colors cursor-default">
                  @UsamMatrix
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-400 border border-red-500/25 hover:bg-red-500/15 transition-colors cursor-default">
                  Founder · UZYNTRA Security
                </span>
              </motion.div>

              <h1 className="t-1 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4">
                Rust / Cybersecurity{" "}
                <span className="grad-cyan">Engineer</span>{" "}
                Building{" "}
                <span className="grad-red">Secure Systems</span>
              </h1>

              <p className="t-2 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
                I design and build security-focused software, API protection systems, offensive
                security tools, blockchain solutions, and developer-first cybersecurity products.
              </p>

              {/* social */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <a href="https://github.com/UsamMatrix" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 t-2 hover:text-cyan-400 transition-colors text-sm group">
                  <Github className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-mono">github.com/UsamMatrix</span>
                </a>
                <a href="https://www.linkedin.com/in/UsamMatrix" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 t-2 hover:text-cyan-400 transition-colors text-sm group">
                  <Linkedin className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-mono">/UsamMatrix</span>
                </a>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-8">
                <motion.button
                  onClick={() => go("#projects")}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35"
                >
                  View Projects <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  onClick={() => go("#uzyntra")}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-5 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 hover:border-red-500/50 font-semibold rounded-lg transition-all text-sm"
                >
                  Explore UZYNTRA
                </motion.button>
                <motion.button
                  onClick={() => go("#contact")}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="btn-ghost px-5 py-2.5 font-semibold rounded-lg text-sm"
                >
                  Contact Me
                </motion.button>
              </div>

              {/* badges */}
              <div className="flex flex-wrap gap-2">
                {badges.map((b, i) => (
                  <motion.span
                    key={b}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.05 }}
                    className="px-2.5 py-1 text-xs font-mono rounded-md border t-3 hover:text-cyan-400 hover:border-cyan-500/30 transition-all cursor-default"
                    style={{ borderColor: "var(--border)", background: "var(--border)" }}
                  >
                    {b}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-3"
            >
              <AnimatedTerminal />

              {/* stat cards */}
              <div className="grid grid-cols-5 gap-2">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.07 }}
                    whileHover={{ y: -3, scale: 1.04 }}
                    className={`card rounded-lg p-2.5 text-center transition-all duration-200 group cursor-default hover:shadow-lg ${s.color}`}
                  >
                    <div className="text-lg mb-1 group-hover:scale-110 transition-transform">{s.icon}</div>
                    <div className="text-[10px] t-3 group-hover:text-cyan-400 transition-colors leading-tight font-mono">
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="flex justify-center pb-6"
      >
        <motion.button
          onClick={() => go("#about")}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="t-3 hover:text-cyan-400 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
}
