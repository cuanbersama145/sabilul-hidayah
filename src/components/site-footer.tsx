import Link from "next/link";
import { nav, site, waLinkTo } from "@/content/site";
import { Logo } from "./logo";
import { GirihPattern } from "./girih-pattern";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-forest-950 text-paper">
      <GirihPattern
        id="footer-girih"
        className="pointer-events-none absolute inset-0 h-full w-full text-gold-300/[0.07]"
      />
      <div className="wrap relative py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/65">
              Mendidik santri dengan kajian kitab kuning, adab, dan hidup
              bersama. Tanpa biaya pendidikan, asrama, makan, maupun kitab.
            </p>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-label text-gold-300">
              Halaman
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/70">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-label text-gold-300">
              Kontak
            </h2>
            <address className="mt-4 space-y-2.5 text-sm not-italic leading-relaxed text-paper/70">
              <p>
                {site.address.line}
                <br />
                {site.address.district}, {site.address.regency}
                <br />
                {site.address.province} {site.address.postal}
              </p>
              <div className="space-y-2">
                {site.phones.map((phone) => (
                  <p key={phone.whatsapp}>
                    <a
                      href={waLinkTo(
                        phone.whatsapp,
                        "Assalamu'alaikum, saya ingin bertanya.",
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="tabular-nums transition hover:text-paper"
                    >
                      WhatsApp {phone.display}
                    </a>
                    <span className="block text-xs text-paper/55">
                      {phone.label}
                    </span>
                  </p>
                ))}
              </div>
              <p>{site.contact.hours}</p>
            </address>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-label text-gold-300">
              Donasi
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-paper/70">
              {site.banks.map((bank) => (
                <li key={bank.number}>
                  {bank.name}
                  <br />
                  <span className="font-semibold tabular-nums text-paper">
                    {bank.number}
                  </span>
                  <br />
                  a.n. {bank.holder}
                </li>
              ))}
            </ul>
            <Link
              href="/donasi/"
              className="mt-4 inline-block text-sm font-semibold text-gold-300 underline decoration-gold-300/40 underline-offset-4 transition hover:decoration-gold-300"
            >
              Cara berdonasi
            </Link>
			<Link
				href="/tempe/"
				className="mt-2 inline-block text-sm font-semibold text-gold-300 underline decoration-gold-300/40 underline-offset-4 transition hover:decoration-gold-300"
			>
				Tempe pondok
				</Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-paper/10 pt-6 text-xs text-paper/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.fullName}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p>Pendidikan gratis, didukung donasi.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
