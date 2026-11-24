"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "./icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(id);
  }, [copied]);

  return (
    <button
      type="button"
      onClick={() => navigator.clipboard?.writeText(email).then(() => setCopied(true))}
      className="group inline-flex h-10 items-center gap-2.5 rounded-lg border border-border px-3.5 font-mono text-[13px] text-muted transition-colors hover:border-border-strong hover:text-fg"
    >
      <span className="truncate">{email}</span>
      <span className={copied ? "text-accent" : "text-subtle group-hover:text-fg"}>
        {copied ? <Check /> : <Copy />}
      </span>
      <span className="sr-only">{copied ? "Copied" : "Copy email address"}</span>
      <span aria-live="polite" className="sr-only">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </button>
  );
}
