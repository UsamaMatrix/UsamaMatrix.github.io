import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";
import ThemeToggle, { type Theme } from "./ThemeToggle";

const navLinks = [
  { label: "Home",      href: "#home"      },
  { label: "About",     href: "#about"     },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects",  href: "#projects"  },
  { label: "UZYNTRA",   href: "#uzyntra"   },
  { label: "Skills",    href: "#skills"    },
  { label: "Contact",   href: "#contact"   },
];

interface Props { theme: Theme; onThemeToggle: () => void; }

export default function Navbar({ theme, onThemeToggle }: Props) {
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeSection,  setActiveSection]  = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { threshold: 0.3 }
    );
    document.querySelectorAll("section[id]").forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "nav-scrolled" : ""}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => go("#home")} className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shrink-0">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <div className="text-left">
            <span className="t-high font-semibold text-sm leading-none block">Muhammad Usama</span>
            <span className="text-cyan-500 text-[10px] font-mono leading-none">Founder of UZYNTRA</span>
          </div>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const active = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <button
                  onClick={() => go(link.href)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    active
                      ? "text-cyan-500 bg-cyan-500/10"
                      : "t-mid hover:text-cyan-500 hover:bg-cyan-500/8"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 t-mid hover:text-cyan-500 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden nav-scrolled"
          >
            <ul className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = activeSection === link.href.slice(1);
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => go(link.href)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all ${
                        active
                          ? "text-cyan-500 bg-cyan-500/10"
                          : "t-mid hover:text-cyan-500 hover:bg-cyan-500/8"
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
