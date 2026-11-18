import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StarMark } from "@/components/logo";
import { announcementBySlug, announcements } from "@/content/announcements";
import { waLink } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return announcements.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = announcementBySlug(slug);

  if (!item) return { title: "Pengumuman tidak ditemukan" };

  return {
    title: item.title,
    description: item.excerpt,
  };
}

export default async function AnnouncementPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = announcementBySlug(slug);

  if (!item) notFound();

  return (
    <article className="py-16 md:py-24">
      <div className="wrap">
        <div className="mx-auto max-w-prose">
          <Link
            href="/pengumuman/"
            className="text-xs font-semibold uppercase tracking-label text-muted transition hover:text-ink"
          >
            ← Semua pengumuman
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-label">
            <span className="rounded-full border border-gold-600/30 bg-gold-100/60 px-2.5 py-1 text-gold-700">
              {item.category}
            </span>
            <time dateTime={item.date} className="text-muted">
              {item.dateLabel}
            </time>
          </div>

          <h1 className="mt-5 text-[2.2rem] leading-[1.08] tracking-tight md:text-5xl">
            {item.title}
          </h1>

          <div className="mt-6 h-px w-16 bg-gold-600" />

          <p className="mt-8 rounded-xl border border-gold-600/30 bg-gold-100/60 px-5 py-4 text-sm leading-relaxed text-ink">
            Pengumuman ini masih contoh, bukan kabar resmi pondok.
          </p>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/80">
            {item.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-ink/10 bg-paper2/60 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <StarMark className="mt-1 h-5 w-5 shrink-0 text-gold-600" />
              <div>
                <h2 className="font-display text-xl tracking-tight">
                  Ada yang ingin ditanyakan?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Hubungi pengurus pada jam layanan. Untuk urusan masing-masing
                  santri, gunakan WhatsApp agar tercatat.
                </p>
                <a
                  href={waLink(
                    `Assalamu'alaikum, saya ingin menanyakan pengumuman "${item.title}".`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary mt-5"
                >
                  Hubungi pengurus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
