import Link from "next/link";

import type { Locale, NavItem } from "@/lib/i18n";
import { buildLocalizedPath } from "@/lib/locale-routing";

type SiteFooterProps = {
  locale: Locale;
  navItems: NavItem[];
  copy: {
    tagline: string;
    title: string;
    cta: string;
    navTitle: string;
    contactTitle: string;
    location: string;
    policy: string;
    closingKicker: string;
    closingLine: string;
  };
  companyDescription: string;
  emailHref: string;
  emailValue: string;
};

export function SiteFooter({
  locale,
  navItems,
  copy,
  companyDescription,
  emailHref,
  emailValue
}: SiteFooterProps) {
  const footerBadges =
    locale === "zh-Hant"
      ? ["AI 系統", "工作流交付"]
      : locale === "ja"
        ? ["AI システム", "ワークフローデリバリー"]
        : ["AI Systems", "Workflow Delivery"];

  return (
    <footer className="pb-12 pt-8">
      <div className="shell">
        <div className="surface px-6 py-8 md:px-8 md:py-10">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.85fr)]">
            <div className="min-w-0 space-y-6">
              <div className="flex items-center gap-4">
                <span className="brand-mark sticker-rotate-3">
                  <span className="brand-grid">
                    <span className="bg-[rgb(var(--primary-container))]" />
                    <span className="bg-[rgb(var(--secondary-container))]" />
                    <span className="bg-white" />
                    <span className="bg-[rgb(var(--tertiary-container))]" />
                  </span>
                </span>
                <div>
                  <p className="font-[var(--font-headline)] text-3xl font-black uppercase tracking-[-0.05em] text-[rgb(var(--ink))]">
                    Bento AIII
                  </p>
                  <p className="label-caps mt-1">{copy.tagline}</p>
                </div>
              </div>

              <div className="max-w-lg space-y-4">
                <div className="hero-marquee">
                  <span className="sticker-badge bg-[rgb(var(--secondary-container))] text-[rgb(var(--ink))] sticker-rotate-1">
                    {footerBadges[0]}
                  </span>
                  <span className="sticker-badge bg-[rgb(var(--tertiary-container))] text-[rgb(var(--ink))] sticker-rotate-3">
                    {footerBadges[1]}
                  </span>
                </div>
                <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.05em] text-[rgb(var(--ink))]">
                  {copy.title}
                </h2>
                <p className="max-w-md text-base leading-8 text-[rgb(var(--ink-soft))]">
                  {companyDescription}
                </p>
                <Link
                  href={buildLocalizedPath(locale, "/contact")}
                  className="button-primary inline-flex w-full max-w-full justify-center text-center sm:w-auto"
                >
                  {copy.cta}
                </Link>
              </div>
            </div>

            <div className="min-w-0 rounded-[1.6rem] border-[3px] border-[rgb(var(--ink))] bg-[rgb(var(--surface-container-low))] p-6 shadow-[5px_5px_0_0_rgb(var(--shadow))]">
              <h3 className="label-caps mb-5">{copy.navTitle}</h3>
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={buildLocalizedPath(locale, item.href)}
                    className={`block w-fit rounded-full px-1 py-1 text-sm font-semibold text-[rgb(var(--ink))] transition hover:-translate-y-0.5 hover:underline ${
                      index % 2 === 0 ? "hover:rotate-[-1deg]" : "hover:rotate-[1deg]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="min-w-0 rounded-[1.6rem] border-[3px] border-[rgb(var(--ink))] bg-white p-6 shadow-[5px_5px_0_0_rgb(var(--shadow))]">
              <h3 className="label-caps mb-5">{copy.contactTitle}</h3>
              <div className="space-y-4 break-words text-sm leading-7 text-[rgb(var(--ink-soft))]">
                <a
                  href={emailHref}
                  className="block break-all text-base font-semibold text-[rgb(var(--ink))] hover:text-[rgb(var(--primary))]"
                >
                  {emailValue}
                </a>
                <p>{copy.location}</p>
                <p className="text-[rgb(var(--ink-muted))]">{copy.policy}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t-[3px] border-dashed border-[rgb(var(--outline))] pt-6 md:flex-row md:items-center md:justify-between">
            <p className="label-caps">{copy.closingKicker}</p>
            <p className="text-sm text-[rgb(var(--ink-muted))]">{copy.closingLine}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
