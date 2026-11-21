"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AdminHeader } from "@/components/admin/admin-header";
import { semuaPengumuman } from "@/lib/admin-store";

/**
 * Dashboard.
 * Statistik dihitung dari localStorage lewat useEffect, karena data hanya
 * tersedia di sisi klien. Tanpa useEffect nilainya selalu memantul ke data
 * awal (8 pengumuman Aktif) saat dirender di server.
 */
export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    total: 0,
    aktif: 0,
    terbit: 0,
    draf: 0,
  });

  useEffect(() => {
    const semua = semuaPengumuman();
    setStats({
      total: semua.length,
      aktif: semua.filter((item) => item.status === "Aktif").length,
      terbit: semua.filter((item) => item.status === "Terbit").length,
      draf: semua.filter((item) => item.status === "Draf").length,
    });
  }, []);

  const kartu = [
    { label: "Total pengumuman", nilai: stats.total },
    { label: "Aktif", nilai: stats.aktif },
    { label: "Terbit", nilai: stats.terbit },
    { label: "Draf", nilai: stats.draf },
  ];

  return (
    <div>
      <AdminHeader title="Dashboard" subtitle="Ringkasan website pondok" />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kartu.map((item) => (
          <div key={item.label} className="card">
            <p className="text-xs uppercase tracking-label text-muted">
              {item.label}
            </p>
            <p className="mt-3 font-display text-3xl tracking-tight tabular-nums">
              {item.nilai}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/admin/pengumuman/" className="btn-secondary">
          Kelola pengumuman
        </Link>
        <Link href="/admin/pengumuman/baru/" className="btn-primary">
          Buat pengumuman
        </Link>
      </div>

      <p className="mt-8 text-sm text-muted">
        Pratinjau rancangan form admin, bukan sistem publikasi aktif.
      </p>
    </div>
  );
}
