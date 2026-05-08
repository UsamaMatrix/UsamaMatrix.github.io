import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Cpu, Shield, Target, Server, Link, Activity, Wrench, Cloud,
} from "lucide-react";
import { expertiseCards } from "../data/expertise";

const iconMap: Record<string, React.ElementType> = {
  Cpu, Shield, Target, Server, Link, Activity, Wrench, Cloud,
};

const accentMap = {
  red: {
    icon: "text-red-400",
    bg: "bg-red-400/10",
    tag: "bg-red-400/10 text-red-400 border-red-400/20",
    border: "border-red-400/20",
    hover: "hover:border-red-400/40 hover:shadow-red-500/10",
  },
  cyan: {
    icon: "text-cyan-400",
    bg: "bg-cyan-400/10",
    tag: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
    border: "border-cyan-400/20",
    hover: "hover:border-cyan-400/40 hover:shadow-cyan-500/10",
  },
  blue: {
    icon: "text-blue-400",
    bg: "bg-blue-400/10",
    tag: "bg-blue-400/10 text-blue-400 border-blue-400/20",
    border: "border-blue-400/20",
    hover: "hover:border-blue-400/40 hover:shadow-blue-500/10",
  },
  purple: {
    icon: "text-purple-400",
    bg: "bg-purple-400/10",
    tag: "bg-purple-400/10 text-purple-400 border-purple-400/20",
    border: "border-purple-400/20",
    hover: "hover:border-purple-400/40 hover:shadow-purple-500/10",
  },
};

export default function Expertise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="expertise" className="py-24 relative alt-bg">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-cyan-400" />
            <span className="text-cyan-400 text-sm font-mono uppercase tracking-widest">Core Expertise</span>
          </div>
          <h2 className="t-high text-3xl sm:text-4xl font-bold">
            What I build and{" "}
            <span className="text-gradient-cyan">how I think</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {expertiseCards.map((card, i) => {
            const accent = accentMap[card.accentColor];
            const Icon = iconMap[card.icon];
            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className={`glass-card rounded-xl p-5 border ${accent.border} ${accent.hover} hover:shadow-lg transition-all duration-300 group`}
              >
                <div className={`w-9 h-9 rounded-lg ${accent.bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-4.5 h-4.5 ${accent.icon}`} />
                </div>
                <h3 className="t-high font-semibold text-sm mb-2 leading-snug">{card.title}</h3>
                <p className="t-mid text-xs leading-relaxed mb-4">{card.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 text-[10px] font-mono rounded border ${accent.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
