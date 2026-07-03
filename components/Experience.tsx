"use client";

import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container-px relative z-10">
        <SectionHeading index="02" title="Experience" />

        <div className="space-y-8">
          {experience.map((job, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <article
                className={`box-brut relative p-6 sm:p-8 ${
                  job.current ? "border-accent" : ""
                }`}
              >
                {/* corner index */}
                <span className="absolute right-4 top-3 text-xs text-muted" aria-hidden>
                  {"["}
                  {String(i + 1).padStart(2, "0")}
                  {"]"}
                </span>

                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <h3 className="text-lg font-bold uppercase tracking-wide sm:text-xl">
                    {job.company}
                  </h3>
                  {job.current && (
                    <span className="flex items-center gap-1.5 border border-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
                      <span className="h-1.5 w-1.5 animate-blink rounded-full bg-accent" />
                      Now
                    </span>
                  )}
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                  <span className="text-ink/85">{job.role}</span>
                  <span aria-hidden>{"//"}</span>
                  <span>{job.location}</span>
                  <span aria-hidden>{"//"}</span>
                  <span>{job.period}</span>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted">
                  {job.summary}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {job.highlights.map((h, hi) => (
                    <li key={hi} className="flex gap-3 text-sm leading-relaxed">
                      <span className="shrink-0 text-accent" aria-hidden>
                        {">"}
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 border-t border-dashed border-ink/40 pt-5">
                  {job.tech.map((t) => (
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
