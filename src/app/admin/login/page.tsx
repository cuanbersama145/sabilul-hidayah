"use client";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { masuk } from "@/lib/admin-session";
/**
 * KERANGKA halaman Admin Login.
 * Kredensial apa pun diterima (prototipe), lalu diarahkan ke Dashboard.
 *
 * TODO (Anda):
 * 1. Ubah jadi client component ("use client") untuk useState/useRouter.
 * 2. Tambahkan field username/email + password.
 * 3. Tombol "Masuk Dashboard" → panggil masuk() lalu router.push("/admin/").
 * 4. Beri pesan validasi bila field kosong.
 */
export default function AdminLoginPage() {
  const [identitas, setIdentitas] = useState("");
  const [sandi, setSandi] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleMasuk (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!identitas.trim() || !sandi.trim()) {
      setError("isi username/email dan password dulu.");
      return;
    }

    masuk(identitas.trim());
    router.push("/admin/");
  }  
    
  return (
    <div className="flex min-h-full items-center justify-center px-5 py-16">
      <div className="w-full max-w-md rounded-card border border-ink/10 bg-paper p-8 shadow-card">
        <p className="label">Area Admin</p>
        <h1 className="mt-3 font-display text-3xl tracking-tight">Admin Login</h1>
        <p className="mt-2 text-sm text-muted">
          Masuk untuk mengelola website pondok.
        </p>

        <form onSubmit={handleMasuk} className="mt-8 space-y-5">
          <div>
            <label htmlFor="identitas" className="mb-2 block text-sm font-semibold">
              Username atau email
            </label>
            <input id="identitas" name="identitas" type="text" value={identitas} onChange={(e)=> setIdentitas(e.target.value)} className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-2.5 text-sm transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/50 focus:outline-none" />
          </div>
          <div>
            <label htmlFor="sandi" className="mb-2 block text-sm font-semibold">
              Password
            </label>
            <input id="sandi" name="sandi" type="password" value={sandi} onChange={(e) => setSandi(e.target.value)} className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-2.5 text-sm transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/50 focus:outline-none" />
          </div>
          <button type="submit" className="btn-primary w-full">
            Masuk Dashboard
          </button>
        </form>
        {error ? (
          <p role="alert" className="mt-3 text-sm text-red-700">{error}</p>
        ) : null}

        <p className="mt-6 text-xs text-muted">
          Prototipe: kredensial apa pun diterima, tanpa autentikasi sungguhan.
        </p>
      </div>
    </div>
  );
}
