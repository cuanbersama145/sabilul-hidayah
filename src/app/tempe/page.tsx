import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/section";
import { waLink } from "@/content/site";

export const metadata: Metadata ={
	title: "Tempe Pondok",
	description: "Tempe sehat, Bergizi, dan dibuat sepenuh hati.",
};
export default function TempePage() {
	return (
	<>
	{/* ===== KOP HALAMAN ===== */}
	<PageHero
	eyebrow="Tempe pondok"
	title="Tempe Sabilul Hidayah"
	lead="Tempe Berkualitas, Nutrisi untuk Generasi yang Lebih sehat."
	anim="naik"
	media={
		<img
		src="/tempe-santri-2.webp"
		alt="Santri Sabilul Hidayah memperkenalkan tempe pondok"
		width={900}
		height={1189}
		loading="eager"
		decoding="async"
		className="mx-auto w-full max-w-sm select-none drop-shadow-soft lg:max-w-none"
		/>
	}
	/>
	
	{/* ===== KEUNGGULAN ===== */}
	<section className="py-16 md:py-24">
	 <div className="wrap">
	  <SectionHeading
	   eyebrow="Kenapa tempe pondok?"
	   title="Mengapa Memilih Tempe Kami?"
	   lead="Diproduksi dari kedelai terpilih dengan proses pengolahan yang baik untuk menghadirkan tempe yang bergizi, lezat"
	   />
	   <div className="mt-12 grid gap-5 sm:grid-cols-3">
	    <div className="rounded-card border border-ink/10 p-6">
		 <h3 className="font-display text-xl tracking-tight">
		 Hasilnya untuk santri
		 </h3>
		 <p className="mt-2 text-sm leading-relaxed text-muted">
		  Setiap pembelian membantu membiayai kebutuhan santri sehari-hari.
		  </p>
		  </div>
		  <div className="rounded-card border border-ink/10 p-6">
		 <h3 className="font-display text-xl tracking-tight">
		 Mendukung pemberdayaan ekonomi pesantren.
		 </h3>
		 <p className="mt-2 text-sm leading-relaxed text-muted">
		 Setiap pembelian turut membantu mengembangkan usaha pesantren, mendukung kegiatan para santri, serta membangun kemandirian ekonomi pondok secara berkelanjutan.
		  </p>
		 </div>
		  <div className="rounded-card border border-ink/10 p-6">
		 <h3 className="font-display text-xl tracking-tight">
		Harga terjangkau untuk kebutuhan sehari-hari.
		 </h3>
		 <p className="mt-2 text-sm leading-relaxed text-muted">
		 Menawarkan harga yang ramah di kantong dengan kualitas yang tetap terjaga, sehingga cocok untuk memenuhi kebutuhan konsumsi sehari-hari anak-anak, santri, maupun keluarga.
		  </p>
		 </div>
		 </div>
	    </div>
		</section>
		
		{/* ===== HARGA KEMASAN ===== */}
		<section className="border-y border-ink/10 bg-paper2/60 py-16 md:py-24">
		<div className="wrap">
		 <SectionHeading
		   eyebrow="Harga"
		   title="Harga Terjangkau, Kualitas Terjaga."
		/>
		<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
		 <div className="rounded-card border border-ink/10 bg-paper p-8 shadow-card">
		 <p className="label font-sans">Tempe Sabilul Hidayah</p>
		 <p className="mt-4 font-display text-3xl tracking-tight">
		  Rp 7.000
		 </p>
		 <p className="mt-3 text-sm leading-relaxed text-muted">
		  Tempe
	    </p>
      </div>
    </div>
   </div>
</section>

{/* ===== CARA PESAN ===== */}
	<section className="py-16 md:py-24">
		<div className="wrap text-center">
			<h2 className="font-display text-3xl tracking-tight md:text-4xl">
			Belanja Produk Pesantren, Sekaligus Dukung Kemandirian Santri!!!
			</h2>
			<p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
			Pesanan dapat dilakukan via WhatsApp atau ambil langsung di pondok.
			</p>
			<a
				href={waLink("Assalamu'alaikum, saya ingin memesan tempe pondok.")}
				className="btn-primary mt-8"
			>
				Pesan via WhatsApp
			</a>
		</div>
	</section>
	
	{/* ISI DISINI FOTO TEMPE */}
	</>
);
}