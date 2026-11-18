# PRD — Website Pondok Pesantren Salafi Sabilul Hidayah

> **WAJIB DIBACA SETIAP AGENT, SETIAP SESI.**
> Sebelum menyentuh kode, baca `PRD.md` ini dan `bug.md`. Aturan kerja agent ada di
> [Bagian 12](#12-aturan-kerja-agent). Aturan itu tidak opsional.

| Field | Isi |
|---|---|
| Nama produk | Website Pondok Pesantren Salafi Sabilul Hidayah |
| Versi dokumen | 1.3 |
| Tanggal | 1 November 2026 |
| Status | Fase 1 (kerangka situs) selesai, konten masih placeholder |
| Pemilik | Pengurus Pondok Pesantren Salafi Sabilul Hidayah |
| Bahasa produk | Indonesia |

---

## 1. Ringkasan

Situs profil dan informasi untuk pondok pesantren salafi yang **tidak memungut biaya** dari wali santri. Situs memperkenalkan pondok, menjelaskan pendidikan, memandu pendaftaran yang dilakukan langsung di pondok, mengumumkan kegiatan, dan membuka jalur donasi.

Situs bukan sistem administrasi. Tidak ada akun, basis data santri, pembayaran daring, atau ujian.

## 2. Latar belakang dan masalah

Pondok sudah berjalan, tetapi informasi tentangnya tersebar di mulut ke mulut dan grup WhatsApp. Calon wali santri harus menelepon untuk tahu biaya, syarat, dan jadwal. Masyarakat yang ingin berdonasi tidak punya rujukan resmi.

Tiga masalah yang diselesaikan:

1. Calon wali santri tidak mendapat jawaban cepat soal biaya dan syarat.
2. Kegiatan dan pengumuman pondok tidak terarsip.
3. Donasi tidak punya kanal resmi yang jelas dan dapat dipertanggungjawabkan.

## 3. Tujuan dan ukuran keberhasilan

| Tujuan | Ukuran |
|---|---|
| Memperkenalkan pondok | Pengunjung dapat menjelaskan profil pondok setelah membaca beranda dan halaman profil |
| Meningkatkan kepercayaan calon wali santri | Informasi biaya (Rp 0), syarat, alamat, dan kontak terjangkau maksimal 2 klik dari beranda |
| Mempermudah pendaftaran | Alur pendaftaran dan daftar berkas terbaca dalam satu halaman, dengan jalur tanya ke WhatsApp |
| Menjadi pusat informasi kegiatan | Setiap pengumuman punya tanggal, kategori, dan URL tetap |
| Menjadi media komunikasi wali santri | Pengumuman resmi terarsip dan dapat dibagikan lewat tautan |
| Membuka peluang donasi | Halaman donasi memuat rekening resmi, konfirmasi, dan komitmen laporan |

Target teknis:

- First Load JS di bawah 150 kB (saat ini ±107 kB).
- LCP di bawah 2,5 detik pada jaringan 4G dan perangkat menengah.
- Semua halaman dapat dipakai pada lebar 360 px.
- Nol data placeholder tersisa saat rilis.

## 4. Pengguna dan kebutuhan

| Pengguna | Kebutuhan utama | Halaman yang dituju |
|---|---|---|
| Calon santri | Program, suasana belajar, kegiatan harian | Beranda, Pendidikan |
| Calon wali santri | Biaya, syarat, alamat, jadwal, cara bertanya | Beranda, Pendaftaran, Kontak |
| Santri aktif | Pengumuman dan jadwal | Pengumuman, Pendidikan |
| Alumni | Kabar pondok, cara berkontribusi | Pengumuman, Donasi |
| Masyarakat umum | Profil, kegiatan, kontak | Profil, Pengumuman, Kontak |
| Pengurus | Menyampaikan informasi resmi dan menerima donasi | Semua halaman |

Prioritas utama: **calon wali santri**. Situs berhasil bila mereka bisa memutuskan datang ke pondok tanpa menelepon lebih dulu.

## 5. Lingkup

### 5.1 Termasuk

- Profil pondok: sejarah, visi, misi, nilai, pengasuh.
- Informasi pendidikan: program, jadwal harian, fasilitas.
- Informasi pendaftaran: pernyataan gratis, alur, syarat berkas, FAQ, form tanya ke WhatsApp.
- Pengumuman publik dengan arsip dan halaman detail.
- Informasi penting: tulisan pengurus berisi kabar dan kegiatan, dengan gambar sampul, isi teks, dan galeri banyak foto. Dikelola dari panel admin.
- Donasi: rekening resmi, langkah transfer, form konfirmasi ke WhatsApp, komitmen laporan.
- Halaman kontak dengan alamat, WhatsApp, email, jam layanan, tautan peta.
- Panel admin dengan login (Supabase Auth) untuk menulis informasi, mengunggah foto, dan mengatur data pondok.
- SEO dasar: metadata per halaman, judul, deskripsi, bahasa `id`.
- Tampilan responsif dan aksesibel.

### 5.2 Tidak termasuk

- Akun wali santri dan data per santri.
- Nilai, rapor, SPP, atau pembayaran daring.
- Pendaftaran daring dengan unggah berkas dan verifikasi.
- Payment gateway atau QRIS dinamis.
- Multi-admin dengan peran berbeda; semua akun admin setara.
- Multi-bahasa.
- Forum dan komentar. Galeri foto hanya sebagai lampiran tulisan informasi, bukan album terpisah.
- Integrasi WhatsApp API resmi (masih memakai tautan `wa.me`).

Fitur di luar lingkup disimpan di [Bagian 14](#14-roadmap), bukan dikerjakan diam-diam.

## 6. Peta situs

| Rute | Isi | Berkas |
|---|---|---|
| `/` | Beranda: hero, pilar, program, penjelasan biaya, alur, pengumuman terbaru, informasi penting, pita donasi | `src/app/page.tsx` |
| `/profil/` | Sejarah, visi, misi, nilai, pengasuh | `src/app/profil/page.tsx` |
| `/pendidikan/` | Program, jadwal harian, fasilitas | `src/app/pendidikan/page.tsx` |
| `/pendaftaran/` | Alur, syarat, FAQ, form tanya | `src/app/pendaftaran/page.tsx` |
| `/pengumuman/` | Daftar pengumuman | `src/app/pengumuman/page.tsx` |
| `/pengumuman/[slug]/` | Detail pengumuman (statis) | `src/app/pengumuman/[slug]/page.tsx` |
| `/informasi/` | Daftar tulisan informasi yang sudah terbit | `src/app/informasi/page.tsx` |
| `/informasi/[slug]/` | Detail tulisan, isi, dan galeri foto | `src/app/informasi/[slug]/page.tsx` |
| `/donasi/` | Alasan, rekening, langkah transfer, form konfirmasi, komitmen laporan | `src/app/donasi/page.tsx` |
| `/kontak/` | Kontak, alamat, jam layanan, peta | `src/app/kontak/page.tsx` |
| `/tempe/` | Tempe pondok: keunggulan, harga dan kemasan, cara pesan via WhatsApp | `src/app/tempe/page.tsx` |
| `/admin/login/` | Masuk admin lewat Supabase Auth | `src/app/admin/login/page.tsx` |
| `/admin/` | Daftar tulisan informasi beserta status draf/terbit | `src/app/admin/page.tsx` |
| `/admin/informasi/baru/` | Form tulisan baru dengan sampul dan galeri | `src/app/admin/informasi/baru/page.tsx` |
| `/admin/informasi/[id]/` | Ubah tulisan, atur foto, hapus tulisan | `src/app/admin/informasi/[id]/page.tsx` |
| `/admin/lokal/` | Editor data kontak, rekening, dan jadwal yang diekspor ke berkas | `src/app/admin/lokal/page.tsx` |
| rute tidak dikenal | Halaman 404 dengan tautan kembali | `src/app/not-found.tsx` |

## 7. Alur utama

### 7.1 Pendaftaran (setengah manual)

1. Pengunjung membaca halaman Pendaftaran.
2. Pengunjung mengirim pertanyaan lewat form. Form menyusun pesan dan membuka WhatsApp.
3. Panitia membalas pada jam layanan.
4. Calon wali santri datang ke pondok membawa berkas.
5. Panitia memverifikasi berkas dan mencatat pendaftaran secara manual.

Tidak ada data yang disimpan situs. Tidak ada biaya pendaftaran.

### 7.2 Donasi (transfer manual)

1. Donatur membuka halaman Donasi dan menyalin nomor rekening resmi.
2. Donatur transfer dan menyimpan bukti.
3. Donatur mengisi form konfirmasi. Form membuka WhatsApp berisi nama, jumlah, tanggal, bank pengirim, dan catatan.
4. Pengurus mencocokkan konfirmasi dengan mutasi rekening.
5. Pengurus mencatat donasi dan menyusun laporan bulanan.
6. Donatur dapat meminta laporan lewat WhatsApp.

### 7.3 Pengumuman

1. Pengurus menambah entri di `src/content/announcements.ts`.
2. Build menghasilkan halaman detail statis.
3. Pengumuman tampil di beranda dan halaman arsip.

## 8. Konten yang wajib diisi

Semua data di bawah ini masih placeholder. Rilis tidak boleh dilakukan sebelum lengkap. Sejak revisi 1.6, data kontak, rekening, alamat, nama pengasuh, jadwal, syarat berkas, dan fasilitas dapat diisi lewat `/admin/` lalu diekspor ke `src/content/site-config.ts`.

| Data | Lokasi | Status |
|---|---|---|
| Nama pengasuh | `site-config.ts` → `pengasuh` | Sudah (Ust. Misbah Ridwan Nur Zaman, 6 Nov 2026) |
| Alamat lengkap, kecamatan, kabupaten, provinsi, kode pos | `site-config.ts` → `address` | Belum |
| Nomor WhatsApp resmi | `site-config.ts` → `contact.whatsapp` | Belum (masih `6281234567890`) |
| Email resmi | `site-config.ts` → `contact.email` | Belum |
| Jam layanan | `site-config.ts` → `contact.hours` | Perlu konfirmasi |
| Bank, nomor rekening, nama pemilik | `site-config.ts` → `bank` | Belum (masih `0000000000`) |
| Jadwal harian | `site-config.ts` → `schedule` | Perlu konfirmasi |
| Syarat berkas | `site-config.ts` → `requirements` | Perlu konfirmasi |
| Fasilitas | `site-config.ts` → `facilities` | Perlu konfirmasi |
| Pengumuman resmi | `src/content/announcements.ts` | Masih contoh |
| URL domain | `site-config.ts` → `url` | Belum (masih `https://sabilulhidayah.id`) |
| Logo dan favicon | `public/`, `src/app/icon.png` | Sudah (6 Nov 2026) |
| Foto pondok dan pengasuh | `public/` | Foto pengasuh sudah (`public/pengurus.png`, 7 Nov 2026); foto pondok belum |

## 9. Arah desain

Nada: tenang, hangat, dan tidak berlebihan. Situs pesantren salafi, bukan situs korporat.

| Elemen | Keputusan |
|---|---|
| Warna utama | Hijau hutan `#0A2A20` dan `#10382A` |
| Warna dasar | Kertas krem `#F8F3E8` dan `#EFE5D2` |
| Aksen | Emas redup `#C29236` |
| Teks | `#16201B` dengan teks sekunder `#5B6A60` |
| Tipografi judul | Fraunces (serif) |
| Tipografi isi | Plus Jakarta Sans |
| Motif | Pola geometris delapan sudut, bentuk lengkung (arch) sebagai bingkai visual |
| Prinsip | Banyak ruang kosong, garis tipis, angka serif besar, tanpa gradien ramai |
| Referensi tata letak | Pola dari binaqurani.sch.id: eyebrow berbentuk pil, badge mengambang pada bingkai hero, kartu ikon berlatar lembut, dan pita ajakan sebelum footer. Warna tetap hijau, krem, dan emas |
| Nada teks | Kalimat pendek, aktif, tanpa klaim berlebihan seperti "terbaik" atau "terpercaya" |

Referensi tata letak binaqurani.sch.id diterapkan pada header lengket, hero bergradasi, pita warna penuh, pil eyebrow, dan kartu bersudut besar. Palet tetap hijau hutan, krem, dan emas.

Foto belum tersedia. Bingkai lengkung di halaman profil dan beranda disiapkan sebagai tempat foto. Jangan mengisi dengan foto stok yang terlihat seperti dokumentasi asli pondok.

## 10. Tech stack

| Lapisan | Pilihan | Alasan |
|---|---|---|
| Framework | Next.js 15.5 (App Router) | Rute statis, metadata, komponen server |
| UI | React 19.3 | Bawaan Next.js |
| Bahasa | TypeScript 5.7+ | Tipe konten dan komponen |
| Gaya | Tailwind CSS 3.4 + PostCSS + Autoprefixer | Desain cepat, tanpa CSS global yang berantakan |
| Build | Next.js server (`next build` + `next start`) | Diperlukan untuk auth, sesi, dan data dinamis |
| Basis data | Supabase Postgres + Row Level Security | Tulisan dan foto tersimpan tanpa server sendiri |
| Auth | Supabase Auth (email dan password) | Hanya pengurus yang punya akun |
| Penyimpanan foto | Supabase Storage, bucket publik `informasi` | Foto sampul dan galeri tanpa layanan tambahan |
| Klien data | `@supabase/supabase-js` dan `@supabase/ssr` | Sesi lewat cookie, kompatibel App Router |
| Konten statis | Modul TypeScript di `src/content/` | Profil, program, dan teks halaman tetap di kode |
| Form | Tautan `wa.me` dengan pesan terisi | Tanpa menyimpan data pribadi pengunjung |
| Font | Google Fonts (Fraunces, Plus Jakarta Sans) | Cepat dipasang, tanpa aset lokal |
| Peta | Tautan Google Maps | Tanpa embed berat |
| Deploy | Vercel atau hosting Node lain | Butuh runtime server, bukan hosting statis |

Batasan teknis yang mengikat:

- **Hanya baca dan tulis Supabase lewat klien resmi.** Jangan memakai API route buatan sendiri bila klien Supabase cukup.
- **Jangan pernah memakai `service_role` atau secret key di kode klien.** Hanya URL proyek dan publishable/anon key yang boleh masuk `.env.local`.
- **Row Level Security wajib aktif.** Pengunjung hanya boleh membaca baris berstatus `terbit` dan objek publik di bucket `informasi`. Penulisan hanya untuk pengguna terautentikasi.
- **Jangan memakai `next/image` dengan optimasi server.** `images.unoptimized` sudah aktif.
- Semua tautan internal memakai garis miring di akhir (`/profil/`) karena `trailingSlash` aktif.
- Konten statis (profil, program, teks halaman) tetap di `src/content/`, bukan ditulis langsung di banyak komponen.
- Isi tulisan informasi disimpan sebagai HTML dari editor admin. Hanya admin terautentikasi yang boleh menulis HTML tersebut; jangan menampilkan HTML dari sumber lain tanpa sanitasi.

### 10.1 Struktur folder

```text
.
├─ public/                  # aset statis (logo, favicon)
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx         # kerangka global, metadata, font
│  │  ├─ page.tsx           # beranda
│  │  ├─ globals.css        # token Tailwind dan komponen dasar
│  │  ├─ not-found.tsx
│  │  ├─ robots.ts          # robots.txt
│  │  ├─ sitemap.ts         # sitemap.xml
│  │  ├─ admin/
│  │  │  ├─ page.tsx        # daftar tulisan
│  │  │  ├─ login/page.tsx  # masuk admin
│  │  │  ├─ lokal/page.tsx  # editor data pondok (ekspor berkas)
│  │  │  └─ informasi/
│  │  │     ├─ baru/page.tsx
│  │  │     └─ [id]/page.tsx
│  │  ├─ informasi/
│  │  │  ├─ page.tsx        # daftar tulisan terbit
│  │  │  └─ [slug]/page.tsx # detail dan galeri
│  │  ├─ profil/page.tsx
│  │  ├─ pendidikan/page.tsx
│  │  ├─ pendaftaran/page.tsx
│  │  ├─ pengumuman/page.tsx
│  │  ├─ pengumuman/[slug]/page.tsx
│  │  ├─ donasi/page.tsx
│  │  └─ kontak/page.tsx
│  ├─ components/           # header, footer, section, form, logo, pola, admin
│  ├─ content/              # site.ts, site-config.ts, announcements.ts
│  ├─ lib/
│  │  ├─ informasi.ts       # tipe, URL foto, format tanggal
│  │  └─ supabase/          # client.ts, server.ts, public.ts
│  └─ middleware.ts         # penjaga rute /admin
├─ .env.local               # URL dan anon key (tidak dibagikan)
├─ .env.example
├─ PRD.md
├─ bug.md
├─ next.config.mjs
├─ tailwind.config.ts
└─ package.json
```

### 10.2 Perintah

```bash
npm install        # pasang dependensi
npm run dev        # server pengembangan di http://localhost:3000
npm run build      # build produksi
npm run start      # jalankan hasil build
npm run typecheck  # cek tipe tanpa build
```

### 10.3 Data Supabase

Tabel:

- `informasi`: `id`, `slug` (unik), `judul`, `ringkasan`, `isi`, `penulis`, `tanggal`, `status` (`draf` atau `terbit`), `sampul_path`, `sampul_pos_x`, `sampul_pos_y`, `sampul_zoom`, `created_at`, `updated_at`.
- `informasi_foto`: `id`, `informasi_id` (menghapus berantai), `path`, `keterangan`, `urutan`.

Bucket `informasi`, publik untuk dibaca. Folder `sampul/` untuk gambar sampul, `galeri/<id-tulisan>/` untuk foto galeri.

Aturan RLS:

- `informasi` dan `informasi_foto`: `select` untuk `anon` hanya bila `informasi.status = 'terbit'` (foto mengikuti status tulisannya); `insert`, `update`, `delete` hanya untuk `authenticated`.
- `storage.objects`: `select` publik pada bucket `informasi`; unggah dan hapus hanya untuk `authenticated`.

Variabel lingkungan yang wajib ada:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Tanpa keduanya, halaman informasi kosong dan admin tidak bisa masuk.

## 11. Kriteria penerimaan

Rilis dianggap siap bila:

- [ ] `npm run build` berhasil tanpa error.
- [ ] `npm run typecheck` bersih.
- [ ] Semua halaman di [Bagian 6](#6-peta-situs) dapat dibuka dan tidak ada tautan mati.
- [ ] Tidak ada teks placeholder (`…`, `[Nama Pengasuh]`, `6281234567890`, `0000000000`) yang tersisa.
- [ ] Setiap tombol WhatsApp membuka nomor resmi dengan pesan yang relevan.
- [ ] Tampilan rapi pada 360 px, 768 px, dan 1280 px.
- [ ] Semua gambar punya teks alternatif.
- [ ] Kontras teks memenuhi WCAG AA.
- [ ] Metadata judul dan deskripsi unik untuk setiap halaman.
- [ ] `/admin/` tidak bisa dibuka tanpa login dan dialihkan ke `/admin/login/`.
- [ ] Tulisan draf tidak muncul di `/informasi/`, beranda, maupun `/informasi/[slug]/`.
- [ ] Unggah sampul dan beberapa foto galeri berhasil, dan file yang dihapus ikut hilang dari Storage.
- [ ] Tidak ada `service_role` atau secret key di kode maupun `.env.local`.
- [ ] Tidak ada bug berprioritas P1 atau P2 yang terbuka di `bug.md`.

## 12. Aturan kerja agent

Bagian ini mengikat semua agent, termasuk subagent.

**A1. Baca dulu.**
Setiap sesi dimulai dengan membaca `PRD.md` dan `bug.md`. Jangan mengerjakan apa pun sebelum keduanya dibaca.

**A2. Gunakan skill yang relevan.**
Setiap pekerjaan wajib memakai skill yang tersedia bila cocok:

| Pekerjaan | Skill |
|---|---|
| Menulis atau menyunting teks, copy halaman, pengumuman | `stop-slop` atau `no-ai-slop` |
| Pertanyaan tentang OpenCode, konfigurasi, plugin, SDK | `opencode` |
| Melaporkan bug OpenCode ke upstream | `report` |
| Reverse engineering biner, Electron, atau aplikasi web | `reverse-engineer-anything` |

Bila tidak ada skill yang cocok, kerjakan langsung dan sebutkan di ringkasan akhir bahwa tidak ada skill yang relevan. Jangan memaksakan skill yang tidak nyambung.

**A3. Gunakan subagent untuk mempercepat.**
Pekerjaan yang bisa dipisah wajib dijalankan lewat subagent, terutama bila independen:

| Situasi | Subagent |
|---|---|
| Mencari berkas, simbol, atau alur di kode | `explore` dengan tingkat `quick`, `medium`, atau `very thorough` |
| Riset multi-langkah, membandingkan pendekatan, memeriksa banyak berkas sekaligus | `general` |
| Dua tugas tidak saling bergantung | Jalankan bersamaan, bukan berurutan |

Jangan memakai subagent untuk pekerjaan sepele yang selesai dalam satu langkah. Beri subagent konteks lengkap: tujuan, berkas terkait, batasan dari PRD, dan bentuk hasil yang diharapkan.

**A4. Catat setiap bug di `bug.md`.**
Temuan apa pun yang menyimpang dari perilaku yang diharapkan dicatat di `bug.md`, termasuk bug yang langsung diperbaiki. Format ada di berkas tersebut. Jangan menghapus entri lama. Ubah statusnya.

**A5. Jangan mengubah lingkup sendiri.**
Fitur di [Bagian 5.2](#52-tidak-termasuk) tidak dikerjakan tanpa persetujuan pemilik. Bila permintaan pengguna bertentangan dengan PRD, ikuti pengguna lalu perbarui PRD pada sesi yang sama.

**A6. Jangan menambah dependensi tanpa alasan.**
Setiap dependensi baru harus dijelaskan manfaatnya dan dampaknya pada ukuran bundle. Utamakan yang sudah ada.

**A7. Jangan memalsukan data pondok.**
Jangan mengarang nama pengasuh, nomor rekening, nomor WhatsApp, alamat, jumlah santri, prestasi, atau laporan keuangan. Gunakan placeholder yang jelas dan catat di [Bagian 8](#8-konten-yang-wajib-diisi).

**A8. Verifikasi sebelum menyatakan selesai.**
Jalankan `npm run build` dan `npm run typecheck`. Periksa halaman yang berubah di browser pada lebar desktop dan seluler. Laporkan apa yang diperiksa dan apa yang belum.

**A9. Jaga bahasa dan nada.**
Antarmuka berbahasa Indonesia. Hindari kalimat berlebihan, istilah pemasaran kosong, dan tanda pisah panjang. Tulis seperti pengurus pondok menjelaskan kepada orang tua santri.

**A10. Jaga aksesibilitas.**
Gunakan elemen semantik, label form yang terhubung, teks alternatif, urutan fokus yang wajar, dan kontras yang cukup. Jangan menyembunyikan konten penting di balik animasi.

**A11. Jangan mengubah konten contoh menjadi seolah-olah resmi.**
Tiga pengumuman dan angka pada situs saat ini adalah contoh. Beri tanda jelas selama belum diganti data asli.

## 13. Risiko

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Konten asli belum terkumpul | Situs tidak bisa dirilis | Checklist [Bagian 8](#8-konten-yang-wajib-diisi) dan tenggat pengumpulan |
| Hosting belum ditentukan | Deploy tertunda | Butuh hosting Node (Vercel disarankan), bukan hosting statis |
| Nomor WhatsApp dan rekening masih placeholder | Donasi dan pendaftaran gagal | Bug P1 di `bug.md`, wajib selesai sebelum rilis |
| Foto dan tulisan diunggah pengurus tanpa pemeriksaan | Konten keliru tampil publik | Status draf secara bawaan, tombol terbit terpisah |
| Kunci Supabase bocor | Data bisa diubah pihak lain | Hanya anon/publishable key di klien, RLS aktif, tidak ada `service_role` di kode |
| Klaim "gratis" disalahgunakan pihak lain | Reputasi dan donasi | Peringatan rekening resmi di halaman donasi dan pendaftaran |

## 14. Roadmap

**Fase 1 (selesai).** Kerangka situs, delapan rute, desain, animasi, build.

**Fase 2 (selesai).** Backend Supabase, login admin, tulisan informasi dengan sampul dan galeri foto, halaman publik `/informasi/`.

**Fase 3.** Konten asli, logo dan favicon, foto dokumentasi, sitemap dan robots, deploy ke Vercel, penggantian nomor dan rekening.

**Fase 4 (bila dibutuhkan).** Akun wali santri, pembayaran SPP, PPDB daring penuh. Butuh kebijakan privasi data anak.

## 15. Pertanyaan terbuka

1. Hosting apa yang akan dipakai: cPanel, VPS, atau platform statis?
2. Siapa nama pengasuh dan bagaimana penulisannya?
3. Alamat lengkap dan titik peta pondok.
4. Nomor WhatsApp resmi dan siapa yang memegangnya.
5. Rekening resmi atas nama siapa.
6. Apakah jadwal harian dan syarat berkas di situs sudah sesuai kondisi sekarang?
7. Apakah ada foto dan logo yang boleh dipublikasikan?

## 16. Kondisi implementasi saat ini

Bagian ini mencatat apa yang sudah dibangun pada Fase 1, supaya agent berikutnya tidak menebak dari kode.

### 16.1 Urutan bagian beranda

1. Hero: latar gradasi krem, pil "Pendaftaran dibuka", judul, ringkasan, dua tombol, tiga penanda singkat, dan satu gambar utuh `public/hero-santri.png` (1254x1254, hasil desain Canva: pelajar muslim dengan latar hijau geometris penuh, full-bleed; kotak-kotak abu di tepi dihapus lewat flood-fill, pojok transparan). Gambar tampil selebar kolom. Pernyataan gratis dan tautan "Pengumuman" berada di bagian bawah, di lapisan depan gambar, dengan kerudung gradasi hijau tua 44 persen bawah yang dikunci ke siluet gambar via mask-image agar teks terbaca. Kartu "Rp 0" mengambang di sisi kiri (tampil pada lebar 1024 px ke atas).
2. Pilar: pita hijau hutan berisi empat kartu ikon (gratis penuh, kajian kitab kuning, hidup bersama, terbuka untuk umum).
3. Program: tiga kartu dengan ikon dan nomor (Ilmu Alat, Fiqih dan Akhlak, Al-Qur'an).
4. Biaya: penjelasan gratis dan daftar penggunaan donasi.
5. Alur pendaftaran: empat langkah.
6. Pengumuman terbaru: tiga entri.
7. Informasi penting: tiga tulisan informasi terbit terbaru. Tidak tampil bila belum ada.
8. Ajakan mendaftar: pita CTA berisi dua tombol.
9. Pita donasi: rekening dan tautan ke halaman donasi.

### 16.2 Inventaris komponen

| Berkas | Ekspor | Fungsi |
|---|---|---|
| `components/logo.tsx` | `StarMark`, `Logo` | Mark bintang delapan dan wordmark, varian terang/gelap |
| `components/girih-pattern.tsx` | `GirihPattern` | Pola geometris SVG, warna mengikuti `currentColor`, butuh `id` unik per pemakaian |
| `components/site-header.tsx` | `SiteHeader` | Header lengket, menu seluler, penanda halaman aktif (client component) |
| `components/site-footer.tsx` | `SiteFooter` | Empat kolom: profil, halaman, kontak, rekening |
| `components/section.tsx` | `PageHero`, `SectionHeading` | Kerangka judul halaman dalam dan judul bagian |
| `components/forms.tsx` | `InquiryForm`, `DonationForm` | Form tanya pendaftaran dan form konfirmasi donasi (client component) |
| `components/copy-button.tsx` | `CopyButton` | Menyalin nomor rekening ke papan klip (client component) |
| `components/admin-editor.tsx` | `AdminEditor` | Editor data kontak, rekening, alamat, dan jadwal; mengekspor `site-config.ts` (client component) |
| `components/admin-shell.tsx` | `AdminShell` | Kepala halaman admin, menu, tombol keluar (client component) |
| `components/login-form.tsx` | `LoginForm` | Form masuk Supabase Auth (client component) |
| `components/form-informasi.tsx` | `FormInformasi` | Form tulisan: teks, sampul dengan geser/zoom, galeri foto (client component) |
| `components/editor-isi.tsx` | `EditorIsi` | Editor teks kaya berbasis `contentEditable` (client component) |
| `components/logo.tsx` | `StarMark`, `Logo` | `StarMark` = penanda bintang delapan SVG untuk titik bulat kecil di dalam teks. `Logo` = emblem resmi + wordmark, dua versi warna |

Semua komponen lain adalah server component. JavaScript hanya dikirim untuk header, dua form, tombol salin, dan halaman admin.

### 16.2b Logo dan favicon

| Berkas | Ukuran | Dipakai di |
|---|---|---|
| `public/logo.png` | 512×512, 198 KB | Header (latar krem), versi gelap |
| `public/logo-terang.png` | 512×512, 124 KB | Footer (latar `#061A14`), versi terang |
| `src/app/icon.png` | 180×180, 36 KB | Favicon, ditautkan otomatis Next.js |
| `public/logo-asli.jpeg` | 1254×1254 | Berkas asli unggahan, sumber regenerasi |
| `public/logo-transparan.png` | 1254×1254 | Master transparan resolusi penuh |

Dua berkas terakhir tidak dirujuk halaman mana pun; disimpan sebagai bahan mentah. Kalau perlu ukuran lain, regenerasi dari `logo-asli.jpeg`, jangan perkecil `logo.png` lagi.

Kontras versi terang di atas latar footer 6,35:1 (lolos WCAG AA untuk grafik). `StarMark` tetap SVG karena dipakai sebagai penanda 3–6 px di dalam teks; menggantinya dengan gambar detail akan semrawut dan memperberat halaman.

### 16.3 Form dan pesan WhatsApp

`InquiryForm` meminta `nama`, `asal`, dan `pertanyaan`. Pesan yang dibuka:

```text
Assalamu'alaikum, saya ingin menanyakan pendaftaran santri.

Nama: <nama>
Asal: <asal>
Pertanyaan: <pertanyaan>
```

`DonationForm` meminta `nama`, `jumlah`, `tanggal`, `bank`, dan `catatan` (opsional). Pesan yang dibuka:

```text
Assalamu'alaikum, saya sudah menyalurkan donasi.

Nama: <nama>
Jumlah: <jumlah>
Tanggal transfer: <tanggal>
Bank pengirim: <bank>
Catatan: <catatan atau ->

Mohon konfirmasi. Terima kasih.
```

Keduanya membuka WhatsApp lewat `window.open` dengan `noopener,noreferrer`, lalu menampilkan tautan cadangan bila popup diblokir. Tidak ada data yang dikirim ke server.

Tombol "Hubungi Panitia" di header memakai pesan: "Assalamu'alaikum, saya ingin bertanya tentang pendaftaran santri baru di Pondok Pesantren Sabilul Hidayah."

### 16.4 Token desain

| Token | Nilai | Pemakaian |
|---|---|---|
| `ink` | `#16201B` | Teks utama |
| `muted` | `#5B6A60` | Teks sekunder |
| `paper` | `#F8F3E8` | Latar utama |
| `paper2` | `#EFE5D2` | Latar bagian bergantian |
| `forest-950` | `#061A14` | Footer |
| `forest-900` | `#0A2A20` | Blok gelap, tombol utama |
| `forest-800` | `#10382A` | Hover tombol utama |
| `forest-700` | `#16513B` | Aksen gelap |
| `forest-600` | `#1D6950` | Aksen gelap |
| `gold-700` | `#8A6220` | Label dan teks aksen |
| `gold-600` | `#A8792A` | Garis dan ikon |
| `gold-500` | `#C29236` | Tombol donasi dan cincin fokus |
| `gold-300` | `#E5CFA0` | Aksen pada latar gelap |
| `gold-100` | `#F3E7CB` | Latar chip dan peringatan |
| Sudut kartu | `1.75rem` (`rounded-card`) | Kartu dan panel besar |
| Bayangan lembut | `shadow-soft` | Hover kartu dan bingkai hero |
| Lebar konten | `1180px` (`max-w-wrap`) | Semua bagian |
| Lebar baca | `68ch` (`max-w-prose`) | Isi pengumuman |
| Judul | Fraunces | `font-display` |
| Isi | Plus Jakarta Sans | `font-sans` |

Kelas komponen di `globals.css`: `wrap`, `label`, `eyebrow` (pil isi penuh, tanpa garis), `rule`, `btn`, `btn-primary`, `btn-secondary`, `btn-gold`, `arch`, `card`, `kartu-timbul`, `ikon-timbul`, `gambar-sorot`, `gambar-zoom`, `detak`, `anim-buka`, `link-underline`. Daftar lengkap kelas gerak ada di Bagian 16.9.

### 16.5 Aksesibilitas yang sudah dipasang

- Tautan "Lompat ke konten" menuju `#konten`.
- Elemen semantik: `header`, `nav`, `main`, `footer`, `address`, `table` dengan `scope="col"`.
- Tombol menu memakai `aria-expanded` dan `aria-controls`; panel menu seluler selalu ada di DOM dan disembunyikan dengan atribut `hidden`.
- Halaman aktif ditandai `aria-current="page"` pada navigasi desktop dan seluler, termasuk saat berada di halaman detail pengumuman.
- Cincin fokus 2 px warna emas dengan offset 2 px, berlaku global.
- Seluruh SVG dekoratif memakai `aria-hidden`, pola juga `focusable="false"`.
- FAQ memakai `details`/`summary` sehingga tetap berfungsi tanpa JavaScript.
- Pesan cadangan form memakai `aria-live="polite"`.
- Setiap input terhubung ke `label` lewat `htmlFor` dan `id`.
- Tombol salin rekening mengumumkan hasilnya lewat `role="status"`.
- Label Visi, Misi, dan judul kartu kontak memakai `h2`.
- `main` memakai `tabIndex={-1}` agar fokus berpindah saat tautan lompat dipakai.
- Bahasa dokumen `lang="id"`.

### 16.6 Struktur data konten

`src/content/site-config.ts` adalah satu-satunya berkas yang diisi lewat `/admin/`. Ia mengekspor tipe `SiteConfig` dan objek `siteConfig` berisi `url`, `address`, `contact`, `bank`, `pengasuh`, `requirements`, `schedule`, dan `facilities`. Berkas ini yang diganti dengan hasil unduhan dari `/admin/`.

`src/content/site.ts` mengimpor `siteConfig` lalu mengekspor: `site`, `nav`, `waLink`, `pillars`, `programs`, `registrationSteps`, `requirements`, `schedule`, `facilities`, `values`, `donationUses`, `faq`. Nilai `requirements`, `schedule`, dan `facilities` diteruskan dari `siteConfig`.

`site.url` dipakai satu-satunya sumber domain untuk `src/app/sitemap.ts` dan `src/app/robots.ts`. Menggantinya saat rilis sudah cukup, tanpa menyentuh kedua berkas itu.

`src/content/announcements.ts` mengekspor tipe `Announcement` (`slug`, `date`, `dateLabel`, `category`, `title`, `excerpt`, `body[]`), array `announcements`, dan helper `announcementBySlug`.

Menambah pengumuman berarti menambah satu objek di array. Tidak perlu membuat berkas baru.

### 16.7 Keputusan implementasi

| Keputusan | Alasan |
|---|---|
| Font dimuat lewat `<link>` Google Fonts, bukan `next/font` | Build tidak bergantung pada jaringan saat kompilasi |
| `dynamicParams = false` pada rute pengumuman | Semua slug diketahui saat build, rute lain menjadi 404 |
| Laporan donasi ditulis sebagai komitmen, tanpa angka | Tidak ada data keuangan asli, angka karangan berbahaya |
| Tombol salin rekening gagal diam-diam bila clipboard tidak tersedia | Nomor tetap terbaca dan bisa disalin manual |
| ESLint tidak dipasang | Menghindari dependensi tambahan, pemeriksaan tipe memakai `tsc` |
| Halaman publik memakai klien Supabase tanpa cookie | Bisa di-cache dan direvalidasi tiap 60 detik |
| `next start` dipakai | Build bukan lagi static export, butuh runtime Node |
| Alias impor `@/*` menunjuk ke `src/*` | Impor konsisten tanpa jalur relatif panjang |
| Isi `public/` masih kosong | Logo, favicon, dan foto belum tersedia |
| Halaman arsip dan detail pengumuman menampilkan penanda "masih contoh" | Memenuhi aturan A11 selama isi belum resmi |
| Halaman tempe tidak ditaruh di navigasi utama | Menjaga identitas pesantren; tempe adalah jalur pendukung, bukan wajah utama situs |
| Tempe ditautkan dari donasi, profil, footer, dan beranda | Menjangkau orang yang berniat mendukung pondok lewat empat jalur yang sudah ada |
| Sitemap memakai daftar pengecualian `diLuarNav` untuk `/tempe/` | Penjaga sitemap mengharuskan setiap rute ada di `nav`; tempe sengaja di luar navigasi sehingga butuh pengecualian eksplisit |

### 16.8 Editor data pondok

`/admin/lokal/` (dulu `/admin/`) adalah editor data yang berjalan sepenuhnya di browser. Alurnya:

1. Pengurus masuk lewat `/admin/login/`.
2. Membuka `/admin/lokal/`.
3. Mengisi kontak, rekening, alamat, nama pengasuh, jadwal, syarat berkas, dan fasilitas.
4. Isian tersimpan otomatis di `localStorage` browser tersebut.
5. Menekan "Unduh site-config.ts" atau "Salin isi berkas".
6. Mengganti `src/content/site-config.ts` dengan berkas hasil unduhan.
7. Menjalankan `npm run build` lalu deploy.

Batasan:

- Perubahan belum langsung tampil di situs publik sampai berkas diganti dan di-deploy.
- Halaman tidak diindeks (`robots: noindex, nofollow`).
- Pengumuman, logo/favicon, dan foto belum tercakup editor ini.
- URL domain tidak ditampilkan di editor; ubah langsung di `site-config.ts` bila perlu.

### 16.9 Sistem gerak

Gerakan meniru gaya `binaqurani.sch.id` tanpa menyalin aset atau kodenya. Palet, tipografi, dan isi tidak berubah.

| Kelas / atribut | Perilaku |
|---|---|
| `data-sh-anim="kiri\|kanan\|turun\|naik\|pudar"` | Arah masuk saat elemen digulir ke layar. Di bawah 1024 px, `kiri` dan `kanan` memakai geseran tegak agar tidak memunculkan gulir mendatar (BUG-019) |
| `data-sh-tunda="1"` sampai `"5"` | Tunda bertingkat 90 ms sampai 450 ms untuk daftar |
| `.kartu-timbul` | Kartu naik 8 px dengan bayangan lembut saat hover atau fokus |
| `.ikon-timbul` | Ikon naik 4 px dan membesar 1,08 kali, ikut saat kartu di-hover |
| `.gambar-sorot` + `.gambar-zoom` | Lapisan gradien muncul dan gambar membesar 1,06 kali |
| `.detak`, `.detak-tunda` | Denyut ambient 2,4 detik pada penghias hero |
| `.anim-buka` | Menu seluler masuk 320 ms dari atas |

Aturan pemakaian:

- Semua gerakan dibungkus `@media (prefers-reduced-motion: no-preference)`. Pengguna yang memilih mengurangi gerakan melihat halaman tanpa animasi.
- Status tersembunyi hanya berlaku bila kelas `sh-js` ada di `<html>`. Kelas itu ditambahkan skrip sebaris di `<head>`, jadi tanpa JavaScript seluruh konten tetap terlihat.
- `RevealObserver` (`src/components/reveal-observer.tsx`) menandai elemen yang sudah terlihat tanpa menunggu observer, berhenti mengamati setelah elemen tampil, dan menampilkan semua elemen bila observer tidak pernah jalan dalam 4 detik.
- Observer dipasang ulang setiap pindah rute lewat `usePathname`, sehingga navigasi klien tetap memicu animasi.
- `data-sh-anim` tidak dipasang pada elemen yang juga punya `.kartu-timbul`; keduanya dipisah lewat elemen pembungkus agar animasi hover tidak bentrok dengan animasi masuk.
- `body` memakai `overflow-x: clip` supaya geseran animasi tidak menimbulkan gulir mendatar.
- Kelas `.card-hover` dihapus dan diganti `.kartu-timbul`.

Hasil build: 17 rute. Halaman publik di-cache dengan revalidasi 60 detik; rute `/admin/*` selalu dinamis. First Load JS 103–181 kB, terbesar pada halaman admin karena editor dan klien Supabase.

### 16.10 Tulisan informasi

Alur admin:

1. Masuk di `/admin/login/`.
2. `/admin/` menampilkan seluruh tulisan (draf dan terbit) beserta jumlahnya.
3. `/admin/informasi/baru/` untuk menulis: judul, slug otomatis, penulis, tanggal, ringkasan, isi lewat editor teks kaya, sampul, dan galeri banyak foto.
4. Gambar sampul dipilih dari berkas, lalu digeser dan diperbesar. Posisi fokus dan zoom disimpan, sehingga tampilan di daftar dan detail konsisten.
5. Foto galeri bisa diunggah beberapa sekaligus, diberi keterangan, diurutkan, dan dihapus.
6. "Terbitkan tulisan" menyimpan dengan status `terbit`; "Simpan sebagai draf" menyimpan tanpa menampilkan ke publik.

Alur publik:

1. Beranda menampilkan tiga tulisan terbit terbaru pada bagian "Informasi penting". Bagian ini tidak muncul bila belum ada tulisan terbit.
2. `/informasi/` menampilkan seluruh tulisan terbit, terbaru lebih dulu.
3. `/informasi/[slug]/` menampilkan sampul, isi, dan galeri foto. Tulisan draf menghasilkan 404.

Batas unggah: JPG, PNG, atau WEBP, maksimal 5 MB per berkas. Gambar tidak diubah ukurannya di server; pengurus disarankan mengunggah foto yang sudah diperkecil.

Catatan privasi: bucket `informasi` bersifat publik agar foto bisa tampil tanpa tautan bertanda tangan. Foto pada tulisan draf tidak muncul di halaman mana pun, tetapi berkasnya masih bisa dibuka bila seseorang mengetahui URL persisnya. Jangan unggah foto yang belum boleh dilihat publik.

---

## Riwayat revisi

| Versi | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 1 November 2026 | Dokumen awal |
| 1.1 | 1 November 2026 | Menambah rute 404 dan Bagian 16 tentang kondisi implementasi |
| 1.2 | 1 November 2026 | Menambah catatan penanda pengumuman contoh, memperbarui daftar aksesibilitas Bagian 16.5, dan mencatat perbaikan BUG-009 sampai BUG-014 |
| 1.3 | 1 November 2026 | Menambah referensi tata letak dari binaqurani.sch.id, menyusun ulang beranda (pil eyebrow, kartu pilar, badge hero, pita CTA), dan menambah kelas `eyebrow` |
| 1.4 | 1 November 2026 | Menambah `sitemap.ts` dan `robots.ts` (BUG-004), satu sumber domain `site.url`, dan mencatat BUG-016 untuk penggantian domain |
| 1.5 | 1 November 2026 | Menerapkan referensi tata letak binaqurani.sch.id: header 72 px, hero bergradasi, tautan pengumuman mengambang, pita hijau pilar, kartu `rounded-card`, bayangan `soft`, dan pil eyebrow isi penuh |
| 1.6 | 1 November 2026 | Menambah mode admin lokal `/admin/`, memisahkan data yang dapat diisi ke `site-config.ts`, dan menjadikan nama pengasuh dapat diisi pengurus |
| 1.7 | 2 November 2026 | Menyederhanakan editor admin (tanpa URL domain dan tanpa kode mentah), mengganti judul menjadi "Pengurus pondok", dan menambah tautan "Mode admin" di footer |
| 1.8 | 2 November 2026 | Menambah sistem gerak tiruan binaqurani.sch.id: muncul saat gulir, kartu dan ikon timbul, sorot gambar, denyut ambient, dan menu seluler beranimasi; semua dibungkus `prefers-reduced-motion` |
| 1.9 | 3 November 2026 | Memindahkan tautan "Pengumuman" dari sudut kanan-atas panel hero ke blok bawah panel karena terpotong lengkung `.arch` (BUG-017) |
| 1.10 | 3 November 2026 | Menambah backend Supabase: login admin, tulisan informasi dengan sampul dan galeri banyak foto, halaman `/informasi/`, dan bagian "Informasi penting" di beranda. Menghapus static export, memindahkan editor data pondok ke `/admin/lokal/`, dan mencatat arsitektur baru di Bagian 10 dan 16 |
| 1.11 | 3 November 2026 | Memperbaiki halaman masuk yang mengalihkan tanpa henti (BUG-018) dan gulir mendatar di layar sempit (BUG-019); sitemap memuat tulisan informasi; `robots.txt` menolak `/admin/` |
| 1.12 | 6 November 2026 | Memasang logo resmi dan favicon (BUG-005): latar putih diubah transparan, versi terang untuk footer gelap, kontras 6,35:1. Menutup BUG-008 dengan nama pengasuh Ust. Misbah Ridwan Nur Zaman |
| 1.13 | 7 November 2026 | Memasang foto pengasuh di `/profil/` sebagai panel lengkung hijau satu gambar utuh (`public/pengurus.png`, latar transparan, 720x903, ~1,3 MB): latar kotak-kotak hasil desain dihapus lewat flood-fill, gradasi bawah dikunci ke siluet panel via mask-image agar badan melebur ke hijau |
| 1.14 | 7 November 2026 | Mengganti gambar hero beranda dengan desain Canva terbaru (`hero-santri.png` 773x821): latar kotak-kotak dihapus lewat flood-fill (59,2 persen), margin transparan dipangkas, skala ditata ulang menjadi 126 persen dan mask gradasi disesuaikan agar teks dan gradasi tetap pas di dalam panel |
| 1.15 | 7 November 2026 | Mengganti kembali gambar hero dengan revisi desain Canva pengguna (`hero-santri.png` 829x829, ~806 KB): latar kotak-kotak dihapus lewat flood-fill (58,4 persen), dipangkas, dan skala ditata ulang menjadi 138 persen dengan mask gradasi mengikuti, agar panel hijau serta teks dan gradasi tetap pas. Kotak gradasi diperlebar selebar gambar (bukan hanya kolom) agar baju orang di kanan-bawah ikut terkena gradasi |
| 1.16 | 7 November 2026 | Mengganti gambar hero dengan desain baru pengguna (`hero-santri.png` 1254x1254): pelajar muslim berlatar hijau geometris penuh. Latar kotak-kotak abu di tepi dihapus lewat flood-fill (pojok transparan), tampilan diubah menjadi selebar kolom (full-bleed, bukan lagi panel lengkung diperbesar), teks dan gradasi tetap di bagian bawah |
| 1.17 | 8 November 2026 | Membulatkan sisa latar putih/kotak catur abu pada gambar hero Gemini (900x908) via connected-component abu-netral (mn>118, selisih<28): 158.481 px kotak catur jadi transparan. Piksel kulit tetap 10.399 (orang utuh, tidak bolong) |
| 1.18 | 16 November 2026 | Menambah halaman publik `/tempe/` untuk usaha tempe pondok: hero, tiga kartu keunggulan, kartu harga, dan tombol pesan via WhatsApp. Ditautkan dari donasi (kalimat CTA), profil (Latar pendirian), footer, dan beranda (di samping tombol donasi); sengaja tidak masuk navigasi utama. Sitemap menambah pengecualian `diLuarNav`. Foto tempe ditunda (penanda tersisa di kode). Tanggal berdiri pondok 29 Mei 2026 dan kisah usaha tempe ditulis di Latar pendirian `/profil/` |
