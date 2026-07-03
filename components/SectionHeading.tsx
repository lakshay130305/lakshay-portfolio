"use client";

import Scramble from "./Scramble";
import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  title,
  hint,
}: {
  index: string;
  title: string;
  hint?: string;
}) {
  return (
    <Reveal className="mb-12 sm:mb-16">
      {/* //--- 01 / TITLE ---------------------// */}
      <div className="flex items-center gap-3 text-ink/80">
        <span className="shrink-0 text-sm">{"//---"}</span>
        <span className="shrink-0 text-sm text-accent">{index}</span>
        <span className="shrink-0 text-sm">/</span>
        <h2 className="shrink-0 text-sm font-bold uppercase tracking-[0.35em]">
          <Scramble text={title} />
        </h2>
        <span className="h-px flex-1 border-t border-dashed border-ink/40" aria-hidden />
        <span className="shrink-0 text-sm">{"//"}</span>
      </div>
      {hint && <p className="mt-4 max-w-md text-sm text-muted">{hint}</p>}
    </Reveal>
  );
}
