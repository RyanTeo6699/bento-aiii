import type { Metadata } from "next";
import Link from "next/link";

import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
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
        <div className="surface pixel-corner max-w-3xl p-8 md:p-12">
          <span className="section-kicker">404</span>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            {dictionary.notFound.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            {dictionary.notFound.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/" className="button-primary">
              {dictionary.notFound.primaryLabel}
            </Link>
            <Link href="/projects" className="button-secondary">
              {dictionary.notFound.secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
