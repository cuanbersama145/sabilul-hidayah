import { siteConfig } from "./site-config";

export const site = {
  name: "Sabilul Hidayah",
  fullName: "Pondok Pesantren Salafi Sabilul Hidayah",
  tagline: "Pesantren salafi, gratis sepenuhnya",
  description:
    "Pondok Pesantren Salafi Sabilul Hidayah mendidik santri dengan kajian kitab kuning, adab, dan hidup bersama. Pendidikan, asrama, makan, dan kitab tidak memungut biaya.",

  url: siteConfig.url,
  address: siteConfig.address,
  contact: siteConfig.contact,
  bank: siteConfig.bank,
  pengasuh: siteConfig.pengasuh,
} as const;

export const nav = [
  { label: "Profil", href: "/profil/" },
  { label: "Pendidikan", href: "/pendidikan/" },
  { label: "Pendaftaran", href: "/pendaftaran/" },
  { label: "Pengumuman", href: "/pengumuman/" },
  { label: "Donasi", href: "/donasi/" },
  { label: "Kontak", href: "/kontak/" },
];

export const waLink = (message: string) =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const pillars = [
  {
    title: "Gratis penuh",
    body: "Tidak ada biaya pendidikan, asrama, makan, maupun kitab. Santri tinggal dan belajar tanpa beban administrasi.",
  },
  {
    title: "Kajian kitab kuning",
    body: "Ilmu alat, fiqih, dan akhlak diajarkan langsung dari kitab yang dipelajari para ulama.",
  },
  {
    title: "Hidup bersama",
    body: "Santri mukim di pondok, belajar disiplin, dan membiasakan adab dalam kehidupan sehari-hari.",
  },
  {
    title: "Terbuka untuk umum",
    body: "Pintu pondok terbuka bagi siapa saja yang ingin menuntut ilmu dan siap mengikuti aturan pondok.",
  },
];

export const programs = [
  {
    number: "01",
    title: "Ilmu Alat",
    body: "Nahwu, sharaf, dan balaghah sebagai kunci membaca dan memahami kitab kuning.",
    points: ["Nahwu dan sharaf", "Balaghah", "Praktik membaca kitab"],
  },
  {
    number: "02",
    title: "Fiqih dan Akhlak",
    body: "Kajian fiqih ibadah dan muamalah, disertai pembinaan akhlak dan adab sehari-hari.",
    points: ["Fiqih ibadah", "Fiqih muamalah", "Adab dan akhlak"],
  },
  {
    number: "03",
    title: "Al-Qur'an",
    body: "Perbaikan bacaan, hafalan bertahap, dan pemahaman makna ayat yang dipelajari.",
    points: ["Tahsin bacaan", "Tahfidz bertahap", "Mudzakarah"],
  },
];

export const registrationSteps = [
  {
    number: "01",
    title: "Hubungi panitia",
    body: "Tanyakan jadwal, syarat, dan ketersediaan tempat melalui WhatsApp atau datang langsung ke pondok.",
  },
  {
    number: "02",
    title: "Siapkan berkas",
    body: "Kumpulkan berkas yang diminta panitia. Tidak ada biaya pendaftaran yang perlu dibayar.",
  },
  {
    number: "03",
    title: "Datang ke pondok",
    body: "Pendaftaran dilakukan langsung di pondok agar panitia dapat menjelaskan aturan dan jadwal masuk.",
  },
  {
    number: "04",
    title: "Mulai mukim",
    body: "Setelah diterima, santri menempati asrama dan mengikuti kegiatan sesuai jadwal pondok.",
  },
];

export const requirements = siteConfig.requirements;

export const schedule = siteConfig.schedule;

export const facilities = siteConfig.facilities;

export const values = [
  {
    title: "Ikhlas",
    body: "Menuntut ilmu untuk mencari ridha Allah, bukan untuk pujian atau kedudukan.",
  },
  {
    title: "Adab",
    body: "Menghormati guru, orang tua, dan sesama menjadi dasar sebelum menuntut ilmu.",
  },
  {
    title: "Sederhana",
    body: "Hidup bersama di pondok melatih santri mencukupkan diri dan berbagi.",
  },
  {
    title: "Mandiri",
    body: "Santri dibiasakan mengurus dirinya dan membantu kebutuhan pondok.",
  },
];

export const donationUses = [
  {
    title: "Pendidikan",
    body: "kitab pegangan, dan kebutuhan madrasah.",
  },
  {
    title: "Asrama dan makan",
    body: "Kebutuhan harian santri, listrik, air, dan dapur umum.",
  },
  {
    title: "Perawatan",
    body: "Perbaikan bangunan, masjid, dan fasilitas pondok.",
  },
];

export const faq = [
  {
    q: "Apakah benar tidak ada biaya sama sekali?",
    a: "Pondok tidak memungut biaya pendidikan, asrama, makan, maupun kitab. Jika ada pihak yang meminta pembayaran atas nama pondok, konfirmasikan dulu ke kontak resmi.",
  },
  {
    q: "Bagaimana cara mendaftar?",
    a: "Hubungi panitia untuk menanyakan jadwal dan syarat, lalu datang langsung ke pondok. Pendaftaran tidak dilakukan lewat situs ini.",
  },
  {
    q: "Apakah santri wajib mukim?",
    a: "Santri tinggal di asrama agar dapat mengikuti kegiatan pondok secara utuh. Ketentuan khusus dapat ditanyakan kepada panitia.",
  },
  {
    q: "Berkas apa saja yang perlu dibawa?",
    a: "Fotokopi Kartu Keluarga, akta kelahiran, ijazah terakhir, pas foto, dan surat keterangan sehat. Panitia akan mengonfirmasi bila ada tambahan.",
  },
  {
    q: "Bolehkah saya berdonasi?",
    a: "Boleh. Donasi dipakai untuk biaya pendidikan, asrama, makan, dan perawatan pondok. Rincian rekening tersedia di halaman donasi.",
  },
];
