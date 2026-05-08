import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, ExternalLink, Shield } from "lucide-react";

const links = [
  { icon: Github,       label: "/UsamMatrix",      href: "https://github.com/UsamMatrix",          color: "hover:text-cyan-400" },
  { icon: Linkedin,     label: "/UsamMatrix",      href: "https://www.linkedin.com/in/UsamMatrix", color: "hover:text-cyan-400" },
  { icon: ExternalLink, label: "UZYNTRA Security", href: "https://uzyntra.com",                    color: "hover:text-red-400"  },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer className="footer-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between"
        >
          {/* brand */}
          <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.02 }}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="t-1 font-semibold text-sm">Muhammad Usama</div>
              <div className="t-3 text-xs font-mono">Rust / Cybersecurity Engineer</div>
            </div>
          </motion.div>

          {/* links */}
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-x-5 gap-y-3">
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  whileHover={{ y: -2 }}
                  className={`flex items-center gap-1.5 t-3 ${link.color} transition-colors text-sm whitespace-nowrap group`}
                >
                  <Icon className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{link.label}</span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35 }}
          className="mt-6 pt-5 flex flex-col items-center gap-1.5 sm:flex-row sm:justify-between sm:gap-3"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="t-3 text-xs font-mono text-center sm:text-left">
            Muhammad Usama © 2026 · Founder of UZYNTRA Security
          </p>
          <p className="t-3 text-xs text-center sm:text-right">
            Building secure systems, API security tools, and blockchain solutions.
          </p>
        </motion.div>

      </div>
    </footer>
  );
}
