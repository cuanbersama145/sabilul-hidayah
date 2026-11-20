/**
 * Header atas panel admin.
 * TODO (Anda): tambahkan identitas akun dummy dan tombol Keluar.
 */
export function AdminHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 bg-paper px-6 py-4 md:px-10">
      <div>
        <h1 className="font-display text-xl tracking-tight">{title}</h1>
        {subtitle ? <p className="mt-0.5 text-xs text-muted">{subtitle}</p> : null}
      </div>
      <span className="rounded-full border border-ink/15 px-3 py-1.5 text-xs text-muted">
        Administrator
      </span>
    </header>
  );
}
