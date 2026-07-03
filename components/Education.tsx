"use client";

import { education, extras } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="container-px relative z-10">
        <SectionHeading index="05" title="Education" />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Education rows */}
          <div>
            {education.map((e, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="group border-b border-dotted border-ink/40 py-6 first:pt-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="text-sm font-bold uppercase tracking-wide sm:text-base">
                      {e.degree}
                    </h3>
                    <span className="text-sm font-bold text-accent">{e.score}</span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 text-sm text-muted">
                    <span>{e.institute}</span>
                    <span aria-hidden>{"//"}</span>
                    <span>{e.period}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Extras */}
          <div className="space-y-5">
            <Reveal>
              <div className="box-brut p-6">
                <div className="label-xs mb-4">{"//"} certification</div>
                {extras.certifications.map((c) => (
                  <div key={c.title}>
                    <div className="text-sm font-bold">{c.title}</div>
                    <div className="mt-1 text-xs text-muted">
                      {c.org} {"//"} {c.year}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="box-brut p-6">
                <div className="label-xs mb-4">{"//"} leadership</div>
                {extras.positions.map((p) => (
                  <div key={p.title}>
                    <div className="text-sm font-bold">{p.title}</div>
                    <div className="mt-1 text-xs text-muted">
                      {p.org} {"//"} {p.year}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.note}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
