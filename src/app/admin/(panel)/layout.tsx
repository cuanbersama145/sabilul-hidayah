import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminGate } from "@/components/admin/admin-gate"
/**
 * Shell panel admin: sidebar kiri + header atas.
 * Route group `(panel)` tidak memengaruhi URL, jadi halaman ini tetap /admin/.
 *
 * TODO (Anda):
 * 1. Pasang pengecekan sesi di sini — jika !sudahMasuk() arahkan ke /admin/login/.
 *    (Perlu client component; lihat panduan.)
 * 2. Sesuaikan lebar sidebar dan perilaku collapse di layar kecil.
 */
export default function PanelLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
  <AdminGate>
    <div className="flex min-h-full">
      <AdminSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <main className="flex-1 p-6 md:p-10">{children}</main>
      </div>
    </div>
  </AdminGate>
  );
}
