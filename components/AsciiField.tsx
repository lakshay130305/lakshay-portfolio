"use client";

import { useEffect, useRef } from "react";

/**
 * Full-screen interactive ASCII field — the page background is a grid of
 * characters that wave over time and ripple outward from the cursor,
 * in the spirit of finethought.com.au.
 */
const CHARS = [" ", " ", ".", "·", ":", "-", "=", "/", "\\", "+", "*", "#"];

export default function AsciiField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const CELL = 18;
    const FONT = 13;
    let cols = 0;
    let rows = 0;
    let raf = 0;
    let last = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.ceil(canvas.width / CELL) + 1;
      rows = Math.ceil(canvas.height / CELL) + 1;
      ctx.font = `${FONT}px ui-monospace, monospace`;
      ctx.textBaseline = "top";
    };

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    const onLeave = () => {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    };

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      // ~30fps cap — plenty for an ambient effect
      if (now - last < 33) return;
      last = now;

      const t = now / 1000;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouse.current.x;
      const my = mouse.current.y;

      for (let gy = 0; gy < rows; gy++) {
        const y = gy * CELL;
        for (let gx = 0; gx < cols; gx++) {
          const x = gx * CELL;

          // Ambient wave field
          let v =
            Math.sin(gx * 0.22 + t * 0.6) * 0.5 +
            Math.cos(gy * 0.19 - t * 0.45) * 0.5 +
            Math.sin((gx + gy) * 0.11 + t * 0.3) * 0.5;

          // Cursor ripple
          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const ripple = Math.sin(dist / 26 - t * 5) * Math.exp(-dist / 260) * 2.4;
          v += ripple;

          // Normalize roughly to 0..1
          const n = Math.max(0, Math.min(1, (v + 1.9) / 3.8));
          const idx = Math.floor(n * (CHARS.length - 1));
          if (idx <= 1) continue; // blank cells — skip draw

          const nearBoost = Math.exp(-dist / 300);
          const alpha = 0.05 + n * 0.13 + nearBoost * 0.3;
          ctx.fillStyle = `rgba(22, 21, 18, ${alpha})`;
          ctx.fillText(CHARS[idx], x, y);
        }
      }
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let gy = 0; gy < rows; gy++) {
        for (let gx = 0; gx < cols; gx++) {
          const v =
            Math.sin(gx * 0.22) * 0.5 +
            Math.cos(gy * 0.19) * 0.5 +
            Math.sin((gx + gy) * 0.11) * 0.5;
          const n = Math.max(0, Math.min(1, (v + 1.9) / 3.8));
          const idx = Math.floor(n * (CHARS.length - 1));
          if (idx <= 1) continue;
          ctx.fillStyle = `rgba(22, 21, 18, ${0.04 + n * 0.1})`;
          ctx.fillText(CHARS[idx], gx * CELL, gy * CELL);
        }
      }
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduced) {
      drawStatic();
      const onResizeStatic = () => drawStatic();
      window.addEventListener("resize", onResizeStatic);
      return () => window.removeEventListener("resize", onResizeStatic);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
    />
  );
}
