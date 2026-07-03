"use client";

import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import { BinaryStrip, Star } from "./Binary";
import Scramble from "./Scramble";

function BigMarquee() {
  const items = Array.from({ length: 6 });
  return (
    <a href={`mailto:${profile.email}`} className="group block overflow-hidden border-y border-fg/20 py-6">
      <div className="flex w-max animate-marquee items-center transition-[animation-duration]">
        {items.map((_, i) => (
          <span key={i} className="flex items-center">
            <span className="display whitespace-nowrap px-8 text-6xl transition-colors group-hover:text-fg/60 sm:text-8xl">
              Let&apos;s work together
            </span>
            <Star className="h-10 w-10 shrink-0 animate-spin-slow sm:h-14 sm:w-14" />
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative pt-28 sm:pt-40">
      <div className="container-px">
        <Reveal>
          <div className="flex items-baseline justify-between gap-6 border-b border-fg/20 pb-4">
            <span className="meta">
              (06) — <Scramble text="CONTACT" speed={22} />
            </span>
            <span className="meta hidden sm:block">INBOX ALWAYS OPEN</span>
          </div>
        </Reveal>
      </div>

      {/* giant marquee CTA */}
      <Reveal className="mt-16">
        <BigMarquee />
      </Reveal>

      <div className="container-px">
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <Reveal>
            <p className="max-w-md text-base leading-relaxed text-fg/60 sm:text-lg">
              Open to internships, collaborations and interesting problems.
              Drop me a line — I reply fast.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="link-sweep mt-6 inline-block break-all text-lg font-bold tracking-tight sm:text-2xl"
            >
              {profile.email}
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              {profile.socials
                .filter((s) => s.label !== "Email")
                .map((s, i) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="row-invert flex items-baseline justify-between gap-6 border-b border-fg/20 px-2 py-5 first:border-t"
                  >
                    <span className="meta">
                      {String(i + 1).padStart(2, "0")} / {s.label}
                    </span>
                    <span className="font-mono text-sm">
                      {s.handle} ↗
                    </span>
                  </a>
                ))}
            </div>
          </Reveal>
        </div>

        {/* footer */}
        <footer className="mt-24 pb-10">
          <BinaryStrip rows={2} />
          <div className="mt-8 flex flex-col items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-fg/50 sm:flex-row">
            <span>© {profile.name}</span>
            <span className="flex items-center gap-2">
              Coding my way since 2023 <Star className="h-2.5 w-2.5" />
            </span>
            <a href="#top" className="link-sweep">
              Back to top ↑
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
