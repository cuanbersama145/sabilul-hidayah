import { AdminHeader } from "@/components/admin/admin-header";
import { AnnouncementForm } from "@/components/admin/announcement-form";

/**
 * KERANGKA halaman ubah pengumuman.
 * Di Next.js 15, `params` berupa Promise — harus di-await.
 *
 * TODO (Anda): cari data dengan cariPengumuman(id); beri notFound() bila tidak ada,
 * lalu teruskan sebagai nilai awal form.
 */
export default async function UbahPengumumanPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <AdminHeader title="Ubah Pengumuman" subtitle={`id: ${id}`} />
      <div className="mt-6">
        <AnnouncementForm mode="edit" id={id} />
      </div>
    </div>
  );
}
