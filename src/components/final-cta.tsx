import Link from "next/link";

import type { Locale } from "@/lib/i18n";
import { buildLocalizedPath } from "@/lib/locale-routing";

type FinalCtaProps = {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function FinalCta({
  locale,
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
        <div className="boxed-section px-6 py-10 md:px-10 md:py-12">
          <div className="max-w-4xl space-y-6">
            <span className="section-kicker sticker-rotate-3">{eyebrow}</span>
            <h2 className="headline-page max-w-4xl">{title}</h2>
            <p className="max-w-3xl text-base leading-8 text-[rgb(var(--ink-soft))] md:text-lg">
              {description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={buildLocalizedPath(locale, primaryHref)}
              className="button-primary w-full justify-center text-center sm:w-auto"
            >
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref ? (
              <Link
                href={buildLocalizedPath(locale, secondaryHref)}
                className="button-secondary w-full justify-center text-center sm:w-auto"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
