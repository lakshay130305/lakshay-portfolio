"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile, stats } from "@/lib/data";

function RotatingRole() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % profile.roles.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
      <motion.span
        key={index}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="gradient-text inline-block font-semibold"
      >
        {profile.roles[index]}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center pt-24">
      <div className="container-px grid w-full items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Left: intro */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-slate-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for internships & opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <br className="hidden sm:block" />
            <span className="gradient-text">{profile.firstName}</span>{" "}
            <span className="text-white">{profile.lastName}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 max-w-xl text-lg text-slate-400 sm:text-xl"
          >
            I&apos;m a <RotatingRole /> crafting intelligent, full-stack products —
            from reinforcement-learning systems to production web apps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform hover:scale-105"
            >
              <span className="relative z-10">View my work</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/5"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-1 text-sm text-slate-500">
              <span className="text-slate-400">📍</span> {profile.location}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-bold gradient-text">{s.value}</div>
                <div className="mt-1 text-xs leading-tight text-slate-500">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: floating profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden w-full max-w-sm lg:block"
        >
          <div className="animate-float">
            {/* Glow ring */}
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-violet-600/40 via-fuchsia-600/20 to-cyan-500/40 blur-2xl" />

            <div className="glass relative rounded-[2rem] p-6">
              <div className="relative mb-5 aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600/30 via-slate-900 to-cyan-600/30">
                <div className="grid h-full w-full place-items-center">
                  <span className="font-display text-8xl font-bold text-white/90">LK</span>
                </div>
                {/* orbiting dot */}
                <div className="absolute inset-0 animate-spin-slow">
                  <span className="absolute left-1/2 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.8)]" />
                </div>
              </div>

              <div className="font-display text-xl font-bold text-white">{profile.name}</div>
              <div className="mt-1 text-sm text-slate-400">{profile.tagline}</div>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Python", "React", "Flask", "ML"].map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
                <span className="text-sm text-slate-400">Currently</span>
                <span className="text-sm font-medium text-emerald-400">Building cool things ✦</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-white"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
