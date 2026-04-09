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
        "inline-flex max-w-full shrink-0 items-center gap-2.5 whitespace-nowrap",
        stacked && "w-full max-w-[20rem] flex-col items-start gap-3 whitespace-normal",
        className
      )}
    >
      <span
        className={cn(
          "label-caps shrink-0 whitespace-nowrap leading-none text-[0.62rem] text-[rgb(var(--ink-muted))]",
          stacked && "pl-1 text-[0.68rem]"
        )}
      >
        {label}
      </span>
      <div
        className={cn(
          "grid h-14 w-[14.75rem] max-w-full shrink-0 grid-cols-3 items-center gap-1 overflow-hidden rounded-full border-[3px] border-[rgb(var(--ink))] bg-white p-1 shadow-[4px_4px_0_0_rgb(var(--shadow))] lg:w-[15.5rem]",
          stacked && "w-full max-w-[16rem]"
        )}
      >
        {localeOptions.map((option, index) => {
          const active = option.value === locale;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handleLocaleChange(option.value)}
              className={cn(
                "inline-flex h-10 min-w-0 items-center justify-center whitespace-nowrap rounded-full px-2.5 font-[var(--font-label)] text-[0.82rem] font-black leading-none tracking-[0.04em] transition",
                active
                  ? "border-[2px] border-[rgb(var(--ink))] bg-[rgb(var(--secondary-container))] text-[rgb(var(--ink))] shadow-[3px_3px_0_0_rgb(var(--shadow))]"
                  : "text-[rgb(var(--ink-muted))] hover:-translate-y-0.5 hover:rotate-[-1deg] hover:bg-[rgb(var(--surface-container-low))] hover:text-[rgb(var(--ink))]",
                !active && index === 1 && "hover:rotate-[1deg]"
              )}
              aria-pressed={active}
            >
              <span className="block leading-none">{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
