import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading } from "@/components/section";
import { StarMark } from "@/components/logo";
import { site, values, facilities } from "@/content/site";

export const metadata: Metadata = {
  title: "Profil",
  description:
    "Sejarah, visi, misi, dan nilai yang dipegang Pondok Pesantren Salafi Sabilul Hidayah.",
};

const misi = [
  "Menanamkan akidah yang lurus dan ibadah yang benar sesuai tuntunan ulama.",
  "Mengajarkan ilmu alat agar santri mampu membaca kitab kuning secara mandiri.",
  "Membiasakan adab kepada guru, orang tua, dan sesama dalam kehidupan sehari-hari.",
  "Melatih santri hidup sederhana, mandiri, dan berguna bagi masyarakat.",
];

export default function ProfilPage() {
  return (
    <>
      <PageHero
        eyebrow="Profil"
        title="Pondok salafi yang menempatkan adab sebelum ilmu."
        lead="Sabilul Hidayah tumbuh dari kebutuhan masyarakat sekitar akan tempat belajar agama yang terjangkau. Sampai hari ini pondok tidak memungut biaya pendidikan."
        anim="naik"
        media={
          <img
            src="/keluarga-pondok.jpeg"
            alt="Keluarga besar Pondok Pesantren Salafi Sabilul Hidayah"
            width={1280}
            height={960}
            loading="eager"
            decoding="async"
            className="w-full rounded-card border border-ink/10 object-cover shadow-card"
          />
        }
      />

      {/* SEJARAH */}
      <section className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading eyebrow="Tentang pondok" title="Berdiri dari wakaf dan kebersamaan." />
          <div className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              {site.fullName} hadir sebagai tempat menuntut ilmu agama bagi
              masyarakat yang membutuhkan pendidikan Islam yang terjangkau.
            </p>
            <p>
              Berdiri di atas tanah wakaf, kegiatan operasional pondok
              didukung melalui sedekah dan donasi masyarakat. Dengan dukungan
              tersebut, santri dapat mengikuti pendidikan tanpa dibebani
              biaya.
            </p>
            <p>
              Pembelajaran dilaksanakan melalui kajian kitab secara bertahap,
              mulai dari ilmu fikih yang selalu diamalkan sehari-hari dan ilmu
              agama lainnya, sesuai dengan tingkat kemampuan santri.
            </p>
          </div>
        </div>
      </section>

      {/* LATAR PENDIRIAN */}
      <section className="border-t border-ink/10 py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading eyebrow="Latar pendirian" title="Dari satu musholla di tanah wakaf." />
          <div className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              Pondok ini dirintis oleh {site.pengasuh}, alumni salah satu pondok
              di Ciamis. Dari pengalaman menimba ilmu itulah beliau tergerak
              membuka pesantren bagi masyarakat sekitar.
            </p>
            <p>
              Pondok resmi berdiri pada Jumat, 29 Mei 2026, di atas tanah
              wakaf. Saat pertama dibuka, di areal itu hanya berdiri satu
              musholla. Santri perdana berjumlah sebelas orang: lima santri
              putra dan enam santri putri.
            </p>
            <p>
              Pembangunan pondok digerakkan bersama. Tenaga tambahan datang
              dari para alumni, sedangkan biaya pembangunannya ditopang modal
              dari para donatur yang berjasa. Dari sinilah pondok mulai tumbuh.
            </p>
            <p>
              Agar tetap mandiri, pondok juga menggarap usaha produksi tempe.
              Hasilnya dipakai untuk membiayai kebutuhan santri sehari-hari,
              melengkapi sedekah dan donasi yang masuk. Ingin mencoba?{" "}
			  <Link href="/tempe/" className="font-semibold text-gold-700 underline decoration-gold-600/40 underline-offset-4 transition hover:text-gold-600">
				Lihat halaman tempe pondok
				</Link>
				.
            </p>
            <p>
              Tujuannya jelas sejak awal: membuka pendidikan pesantren yang
              gratis, agar bagi mereka yang kurang mampu pun tetap dapat
              menimba ilmu tanpa harus memikirkan biaya.
            </p>
          </div>
        </div>
      </section>

      {/* VISI MISI */}
      <section className="border-y border-ink/10 bg-paper2/60 py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-card border border-ink/10 bg-paper p-8 shadow-card sm:p-10">
            <h2 className="label font-sans">Visi</h2>
            <p className="mt-5 font-display text-2xl leading-snug tracking-tight md:text-[1.9rem]">
              Mencetak santri yang berilmu, beradab, mandiri, dan dekat dengan
              masyarakat.
            </p>
          </div>

          <div>
            <h2 className="label font-sans">Misi</h2>
            <ol className="mt-5 space-y-4">
              {misi.map((item, index) => (
                <li key={item} className="flex gap-4 border-b border-ink/10 pb-4 last:border-0">
                  <span className="font-display text-lg text-gold-700">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-muted">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* NILAI */}
      <section className="py-16 md:py-24">
        <div className="wrap">
          <SectionHeading
            eyebrow="Nilai"
            title="Yang dibiasakan setiap hari"
            lead="Nilai tidak diajarkan lewat ceramah saja. Santri menjalaninya di asrama, masjid, dan ruang kelas."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-card border border-ink/10 p-6">
                <StarMark className="h-5 w-5 text-gold-600" />
                <h3 className="mt-5 font-display text-xl tracking-tight">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FASILITAS DAN LINGKUNGAN */}
      <section className="border-t border-ink/10 bg-paper2/60 py-16 md:py-24">
        <div className="wrap">
          <SectionHeading
            eyebrow="Fasilitas dan lingkungan"
            title="Tempat belajar yang mendukung kehidupan santri."
            lead="Fasilitas pondok sederhana namun memadai, dirancang agar santri dapat belajar, beribadah, dan beristirahat dengan nyaman."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((item) => (
              <div
                key={item}
                className="rounded-card border border-ink/10 bg-paper p-6 shadow-card"
              >
                <StarMark className="h-5 w-5 text-gold-600" />
                <h3 className="mt-4 font-display text-xl tracking-tight">
                  {item}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl space-y-5 text-base leading-relaxed text-muted">
            <p>
              Lingkungan pondok dirancang untuk mendukung kegiatan belajar dan
              kehidupan sehari-hari santri. Santri tinggal di asrama bersama,
              makan di dapur umum, dan belajar di ruang kelas yang sama. Kehidupan
              bersama ini melatih santri untuk hidup mandiri dan berbagi.
            </p>
            <p>
              Meski fasilitas sederhana, pondok berusaha menyediakan ruang yang
              cukup untuk kebutuhan dasar: tempat beribadah di masjid, tempat
              belajar kitab di ruang kelas dan perpustakaan, serta lapangan
              untuk kegiatan fisik. Santri diharapkan dapat fokus menuntut ilmu
              tanpa terbebani oleh kondisi fisik yang berlebihan.
            </p>
            <p>
              Kebersamaan dalam keseharian menjadi bagian dari pendidikan. Santri
              saling membantu menjaga kebersihan, mengurus kebutuhan pribadi,
              dan menghormati sesama. Inilah cara pondok menanamkan nilai hidup
              bersama yang sehat dan sederhana.
            </p>
          </div>

          <div className="mt-14">
            <h3 className="label font-sans">Galeri pondok</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <img
                src="/fasilitas-1.jpg"
                alt="Fasilitas Pondok Pesantren Salafi Sabilul Hidayah"
                width={640}
                height={480}
                loading="lazy"
                decoding="async"
                className="h-56 w-full rounded-card border border-ink/10 object-cover shadow-card"
              />
              <img
                src="/fasilitas-2.jpg"
                alt="Lingkungan Pondok Pesantren Salafi Sabilul Hidayah"
                width={640}
                height={480}
                loading="lazy"
                decoding="async"
                className="h-56 w-full rounded-card border border-ink/10 object-cover shadow-card"
              />
              <img
                src="/fasilitas-3.jpg"
                alt="Kegiatan di Pondok Pesantren Salafi Sabilul Hidayah"
                width={640}
                height={480}
                loading="lazy"
                decoding="async"
                className="h-56 w-full rounded-card border border-ink/10 object-cover shadow-card"
              />
              <img
                src="/fasilitas-4.jpg"
                alt="Area Pondok Pesantren Salafi Sabilul Hidayah"
                width={640}
                height={480}
                loading="lazy"
                decoding="async"
                className="h-56 w-full rounded-card border border-ink/10 object-cover shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PENGASUH */}
      <section className="border-t border-ink/10 py-16 md:py-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[0.6fr_1fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-[300px]">
            {/* Satu gambar utuh hasil desain: panel hijau lengkung + girih +
                foto pengurus. Latar di sekeliling lengkungan transparan.
                Teks overlay sengaja dikosongkan dulu sesuai permintaan. */}
            <img
              src="/pengurus.png"
              alt="Pengasuh Pondok Pesantren Salafi Sabilul Hidayah"
              width={1039}
              height={1303}
              loading="eager"
              decoding="async"
              className="relative z-10 block w-full select-none drop-shadow-soft"
            />

            {/* Kerudung gradasi bagian bawah agar badan melebur ke hijau,
                seperti hero. Hanya menutupi ~44% bawah, dan dikunci ke dalam
                siluet panel memakai mask-image dari gambar itu sendiri —
                mengikuti lengkungan, tidak keluar panel. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[15] h-[44%] bg-gradient-to-t from-forest-950 via-forest-950/55 to-transparent"
              style={{
                WebkitMaskImage: "url(/pengurus.png)",
                maskImage: "url(/pengurus.png)",
                WebkitMaskSize: "100% auto",
                maskSize: "100% auto",
                WebkitMaskPosition: "center bottom",
                maskPosition: "center bottom",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            />
          </div>

          <div>
            <span className="label">Pengasuh</span>
            <h2 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
              {site.pengasuh}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              Pengasuh memimpin kajian kitab dan membina santri sehari-hari.
              Beliau juga menerima wali santri yang ingin berkonsultasi tentang
              pendidikan anak.
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
              Untuk keperluan silaturahmi atau konsultasi, silakan menghubungi
              pengurus lebih dulu agar waktunya dapat disiapkan.
            </p>
            <Link href="/kontak/" className="btn-secondary mt-7">
              Hubungi pengurus
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
