import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const principles = [
  { title: "Build secure from the start", desc: "Security decisions made at design time cost a fraction of what they cost post-breach." },
  { title: "Validate every request", desc: "Every input is untrusted until proven otherwise. Validate at every layer." },
  { title: "Enforce authorization everywhere", desc: "Authentication tells you who someone is. Authorization tells you what they can do. Both matter." },
  { title: "Monitor behavior, not just errors", desc: "Anomalies in normal behavior often reveal attacks before errors do." },
  { title: "Automate detection and reporting", desc: "Manual security reviews don't scale. Automation does." },
  { title: "Design for resilience", desc: "Assume breach. Build systems that contain damage and recover fast." },
  { title: "Make security developer-friendly", desc: "Security that slows developers down gets bypassed. Build it into the workflow." },
  { title: "Treat API security as a product requirement", desc: "APIs are the attack surface of modern software. Protect them like a product feature." },
];

export default function SecurityPhilosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="philosophy" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-cyan-400" />
            <span className="text-cyan-400 text-sm font-mono uppercase tracking-widest">Security Philosophy</span>
            <div className="h-px w-8 bg-cyan-400" />
          </div>

          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-cyan-400" />
            </div>
          </div>

          <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto mb-6">
            "Security is not an add-on.{" "}
            <span className="text-gradient-cyan">It is architecture.</span>"
          </blockquote>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Secure systems are not created by adding tools at the end. They are designed from the
            first request, the first data model, the first permission check, and the first deployment
            pipeline.
          </p>
        </motion.div>

        {/* Principles grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * i }}
              className="glass-card rounded-xl p-5 border border-cyan-400/10 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:shadow-[0_0_6px_rgba(6,182,212,0.8)] transition-all" />
                <h3 className="text-white text-sm font-semibold">{p.title}</h3>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
