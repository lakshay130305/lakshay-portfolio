"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

/** Per-letter interactive text: hover a letter and it springs up, twists,
 *  and briefly glitches into a 0/1 before settling back. */
function Letter({ ch }: { ch: string }) {
  const [hot, setHot] = useState(false);
  const [display, setDisplay] = useState(ch);
  const rot = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const excite = () => {
    if (timer.current) clearTimeout(timer.current);
    rot.current = (Math.random() - 0.5) * 34;
    setHot(true);
    setDisplay(Math.random() > 0.5 ? "1" : "0");
    timer.current = setTimeout(() => {
      setDisplay(ch);
      setHot(false);
    }, 240);
  };

  if (ch === " ") {
    return <span className="inline-block">&nbsp;</span>;
  }

  return (
    <motion.span
      className="inline-block"
      onMouseEnter={excite}
      animate={
        hot
          ? { y: "-0.08em", rotate: rot.current, scale: 1.12 }
          : { y: 0, rotate: 0, scale: 1 }
      }
      transition={{ type: "spring", stiffness: 500, damping: 17 }}
      aria-hidden
    >
      {display}
    </motion.span>
  );
}

export default function PlayText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={className} aria-label={text} role="text">
      {text.split("").map((ch, i) => (
        <Letter key={i} ch={ch} />
      ))}
    </span>
  );
}
