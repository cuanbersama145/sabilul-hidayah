"use client";

import { useEffect, useRef, useState } from "react";
import { AdminHeader } from "@/components/admin/admin-header";
import type { SiteConfig } from "@/content/site-config";
import {
  adaPengaturanTersimpan,
  bacaPengaturan,
  buatKodeSiteConfig,
  resetPengaturan,
  simpanPengaturan,
  unduhSiteConfig,
} from "@/lib/admin-settings";

const INPUT =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-2.5 text-sm transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/50 focus:outline-none";
const INPUT_KECIL =
  "w-full rounded-lg border border-ink/15 bg-paper px-3 py-2 text-sm transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/50 focus:outline-none";

/**
 * Form pengaturan data pondok (prototipe).
 *
 * Data disimpan di localStorage peramban, lalu dapat diekspor sebagai
 * `site-config.ts` untuk menggantikan `src/content/site-config.ts`.
 * Situs statis, jadi perubahan tidak langsung tampil di halaman publik —
 * alur ekspor ini yang menjembataninya.
 */
export function SettingsForm() {
  const [form, setForm] = useState<SiteConfig | null>(null);
  const [tersimpan, setTersimpan] = useState(false);
  const [status, setStatus] = useState("");
  const [pratinjau, setPratinjau] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  // Muat pengaturan setelah mount agar tidak bentrok saat render di server.
  useEffect(() => {
    setForm(bacaPengaturan());
    setTersimpan(adaPengaturanTersimpan());
    return () => window.clearTimeout(timer.current);
  }, []);

  function pesan(teks: string) {
    setStatus(teks);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStatus(""), 3000);
  }

  function ubah<K extends keyof SiteConfig>(kunci: K, nilai: SiteConfig[K]) {
    setForm((lama) => (lama ? { ...lama, [kunci]: nilai } : lama));
  }

  function ubahAlamat(kunci: keyof SiteConfig["address"], nilai: string) {
    setForm((lama) =>
      lama ? { ...lama, address: { ...lama.address, [kunci]: nilai } } : lama,
    );
  }

  function ubahKontak(kunci: keyof SiteConfig["contact"], nilai: string) {
    setForm((lama) =>
      lama ? { ...lama, contact: { ...lama.contact, [kunci]: nilai } } : lama,
    );
  }

  function ubahPhone(i: number, patch: Partial<SiteConfig["phones"][number]>) {
    setForm((lama) =>
      lama
        ? {
            ...lama,
            phones: lama.phones.map((p, idx) =>
              idx === i ? { ...p, ...patch } : p,
            ),
          }
        : lama,
    );
  }

  function ubahBank(i: number, patch: Partial<SiteConfig["banks"][number]>) {
    setForm((lama) =>
      lama
        ? {
            ...lama,
            banks: lama.banks.map((b, idx) =>
              idx === i ? { ...b, ...patch } : b,
            ),
          }
        : lama,
    );
  }

  function ubahJadwal(i: number, patch: Partial<SiteConfig["schedule"][number]>) {
    setForm((lama) =>
      lama
        ? {
            ...lama,
            schedule: lama.schedule.map((s, idx) =>
              idx === i ? { ...s, ...patch } : s,
            ),
          }
        : lama,
    );
  }

  function ubahDaftar(
    kunci: "requirements" | "facilities",
    i: number,
    nilai: string,
  ) {
    setForm((lama) =>
      lama
        ? {
            ...lama,
            [kunci]: lama[kunci].map((n, idx) => (idx === i ? nilai : n)),
          }
        : lama,
    );
  }

  function tambahDaftar(kunci: "requirements" | "facilities") {
    setForm((lama) =>
      lama ? { ...lama, [kunci]: [...lama[kunci], ""] } : lama,
    );
  }

  function hapusDaftar(kunci: "requirements" | "facilities", i: number) {
    setForm((lama) =>
      lama
        ? { ...lama, [kunci]: lama[kunci].filter((_, idx) => idx !== i) }
        : lama,
    );
  }

  function hapusBaris(kunci: "phones" | "banks", i: number) {
    setForm((lama) =>
      lama
        ? {
            ...lama,
            [kunci]: (lama[kunci] as unknown[]).filter((_, idx) => idx !== i),
          }
        : lama,
    );
  }

  function simpan() {
    if (!form) return;
    simpanPengaturan(form);
    setTersimpan(true);
    pesan("Pengaturan tersimpan di peramban ini.");
  }

  function unduh() {
    if (!form) return;
    unduhSiteConfig(form);
    pesan("Berkas site-config.ts diunduh. Ganti src/content/site-config.ts lalu build ulang.");
  }

  function kembalikan() {
    if (!window.confirm("Kembalikan semua pengaturan ke data awal?")) return;
    resetPengaturan();
    setForm(bacaPengaturan());
    setTersimpan(false);
    pesan("Pengaturan dikembalikan ke data awal.");
  }

  if (!form) {
    return (
      <div>
        <AdminHeader title="Pengaturan Website" subtitle="Data pondok dan kontak" />
        <p className="mt-6 text-sm text-muted">Memuat pengaturan…</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      <AdminHeader title="Pengaturan Website" subtitle="Data pondok dan kontak" />

      {/* Penanda status tersimpan. `role="status"` membacakan tiap perubahan
          tanpa merebut fokus dari field yang sedang diisi. */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span
          className={
            tersimpan
              ? "rounded-full border border-forest-700/30 bg-sage/60 px-3 py-1 text-xs text-forest-900"
              : "rounded-full border border-ink/15 px-3 py-1 text-xs text-muted"
          }
        >
          {tersimpan ? "Ada pengaturan tersimpan" : "Belum ada perubahan tersimpan"}
        </span>
        <span className="text-xs text-muted">
          Perubahan disimpan di peramban ini, belum ke halaman publik.
        </span>
      </div>

      <p
        role="status"
        aria-live="polite"
        className="mt-3 min-h-[1.25rem] text-sm font-medium text-forest-800"
      >
        {status}
      </p>

      <div className="mt-6 space-y-8">
        {/* IDENTITAS */}
        <Bagian judul="Identitas dan alamat web" catatan="Nama pengasuh tampil di halaman profil.">
          <Field label="Nama pengasuh" htmlFor="pengasuh">
            <input
              id="pengasuh"
              className={INPUT}
              value={form.pengasuh}
              onChange={(e) => ubah("pengasuh", e.target.value)}
            />
          </Field>
          <Field label="Alamat domain resmi" htmlFor="url" hint="Tanpa garis miring di akhir.">
            <input
              id="url"
              className={INPUT}
              value={form.url}
              onChange={(e) => ubah("url", e.target.value)}
            />
          </Field>
        </Bagian>

        {/* KONTAK */}
        <Bagian judul="Kontak" catatan="Nomor utama dipakai tombol WhatsApp di seluruh situs.">
          <Field label="Email" htmlFor="email">
            <input
              id="email"
              type="email"
              className={INPUT}
              value={form.contact.email}
              onChange={(e) => ubahKontak("email", e.target.value)}
            />
          </Field>
          <Field label="Jam layanan" htmlFor="hours">
            <input
              id="hours"
              className={INPUT}
              value={form.contact.hours}
              onChange={(e) => ubahKontak("hours", e.target.value)}
            />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Nomor utama (format 62…)"
              htmlFor="wa-utama"
              hint="Tanpa tanda + dan tanpa spasi."
            >
              <input
                id="wa-utama"
                inputMode="numeric"
                className={INPUT}
                value={form.contact.whatsapp}
                onChange={(e) => ubahKontak("whatsapp", e.target.value)}
              />
            </Field>
            <Field
              label="Tampilan nomor utama"
              htmlFor="wa-utama-display"
              hint="Bentuk yang enak dibaca, mis. 0812-3456-7890."
            >
              <input
                id="wa-utama-display"
                className={INPUT}
                value={form.contact.whatsappDisplay}
                onChange={(e) => ubahKontak("whatsappDisplay", e.target.value)}
              />
            </Field>
          </div>
        </Bagian>

        {/* NOMOR WHATSAPP */}
        <Bagian
          judul="Nomor WhatsApp yang bisa dihubungi"
          catatan="Tampil di footer, halaman Kontak, dan Pendaftaran. Nomor pertama = utama."
          aksi={
            <TambahTombol
              label="+ Tambah nomor"
              onClick={() =>
                setForm((lama) =>
                  lama
                    ? {
                        ...lama,
                        phones: [
                          ...lama.phones,
                          { label: "", whatsapp: "", display: "" },
                        ],
                      }
                    : lama,
                )
              }
            />
          }
        >
          {form.phones.length === 0 ? (
            <Kosong pesan="Belum ada nomor. Tambahkan minimal satu." />
          ) : null}
          {form.phones.map((phone, i) => (
            <Baris
              key={`phone-${i}`}
              judul={`Nomor ${i + 1}${i === 0 ? " · utama" : ""}`}
              onHapus={
                form.phones.length > 1 ? () => hapusBaris("phones", i) : undefined
              }
            >
              <div className="grid gap-3 sm:grid-cols-3">
                <MiniField label="Peran/label" htmlFor={`phone-label-${i}`}>
                  <input
                    id={`phone-label-${i}`}
                    className={INPUT_KECIL}
                    placeholder="Panitia Pendaftaran"
                    value={phone.label}
                    onChange={(e) => ubahPhone(i, { label: e.target.value })}
                  />
                </MiniField>
                <MiniField
                  label="Format 62…"
                  htmlFor={`phone-wa-${i}`}
                  hint="Tanpa + / spasi."
                >
                  <input
                    id={`phone-wa-${i}`}
                    inputMode="numeric"
                    className={INPUT_KECIL}
                    placeholder="6281234567890"
                    value={phone.whatsapp}
                    onChange={(e) => ubahPhone(i, { whatsapp: e.target.value })}
                  />
                </MiniField>
                <MiniField label="Tampilan" htmlFor={`phone-display-${i}`}>
                  <input
                    id={`phone-display-${i}`}
                    className={INPUT_KECIL}
                    placeholder="0812-3456-7890"
                    value={phone.display}
                    onChange={(e) => ubahPhone(i, { display: e.target.value })}
                  />
                </MiniField>
              </div>
            </Baris>
          ))}
        </Bagian>

        {/* REKENING */}
        <Bagian
          judul="Rekening donasi"
          catatan="Tampil di halaman Donasi, beranda, dan footer. Entri pertama = rekening utama."
          aksi={
            <TambahTombol
              label="+ Tambah rekening"
              onClick={() =>
                setForm((lama) =>
                  lama
                    ? {
                        ...lama,
                        banks: [
                          ...lama.banks,
                          { name: "", number: "", holder: "" },
                        ],
                      }
                    : lama,
                )
              }
            />
          }
        >
          {form.banks.length === 0 ? (
            <Kosong pesan="Belum ada rekening. Tambahkan minimal satu." />
          ) : null}
          {form.banks.map((bank, i) => (
            <Baris
              key={`bank-${i}`}
              judul={`Rekening ${i + 1}${i === 0 ? " · utama" : ""}`}
              onHapus={
                form.banks.length > 1 ? () => hapusBaris("banks", i) : undefined
              }
            >
              <div className="grid gap-3 sm:grid-cols-3">
                <MiniField label="Nama bank" htmlFor={`bank-name-${i}`}>
                  <input
                    id={`bank-name-${i}`}
                    className={INPUT_KECIL}
                    placeholder="Bank Syariah Indonesia (BSI)"
                    value={bank.name}
                    onChange={(e) => ubahBank(i, { name: e.target.value })}
                  />
                </MiniField>
                <MiniField label="Nomor rekening" htmlFor={`bank-num-${i}`}>
                  <input
                    id={`bank-num-${i}`}
                    inputMode="numeric"
                    className={`${INPUT_KECIL} tabular-nums`}
                    placeholder="1234567890"
                    value={bank.number}
                    onChange={(e) => ubahBank(i, { number: e.target.value })}
                  />
                </MiniField>
                <MiniField label="Atas nama" htmlFor={`bank-holder-${i}`}>
                  <input
                    id={`bank-holder-${i}`}
                    className={INPUT_KECIL}
                    value={bank.holder}
                    onChange={(e) => ubahBank(i, { holder: e.target.value })}
                  />
                </MiniField>
              </div>
            </Baris>
          ))}
        </Bagian>

        {/* ALAMAT */}
        <Bagian judul="Alamat pondok" catatan="Dipakai di halaman Kontak, footer, dan tautan peta.">
          <Field label="Jalan dan desa" htmlFor="addr-line">
            <input
              id="addr-line"
              className={INPUT}
              value={form.address.line}
              onChange={(e) => ubahAlamat("line", e.target.value)}
            />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Kecamatan" htmlFor="addr-district">
              <input
                id="addr-district"
                className={INPUT}
                value={form.address.district}
                onChange={(e) => ubahAlamat("district", e.target.value)}
              />
            </Field>
            <Field label="Kabupaten/kota" htmlFor="addr-regency">
              <input
                id="addr-regency"
                className={INPUT}
                value={form.address.regency}
                onChange={(e) => ubahAlamat("regency", e.target.value)}
              />
            </Field>
            <Field label="Provinsi" htmlFor="addr-province">
              <input
                id="addr-province"
                className={INPUT}
                value={form.address.province}
                onChange={(e) => ubahAlamat("province", e.target.value)}
              />
            </Field>
            <Field label="Kode pos" htmlFor="addr-postal">
              <input
                id="addr-postal"
                inputMode="numeric"
                className={`${INPUT} tabular-nums`}
                value={form.address.postal}
                onChange={(e) => ubahAlamat("postal", e.target.value)}
              />
            </Field>
          </div>
        </Bagian>

        {/* JADWAL */}
        <Bagian
          judul="Jadwal harian santri"
          catatan="Tampil sebagai tabel di halaman Pendidikan."
          aksi={
            <TambahTombol
              label="+ Tambah baris"
              onClick={() =>
                setForm((lama) =>
                  lama
                    ? { ...lama, schedule: [...lama.schedule, { time: "", activity: "" }] }
                    : lama,
                )
              }
            />
          }
        >
          {form.schedule.map((row, i) => (
            <div key={`sched-${i}`} className="flex items-start gap-3">
              <div className="w-28 shrink-0">
                <label className="sr-only" htmlFor={`sched-time-${i}`}>
                  Jam baris {i + 1}
                </label>
                <input
                  id={`sched-time-${i}`}
                  className={`${INPUT_KECIL} tabular-nums`}
                  placeholder="04.00"
                  value={row.time}
                  onChange={(e) => ubahJadwal(i, { time: e.target.value })}
                />
              </div>
              <div className="min-w-0 flex-1">
                <label className="sr-only" htmlFor={`sched-act-${i}`}>
                  Kegiatan baris {i + 1}
                </label>
                <input
                  id={`sched-act-${i}`}
                  className={INPUT_KECIL}
                  placeholder="Kegiatan"
                  value={row.activity}
                  onChange={(e) => ubahJadwal(i, { activity: e.target.value })}
                />
              </div>
              <HapusTombol
                label={`Hapus baris jadwal ${i + 1}`}
                onClick={() =>
                  setForm((lama) =>
                    lama
                      ? {
                          ...lama,
                          schedule: lama.schedule.filter((_, idx) => idx !== i),
                        }
                      : lama,
                  )
                }
              />
            </div>
          ))}
        </Bagian>

        {/* DAFTAR TEKS */}
        <Bagian
          judul="Syarat berkas pendaftaran"
          catatan="Satu syarat per baris, tampil sebagai daftar di halaman Pendaftaran."
          aksi={
            <TambahTombol
              label="+ Tambah syarat"
              onClick={() => tambahDaftar("requirements")}
            />
          }
        >
          {form.requirements.map((nilai, i) => (
            <div key={`req-${i}`} className="flex items-start gap-3">
              <div className="min-w-0 flex-1">
                <label className="sr-only" htmlFor={`req-${i}`}>
                  Syarat {i + 1}
                </label>
                <input
                  id={`req-${i}`}
                  className={INPUT_KECIL}
                  value={nilai}
                  onChange={(e) => ubahDaftar("requirements", i, e.target.value)}
                />
              </div>
              <HapusTombol
                label={`Hapus syarat ${i + 1}`}
                onClick={() => hapusDaftar("requirements", i)}
              />
            </div>
          ))}
        </Bagian>

        <Bagian
          judul="Fasilitas pondok"
          catatan="Satu fasilitas per baris, tampil di halaman Pendidikan."
          aksi={
            <TambahTombol
              label="+ Tambah fasilitas"
              onClick={() => tambahDaftar("facilities")}
            />
          }
        >
          {form.facilities.map((nilai, i) => (
            <div key={`fac-${i}`} className="flex items-start gap-3">
              <div className="min-w-0 flex-1">
                <label className="sr-only" htmlFor={`fac-${i}`}>
                  Fasilitas {i + 1}
                </label>
                <input
                  id={`fac-${i}`}
                  className={INPUT_KECIL}
                  value={nilai}
                  onChange={(e) => ubahDaftar("facilities", i, e.target.value)}
                />
              </div>
              <HapusTombol
                label={`Hapus fasilitas ${i + 1}`}
                onClick={() => hapusDaftar("facilities", i)}
              />
            </div>
          ))}
        </Bagian>
      </div>

      {/* AKSI */}
      <div className="sticky bottom-0 mt-8 flex flex-wrap items-center gap-3 border-t border-ink/10 bg-paper py-4">
        <button type="button" onClick={simpan} className="btn-primary">
          Simpan pengaturan
        </button>
        <button type="button" onClick={unduh} className="btn-secondary">
          Unduh site-config.ts
        </button>
        <button
          type="button"
          onClick={() => setPratinjau((v) => !v)}
          aria-expanded={pratinjau}
          className="text-sm text-muted underline decoration-ink/25 underline-offset-4 transition hover:text-ink"
        >
          {pratinjau ? "Sembunyikan pratinjau" : "Pratinjau berkas"}
        </button>
        <button
          type="button"
          onClick={kembalikan}
          className="ml-auto text-sm text-muted underline decoration-ink/25 underline-offset-4 transition hover:text-ink"
        >
          Kembalikan ke data awal
        </button>
      </div>

      {pratinjau ? (
        <div className="mt-4">
          <h2 className="text-sm font-semibold">Pratinjau site-config.ts</h2>
          <pre className="mt-2 max-h-96 overflow-auto rounded-card border border-ink/10 bg-ink/[0.03] p-4 text-xs leading-relaxed text-ink/85">
            <code>{buatKodeSiteConfig(form)}</code>
          </pre>
        </div>
      ) : null}
    </div>
  );
}

function Bagian({
  judul,
  catatan,
  aksi,
  children,
}: {
  judul: string;
  catatan?: string;
  aksi?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-card border border-ink/10 bg-paper p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="font-display text-lg tracking-tight">{judul}</h2>
          {catatan ? (
            <p className="mt-1 text-xs leading-relaxed text-muted">{catatan}</p>
          ) : null}
        </div>
        {aksi}
      </div>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold">
        {label}
      </label>
      {children}
      {hint ? <p className="mt-1 text-xs text-muted">{hint}</p> : null}
    </div>
  );
}

function MiniField({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1 block text-xs font-medium text-muted">
        {label}
      </label>
      {children}
      {hint ? <p className="mt-1 text-[0.7rem] text-muted">{hint}</p> : null}
    </div>
  );
}

function Baris({
  judul,
  onHapus,
  children,
}: {
  judul: string;
  onHapus?: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-ink/10 bg-paper2/40 p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-label text-muted">
          {judul}
        </p>
        {onHapus ? <HapusTombol label={`Hapus ${judul}`} onClick={onHapus} /> : null}
      </div>
      {children}
    </div>
  );
}

function TambahTombol({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-ink/20 px-4 py-1.5 text-xs font-semibold transition hover:border-ink/40 hover:bg-ink/5"
    >
      {label}
    </button>
  );
}

function HapusTombol({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="shrink-0 rounded-lg border border-ink/15 px-2.5 py-2 text-xs text-muted transition hover:border-red-700/40 hover:bg-red-50 hover:text-red-800"
    >
      Hapus
    </button>
  );
}

function Kosong({ pesan }: { pesan: string }) {
  return (
    <p className="rounded-xl border border-dashed border-ink/20 px-4 py-3 text-sm text-muted">
      {pesan}
    </p>
  );
}
