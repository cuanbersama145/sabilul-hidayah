"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GirihPattern } from "@/components/girih-pattern";
import { StarMark } from "@/components/logo";
import type { Announcement } from "@/content/announcements";

const FILTERS = [
  "Semua",
  "Penerimaan Santri",
  "Akademik",
  "Kegiatan",
  "Jadwal dan Libur",
] as const;

type Filter = (typeof FILTERS)[number];

function AnnouncementCard({ item }: { item: Announcement }) {
  const href = `/pengumuman/${item.slug}/`;

  return (
    <article className="kartu-timbul group flex h-full flex-col overflow-hidden rounded-card border border-ink/10 bg-paper">
      <div className="gambar-sorot relative aspect-[4/3] overflow-hidden bg-forest-900">
        {item.image ? (
          <Image
            src={item.image}
            alt={`Thumbnail pengumuman ${item.title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="gambar-zoom object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-forest-950 via-forest-700 to-forest-800">
            <GirihPattern
              id={`girih-${item.slug}`}
              className="absolute inset-0 h-full w-full text-gold-300/15"
            />
            <StarMark className="relative h-12 w-12 text-gold-300/80" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-label text-muted">
          <span className="rounded-full border border-gold-600/30 bg-gold-100/60 px-2.5 py-1 text-gold-700">
            {item.category}
          </span>
          <span className="h-px w-4 bg-ink/20" aria-hidden="true" />
          <time dateTime={item.date}>{item.dateLabel}</time>
        </div>

        <h2 className="mt-4 font-display text-xl leading-snug tracking-tight">
          <Link
            href={href}
            className="transition hover:text-forest-800"
          >
            {item.title}
          </Link>
        </h2>

        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
          {item.excerpt}
        </p>

        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-1.5 self-start text-xs font-semibold uppercase tracking-label text-ink transition hover:text-gold-700"
        >
          Baca selengkapnya
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

export function AnnouncementGallery({ items }: { items: Announcement[] }) {
  const [active, setActive] = useState<Filter>("Semua");

  const hasil =
    active === "Semua"
      ? items
      : items.filter((item) => item.category === active);

  return (
    <section className="pb-16 md:pb-24">
      <div className="wrap">
        <div
          role="group"
          aria-label="Filter kategori pengumuman"
          className="flex flex-wrap gap-2"
        >
          {FILTERS.map((filter) => {
            const aktif = active === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={aktif}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-label transition duration-200 ${
                  aktif
                    ? "border-forest-900 bg-forest-900 text-paper"
                    : "border-ink/15 text-muted hover:border-ink/40 hover:text-ink"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {hasil.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hasil.map((item) => (
              <AnnouncementCard key={item.slug} item={item} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-card border border-dashed border-ink/20 bg-paper2/40 px-6 py-16 text-center">
            <StarMark className="mx-auto h-8 w-8 text-gold-600" />
            <p className="mt-4 font-display text-xl tracking-tight">
              Belum ada pengumuman di kategori ini.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Coba lihat semua pengumuman atau pilih kategori lain.
            </p>
            <button
              type="button"
              onClick={() => setActive("Semua")}
              className="btn-secondary mt-6"
            >
              Lihat semua pengumuman
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
