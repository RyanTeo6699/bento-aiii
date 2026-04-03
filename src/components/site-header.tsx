"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  localeCookieName,
  localeOptions,
  type Locale,
  type NavItem
} from "@/lib/i18n";
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
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function handleLocaleChange(nextLocale: Locale) {
    if (nextLocale === locale) {
      return;
    }

    document.cookie = `${localeCookieName}=${encodeURIComponent(
      nextLocale
    )}; path=/; max-age=31536000; samesite=lax`;
    setOpen(false);
    router.refresh();
  }

  function renderLocaleSwitch(className?: string) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <span className="shrink-0 font-pixel text-[0.62rem] uppercase tracking-[0.18em] text-slate-500">
          {copy.languageLabel}
        </span>
        <div className="flex flex-wrap items-center rounded-[0.95rem] border border-white/10 bg-white/[0.03] p-1">
          {localeOptions.map((option) => {
            const active = option.value === locale;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => handleLocaleChange(option.value)}
                className={cn(
                  "rounded-[0.7rem] px-2.5 py-2 text-xs font-medium transition",
                  active
                    ? "bg-white/[0.08] text-white"
                    : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
                )}
                aria-pressed={active}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="shell pt-4">
        <div className="surface px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-6">
            <Link href="/" className="flex min-w-0 items-center gap-3">
              <span className="brand-mark shrink-0">
                <span className="brand-grid">
                  <span className="bg-accent shadow-[0_0_16px_rgba(46,232,255,0.8)]" />
                  <span className="bg-white/15" />
                  <span className="bg-white/15" />
                  <span className="bg-violet" />
                </span>
              </span>
              <div className="min-w-0">
                <span className="block truncate text-sm font-semibold tracking-[0.14em] text-white">
                  Bento AIII
                </span>
                <span className="block truncate font-pixel text-[0.6rem] uppercase tracking-[0.22em] text-slate-500">
                  {copy.brandTagline}
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 xl:flex">
              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === item.href
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-[0.9rem] px-3 py-2 text-sm transition",
                      active
                        ? "bg-white/[0.08] text-white"
                        : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 xl:flex">
              {renderLocaleSwitch()}
              <Link href="/contact" className="button-primary">
                {copy.cta}
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[0.9rem] border border-white/10 bg-white/[0.03] text-white xl:hidden"
              aria-expanded={open}
              aria-label={copy.mobileToggleLabel}
            >
              <span className="flex flex-col gap-1.5">
                <span className="h-px w-5 bg-white" />
                <span className="h-px w-5 bg-white" />
                <span className="h-px w-5 bg-white" />
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
                <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
                  {navItems.map((item) => {
                    const active =
                      item.href === "/"
                        ? pathname === item.href
                        : pathname.startsWith(item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "block rounded-[1rem] px-4 py-3 text-sm transition",
                          active
                            ? "bg-white/[0.08] text-white"
                            : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}

                  <div className="pt-3">{renderLocaleSwitch("flex-col items-start")}</div>

                  <Link href="/contact" className="button-primary mt-2 w-full">
                    {copy.cta}
                  </Link>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
