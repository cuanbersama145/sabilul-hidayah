# Rencana Redesign — Sabilul Hidayah

> Basis audit: membaca penuh `src/app/page.tsx`, `section.tsx`, `logo.tsx`,
> `layout.tsx`, `globals.css`, `site-header.tsx`, `tailwind.config.ts`, dan
> inventaris aset `public/`. Inspeksi visual menyusul via dev server.

## 1. Temuan audit (masalah desain asli)

Yang **sudah kuat** (tidak disentuh):
- Identitas warna forest/gold dengan kontras terukur (≥4,5:1), skip link,
  `:focus-visible`, `prefers-reduced-motion`, `text-wrap: balance/pretty`.
- Motif girih sebagai dekorasi berkontras sangat rendah — khas, bukan blob.
- Aset asli pondok (hero-santri, keluarga-pondok, fasilitas, tempe, pengurus).

Yang **lemah / generik**:
1. **Kartu berulang** — section Pilar (4 kartu), Program (3 kartu), Pengumuman
   (3 kartu) memakai pola kartu identik. Ini persis "repetitive card-based
   layouts" yang harus dihindari.
2. **Ikon kotak emas yang identik** — tiap kartu Pilar/Program pakai
   `StarMark` di dalam kotak `rounded-xl` berwarna sama. Ikon dekoratif yang
   tidak membawa makna + pola berulang → terasa template.
3. **Lencana eyebrow berbentuk pill** di hero & CTA (`.eyebrow` pakai
   `rounded-full bg-gold-100`) — menambah kesan "AI badge".
4. **Gradien dekoratif** pada hero (`from-paper2/70 via-paper`) dan scrim blur
   `blur-3xl` emas di belakang gambar (`detak`). Efek bercahaya buatan.
5. **Blok donasi band** (beranda) memakai `backdrop-blur` + kartu gelap di atas
   gradasi — glassmorphism ringan yang tidak perlu.
6. **Struktur section berulang**: header SectionHeading kiri + "Selengkapnya"
   kanan, lalu grid 3 kolom — dipakai di 3+ section. Ritme visual monoton.

## 2. Arah art direction

- **Kepribadian**: tenang, hangat, bersahaja, tepercaya — editorial, bukan SaaS.
- **Audiens**: wali santri, calon santri, donatur (mayoritas mobile).
- **Prinsip layout**: ganti grid-kartu seragam dengan komposisi editorial —
  daftar bernomor, tabel, kolom asimetris, dan daftar bergaris pemisah.
  Tidak semua blok perlu kartu.
- **Ikon**: hanya SVG bermakna; hapus kotak ikon dekoratif berulang.
- **Gradien/blur**: hapus scrim blur emas di hero; sederhanakan latar hero.
- **Lencana**: ubah eyebrow pill → penanda garis + label kecil (editorial),
  bukan pill berwarna.
- Tipografi (Fraunces + Plus Jakarta Sans) **dipertahankan** — sudah kuat.

## 3. Lingkup perubahan (fase 8)

| File | Perubahan |
|---|---|
| `src/app/globals.css` | Ubah `.eyebrow` dari pill → penanda garis editorial; rapikan utilitas terkait |
| `src/app/page.tsx` | Pilar & Program: hilangkan kotak ikon dekoratif berulang; ubah ke komposisi editorial (pilar = daftar bergaris, program = baris bernomor asimetris); hapus scrim blur hero; sederhanakan blok donasi (hapus `backdrop-blur`) |
| Komponen lain | Hanya bila perlu; logika bisnis & konten tidak diubah |

Tidak menyentuh: halaman admin, data konten, rute, fungsi.

## 4. Pemenuhan aturan skill yang dimuat
- **ui-ux-pro-max**: checklist §ikon (vektor, `aria-hidden` dekoratif, tanpa
  emoji), kontras, `prefers-reduced-motion`, ritme spacing. Python tidak ada →
  pencarian katalog dilewati, gunakan Quick Reference.
- **antislop-copy**: copy sudah dirapikan di sesi sebelumnya; tidak menambah
  klaim baru saat redesain.
- **frontend-design**: TIDAK tersedia di lingkungan ini (dilaporkan).
