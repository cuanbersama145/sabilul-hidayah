# Bug — Website Sabilul Hidayah

Berkas ini mencatat setiap bug, cacat tampilan, dan penyimpangan dari `PRD.md`.

## Cara mencatat

1. Setiap agent wajib membaca berkas ini sebelum bekerja dan memperbaruinya sebelum menyatakan pekerjaan selesai.
2. Satu bug satu ID. Format: `BUG-001`, `BUG-002`, dan seterusnya.
3. Jangan menghapus entri lama. Ubah kolom status.
4. Bug yang sudah diperbaiki tetap tercatat, dengan status `Selesai` dan catatan perbaikannya.
5. Cantumkan langkah reproduksi yang bisa dijalankan orang lain, bukan hanya "tidak berfungsi".

### Prioritas

| Kode | Arti | Tenggat |
|---|---|---|
| P1 | Merusak fungsi utama atau memblokir rilis | Sebelum rilis |
| P2 | Mengganggu pengalaman atau SEO, ada jalan sementara | Sebelum rilis |
| P3 | Kosmetik, rapi-rapi, peningkatan | Sprint berikutnya |
| P4 | Ide atau catatan kecil | Kapan saja |

### Status

`Terbuka` · `Sedang dikerjakan` · `Selesai` · `Ditunda` · `Tidak valid`

---

## Indeks

| ID | Tanggal | Prioritas | Area | Ringkasan | Status |
|---|---|---|---|---|---|
| BUG-001 | 2026-11-01 | P1 | Kontak | Nomor WhatsApp masih placeholder, semua tombol kontak mengarah ke nomor tidak aktif | Terbuka |
| BUG-002 | 2026-11-01 | P1 | Donasi | Nomor rekening masih placeholder, donasi tidak dapat masuk | Terbuka |
| BUG-003 | 2026-11-01 | P1 | Konten | Alamat pondok masih placeholder | Terbuka |
| BUG-004 | 2026-11-01 | P2 | SEO | `sitemap.xml` dan `robots.txt` belum ada | Selesai |
| BUG-005 | 2026-11-01 | P2 | Aset | Belum ada favicon dan logo resmi | Selesai |
| BUG-006 | 2026-11-01 | P3 | Tooling | Skrip `lint` tidak berfungsi karena ESLint belum terpasang | Selesai |
| BUG-007 | 2026-11-01 | P3 | Tooling | `npm run start` gagal karena `next start` tidak kompatibel dengan static export | Selesai |
| BUG-008 | 2026-11-01 | P1 | Konten | Judul pengasuh di halaman profil masih `[Nama Pengasuh]` | Selesai |
| BUG-009 | 2026-11-01 | P2 | SEO | Metadata halaman 404 sama persis dengan beranda | Selesai |
| BUG-010 | 2026-11-01 | P2 | Konten | Tiga pengumuman contoh tampil tanpa penanda bahwa isinya belum resmi | Selesai |
| BUG-011 | 2026-11-01 | P2 | Konten | Pengumuman menyebut laporan dana "tersedia di halaman donasi", padahal halaman donasi hanya menawarkan permintaan lewat WhatsApp | Selesai |
| BUG-012 | 2026-11-01 | P2 | Aksesibilitas | Navigasi aktif tanpa `aria-current`, `aria-controls` menunjuk elemen yang tidak dirender, status salin dan pesan form tidak diumumkan, label Visi/Misi/Kontak bukan heading | Selesai |
| BUG-013 | 2026-11-01 | P2 | Aksesibilitas | Kontras teks nomor langkah, hak cipta footer, placeholder form, dan nomor misi di bawah WCAG AA | Selesai |
| BUG-014 | 2026-11-01 | P3 | Konten | Pesan WhatsApp tombol seluler berbeda dari tombol desktop dan dari PRD Bagian 16.3 | Selesai |
| BUG-015 | 2026-11-01 | P2 | Konten | Klaim pondok yang belum terverifikasi ditulis sebagai fakta | Terbuka |
| BUG-016 | 2026-11-01 | P2 | SEO | URL domain `site.url` masih placeholder, dipakai sitemap dan robots | Terbuka |
| BUG-017 | 2026-11-03 | P2 | Tampilan | Pil "Pengumuman" di panel hero terpotong lengkung `.arch` | Selesai |
| BUG-018 | 2026-11-03 | P1 | Admin | Halaman `/admin/login/` memicu pengalihan berulang tanpa henti | Selesai |
| BUG-019 | 2026-11-03 | P2 | Tampilan | Beranda bisa digeser mendatar di layar 360–768 px karena animasi masuk | Selesai |
| BUG-020 | 2026-11-14 | P3 | Tampilan | Gambar hero beranda tampil raksasa dan terpotong di kedua sisi layar | Selesai |

---

## BUG-001 — Nomor WhatsApp placeholder

- **Prioritas:** P1
- **Status:** Terbuka
- **Area:** Kontak, header, footer, form pendaftaran, form donasi
- **Berkas:** `src/content/site-config.ts` → `contact.whatsapp`, `contact.whatsappDisplay`

**Gejala.** Semua tautan `wa.me` mengarah ke `6281234567890`, nomor contoh. Pengunjung yang menekan "Hubungi Panitia" tidak sampai ke pengurus.

**Reproduksi.**
1. Buka beranda.
2. Tekan tombol "Hubungi Panitia".
3. WhatsApp membuka percakapan ke nomor `0812-3456-7890`.

**Harapan.** Nomor mengarah ke WhatsApp resmi pondok, dengan format internasional tanpa tanda `+` atau spasi.

**Perbaikan.** Masuk lewat `/admin/login/`, buka `/admin/lokal/`, isi nomor WhatsApp resmi, tekan "Rapikan nomor WhatsApp", unduh `site-config.ts`, lalu ganti `src/content/site-config.ts` dan build ulang. Pastikan perangkat yang memegang nomor aktif.

---

## BUG-002 — Nomor rekening placeholder

- **Prioritas:** P1
- **Status:** Terbuka
- **Area:** Donasi, footer, beranda
- **Berkas:** `src/content/site-config.ts` → `bank`

**Gejala.** Halaman donasi menampilkan rekening `0000000000` a.n. Pondok Pesantren Sabilul Hidayah. Donatur tidak punya tujuan transfer yang sah.

**Reproduksi.**
1. Buka `/donasi/`.
2. Lihat kartu "Rekening resmi".

**Harapan.** Nama bank, nomor rekening, dan nama pemilik sesuai rekening resmi yayasan atau pondok.

**Perbaikan.** Masuk lewat `/admin/login/`, buka `/admin/lokal/`, isi `bank.name`, `bank.number`, `bank.holder`, unduh `site-config.ts`, lalu ganti `src/content/site-config.ts` dan build ulang. Konfirmasi ulang ke pengurus sebelum rilis.

---

## BUG-003 — Alamat pondok placeholder

- **Prioritas:** P1
- **Status:** Terbuka
- **Area:** Kontak, footer, pendaftaran
- **Berkas:** `src/content/site-config.ts` → `address`

**Gejala.** Alamat masih berisi "Desa …", "Kecamatan …", dan seterusnya. Tautan Google Maps mencari alamat yang tidak ada.

**Reproduksi.**
1. Buka `/kontak/`.
2. Tekan "Buka di Google Maps".

**Harapan.** Alamat lengkap dan titik peta yang benar.

**Perbaikan.** Masuk lewat `/admin/login/`, buka `/admin/lokal/`, isi seluruh field `address`, unduh `site-config.ts`, lalu ganti `src/content/site-config.ts` dan build ulang. Uji tautan peta.

---

## BUG-004 — Sitemap dan robots belum ada

- **Prioritas:** P2
- **Status:** Selesai
- **Area:** SEO
- **Berkas:** `src/app/sitemap.ts`, `src/app/robots.ts`, `src/content/site.ts`

**Gejala.** Mesin pencari tidak mendapat peta halaman. Rute `/sitemap.xml` dan `/robots.txt` mengembalikan 404.

**Harapan.** Kedua berkas dihasilkan saat build dan memuat semua rute publik.

**Perbaikan.** Membuat `sitemap.ts` dan `robots.ts` dengan `export const dynamic = "force-static"`. Domain dasar diambil dari satu tempat: `site.url` di `site.ts`. Kedua berkas memuat semua rute statis dan detail pengumuman.

**Verifikasi.** `npm run build` berhasil; `out/sitemap.xml` memuat 10 URL (7 rute + 3 pengumuman) dan `out/robots.txt` memuat aturan `User-Agent: *` serta `Sitemap`.

**Catatan.** Domain masih placeholder dan tercatat sebagai BUG-016. Ganti `site.url` dulu sebelum rilis.

---

## BUG-016 — URL domain placeholder untuk sitemap dan robots

- **Prioritas:** P2
- **Status:** Terbuka
- **Area:** SEO
- **Berkas:** `src/content/site.ts` → `site.url`

**Gejala.** `site.url` berisi `https://sabilulhidayah.id` yang masih contoh. `sitemap.xml` dan `robots.txt` yang dibangkitkan memuat URL tersebut, tidak valid untuk domain asli.

**Reproduksi.**
1. Buka `out/sitemap.xml`.
2. Lihat atribut `<loc>`.

**Harapan.** URL memakai domain resmi pondok saat rilis.

**Perbaikan.** Ganti `site.url` di `site.ts` dengan domain final, lalu jalankan `npm run build`. Tidak perlu mengubah `sitemap.ts` dan `robots.ts`.

---

## BUG-005 — Favicon dan logo resmi belum ada

- **Prioritas:** P2
- **Status:** Selesai
- **Area:** Aset, identitas
- **Berkas:** `public/logo.png`, `public/logo-terang.png`, `src/app/icon.png`, `src/components/logo.tsx`

**Gejala.** Tab browser tidak menampilkan ikon. Logo saat ini berupa mark SVG sederhana yang dibuat untuk draf, belum logo resmi pondok.

**Harapan.** Favicon dan logo resmi terpasang, dengan versi terang dan gelap.

**Perbaikan.** Logo resmi dipasang pada 6 November 2026. Gambar asli (`public/logo-asli.jpeg`) berlatar putih; latarnya diubah menjadi transparan lewat ambang jarak dari putih, lalu warna campuran di tepi dibuka kembali (un-premultiply) supaya tidak muncul fringe putih. Ukuran diturunkan ke 512 px untuk pemakaian web.

Dua versi dibuat karena latar footer gelap:

| Berkas | Untuk | Warna rata-rata | Luminansi |
|---|---|---|---|
| `public/logo.png` | header (latar krem) | R55 G89 B48 | 74 (gelap) |
| `public/logo-terang.png` | footer (latar `#061A14`) | R198 G195 B168 | 193 (terang) |

Kontras versi terang di atas latar footer **6,35:1**, lolos WCAG AA untuk grafik (ambang 3:1).

Favicon dibuat dari gambar yang sama pada `src/app/icon.png` (180 px, 36 KB) dan otomatis ditautkan Next.js.

**Verifikasi.**
- Semua pojok versi transparan ber-alpha 0; halo putih sejati 0,000%.
- Detail emas pada logo utuh 100% (6.394 piksel sampling, sebelum = sesudah).
- `npm run typecheck` bersih, `npm run build` berhasil (17 rute).
- Di browser: `logo.png` dan `logo-terang.png` termuat 36×36 dari aset 512×512, favicon `/icon.png` tertaut, tidak ada luapan mendatar.

**Catatan.** `StarMark` (mark SVG bintang delapan) sengaja dipertahankan karena dipakai sebagai titik bulat kecil 3–6 px di banyak halaman, bukan sebagai logo. Menggantinya dengan gambar detail akan terlihat semrawut dan memperberat halaman.

---

## BUG-006 — Skrip lint tidak berfungsi

- **Prioritas:** P3
- **Status:** Selesai
- **Area:** Tooling
- **Berkas:** `package.json`

**Gejala.** `npm run lint` memanggil `next lint`, tetapi ESLint belum terpasang sehingga perintah gagal atau meminta instalasi interaktif.

**Perbaikan.** Skrip diganti menjadi `npm run typecheck` yang menjalankan `tsc --noEmit`. Pemeriksaan tipe berjalan tanpa dependensi tambahan.

**Verifikasi.** `npm run typecheck` keluar tanpa error.

---

## BUG-007 — `npm run start` tidak berfungsi

- **Prioritas:** P3
- **Status:** Selesai
- **Area:** Tooling
- **Berkas:** `package.json`, `PRD.md`

**Gejala.** Proyek memakai `output: "export"`, sehingga `next start` menolak berjalan. Siapa pun yang menjalankan `npm run start` setelah build akan mendapat error, padahal folder `out/` sudah berisi situs yang siap.

**Reproduksi.**
1. Jalankan `npm run build`.
2. Jalankan `npm run start`.

**Harapan.** Ada perintah pratinjau yang menyajikan hasil build statis.

**Perbaikan.** Skrip `start` dihapus dan diganti `preview` yang menjalankan `npx --yes serve@14 out`. Perintah ini disalin ke `PRD.md` Bagian 10.2.

**Verifikasi.** `npm run preview` menyajikan folder `out/` dan halaman dapat dibuka.

---

## BUG-008 — Judul pengasuh masih placeholder

- **Prioritas:** P1
- **Status:** Selesai
- **Area:** Profil
- **Berkas:** `src/content/site-config.ts` → `pengasuh`, dipakai `src/app/profil/page.tsx`

**Gejala.** Halaman `/profil/` menampilkan judul `[Nama Pengasuh]`. Ini terlewat dari Bagian 8 PRD dan tidak tercatat di berkas ini sampai audit 2026-11-01.

**Reproduksi.**
1. Buka `/profil/`.
2. Gulir ke bagian "Pengasuh".

**Harapan.** Nama pengasuh resmi beserta penulisan yang benar sesuai konfirmasi pengurus.

**Perbaikan.** Nama dikonfirmasi pemilik pada 6 November 2026: **Ust. Misbah Ridwan Nur Zaman**. Nilai `pengasuh` di `src/content/site-config.ts` diganti dari `[Nama Pengasuh]`.

Nama hanya tampil di satu tempat: judul besar bagian "Pengasuh" pada `/profil/`. Label "Pengasuh" sudah ada di atas judul, jadi nama ditulis lengkap dengan gelar "Ust." sesuai kebiasaan pesantren.

**Verifikasi.**
- `grep` memastikan tidak ada lagi teks `Nama Pengasuh` di `site-config.ts`.
- `npm run typecheck` bersih.

---

## BUG-009 — Metadata 404 sama dengan beranda

- **Prioritas:** P2
- **Status:** Selesai
- **Area:** SEO
- **Berkas:** `src/app/not-found.tsx`

**Gejala.** `out/404/index.html` memakai judul dan deskripsi situs yang sama dengan beranda, sehingga kriteria "metadata unik untuk setiap halaman" tidak terpenuhi.

**Reproduksi.**
1. Jalankan `npm run build`.
2. Bandingkan `<title>` pada `out/index.html` dan `out/404/index.html`.

**Perbaikan.** Halaman 404 mengekspor `metadata` sendiri: judul "Halaman tidak ditemukan" dan deskripsi khusus 404.

**Verifikasi.** `npm run build` berhasil; judul 404 kini "Halaman tidak ditemukan | Sabilul Hidayah".

---

## BUG-010 — Pengumuman contoh tanpa penanda

- **Prioritas:** P2
- **Status:** Selesai
- **Area:** Konten, pengumuman
- **Berkas:** `src/app/pengumuman/page.tsx`, `src/app/pengumuman/[slug]/page.tsx`

**Gejala.** Tiga pengumuman contoh tampil seolah kabar resmi. Peringatan hanya ada sebagai komentar di `src/content/announcements.ts`, sehingga pengunjung tidak melihatnya. Ini melanggar aturan A11.

**Reproduksi.**
1. Buka `/pengumuman/`.
2. Tidak ada keterangan bahwa isinya contoh.

**Perbaikan.** Halaman arsip menampilkan catatan "Pengumuman di halaman ini masih contoh, bukan kabar resmi pondok." Setiap halaman detail menampilkan "Pengumuman ini masih contoh, bukan kabar resmi pondok."

**Verifikasi.** Kedua rute menampilkan catatan tersebut pada build berikutnya.

---

## BUG-011 — Klaim laporan dana tidak sesuai halaman donasi

- **Prioritas:** P2
- **Status:** Selesai
- **Area:** Konten, pengumuman
- **Berkas:** `src/content/announcements.ts` → pengumuman "kerja-bakti-asrama"

**Gejala.** Pengumuman menyatakan laporan penggunaan dana tersedia di halaman donasi. Halaman `/donasi/` tidak memuat laporan apa pun; yang tersedia hanya tombol "Minta laporan terbaru" lewat WhatsApp.

**Reproduksi.**
1. Buka `/pengumuman/kerja-bakti-asrama/`.
2. Ikuti rujukan ke `/donasi/` dan cari laporan.

**Perbaikan.** Kalimat diganti menjadi "Donatur dapat meminta laporan penggunaan dana melalui WhatsApp."

**Verifikasi.** Teks baru sesuai dengan isi bagian Laporan di `/donasi/`.

---

## BUG-012 — Cacat ARIA dan semantik heading

- **Prioritas:** P2
- **Status:** Selesai
- **Area:** Aksesibilitas
- **Berkas:** `src/components/site-header.tsx`, `src/components/copy-button.tsx`, `src/components/forms.tsx`, `src/app/profil/page.tsx`, `src/app/kontak/page.tsx`, `src/app/layout.tsx`

**Gejala.**
1. Item navigasi aktif hanya dibedakan warna, tanpa `aria-current="page"`.
2. `aria-controls="menu-mobile"` menunjuk elemen yang tidak dirender saat menu tertutup.
3. Perubahan label tombol salin menjadi "Tersalin" tidak diumumkan ke pembaca layar.
4. Wilayah `aria-live` pada kedua form baru dibuat bersamaan dengan pesannya.
5. Label "Visi", "Misi", dan judul kartu kontak memakai `span`/`p`, bukan heading.
6. Tautan "Lompat ke konten" menuju `main` tanpa `tabIndex`.

**Perbaikan.**
1. `aria-current` ditambahkan pada navigasi desktop dan seluler; penanda aktif kini juga berlaku untuk halaman detail (`/pengumuman/<slug>/`).
2. Panel menu seluler selalu dirender dan disembunyikan dengan atribut `hidden`.
3. Status salin diumumkan lewat `role="status"` dan `aria-live="polite"`.
4. Wilayah `aria-live` dirender sejak awal, isinya menyusul.
5. Label diubah menjadi `h2` dengan kelas `label font-sans` agar tampilan tetap sama.
6. `main` diberi `tabIndex={-1}`.

**Verifikasi.** `npm run typecheck` dan `npm run build` bersih; markup hasil build diperiksa.

---

## BUG-013 — Kontras teks di bawah WCAG AA

- **Prioritas:** P2
- **Status:** Selesai
- **Area:** Aksesibilitas, tampilan
- **Berkas:** `src/app/page.tsx`, `src/app/pendidikan/page.tsx`, `src/app/pendaftaran/page.tsx`, `src/app/profil/page.tsx`, `src/components/site-footer.tsx`, `src/components/forms.tsx`

**Gejala.** Perkiraan rasio kontras: nomor langkah `text-gold-600/45` sekitar 1,7:1, hak cipta footer `text-paper/45` sekitar 4,2:1, placeholder form `text-muted/60` sekitar 2,5:1, nomor misi `text-gold-600` sekitar 4,45:1. Ambang WCAG AA adalah 4,5:1 untuk teks normal dan 3:1 untuk teks besar.

**Reproduksi.**
1. Buka beranda, `/pendidikan/`, `/pendaftaran/`, `/profil/`, dan footer.
2. Ukur kontras dengan alat pemeriksa warna.

**Perbaikan.** Nomor langkah menjadi `text-gold-700`, hak cipta footer `text-paper/70`, placeholder `text-muted`, nomor misi `text-gold-700`.

**Verifikasi.** Rasio baru di atas 4,5:1 untuk teks normal. Pengukuran akhir tetap perlu dilakukan di browser.

---

## BUG-014 — Pesan WhatsApp tombol seluler tidak konsisten

- **Prioritas:** P3
- **Status:** Selesai
- **Area:** Konten, header
- **Berkas:** `src/components/site-header.tsx`

**Gejala.** Tombol "Hubungi Panitia" versi seluler memakai pesan "Assalamu'alaikum, saya ingin bertanya tentang pendaftaran santri baru." Tombol desktop memakai kalimat lengkap dengan nama pondok, sesuai PRD Bagian 16.3.

**Perbaikan.** Kedua tombol memakai pesan yang sama: "Assalamu'alaikum, saya ingin bertanya tentang pendaftaran santri baru di Pondok Pesantren Sabilul Hidayah."

**Verifikasi.** Tautan `wa.me` pada kedua tombol berisi teks yang identik setelah `decodeURIComponent`.

---

## BUG-015 — Klaim pondok belum terverifikasi

- **Prioritas:** P2
- **Status:** Terbuka
- **Area:** Konten, profil, pendidikan, pendaftaran, kontak
- **Berkas:** `src/app/profil/page.tsx`, `src/app/pendidikan/page.tsx`, `src/app/pendaftaran/page.tsx`, `src/content/site.ts`

**Gejala.** Beberapa pernyataan tampil sebagai fakta tanpa sumber di PRD:

1. "Pondok berdiri di atas tanah wakaf" (`profil/page.tsx`).
2. Kajian "tafsir" pada alur belajar, padahal daftar program hanya Ilmu Alat, Fiqih dan Akhlak, serta Al-Qur'an.
3. "Pendampingan tambahan pada pekan pertama" (`pendidikan/page.tsx`).
4. Daftar fasilitas spesifik: perpustakaan kitab, dapur umum, lapangan (`site.ts` → `facilities`).
5. Prosedur "bawa berkas asli, fotokopi diserahkan sebagai arsip" (`pendaftaran/page.tsx`).
6. Email `info@sabilulhidayah.id`, nama bank "Bank Syariah Indonesia (BSI)", jam layanan, syarat berkas, dan jadwal harian yang ditulis sebagai fakta, padahal PRD Bagian 8 menandainya belum ada atau perlu konfirmasi.

**Harapan.** Setiap pernyataan dikonfirmasi pengurus, atau dihapus bila tidak benar.

**Perbaikan.** Menunggu konfirmasi pemilik. Jangan mengarang pengganti (A7). Bila pengurus mengonfirmasi, perbarui PRD Bagian 8 pada sesi yang sama.

**Verifikasi.** Belum dapat diverifikasi tanpa data resmi.

---

## BUG-017 — Pil "Pengumuman" di panel hero terpotong

- **Prioritas:** P2
- **Status:** Selesai
- **Area:** Beranda, hero
- **Berkas:** `src/app/page.tsx`, `src/app/globals.css` → `.arch`

**Gejala.** Pil "Pengumuman →" di panel hero hanya terlihat sebagai potongan kecil di sisi kiri. Sisa pil tertutup lengkung panel.

**Reproduksi.**
1. Buka beranda pada lebar 892 px (atau lebar apa pun).
2. Lihat sudut kanan-atas panel hero berlatar hijau tua.
3. Hanya sebagian kecil pil "Pengumuman" yang tampak; teks dan panahnya hilang.

**Penyebab.** Panel memakai `.arch` dengan `border-radius: 999px 999px 24px 24px`. Pada panel selebar 305 px, radius dua sudut atas dijepit menjadi 153 px (setengah lebar panel), sehingga seluruh bagian atas panel berbentuk setengah lingkaran. Pil diletakkan di `right-4 top-4`, yaitu di daerah yang terkikis lengkung, dan panel memakai `overflow-hidden`. Perhitungan di browser: dua sudut kanan pil berada di luar lengkung, hanya ± 19 px dari 90 px lebar pil yang terlihat (± 21 %).

**Perbaikan.** Pil dipindahkan dari posisi absolut di sudut kanan-atas ke dalam blok konten bawah panel, di atas kutipan. Blok itu berada di `bottom-0` dengan `p-7 sm:p-9`, jauh di bawah titik lengkung (242 px dari atas panel, radius 153 px), sehingga tidak mungkin terpotong pada ukuran layar mana pun.

**Verifikasi.**
- Perhitungan ulang di browser: `diBawahLengkung: true`, pil berukuran 90 × 19 px, berjarak 36 px dari kiri panel.
- Pemindaian piksel tangkapan layar: seluruh bingkai pil dan teks "PENGUMUMAN →" terbaca utuh, termasuk panah.
- `npm run typecheck` dan `npm run build` bersih (16 halaman statis).

**Catatan.** Bug ini sudah ada sejak panel hero dibuat, bukan akibat pekerjaan animasi; animasi hanya membuat tampilan lebih sering diperhatikan.

---

## BUG-018 — `/admin/login/` memicu pengalihan berulang

- **Prioritas:** P1
- **Status:** Selesai
- **Area:** Admin, middleware
- **Berkas:** `src/middleware.ts`, `src/app/admin/login/page.tsx`

**Gejala.** Membuka halaman admin tanpa sesi berakhir pada `ERR_TOO_MANY_REDIRECTS`. Peramban berhenti di `http://localhost:4300/admin/login/?next=%2Fadmin%2Flogin%2F`.

**Reproduksi.**
1. Jalankan `npm run dev` lalu buka `http://localhost:3000/admin/`.
2. Peramban dialihkan ke `/admin/login/`.
3. Halaman gagal dimuat dengan `ERR_TOO_MANY_REDIRECTS`.

**Penyebab.** `trailingSlash` aktif, sehingga `request.nextUrl.pathname` bernilai `/admin/login/`, bukan `/admin/login`. Pemeriksaan `pathname === "/admin/login"` gagal, middleware menganggap halaman masuk sebagai halaman terlindungi, lalu mengalihkannya ke `/admin/login/?next=/admin/login/` tanpa henti.

**Perbaikan.** Middleware membandingkan jalur setelah garis miring akhir dibuang (`pathname.replace(/\/+$/, "")`). Tujuan pengalihan juga ditulis dengan garis miring akhir agar tidak memicu pengalihan tambahan. Halaman masuk menolak nilai `next` yang menunjuk ke `/admin/login` dan memakai `/admin/` sebagai gantinya.

**Verifikasi.**
- `GET /admin/` tanpa cookie mengembalikan 307 ke `/admin/login/?next=%2Fadmin%2F`, lalu halaman masuk tampil normal.
- Masuk dengan akun admin berhasil dan berakhir di `/admin/`.
- Membuka `/admin/login/` saat sudah masuk dialihkan ke `/admin/`.

---

## BUG-019 — Beranda bisa digeser mendatar di layar sempit

- **Prioritas:** P2
- **Status:** Selesai
- **Area:** Tampilan, beranda, sistem gerak
- **Berkas:** `src/app/globals.css`

**Gejala.** Di lebar 360–768 px, halaman beranda bisa digeser ke samping dan muncul ruang kosong di kanan. Lebar dokumen 373 px pada layar 360 px.

**Reproduksi.**
1. Buka beranda pada lebar 360 px (mode perangkat di devtools).
2. Geser halaman ke kanan, atau periksa `document.documentElement.scrollWidth`.
3. Nilainya 373 px, melebihi lebar layar 345 px.

**Penyebab.** Animasi masuk menggeser elemen 48 px secara mendatar lewat `translateX(±48px)`. Elemen selebar kontainer (kartu donasi dan kartu rekening) yang belum tampil lalu menonjol keluar layar dan menambah lebar gulir dokumen. Badge denyut di sekitar panel hero juga menonjol 20 px karena `-inset-10`, tetapi itu tidak menambah gulir karena berada di dalam wadah ber-`overflow-hidden`.

**Perbaikan.** Dua lapis:
1. Pada layar di bawah 1024 px, arah masuk `kiri` dan `kanan` memakai geseran tegak 28 px, bukan mendatar. Di layar lebar, geseran mendatar tetap dipakai karena masih muat.
2. `body` diberi `overflow-x: clip`. Berbeda dari `hidden`, `clip` tidak membuat wadah gulir baru, sehingga header lengket dan `position: sticky` tetap bekerja.

**Verifikasi.**
- Beranda pada 360, 390, 768, 1024, dan 1280 px: `window.scrollTo(400, 0)` tidak menggeser halaman (`scrollX` tetap 0).
- `/informasi/` dan `/admin/login/` pada 390 px: lebar dokumen sama dengan lebar layar.
- Navigasi utama tetap utuh pada 1024 px: tujuh tautan, tidak ada yang terpotong dan tidak bertumpuk dengan logo.

---

## BUG-020 — Gambar hero beranda tampil raksasa dan terpotong

- **Prioritas:** P3
- **Status:** Selesai
- **Area:** Tampilan, beranda, hero
- **Berkas:** `src/app/page.tsx`

**Gejala.** Gambar hero (`hero-santri.png`) diperbesar 198% dari kolom. Pada viewport 800 px gambar melebar 887 px dan menonjol keluar viewport di kedua sisi (kiri −51 px, kanan 836 px), sehingga tampak raksasa dan terpotong.

**Reproduksi.**
1. Buka beranda pada lebar 800 px.
2. Periksa `getBoundingClientRect()` gambar hero.

**Penyebab.** Skala 198% dipilih agar panel hijau di dalam gambar memenuhi seluruh kolom, tetapi panel hijau sebenarnya hanya perlu menutup area teks overlay. Dari analisis piksel gambar, panel hijau berada pada fraksi 0,2022–0,9133 lebar gambar.

**Perbaikan.** Skala diturunkan menjadi 160% (`w-[198%]` → `w-[160%]` pada gambar dan scrim gradasi, keduanya harus senada). Batas minimum analitis ±144%: di bawah itu tepi kiri panel hijau masuk melewati padding teks (`sm:px-8`).

**Tambahan 2026-11-14.** Di desktop (lg) kolom masih `lg:max-w-none` (±492 px) sehingga gambar setinggi ±787 px dan dianggap terlalu besar. Kolom dibatasi `lg:max-w-[400px]`; gambar menjadi 640 × 640 px. Tampilan di bawah lg tidak berubah (masih `max-w-md` = 448 px). Syarat teks-di-dalam-panel pada C = 400 px, s = 1,6, pad = 32 px: tepi kiri panel 9,4 px ≤ 32 px dan tepi kanan panel 464,5 px ≥ 368 px — terpenuhi.

**Verifikasi.**
- Viewport 800 px: gambar 34–751 px (utuh di viewport), panel hijau di layar 179–688,8 px, teks overlay 200,5–584,5 px (di dalam panel), `scrollWidth` 785 ≤ 800 tidak ada luapan.
- `npm run typecheck` bersih.
