"use client";

import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Star } from "./Binary";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-40">
      <div className="container-px">
        <SectionHeading
          index="03"
          title="Projects"
          hint="SELECTED BUILDS — ML / CV / FULL-STACK"
        />

        <div className="border-t border-fg/20">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <article className="row-invert group border-b border-fg/20">
                <div className="grid gap-4 px-2 py-10 sm:px-6 lg:grid-cols-[140px_1fr_auto] lg:items-start lg:gap-10">
                  <div className="meta pt-2">
                    №{String(i + 1).padStart(3, "0")}
                  </div>

                  <div>
                    <h3 className="display flex items-center gap-4 text-4xl sm:text-6xl">
                      {p.title}
                      <Star className="h-[0.4em] w-[0.4em] shrink-0 opacity-0 transition-all duration-300 group-hover:rotate-90 group-hover:opacity-100" />
                    </h3>
                    <div className="mt-2 font-mono text-xs uppercase tracking-[0.25em] text-fg/60">
                      {p.subtitle}
                    </div>

                    <p className="mt-5 max-w-xl text-sm leading-relaxed text-fg/60">
                      {p.description}
                    </p>

                    <ul className="mt-5 max-w-xl space-y-2">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-sm leading-snug">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-current" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-row flex-wrap gap-2 lg:max-w-[220px] lg:flex-col lg:items-end">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-current/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] opacity-70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
