"use client";

import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-px relative z-10">
        <SectionHeading
          index="03"
          title="Projects"
          hint="A mix of applied ML, computer vision and full-stack engineering."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="h-full">
              <article className="box-brut invert-hover group flex h-full flex-col p-6">
                <div className="flex items-baseline justify-between">
                  <span className="keep-accent text-xs font-bold text-accent">
                    {"["}
                    {String(i + 1).padStart(2, "0")}
                    {"]"}
                  </span>
                  <span className="label-xs">project</span>
                </div>

                <h3 className="mt-5 text-xl font-bold uppercase tracking-wide">
                  {p.title}
                </h3>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
                  {p.subtitle}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>

                <ul className="mt-5 flex-1 space-y-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-sm leading-snug">
                      <span className="keep-accent shrink-0 text-accent" aria-hidden>
                        {">"}
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 border-t border-dashed border-ink/40 pt-4 group-hover:border-paper/40">
                  {p.tech.map((t) => (
                    <span key={t} className="tag">
                      {t.toLowerCase()}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
