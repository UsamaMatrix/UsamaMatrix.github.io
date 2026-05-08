import { Github, Linkedin, ExternalLink, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shrink-0">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="t-1 font-semibold text-sm">Muhammad Usama</div>
              <div className="t-3 text-xs font-mono">Rust / Cybersecurity Engineer</div>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-5">
            <a href="https://github.com/UsamMatrix" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 t-3 hover:text-cyan-400 transition-colors text-sm">
              <Github className="w-4 h-4" /><span>/UsamMatrix</span>
            </a>
            <a href="https://www.linkedin.com/in/UsamMatrix" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 t-3 hover:text-cyan-400 transition-colors text-sm">
              <Linkedin className="w-4 h-4" /><span>/UsamMatrix</span>
            </a>
            <a href="https://uzyntra.com" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 t-3 hover:text-red-400 transition-colors text-sm">
              <ExternalLink className="w-4 h-4" /><span>UZYNTRA</span>
            </a>
          </div>
        </div>
        <div className="mt-6 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2" style={{ borderTop:"1px solid var(--border)" }}>
          <p className="t-3 text-xs font-mono">Muhammad Usama © 2026 · Founder of UZYNTRA Security</p>
          <p className="t-3 text-xs">Building secure systems, API security tools, and blockchain solutions.</p>
        </div>
      </div>
    </footer>
  );
}
