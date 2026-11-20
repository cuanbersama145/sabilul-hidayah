import type { AdminStatus } from "@/lib/admin-types";

/**
 * Badge status untuk daftar admin.
 * TODO (Anda): sesuaikan kombinasi warna bila perlu.
 */
const GAYA_STATUS: Record<AdminStatus, string> = {
  Draf: "border-ink/15 bg-ink/5 text-muted",
  Terbit: "border-gold-600/30 bg-gold-100 text-gold-700",
  Aktif: "border-forest-600/30 bg-forest-900 text-paper",
};

export function StatusBadge({ status }: { status: AdminStatus }) {
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-label ${GAYA_STATUS[status]}`}
    >
      {status}
    </span>
  );
}

/** Penanda "Penting" — hanya tampil di daftar admin. */
export function PentingBadge() {
  return (
    <span className="inline-flex rounded-full border border-gold-600/40 bg-gold-500/15 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-label text-gold-700">
      Penting
    </span>
  );
}
