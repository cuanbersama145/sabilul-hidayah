import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading } from "@/components/section";
import { GirihPattern } from "@/components/girih-pattern";
import { StarMark } from "@/components/logo";
import { CopyButton } from "@/components/copy-button";
import { DonationForm } from "@/components/forms";
import { donationUses, site, waLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Donasi",
  description:
    "Salurkan donasi untuk biaya pendidikan, asrama, makan, dan perawatan Pondok Pesantren Salafi Sabilul Hidayah.",
};

const transferSteps = [
  "Transfer ke rekening resmi di bawah ini.",
  "Simpan bukti transfer.",
  "Kirim konfirmasi lewat form agar pengurus dapat mencocokkan dengan mutasi.",
];

export default function DonasiPage() {
  return (
    <>
      <PageHero
        eyebrow="Donasi"
        title="Pendidikan gratis, biayanya ditanggung bersama."
        lead="Pondok tidak memungut biaya dari wali santri. Donasi menutup kebutuhan pendidikan, makan santri, dan perawatan bangunan."
        anim="naik"
      />

      {/* ALASAN */}
      <section className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Kenapa donasi"
              title="Donasi menjaga pintu pondok tetap terbuka."
            />
            <div className="mt-5 space-y-5 text-base leading-relaxed text-muted">
              <p>
                Setiap santri makan, tidur, dan mengaji di pondok tanpa
                membayar. Biaya yang seharusnya dibebankan kepada wali santri
                dipikul bersama oleh para donatur.
              </p>
              <p>
                Donasi dipakai untuk kebutuhan yang tidak terlihat di foto:
                beras, lauk, listrik, air, kitab, honor pengajar, dan perbaikan
                bangunan.
              </p>
              <p>
                Donasi dalam jumlah berapa pun dicatat. Pengurus melaporkan
                penggunaan dana setiap bulan.
              </p>
            </div>
          </div>

          <div className="rounded-card border border-ink/10 bg-paper2/60 p-7 sm:p-9">
            <p className="label">Donasi dipakai untuk</p>
            <ul className="mt-5 divide-y divide-ink/10">
              {donationUses.map((item, index) => (
                <li key={item.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                  <span className="font-display text-lg text-gold-600">
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

      {/* REKENING + FORM */}
      <section className="border-y border-ink/10 bg-paper2/50 py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Cara berdonasi" title="Transfer, lalu konfirmasi." />

            <div className="relative mt-8 overflow-hidden rounded-card bg-forest-900 p-7 text-paper sm:p-8">
              <GirihPattern
                id="rekening-girih"
                className="pointer-events-none absolute inset-0 h-full w-full text-gold-300/[0.08]"
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-label text-gold-300">
                    Rekening resmi
                  </p>
                  <CopyButton value={site.bank.number} label="Salin nomor" />
                </div>
                <p className="mt-4 text-sm text-paper/60">{site.bank.name}</p>
                <p className="mt-1 font-display text-[2rem] tracking-tight text-paper sm:text-4xl">
                  {site.bank.number}
                </p>
                <p className="mt-2 text-sm text-paper/60">
                  a.n. {site.bank.holder}
                </p>
              </div>
            </div>

            <ol className="mt-8 space-y-4">
              {transferSteps.map((step, index) => (
                <li key={step} className="flex gap-4 text-sm leading-relaxed text-muted">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500 text-[0.65rem] font-bold text-forest-950">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            <div className="mt-8 rounded-xl border border-gold-600/30 bg-gold-100/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-label text-gold-700">
                Hati-hati
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Pondok hanya memakai rekening yang tercantum di halaman ini.
                Jika menerima nomor lain yang mengaku atas nama pondok,
                konfirmasikan lebih dulu ke{" "}
                <a
                  href={waLink("Assalamu'alaikum, saya ingin memastikan nomor rekening donasi pondok.")}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-ink link-underline"
                >
                  WhatsApp resmi
                </a>
                .
              </p>
            </div>
          </div>

          <div className="rounded-card border border-ink/10 bg-paper p-7 shadow-card sm:p-9">
            <h2 className="font-display text-2xl tracking-tight">
              Konfirmasi donasi
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Isi data berikut setelah transfer. Form akan membuka WhatsApp
              berisi ringkasan donasi Anda.
            </p>
            <div className="mt-7">
              <DonationForm />
            </div>
          </div>
        </div>
      </section>

      {/* LAPORAN */}
      <section className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <SectionHeading
            eyebrow="Laporan"
            title="Dana dicatat, penggunaan dilaporkan."
            lead="Pengurus merekap donasi yang masuk dan menyusun laporan penggunaan dana setiap bulan."
          />
          <div className="space-y-5">
            {[
              {
                title: "Rekap pemasukan",
                body: "Donasi dicatat berdasarkan mutasi rekening dan konfirmasi yang masuk.",
              },
              {
                title: "Laporan penggunaan",
                body: "Pengeluaran untuk dapur, kitab, honor pengajar, dan perawatan bangunan direkap per bulan.",
              },
              {
                title: "Laporan terbuka",
                body: "Donatur dan wali santri dapat meminta laporan terbaru melalui pengurus.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 border-b border-ink/10 pb-5 last:border-0">
                <StarMark className="mt-1 h-4 w-4 shrink-0 text-gold-600" />
                <div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
            <a
              href={waLink("Assalamu'alaikum, saya ingin meminta laporan penggunaan dana donasi pondok.")}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Minta laporan terbaru
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ink/10 py-14">
        <div className="wrap flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-relaxed text-muted">
            Ingin menyalurkan donasi barang, kitab, kebutuhan dapur, atau ingin{" "}
            <Link href="/tempe/" className="font-semibold text-gold-700 underline decoration-gold-600/40 underline-offset-4 transition hover:text-gold-600">
              membeli tempe
            </Link>
            ? Hubungi pengurus agar penyaluran dan pembeliannya tercatat.
          </p>
          <Link href="/kontak/" className="btn-primary shrink-0">
            Hubungi pengurus
          </Link>
        </div>
      </section>
    </>
  );
}
