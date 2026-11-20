import type { ReactNode } from "react";

export type ArahAnim = "kiri" | "kanan" | "turun" | "naik" | "pudar";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  anim,
  media,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
  anim?: ArahAnim;
  /** Media opsional (foto) di kolom kanan hero pada layar lebar. */
  media?: ReactNode;
}) {
  return (
    <section className="border-b border-ink/10 bg-gradient-to-b from-paper2/80 via-paper/60 to-paper">
      <div className="wrap py-16 md:py-20" data-sh-anim={anim}>
        <div
          className={
            media
              ? "grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
              : undefined
          }
        >
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-5 max-w-3xl text-[2.6rem] leading-[1.03] tracking-tight md:text-6xl">
              {title}
            </h1>
            {lead ? (
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                {lead}
              </p>
            ) : null}
          </div>
          {media ? <div className="lg:pl-4">{media}</div> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  className = "",
  anim,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  className?: string;
  anim?: ArahAnim;
}) {
  return (
    <div className={className} data-sh-anim={anim}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-3xl leading-tight tracking-tight md:text-[2.6rem]">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
