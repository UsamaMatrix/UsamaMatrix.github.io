import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Github, Linkedin, Mail, Building2,
  Send, ChevronDown, CheckCircle, AlertCircle, Loader2, X,
} from "lucide-react";

/* ── EmailJS config ─────────────────────────────────────── */
const EJS_SERVICE  = "service_m8rujlo";
const EJS_TEMPLATE = "template_ak7tlim";
const EJS_PUBLIC   = "iNAnmokH7bbLaGij5";

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
  { value: "",                      label: "Select a service…"                    },
  { value: "API & SaaS Security Testing",       label: "🛡️  API & SaaS Security Testing"       },
  { value: "Penetration Testing & Red Teaming", label: "🎯  Penetration Testing & Red Teaming" },
  { value: "Secure Backend Engineering",        label: "⚙️  Secure Backend Engineering"        },
  { value: "Rust Systems Development",          label: "🦀  Rust Systems Development"          },
  { value: "Blockchain & Web3 Security",        label: "🔗  Blockchain & Web3 Security"        },
  { value: "Automation & AI Workflows",         label: "🤖  Automation & AI Workflows"         },
  { value: "Security Tool Development",         label: "🔧  Security Tool Development"         },
  { value: "Cloud & DevSecOps Security",        label: "☁️  Cloud & DevSecOps Security"        },
  { value: "UZYNTRA Collaboration",             label: "🚀  UZYNTRA Collaboration"             },
  { value: "Other / General Inquiry",           label: "💬  Other / General Inquiry"           },
];

type Status = "idle" | "sending" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  service: string;
  message: string;
}

/* ── Toast component ────────────────────────────────────── */
function Toast({ status, onClose }: { status: "success" | "error"; onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(onClose, 5000);
    return () => clearTimeout(t);
  }, [onClose]);

  const isSuccess = status === "success";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl border backdrop-blur-xl max-w-sm w-[calc(100%-2rem)] ${
        isSuccess
          ? "bg-[#0d1f14] border-green-500/40 shadow-green-500/10"
          : "bg-[#1f0d0d] border-red-500/40 shadow-red-500/10"
      }`}
    >
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
        isSuccess ? "bg-green-500/15" : "bg-red-500/15"
      }`}>
        {isSuccess
          ? <CheckCircle className="w-5 h-5 text-green-400" />
          : <AlertCircle className="w-5 h-5 text-red-400" />
        }
      </div>
      <div className="flex-1 min-w-0">
        <p className={`font-semibold text-sm ${isSuccess ? "text-green-300" : "text-red-300"}`}>
          {isSuccess ? "Message sent!" : "Failed to send"}
        </p>
        <p className="text-xs mt-0.5" style={{ color: "var(--tx-3)" }}>
          {isSuccess
            ? "I'll get back to you as soon as possible."
            : "Something went wrong. Try emailing directly."}
        </p>
      </div>
      <button onClick={onClose} className="shrink-0 p-1 rounded-lg hover:bg-white/10 transition-colors" style={{ color: "var(--tx-3)" }}>
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
}

/* ── Main component ─────────────────────────────────────── */
export default function Contact() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form,   setForm]   = useState<FormState>({ name: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error,  setError]  = useState("");
  const [toast,  setToast]  = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.service || !form.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setStatus("sending");
    try {
      const result = await emailjs.send(
        EJS_SERVICE,
        EJS_TEMPLATE,
        {
          name:    form.name,
          email:   form.email,
          service: form.service,
          message: form.message,
        },
        EJS_PUBLIC
      );
      console.log("EmailJS success:", result);
      setStatus("success");
      setToast("success");
      setForm({ name: "", email: "", service: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err: unknown) {
      console.error("EmailJS error:", err);
      const msg = err && typeof err === "object" && "text" in err
        ? String((err as { text: unknown }).text)
        : String(err);
      setError(`Send failed: ${msg}`);
      setStatus("error");
      setToast("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputCls =
    "w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-all duration-200 " +
    "border text-[var(--tx-1)] placeholder:text-[var(--tx-3)] " +
    "bg-[var(--bg-alt)] border-[var(--border-hi)] " +
    "focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/15";

  return (
    <>
      <section id="contact" className="py-16 sm:py-24 page-bg relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* heading */}
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

          {/* social cards */}
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

          {/* form card */}
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
            <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-6 sm:py-8 space-y-5">

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
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none t-3" />
                </div>
              </div>

              {/* message */}
              <div className="space-y-1.5">
                <label className="t-2 text-xs font-medium uppercase tracking-wide">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                  placeholder="Describe your project, security challenge, or collaboration idea…"
                  className={`${inputCls} resize-none`} />
              </div>

              {/* inline validation error */}
              <AnimatePresence>
                {error && (
                  <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm bg-red-400/8 border border-red-400/20 rounded-lg px-4 py-3">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* submit row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-1">
                <p className="t-3 text-xs">
                  Or email directly:{" "}
                  <a href="mailto:contact@UZYNTRA.com" className="text-cyan-400 hover:underline font-mono">
                    contact@UZYNTRA.com
                  </a>
                </p>
                <button type="submit"
                  disabled={status === "sending"}
                  className="flex items-center justify-center gap-2 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed text-black font-semibold rounded-lg text-sm transition-all duration-200 shrink-0">
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

      {/* toast portal */}
      <AnimatePresence>
        {toast && <Toast status={toast} onClose={() => setToast(null)} />}
      </AnimatePresence>
    </>
  );
}
