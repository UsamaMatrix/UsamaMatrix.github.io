import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Target, Server, Cpu, Link, Wrench, ExternalLink, Mail } from "lucide-react";

const services = [
  { icon: Shield, label: "API & SaaS Security Testing"       },
  { icon: Target, label: "Penetration Testing & Red Teaming" },
  { icon: Server, label: "Secure Backend & Cloud Engineering" },
  { icon: Cpu,    label: "Automation & AI Workflow Systems"   },
  { icon: Link,   label: "Blockchain Security & Development"  },
  { icon: Wrench, label: "Security Product Engineering"       },
];

export default function UzyntraSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="uzyntra" className="py-16 sm:py-24 alt-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* left */}
          <motion.div ref={ref} initial={{ opacity:0, x:-24 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.7 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-red-400" />
              <span className="text-red-400 text-sm font-mono uppercase tracking-widest">UZYNTRA Security</span>
            </div>
            <h2 className="t-1 text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
              Founder of <span className="grad-red">UZYNTRA Security</span>
            </h2>
            <p className="t-2 leading-relaxed mb-4">
              UZYNTRA Security is a cybersecurity and secure software engineering company focused on
              API security, penetration testing, secure backend systems, automation, blockchain
              engineering, and security-first digital products.
            </p>
            <p className="t-2 leading-relaxed mb-7">
              As the founder of UZYNTRA Security, Muhammad Usama is building a company focused on
              practical cybersecurity, secure engineering, and developer-first products that help
              businesses reduce risk and ship safer systems.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://uzyntra.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-red-500 hover:bg-red-400 text-white font-semibold rounded-lg transition-all text-sm">
                <ExternalLink className="w-4 h-4" /> Visit UZYNTRA
              </a>
              <a href="#contact" onClick={e => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior:"smooth" }); }}
                className="btn-ghost flex items-center gap-2 px-5 py-2.5 font-semibold rounded-lg transition-all text-sm">
                <Mail className="w-4 h-4" /> Work With Me
              </a>
            </div>
          </motion.div>

          {/* right */}
          <motion.div initial={{ opacity:0, x:24 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.7, delay:0.2 }}
            className="grid grid-cols-2 gap-3 mt-8 lg:mt-0">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.label}
                  initial={{ opacity:0, y:16 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.4, delay:0.1*i }}
                  className="glass-card rounded-xl p-4 border border-red-400/15 hover:border-red-400/40 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-lg bg-red-400/10 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="t-2 text-xs font-medium leading-snug group-hover:t-1 transition-colors">{s.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
