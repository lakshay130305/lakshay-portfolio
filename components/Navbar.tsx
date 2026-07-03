"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [bin, setBin] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-bg/85 backdrop-blur-md">
      <nav className="container-px flex h-16 items-center justify-between">
        {/* hover easter egg: name flips to "LK" in binary (same char count) */}
        <a
          href="#top"
          className="font-mono text-xs uppercase tracking-[0.2em]"
          onMouseEnter={() => setBin(true)}
          onMouseLeave={() => setBin(false)}
        >
          <span aria-label="Lakshay Kathpalia">
            {bin ? "01001100 01001011" : "Lakshay Kathpalia"}
          </span>
          <span className="ml-2 hidden text-fg/40 sm:inline">
            {bin ? "— DECODED: LK" : "— AI/ML Dev"}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-sweep font-mono text-xs uppercase tracking-[0.2em]">
              {l.label}
            </a>
          ))}
          <a
            href="/Lakshay-Kathpalia-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-sweep font-mono text-xs uppercase tracking-[0.2em] text-fg/60"
          >
            CV ↗
          </a>
          {/* contrast toggle */}
          <button
            aria-label="Toggle contrast"
            onClick={() => setDark((v) => !v)}
            className="grid h-8 w-8 place-items-center rounded-full border border-fg text-[10px] transition-colors hover:bg-fg hover:text-bg"
          >
            ◐
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button
            aria-label="Toggle contrast"
            onClick={() => setDark((v) => !v)}
            className="grid h-8 w-8 place-items-center rounded-full border border-fg text-[10px]"
          >
            ◐
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="font-mono text-xs uppercase tracking-[0.2em]"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0 }}
        className="overflow-hidden border-fg/15 md:hidden"
        style={{ borderTopWidth: open ? 1 : 0 }}
      >
        <div className="container-px flex flex-col py-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-fg/10 py-3 font-mono text-sm uppercase tracking-[0.2em] last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Lakshay-Kathpalia-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 font-mono text-sm uppercase tracking-[0.2em] text-fg/60"
          >
            Download CV ↗
          </a>
        </div>
      </motion.div>

      <motion.div style={{ scaleX: progress }} className="h-px origin-left bg-fg" />
    </header>
  );
}
