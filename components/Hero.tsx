"use client";

import { motion } from "framer-motion";
import { profile, stats } from "@/lib/data";
import { BinaryStrip, Star } from "./Binary";
import Scramble from "./Scramble";

const lineAnim = {
  initial: { y: "110%" },
  animate: { y: "0%" },
};

function RevealLine({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        variants={lineAnim}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
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
            <Scramble text="AI/ML INTERN @ PUBLICIS SAPIENT" speed={18} />
          </span>
          <span className="meta hidden sm:block">EST. 2005 — GURGAON, IN</span>
        </motion.div>

        {/* giant headline */}
        <h1 className="display text-[15vw] leading-[0.9] sm:text-[13vw] lg:text-[11rem]">
          <RevealLine delay={0.1}>AI/ML</RevealLine>
          <RevealLine delay={0.22}>
            <span className="inline-flex items-center gap-[0.12em]">
              <Star className="inline-block h-[0.62em] w-[0.62em] shrink-0 animate-spin-slow" />
              <span>Developer</span>
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
