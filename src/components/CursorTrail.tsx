import { useEffect, useRef } from "react";

const COLORS = ["#06b6d4", "#3b82f6", "#ef4444", "#8b5cf6", "#f97316"];
const MAX_DOTS = 28;
const DOT_LIFE = 600; // ms

interface Dot {
  x: number;
  y: number;
  r: number;
  color: string;
  born: number;
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dots = useRef<Dot[]>([]);
  const raf = useRef<number>(0);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const pos = { x: e.clientX, y: e.clientY };
      // throttle: only add dot if moved ≥8px
      if (lastPos.current) {
        const dx = pos.x - lastPos.current.x;
        const dy = pos.y - lastPos.current.y;
        if (dx * dx + dy * dy < 64) return;
      }
      lastPos.current = pos;
      dots.current.push({
        x: pos.x,
        y: pos.y,
        r: 4 + Math.random() * 3,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        born: performance.now(),
      });
      if (dots.current.length > MAX_DOTS) dots.current.shift();
    };

    window.addEventListener("mousemove", onMove);

    const draw = () => {
      const ctx = canvas.getContext("2d")!;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = performance.now();
      dots.current = dots.current.filter((d) => now - d.born < DOT_LIFE);
      for (const d of dots.current) {
        const t = (now - d.born) / DOT_LIFE; // 0→1
        const alpha = 1 - t;
        const r = d.r * (1 - t * 0.5);
        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fillStyle =
          d.color +
          Math.round(alpha * 255)
            .toString(16)
            .padStart(2, "0");
        ctx.fill();
      }
      raf.current = requestAnimationFrame(draw);
    };
    raf.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
    />
  );
}
