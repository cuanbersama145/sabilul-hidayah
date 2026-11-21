export type SiteConfig = {
  url: string;
  address: {
    line: string;
    district: string;
    regency: string;
    province: string;
    postal: string;
  };
  contact: {
    /** Nomor utama (format 62…) — dipakai semua tombol "Buka WhatsApp". */
    whatsapp: string;
    /** Tampilan nomor utama. Daftar nomor lengkap ada di `phones`. */
    whatsappDisplay: string;
    email: string;
    hours: string;
  };
  /** Daftar nomor yang bisa dihubungi (WhatsApp). Nomor pertama = utama. */
  phones: { label: string; whatsapp: string; display: string }[];
  /** Daftar rekening donasi. Entri pertama = rekening utama. */
  banks: { name: string; number: string; holder: string }[];
  pengasuh: string;
  requirements: string[];
  schedule: { time: string; activity: string }[];
  facilities: string[];
};

export const siteConfig: SiteConfig = {
  // GANTI: URL domain resmi pondok sebelum rilis. Tanpa garis miring di akhir.
  url: "https://sabilul-hidayah.vercel.app",
  address: {
    line: "Jl. Raya Sabilul Hidayah, Desa …",
    district: "Kecamatan …",
    regency: "Kabupaten …",
    province: "Jawa …",
    postal: "…",
  },
  contact: {
    whatsapp: "6281234567890",
    whatsappDisplay: "0812-3456-7890",
    email: "info@sabilulhidayah.id",
    hours: "Setiap hari, 08.00–17.00 WIB",
  },
  // GANTI: isi dua nomor kontak pondok yang bisa dihubungi.
  // `whatsapp` = format internasional tanpa tanda + (mis. 62…),
  // `display` = bentuk yang mudah dibaca manusia.
  phones: [
    { label: "Panitia Pendaftaran", whatsapp: "6281234567890", display: "0812-3456-7890" },
    { label: "Pengasuh / Pengurus", whatsapp: "6281234567891", display: "0812-3456-7891" },
  ],
  // GANTI: isi rekening donasi resmi pondok. Semua rekening tampil di
  // halaman donasi, beranda, dan footer. Entri pertama = rekening utama.
  banks: [
    {
      name: "Bank Syariah Indonesia (BSI)",
      number: "1234567890",
      holder: "Pondok Pesantren Sabilul Hidayah",
    },
    // GANTI: rekening kedua (placeholder). Nomor nol semua = belum diisi.
    // Hapus entri ini bila pondok hanya punya satu rekening.
    {
      name: "Bank Mandiri",
      number: "0000000000000",
      holder: "Pondok Pesantren Sabilul Hidayah",
    },
  ],
  pengasuh: "Ust. Misbah Ridwan Nur Zaman",
  requirements: [
    "Fotokopi Kartu Keluarga",
    "Fotokopi Akta Kelahiran",
    "Fotokopi ijazah atau surat keterangan sekolah terakhir",
    "Pas foto ukuran 3x4 sebanyak 2 lembar",
  ],
  schedule: [
    { time: "04.00", activity: "Bangun, shalat Subuh berjamaah" },
    { time: "05.00", activity: "Kajian kitab pagi" },
    { time: "06.30", activity: "Makan pagi dan persiapan" },
    { time: "07.30", activity: "Madrasah diniyah" },
    { time: "10.00", activity: "Istirahat" },
    { time: "11.00", activity: "Kajian lanjutan" },
    { time: "12.00", activity: "Shalat Dzuhur dan makan siang" },
    { time: "13.30", activity: "Madrasah diniyah" },
    { time: "15.00", activity: "Shalat Ashar dan sorogan" },
    { time: "17.00", activity: "Shalat Maghrib dan kajian" },
    { time: "19.00", activity: "Shalat Isya dan mudzakarah" },
    { time: "21.30", activity: "Istirahat" },
  ],
  facilities: [
    "Masjid",
    "Asrama santri",
    "Madrasah",
    "Dapur umum",
    "Kamar mandi",
  ],
};
