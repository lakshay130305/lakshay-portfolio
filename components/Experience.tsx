"use client";

import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-40">
      <div className="container-px">
        <SectionHeading index="02" title="Work" hint="WHERE I'VE BEEN" />

        <div className="border-t border-fg/20">
          {experience.map((job, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <article className="grid gap-6 border-b border-fg/20 py-10 lg:grid-cols-[180px_1fr] lg:gap-14">
                {/* ID / period column */}
                <div>
                  <div className="meta">
                    №{String(i + 1).padStart(3, "0")}
                    {job.current && (
                      <span className="ml-3 inline-flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 animate-blink rounded-full bg-fg" />
                        NOW
                      </span>
                    )}
                  </div>
                  <div className="mt-3 font-mono text-xs text-fg/50">{job.period}</div>
                  <div className="mt-1 font-mono text-xs text-fg/50">{job.location}</div>
                </div>

                <div>
                  <h3 className="display text-3xl sm:text-4xl">{job.company}</h3>
                  <div className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-fg/60">
                    {job.role}
                  </div>

                  <p className="mt-6 max-w-2xl text-sm leading-relaxed text-fg/60 sm:text-base">
                    {job.summary}
                  </p>

                  <ul className="mt-6 max-w-3xl space-y-3">
                    {job.highlights.map((h, hi) => (
                      <li key={hi} className="flex gap-4 text-sm leading-relaxed">
                        <span className="meta mt-0.5 shrink-0">
                          {String(hi + 1).padStart(2, "0")}
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-fg/30 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-fg/70"
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
