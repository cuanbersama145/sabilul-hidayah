import Link from "next/link";

/**
 * Penanda kecil berbentuk bintang delapan. Dipakai sebagai titik bulat di
 * dalam teks banyak halaman, bukan sebagai logo. Tetap SVG supaya ringan
 * dan mengikuti warna teks di sekitarnya (currentColor).
 */
export function StarMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="4.6"
        y="4.6"
        width="14.8"
        height="14.8"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <rect
        x="4.6"
        y="4.6"
        width="14.8"
        height="14.8"
        stroke="currentColor"
        strokeWidth="1.2"
        transform="rotate(45 12 12)"
      />
      <circle cx="12" cy="12" r="2.1" fill="currentColor" />
    </svg>
  );
}

/**
 * Logo pondok. Bagian gambar memakai emblem resmi yang sudah dibuat
 * transparan; teksnya tetap ditulis di sini supaya tajam di semua ukuran.
 *
 * Dua warna gambar: versi gelap untuk latar terang (header), versi terang
 * untuk latar gelap (footer). Kontras versi terang di atas latar footer
 * sudah diuji 6,35:1.
 */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const isLight = tone === "light";

  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label="Sabilul Hidayah, kembali ke beranda"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-baru.png"
        alt="Logo Pondok Pesantren Salafi Sabilul Hidayah"
        width={36}
        height={36}
        loading="eager"
        decoding="async"
        className="h-9 w-9 shrink-0 object-contain"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.35rem] font-semibold tracking-tight ${
            isLight ? "text-paper" : "text-ink"
          }`}
        >
          Sabilul Hidayah
        </span>
        <span
          className={`mt-1 text-[0.62rem] font-semibold uppercase tracking-label ${
            isLight ? "text-paper/55" : "text-muted"
          }`}
        >
          Pondok Pesantren Salafi
        </span>
      </span>
    </Link>
  );
}
