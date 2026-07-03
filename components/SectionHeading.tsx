"use client";

import Reveal from "./Reveal";
import Scramble from "./Scramble";
import PlayText from "./PlayText";

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
    <Reveal className="mb-14 sm:mb-20">
      <div className="flex items-baseline justify-between gap-6 border-b border-fg/20 pb-4">
        <span className="meta">
          ({index}) — <Scramble text={title.toUpperCase()} speed={22} />
        </span>
        {hint && <span className="meta hidden text-right sm:block">{hint}</span>}
      </div>
      <h2 className="display mt-8 text-5xl sm:text-7xl lg:text-8xl">
        <PlayText text={title} />
      </h2>
    </Reveal>
  );
}
