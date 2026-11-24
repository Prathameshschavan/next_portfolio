"use client";

import { useSyncExternalStore } from "react";
import { THEME_STORAGE_KEY as STORAGE_KEY } from "./theme-script";

export type Theme = "dark" | "light";

const listeners = new Set<() => void>();

function read(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function useTheme() {
  return useSyncExternalStore(subscribe, read, () => "dark" as Theme);
}

export function setTheme(next: Theme) {
  const root = document.documentElement;
  // Suppress transitions for one frame so every surface swaps at once.
  root.setAttribute("data-theme-switching", "");
  root.setAttribute("data-theme", next);
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {}
  requestAnimationFrame(() => root.removeAttribute("data-theme-switching"));
  listeners.forEach((l) => l());
}

export function toggleTheme() {
  setTheme(read() === "dark" ? "light" : "dark");
}
