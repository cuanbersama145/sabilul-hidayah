"use client";

import { useState } from "react";

export function CopyButton({
  value,
  label = "Salin",
}: {
  value: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        className="rounded-full border border-paper/25 px-4 py-1.5 text-xs font-semibold text-paper/80 transition hover:border-paper/50 hover:text-paper"
      >
        {copied ? "Tersalin" : label}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "Nomor rekening tersalin ke papan klip." : ""}
      </span>
    </>
  );
}
