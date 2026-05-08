import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { skillCategories } from "../data/skills";

const tabColors = [
  { active:"text-red-400 border-red-400/50 bg-red-400/10",    hover:"hover:text-red-400"    },
  { active:"text-cyan-400 border-cyan-400/50 bg-cyan-400/10",  hover:"hover:text-cyan-400"   },
  { active:"text-blue-400 border-blue-400/50 bg-blue-400/10",  hover:"hover:text-blue-400"   },
  { active:"text-purple-400 border-purple-400/50 bg-purple-400/10", hover:"hover:text-purple-400" },
  { active:"text-cyan-400 border-cyan-400/50 bg-cyan-400/10",  hover:"hover:text-cyan-400"   },
  { active:"text-red-400 border-red-400/50 bg-red-400/10",    hover:"hover:text-red-400"    },
];

const chipColors = [
  "text-red-400 border-red-400/25 bg-red-400/8 hover:bg-red-400/15 hover:border-red-400/45",
  "text-cyan-400 border-cyan-400/25 bg-cyan-400/8 hover:bg-cyan-400/15 hover:border-cyan-400/45",
  "text-blue-400 border-blue-400/25 bg-blue-400/8 hover:bg-blue-400/15 hover:border-blue-400/45",
  "text-purple-400 border-purple-400/25 bg-purple-400/8 hover:bg-purple-400/15 hover:border-purple-400/45",
  "text-cyan-400 border-cyan-400/25 bg-cyan-400/8 hover:bg-cyan-400/15 hover:border-cyan-400/45",
  "text-red-400 border-red-400/25 bg-red-400/8 hover:bg-red-400/15 hover:border-red-400/45",
];

export default function Skills() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-16 sm:py-24 page-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6 }} className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-blue-400" />
            <span className="text-blue-400 text-sm font-mono uppercase tracking-widest">Skills</span>
          </div>
          <h2 className="t-1 text-2xl sm:text-3xl lg:text-4xl font-bold">
            Technical <span className="grad-cyan">toolkit</span>
          </h2>
        </motion.div>

        {/* tabs — scrollable on mobile */}
        <div className="flex flex-wrap gap-2 mb-7">
          {skillCategories.map((cat, i) => (
            <button key={cat.id} onClick={() => setActive(i)}
              className={`skill-tab px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${tabColors[i].hover} ${active === i ? tabColors[i].active : ""}`}>
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-8 }} transition={{ duration:0.2 }}
            className="flex flex-wrap gap-2 sm:gap-3">
            {skillCategories[active].skills.map((skill, i) => (
              <motion.span key={skill}
                initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.15, delay:0.025*i }}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-mono border transition-all duration-200 cursor-default ${chipColors[active]}`}>
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
