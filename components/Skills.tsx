"use client";

import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container-px relative z-10">
        <SectionHeading index="04" title="Stack" />

        <div className="box-brut grid divide-y divide-ink/50 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06} className="sm:[&:nth-child(3)]:border-t sm:[&:nth-child(4)]:border-t sm:[&:nth-child(3)]:border-ink/50 sm:[&:nth-child(4)]:border-ink/50 lg:[&:nth-child(n)]:!border-t-0">
              <div className="h-full p-6">
                <div className="label-xs mb-5">
                  {"//"} {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em]">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="group flex items-center gap-2 text-sm text-ink/75 transition-colors hover:text-accent"
                    >
                      <span className="text-accent/70 transition-transform group-hover:translate-x-1" aria-hidden>
                        —
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
