"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile, stats } from "@/lib/data";
import Scramble from "./Scramble";

/** Types the role out character by character, deletes it, moves to the next. */
function TypedRole() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [len, setLen] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = profile.roles[roleIdx];
    let delay = deleting ? 32 : 70;
    if (!deleting && len === role.length) delay = 1600;
    if (deleting && len === 0) delay = 300;

    const id = setTimeout(() => {
      if (!deleting && len === role.length) {
        setDeleting(true);
      } else if (deleting && len === 0) {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % profile.roles.length);
      } else {
        setLen((l) => l + (deleting ? -1 : 1));
      }
    }, delay);
    return () => clearTimeout(id);
  }, [len, deleting, roleIdx]);

  return (
    <span className="cursor-block text-ink">
      {profile.roles[roleIdx].slice(0, len)}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center pt-24">
      <div className="container-px relative z-10">
        {/* status line */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2"
        >
          <span className="label-xs flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            AI/ML Intern @ Publicis Sapient
          </span>
          <span className="label-xs hidden sm:inline">{"//"} {profile.location}</span>
          <span className="label-xs hidden md:inline">{"//"} Open to opportunities</span>
        </motion.div>

        {/* giant name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[13vw] font-bold uppercase leading-[0.95] tracking-tight sm:text-[11vw] lg:text-[8.5rem]"
        >
          <Scramble text="LAKSHAY" speed={34} />
          <br />
          <span className="text-ink/90">
            <Scramble text="KATHPALIA" speed={34} />
          </span>
        </motion.h1>

        {/* typed role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-base sm:text-lg"
        >
          <span className="text-accent">{">"}</span> <TypedRole />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base"
        >
          Building semantic extraction &amp; entity-resolution systems for enterprise
          knowledge graphs — and everything full-stack in between.
        </motion.p>

        {/* actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="btn-brut-solid">
            View work <span aria-hidden>↓</span>
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brut"
          >
            Download CV
          </a>
          <a href="#contact" className="btn-brut">
            Contact
          </a>
        </motion.div>

        {/* stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-16 box-brut grid grid-cols-2 divide-x divide-ink/30 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-5 sm:px-6">
              <div className="text-2xl font-bold text-accent sm:text-3xl">{s.value}</div>
              <div className="label-xs mt-2 normal-case tracking-normal">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.35em] text-muted"
      >
        scroll <span className="animate-blink text-accent">▼</span>
      </motion.a>
    </section>
  );
}
