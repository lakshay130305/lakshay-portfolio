"use client";

import { profile, marqueeSkills } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Marquee({ reverse = false }: { reverse?: boolean }) {
  const items = [...marqueeSkills, ...marqueeSkills];
  return (
    <div className="relative flex overflow-hidden py-2.5">
      <div className={`flex shrink-0 items-center ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {items.map((s, i) => (
          <span key={i} className="flex items-center whitespace-nowrap text-xs uppercase tracking-[0.2em] text-ink/60">
            <span className="px-4">{s}</span>
            <span className="text-accent/70" aria-hidden>{"///"}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const facts = [
  { k: "Now at", v: "Publicis Sapient" },
  { k: "Focus", v: "LLMs & Knowledge Graphs" },
  { k: "Location", v: "Gurgaon, India" },
  { k: "Degree", v: "B.Tech CS (AI & ML), 2027" },
  { k: "Learning", v: "VLSI Physical Design" },
  { k: "Interests", v: "Badminton / Golf" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-px relative z-10">
        <SectionHeading index="01" title="About" />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal>
            <p className="text-lg leading-relaxed sm:text-xl">
              Turning messy real-world problems into{" "}
              <span className="bg-ink px-1.5 text-paper">intelligent software</span>.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
              {profile.about}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="box-brut p-6">
              <div className="label-xs mb-2">{"//"} quick facts</div>
              {facts.map((f) => (
                <div key={f.k} className="leader-row">
                  <span className="label-xs shrink-0 normal-case tracking-[0.15em]">{f.k}</span>
                  <span className="leader-fill" aria-hidden />
                  <span className="shrink-0 text-sm font-medium">{f.v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* skill ticker band */}
      <div className="relative z-10 mt-20 border-y border-ink/70 bg-paper/70">
        <Marquee />
        <div className="border-t border-dashed border-ink/40" />
        <Marquee reverse />
      </div>
    </section>
  );
}
