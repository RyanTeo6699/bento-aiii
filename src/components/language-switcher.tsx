"use client";

import { usePathname, useRouter } from "next/navigation";

import { localeCookieName, localeOptions, type Locale } from "@/lib/i18n";
import { replaceLocaleInPathname } from "@/lib/locale-routing";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  className?: string;
  stacked?: boolean;
  onChangeComplete?: () => void;
};

export function LanguageSwitcher({
  locale,
  label,
  className,
  stacked = false,
  onChangeComplete
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  function handleLocaleChange(nextLocale: Locale) {
    if (nextLocale === locale) {
      return;
    }

    document.cookie = `${localeCookieName}=${encodeURIComponent(
      nextLocale
    )}; path=/; max-age=31536000; samesite=lax`;

    const nextPathname = replaceLocaleInPathname(pathname, nextLocale);

    if (nextPathname !== pathname) {
      router.push(nextPathname);
    }

    router.refresh();
    onChangeComplete?.();
  }

  return (
    <div
      className={cn(
        "flex min-w-0 items-center gap-3",
        stacked && "w-full flex-col items-start gap-4",
        className
      )}
    >
      <span className="label-caps shrink-0">{label}</span>
      <div className="flex max-w-full flex-wrap items-center rounded-full border-[3px] border-[rgb(var(--ink))] bg-white p-1.5 shadow-[4px_4px_0_0_rgb(var(--shadow))]">
        {localeOptions.map((option, index) => {
          const active = option.value === locale;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handleLocaleChange(option.value)}
              className={cn(
                "rounded-full px-3 py-2 font-[var(--font-label)] text-[0.74rem] font-extrabold uppercase tracking-[0.12em] transition sm:px-3.5",
                active
                  ? "border-[2px] border-[rgb(var(--ink))] bg-[rgb(var(--secondary-container))] text-[rgb(var(--ink))] shadow-[3px_3px_0_0_rgb(var(--shadow))]"
                  : "text-[rgb(var(--ink-muted))] hover:-translate-y-0.5 hover:rotate-[-1deg] hover:bg-[rgb(var(--surface-container-low))] hover:text-[rgb(var(--ink))]",
                !active && index === 1 && "hover:rotate-[1deg]"
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
