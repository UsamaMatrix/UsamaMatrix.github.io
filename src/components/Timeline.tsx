import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { timelineItems } from "../data/timeline";

const accent: Record<string, { dot:string; ring:string; tag:string }> = {
  cyan:   { dot:"bg-cyan-400",   ring:"shadow-cyan-400/50",   tag:"bg-cyan-400/10 text-cyan-400 border-cyan-400/20"   },
  red:    { dot:"bg-red-400",    ring:"shadow-red-400/50",    tag:"bg-red-400/10 text-red-400 border-red-400/20"     },
  blue:   { dot:"bg-blue-400",   ring:"shadow-blue-400/50",   tag:"bg-blue-400/10 text-blue-400 border-blue-400/20"   },
  purple: { dot:"bg-purple-400", ring:"shadow-purple-400/50", tag:"bg-purple-400/10 text-purple-400 border-purple-400/20" },
};

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="timeline" className="py-16 sm:py-24 alt-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-purple-400" />
            <span className="text-purple-400 text-sm font-mono uppercase tracking-widest">Experience</span>
          </div>
          <h2 className="t-1 text-2xl sm:text-3xl lg:text-4xl font-bold">
            The work <span className="grad-cyan">so far</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px divider" />

          <div className="space-y-6">
            {timelineItems.map((item, i) => {
              const a = accent[item.accentColor];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="relative pl-10 sm:pl-12"
                >
                  {/* pulsing dot */}
                  <div
                    className={`absolute left-[9px] top-[18px] w-3 h-3 rounded-full ${a.dot} dot-pulse`}
                    style={{ boxShadow: `0 0 0 3px var(--bg-alt)` }}
                  />

                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="glass-card rounded-xl p-4 sm:p-5 hover:border-opacity-30 transition-all duration-300 group"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="t-1 font-semibold text-sm sm:text-base">{item.role}</h3>
                        <span className="t-3 text-xs sm:text-sm">{item.company}</span>
                      </div>
                      <span className="t-3 text-xs font-mono glass-card px-2.5 py-1 rounded-md shrink-0">{item.period}</span>
                    </div>
                    <p className="t-2 text-xs sm:text-sm leading-relaxed mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map(tag => (
                        <span key={tag} className={`px-2 py-0.5 text-[10px] font-mono rounded border ${a.tag}`}>{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
