import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { timelineItems } from "../data/timeline";

const accentMap = {
  cyan: { dot: "bg-cyan-400", line: "border-cyan-400/30", tag: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20" },
  red: { dot: "bg-red-400", line: "border-red-400/30", tag: "bg-red-400/10 text-red-400 border-red-400/20" },
  blue: { dot: "bg-blue-400", line: "border-blue-400/30", tag: "bg-blue-400/10 text-blue-400 border-blue-400/20" },
  purple: { dot: "bg-purple-400", line: "border-purple-400/30", tag: "bg-purple-400/10 text-purple-400 border-purple-400/20" },
};

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="timeline" className="py-24 relative bg-[#0a0d12]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-purple-400" />
            <span className="text-purple-400 text-sm font-mono uppercase tracking-widest">Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            The work{" "}
            <span className="text-gradient-cyan">so far</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/6" />

          <div className="space-y-8">
            {timelineItems.map((item, i) => {
              const accent = accentMap[item.accentColor];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="relative pl-12"
                >
                  {/* Dot */}
                  <div className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full ${accent.dot} ring-4 ring-[#0a0d12] -translate-x-1/2`} />

                  <div className={`glass-card rounded-xl p-5 border border-white/6 hover:border-white/12 transition-all duration-300`}>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-white font-semibold">{item.role}</h3>
                        <span className="text-slate-500 text-sm">{item.company}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-500 bg-white/4 px-2.5 py-1 rounded-md border border-white/6">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className={`px-2 py-0.5 text-[10px] font-mono rounded border ${accent.tag}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
