"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import {
  defaultThemeMode,
  isThemeMode,
  themeColorSchemes,
  themeModes,
  themeStorageKey,
  type ThemeMode
} from "@/lib/theme";
import { cn } from "@/lib/utils";

type ThemeSwitcherProps = {
  className?: string;
};

type ThemeOption = {
  value: ThemeMode;
  label: string;
  icon: ReactNode;
};

const themeOptions: ThemeOption[] = [
  {
    value: "light",
    label: "Light",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-[1rem] w-[1rem]">
        <circle cx="10" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 2.5V4.2M10 15.8V17.5M17.5 10H15.8M4.2 10H2.5M15.3 4.7L14.1 5.9M5.9 14.1L4.7 15.3M15.3 15.3L14.1 14.1M5.9 5.9L4.7 4.7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    value: "dark",
    label: "Dark",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-[1rem] w-[1rem]">
        <path
          d="M12.9 2.9C10 3.3 7.75 5.8 7.75 8.83C7.75 12.16 10.44 14.85 13.77 14.85C14.42 14.85 15.05 14.75 15.63 14.56C14.64 16.14 12.87 17.18 10.86 17.18C7.77 17.18 5.27 14.67 5.27 11.59C5.27 7.86 8.85 4.96 12.9 2.9Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    value: "system",
    label: "System",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-[1rem] w-[1rem]">
        <circle cx="10" cy="10" r="2.1" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="5" cy="5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="15" cy="5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="5" cy="15" r="1.6" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M6.2 6.2L8.4 8.4M13.8 6.2L11.6 8.4M6.2 13.8L8.4 11.6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    )
  }
];

function applyTheme(theme: ThemeMode) {
  const root = document.documentElement;

  root.dataset.theme = theme;
  root.style.colorScheme = themeColorSchemes[theme];
}

function resolveInitialTheme(): ThemeMode {
  if (typeof document !== "undefined" && isThemeMode(document.documentElement.dataset.theme)) {
    return document.documentElement.dataset.theme;
  }

  if (typeof window !== "undefined") {
    try {
      const stored = window.localStorage.getItem(themeStorageKey);

      if (isThemeMode(stored)) {
        return stored;
      }
    } catch {}
  }

  return defaultThemeMode;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const [theme, setTheme] = useState<ThemeMode>(defaultThemeMode);

  useEffect(() => {
    const initialTheme = resolveInitialTheme();

    setTheme(initialTheme);
    applyTheme(initialTheme);

    function handleStorage(event: StorageEvent) {
      if (event.key !== themeStorageKey || !isThemeMode(event.newValue)) {
        return;
      }

      setTheme(event.newValue);
      applyTheme(event.newValue);
    }

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  function handleThemeChange(nextTheme: ThemeMode) {
    if (nextTheme === theme) {
      return;
    }

    setTheme(nextTheme);
    applyTheme(nextTheme);

    try {
      window.localStorage.setItem(themeStorageKey, nextTheme);
    } catch {}
  }

  return (
    <div className={cn("theme-switcher", className)}>
      <span className="sr-only">Theme</span>
      <div className="theme-switcher-shell" aria-label="Theme" role="group">
        {themeOptions.map((option) => {
          const active = option.value === theme;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handleThemeChange(option.value)}
              className={cn("theme-switcher-button", active && "theme-switcher-button-active")}
              aria-label={`${option.label} theme`}
              aria-pressed={active}
              title={option.label}
            >
              {option.icon}
            </button>
          );
        })}
      </div>
    </div>
  );
}
