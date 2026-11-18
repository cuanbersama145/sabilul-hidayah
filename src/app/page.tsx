import Link from "next/link";
import { announcements } from "@/content/announcements";
import {
  donationUses,
  pillars,
  programs,
  registrationSteps,
  site,
  waLink,
} from "@/content/site";
import { GirihPattern } from "@/components/girih-pattern";
import { StarMark } from "@/components/logo";
import { SectionHeading } from "@/components/section";

export const revalidate = 60;

export default async function HomePage() {
  const latest = announcements.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ink/10 bg-gradient-to-b from-paper2/70 via-paper to-paper">
        <div className="wrap grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="animate-rise">
            <Link
              href="/pengumuman/pendaftaran-santri-baru/"
              className="eyebrow transition hover:border-gold-600/60 hover:bg-gold-100"
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-gold-600"
                aria-hidden="true"
              />
              Pendaftaran dibuka
              <span aria-hidden="true">→</span>
            </Link>

            <h1 className="mt-6 text-[2.9rem] leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.4rem]">
              Belajar ilmu agama tanpa memikirkan biaya.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Sabilul Hidayah mendidik santri dengan kajian kitab kuning, adab,
              dan hidup bersama. Pendidikan, asrama, makan, dan kitab tidak
              memungut biaya.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/pendaftaran/" className="btn-primary group">
                Cara Mendaftar
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <Link href="/donasi/" className="btn-secondary">
                Salurkan Donasi
              </Link>
			  <Link 
				href="/tempe/"
				className="text-sm font-semibold text-gold-700 underline decoration-gold-600/40 underline-offset-4 transition hover:text-gold-600">
				Atau dukung lewat pembelian tempe pondok 
				</Link>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
              {["Gratis penuh", "Mukim di asrama", "Kajian kitab kuning"].map(
                (item) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <StarMark className="h-3.5 w-3.5 text-gold-600" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md animate-rise lg:max-w-[400px]">
            <div
              className="detak detak-tunda pointer-events-none absolute -inset-10 rounded-full bg-gold-500/10 blur-3xl"
              aria-hidden="true"
            />

            {/* Desain hero: pelajar muslim dengan latar hijau geometris —
                latar transparan. Gambar diperbesar (160 persen) agar panel
                hijau menutupi area teks di dalam kolom; lebih kecil dari itu
                (di bawah ±144 persen) tepi kiri panel masuk melewati padding
                teks. Dipusatkan dengan flex (mx-auto gagal bila gambar lebih
                lebar dari kontainer). */}
            <div className="relative z-10 flex justify-center">
              <img
                src="/hero-santri.png"
                alt="Pelajar muslim Sabilul Hidayah"
                width={900}
                height={905}
                loading="eager"
                decoding="async"
                className="block w-[115%] max-w-none select-none drop-shadow-soft lg:w-[160%]"
              />
            </div>

            {/* Gradasi setengah badan di bagian bawah, dikunci ke dalam
                siluet gambar. Lebar scrim dibuat selebar gambar (160 persen,
                dipusatkan) sehingga gradasi merata di seluruh panel; mask
                (100 persen) menjaganya tetap di dalam siluet. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-1/2 z-[15] h-[50%] w-[115%] -translate-x-1/2 bg-gradient-to-t from-forest-950 via-forest-950/55 to-transparent lg:w-[160%]"
              style={{
                WebkitMaskImage: "url(/hero-santri.png)",
                maskImage: "url(/hero-santri.png)",
                WebkitMaskSize: "100% auto",
                maskSize: "100% auto",
                WebkitMaskPosition: "center bottom",
                maskPosition: "center bottom",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            />

            {/* Teks di bagian bawah, di depan kedua orang. */}
            <div className="absolute inset-x-0 bottom-0 z-20 px-6 pb-7 sm:px-8 sm:pb-9">
              <Link
                href="/pengumuman/"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-forest-950/45 px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-label text-paper backdrop-blur transition hover:bg-forest-950/70"
              >
                Pengumuman
                <span aria-hidden="true">→</span>
              </Link>
              <p className="mt-4 font-display text-[1.45rem] leading-snug text-paper sm:text-2xl">
                Tidak ada biaya pendidikan, asrama, makan, maupun kitab.
              </p>
              <p className="mt-3 text-[0.65rem] font-semibold uppercase tracking-label text-gold-300">
                Sabilul Hidayah
              </p>
            </div>

            <div className="pointer-events-none absolute -left-8 top-[26%] z-30 hidden rounded-2xl border border-ink/10 bg-paper px-5 py-4 shadow-card lg:block">
              <p className="font-display text-3xl leading-none text-forest-900">
                Rp 0
              </p>
              <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-label text-muted">
                Biaya pendidikan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="relative overflow-hidden border-b border-ink/10 bg-forest-900 py-16 text-paper md:py-20">
        <GirihPattern
          id="pillars-girih"
          className="pointer-events-none absolute inset-0 h-full w-full text-gold-300/[0.06]"
        />
        <div className="wrap relative">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold-300" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-label text-gold-300">
              Pilar pondok
            </span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                data-sh-anim="naik"
                data-sh-tunda={Math.min(index + 1, 5)}
              >
                <div className="kartu-timbul h-full rounded-card border border-paper/10 bg-forest-950/30 p-6">
                  <span className="ikon-timbul inline-flex h-10 w-10 items-center justify-center rounded-xl bg-paper/10 text-gold-300">
                    <StarMark className="h-4 w-4" />
                  </span>
                  <h2 className="mt-5 font-display text-lg tracking-tight text-paper">
                    {pillar.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-paper/70">
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Pendidikan"
              title="Yang dipelajari santri"
              lead="Kurikulum pondok salafi berpusat pada kitab kuning, dengan penekanan pada adab sebelum ilmu."
            />
            <Link
              href="/pendidikan/"
              className="shrink-0 text-sm font-semibold text-ink link-underline"
            >
              Selengkapnya
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {programs.map((program, index) => (
              <div
                key={program.number}
                data-sh-anim="naik"
                data-sh-tunda={Math.min(index + 1, 5)}
              >
                <article className="card kartu-timbul h-full">
                  <div className="flex items-center justify-between">
                    <span className="ikon-timbul inline-flex h-11 w-11 items-center justify-center rounded-xl bg-forest-900 text-gold-300">
                      <StarMark className="h-5 w-5" />
                    </span>
                    <span className="font-display text-sm text-gold-700">
                      {program.number}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl tracking-tight">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {program.body}
                  </p>
                  <ul className="mt-6 space-y-2 border-t border-ink/10 pt-5 text-sm text-ink/80">
                    {program.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIAYA */}
      <section className="border-y border-ink/10 bg-paper2/60 py-20 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div data-sh-anim="kiri">
            <SectionHeading
              eyebrow="Biaya"
              title="Gratis, dan biayanya ditanggung bersama."
              lead="Pondok tidak memungut biaya pendidikan, asrama, makan, maupun kitab. Kebutuhan harian santri ditutup dari wakaf, sedekah, dan donasi masyarakat."
            />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              Karena itu donasi bukan tambahan. Donasi adalah cara pondok tetap
              membuka pintu bagi santri yang tidak mampu membayar.
            </p>
            <Link
              href="/donasi/"
              className="mt-7 inline-flex text-sm font-semibold text-ink link-underline"
            >
              Lihat rincian donasi
            </Link>
          </div>

          <div
            data-sh-anim="kanan"
            className="rounded-card border border-ink/10 bg-paper p-7 shadow-card sm:p-8"
          >
            <p className="label">Donasi dipakai untuk</p>
            <ul className="mt-5 divide-y divide-ink/10">
              {donationUses.map((item, index) => (
                <li key={item.title} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                  <span className="font-display text-lg text-gold-700">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Pendaftaran"
              title="Empat langkah, tanpa biaya"
              lead="Pendaftaran tidak dilakukan lewat situs ini. Panitia menerima berkas dan menjelaskan aturan pondok secara langsung."
            />
            <Link
              href="/pendaftaran/"
              className="shrink-0 text-sm font-semibold text-ink link-underline"
            >
              Syarat dan jadwal
            </Link>
          </div>

          <ol className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {registrationSteps.map((step, index) => (
              <li
                key={step.number}
                data-sh-anim="naik"
                data-sh-tunda={Math.min(index + 1, 5)}
                className="flex gap-5"
              >
                <span className="font-display text-4xl leading-none text-gold-700">
                  {step.number}
                </span>
                <div className="border-t border-ink/10 pt-4">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      <section className="border-y border-ink/10 bg-paper2/50 py-20 md:py-24">
        <div className="wrap">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Pengumuman"
              title="Kabar dari pondok"
              lead="Informasi jadwal, kegiatan, dan pemberitahuan resmi untuk wali santri dan masyarakat."
            />
            <Link
              href="/pengumuman/"
              className="shrink-0 text-sm font-semibold text-ink link-underline"
            >
              Semua pengumuman
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {latest.map((item, index) => (
              <div
                key={item.slug}
                data-sh-anim="naik"
                data-sh-tunda={Math.min(index + 1, 5)}
              >
                <Link
                  href={`/pengumuman/${item.slug}/`}
                  className="card kartu-timbul group flex h-full flex-col bg-paper"
                >
                  <div className="flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-label text-muted">
                    <span className="text-gold-700">{item.category}</span>
                    <span className="h-px w-4 bg-ink/20" />
                    <time dateTime={item.date}>{item.dateLabel}</time>
                  </div>
                  <h3 className="mt-4 font-display text-xl leading-snug tracking-tight group-hover:text-forest-800">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {item.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-label text-ink">
                    Baca
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="wrap">
          <div
            data-sh-anim="naik"
            className="relative overflow-hidden rounded-card border border-ink/10 bg-paper2/70 px-6 py-12 sm:px-10 md:px-14"
          >
            <GirihPattern
              id="cta-girih"
              className="pointer-events-none absolute inset-0 h-full w-full text-gold-600/[0.08]"
            />
            <div className="relative grid gap-8 lg:grid-cols-[1.15fr_auto] lg:items-center">
              <div>
                <span className="eyebrow">
                  <span
                    className="h-1 w-1 rounded-full bg-gold-600"
                    aria-hidden="true"
                  />
                  Pendaftaran
                </span>
                <h2 className="mt-4 max-w-xl text-3xl leading-tight tracking-tight md:text-4xl">
                  Sudah siap mondok?
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                  Datang langsung ke pondok pada jam layanan, atau tanyakan
                  jadwal dan syarat lewat WhatsApp. Pendaftaran tidak dipungut
                  biaya.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/pendaftaran/" className="btn-primary">
                  Lihat cara mendaftar
                  <span aria-hidden="true">→</span>
                </Link>
                <a
                  href={waLink(
                    "Assalamu'alaikum, saya ingin bertanya tentang pendaftaran santri baru di Pondok Pesantren Sabilul Hidayah.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  Tanya panitia
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DONATION BAND */}
      <section className="relative overflow-hidden bg-forest-900 text-paper">
        <GirihPattern
          id="band-girih"
          className="pointer-events-none absolute inset-0 h-full w-full text-gold-300/[0.09]"
        />
        <div className="wrap relative grid gap-10 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div data-sh-anim="kiri">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold-300" />
              <span className="text-[0.7rem] font-semibold uppercase tracking-label text-gold-300">
                Donasi
              </span>
            </div>
            <h2 className="mt-5 max-w-xl text-3xl leading-tight tracking-tight text-paper md:text-[2.7rem]">
              Menjaga pintu pondok tetap terbuka.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/70">
              Setiap donasi membantu biaya pendidikan, makan santri, dan
              perawatan bangunan. Pengurus mencatat dan melaporkan
              penggunaannya.
            </p>
          </div>

          <div
            data-sh-anim="kanan"
            className="rounded-card border border-paper/15 bg-forest-950/40 p-7 backdrop-blur sm:p-8"
          >
            <p className="text-[0.65rem] font-semibold uppercase tracking-label text-gold-300">
              Rekening resmi
            </p>
            <p className="mt-3 text-sm text-paper/60">{site.bank.name}</p>
            <p className="mt-1 font-display text-3xl tracking-tight text-paper">
              {site.bank.number}
            </p>
            <p className="mt-1 text-sm text-paper/60">a.n. {site.bank.holder}</p>
            <Link href="/donasi/" className="btn-gold mt-6 w-full">
              Lihat cara berdonasi
            </Link>
            <a
              href={waLink(
                "Assalamu'alaikum, saya ingin menanyakan cara berdonasi untuk pondok.",
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-center text-xs text-paper/55 underline decoration-paper/25 underline-offset-4 transition hover:text-paper"
            >
              Tanya pengurus lewat WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
