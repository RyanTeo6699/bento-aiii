import Link from "next/link";

type FinalCtaProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function FinalCta({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref
}: FinalCtaProps) {
  return (
    <section className="py-24">
      <div className="shell">
        <div className="surface pixel-corner px-6 py-10 md:px-10 md:py-12">
          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-3">
              <span className="section-kicker">{eyebrow}</span>
              <span className="hud-line max-w-xs" />
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
              {title}
            </h2>
            <p className="text-base leading-8 text-slate-300 md:text-lg">
              {description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={primaryHref} className="button-primary">
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref ? (
              <Link href={secondaryHref} className="button-secondary">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
