import type { ReactNode } from "react";

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-12 first:pt-0 lg:py-14">
      <header className="mb-10 flex items-center gap-4">
        <span className="font-mono text-xs text-accent tabular-nums">{String(index).padStart(2, "0")}</span>
        <h2 id={`${id}-title`} className="text-sm font-medium tracking-[0.14em] text-fg uppercase">
          {title}
        </h2>
        <span aria-hidden="true" className="h-px flex-1 bg-border" />
      </header>
      {children}
    </section>
  );
}

export function Tag({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "strong" }) {
  return (
    <li
      className={`rounded-md border px-2 py-1 font-mono text-[12px] leading-none ${
        tone === "strong" ? "border-border-strong text-fg" : "border-border text-muted"
      }`}
    >
      {children}
    </li>
  );
}

export function TagList({ items, label, tone }: { items: readonly string[]; label: string; tone?: "default" | "strong" }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <Tag key={t} tone={tone}>
          {t}
        </Tag>
      ))}
    </ul>
  );
}

export const buttonPrimary =
  "inline-flex h-10 items-center gap-2 rounded-lg bg-fg px-4 text-sm font-medium text-bg transition-opacity hover:opacity-90";
export const buttonSecondary =
  "inline-flex h-10 items-center gap-2 rounded-lg border border-border px-4 text-sm font-medium text-fg transition-colors hover:border-border-strong hover:bg-surface-2";
export const iconButton =
  "inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-border-strong hover:text-fg";
