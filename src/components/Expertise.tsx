import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Shield, Target, Server, Link, Activity, Wrench, Cloud } from "lucide-react";
import { expertiseCards } from "../data/expertise";

const iconMap: Record<string, React.ElementType> = { Cpu, Shield, Target, Server, Link, Activity, Wrench, Cloud };

const accent: Record<string, { icon:string; bg:string; tag:string; border:string; hover:string; glow:string }> = {
  red:    { icon:"text-red-400",    bg:"bg-red-400/10",    tag:"bg-red-400/10 text-red-400 border-red-400/20",        border:"border-red-400/20",    hover:"hover:border-red-400/40",    glow:"hover:shadow-red-500/15"    },
  cyan:   { icon:"text-cyan-400",   bg:"bg-cyan-400/10",   tag:"bg-cyan-400/10 text-cyan-400 border-cyan-400/20",      border:"border-cyan-400/20",   hover:"hover:border-cyan-400/40",   glow:"hover:shadow-cyan-500/15"   },
  blue:   { icon:"text-blue-400",   bg:"bg-blue-400/10",   tag:"bg-blue-400/10 text-blue-400 border-blue-400/20",      border:"border-blue-400/20",   hover:"hover:border-blue-400/40",   glow:"hover:shadow-blue-500/15"   },
  purple: { icon:"text-purple-400", bg:"bg-purple-400/10", tag:"bg-purple-400/10 text-purple-400 border-purple-400/20", border:"border-purple-400/20", hover:"hover:border-purple-400/40", glow:"hover:shadow-purple-500/15" },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Expertise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="expertise" className="py-16 sm:py-24 alt-bg relative">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-cyan-400" />
            <span className="text-cyan-400 text-sm font-mono uppercase tracking-widest">Core Expertise</span>
          </div>
          <h2 className="t-1 text-2xl sm:text-3xl lg:text-4xl font-bold">
            What I build and <span className="grad-cyan">how I think</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {expertiseCards.map((card) => {
            const a = accent[card.accentColor];
            const Icon = iconMap[card.icon];
            return (
              <motion.article
                key={card.id}
                variants={item}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`glass-card rounded-xl p-5 border ${a.border} ${a.hover} hover:shadow-xl ${a.glow} transition-all duration-300 group cursor-default`}
              >
                <motion.div
                  className={`w-9 h-9 rounded-lg ${a.bg} flex items-center justify-center mb-4`}
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon className={`w-5 h-5 ${a.icon}`} />
                </motion.div>
                <h3 className="t-1 font-semibold text-sm mb-2 leading-snug">{card.title}</h3>
                <p className="t-2 text-xs leading-relaxed mb-4">{card.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {card.tags.map(tag => (
                    <span key={tag} className={`px-2 py-0.5 text-[10px] font-mono rounded border ${a.tag}`}>{tag}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
