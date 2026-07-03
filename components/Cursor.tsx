"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Star } from "./Binary";

type TrailBit = {
  id: number;
  x: number;
  y: number;
  ch: "0" | "1";
};

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [trail, setTrail] = useState<TrailBit[]>([]);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 450, damping: 35, mass: 0.7 });
  const springY = useSpring(y, { stiffness: 450, damping: 35, mass: 0.7 });

  const lastSpawn = useRef({ x: -9999, y: -9999 });
  const idCounter = useRef(0);

  useEffect(() => {
    // Fine pointers only — no custom cursor on touch devices
    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine.matches) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor='hover']"));

      // spawn a binary bit every ~28px of travel
      if (!reduced) {
        const dx = e.clientX - lastSpawn.current.x;
        const dy = e.clientY - lastSpawn.current.y;
        if (dx * dx + dy * dy > 28 * 28) {
          lastSpawn.current = { x: e.clientX, y: e.clientY };
          const bit: TrailBit = {
            id: idCounter.current++,
            x: e.clientX + (Math.random() - 0.5) * 14,
            y: e.clientY + (Math.random() - 0.5) * 14,
            ch: Math.random() > 0.5 ? "1" : "0",
          };
          setTrail((t) => [...t.slice(-24), bit]);
          // retire after the animation finishes
          setTimeout(() => {
            setTrail((t) => t.filter((b) => b.id !== bit.id));
          }, 900);
        }
      }
    };

    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* binary trail */}
      {trail.map((b) => (
        <span
          key={b.id}
          className="cursor-bit"
          style={{ left: b.x, top: b.y }}
          aria-hidden
        >
          {b.ch}
        </span>
      ))}

      {/* precise dot — tracks raw position */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-white mix-blend-difference"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />

      {/* spinning star — lags behind on a spring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: pressed ? 0.6 : hovering ? 2.4 : 1,
          rotate: 360,
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 18 },
          rotate: { duration: 6, repeat: Infinity, ease: "linear" },
        }}
      >
        <Star className="h-7 w-7 text-white" />
      </motion.div>
    </>
  );
}
