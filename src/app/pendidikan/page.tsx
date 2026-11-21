import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading } from "@/components/section";
import { StarMark } from "@/components/logo";
import { facilities, programs, schedule } from "@/content/site";

export const metadata: Metadata = {
  title: "Pendidikan",
  description:
    "Program kajian kitab kuning, fiqih, akhlak, dan Al-Qur'an di Pondok Pesantren Salafi Sabilul Hidayah.",
};

export default function PendidikanPage() {
  return (
    <>
      <PageHero
        eyebrow="Pendidikan"
        title="Kitab kuning, adab, dan hidup bersama."
        lead="Santri belajar langsung dari kitab yang dipelajari para ulama. Penempatan jenjang mengikuti kesiapan santri, bukan usianya."
        anim="naik"
      />

      {/* PROGRAM */}
      <section className="py-16 md:py-24">
        <div className="wrap">
          <SectionHeading eyebrow="Program" title="Tiga pijakan belajar" />
          <div className="mt-12 space-y-4">
            {programs.map((program) => (
              <article
                key={program.number}
                className="grid gap-6 rounded-card border border-ink/10 p-7 md:grid-cols-[auto_1fr_1fr] md:items-start md:gap-10 md:p-9"
              >
                <span className="font-display text-4xl leading-none text-gold-700">
                  {program.number}
                </span>
                <div>
                  <h3 className="font-display text-2xl tracking-tight">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {program.body}
                  </p>
                </div>
                <ul className="space-y-2 border-t border-ink/10 pt-4 text-sm text-ink/80 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                  {program.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <StarMark className="mt-0.5 h-3 w-3 shrink-0 text-gold-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* JADWAL */}
      <section className="border-y border-ink/10 bg-paper2/60 py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Jadwal harian"
              title="Sehari di pondok"
              lead="Kegiatan berjalan dari sebelum Subuh sampai malam. Jadwal dapat berubah mengikuti kegiatan pondok."
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              Santri baru mengikuti jadwal yang sama, dengan pendampingan
              tambahan pada pekan pertama.
            </p>
          </div>

          <div className="overflow-hidden rounded-card border border-ink/10 bg-paper">
            <table className="w-full text-left text-sm">
              <thead className="bg-forest-900 text-paper">
                <tr>
                  <th scope="col" className="px-5 py-3.5 text-[0.65rem] font-semibold uppercase tracking-label text-gold-300">
                    Waktu
                  </th>
                  <th scope="col" className="px-5 py-3.5 text-[0.65rem] font-semibold uppercase tracking-label text-gold-300">
                    Kegiatan
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10">
                {schedule.map((row) => (
                  <tr key={row.time} className="transition-colors hover:bg-paper2/50">
                    <td className="w-24 px-5 py-3 font-display text-base text-forest-800 tabular-nums">
                      {row.time}
                    </td>
                    <td className="px-5 py-3 text-ink/80">{row.activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FASILITAS */}
      <section className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Fasilitas"
            title="Yang tersedia di pondok"
            lead="Fasilitas sederhana, dirawat bersama oleh santri dan pengurus."
          />
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {facilities.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-ink/10 bg-paper px-4 py-4 text-sm"
              >
                <StarMark className="h-3.5 w-3.5 shrink-0 text-gold-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ink/10 py-16 md:py-20">
        <div className="wrap flex flex-col items-start justify-between gap-6 rounded-card bg-forest-900 px-7 py-10 text-paper sm:px-10 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl tracking-tight text-paper md:text-3xl">
              Ingin anak Anda belajar di sini?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-paper/70">
              Pendaftaran gratis dan dilakukan langsung di pondok. Hubungi
              panitia untuk menanyakan jadwal dan syarat.
            </p>
          </div>
          <Link href="/pendaftaran/" className="btn-gold shrink-0">
            Info pendaftaran
          </Link>
        </div>
      </section>
    </>
  );
}
