"use client";

import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading label="Experience" ghost="WORK">
          Where I&apos;ve <span className="gradient-text-animated">worked</span>
        </SectionHeading>

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-violet-500/60 via-cyan-500/30 to-transparent sm:left-6" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative pl-12 sm:pl-20">
                  {/* node */}
                  <div className="absolute left-[9px] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 shadow-lg shadow-violet-500/40 sm:left-[17px]">
                    {job.current ? (
                      <>
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                        <span className="relative h-1.5 w-1.5 rounded-full bg-white" />
                      </>
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </div>

                  <div
                    className={
                      job.current
                        ? "border-spin rounded-2xl bg-ink"
                        : "glass glass-hover rounded-2xl"
                    }
                  >
                    <div className={`rounded-2xl p-6 sm:p-8 ${job.current ? "bg-surface/95" : ""}`}>
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{job.role}</h3>
                            {job.current && (
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                                <span className="relative flex h-1.5 w-1.5">
                                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                </span>
                                NOW
                              </span>
                            )}
                          </div>
                          <div className="mt-1.5 text-violet-300">
                            {job.company} · {job.location}
                          </div>
                        </div>
                        <span className="chip whitespace-nowrap">{job.period}</span>
                      </div>

                      <p className="mt-4 text-slate-400">{job.summary}</p>

                      <ul className="mt-5 space-y-2.5">
                        {job.highlights.map((h, hi) => (
                          <li key={hi} className="flex gap-3 text-sm text-slate-300">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {job.tech.map((t) => (
                          <span key={t} className="chip">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
