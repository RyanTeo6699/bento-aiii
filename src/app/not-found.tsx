import type { Metadata } from "next";
import Link from "next/link";

import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import { buildLocalizedPath } from "@/lib/locale-routing";
import { createPageMetadata } from "@/lib/metadata";

export function generateMetadata(): Metadata {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);

  return createPageMetadata({
    locale,
    title: dictionary.notFound.title,
    description: dictionary.notFound.description,
    path: "/404"
  });
}

export default function NotFound() {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);

  return (
    <section className="flex min-h-screen items-center pt-24">
      <div className="shell">
        <div className="boxed-section max-w-4xl px-8 py-10 md:px-12 md:py-14">
          <span className="section-kicker sticker-rotate-1">404</span>
          <h1 className="headline-page mt-6">{dictionary.notFound.title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[rgb(var(--ink-soft))]">
            {dictionary.notFound.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={buildLocalizedPath(locale, "/")} className="button-primary">
              {dictionary.notFound.primaryLabel}
            </Link>
            <Link href={buildLocalizedPath(locale, "/projects")} className="button-secondary">
              {dictionary.notFound.secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
