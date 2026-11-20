import { announcements } from "@/content/announcements";
import type {
  AdminAnnouncement,
  AdminAnnouncementForm,
  AdminStatus,
} from "./admin-types";

/**
 * DATA AWAL (seed).
 * Delapan pengumuman existing dipakai sebagai contoh dengan status "Aktif".
 * TODO (Anda): bila mau, ganti fungsi-fungsi di bawah dengan state React
 * Context atau localStorage agar perubahan bertahan setelah refresh.
 */
export const seedPengumuman: AdminAnnouncement[] = announcements.map((item) => ({
  id: item.slug,
  judul: item.title,
  kategori: item.category,
  ringkasan: item.excerpt,
  isi: item.body,
  gambarSampul: item.image ?? "",
  lampiranPdf: "",
  tanggalPublikasi: item.date,
  penting: false,
  status: "Aktif",
}));
const STORAGE_KEY = "sh_admin_pengumuman";

function bacaDariStorage(): AdminAnnouncement[] {
  if (typeof window === "undefined") return seedPengumuman;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seedPengumuman));
      return seedPengumuman;
    }
    const hasil = JSON.parse(raw);
    return Array.isArray(hasil) ? (hasil as AdminAnnouncement[]) : seedPengumuman;
  } catch {
    return seedPengumuman
  }
}

function tulisKeStorage(daftar: AdminAnnouncement[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(daftar));
  } catch {
  }
}
function buatId(judul: string): string {
  const slug = judul
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || `pegumuman-${Date.now()}`;
  
}
/** TODO (Anda): kembalikan seluruh pengumuman dari sumber data Anda. */
export function semuaPengumuman(): AdminAnnouncement[] {
  return bacaDariStorage();
}

/** TODO (Anda): cari berdasarkan id; kembalikan undefined bila tidak ada. */
export function cariPengumuman(id: string): AdminAnnouncement | undefined {
  return bacaDariStorage().find((item) => item.id === id);
}

/**
 * TODO (Anda): buat id unik, tentukan status dari tombol yang ditekan,
 * lalu simpan ke sumber data Anda.
 */
export function simpanPengumuman(
  data: AdminAnnouncementForm,
  status: AdminStatus,
): AdminAnnouncement {
  const daftar = bacaDariStorage();
  const item: AdminAnnouncement ={
    ...data,
    id: buatId(data.judul),
    status,
  
};
tulisKeStorage([item, ...daftar]);
return item;
}
/** TODO (Anda): hapus dari sumber data Anda. */
export function hapusPengumuman(id: string): void {
  tulisKeStorage(bacaDariStorage().filter((item) => item.id !== id));
}

/** TODO (Anda): ubah status sebuah pengumuman. */
export function ubahStatus(id: string, status: AdminStatus): void {
 tulisKeStorage(
  bacaDariStorage().map((item)=>
    item.id ===id ? { ...item, status } : item,
),
 );

}

export function perbaruiPengumuman(
  id: string,
  data: AdminAnnouncementForm,
  status: AdminStatus,
): AdminAnnouncement | undefined {
  const daftar = bacaDariStorage();
  const indeks = daftar.findIndex((item) => item.id === id);
  if (indeks === -1) return undefined;

  const lama = daftar[indeks];
  const hasil: AdminAnnouncement ={
    ...lama,
    ...data,
    status: status ?? lama.status,
  };

const baru = [...daftar];
baru[indeks] = hasil;
tulisKeStorage(baru);
return hasil;
}