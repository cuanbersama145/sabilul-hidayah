"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { keluar } from "@/lib/admin-session";

/**
 * Daftar menu. Entri dengan `tersedia: false` ditampilkan sebagai teks
 * dinonaktifkan (sesuai keputusan: menu lain belum dibuat).
 */
const MENU: { label: string; href: string; tersedia: boolean }[] = [
  { label: "Dashboard", href: "/admin/", tersedia: true },
  { label: "Pengumuman", href: "/admin/pengumuman/", tersedia: true },
  { label: "Aktif", href: "#", tersedia: false },
  { label: "Berita dan Artikel", href: "#", tersedia: false },
  { label: "Galeri dan Media", href: "#", tersedia: false },
  { label: "Pengguna dan Hak Akses", href: "#", tersedia: false },
  { label: "Pengaturan Website", href: "#", tersedia: false },
];

function NavItems({
  pathname,
  onPilih,
}: {
  pathname: string;
  onPilih?: () => void;
}) {
  function adalahAktif(href: string) {
    return (
      pathname === href ||
      (href !== "/admin/" && pathname.startsWith(href))
    );
  }

  return (
    <nav className="space-y-1" aria-label="Navigasi admin">
      {MENU.map((item) =>
        item.tersedia ? (
          <Link
            key={item.label}
            href={item.href}
            aria-current={adalahAktif(item.href) ? "page" : undefined}
            onClick={onPilih}
            className={
              adalahAktif(item.href)
                ? "block rounded-xl bg-paper/10 px-4 py-2.5 text-sm text-paper"
                : "block rounded-xl px-4 py-2.5 text-sm text-paper/75 transition hover:bg-paper/10 hover:text-paper"
            }
          >
            {item.label}
          </Link>
        ) : (
          <span
            key={item.label}
            aria-disabled="true"
            className="block cursor-not-allowed rounded-xl px-4 py-2.5 text-sm text-paper/30"
          >
            {item.label}
          </span>
        ),
      )}
    </nav>
  );
}

function TombolKeluar({ onPilih }: { onPilih?: () => void }) {
  const router = useRouter();
  function handleKeluar() {
    keluar();
    onPilih?.();
    router.push("/admin/login/");
  }
  return (
    <button
      type="button"
      onClick={handleKeluar}
      className="block w-full rounded-xl px-4 py-2.5 text-left text-sm text-paper/60 transition hover:bg-paper/10 hover:text-paper"
    >
      Keluar
    </button>
  );
}

export function AdminSidebar() {
  const pathname = usePathname();
  const [terbuka, setTerbuka] = useState(false);

  // Tutup panel tiap pindah halaman.
  useEffect(() => {
    setTerbuka(false);
  }, [pathname]);

  function handlePilih() {
    setTerbuka(false);
  }

  return (
    <>
      {/* Bar atas mobile: satu-satunya navigasi saat sidebar tersembunyi. */}
      <div className="sticky top-0 z-20 flex items-center justify-between border-b border-ink/10 bg-forest-950 px-4 py-3 text-paper lg:hidden">
        <p className="font-display text-base tracking-tight">Area Admin</p>
        <button
          type="button"
          onClick={() => setTerbuka(true)}
          aria-expanded={terbuka}
          aria-controls="menu-admin-seluler"
          className="rounded-lg border border-paper/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-label text-paper/85 transition hover:bg-paper/10"
        >
          Menu
        </button>
      </div>

      {/* Panel menu mobile (sheet dari kanan). */}
      {terbuka ? (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu admin"
        >
          <button
            type="button"
            aria-label="Tutup menu"
            onClick={() => setTerbuka(false)}
            className="absolute inset-0 bg-ink/50"
          />
          <div
            id="menu-admin-seluler"
            className="absolute right-0 top-0 flex h-full w-64 flex-col border-l border-paper/10 bg-forest-950 text-paper"
          >
            <div className="flex items-center justify-between border-b border-paper/10 px-4 py-4">
              <p className="font-display text-lg tracking-tight">
                Sabilul Hidayah
              </p>
              <button
                type="button"
                onClick={() => setTerbuka(false)}
                aria-label="Tutup menu"
                className="rounded-lg border border-paper/20 px-2.5 py-1 text-xs text-paper/85 transition hover:bg-paper/10"
              >
                Tutup
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <NavItems pathname={pathname} onPilih={handlePilih} />
            </div>
            <div className="border-t border-paper/10 p-4">
              <TombolKeluar onPilih={handlePilih} />
            </div>
          </div>
        </div>
      ) : null}

      {/* Sidebar permanen di desktop. */}
      <aside className="hidden w-64 shrink-0 border-r border-ink/10 bg-forest-950 text-paper lg:flex lg:flex-col">
        <div className="border-b border-paper/10 px-6 py-5">
          <p className="font-display text-lg tracking-tight">Sabilul Hidayah</p>
          <p className="mt-1 text-[0.65rem] uppercase tracking-label text-gold-300">
            Area Admin
          </p>
        </div>
        <div className="flex-1 p-4">
          <NavItems pathname={pathname} />
        </div>
        <div className="border-t border-paper/10 p-4">
          <TombolKeluar />
        </div>
      </aside>
    </>
  );
}
