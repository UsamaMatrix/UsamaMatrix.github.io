import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Building2 } from "lucide-react";

const links = [
  { icon:Github,    label:"GitHub",          value:"github.com/UsamMatrix",       href:"https://github.com/UsamMatrix",          accent:"cyan"   },
  { icon:Linkedin,  label:"LinkedIn",         value:"linkedin.com/in/UsamMatrix",  href:"https://www.linkedin.com/in/UsamMatrix", accent:"blue"   },
  { icon:Mail,      label:"Email",            value:"contact@UZYNTRA.com",         href:"mailto:contact@UZYNTRA.com",             accent:"red"    },
  { icon:Building2, label:"UZYNTRA Security", value:"uzyntra.com",                 href:"https://uzyntra.com",                    accent:"purple" },
];

const accent: Record<string, { icon:string; bg:string; border:string; hover:string }> = {
  cyan:   { icon:"text-cyan-400",   bg:"bg-cyan-400/10",   border:"border-cyan-400/20",   hover:"hover:border-cyan-400/50"   },
  blue:   { icon:"text-blue-400",   bg:"bg-blue-400/10",   border:"border-blue-400/20",   hover:"hover:border-blue-400/50"   },
  red:    { icon:"text-red-400",    bg:"bg-red-400/10",    border:"border-red-400/20",    hover:"hover:border-red-400/50"    },
  purple: { icon:"text-purple-400", bg:"bg-purple-400/10", border:"border-purple-400/20", hover:"hover:border-purple-400/50" },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="contact" className="py-16 sm:py-24 page-bg relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6 }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-cyan-400" />
            <span className="text-cyan-400 text-sm font-mono uppercase tracking-widest">Contact</span>
            <div className="h-px w-8 bg-cyan-400" />
          </div>
          <h2 className="t-1 text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Let's build <span className="grad-cyan">secure systems.</span>
          </h2>
          <p className="t-2 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            Open to cybersecurity projects, Rust engineering, secure backend development, blockchain
            security work, product collaborations, and UZYNTRA-related opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {links.map((link, i) => {
            const a = accent[link.accent];
            const Icon = link.icon;
            return (
              <motion.a key={link.label} href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                initial={{ opacity:0, y:16 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.4, delay:0.1*i }}
                className={`glass-card rounded-xl p-4 sm:p-5 border ${a.border} ${a.hover} hover:shadow-lg transition-all duration-300 text-center`}>
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${a.bg} flex items-center justify-center mx-auto mb-3`}>
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${a.icon}`} />
                </div>
                <div className="t-1 text-xs sm:text-sm font-medium mb-1">{link.label}</div>
                <div className="t-3 text-[10px] sm:text-xs font-mono truncate">{link.value}</div>
              </motion.a>
            );
          })}
        </div>

        <motion.div initial={{ opacity:0, y:16 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.5, delay:0.4 }}
          className="flex flex-wrap justify-center gap-3">
          <a href="https://github.com/UsamMatrix" target="_blank" rel="noopener noreferrer"
            className="btn-action-primary flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg font-medium text-sm transition-all">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/UsamMatrix" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/25 hover:border-blue-500/50 rounded-lg font-medium text-sm transition-all">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a href="mailto:contact@UZYNTRA.com"
            className="flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg text-sm transition-all">
            <Mail className="w-4 h-4" /> Email Me
          </a>
          <a href="https://uzyntra.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/25 hover:border-red-500/50 rounded-lg font-medium text-sm transition-all">
            <ExternalLink className="w-4 h-4" /> Visit UZYNTRA
          </a>
        </motion.div>
      </div>
    </section>
  );
}
