import { AdminHeader } from "@/components/admin/admin-header";
import { AnnouncementForm } from "@/components/admin/announcement-form";

/** KERANGKA halaman "+ Buat Pengumuman". */
export default function BuatPengumumanPage() {
  return (
    <div>
      <AdminHeader title="Buat Pengumuman" subtitle="Rancangan form admin" />
      <div className="mt-6">
        <AnnouncementForm mode="baru" />
      </div>
    </div>
  );
}
