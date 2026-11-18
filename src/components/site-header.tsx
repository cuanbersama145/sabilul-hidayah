"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, waLink } from "@/content/site";
import { Logo } from "./logo";

const normalize = (path: string) => path.replace(/\/+$/, "") || "/";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = normalize(usePathname() ?? "/");

  const isActive = (href: string) => {
    const target = normalize(href);
    if (target === "/") return pathname === "/";
    return pathname === target || pathname.startsWith(`${target}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 shadow-[0_1px_0_0_rgba(22,32,27,0.04)] backdrop-blur-md">
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigasi utama">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-ink"
                  : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px bg-gold-600 transition-all duration-200 ${
                  isActive(item.href) ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink(
              "Assalamu'alaikum, saya ingin bertanya tentang pendaftaran santri baru di Pondok Pesantren Sabilul Hidayah.",
            )}
            target="_blank"
            rel="noreferrer"
            className="btn-primary hidden sm:inline-flex"
          >
            Hubungi Panitia
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-px w-5 bg-current transition-all duration-200 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-5 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-5 bg-current transition-all duration-200 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className={`border-t border-ink/10 bg-paper lg:hidden ${
          open ? "anim-buka" : ""
        }`}
      >
        <nav className="wrap flex flex-col py-3" aria-label="Navigasi seluler">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`border-b border-ink/5 py-3.5 text-base ${
                isActive(item.href) ? "text-ink" : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={waLink(
              "Assalamu'alaikum, saya ingin bertanya tentang pendaftaran santri baru di Pondok Pesantren Sabilul Hidayah.",
            )}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-5 mb-2"
          >
            Hubungi Panitia
          </a>
        </nav>
      </div>
    </header>
  );
}
