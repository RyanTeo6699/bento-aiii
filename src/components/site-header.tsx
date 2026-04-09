"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/language-switcher";
import { type Locale, type NavItem } from "@/lib/i18n";
import { buildLocalizedPath, getLogicalPathname } from "@/lib/locale-routing";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  locale: Locale;
  navItems: NavItem[];
  copy: {
    brandTagline: string;
    cta: string;
    mobileToggleLabel: string;
    languageLabel: string;
  };
};

export function SiteHeader({ locale, navItems, copy }: SiteHeaderProps) {
  const pathname = usePathname();
  const logicalPathname = getLogicalPathname(pathname);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="shell pt-4 md:pt-5">
        <div className="overflow-hidden rounded-[1.8rem] border-[3px] border-[rgb(var(--ink))] bg-[rgb(var(--primary-container))] shadow-[8px_8px_0_0_rgb(var(--shadow))]">
          <div className="border-b-[3px] border-[rgb(var(--ink))] bg-[rgb(var(--tertiary-container))] px-4 py-2 text-center">
            <p className="label-caps text-[rgb(var(--ink))]">{copy.brandTagline}</p>
          </div>

          <div className="px-4 py-4 md:px-5">
            <div className="flex items-center justify-between gap-5">
              <Link
                href={buildLocalizedPath(locale, "/")}
                className="flex min-w-0 items-center gap-3"
              >
                <span className="brand-mark shrink-0 sticker-rotate-1">
                  <span className="brand-grid">
                    <span className="bg-[rgb(var(--primary-container))]" />
                    <span className="bg-[rgb(var(--secondary-container))]" />
                    <span className="bg-white" />
                    <span className="bg-[rgb(var(--tertiary-container))]" />
                  </span>
                </span>
                <div className="min-w-0">
                  <span className="block truncate font-[var(--font-headline)] text-2xl font-black uppercase tracking-[-0.04em] text-[rgb(var(--ink))]">
                    Bento AIII
                  </span>
                  <span className="block truncate font-[var(--font-label)] text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-[rgb(var(--ink-muted))]">
                    {copy.brandTagline}
                  </span>
                </div>
              </Link>

              <nav className="hidden items-center gap-2 xl:flex">
                {navItems.map((item, index) => {
                  const active =
                    item.href === "/"
                      ? logicalPathname === item.href
                      : logicalPathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={buildLocalizedPath(locale, item.href)}
                      className={cn(
                        "rounded-full border-[3px] border-transparent px-4 py-2 font-[var(--font-label)] text-[0.8rem] font-extrabold uppercase tracking-[0.12em] text-[rgb(var(--ink))] transition",
                        active
                          ? "border-[rgb(var(--ink))] bg-white shadow-[4px_4px_0_0_rgb(var(--shadow))]"
                          : "hover:-translate-y-0.5 hover:border-[rgb(var(--ink))] hover:bg-[rgb(var(--surface-container-low))] hover:shadow-[4px_4px_0_0_rgb(var(--shadow))]",
                        index % 2 === 0 ? "hover:rotate-[-1.5deg]" : "hover:rotate-[1.5deg]"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="hidden items-center gap-3 xl:flex">
                <LanguageSwitcher locale={locale} label={copy.languageLabel} />
                <Link
                  href={buildLocalizedPath(locale, "/contact")}
                  className="button-primary whitespace-nowrap"
                >
                  {copy.cta}
                </Link>
              </div>

              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-[rgb(var(--ink))] bg-white text-[rgb(var(--ink))] shadow-[4px_4px_0_0_rgb(var(--shadow))] xl:hidden"
                aria-expanded={open}
                aria-label={copy.mobileToggleLabel}
              >
                <span className="flex flex-col gap-1.5">
                  <span className="h-[3px] w-5 rounded-full bg-[rgb(var(--ink))]" />
                  <span className="h-[3px] w-5 rounded-full bg-[rgb(var(--ink))]" />
                  <span className="h-[3px] w-5 rounded-full bg-[rgb(var(--ink))]" />
                </span>
              </button>
            </div>

            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="overflow-hidden xl:hidden"
                >
                  <div className="mt-5 space-y-3 border-t-[3px] border-[rgb(var(--ink))] pt-5">
                    {navItems.map((item, index) => {
                      const active =
                        item.href === "/"
                          ? logicalPathname === item.href
                          : logicalPathname.startsWith(item.href);

                      return (
                        <Link
                          key={item.href}
                          href={buildLocalizedPath(locale, item.href)}
                          className={cn(
                            "block rounded-[1.35rem] border-[3px] px-4 py-3 font-[var(--font-label)] text-[0.82rem] font-extrabold uppercase tracking-[0.12em] text-[rgb(var(--ink))] transition",
                            active
                              ? "border-[rgb(var(--ink))] bg-white shadow-[4px_4px_0_0_rgb(var(--shadow))]"
                              : "border-transparent bg-[rgb(var(--surface-container-low))] hover:border-[rgb(var(--ink))]",
                            index % 2 === 0 ? "sticker-rotate-1" : "sticker-rotate-3"
                          )}
                        >
                          {item.label}
                        </Link>
                      );
                    })}

                    <div className="rounded-[1.45rem] border-[3px] border-[rgb(var(--ink))] bg-white p-4 shadow-[4px_4px_0_0_rgb(var(--shadow))]">
                      <LanguageSwitcher
                        locale={locale}
                        label={copy.languageLabel}
                        stacked
                        onChangeComplete={() => setOpen(false)}
                      />
                    </div>

                    <Link
                      href={buildLocalizedPath(locale, "/contact")}
                      className="button-primary mt-1 w-full"
                    >
                      {copy.cta}
                    </Link>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
