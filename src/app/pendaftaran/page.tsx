import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/section";
import { StarMark } from "@/components/logo";
import { InquiryForm } from "@/components/forms";
import { faq, registrationSteps, requirements, site, waLinkTo } from "@/content/site";

export const metadata: Metadata = {
  title: "Pendaftaran",
  description:
    "Syarat, alur, dan jadwal pendaftaran santri baru Pondok Pesantren Salafi Sabilul Hidayah. Gratis, tanpa biaya pendaftaran.",
};

export default function PendaftaranPage() {
  return (
    <>
      <PageHero
        eyebrow="Pendaftaran"
        title="Mendaftar tanpa biaya, langsung di pondok."
        lead="Pendaftaran tidak dilakukan lewat situs ini. Halaman ini menjelaskan alur, syarat, dan hal yang perlu dibawa sebelum datang."
        anim="naik"
      >
        <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-gold-600/40 bg-gold-100/60 px-4 py-2 text-xs font-semibold text-gold-700">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-600" />
          Biaya pendaftaran: Rp 0
        </div>
      </PageHero>

      {/* ALUR */}
      <section className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow="Alur" title="Empat langkah" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Panitia menerima pendaftaran pada jam layanan. Datang lebih awal
              agar cukup waktu untuk bertanya dan melihat lingkungan pondok.
            </p>
            <div className="mt-7 rounded-2xl border border-ink/10 bg-paper2/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-label text-gold-700">
                Penting
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Pondok tidak memungut biaya dalam bentuk apa pun. Jika ada pihak
                yang meminta pembayaran atas nama pondok, konfirmasikan dulu ke
                kontak resmi.
              </p>
            </div>
          </div>

          <ol className="space-y-8">
            {registrationSteps.map((step) => (
              <li key={step.number} className="flex gap-6 border-b border-ink/10 pb-8 last:border-0 last:pb-0">
                <span className="font-display text-3xl leading-none text-gold-700">
                  {step.number}
                </span>
                <div>
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

      {/* SYARAT */}
      <section className="border-y border-ink/10 bg-paper2/60 py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <SectionHeading
            eyebrow="Berkas"
            title="Yang perlu dibawa"
            lead="Bawa berkas asli untuk ditunjukkan kepada panitia. Fotokopi diserahkan sebagai arsip pondok."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {requirements.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-ink/10 bg-paper px-5 py-4 text-sm"
              >
                <StarMark className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <SectionHeading
            eyebrow="Pertanyaan"
            title="Yang sering ditanyakan"
            lead="Belum terjawab? Kirim pertanyaan lewat form di bawah."
          />
          <div className="border-t border-ink/10">
            {faq.map((item) => (
              <details key={item.q} className="group border-b border-ink/10 py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-medium [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 font-display text-xl leading-none text-gold-600 transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="border-t border-ink/10 bg-paper2/50 py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Tanya panitia"
              title="Kirim pertanyaan Anda"
              lead="Tulis pertanyaan singkat, lalu lanjutkan percakapan di WhatsApp. Balasan diberikan pada jam layanan."
            />
            <div className="mt-8 space-y-3 text-sm text-muted">
              <div>
                <span className="font-semibold text-ink">WhatsApp:</span>
                <ul className="mt-1 space-y-1">
                  {site.phones.map((phone) => (
                    <li key={phone.whatsapp}>
                      <a
                        href={waLinkTo(
                          phone.whatsapp,
                          "Assalamu'alaikum, saya ingin bertanya tentang pendaftaran santri baru.",
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium tabular-nums text-ink link-underline"
                      >
                        {phone.display}
                      </a>
                      <span className="text-muted"> — {phone.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p>
                <span className="font-semibold text-ink">Jam layanan:</span>{" "}
                {site.contact.hours}
              </p>
              <p>
                <span className="font-semibold text-ink">Alamat:</span>{" "}
                {site.address.line}, {site.address.district},{" "}
                {site.address.regency}
              </p>
            </div>
            <a
              href={waLinkTo(
                site.phones[0].whatsapp,
                "Assalamu'alaikum, saya ingin bertanya tentang pendaftaran santri baru.",
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex text-sm font-semibold text-ink link-underline"
            >
              Buka WhatsApp panitia
            </a>
          </div>

          <div className="rounded-card border border-ink/10 bg-paper p-7 shadow-card sm:p-9">
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
