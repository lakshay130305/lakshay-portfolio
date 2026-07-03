"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled ? "border-b border-white/5 bg-ink/70 backdrop-blur-xl" : ""
        }`}
      >
        <nav className="container-px flex h-16 items-center justify-between">
          <a href="#top" className="group flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 text-sm text-white shadow-lg shadow-violet-500/30">
              LK
            </span>
            <span className="hidden gradient-text sm:inline">Lakshay</span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-1.5 backdrop-blur-md md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-1.5 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="/Lakshay-Kathpalia-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              Résumé
            </a>
            <a
              href="#contact"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              Let&apos;s talk
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.03] md:hidden"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </nav>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          className="overflow-hidden md:hidden"
        >
          <div className="container-px flex flex-col gap-1 pb-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-2.5 text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="h-0.5 origin-left bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
      />
    </motion.header>
  );
}
