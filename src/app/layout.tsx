import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bentoaiii.com"),
  title: {
    default: "Bento AIII",
    template: "%s | Bento AIII"
  },
  description:
    "Bento AIII is a technology company focused on AI applications and large language model systems, building practical products, workflows, and digital experiences.",
  openGraph: {
    title: "Bento AIII",
    description:
      "AI applications, large language model systems, and practical product delivery.",
    url: "https://bentoaiii.com",
    siteName: "Bento AIII",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
