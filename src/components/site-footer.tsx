import Link from "next/link";

import type { NavItem } from "@/lib/i18n";

type SiteFooterProps = {
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
  navItems,
  copy,
  companyDescription,
  emailHref,
  emailValue
}: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="shell">
        <div className="surface px-6 py-8 md:px-8 md:py-10">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.8fr)]">
            <div className="min-w-0 space-y-5">
              <div className="flex items-center gap-3">
                <span className="brand-mark">
                  <span className="brand-grid">
                    <span className="bg-accent shadow-[0_0_16px_rgba(46,232,255,0.8)]" />
                    <span className="bg-white/15" />
                    <span className="bg-white/15" />
                    <span className="bg-violet" />
                  </span>
                </span>
                <div>
                  <p className="text-xl font-semibold tracking-[0.08em] text-white">
                    Bento AIII
                  </p>
                  <p className="font-pixel text-[0.62rem] uppercase tracking-[0.22em] text-slate-500">
                    {copy.tagline}
                  </p>
                </div>
              </div>

              <div className="max-w-md space-y-3">
                <h2 className="text-2xl font-semibold text-white">{copy.title}</h2>
                <p className="text-sm leading-7 text-slate-400">{companyDescription}</p>
                <Link
                  href="/contact"
                  className="button-secondary inline-flex w-full max-w-full justify-center text-center sm:w-auto"
                >
                  {copy.cta}
                </Link>
              </div>
            </div>

            <div className="min-w-0">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                {copy.navTitle}
              </h3>
              <div className="space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block break-words text-sm text-slate-300 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="min-w-0">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                {copy.contactTitle}
              </h3>
              <div className="space-y-3 break-words text-sm leading-7 text-slate-300">
                <a href={emailHref} className="block break-all hover:text-white">
                  {emailValue}
                </a>
                <p className="text-slate-400">{copy.location}</p>
                <p className="text-slate-500">{copy.policy}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
            <p className="font-pixel text-[0.62rem] uppercase tracking-[0.18em] text-slate-500">
              {copy.closingKicker}
            </p>
            <p className="text-sm text-slate-500">{copy.closingLine}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
