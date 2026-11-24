"use client";

import { Fragment, useCallback, useEffect, useId, useMemo, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { profile, sections } from "@/content/profile";
import { ArrowUpRight, Check, Copy, Download, GitHub, Hash, LinkedIn, Menu, Moon, Search, Sun } from "./icons";
import { toggleTheme, useTheme } from "./theme";

const OPEN_EVENT = "command-menu:open";

export function openCommandMenu() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

const noopSubscribe = () => () => {};

/** "⌘" on Apple platforms, "Ctrl" elsewhere. Server renders "⌘". */
export function useModKey() {
  return useSyncExternalStore(
    noopSubscribe,
    () => (/Mac|iPhone|iPad|iPod/.test(navigator.userAgent) ? "⌘" : "Ctrl"),
    () => "⌘",
  );
}

type Command = {
  id: string;
  group: "Navigate" | "Actions" | "Links";
  label: string;
  keywords?: string;
  icon: ReactNode;
  /** Return "stay" to keep the menu open after running. */
  run: () => void | "stay";
};

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function goTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

export function CommandMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const theme = useTheme();
  const listId = useId();

  const close = useCallback(() => dialogRef.current?.close(), []);

  const open = useCallback(() => {
    const d = dialogRef.current;
    if (!d || d.open) return;
    setQuery("");
    setActive(0);
    setCopied(false);
    listRef.current?.scrollTo({ top: 0 });
    d.showModal();
    inputRef.current?.focus();
  }, []);

  const commands = useMemo<Command[]>(
    () => [
      ...sections.map<Command>((s) => ({
        id: `go-${s.id}`,
        group: "Navigate",
        label: s.label,
        keywords: "section jump go",
        icon: <Hash />,
        run: () => goTo(s.id),
      })),
      {
        id: "copy-email",
        group: "Actions",
        label: copied ? "Email copied" : "Copy email address",
        keywords: `contact mail ${profile.email}`,
        icon: copied ? <Check /> : <Copy />,
        run: () => {
          navigator.clipboard?.writeText(profile.email).then(() => setCopied(true));
          return "stay";
        },
      },
      {
        id: "resume",
        group: "Actions",
        label: "Download résumé",
        keywords: "resume cv pdf",
        icon: <Download />,
        run: () => {
          const a = document.createElement("a");
          a.href = profile.resume;
          a.download = "";
          a.click();
        },
      },
      {
        id: "theme",
        group: "Actions",
        label: `Switch to ${theme === "dark" ? "light" : "dark"} theme`,
        keywords: "theme dark light mode appearance",
        icon: theme === "dark" ? <Sun /> : <Moon />,
        run: () => {
          toggleTheme();
          return "stay";
        },
      },
      {
        id: "github",
        group: "Links",
        label: "GitHub",
        keywords: "code source repositories",
        icon: <GitHub />,
        run: () => void window.open(profile.links.github, "_blank", "noopener"),
      },
      {
        id: "linkedin",
        group: "Links",
        label: "LinkedIn",
        keywords: "profile connect",
        icon: <LinkedIn />,
        run: () => void window.open(profile.links.linkedin, "_blank", "noopener"),
      },
      {
        id: "maintainease",
        group: "Links",
        label: "MaintainEase (live product)",
        keywords: "saas project demo",
        icon: <ArrowUpRight />,
        run: () => void window.open("https://maintainease.in", "_blank", "noopener"),
      },
    ],
    [theme, copied],
  );

  // After copying, show the confirmation briefly, then dismiss.
  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => dialogRef.current?.close(), 700);
    return () => window.clearTimeout(id);
  }, [copied]);

  const results = useMemo(() => {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!terms.length) return commands;
    return commands.filter((c) => {
      const hay = `${c.label} ${c.group} ${c.keywords ?? ""}`.toLowerCase();
      return terms.every((t) => hay.includes(t));
    });
  }, [commands, query]);

  const activeIndex = Math.min(active, Math.max(results.length - 1, 0));

  const run = (cmd: Command) => {
    if (cmd.run() !== "stay") close();
  };

  // Global shortcuts: ⌘K / Ctrl+K toggles, "/" opens.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const typing = !!t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName));
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (dialogRef.current?.open) close();
        else open();
      } else if (e.key === "/" && !typing && !dialogRef.current?.open) {
        e.preventDefault();
        open();
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_EVENT, open);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_EVENT, open);
    };
  }, [open, close]);

  // Keep the highlighted option visible while arrowing through a long list.
  useEffect(() => {
    // The first option sits under its group heading: scroll fully to the top so the heading shows too.
    if (activeIndex === 0) listRef.current?.scrollTo({ top: 0 });
    else document.getElementById(`${listId}-${activeIndex}`)?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, listId]);

  const onInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const last = results.length - 1;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive(activeIndex >= last ? 0 : activeIndex + 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive(activeIndex <= 0 ? last : activeIndex - 1);
    } else if (e.key === "Home" && e.ctrlKey) {
      setActive(0);
    } else if (e.key === "End" && e.ctrlKey) {
      setActive(last);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const cmd = results[activeIndex];
      if (cmd) run(cmd);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="command-menu"
      aria-label="Command menu"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="overflow-hidden rounded-xl border border-border-strong bg-surface shadow-2xl shadow-black/40">
        <div className="flex items-center gap-3 border-b border-border px-4">
          <Search className="shrink-0 text-subtle" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onInputKey}
            placeholder="Type a command or search…"
            role="combobox"
            aria-expanded="true"
            aria-controls={listId}
            aria-activedescendant={results.length ? `${listId}-${activeIndex}` : undefined}
            aria-autocomplete="list"
            autoComplete="off"
            spellCheck={false}
            className="h-12 w-full bg-transparent text-[15px] text-fg placeholder:text-subtle focus:outline-none focus-visible:outline-none"
          />
          <kbd className="hidden rounded border border-border px-1.5 py-0.5 font-mono text-[11px] text-subtle sm:block">
            esc
          </kbd>
        </div>

        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          aria-label="Commands"
          className="max-h-[min(22rem,60vh)] overflow-y-auto overscroll-contain p-2 [scrollbar-color:var(--border-strong)_transparent] [scrollbar-width:thin]"
        >
          {results.length === 0 && (
            <li role="presentation" className="px-3 py-8 text-center text-sm text-subtle">
              No results for “{query}”
            </li>
          )}
          {results.map((cmd, i) => {
            const header =
              i === 0 || results[i - 1].group !== cmd.group ? (
                <li
                  role="presentation"
                  className="px-3 pt-3 pb-1.5 font-mono text-[11px] tracking-wide text-subtle uppercase first:pt-1"
                >
                  {cmd.group}
                </li>
              ) : null;
            const selected = i === activeIndex;
            return (
              <Fragment key={cmd.id}>
                {header}
                <li
                  id={`${listId}-${i}`}
                  role="option"
                  aria-selected={selected}
                  onMouseMove={() => !selected && setActive(i)}
                  onClick={() => run(cmd)}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    selected ? "bg-surface-2 text-fg" : "text-muted"
                  }`}
                >
                  <span className={selected ? "text-accent" : "text-subtle"}>{cmd.icon}</span>
                  <span className="flex-1">{cmd.label}</span>
                  {selected && <span className="font-mono text-[11px] text-subtle">↵</span>}
                </li>
              </Fragment>
            );
          })}
        </ul>

        <div className="flex items-center justify-between border-t border-border px-4 py-2.5 font-mono text-[11px] text-subtle">
          <span>↑↓ navigate · ↵ select</span>
          <span>{profile.name}</span>
        </div>
      </div>
      <p aria-live="polite" className="sr-only">
        {copied ? "Email address copied to clipboard" : ""}
      </p>
    </dialog>
  );
}

/** Button that opens the menu, showing the platform-correct shortcut. */
export function CommandMenuTrigger({ variant = "full" }: { variant?: "full" | "compact" }) {
  const mod = useModKey();

  if (variant === "compact") {
    return (
      <button
        type="button"
        onClick={openCommandMenu}
        aria-label="Open menu"
        className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-border-strong hover:text-fg"
      >
        <Menu />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={openCommandMenu}
      aria-keyshortcuts="Meta+K Control+K"
      className="inline-flex h-9 items-center gap-2.5 rounded-lg border border-border pr-2 pl-3 text-sm text-subtle transition-colors hover:border-border-strong hover:text-fg"
    >
      <Search />
      <span>Quick actions</span>
      <kbd className="ml-1 rounded border border-border bg-surface-2 px-1.5 py-0.5 font-mono text-[11px]" suppressHydrationWarning>
        {mod} K
      </kbd>
    </button>
  );
}
