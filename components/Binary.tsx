"use client";

import { useEffect, useMemo, useState } from "react";

/** A full-width strip of 0s and 1s with cells randomly flickering — the
 *  signature decorative element between sections. */
export function BinaryStrip({ rows = 1, className = "" }: { rows?: number; className?: string }) {
  const [seed, setSeed] = useState(0);

  // Regenerate a few random cells periodically for the flicker effect
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setSeed((s) => s + 1), 180);
    return () => clearInterval(id);
  }, []);

  const lines = useMemo(() => {
    const COLS = 140;
    return Array.from({ length: rows }, (_, r) => {
      let line = "";
      for (let c = 0; c < COLS; c++) {
        // deterministic-ish pattern with churn from seed
        const v = Math.sin(c * 12.9898 + r * 78.233 + seed * 0.7) * 43758.5453;
        line += Math.abs(v % 1) > 0.5 ? "1" : "0";
      }
      return line;
    });
  }, [rows, seed]);

  return (
    <div
      aria-hidden
      className={`select-none overflow-hidden whitespace-nowrap font-mono text-[10px] leading-relaxed tracking-[0.35em] text-fg/25 ${className}`}
    >
      {lines.map((l, i) => (
        <div key={i}>{l}</div>
      ))}
    </div>
  );
}

/** Four-point star — the recurring icon motif. */
export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className} aria-hidden>
      <path d="M50 0 C55 30 70 45 100 50 C70 55 55 70 50 100 C45 70 30 55 0 50 C30 45 45 30 50 0 Z" />
    </svg>
  );
}
