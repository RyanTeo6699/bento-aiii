export const themeModes = ["light", "dark", "system"] as const;

export type ThemeMode = (typeof themeModes)[number];

export const defaultThemeMode: ThemeMode = "light";
export const themeStorageKey = "bento-theme-mode";

export const themeColorSchemes: Record<ThemeMode, "light" | "dark"> = {
  light: "light",
  dark: "dark",
  system: "dark"
};

export function isThemeMode(value: string | null | undefined): value is ThemeMode {
  return themeModes.some((theme) => theme === value);
}
