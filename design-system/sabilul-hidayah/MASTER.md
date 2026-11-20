# Design System — Sabilul Hidayah

> Disusun dari token dan komponen yang **sudah ada** di proyek, diperkaya
> panduan skill `ui-ux-pro-max`. Dokumen ini adalah *source of truth* untuk
> konsistensi — bukan cetakan baru. Jangan mengganti identitas visual tanpa
> permintaan eksplisit.

## 1. Konteks produk

- **Jenis:** situs informasi pondok pesantren salafi — profil, pendidikan,
  pendaftaran, pengumuman, donasi.
- **Audiens:** wali santri, calon santri, donatur, masyarakat umum; mayoritas
  diakses lewat ponsel.
- **Nada:** tenang, ramah, tepercaya, sederhana; tidak promosional berlebihan.
- **Platform:** web responsif. Area admin terpisah di `/admin/`.
- **Stack:** Next.js 15 App Router, React 19, Tailwind CSS 3, TypeScript.

## 2. Arah visual

Karakter yang sudah terbentuk: **editorial hangat + geometri Islam yang halus**.

- Permukaan kertas (`paper`) dengan aksen hijau hutan tua dan emas.
- Serif untuk judul (kesan kitab/akademik), sans modern untuk tubuh teks.
- Motif girih sebagai dekorasi kontras sangat rendah, bukan elemen interaktif.
- Animasi masuk halus, selalu bisa dimatikan.

**Anti-pattern yang dihindari:** gradasi ungu/pink khas AI, emoji sebagai ikon,
animasi berlebih, bayangan tebal bertumpuk, teks abu-abu tipis di latar gelap,
dan perubahan layout saat hover/focus.

## 3. Warna

| Peran | Token | Hex | Kontras terukur |
|---|---|---|---|
| Teks utama | `ink` | `#16201B` | 15,10:1 di atas `paper` |
| Teks sekunder | `muted` | `#5B6A60` | 5,16:1 di `paper`; 4,57:1 di `paper2` |
| Aksen / label | `gold-700` | `#8A6220` | 4,93:1 di `paper`; 4,64:1 di `gold-100/60` |
| Permukaan | `paper` | `#F8F3E8` | — |
| Permukaan alternatif | `paper2` | `#EFE5D2` | — |
| Latar gelap | `forest-950` | `#061A14` | `paper` di atasnya 16,28:1 |
| Aksen di gelap | `gold-300` | `#E5CFA0` | 11,81:1 di `forest-950` |
| Teks sekunder di gelap | `paper/70 … paper/55` | — | 8,37:1 … 5,58:1 |

Catatan: `gold-600` (`#A8792A`) hanya **3,49:1** di atas `paper` — aman untuk
garis, titik, dan underline (non-teks ≥3:1), **jangan** dipakai untuk teks
body atau label kecil.

Aturan pemakaian:

- Teks ≥4,5:1; elemen non-teks (border, ikon bermakna, state) ≥3:1.
- Badge tidak boleh hanya mengandalkan warna — selalu sertakan teks/status.
- Gunakan token semantik, bukan hex baru per komponen.

## 4. Tipografi

- **Display:** `Fraunces`, weight 400–600, `opsz 9..144`;
  `font-variation-settings: "SOFT" 0, "WONK" 0` pada `h1/h2/h3`.
- **Body:** `Plus Jakarta Sans`, weight 400–700.
- `h1/h2/h3` memakai `text-wrap: balance`; paragraf `text-wrap: pretty`.
- Ukuran kunci: hero `text-[2.9rem]` → `sm:text-6xl` → `lg:text-[4.4rem]`;
  judul kartu `text-xl`–`text-2xl`; label `text-[0.65rem]` uppercase
  `tracking-label` (0,18em).

## 5. Spacing & layout

- Ritme 4/8 px. Input `px-4 py-3`; kartu `p-6`; grid `gap-5`/`gap-6`.
- Seksi `py-20 md:py-24/28`; kontainer `.wrap` = `max-w 1180px`,
  `px-5 sm:px-8`.
- Breakpoint: grid 1 kolom → 2 (`sm`) → 3 (`lg`); menu seluler < `lg`;
  sidebar admin disembunyikan < `lg`.
- Uji lebar: 375, 768, 1024, 1440 px. `body` memakai `overflow-x: clip`.

## 6. Komponen yang sudah ada (pakai ulang)

| Kelas / komponen | Peran |
|---|---|
| `.btn-primary`, `.btn-secondary`, `.btn-gold` | Tombol; `.btn` = pill, `px-6 py-3` |
| `.card` | Kartu: `rounded-card border border-ink/10 bg-paper p-6` |
| `.label`, `.eyebrow`, `.rule` | Label kecil, pill aksen, garis pemisah |
| `.link-underline` | Tautan inline dengan underline emas |
| `.kartu-timbul`, `.ikon-timbul` | Angkat halus saat hover/focus-within |
| `.gambar-sorot`, `.gambar-zoom` | Sorot + zoom gambar saat hover |
| `PageHero`, `SectionHeading` | Kepala halaman & seksi |
| `AnnouncementGallery` | Filter `aria-pressed` + grid + empty state |
| `StatusBadge`, `PentingBadge` | Status admin (selalu disertai teks) |

`rounded-card` = `1.75rem`; shadow `card` (halus) dan `soft` (hero).

## 7. Interaksi & aksesibilitas

- Focus: `:focus-visible` global = `ring-2 ring-gold-500 ring-offset-2
  ring-offset-paper`. **Jangan** menimpa dengan `focus:ring-0` pada input.
- Skip link "Lompat ke konten" sudah ada di layout utama.
- Form: label terhubung via `htmlFor`, `required`, pesan fallback `aria-live`.
- Filter/state: `aria-pressed`, `aria-current`, `aria-expanded` sesuai peran.
- Ikon: SVG (StarMark, GirihPattern), bukan emoji; elemen dekoratif
  `aria-hidden="true"`.
- Warna bukan satu-satunya penanda status.

## 8. Gerakan

- Hanya jalan di `@media (prefers-reduced-motion: no-preference)`.
- `[data-sh-anim]` + `[data-sh-tunda="1..5"]` (tunda 90 ms per langkah),
  durasi 0,75 s, easing `cubic-bezier(0.22, 0.61, 0.36, 1)`.
- `.animate-rise` (hero) juga dimatikan saat reduced motion.
- Hindari transisi yang menggeser layout (transform yang mengubah box).

## 9. Checklist sebelum kirim (web)

- [ ] Kontras teks ≥4,5:1 dan non-teks ≥3:1
- [ ] Focus keyboard terlihat di semua kontrol interaktif
- [ ] `prefers-reduced-motion` dihormati
- [ ] Tidak ada gulir mendatar di 375 px
- [ ] Target sentuh ≥24 px (WCAG 2.2 AA)
- [ ] Semua input punya label dan pesan error yang jelas
- [ ] Status tidak hanya memakai warna
- [ ] Tidak ada emoji sebagai ikon; keluarga ikon konsisten
- [ ] Empty state tersedia untuk daftar/filter

---

_Python 3 tidak terpasang di mesin ini, sehingga skrip pencarian skill tidak
dijalankan. Dokumen ini disusun dari token proyek yang aktual dan panduan
katalog skill. Untuk pencarian style/palette lanjutan, pasang Python 3 dulu,
lalu jalankan `python .opencode/skills/ui-ux-pro-max/scripts/search.py "..."`._
