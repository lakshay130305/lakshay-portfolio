"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading label="Skills & Tools" ghost="STACK">
          My technical <span className="gradient-text-animated">toolkit</span>
        </SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <div className="glass glass-hover h-full rounded-2xl p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-violet-300">
                    {["⌘", "▣", "✦", "⚙"][i % 4]}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((item, ii) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ii * 0.04, duration: 0.4 }}
                      whileHover={{ scale: 1.06 }}
                      className="cursor-default rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-violet-400/50 hover:text-white"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
