export type AnnouncementCategory =
  | "Penerimaan Santri"
  | "Akademik"
  | "Kegiatan"
  | "Jadwal dan Libur";

export type Announcement = {
  slug: string;
  /** Path gambar di public/, mis. /pengumuman/<slug>.jpg. Kosongkan untuk placeholder. */
  image?: string;
  date: string;
  dateLabel: string;
  category: AnnouncementCategory;
  title: string;
  excerpt: string;
  body: string[];
};

// CATATAN: seluruh pengumuman di bawah ini masih contoh, bukan kabar resmi pondok.
// Pengurus akan menggantinya dengan pengumuman asli.
export const announcements: Announcement[] = [
  {
    slug: "pendaftaran-santri-baru",
    date: "2026-11-12",
    dateLabel: "12 November 2026",
    category: "Penerimaan Santri",
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
    slug: "jadwal-wawancara-calon-santri",
    date: "2026-10-25",
    dateLabel: "25 Oktober 2026",
    category: "Penerimaan Santri",
    title: "Jadwal wawancara calon santri",
    excerpt:
      "Wawancara calon santri berlangsung di pondok sesuai jadwal yang disampaikan panitia kepada masing-masing pendaftar.",
    body: [
      "Panitia menyampaikan jadwal wawancara langsung kepada wali calon santri. Mohon hadir sesuai waktu yang diberikan dan membawa berkas yang sudah diminta saat pendaftaran.",
      "Wawancara bertujuan mengenalkan aturan pondok serta mendengar harapan wali terhadap pendidikan putra-putrinya. Hasil wawancara diumumkan melalui kontak resmi pondok.",
      "Jika berhalangan hadir, mohon kabari panitia lebih awal agar jadwal dapat disesuaikan. Pendaftaran tidak dipungut biaya dalam tahapan apa pun.",
    ],
  },
  {
    slug: "ujian-akhir-madrasah-diniyah",
    date: "2026-10-18",
    dateLabel: "18 Oktober 2026",
    category: "Akademik",
    title: "Ujian akhir madrasah diniyah",
    excerpt:
      "Ujian akhir madrasah diniyah dilaksanakan sesuai jadwal. Santri diminta menyiapkan kitab dan alat tulis masing-masing.",
    body: [
      "Ujian akhir madrasah diniyah dilaksanakan mengikuti jadwal yang ditetapkan pengajar. Santri diminta hadir tepat waktu dan membawa kitab yang sedang dipelajari.",
      "Pengajar akan mengingatkan kembali cakupan materi yang diujikan melalui pengajian harian. Wali santri dapat menanyakan perkembangan belajar pada jam layanan pengurus.",
      "Hasil ujian disampaikan secara tertulis bersama rapor belajar. Perubahan jadwal, bila ada, akan diumumkan di halaman ini.",
    ],
  },
  {
    slug: "pembagian-rapor-belajar",
    date: "2026-09-28",
    dateLabel: "28 September 2026",
    category: "Akademik",
    title: "Pembagian rapor belajar santri",
    excerpt:
      "Rapor belajar santri dibagikan kepada wali melalui pengurus. Isi rapor menjadi bahan diskusi lanjutan dengan pengajar.",
    body: [
      "Rapor belajar santri dibagikan kepada wali melalui pengurus pada jam layanan. Rapor berisi ringkasan capaian hafalan, kajian kitab, dan sikap santri selama masa belajar.",
      "Wali yang ingin mendiskusikan isi rapor dapat menghubungi pengajar yang bersangkutan. Pembahasan difokuskan pada langkah perbaikan yang bisa dilakukan bersama di rumah.",
      "Rapor disimpan oleh masing-masing wali santri. Pengurus tidak memungut biaya untuk pembuatan maupun penggandaan rapor.",
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
    slug: "jadwal-libur-semester-ganjil",
    date: "2026-09-05",
    dateLabel: "5 September 2026",
    category: "Jadwal dan Libur",
    title: "Jadwal libur semester ganjil",
    excerpt:
      "Libur semester ganjil digunakan santri untuk berlibur bersama keluarga sebelum kembali mengikuti kegiatan pondok.",
    body: [
      "Libur semester ganjil berlaku sesuai kalender yang disampaikan pengurus kepada wali santri. Selama libur, santri kembali ke keluarga masing-masing.",
      "Sebelum berangkat, santri diharapkan merapikan asrama dan menyerahkan barang yang ingin dititipkan kepada pengurus sesuai aturan yang berlaku.",
      "Jadwal kembali aktif akan diumumkan kembali di halaman ini. Wali dapat menghubungi pengurus apabila memerlukan penjelasan lebih lanjut.",
    ],
  },
  {
    slug: "kerja-bakti-asrama",
    date: "2026-08-05",
    dateLabel: "5 Agustus 2026",
    category: "Kegiatan",
    title: "Kerja bakti perbaikan asrama",
    excerpt:
      "Santri dan pengurus membersihkan asrama serta memperbaiki sebagian fasilitas yang rusak.",
    body: [
      "Santri bersama pengurus mengadakan kerja bakti membersihkan asrama dan memperbaiki sebagian fasilitas yang rusak.",
      "Santri belajar merawat tempat tinggal dan bekerja bersama.",
      "Donasi dari masyarakat ikut membantu perawatan bangunan pondok. Donatur dapat meminta laporan penggunaan dana melalui WhatsApp.",
    ],
  },
  {
    slug: "libur-kegiatan-pondok",
    date: "2026-07-10",
    dateLabel: "10 Juli 2026",
    category: "Jadwal dan Libur",
    title: "Libur singkat kegiatan pondok",
    excerpt:
      "Kegiatan kajian dan madrasah diniyah diliburkan selama beberapa hari. Jadwal penuh kembali setelahnya.",
    body: [
      "Kegiatan kajian dan madrasah diniyah diliburkan selama beberapa hari sesuai pengumuman pengurus. Shalat berjamaah tetap berlangsung seperti biasa.",
      "Wali santri yang menjemput putra-putrinya pada masa libur dimohon mencatat waktu kembali yang disampaikan panitia.",
      "Seluruh jadwal akan berjalan normal setelah masa libur berakhir. Informasi lanjutan akan ditambahkan di halaman ini.",
    ],
  },
];

export const announcementBySlug = (slug: string) =>
  announcements.find((item) => item.slug === slug);
