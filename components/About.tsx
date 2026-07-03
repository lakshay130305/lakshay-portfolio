"use client";

import { profile, marqueeSkills } from "@/lib/data";
import Reveal from "./Reveal";

function Marquee({ reverse = false }: { reverse?: boolean }) {
  const items = [...marqueeSkills, ...marqueeSkills];
  return (
    <div className="relative flex overflow-hidden py-3 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div className={`flex shrink-0 gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {items.map((s, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-medium text-slate-300"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <span className="section-label">
            <span className="h-px w-8 shimmer-line" /> About me
          </span>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              Turning messy problems into <span className="gradient-text-animated">intelligent software</span>.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-slate-400">{profile.about}</p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { k: "Now at", v: "Publicis Sapient" },
                { k: "Focus", v: "LLMs & Knowledge Graphs" },
                { k: "Location", v: profile.location },
                { k: "Degree", v: "B.Tech CS, 2027" },
                { k: "Learning", v: "VLSI Physical Design" },
                { k: "Interests", v: "Badminton, Golf" },
              ].map((item) => (
                <div key={item.k} className="glass glass-hover rounded-xl p-4">
                  <div className="text-xs uppercase tracking-wider text-violet-400/70">{item.k}</div>
                  <div className="mt-1 text-sm font-medium text-white">{item.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Skill marquee band */}
        <div className="mt-16 space-y-2">
          <Marquee />
          <Marquee reverse />
        </div>
      </div>
    </section>
  );
}
