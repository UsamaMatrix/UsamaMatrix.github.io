import { Github, Linkedin, ExternalLink, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080b0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Muhammad Usama</div>
              <div className="text-slate-500 text-xs font-mono">Rust / Cybersecurity Engineer</div>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/UsamMatrix"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-500 hover:text-white transition-colors text-sm"
            >
              <Github className="w-4 h-4" />
              <span>/UsamMatrix</span>
            </a>
            <a
              href="https://www.linkedin.com/in/UsamMatrix"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-500 hover:text-cyan-400 transition-colors text-sm"
            >
              <Linkedin className="w-4 h-4" />
              <span>/UsamMatrix</span>
            </a>
            <a
              href="https://uzyntra.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-500 hover:text-red-400 transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>UZYNTRA Security</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs font-mono">
            Muhammad Usama © 2026 · Founder of UZYNTRA Security
          </p>
          <p className="text-slate-700 text-xs">
            Building secure systems, API security tools, and blockchain solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
