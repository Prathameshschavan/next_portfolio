"use client";

import { useEffect, useState } from "react";
import type { SectionId } from "@/content/profile";

type Item = { id: SectionId; label: string };

/** Vertical nav that tracks the section currently in view. */
export function SectionNav({ items }: { items: readonly Item[] }) {
  const [active, setActive] = useState<SectionId>(items[0].id);

  useEffect(() => {
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
        // First section (in document order) that is meaningfully on screen wins.
        const current = items.find(({ id }) => (visible.get(id) ?? 0) > 0);
        if (current) setActive(current.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.01, 0.25] },
    );
    for (const { id } of items) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Sections">
      <ol className="space-y-1 short:flex short:flex-wrap short:gap-x-5 short:gap-y-1 short:space-y-0">
        {items.map(({ id, label }, i) => {
          const isActive = id === active;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center gap-4 py-1.5 text-sm short:py-0.5"
              >
                <span className="w-5 font-mono text-[11px] text-subtle tabular-nums short:hidden">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className={`h-px transition-all duration-300 short:hidden ${
                    isActive ? "w-14 bg-accent" : "w-6 bg-border-strong group-hover:w-10 group-hover:bg-muted"
                  }`}
                />
                <span
                  className={`transition-colors ${
                    isActive
                      ? "text-fg short:underline short:decoration-accent short:decoration-2 short:underline-offset-[6px]"
                      : "text-subtle group-hover:text-fg"
                  }`}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
