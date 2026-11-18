export type Announcement = {
  slug: string;
  date: string;
  dateLabel: string;
  category: "Pendaftaran" | "Kegiatan" | "Pondok";
  title: string;
  excerpt: string;
  body: string[];
};

// CATATAN: tiga pengumuman ini adalah contoh. Ganti dengan pengumuman resmi pondok.
export const announcements: Announcement[] = [
  {
    slug: "pendaftaran-santri-baru",
    date: "2026-10-12",
    dateLabel: "12 Oktober 2026",
    category: "Pendaftaran",
    title: "Pendaftaran santri baru dibuka",
    excerpt:
      "Pendaftaran dilakukan langsung di pondok. Tidak ada biaya pendaftaran yang perlu dibayar.",
    body: [
      "Pendaftaran santri baru untuk tahun ajaran mendatang sudah dibuka. Calon wali santri dapat menanyakan jadwal dan syarat kepada panitia melalui WhatsApp atau datang langsung ke pondok.",
      "Pendaftaran tidak dilakukan melalui situs ini. Panitia menerima berkas dan menjelaskan aturan pondok secara langsung agar tidak ada informasi yang keliru.",
      "Pondok tidak memungut biaya pendidikan, asrama, makan, maupun kitab. Jika ada pihak yang meminta pembayaran atas nama pondok, harap konfirmasikan lebih dulu ke kontak resmi.",
    ],
  },
  {
    slug: "kajian-kitab-bulan-ini",
    date: "2026-09-20",
    dateLabel: "20 September 2026",
    category: "Kegiatan",
    title: "Jadwal kajian kitab bulan ini",
    excerpt:
      "Kajian kitab pagi dan sore berjalan seperti biasa. Santri diharapkan membawa kitab masing-masing.",
    body: [
      "Kajian kitab pagi dan sore berjalan sesuai jadwal harian pondok. Santri diharapkan membawa kitab yang sedang dipelajari dan mencatat penjelasan pengajar.",
      "Wali santri yang ingin menanyakan perkembangan belajar putra-putrinya dapat menghubungi pengurus pada jam layanan.",
      "Jadwal dapat berubah mengikuti kegiatan pondok. Perubahan akan diumumkan melalui halaman ini dan grup wali santri.",
    ],
  },
  {
    slug: "kerja-bakti-asrama",
    date: "2026-08-05",
    dateLabel: "5 Agustus 2026",
    category: "Pondok",
    title: "Kerja bakti perbaikan asrama",
    excerpt:
      "Santri dan pengurus membersihkan asrama serta memperbaiki sebagian fasilitas yang rusak.",
    body: [
      "Santri bersama pengurus mengadakan kerja bakti membersihkan asrama dan memperbaiki sebagian fasilitas yang rusak.",
      "Kegiatan ini menjadi bagian dari pembinaan kemandirian. Santri belajar merawat tempat tinggal dan bekerja bersama.",
      "Donasi dari masyarakat ikut membantu perawatan bangunan pondok. Donatur dapat meminta laporan penggunaan dana melalui WhatsApp.",
    ],
  },
];

export const announcementBySlug = (slug: string) =>
  announcements.find((item) => item.slug === slug);
