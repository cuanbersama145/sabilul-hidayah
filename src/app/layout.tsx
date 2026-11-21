import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RevealObserver } from "@/components/reveal-observer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: {
    default: `${site.fullName}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "pondok pesantren salafi",
    "Sabilul Hidayah",
    "pesantren gratis",
    "pendaftaran santri baru",
    "kajian kitab kuning",
  ],
  openGraph: {
    title: site.fullName,
    description: site.description,
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <head>
        {/* Penanda bahwa JavaScript aktif; tanpa ini animasi gulir tidak
            menyembunyikan konten sama sekali. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              'document.documentElement.classList.add("sh-js")',
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest-900 focus:px-5 focus:py-3 focus:text-sm focus:text-paper"
        >
          Lompat ke konten
        </a>
        <SiteHeader />
        <main id="konten" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <RevealObserver />
      </body>
    </html>
  );
}
