"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile, stats } from "@/lib/data";
import { BinaryStrip, Star } from "./Binary";
import Scramble from "./Scramble";
import PlayText from "./PlayText";

/** Line entrance with a clip reveal; releases overflow afterwards so
 *  hover animations aren't clipped. */
function RevealLine({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [done, setDone] = useState(false);
  return (
    <span className={`block ${done ? "" : "overflow-hidden"} ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={() => setDone(true)}
      >
        {children}
      </motion.span>
    </span>
  );
}

type BurstBit = { id: number; dx: number; dy: number; ch: string };

/** The hero star — click it and it detonates into a firework of 0s and 1s. */
function StarBurst() {
  const [bits, setBits] = useState<BurstBit[]>([]);
  const [spin, setSpin] = useState(0);
  const idRef = useRef(0);

  const boom = () => {
    setSpin((s) => s + 720);
    const batch: BurstBit[] = Array.from({ length: 16 }, () => ({
      id: idRef.current++,
      dx: (Math.random() - 0.5) * 320,
      dy: (Math.random() - 0.5) * 320,
      ch: Math.random() > 0.5 ? "1" : "0",
    }));
    setBits((b) => [...b, ...batch]);
    setTimeout(() => {
      setBits((b) => b.filter((x) => !batch.includes(x)));
    }, 900);
  };

  return (
    <span className="relative inline-flex" data-cursor="hover">
      <motion.button
        aria-label="Do not press this star"
        onClick={boom}
        animate={{ rotate: spin }}
        transition={{ type: "spring", stiffness: 60, damping: 14 }}
        className="inline-flex"
      >
        <Star className="h-[0.6em] w-[0.6em] shrink-0 animate-spin-slow" />
      </motion.button>

      {bits.map((b) => (
        <motion.span
          key={b.id}
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 font-mono text-lg font-bold"
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{ x: b.dx, y: b.dy, opacity: 0, scale: 0.5, rotate: b.dx * 0.6 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          aria-hidden
        >
          {b.ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center pt-16">
      <div className="container-px">
        {/* top meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mb-8 flex flex-wrap items-center justify-between gap-3"
        >
          <span className="meta">
            <Scramble text="AI/ML DEVELOPER — INTERN @ PUBLICIS SAPIENT" speed={16} />
          </span>
          <span className="meta hidden sm:block">GURGAON, IN</span>
        </motion.div>

        {/* giant name — every letter is alive */}
        <h1 className="display text-[14vw] leading-[0.9] sm:text-[12.5vw] lg:text-[10.5rem]">
          <RevealLine delay={0.1}>
            <PlayText text="LAKSHAY" />
          </RevealLine>
          <RevealLine delay={0.22}>
            <span className="inline-flex items-center gap-[0.14em]">
              <StarBurst />
              <PlayText text="KATHPALIA" />
            </span>
          </RevealLine>
        </h1>

        {/* tagline */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="max-w-md text-base leading-relaxed text-fg/70 sm:text-lg"
          >
            Coding from Gurgaon, India. Building semantic extraction &amp;
            entity-resolution systems for enterprise knowledge graphs at
            Publicis Sapient. Available for opportunities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="flex flex-wrap gap-3 md:justify-end"
          >
            <a href="#projects" className="btn-pill-solid">
              View work ↓
            </a>
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-pill">
              Download CV
            </a>
          </motion.div>
        </div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 gap-y-6 border-t border-fg/20 pt-6 sm:grid-cols-4"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="pr-6">
              <div className="meta mb-2">{String(i + 1).padStart(2, "0")}</div>
              <div className="text-2xl font-bold tracking-tight sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs text-fg/50">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* binary strip at the bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="container-px mt-14"
      >
        <BinaryStrip rows={2} />
      </motion.div>
    </section>
  );
}
