"use client";
import { useEffect, useState } from "react";
import { AdminAnnouncement, AdminStatus } from "@/lib/admin-types";
import Link from "next/link";
import { AdminHeader } from "@/components/admin/admin-header";
import { StatusBadge, PentingBadge } from "@/components/admin/status-badge";
import { semuaPengumuman,
          hapusPengumuman,
          ubahStatus,
 } from "@/lib/admin-store";

/**
 * KERANGKA daftar pengumuman admin.
 *
 * TODO (Anda):
 * 1. Ubah ke client component bila ingin state (tambah/edit/hapus langsung).
 * 2. Pasang handler untuk tombol Ubah, Hapus, Terbitkan/Jadikan Aktif.
 * 3. Tampilkan filter/status bila diperlukan (Draf / Terbit / Aktif).
 */
export default function AdminPengumumanPage() {
  const [daftar, setDaftar] = useState<AdminAnnouncement[]>([]);

  useEffect(() => {
    setDaftar(semuaPengumuman());
  }, []);
  
  function muatUlang() {
    setDaftar(semuaPengumuman());
  }

  function handleHapus(id: string) {
    if (!window.confirm("Hapus pengumuman ini?")) return;
    hapusPengumuman(id);
    muatUlang();
  }

  function handleStatus(id: string, status: AdminStatus) {
    ubahStatus(id, status);
    muatUlang();
  }
  return (
    <div>
      <AdminHeader title="Pengumuman" subtitle="Kelola pengumuman website" />

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted">{daftar.length} pengumuman</p>
        <Link href="/admin/pengumuman/baru/" className="btn-primary">
          + Buat Pengumuman
        </Link>
      </div>

      {/* Wadah gulir horizontal: tabel 5 kolom pasti meluap di ponsel, jadi
          digulir di dalam wadah alih-alih memicu gulir mendatar halaman. */}
      <div
        className="mt-6 overflow-x-auto rounded-card border border-ink/10 bg-paper"
        tabIndex={0}
        role="region"
        aria-label="Daftar pengumuman"
      >
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-ink/10 bg-paper2/50 text-xs uppercase tracking-label text-muted">
            <tr>
              <th className="px-5 py-3">Judul</th>
              <th className="px-5 py-3">Kategori</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Tanggal</th>
              <th className="px-5 py-3">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/5">
            {daftar.map((item) => (
              <tr key={item.id}>
                <td className="px-5 py-4">
                  <p className="font-medium">{item.judul}</p>
                  {item.penting ? (
                    <span className="mt-1 inline-block">
                      <PentingBadge />
                    </span>
                  ) : null}
                </td>
                <td className="px-5 py-4 text-muted">{item.kategori || "—"}</td>
                <td className="px-5 py-4">
                  <StatusBadge status={item.status} />
                </td>
                <td className="px-5 py-4 text-muted tabular-nums">{item.tanggalPublikasi}</td>
                <td className="px-5 py-4">
                  <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/admin/pengumuman/${item.id}/`}
                    className="text-xs font-semibold uppercase tracking-label text-ink hover:text-gold-700"
                  >
                    Ubah
                  </Link>
                  {item.status !== "Aktif" ? (
                  <button
                    type="button"
                    onClick={() => handleStatus(item.id, "Aktif")}
                    className="text-xs font-semibold uppercase tracking-label text-forest-700 hover:text-forest-900"
                    >
                      Aktif
                    </button>
            ) : null}
            <button
              type="button"
              onClick={() => handleHapus(item.id)}
              className="text-xs font-semibold uppercase tracking-label text-red-700 hover:text-red-800"
              >
                Hapus
              </button>
              </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
