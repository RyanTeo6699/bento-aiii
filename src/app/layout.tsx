import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import { getHtmlLang, getOpenGraphLocale } from "@/lib/metadata";
import { getCompanyProfile, getContactChannels } from "@/lib/site-data";

import "./globals.css";

export function generateMetadata(): Metadata {
  const locale = getCurrentLocale();
  const companyProfile = getCompanyProfile(locale);

  return {
    metadataBase: new URL("https://bentoaiii.com"),
    title: {
      default: "Bento AIII",
      template: "%s | Bento AIII"
    },
    description: companyProfile.positioning,
    openGraph: {
      title: "Bento AIII",
      description: companyProfile.positioning,
      url: "https://bentoaiii.com",
      siteName: "Bento AIII",
      locale: getOpenGraphLocale(locale),
      type: "website"
    }
  };
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const companyProfile = getCompanyProfile(locale);
  const contactChannels = getContactChannels(locale);
  const emailChannel = contactChannels.find((item) => item.href?.startsWith("mailto:"));

  return (
    <html lang={getHtmlLang(locale)}>
      <body>
        <SiteHeader locale={locale} navItems={dictionary.nav} copy={dictionary.header} />
        <main>{children}</main>
        <SiteFooter
          navItems={dictionary.nav}
          copy={dictionary.footer}
          companyDescription={companyProfile.description}
          emailHref={emailChannel?.href ?? "mailto:hello@bentoaiii.com"}
          emailValue={emailChannel?.value ?? "hello@bentoaiii.com"}
        />
      </body>
    </html>
  );
}
