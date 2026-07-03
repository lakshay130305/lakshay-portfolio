"use client";

import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { BinaryStrip } from "./Binary";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-40">
      <div className="container-px">
        <SectionHeading index="04" title="Stack" hint="TOOLS OF THE TRADE" />

        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <div>
                <div className="meta border-b border-fg/20 pb-3">
                  ({String(i + 1).padStart(2, "0")}) {group.title}
                </div>
                <ul className="mt-5 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="group flex cursor-default items-baseline gap-3 text-sm font-medium transition-transform duration-200 hover:translate-x-1.5 sm:text-base"
                    >
                      <span className="font-mono text-[10px] text-fg/40 transition-colors group-hover:text-fg">
                        →
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <BinaryStrip />
        </div>
      </div>
    </section>
  );
}
