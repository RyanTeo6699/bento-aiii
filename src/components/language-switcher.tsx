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
        "language-switcher max-w-full shrink-0 whitespace-nowrap",
        stacked && "w-full flex-col items-start gap-3 whitespace-normal",
        className
      )}
    >
      <span className={cn("language-switcher-label shrink-0 whitespace-nowrap leading-none", stacked && "pl-0.5")}>
        {label}
      </span>
      <div
        className={cn(
          "language-switcher-shell h-12 w-[13.4rem] max-w-full shrink-0 items-center",
          stacked && "w-full max-w-[15rem]"
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
                "language-switcher-button h-9 min-w-0 whitespace-nowrap",
                active && "language-switcher-button-active",
                !active && index === 1 && "hover:text-[rgb(var(--ink))]"
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
