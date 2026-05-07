import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, BookOpen, MessageSquare } from "lucide-react";
import { projects } from "../data/projects";

const accentMap = {
  cyan: {
    border: "border-cyan-400/20",
    hover: "hover:border-cyan-400/50 hover:shadow-cyan-500/10",
    badge: "bg-cyan-400/10 text-cyan-400",
    tag: "bg-cyan-400/8 text-cyan-400/80 border-cyan-400/15",
  },
  red: {
    border: "border-red-400/20",
    hover: "hover:border-red-400/50 hover:shadow-red-500/10",
    badge: "bg-red-400/10 text-red-400",
    tag: "bg-red-400/8 text-red-400/80 border-red-400/15",
  },
  blue: {
    border: "border-blue-400/20",
    hover: "hover:border-blue-400/50 hover:shadow-blue-500/10",
    badge: "bg-blue-400/10 text-blue-400",
    tag: "bg-blue-400/8 text-blue-400/80 border-blue-400/15",
  },
  purple: {
    border: "border-purple-400/20",
    hover: "hover:border-purple-400/50 hover:shadow-purple-500/10",
    badge: "bg-purple-400/10 text-purple-400",
    tag: "bg-purple-400/8 text-purple-400/80 border-purple-400/15",
  },
};

const buttonIconMap: Record<string, React.ElementType> = {
  GitHub: Github,
  "Case Study": BookOpen,
  "Live Demo": ExternalLink,
  Overview: ExternalLink,
  Contact: MessageSquare,
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-red-400" />
            <span className="text-red-400 text-sm font-mono uppercase tracking-widest">Featured Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Things I've{" "}
            <span className="text-gradient-red">built</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const accent = accentMap[project.accentColor];
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className={`glass-card rounded-xl p-6 border ${accent.border} ${accent.hover} hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden group`}
              >
                {/* Subtle animated bg lines */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-20" />
                </div>

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-white font-semibold text-lg leading-snug pr-4">{project.title}</h3>
                  <span className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-mono ${accent.badge}`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 text-[10px] font-mono rounded border ${accent.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-2">
                  {project.buttons.map((btn) => {
                    const BtnIcon = buttonIconMap[btn.label] ?? ExternalLink;
                    const isExternal = btn.href.startsWith("http");
                    return (
                      <a
                        key={btn.label}
                        href={btn.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                          btn.variant === "primary"
                            ? "bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-white/30"
                            : btn.variant === "secondary"
                            ? "bg-transparent hover:bg-white/5 text-slate-400 hover:text-white border border-white/8 hover:border-white/20"
                            : "text-slate-500 hover:text-slate-300 transition-colors"
                        }`}
                      >
                        <BtnIcon className="w-3.5 h-3.5" />
                        {btn.label}
                      </a>
                    );
                  })}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
