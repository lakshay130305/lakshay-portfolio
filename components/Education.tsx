"use client";

import { education, extras } from "@/lib/data";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <span className="section-label">
            <span className="h-px w-8 shimmer-line" /> Education & More
          </span>
          <h2 className="mb-14 font-display text-3xl font-bold sm:text-4xl">
            Academic <span className="gradient-text">journey</span>
          </h2>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Education timeline */}
          <div className="space-y-4">
            {education.map((e, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="glass glass-hover rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">{e.degree}</h3>
                      <div className="mt-1 text-sm text-slate-400">{e.institute}</div>
                    </div>
                    <div className="text-right">
                      <div className="rounded-lg bg-gradient-to-r from-violet-500/20 to-cyan-500/20 px-3 py-1 text-sm font-semibold text-white">
                        {e.score}
                      </div>
                      <div className="mt-1 text-xs text-slate-500">{e.period}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Certs, positions, interests */}
          <div className="space-y-4">
            <Reveal>
              <div className="glass rounded-2xl p-6">
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-violet-400/80">
                  🎓 Certifications
                </h4>
                {extras.certifications.map((c) => (
                  <div key={c.title} className="mb-2 last:mb-0">
                    <div className="text-sm font-medium text-white">{c.title}</div>
                    <div className="text-xs text-slate-500">{c.org} · {c.year}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="glass rounded-2xl p-6">
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-violet-400/80">
                  ★ Leadership
                </h4>
                {extras.positions.map((p) => (
                  <div key={p.title}>
                    <div className="text-sm font-medium text-white">{p.title}</div>
                    <div className="text-xs text-slate-500">{p.org} · {p.year}</div>
                    <p className="mt-1.5 text-sm text-slate-400">{p.note}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="glass rounded-2xl p-6">
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-violet-400/80">
                  ♦ Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {extras.interests.map((it) => (
                    <span key={it} className="chip">{it}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
