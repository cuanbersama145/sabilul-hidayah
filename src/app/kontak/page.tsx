import type { Metadata } from "next";
import { PageHero } from "@/components/section";
import { GirihPattern } from "@/components/girih-pattern";
import { StarMark } from "@/components/logo";
import { site, waLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Alamat, WhatsApp, email, dan jam layanan Pondok Pesantren Salafi Sabilul Hidayah.",
};

const mapsQuery = [
  site.fullName,
  site.address.line,
  site.address.district,
  site.address.regency,
  site.address.province,
].join(", ");

const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  mapsQuery,
)}`;

export default function KontakPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontak"
        title="Datang, atau hubungi pengurus."
        lead="Pendaftaran dan konsultasi dilakukan langsung di pondok. Untuk pertanyaan singkat, WhatsApp menjadi jalur tercepat."
        anim="naik"
      />

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div data-sh-anim="kiri">
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={waLink("Assalamu'alaikum, saya ingin bertanya tentang pondok.")}
                target="_blank"
                rel="noreferrer"
                className="card kartu-timbul"
              >
                <h2 className="label font-sans">WhatsApp</h2>
                <p className="mt-3 text-lg font-semibold">
                  {site.contact.whatsappDisplay}
                </p>
                <p className="mt-1 text-sm text-muted">Balasan pada jam layanan</p>
              </a>

              <a
                href={`mailto:${site.contact.email}`}
                className="card kartu-timbul"
              >
                <h2 className="label font-sans">Email</h2>
                <p className="mt-3 break-all text-lg font-semibold">
                  {site.contact.email}
                </p>
                <p className="mt-1 text-sm text-muted">Untuk surat resmi</p>
              </a>

              <div className="card sm:col-span-2">
                <h2 className="label font-sans">Alamat</h2>
                <address className="mt-3 not-italic leading-relaxed text-ink/85">
                  {site.address.line}
                  <br />
                  {site.address.district}, {site.address.regency}
                  <br />
                  {site.address.province} {site.address.postal}
                </address>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-ink link-underline"
                >
                  Buka di Google Maps
                </a>
              </div>

              <div className="card sm:col-span-2">
                <h2 className="label font-sans">Jam layanan</h2>
                <p className="mt-3 text-ink/85">{site.contact.hours}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Di luar jam tersebut, silakan tinggalkan pesan WhatsApp.
                  Pengurus akan membalas saat jam layanan.
                </p>
              </div>
            </div>
          </div>

          <div
            data-sh-anim="kanan"
            className="relative min-h-[360px] overflow-hidden rounded-card border border-ink/10 bg-forest-900"
          >
            <GirihPattern
              id="kontak-girih"
              className="absolute inset-0 h-full w-full text-gold-300/[0.14]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <StarMark className="h-6 w-6 text-gold-300" />
              <p className="mt-5 font-display text-2xl leading-snug text-paper">
                {site.fullName}
              </p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-paper/65">
                {site.address.line}, {site.address.district},{" "}
                {site.address.regency}
              </p>
              <a
                href={mapsLink}
                target="_blank"
                rel="noreferrer"
                className="btn-gold mt-6"
              >
                Petunjuk arah
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 py-14">
        <div className="wrap grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Pendaftaran",
              body: "Bawa berkas langsung ke pondok pada jam layanan.",
            },
            {
              title: "Donasi",
              body: "Gunakan rekening resmi, lalu kirim konfirmasi.",
            },
            {
              title: "Urusan santri",
              body: "Hubungi pengurus lewat WhatsApp agar tercatat.",
            },
          ].map((item) => (
            <div key={item.title} className="border-l border-gold-600/40 pl-5">
              <h2 className="text-sm font-semibold">{item.title}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
