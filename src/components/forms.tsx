"use client";

import { useState } from "react";
import { waLink } from "@/content/site";

const field =
  "mt-2 w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-gold-500 focus:outline-none focus:ring-0";
const labelStyle = "text-xs font-semibold uppercase tracking-label text-muted";

export function InquiryForm() {
  const [message, setMessage] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = [
      "Assalamu'alaikum, saya ingin menanyakan pendaftaran santri.",
      "",
      `Nama: ${data.get("nama")}`,
      `Asal: ${data.get("asal")}`,
      `Pertanyaan: ${data.get("pertanyaan")}`,
    ].join("\n");

    const link = waLink(text);
    setMessage(link);
    window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nama" className={labelStyle}>
            Nama
          </label>
          <input
            id="nama"
            name="nama"
            required
            placeholder="Nama lengkap"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="asal" className={labelStyle}>
            Asal
          </label>
          <input
            id="asal"
            name="asal"
            required
            placeholder="Kota atau kabupaten"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="pertanyaan" className={labelStyle}>
          Pertanyaan
        </label>
        <textarea
          id="pertanyaan"
          name="pertanyaan"
          required
          rows={4}
          placeholder="Tuliskan hal yang ingin ditanyakan, misalnya syarat, jadwal, atau berkas."
          className={field}
        />
      </div>

      <button type="submit" className="btn-primary">
        Kirim lewat WhatsApp
      </button>

      <p className="text-xs leading-relaxed text-muted">
        Pesan akan dibuka di WhatsApp. Situs ini tidak menyimpan data yang Anda
        tulis.
      </p>

      <p aria-live="polite" className="text-xs text-muted">
        {message ? (
          <>
            WhatsApp tidak terbuka?{" "}
            <a href={message} target="_blank" rel="noreferrer" className="link-underline text-ink">
              Klik tautan ini
            </a>
            .
          </>
        ) : null}
      </p>
    </form>
  );
}

export function DonationForm() {
  const [message, setMessage] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = [
      "Assalamu'alaikum, saya sudah menyalurkan donasi.",
      "",
      `Nama: ${data.get("nama")}`,
      `Jumlah: ${data.get("jumlah")}`,
      `Tanggal transfer: ${data.get("tanggal")}`,
      `Bank pengirim: ${data.get("bank")}`,
      `Catatan: ${data.get("catatan") || "-"}`,
      "",
      "Mohon konfirmasi. Terima kasih.",
    ].join("\n");

    const link = waLink(text);
    setMessage(link);
    window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="donor-nama" className={labelStyle}>
            Nama donatur
          </label>
          <input
            id="donor-nama"
            name="nama"
            required
            placeholder="Nama lengkap"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="donor-jumlah" className={labelStyle}>
            Jumlah
          </label>
          <input
            id="donor-jumlah"
            name="jumlah"
            required
            inputMode="numeric"
            placeholder="Contoh: 500000"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="donor-tanggal" className={labelStyle}>
            Tanggal transfer
          </label>
          <input
            id="donor-tanggal"
            name="tanggal"
            type="date"
            required
            className={field}
          />
        </div>
        <div>
          <label htmlFor="donor-bank" className={labelStyle}>
            Bank pengirim
          </label>
          <input
            id="donor-bank"
            name="bank"
            required
            placeholder="Nama bank atau e-wallet"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="donor-catatan" className={labelStyle}>
          Catatan (opsional)
        </label>
        <textarea
          id="donor-catatan"
          name="catatan"
          rows={3}
          placeholder="Misalnya donasi untuk perawatan asrama."
          className={field}
        />
      </div>

      <button type="submit" className="btn-gold">
        Kirim konfirmasi lewat WhatsApp
      </button>

      <p className="text-xs leading-relaxed text-muted">
        Konfirmasi dibuka di WhatsApp agar pengurus dapat mencocokkan dengan
        mutasi rekening. Simpan bukti transfer Anda.
      </p>

      <p aria-live="polite" className="text-xs text-muted">
        {message ? (
          <>
            WhatsApp tidak terbuka?{" "}
            <a href={message} target="_blank" rel="noreferrer" className="link-underline text-ink">
              Klik tautan ini
            </a>
            .
          </>
        ) : null}
      </p>
    </form>
  );
}
