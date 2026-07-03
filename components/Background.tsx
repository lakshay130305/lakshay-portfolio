"use client";

import { motion } from "framer-motion";
import Starfield from "./Starfield";

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(88,28,135,0.25),_transparent_55%)]" />

      {/* Twinkling stars */}
      <Starfield />

      {/* Animated aurora blobs */}
      <motion.div
        className="aurora left-[-10%] top-[-5%] h-[420px] w-[420px] bg-violet-600"
        animate={{ x: [0, 60, -20, 0], y: [0, 40, 20, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="aurora right-[-8%] top-[10%] h-[380px] w-[380px] bg-cyan-500"
        animate={{ x: [0, -50, 30, 0], y: [0, 50, -30, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="aurora bottom-[-10%] left-[30%] h-[440px] w-[440px] bg-fuchsia-600"
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 20, 0], scale: [1, 1.05, 0.9, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid overlay */}
      <div className="grid-bg absolute inset-0" />
    </div>
  );
}
