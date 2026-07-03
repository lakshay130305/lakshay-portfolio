"use client";

import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { label: "About", href: "#about", index: "01" },
  { label: "Work", href: "#experience", index: "02" },
  { label: "Projects", href: "#projects", index: "03" },
  { label: "Stack", href: "#skills", index: "04" },
  { label: "Education", href: "#education", index: "05" },
  { label: "Contact", href: "#contact", index: "06" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/80 bg-paper/90 backdrop-blur-sm">
      <nav className="container-px flex h-14 items-center justify-between gap-4">
        <a href="#top" className="shrink-0 text-sm font-bold tracking-wide">
          {"//---"} <span className="text-accent">LK</span> {"---//"}
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group text-xs uppercase tracking-[0.2em] text-ink/70 transition-colors hover:text-ink"
            >
              <span className="mr-1.5 text-[10px] text-accent/80">{l.index}</span>
              <span className="underline-offset-4 group-hover:underline">{l.label}</span>
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/Lakshay-Kathpalia-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] text-ink/70 transition-colors hover:text-accent"
          >
            [CV]
          </a>
          <a href="#contact" className="btn-brut-solid !px-4 !py-2">
            Let&apos;s talk
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-sm uppercase tracking-widest lg:hidden"
        >
          {open ? "[close]" : "[menu]"}
        </button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0 }}
        className="overflow-hidden border-ink/80 lg:hidden"
        style={{ borderTopWidth: open ? 1 : 0 }}
      >
        <div className="container-px flex flex-col py-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-dotted border-ink/30 py-3 text-sm uppercase tracking-[0.2em] last:border-0"
            >
              <span className="mr-2 text-xs text-accent">{l.index}</span>
              {l.label}
            </a>
          ))}
          <a
            href="/Lakshay-Kathpalia-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 text-sm uppercase tracking-[0.2em] text-accent"
          >
            [Download CV]
          </a>
        </div>
      </motion.div>

      {/* Scroll progress */}
      <motion.div style={{ scaleX: progress }} className="h-[2px] origin-left bg-accent" />
    </header>
  );
}
