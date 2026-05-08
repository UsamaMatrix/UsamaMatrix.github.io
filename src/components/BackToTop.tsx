import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const h = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:0.8 }}
          onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}
          className="fixed bottom-5 right-5 z-50 w-10 h-10 rounded-xl glass-card border border-cyan-400/25 hover:border-cyan-400/50 text-cyan-400 flex items-center justify-center transition-all duration-200"
          aria-label="Back to top">
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
