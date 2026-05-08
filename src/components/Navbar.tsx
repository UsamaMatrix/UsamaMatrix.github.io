import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";
import ThemeToggle, { type Theme } from "./ThemeToggle";

const navLinks = [
  { label:"Home",      href:"#home"      },
  { label:"About",     href:"#about"     },
  { label:"Expertise", href:"#expertise" },
  { label:"Projects",  href:"#projects"  },
  { label:"UZYNTRA",   href:"#uzyntra"   },
  { label:"Skills",    href:"#skills"    },
  { label:"Contact",   href:"#contact"   },
];

interface Props { theme: Theme; onThemeToggle: () => void; }

export default function Navbar({ theme, onThemeToggle }: Props) {
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActiveSection(e.target.id)),
      { threshold: 0.25 }
    );
    document.querySelectorAll("section[id]").forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "nav-bg" : ""}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* logo */}
        <motion.button
          onClick={() => go("#home")}
          className="flex items-center gap-2.5 shrink-0 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <div className="text-left hidden sm:block">
            <span className="t-1 font-semibold text-sm leading-none block">Muhammad Usama</span>
            <span className="text-cyan-500 text-[10px] font-mono leading-none">Founder of UZYNTRA</span>
          </div>
        </motion.button>

        {/* desktop links */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navLinks.map(link => {
            const active = activeSection === link.href.slice(1);
            return (
              <li key={link.href} className="relative">
                <button
                  onClick={() => go(link.href)}
                  className={`relative px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    active ? "text-cyan-400" : "t-2 hover:text-cyan-400 hover:bg-cyan-400/8"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-md bg-cyan-400/10 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* right controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 t-2 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-400/8"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden nav-bg border-t"
            style={{ borderColor: "var(--border)" }}
          >
            <ul className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const active = activeSection === link.href.slice(1);
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <button
                      onClick={() => go(link.href)}
                      className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-all ${
                        active ? "text-cyan-400 bg-cyan-400/10" : "t-2 hover:text-cyan-400 hover:bg-cyan-400/8"
                      }`}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
