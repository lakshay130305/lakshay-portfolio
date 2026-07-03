"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2.5rem] p-10 text-center sm:p-16">
            {/* animated gradient glow */}
            <motion.div
              aria-hidden
              className="absolute -top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-600/30 to-cyan-500/30 blur-3xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative">
              <span className="section-label justify-center">
                <span className="h-px w-8 shimmer-line" /> Contact
              </span>
              <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
                Let&apos;s build something <span className="gradient-text">remarkable</span> together.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-slate-400">
                I&apos;m open to internships, collaborations and interesting problems. My inbox is always open.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform hover:scale-105"
                >
                  ✉ Say hello
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/5"
                >
                  📞 {profile.phone}
                </a>
              </div>

              <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="glass-hover flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-left"
                  >
                    <div>
                      <div className="text-xs uppercase tracking-wider text-violet-400/70">{s.label}</div>
                      <div className="mt-0.5 text-sm font-medium text-white">{s.handle}</div>
                    </div>
                    <span className="text-slate-500 transition-transform group-hover:translate-x-1">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Footer */}
        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-slate-500 sm:flex-row">
          <div>© {profile.name} · Built with Next.js, Tailwind & Framer Motion</div>
          <a href="#top" className="transition-colors hover:text-white">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}
