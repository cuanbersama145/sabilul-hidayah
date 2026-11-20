import type { Metadata } from "next";

/**
 * Layout teratas area admin.
 *
 * Pembungkus `fixed inset-0 z-[60]` menyembunyikan header/footer publik tanpa
 * mengubah satu pun file publik. Semua halaman admin (termasuk login) akhirnya
 * berada di atas website pengunjung.
 *
 * TODO (Anda, opsional): ganti pendekatan ini dengan route group dua root
 * layout — `(website)` dan `(admin)` — bila ingin struktur yang lebih rapi.
 */
export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-paper text-ink">
      {children}
    </div>
  );
}
