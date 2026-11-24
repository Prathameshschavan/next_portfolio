"use client";

import { useSyncExternalStore } from "react";

const formatter = (timeZone: string) =>
  new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit", hour12: false });

function subscribe(cb: () => void) {
  const id = window.setInterval(cb, 15_000);
  return () => window.clearInterval(id);
}

/**
 * Live clock in a fixed time zone. The server snapshot is a placeholder, so the
 * prerendered shell stays static and the real time fills in after hydration.
 */
export function LocalTime({ timeZone, label }: { timeZone: string; label: string }) {
  const time = useSyncExternalStore(
    subscribe,
    () => formatter(timeZone).format(Date.now()),
    () => null,
  );

  return (
    <span className="tabular-nums">
      {label} · <span suppressHydrationWarning>{time ?? "--:--"}</span> IST
    </span>
  );
}
