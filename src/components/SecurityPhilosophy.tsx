import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const principles = [
  { title:"Build secure from the start",                desc:"Security decisions made at design time cost a fraction of what they cost post-breach." },
  { title:"Validate every request",                     desc:"Every input is untrusted until proven otherwise. Validate at every layer." },
  { title:"Enforce authorization everywhere",           desc:"Authentication tells you who someone is. Authorization tells you what they can do. Both matter." },
  { title:"Monitor behavior, not just errors",          desc:"Anomalies in normal behavior often reveal attacks before errors do." },
  { title:"Automate detection and reporting",           desc:"Manual security reviews don't scale. Automation does." },
  { title:"Design for resilience",                      desc:"Assume breach. Build systems that contain damage and recover fast." },
  { title:"Make security developer-friendly",           desc:"Security that slows developers down gets bypassed. Build it into the workflow." },
  { title:"Treat API security as a product requirement",desc:"APIs are the attack surface of modern software. Protect them like a product feature." },
];

export default function SecurityPhilosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="philosophy" className="py-16 sm:py-24 page-bg relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-cyan-400" />
            <span className="text-cyan-400 text-sm font-mono uppercase tracking-widest">Security Philosophy</span>
            <div className="h-px w-8 bg-cyan-400" />
          </div>

          {/* animated shield */}
          <div className="flex justify-center mb-6">
            <motion.div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center"
              animate={{ boxShadow: ["0 0 0px rgba(6,182,212,0)", "0 0 30px rgba(6,182,212,0.3)", "0 0 0px rgba(6,182,212,0)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400" />
            </motion.div>
          </div>

          <blockquote className="t-1 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight max-w-4xl mx-auto mb-5">
            "Security is not an add-on.{" "}
            <span className="grad-cyan">It is architecture.</span>"
          </blockquote>
          <p className="t-2 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Secure systems are not created by adding tools at the end. They are designed from the
            first request, the first data model, the first permission check, and the first deployment pipeline.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * i }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="glass-card rounded-xl p-4 sm:p-5 border border-cyan-400/10 hover:border-cyan-400/35 hover:shadow-lg hover:shadow-cyan-500/8 transition-all duration-300 group cursor-default"
            >
              <div className="flex items-center gap-2 mb-2">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                />
                <h3 className="t-1 text-xs sm:text-sm font-semibold leading-snug">{p.title}</h3>
              </div>
              <p className="t-2 text-xs leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
