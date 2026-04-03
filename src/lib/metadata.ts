import type { Metadata } from "next";

import type { Locale } from "@/lib/i18n";

const htmlLangMap: Record<Locale, string> = {
  en: "en",
  "zh-Hant": "zh-Hant",
  ja: "ja"
};

const openGraphLocaleMap: Record<Locale, string> = {
  en: "en_US",
  "zh-Hant": "zh_TW",
  ja: "ja_JP"
};

function buildTitle(title?: string) {
  return title ? `${title} | Bento AIII` : "Bento AIII";
}

export function getHtmlLang(locale: Locale) {
  return htmlLangMap[locale];
}

export function getOpenGraphLocale(locale: Locale) {
  return openGraphLocaleMap[locale];
}

export function createPageMetadata({
  locale,
  title,
  description,
  path
}: {
  locale: Locale;
  title?: string;
  description: string;
  path: string;
}): Metadata {
  return {
    ...(title ? { title } : {}),
    description,
    openGraph: {
      title: buildTitle(title),
      description,
      url: `https://bentoaiii.com${path}`,
      siteName: "Bento AIII",
      locale: getOpenGraphLocale(locale),
      type: "website"
    }
  };
}
