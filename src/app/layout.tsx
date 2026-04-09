import type { Metadata } from "next";
import { Be_Vietnam_Pro, Epilogue, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSharedCtas } from "@/lib/cta";
import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import { getHtmlLang, getSiteMetadataBase } from "@/lib/metadata";
import { getCompanyProfile, getContactChannels } from "@/lib/site-data";

import "./globals.css";

const headlineFont = Epilogue({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-headline",
  display: "swap"
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap"
});

const labelFont = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-label",
  display: "swap"
});

export function generateMetadata(): Metadata {
  const locale = getCurrentLocale();
  const companyProfile = getCompanyProfile(locale);

  return {
    metadataBase: getSiteMetadataBase(),
    title: {
      default: "Bento AIII",
      template: "%s | Bento AIII"
    },
    description: companyProfile.positioning
  };
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const sharedCtas = getSharedCtas(locale);
  const companyProfile = getCompanyProfile(locale);
  const contactChannels = getContactChannels(locale);
  const emailChannel = contactChannels.find((item) => item.href?.startsWith("mailto:"));

  return (
    <html lang={getHtmlLang(locale)}>
      <body className={`${headlineFont.variable} ${bodyFont.variable} ${labelFont.variable}`}>
        <SiteHeader
          locale={locale}
          navItems={dictionary.nav}
          copy={{ ...dictionary.header, cta: sharedCtas.startConversation }}
        />
        <main>{children}</main>
        <SiteFooter
          locale={locale}
          navItems={dictionary.nav}
          copy={{ ...dictionary.footer, cta: sharedCtas.startConversation }}
          companyDescription={companyProfile.description}
          emailHref={emailChannel?.href ?? "mailto:hello@bentoaiii.com"}
          emailValue={emailChannel?.value ?? "hello@bentoaiii.com"}
        />
      </body>
    </html>
  );
}
