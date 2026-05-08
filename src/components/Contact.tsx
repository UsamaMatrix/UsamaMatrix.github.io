import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Github, Linkedin, Mail, Building2,
  Send, ChevronDown, CheckCircle, AlertCircle, Loader2,
} from "lucide-react";

/* ── EmailJS config ─────────────────────────────────────── */
const EJS_SERVICE  = "service_kbi84ho";
const EJS_TEMPLATE = "template_portfolio"; // create this in EmailJS dashboard
const EJS_PUBLIC   = "YOUR_PUBLIC_KEY";    // replace with your EmailJS public key

/* ── Social cards ───────────────────────────────────────── */
const socials = [
  { icon: Github,    label: "GitHub",          value: "github.com/UsamMatrix",      href: "https://github.com/UsamMatrix",          accent: "cyan"   },
  { icon: Linkedin,  label: "LinkedIn",         value: "linkedin.com/in/UsamMatrix", href: "https://www.linkedin.com/in/UsamMatrix", accent: "blue"   },
  { icon: Mail,      label: "Email",            value: "contact@UZYNTRA.com",        href: "mailto:contact@UZYNTRA.com",             accent: "red"    },
  { icon: Building2, label: "UZYNTRA Security", value: "uzyntra.com",                href: "https://uzyntra.com",                    accent: "purple" },
];

const socialAccent: Record<string, { icon: string; bg: string; border: string; hover: string }> = {
  cyan:   { icon: "text-cyan-400",   bg: "bg-cyan-400/10",   border: "border-cyan-400/20",   hover: "hover:border-cyan-400/50"   },
  blue:   { icon: "text-blue-400",   bg: "bg-blue-400/10",   border: "border-blue-400/20",   hover: "hover:border-blue-400/50"   },
  red:    { icon: "text-red-400",    bg: "bg-red-400/10",    border: "border-red-400/20",    hover: "hover:border-red-400/50"    },
  purple: { icon: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20", hover: "hover:border-purple-400/50" },
};

/* ── Service options ────────────────────────────────────── */
const services = [
  { value: "",                          label: "Select a service…"                    },
  { value: "api-security",              label: "🛡️  API & SaaS Security Testing"       },
  { value: "pentest",                   label: "🎯  Penetration Testing & Red Teaming" },
  { value: "secure-backend",            label: "⚙️  Secure Backend Engineering"        },
  { value: "rust-development",          label: "🦀  Rust Systems Development"          },
  { value: "blockchain",                label: "🔗  Blockchain & Web3 Security"        },
  { value: "automation",                label: "🤖  Automation & AI Workflows"         },
  { value: "security-tooling",          label: "🔧  Security Tool Development"         },
  { value: "devsecops",                 label: "☁️  Cloud & DevSecOps Security"        },
  { value: "uzyntra-collaboration",     label: "🚀  UZYNTRA Collaboration"             },
  { value: "other",                     label: "💬  Other / General Inquiry"           },
];

type Status = "idle" | "sending" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  service: string;
  message: string;
}

export default function Contact() {
  const ref    = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form,   setForm]   = useState<FormState>({ name: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error,  setError]  = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setStatus("sending");
    try {
      await emailjs.sendForm(EJS_SERVICE, EJS_TEMPLATE, formRef.current!, EJS_PUBLIC);
      setStatus("success");
      setForm({ name: "", email: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  /* shared input classes */
  const inputCls =
    "form-input w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-all duration-200 " +
    "bg-[var(--bg-alt)] border border-[var(--border-hi)] text-[var(--tx-1)] " +
    "placeholder:text-[var(--tx-3)] " +
    "focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/15";

  return (
    <section id="contact" className="py-16 sm:py-24 page-bg relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── heading ── */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-12">
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

        {/* ── social cards ── */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {socials.map((s, i) => {
            const a = socialAccent[s.accent];
            const Icon = s.icon;
            return (
              <motion.a key={s.label} href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className={`glass-card rounded-xl p-4 sm:p-5 border ${a.border} ${a.hover} hover:shadow-lg transition-all duration-300 text-center group`}>
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${a.bg} flex items-center justify-center mx-auto mb-3`}>
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${a.icon}`} />
                </div>
                <div className="t-1 text-xs sm:text-sm font-semibold mb-0.5">{s.label}</div>
                <div className="t-3 text-[10px] sm:text-xs font-mono truncate">{s.value}</div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* ── contact form ── */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="glass-card rounded-2xl border border-cyan-400/20 hover:border-cyan-400/35 transition-all duration-300 overflow-hidden">

          {/* form header */}
          <div className="px-6 sm:px-8 py-5 border-b" style={{ borderColor: "var(--border)" }}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <h3 className="t-1 font-semibold text-base">Send a Message</h3>
                <p className="t-3 text-xs font-mono">Powered by EmailJS · contact@UZYNTRA.com</p>
              </div>
            </div>
          </div>

          {/* form body */}
          <form ref={formRef} onSubmit={handleSubmit} className="px-6 sm:px-8 py-6 sm:py-8 space-y-5">

            {/* name + email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="t-2 text-xs font-medium uppercase tracking-wide">Your Name</label>
                <input name="name" value={form.name} onChange={handleChange}
                  placeholder="Muhammad Usama" className={inputCls} autoComplete="name" />
              </div>
              <div className="space-y-1.5">
                <label className="t-2 text-xs font-medium uppercase tracking-wide">Email Address</label>
                <input name="email" type="email" value={form.email} onChange={handleChange}
                  placeholder="you@example.com" className={inputCls} autoComplete="email" />
              </div>
            </div>

            {/* service dropdown */}
            <div className="space-y-1.5">
              <label className="t-2 text-xs font-medium uppercase tracking-wide">Service / Inquiry Type</label>
              <div className="relative">
                <select name="service" value={form.service} onChange={handleChange}
                  className={`${inputCls} appearance-none pr-10 cursor-pointer`}>
                  {services.map(s => (
                    <option key={s.value} value={s.value} disabled={s.value === ""}>{s.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 t-3 pointer-events-none" />
              </div>
            </div>

            {/* message */}
            <div className="space-y-1.5">
              <label className="t-2 text-xs font-medium uppercase tracking-wide">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                placeholder="Describe your project, security challenge, or collaboration idea…"
                className={`${inputCls} resize-none`} />
            </div>

            {/* error */}
            {error && (
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* success */}
            {status === "success" && (
              <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-green-400 text-sm bg-green-400/8 border border-green-400/20 rounded-lg px-4 py-3">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Message sent! I'll get back to you soon.</span>
              </motion.div>
            )}

            {/* submit */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-1">
              <p className="t-3 text-xs">
                Or email directly:{" "}
                <a href="mailto:contact@UZYNTRA.com" className="text-cyan-400 hover:underline font-mono">
                  contact@UZYNTRA.com
                </a>
              </p>
              <button type="submit" disabled={status === "sending" || status === "success"}
                className="flex items-center justify-center gap-2 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold rounded-lg text-sm transition-all duration-200 shrink-0">
                {status === "sending" ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                ) : status === "success" ? (
                  <><CheckCircle className="w-4 h-4" /> Sent!</>
                ) : (
                  <><Send className="w-4 h-4" /> Send Message</>
                )}
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
