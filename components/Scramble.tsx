"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const GLYPHS = "/\\|-_=+*#<>[]{}";

export default function Scramble({
  text,
  className = "",
  speed = 28,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(text);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(text);
      return;
    }

    let frame = 0;
    const total = text.length * 2 + 8;
    const id = setInterval(() => {
      frame++;
      const resolved = Math.floor((frame / total) * text.length * 1.4);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === " " || i < resolved) {
          out += ch;
        } else {
          out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }
      setDisplay(out);
      if (resolved >= text.length) {
        setDisplay(text);
        clearInterval(id);
      }
    }, speed);

    return () => clearInterval(id);
  }, [inView, text, speed]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {display}
    </span>
  );
}
