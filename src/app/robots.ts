import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

// Domain dasar diambil dari satu tempat: src/content/site.ts → site.url.
// Ganti nilai itu saat domain resmi sudah ada (lihat bug.md BUG-016).
const base = site.url.replace(/\/+$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
