"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Portrait rendered as a grid of 0s and 1s — brightness-mapped from the
 * photo, with cells randomly flickering. Hover (or tap) to decode into
 * the real photograph.
 */
export default function BinaryPortrait({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [decoded, setDecoded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const COLS = 56;
    const CW = 9; // cell width
    const CH = 11; // cell height
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let last = 0;
    let rows = 0;
    let bright: number[] = [];
    let chars: string[] = [];

    const fgColor = () => {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue("--fg")
        .trim()
        .split(/\s+/)
        .join(",");
      return v || "14,14,12";
    };

    const draw = () => {
      const fg = fgColor();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < COLS; x++) {
          const i = y * COLS + x;
          const darkness = 1 - bright[i];
          if (darkness < 0.16) continue; // skip near-white cells
          ctx.fillStyle = `rgba(${fg}, ${0.1 + darkness * 0.9})`;
          ctx.fillText(chars[i], x * CW, y * CH);
        }
      }
    };

    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      if (t - last < 130) return;
      last = t;
      // mutate ~2% of cells for the digital shimmer
      const n = Math.floor(chars.length * 0.02);
      for (let k = 0; k < n; k++) {
        const i = Math.floor(Math.random() * chars.length);
        chars[i] = Math.random() > 0.5 ? "1" : "0";
      }
      draw();
    };

    const img = new Image();
    img.src = src;
    img.onload = () => {
      // account for non-square character cells so the face isn't stretched
      rows = Math.max(1, Math.round((img.height / img.width) * COLS * (CW / CH)));

      // sample brightness on a tiny offscreen canvas
      const off = document.createElement("canvas");
      off.width = COLS;
      off.height = rows;
      const octx = off.getContext("2d");
      if (!octx) return;
      octx.drawImage(img, 0, 0, COLS, rows);
      const data = octx.getImageData(0, 0, COLS, rows).data;

      bright = [];
      chars = [];
      for (let i = 0; i < COLS * rows; i++) {
        const r = data[i * 4];
        const g = data[i * 4 + 1];
        const b = data[i * 4 + 2];
        bright.push((0.299 * r + 0.587 * g + 0.114 * b) / 255);
        chars.push(Math.random() > 0.5 ? "1" : "0");
      }

      const dpr = window.devicePixelRatio || 1;
      canvas.width = COLS * CW * dpr;
      canvas.height = rows * CH * dpr;
      ctx.scale(dpr, dpr);
      ctx.font = `700 ${CH - 1}px ui-monospace, monospace`;
      ctx.textBaseline = "top";

      draw();
      if (!reduced) raf = requestAnimationFrame(loop);
    };

    return () => cancelAnimationFrame(raf);
  }, [src]);

  return (
    <figure
      className={`border border-fg/25 ${className}`}
      onMouseEnter={() => setDecoded(true)}
      onMouseLeave={() => setDecoded(false)}
      onClick={() => setDecoded((v) => !v)}
      data-cursor="hover"
    >
      <div className="relative overflow-hidden">
        {/* real photo underneath — revealed on decode */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 h-full w-full object-cover grayscale contrast-125 transition-opacity duration-500 ${
            decoded ? "opacity-100" : "opacity-0"
          }`}
        />
        <canvas
          ref={canvasRef}
          className={`relative block w-full transition-opacity duration-500 ${
            decoded ? "opacity-[0.06]" : "opacity-100"
          }`}
          aria-label={alt}
        />
      </div>
      <figcaption className="flex items-center justify-between border-t border-fg/25 px-3 py-2">
        <span className="meta">PORTRAIT.BIN</span>
        <span className="meta">{decoded ? "DECODED ✓" : "HOVER TO DECODE"}</span>
      </figcaption>
    </figure>
  );
}
