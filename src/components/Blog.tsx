import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blog";

const accentMap = {
  red: { border: "border-red-400/20", hover: "hover:border-red-400/40", tag: "bg-red-400/10 text-red-400 border-red-400/20", arrow: "text-red-400" },
  cyan: { border: "border-cyan-400/20", hover: "hover:border-cyan-400/40", tag: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20", arrow: "text-cyan-400" },
  blue: { border: "border-blue-400/20", hover: "hover:border-blue-400/40", tag: "bg-blue-400/10 text-blue-400 border-blue-400/20", arrow: "text-blue-400" },
  purple: { border: "border-purple-400/20", hover: "hover:border-purple-400/40", tag: "bg-purple-400/10 text-purple-400 border-purple-400/20", arrow: "text-purple-400" },
};

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blog" className="py-24 relative alt-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-purple-400" />
            <span className="text-purple-400 text-sm font-mono uppercase tracking-widest">Writing</span>
          </div>
          <h2 className="t-high text-3xl sm:text-4xl font-bold">
            Technical{" "}
            <span className="text-gradient-cyan">writing</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogPosts.map((post, i) => {
            const accent = accentMap[post.accentColor];
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * i }}
                className={`glass-card rounded-xl p-5 border ${accent.border} ${accent.hover} hover:shadow-lg transition-all duration-300 group flex flex-col`}
              >
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className={`px-2 py-0.5 text-[10px] font-mono rounded border ${accent.tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="t-high font-semibold text-base leading-snug mb-3">
                  {post.title}
                </h3>

                <p className="t-mid text-sm leading-relaxed flex-1 mb-4">{post.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 t-low text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                  <a
                    href={post.href}
                    className={`flex items-center gap-1 text-xs font-medium ${accent.arrow} opacity-0 group-hover:opacity-100 transition-opacity`}
                  >
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
