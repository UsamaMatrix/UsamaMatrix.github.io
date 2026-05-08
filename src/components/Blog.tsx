import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blog";

const accent: Record<string, { border:string; hover:string; glow:string; tag:string; arrow:string; topLine:string }> = {
  red:    { border:"border-red-400/20",    hover:"hover:border-red-400/45",    glow:"hover:shadow-red-500/10",    tag:"bg-red-400/10 text-red-400 border-red-400/20",        arrow:"text-red-400",    topLine:"from-red-400/0 via-red-400/50 to-red-400/0"    },
  cyan:   { border:"border-cyan-400/20",   hover:"hover:border-cyan-400/45",   glow:"hover:shadow-cyan-500/10",   tag:"bg-cyan-400/10 text-cyan-400 border-cyan-400/20",      arrow:"text-cyan-400",   topLine:"from-cyan-400/0 via-cyan-400/50 to-cyan-400/0"   },
  blue:   { border:"border-blue-400/20",   hover:"hover:border-blue-400/45",   glow:"hover:shadow-blue-500/10",   tag:"bg-blue-400/10 text-blue-400 border-blue-400/20",      arrow:"text-blue-400",   topLine:"from-blue-400/0 via-blue-400/50 to-blue-400/0"   },
  purple: { border:"border-purple-400/20", hover:"hover:border-purple-400/45", glow:"hover:shadow-purple-500/10", tag:"bg-purple-400/10 text-purple-400 border-purple-400/20", arrow:"text-purple-400", topLine:"from-purple-400/0 via-purple-400/50 to-purple-400/0" },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blog" className="py-16 sm:py-24 alt-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-purple-400" />
            <span className="text-purple-400 text-sm font-mono uppercase tracking-widest">Writing</span>
          </div>
          <h2 className="t-1 text-2xl sm:text-3xl lg:text-4xl font-bold">
            Technical <span className="grad-cyan">writing</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {blogPosts.map((post) => {
            const a = accent[post.accentColor];
            return (
              <motion.article
                key={post.id}
                variants={item}
                whileHover={{ y: -5, scale: 1.01 }}
                className={`glass-card rounded-xl border ${a.border} ${a.hover} hover:shadow-xl ${a.glow} transition-all duration-300 group flex flex-col relative overflow-hidden cursor-default`}
              >
                {/* top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${a.topLine} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.map(tag => (
                      <span key={tag} className={`px-2 py-0.5 text-[10px] font-mono rounded border ${a.tag}`}>{tag}</span>
                    ))}
                  </div>

                  <h3 className="t-1 font-semibold text-sm sm:text-base leading-snug mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                    {post.title}
                  </h3>

                  <p className="t-2 text-xs sm:text-sm leading-relaxed flex-1 mb-4">{post.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 t-3 text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                    <motion.a
                      href={post.href}
                      className={`flex items-center gap-1 text-xs font-medium ${a.arrow} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                      whileHover={{ x: 3 }}
                    >
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
