"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Menampilkan elemen ber-atribut `data-sh-anim` saat masuk ke layar.
 * Elemen yang sudah terlihat langsung ditampilkan tanpa menunggu observer,
 * dan bila observer tidak pernah jalan, semua elemen ditampilkan setelah 4 detik.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll("[data-sh-anim]"));
    if (targets.length === 0) return;

    const tampilkan = (el: Element) => el.classList.add("sh-tampil");

    const sudahDiLayar = (el: Element) => {
      const kotak = el.getBoundingClientRect();
      return kotak.top < window.innerHeight * 0.92 && kotak.bottom > 0;
    };

    targets.filter(sudahDiLayar).forEach(tampilkan);

    if (!("IntersectionObserver" in window)) {
      targets.forEach(tampilkan);
      return;
    }

    let observerJalan = false;

    const pengamat = new IntersectionObserver(
      (masuk) => {
        observerJalan = true;
        for (const entri of masuk) {
          if (!entri.isIntersecting) continue;
          tampilkan(entri.target);
          pengamat.unobserve(entri.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((el) => pengamat.observe(el));

    const pewaktu = window.setTimeout(() => {
      if (!observerJalan) targets.forEach(tampilkan);
    }, 4000);

    return () => {
      pengamat.disconnect();
      window.clearTimeout(pewaktu);
    };
  }, [pathname]);

  return null;
}
