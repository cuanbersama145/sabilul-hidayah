import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/section";
import { announcements } from "@/content/announcements";

export const metadata: Metadata = {
  title: "Pengumuman",
  description:
    "Pengumuman resmi, jadwal kegiatan, dan informasi terbaru dari Pondok Pesantren Salafi Sabilul Hidayah.",
};

export default function PengumumanPage() {
  return (
    <>
      <PageHero
        eyebrow="Pengumuman"
        title="Kabar dari pondok."
        lead="Informasi resmi untuk wali santri, calon santri, dan masyarakat. Pengumuman lama tetap diarsipkan di halaman ini."
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

      <section className="pt-8 pb-16 md:pb-24">
        <div className="wrap">
          <div className="border-t border-ink/10">
            {announcements.map((item) => (
              <article
                key={item.slug}
                className="group grid gap-4 border-b border-ink/10 py-8 md:grid-cols-[180px_1fr_auto] md:items-start md:gap-8"
              >
                <div className="flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-label text-muted md:flex-col md:items-start md:gap-2">
                  <time dateTime={item.date}>{item.dateLabel}</time>
                  <span className="rounded-full border border-gold-600/30 bg-gold-100/50 px-2.5 py-1 text-gold-700">
                    {item.category}
                  </span>
                </div>

                <div>
                  <h2 className="font-display text-2xl leading-snug tracking-tight">
                    <Link href={`/pengumuman/${item.slug}/`} className="transition hover:text-forest-800">
                      {item.title}
                    </Link>
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {item.excerpt}
                  </p>
                </div>

                <Link
                  href={`/pengumuman/${item.slug}/`}
                  className="hidden shrink-0 self-center text-xs font-semibold uppercase tracking-label text-ink transition group-hover:text-gold-700 md:block"
                >
                  Baca
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
