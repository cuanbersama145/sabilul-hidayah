"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ADMIN_CATEGORIES,
  type AdminAnnouncementForm,
  type AdminStatus,
} from "@/lib/admin-types";
import {
  cariPengumuman,
  perbaruiPengumuman,
  simpanPengumuman,
} from "@/lib/admin-store";

const INPUT =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-2.5 text-sm transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/50 focus:outline-none";

export function AnnouncementForm({
  mode,
  id,
}: {
  mode: "baru" | "edit";
  id?: string;
}) {
  const router = useRouter();

  const [form, setForm] = useState<AdminAnnouncementForm>({
    judul: "",
    kategori: "",
    ringkasan: "",
    isi: [],
    gambarSampul: "",
    lampiranPdf: "",
    tanggalPublikasi: "",
    penting: false,
  });
  const [isiTeks, setIsiTeks] = useState("");
  const [namaGambar, setNamaGambar] = useState("");
  const [namaPdf, setNamaPdf] = useState("");
  const [error, setError] = useState("");
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  // Mode edit: ambil data lama setelah component mount di browser.
  useEffect(() => {
    if (mode !== "edit" || !id) return;
    const item = cariPengumuman(id);
    if (!item) return;

    setForm({
      judul: item.judul,
      kategori: item.kategori,
      ringkasan: item.ringkasan,
      isi: item.isi,
      gambarSampul: item.gambarSampul,
      lampiranPdf: item.lampiranPdf,
      tanggalPublikasi: item.tanggalPublikasi,
      penting: item.penting,
    });
    setIsiTeks(item.isi.join("\n\n"));
    setNamaGambar(item.gambarSampul);
    setNamaPdf(item.lampiranPdf);
  }, [mode, id]);

  function ubah<K extends keyof AdminAnnouncementForm>(
    kunci: K,
    nilai: AdminAnnouncementForm[K],
  ) {
    setForm((lama) => ({ ...lama, [kunci]: nilai }));
  }

  function simpan(status: AdminStatus) {
    if (!form.judul.trim() || !form.kategori || !form.tanggalPublikasi) {
      setError("Judul, kategori, dan tanggal wajib diisi.");
      // Pola "Focusable Error Summary": pindahkan fokus ke ringkasan error di
      // atas form agar dapat ditemukan keyboard dan pembaca layar.
      requestAnimationFrame(() => errorSummaryRef.current?.focus());
      return;
    }

    const data: AdminAnnouncementForm = {
      ...form,
      judul: form.judul.trim(),
      isi: isiTeks
        .split(/\n+/)
        .map((baris) => baris.trim())
        .filter(Boolean),
      gambarSampul: namaGambar,
      lampiranPdf: namaPdf,
    };

    if (mode === "edit" && id) {
      perbaruiPengumuman(id, data, status);
    } else {
      simpanPengumuman(data, status);
    }

    router.push("/admin/pengumuman/");
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="max-w-3xl space-y-8"
    >
      <div>
        <p className="rounded-xl border border-gold-600/30 bg-gold-100/60 px-5 py-4 text-sm leading-relaxed text-ink">
          Pratinjau rancangan form admin, bukan sistem publikasi aktif.
        </p>
        <p className="mt-3 text-xs text-muted">
          Mode: {mode === "edit" ? `ubah (${id ?? "id belum ada"})` : "buat baru"}
        </p>
      </div>

      {/* Ringkasan error di atas form: dapat fokus setelah submit gagal, tiap
          item tertaut ke field yang bermasalah. Disembunyikan bila tak ada
          error sehingga tak membebani pembaca layar saat form valid. */}
      {error ? (
        <div
          ref={errorSummaryRef}
          role="alert"
          tabIndex={-1}
          aria-labelledby="judul-ringkasan-error"
          className="rounded-xl border border-red-700/30 bg-red-50 px-5 py-4 text-sm text-red-800 outline-none"
        >
          <p id="judul-ringkasan-error" className="font-semibold">
            Ada masalah dengan isian Anda
          </p>
          <ul className="mt-2 space-y-1">
            {!form.judul.trim() ? (
              <li>
                <a href="#judul" className="underline">
                  Judul wajib diisi
                </a>
              </li>
            ) : null}
            {!form.kategori ? (
              <li>
                <a href="#kategori" className="underline">
                  Kategori wajib dipilih
                </a>
              </li>
            ) : null}
            {!form.tanggalPublikasi ? (
              <li>
                <a href="#tanggal" className="underline">
                  Tanggal publikasi wajib diisi
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      ) : null}

      <Field label="Judul pengumuman" htmlFor="judul">
        <input
          id="judul"
          name="judul"
          type="text"
          className={INPUT}
          placeholder="Judul pengumuman"
          value={form.judul}
          onChange={(e) => ubah("judul", e.target.value)}
        />
      </Field>

      <Field label="Kategori" htmlFor="kategori">
        <select
          id="kategori"
          name="kategori"
          className={INPUT}
          value={form.kategori}
          onChange={(e) =>
            ubah("kategori", e.target.value as AdminAnnouncementForm["kategori"])
          }
        >
          <option value="" disabled>
            Pilih kategori
          </option>
          {ADMIN_CATEGORIES.map((kategori) => (
            <option key={kategori} value={kategori}>
              {kategori}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Ringkasan" htmlFor="ringkasan">
        <textarea
          id="ringkasan"
          name="ringkasan"
          rows={3}
          className={INPUT}
          placeholder="Ringkasan singkat"
          value={form.ringkasan}
          onChange={(e) => ubah("ringkasan", e.target.value)}
        />
      </Field>

      <Field label="Isi pengumuman" htmlFor="isi">
        <textarea
          id="isi"
          name="isi"
          rows={8}
          className={INPUT}
          placeholder="Satu paragraf per baris kosong"
          value={isiTeks}
          onChange={(e) => setIsiTeks(e.target.value)}
        />
        <p className="mt-1 text-xs text-muted">
          Pisahkan tiap paragraf dengan baris kosong.
        </p>
      </Field>

      <Field label="Gambar sampul" htmlFor="gambar">
        <input
          id="gambar"
          name="gambar"
          type="file"
          accept=".png,.jpg,.jpeg,.webp"
          className={INPUT}
          onChange={(e) => setNamaGambar(e.target.files?.[0]?.name ?? "")}
        />
        <p className="mt-1 text-xs text-muted">
          PNG, JPG atau WebP. {namaGambar ? `Terpilih: ${namaGambar}` : "Belum ada file."}
        </p>
      </Field>

      <Field label="Lampiran dokumen (opsional)" htmlFor="lampiran">
        <input
          id="lampiran"
          name="lampiran"
          type="file"
          accept=".pdf,application/pdf"
          className={INPUT}
          onChange={(e) => setNamaPdf(e.target.files?.[0]?.name ?? "")}
        />
        <p className="mt-1 text-xs text-muted">
          Opsional. {namaPdf ? `Terpilih: ${namaPdf}` : "Belum ada file."}
        </p>
      </Field>

      <Field label="Tanggal publikasi" htmlFor="tanggal">
        <input
          id="tanggal"
          name="tanggal"
          type="date"
          className={INPUT}
          value={form.tanggalPublikasi}
          onChange={(e) => ubah("tanggalPublikasi", e.target.value)}
        />
      </Field>

      <label className="flex items-center gap-3 text-sm">
        <input
          type="checkbox"
          name="penting"
          className="h-4 w-4 accent-forest-900"
          checked={form.penting}
          onChange={(e) => ubah("penting", e.target.checked)}
        />
        Tandai sebagai pengumuman penting
      </label>

      <div className="flex flex-wrap items-center gap-3 border-t border-ink/10 pt-6">
        <button
          type="button"
          onClick={() => simpan("Draf")}
          className="btn-secondary"
        >
          Simpan Draft
        </button>
        <button
          type="button"
          onClick={() => simpan("Aktif")}
          className="btn-primary"
        >
          Publikasikan
        </button>
        <Link
          href="/admin/pengumuman/"
          className="ml-auto text-sm text-muted hover:text-ink"
        >
          Batal
        </Link>
        {error ? (
          <p role="alert" className="w-full text-sm text-red-700">
            {error}
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold">
        {label}
      </label>
      {children}
    </div>
  );
}