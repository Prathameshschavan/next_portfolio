type Step = { label: string; width: number; accent?: boolean };
type Row = { label: string; steps: Step[]; visibleAt: number; note: string };

// Schematic only: segment widths show order and relative cost, not measurements.
const rows: Row[] = [
  {
    label: "Before — client-side rendering",
    steps: [
      { label: "HTML", width: 9 },
      { label: "JS download", width: 27 },
      { label: "Execute", width: 15 },
      { label: "Fetch data", width: 25 },
      { label: "Render", width: 12, accent: true },
    ],
    visibleAt: 88,
    note: "Content appears at the very end",
  },
  {
    label: "After — server-side rendering",
    steps: [
      { label: "Fetch + render on server", width: 34 },
      { label: "HTML", width: 11, accent: true },
      { label: "JS download", width: 27 },
      { label: "Hydrate", width: 13 },
    ],
    visibleAt: 45,
    note: "Content arrives with the first response",
  },
];

/** Position at the end of the step that makes content visible, including the 2px gaps between steps. */
function markerLeft(row: Row) {
  let sum = 0;
  let gaps = 0;
  for (const s of row.steps) {
    if (sum >= row.visibleAt) break;
    sum += s.width;
    gaps += 1;
  }
  return `calc(${sum}% + ${(gaps - 1) * 2}px)`;
}

export function SsrDiagram() {
  return (
    <figure className="@container">
      <div className="space-y-7">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="mb-2.5 flex items-baseline justify-between gap-4">
              <span className="font-mono text-[11px] tracking-wide text-muted uppercase">{row.label}</span>
              <span className="hidden font-mono text-[11px] text-subtle @md:inline">{row.note}</span>
            </div>

            <div className="relative">
              <ol className="flex h-8 gap-0.5" aria-label={`${row.label}, in order`}>
                {row.steps.map((s) => (
                  <li
                    key={s.label}
                    style={{ width: `${s.width}%` }}
                    title={s.label}
                    className={`flex min-w-0 items-center rounded-[5px] border px-2 font-mono text-[10.5px] ${
                      s.accent
                        ? "border-accent/50 bg-accent-soft text-accent"
                        : "border-border bg-surface-2 text-muted"
                    }`}
                  >
                    <span className="hidden truncate @md:block">{s.label}</span>
                    <span className="sr-only @md:hidden">{s.label}</span>
                  </li>
                ))}
              </ol>

              {/* "Content visible" marker */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-1.5 -bottom-1.5 w-px bg-accent"
                style={{ left: markerLeft(row) }}
              >
                <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-accent" />
              </div>
            </div>

            <p className="mt-2 font-mono text-[11px] text-subtle @md:hidden">
              {row.steps.map((s) => s.label).join(" → ")}
            </p>
            <p className="mt-1.5 font-mono text-[11px] text-accent" style={{ paddingLeft: `max(0px, calc(${row.visibleAt}% - 6.5rem))` }}>
              <span className="@md:hidden">● </span>content visible
            </p>
          </div>
        ))}
      </div>

      <figcaption className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4 font-mono text-[11px] text-subtle">
        <span>time →</span>
        <span>Schematic, not to scale · measured result: ~20% faster loads</span>
      </figcaption>
    </figure>
  );
}
