import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/section";
import { waLink } from "@/content/site";

export const metadata: Metadata ={
	title: "Tempe Pondok",
	description: "Tempe buatan santri Sabilul Hidayah. Hasil penjualan dipakai untuk kebutuhan santri.",
};
export default function TempePage() {
	return (
	<>
	{/* ===== KOP HALAMAN ===== */}
	<PageHero
	eyebrow="Tempe pondok"
	title="Tempe Sabilul Hidayah"
	lead="Santri membuat dan menjual tempe pondok. Hasilnya untuk kebutuhan sehari-hari."
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
	   title="Tempe buatan santri"
	   lead="Santri membuat tempe di pondok dan menjualnya. Uangnya dipakai untuk kebutuhan sehari-hari."
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
		 Uangnya kembali ke pondok.
		 </h3>
		 <p className="mt-2 text-sm leading-relaxed text-muted">
		 Hasil penjualan dipakai untuk kebutuhan santri dan operasional pondok.
		  </p>
		 </div>
		  <div className="rounded-card border border-ink/10 p-6">
		 <h3 className="font-display text-xl tracking-tight">
		Harga satu bungkus Rp 7.000.
		 </h3>
		 <p className="mt-2 text-sm leading-relaxed text-muted">
		 Pesan lewat WhatsApp atau ambil langsung di pondok.
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
		   title="Harga tempe"
		/>
		<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
		 <div className="rounded-card border border-ink/10 bg-paper p-8 shadow-card">
		 <p className="label font-sans">Tempe Sabilul Hidayah</p>
		 <p className="mt-4 font-display text-3xl tracking-tight tabular-nums">
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
			Pesan tempe pondok
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