"use client";

import { education, extras } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative py-28 sm:py-40">
      <div className="container-px">
        <SectionHeading index="05" title="Education" hint="THE PAPER TRAIL" />

        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div className="border-t border-fg/20">
            {education.map((e, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="grid gap-2 border-b border-fg/20 py-7 sm:grid-cols-[100px_1fr_auto] sm:items-baseline sm:gap-6">
                  <span className="meta">№{String(i + 1).padStart(3, "0")}</span>
                  <div>
                    <h3 className="text-base font-bold tracking-tight sm:text-lg">{e.degree}</h3>
                    <div className="mt-1 text-sm text-fg/50">
                      {e.institute} — {e.period}
                    </div>
                  </div>
                  <span className="font-mono text-sm font-bold">{e.score}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="space-y-10">
            <Reveal>
              <div>
                <div className="meta border-b border-fg/20 pb-3">(A) Certification</div>
                {extras.certifications.map((c) => (
                  <div key={c.title} className="pt-4">
                    <div className="text-sm font-bold sm:text-base">{c.title}</div>
                    <div className="mt-1 font-mono text-xs text-fg/50">
                      {c.org} — {c.year}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div>
                <div className="meta border-b border-fg/20 pb-3">(B) Leadership</div>
                {extras.positions.map((p) => (
                  <div key={p.title} className="pt-4">
                    <div className="text-sm font-bold sm:text-base">{p.title}</div>
                    <div className="mt-1 font-mono text-xs text-fg/50">
                      {p.org} — {p.year}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-fg/60">{p.note}</p>
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
