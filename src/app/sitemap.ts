import type { MetadataRoute } from "next";
import { announcements } from "@/content/announcements";
import { nav, site } from "@/content/site";

// Bangkitkan saat build, lalu segarkan tiap jam agar tulisan baru ikut terdaftar.
export const revalidate = 3600;

// Domain dasar diambil dari satu tempat: src/content/site.ts → site.url.
// Ganti nilai itu saat domain resmi sudah ada (lihat bug.md BUG-016).
const base = site.url.replace(/\/+$/, "");

const staticRoutes = [
  { path: "/", priority: 1 },
  { path: "/profil/", priority: 0.8 },
  { path: "/pendidikan/", priority: 0.8 },
  { path: "/pendaftaran/", priority: 0.9 },
  { path: "/pengumuman/", priority: 0.8 },
  { path: "/donasi/", priority: 0.7 },
  { path: "/kontak/", priority: 0.6 },
  { path: "/tempe/", priority: 0.5 },
];

// Halaman yang sah untuk sitemap walau sengaja tidak ada di navigasi utama
// (Tempe ditempatkan lewat donasi, profil, footer, dan beranda — bukan menu).
const diLuarNav = new Set(["/tempe/"]);

// Semua rute publik harus cocok dengan nav + detail pengumuman.
const known = new Set(nav.map((item) => item.href));
const missing = staticRoutes
  .map((route) => route.path)
  .filter((path) => path !== "/" && !known.has(path) && !diLuarNav.has(path));
if (missing.length > 0) {
  throw new Error(`sitemap: rute tidak ada di nav: ${missing.join(", ")}`);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route.path}`,
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...announcements.map((item) => ({
      url: `${base}/pengumuman/${item.slug}/`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
