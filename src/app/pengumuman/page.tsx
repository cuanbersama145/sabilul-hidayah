import type { Metadata } from "next";
import { AnnouncementGallery } from "@/components/announcement-gallery";
import { PageHero } from "@/components/section";
import { announcements } from "@/content/announcements";

const DESKRIPSI =
  "Temukan informasi terbaru mengenai kegiatan, pendidikan, jadwal, dan berbagai pengumuman resmi Pondok Pesantren.";

export const metadata: Metadata = {
  title: "Pengumuman",
  description: DESKRIPSI,
};

export default function PengumumanPage() {
  return (
    <>
      <PageHero
        eyebrow="Pengumuman"
        title="Pengumuman"
        lead={DESKRIPSI}
        anim="naik"
      />

      <section className="pt-10">
        <div className="wrap">
          <p className="rounded-xl border border-gold-600/30 bg-gold-100/60 px-5 py-4 text-sm leading-relaxed text-ink">
            Pengumuman di halaman ini masih contoh, bukan kabar resmi pondok.
            Pengurus akan menggantinya dengan pengumuman asli.
          </p>
        </div>
      </section>

      <div className="pt-8">
        <AnnouncementGallery items={announcements} />
      </div>
    </>
  );
}
