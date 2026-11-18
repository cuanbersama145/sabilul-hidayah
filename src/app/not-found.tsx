import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Halaman tidak ditemukan",
  description:
    "Alamat yang Anda buka tidak tersedia. Kembali ke beranda atau lihat pengumuman terbaru pondok.",
};

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <div className="wrap max-w-xl">
        <p className="label">404</p>
        <h1 className="mt-4 text-4xl tracking-tight md:text-5xl">
          Halaman tidak ditemukan.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted">
          Alamat yang Anda buka tidak tersedia atau sudah dipindahkan. Silakan
          kembali ke beranda atau lihat pengumuman terbaru.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">
            Kembali ke beranda
          </Link>
          <Link href="/pengumuman/" className="btn-secondary">
            Lihat pengumuman
          </Link>
        </div>
      </div>
    </section>
  );
}
