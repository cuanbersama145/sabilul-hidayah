/**
 * Kerangka tipe untuk prototipe admin.
 *
 * Keputusan brainstorming yang dipakai di sini:
 * - Kategori = 4 kategori yang sama dengan filter halaman pengumuman publik.
 * - Status "Draf | Terbit | Aktif" hanya dipakai di admin (bukan di publik).
 * - `penting` hanya muncul sebagai badge di daftar admin.
 * - `isi` berupa array paragraf, bukan rich text.
 * - `gambarSampul` dan `lampiranPdf` berupa nama/URL file; tidak diunggah sungguhan.
 */
export type AdminStatus = "Draf" | "Terbit" | "Aktif";

export const ADMIN_CATEGORIES = [
  "Penerimaan Santri",
  "Akademik",
  "Kegiatan",
  "Jadwal dan Libur",
] as const;

export type AdminCategory = (typeof ADMIN_CATEGORIES)[number];

export type AdminAnnouncement = {
  /** Unik. Boleh sama dengan slug di data publik. */
  id: string;
  judul: string;
  /** Kosong berarti belum dipilih di form. */
  kategori: AdminCategory | "";
  ringkasan: string;
  /** Satu entri = satu paragraf. */
  isi: string[];
  gambarSampul: string;
  /** Nama file PDF saja, tanpa unggah sungguhan. */
  lampiranPdf: string;
  /** Format YYYY-MM-DD. */
  tanggalPublikasi: string;
  penting: boolean;
  status: AdminStatus;
};

/** Bentuk data yang dikirim form; id dan status ditentukan oleh pemanggil. */
export type AdminAnnouncementForm = Omit<AdminAnnouncement, "id" | "status">;
