"use client";

import { Moon, Sun } from "./icons";
import { toggleTheme, useTheme } from "./theme";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className={`inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-border-strong hover:text-fg ${className}`}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
