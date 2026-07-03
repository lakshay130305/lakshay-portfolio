"use client";

import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Scramble from "./Scramble";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-px relative z-10">
        <SectionHeading index="06" title="Contact" />

        <Reveal>
          <p className="max-w-3xl text-2xl font-bold uppercase leading-snug tracking-tight sm:text-4xl">
            Let&apos;s build something{" "}
            <span className="bg-accent px-2 text-paper">remarkable</span> together.
          </p>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted">
            I&apos;m open to internships, collaborations and interesting problems.
            My inbox is always open.
          </p>
        </Reveal>

        {/* Giant mail link */}
        <Reveal delay={0.1}>
          <a
            href={`mailto:${profile.email}`}
            className="invert-hover box-brut mt-10 block p-6 sm:p-8"
          >
            <div className="label-xs mb-3">{"//"} say hello</div>
            <div className="break-all text-lg font-bold sm:text-2xl lg:text-3xl">
              <Scramble text={profile.email} speed={16} />{" "}
              <span className="keep-accent text-accent" aria-hidden>↗</span>
            </div>
          </a>
        </Reveal>

        {/* Socials grid */}
        <Reveal delay={0.18}>
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {profile.socials
              .filter((s) => s.label !== "Email")
              .map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="invert-hover box-brut flex items-center justify-between p-5"
                >
                  <div>
                    <div className="label-xs">{s.label}</div>
                    <div className="mt-1.5 text-sm font-medium">{s.handle}</div>
                  </div>
                  <span className="keep-accent text-accent" aria-hidden>↗</span>
                </a>
              ))}
          </div>
        </Reveal>

        {/* Footer */}
        <footer className="mt-20 border-t border-ink/70 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-muted sm:flex-row">
            <span>
              {"//---"} © {profile.name} {"---//"}
            </span>
            <span>Next.js / Tailwind / Framer Motion</span>
            <a href="#top" className="transition-colors hover:text-accent">
              [back to top ↑]
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
