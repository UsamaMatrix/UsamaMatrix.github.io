import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Terminal, ChevronDown } from "lucide-react";

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
  { label: "Rust",     icon: "⚙️" },
  { label: "API Sec",  icon: "🛡️" },
  { label: "Chain",    icon: "🔗" },
  { label: "Founder",  icon: "🚀" },
  { label: "Tooling",  icon: "🔧" },
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
      }, phase === "command" ? 45 : 20);
      return () => clearTimeout(t);
    }
    if (phase === "command") {
      const t = setTimeout(() => { setPhase("output"); setDisplayed(""); setCharIndex(0); }, 300);
      return () => clearTimeout(t);
    }
    if (phase === "output") {
      const t = setTimeout(() => setPhase("pause"), 1200);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIndex(i => (i + 1) % terminalLines.length);
      setPhase("command"); setDisplayed(""); setCharIndex(0);
    }, 800);
    return () => clearTimeout(t);
  }, [charIndex, phase, lineIndex]);

  const cur = terminalLines[lineIndex];

  return (
    <div className="terminal rounded-xl overflow-hidden border font-mono text-sm">
      {/* title bar — always dark */}
      <div className="terminal-bar flex items-center gap-2 px-4 py-2.5 border-b">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <div className="flex items-center gap-1.5 ml-2">
          <Terminal className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-slate-500 text-xs">uzyntra-shell</span>
        </div>
      </div>
      {/* body */}
      <div className="p-4 space-y-2 min-h-[150px]">
        {terminalLines.slice(Math.max(0, lineIndex - 2), lineIndex).map((line, i) => (
          <div key={i} className="opacity-25">
            <div className="flex gap-2">
              <span className="text-cyan-400">{line.prompt}</span>
              <span className="text-slate-300">{line.command}</span>
            </div>
            <div className="text-green-400/80 pl-4">&gt; {line.output}</div>
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
    </div>
  );
}

export default function Hero() {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex flex-col grid-bg overflow-hidden">
      {/* glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* content */}
      <div className="flex-1 flex items-center w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 w-full">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

            {/* ── LEFT ── */}
            <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}>

              {/* identity chips */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/25">
                  @UsamMatrix
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-400 border border-red-500/25">
                  Founder · UZYNTRA Security
                </span>
              </div>

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
                   className="flex items-center gap-2 t-2 hover:text-cyan-400 transition-colors text-sm">
                  <Github className="w-4 h-4 shrink-0" />
                  <span className="font-mono">github.com/UsamMatrix</span>
                </a>
                <a href="https://www.linkedin.com/in/UsamMatrix" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 t-2 hover:text-cyan-400 transition-colors text-sm">
                  <Linkedin className="w-4 h-4 shrink-0" />
                  <span className="font-mono">/UsamMatrix</span>
                </a>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-8">
                <button onClick={() => go("#projects")}
                  className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-all text-sm">
                  View Projects
                </button>
                <button onClick={() => go("#uzyntra")}
                  className="px-5 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 hover:border-red-500/50 font-semibold rounded-lg transition-all text-sm">
                  Explore UZYNTRA
                </button>
                <button onClick={() => go("#contact")}
                  className="btn-ghost px-5 py-2.5 font-semibold rounded-lg transition-all text-sm">
                  Contact Me
                </button>
              </div>

              {/* badges */}
              <div className="flex flex-wrap gap-2">
                {badges.map(b => (
                  <span key={b}
                    className="px-2.5 py-1 text-xs font-mono rounded-md border t-3 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                    style={{ borderColor:"var(--border)", background:"var(--border)" }}>
                    {b}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* ── RIGHT ── */}
            <motion.div initial={{ opacity:0, x:30 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.7, delay:0.2 }}
              className="space-y-3">
              <AnimatedTerminal />

              {/* stat cards */}
              <div className="grid grid-cols-5 gap-2">
                {stats.map(s => (
                  <div key={s.label}
                    className="card rounded-lg p-2.5 text-center hover:border-cyan-500/30 group cursor-default">
                    <div className="text-lg mb-1">{s.icon}</div>
                    <div className="text-[10px] t-3 group-hover:text-cyan-400 transition-colors leading-tight font-mono">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.2 }}
        className="flex justify-center pb-6">
        <button onClick={() => go("#about")}
          className="t-3 hover:text-cyan-400 transition-colors animate-bounce" aria-label="Scroll down">
          <ChevronDown className="w-6 h-6" />
        </button>
      </motion.div>
    </section>
  );
}
