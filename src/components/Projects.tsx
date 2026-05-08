import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, BookOpen, MessageSquare } from "lucide-react";
import { projects } from "../data/projects";

const accent: Record<string, { border:string; hover:string; badge:string; tag:string }> = {
  cyan:   { border:"border-cyan-400/20",   hover:"hover:border-cyan-400/50",   badge:"bg-cyan-400/10 text-cyan-400",   tag:"bg-cyan-400/10 text-cyan-400 border-cyan-400/20"   },
  red:    { border:"border-red-400/20",    hover:"hover:border-red-400/50",    badge:"bg-red-400/10 text-red-400",     tag:"bg-red-400/10 text-red-400 border-red-400/20"     },
  blue:   { border:"border-blue-400/20",   hover:"hover:border-blue-400/50",   badge:"bg-blue-400/10 text-blue-400",   tag:"bg-blue-400/10 text-blue-400 border-blue-400/20"   },
  purple: { border:"border-purple-400/20", hover:"hover:border-purple-400/50", badge:"bg-purple-400/10 text-purple-400",tag:"bg-purple-400/10 text-purple-400 border-purple-400/20"},
};

const btnIcon: Record<string, React.ElementType> = {
  GitHub: Github, "Case Study": BookOpen, "Live Demo": ExternalLink, Overview: ExternalLink, Contact: MessageSquare,
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="projects" className="py-16 sm:py-24 page-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6 }} className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-red-400" />
            <span className="text-red-400 text-sm font-mono uppercase tracking-widest">Featured Projects</span>
          </div>
          <h2 className="t-1 text-2xl sm:text-3xl lg:text-4xl font-bold">
            Things I've <span className="grad-red">built</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => {
            const a = accent[project.accentColor];
            return (
              <motion.article key={project.id}
                initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.5, delay:0.1*i }}
                className={`glass-card rounded-xl p-5 sm:p-6 border ${a.border} ${a.hover} hover:shadow-xl transition-all duration-300 flex flex-col`}>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="t-1 font-semibold text-base sm:text-lg leading-snug">{project.title}</h3>
                  <span className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-mono ${a.badge}`}>{project.status}</span>
                </div>
                <p className="t-2 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className={`px-2 py-0.5 text-[10px] font-mono rounded border ${a.tag}`}>{tag}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.buttons.map(btn => {
                    const Icon = btnIcon[btn.label] ?? ExternalLink;
                    return (
                      <a key={btn.label} href={btn.href}
                        target={btn.href.startsWith("http") ? "_blank" : undefined}
                        rel={btn.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                          btn.variant === "primary"   ? "btn-action-primary" :
                          btn.variant === "secondary" ? "btn-action-secondary" :
                          "t-3 hover:t-2"
                        }`}>
                        <Icon className="w-3.5 h-3.5" />{btn.label}
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
