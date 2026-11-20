/**
 * Sesi dummy untuk prototipe. Kredensial apa pun diterima; tidak ada auth sungguhan.
 *
 * TODO (Anda):
 * 1. `masuk()` → simpan penanda sesi ke localStorage.
 * 2. `sudahMasuk()` → baca penanda tersebut (dipakai untuk mengunci /admin/).
 * 3. `keluar()` → hapus penanda, lalu arahkan ke /admin/login/.
 * 4. Pasang pengecekan di `src/app/admin/(panel)/layout.tsx`.
 */
export const SESSION_KEY = "sh_admin_session";

export function sudahMasuk(): boolean {
  if (typeof window === "undefined") return false;
    
  try {
  return Boolean(window.localStorage.getItem(SESSION_KEY));
} catch {
  return false;
  
  }
}

export function masuk(nama: string): void {
 if (typeof window === "undefined") return;
 
 try {
  window.localStorage.setItem(SESSION_KEY, nama || "admin");
 } catch {
  
 }
}

export function keluar(): void {
  if (typeof window === "undefined") return; 
    
  try{
    window.localStorage.removeItem (SESSION_KEY);
} catch {
  }
} 