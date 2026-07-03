"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function TiltCard({ project }: { project: (typeof projects)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 1000 }}
      className="group relative h-full"
    >
      {/* glow */}
      <div
        className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${project.accent} opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-40`}
      />

      <div className="glass relative flex h-full flex-col rounded-3xl p-7" style={{ transform: "translateZ(40px)" }}>
        <div className="flex items-start justify-between">
          <div
            className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${project.accent} text-3xl shadow-lg`}
          >
            {project.emoji}
          </div>
          <span className="text-xs uppercase tracking-widest text-slate-500">Project</span>
        </div>

        <h3 className="mt-6 font-display text-2xl font-bold text-white">{project.title}</h3>
        <div className={`mt-1 bg-gradient-to-r ${project.accent} bg-clip-text text-sm font-medium text-transparent`}>
          {project.subtitle}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-400">{project.description}</p>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm text-slate-300">
              <span className="mt-1 text-cyan-400">▹</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-white/5 pt-5">
          {project.tech.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading label="Projects" ghost="BUILDS">
          Things I&apos;ve <span className="gradient-text-animated">built</span>
        </SectionHeading>
        <Reveal className="-mt-8 mb-12">
          <p className="max-w-sm text-slate-400">
            A mix of applied ML, computer vision and full-stack engineering.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="h-full">
              <TiltCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
