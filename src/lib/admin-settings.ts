import { siteConfig, type SiteConfig } from "@/content/site-config";

/**
 * Penyimpanan pengaturan website (prototipe).
 *
 * Data disimpan di localStorage, sama polanya dengan `admin-store.ts`.
 * Karena situs ini statis, hasil pengaturan diekspor sebagai berkas
 * `site-config.ts` yang menggantikan `src/content/site-config.ts`.
 */
const STORAGE_KEY = "sh_admin_pengaturan";

/** Kembalikan pengaturan tersimpan, atau data awal bila belum ada. */
export function bacaPengaturan(): SiteConfig {
  if (typeof window === "undefined") return siteConfig;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return siteConfig;
    const hasil = JSON.parse(raw);
    // Gabungkan dengan data awal agar field baru tetap punya nilai.
    return {
      ...siteConfig,
      ...hasil,
      address: { ...siteConfig.address, ...hasil?.address },
      contact: { ...siteConfig.contact, ...hasil?.contact },
      phones: Array.isArray(hasil?.phones) ? hasil.phones : siteConfig.phones,
      banks: Array.isArray(hasil?.banks) ? hasil.banks : siteConfig.banks,
    } as SiteConfig;
  } catch {
    return siteConfig;
  }
}

/** Simpan pengaturan ke localStorage. */
export function simpanPengaturan(config: SiteConfig): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch {
    // Penyimpanan penuh atau diblokir; abaikan agar UI tidak rusak.
  }
}

/** Hapus pengaturan tersimpan, kembali ke data awal. */
export function resetPengaturan(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // abaikan
  }
}

/** Apakah pengguna pernah menyimpan pengaturan sendiri? */
export function adaPengaturanTersimpan(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(STORAGE_KEY) !== null;
  } catch {
    return false;
  }
}

const q = (nilai: string) => JSON.stringify(nilai);

function barisDaftarString(nilai: string[], indent: string): string {
  if (nilai.length === 0) return "[]";
  return `[\n${nilai.map((n) => `${indent}  ${q(n)},`).join("\n")}\n${indent}]`;
}

/**
 * Susun isi berkas `site-config.ts` dari pengaturan.
 * Nilai teks ditulis lewat JSON.stringify agar tanda kutip dan karakter
 * khusus ter-escape dengan benar.
 */
export function buatKodeSiteConfig(config: SiteConfig): string {
  const phones = config.phones
    .map(
      (p) =>
        `    { label: ${q(p.label)}, whatsapp: ${q(p.whatsapp)}, display: ${q(p.display)} },`,
    )
    .join("\n");

  const banks = config.banks
    .map(
      (b) =>
        `    {\n      name: ${q(b.name)},\n      number: ${q(b.number)},\n      holder: ${q(b.holder)},\n    },`,
    )
    .join("\n");

  const schedule = config.schedule
    .map((s) => `    { time: ${q(s.time)}, activity: ${q(s.activity)} },`)
    .join("\n");

  return `export type SiteConfig = {
  url: string;
  address: {
    line: string;
    district: string;
    regency: string;
    province: string;
    postal: string;
  };
  contact: {
    whatsapp: string;
    whatsappDisplay: string;
    email: string;
    hours: string;
  };
  phones: { label: string; whatsapp: string; display: string }[];
  banks: { name: string; number: string; holder: string }[];
  pengasuh: string;
  requirements: string[];
  schedule: { time: string; activity: string }[];
  facilities: string[];
};

export const siteConfig: SiteConfig = {
  url: ${q(config.url)},
  address: {
    line: ${q(config.address.line)},
    district: ${q(config.address.district)},
    regency: ${q(config.address.regency)},
    province: ${q(config.address.province)},
    postal: ${q(config.address.postal)},
  },
  contact: {
    whatsapp: ${q(config.contact.whatsapp)},
    whatsappDisplay: ${q(config.contact.whatsappDisplay)},
    email: ${q(config.contact.email)},
    hours: ${q(config.contact.hours)},
  },
  phones: [
${phones}
  ],
  banks: [
${banks}
  ],
  pengasuh: ${q(config.pengasuh)},
  requirements: ${barisDaftarString(config.requirements, "  ")},
  schedule: [
${schedule}
  ],
  facilities: ${barisDaftarString(config.facilities, "  ")},
};
`;
}

/** Unduh pengaturan sebagai berkas `site-config.ts`. */
export function unduhSiteConfig(config: SiteConfig): void {
  if (typeof window === "undefined") return;
  const blob = new Blob([buatKodeSiteConfig(config)], {
    type: "text/typescript;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "site-config.ts";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
