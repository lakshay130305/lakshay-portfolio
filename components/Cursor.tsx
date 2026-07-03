"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 });

  useEffect(() => {
    // Skip on touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest("a, button, [data-cursor='hover']")
      );
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  return (
    <>
      {/* Big soft glow that follows the cursor */}
      <motion.div
        className="pointer-events-none fixed z-[60] hidden h-8 w-8 rounded-full mix-blend-screen md:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.9) 0%, rgba(34,211,238,0.4) 45%, transparent 70%)",
          opacity: visible ? 1 : 0,
        }}
        animate={{ scale: hovering ? 2.6 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      {/* Precise dot */}
      <motion.div
        className="pointer-events-none fixed z-[61] hidden h-1.5 w-1.5 rounded-full bg-white md:block"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}
