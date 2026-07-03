"use client";

import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { profile, marqueeSkills } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { BinaryStrip, Star } from "./Binary";

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return min + (((v - min) % range) + range) % range;
};

const facts = [
  { k: "Currently", v: "AI/ML Intern @ Publicis Sapient" },
  { k: "Focus", v: "LLMs & Knowledge Graphs" },
  { k: "Based in", v: "Gurgaon, India" },
  { k: "Degree", v: "B.Tech CS (AI & ML) — 2027" },
  { k: "Also learning", v: "VLSI Physical Design" },
  { k: "Off-screen", v: "Badminton / Golf" },
];

function Ticker() {
  const baseX = useMotionValue(0);
  useAnimationFrame((_, delta) => {
    baseX.set(baseX.get() - 1.6 * (delta / 1000)); // % per second
  });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  const items = [...marqueeSkills, ...marqueeSkills];
  return (
    <div className="relative overflow-hidden border-y border-fg/20 py-4">
      <motion.div style={{ x }} className="flex w-max items-center">
        {items.map((s, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="px-6 font-mono text-sm uppercase tracking-[0.25em] text-fg/60">
              {s}
            </span>
            <Star className="h-3 w-3 shrink-0 text-fg/40" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-40">
      <div className="container-px">
        <SectionHeading index="01" title="About" hint="WHO IS THIS GUY" />

        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-24">
          <Reveal>
            <p className="text-xl font-medium leading-snug tracking-tight sm:text-3xl">
              I collaborate with teams to turn messy real-world data into
              intelligent software — from LLM extraction pipelines to
              full-stack products.
            </p>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-fg/60 sm:text-base">
              {profile.about}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              {facts.map((f, i) => (
                <div
                  key={f.k}
                  className="flex items-baseline justify-between gap-6 border-b border-fg/15 py-4"
                >
                  <span className="meta shrink-0">
                    {String(i + 1).padStart(2, "0")} / {f.k}
                  </span>
                  <span className="text-right text-sm font-medium">{f.v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-24">
        <Ticker />
      </div>

      <div className="container-px mt-10">
        <BinaryStrip />
      </div>
    </section>
  );
}
