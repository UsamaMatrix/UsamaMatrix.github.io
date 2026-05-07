import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { skillCategories } from "../data/skills";

const tabAccent = [
  "hover:text-red-400 data-[active=true]:text-red-400 data-[active=true]:border-red-400/50 data-[active=true]:bg-red-400/10",
  "hover:text-cyan-400 data-[active=true]:text-cyan-400 data-[active=true]:border-cyan-400/50 data-[active=true]:bg-cyan-400/10",
  "hover:text-blue-400 data-[active=true]:text-blue-400 data-[active=true]:border-blue-400/50 data-[active=true]:bg-blue-400/10",
  "hover:text-purple-400 data-[active=true]:text-purple-400 data-[active=true]:border-purple-400/50 data-[active=true]:bg-purple-400/10",
  "hover:text-cyan-400 data-[active=true]:text-cyan-400 data-[active=true]:border-cyan-400/50 data-[active=true]:bg-cyan-400/10",
  "hover:text-red-400 data-[active=true]:text-red-400 data-[active=true]:border-red-400/50 data-[active=true]:bg-red-400/10",
];

const chipAccent = [
  "bg-red-400/8 text-red-400/90 border-red-400/20 hover:bg-red-400/15 hover:border-red-400/40",
  "bg-cyan-400/8 text-cyan-400/90 border-cyan-400/20 hover:bg-cyan-400/15 hover:border-cyan-400/40",
  "bg-blue-400/8 text-blue-400/90 border-blue-400/20 hover:bg-blue-400/15 hover:border-blue-400/40",
  "bg-purple-400/8 text-purple-400/90 border-purple-400/20 hover:bg-purple-400/15 hover:border-purple-400/40",
  "bg-cyan-400/8 text-cyan-400/90 border-cyan-400/20 hover:bg-cyan-400/15 hover:border-cyan-400/40",
  "bg-red-400/8 text-red-400/90 border-red-400/20 hover:bg-red-400/15 hover:border-red-400/40",
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const activeCategory = skillCategories[activeTab];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-blue-400" />
            <span className="text-blue-400 text-sm font-mono uppercase tracking-widest">Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Technical{" "}
            <span className="text-gradient-cyan">toolkit</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.id}
              data-active={activeTab === i}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 text-slate-500 border-white/8 ${tabAccent[i]}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill chips */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex flex-wrap gap-3"
          >
            {activeCategory.skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.03 * i }}
                className={`px-4 py-2 rounded-lg text-sm font-mono border transition-all duration-200 cursor-default ${chipAccent[activeTab]}`}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
