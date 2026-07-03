"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function SectionHeading({
  label,
  ghost,
  children,
  className = "",
}: {
  label: string;
  ghost: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative mb-14 ${className}`}>
      {/* Huge ghost outline word behind the heading */}
      <motion.span
        aria-hidden
        className="ghost-text"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {ghost}
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <span className="section-label">
          <span className="h-px w-8 shimmer-line" /> {label}
        </span>
        <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">{children}</h2>
      </motion.div>
    </div>
  );
}
