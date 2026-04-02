import Link from "next/link";

import { companyProfile, contactChannels, navItems } from "@/lib/site-data";

export function SiteFooter() {
  const emailChannel = contactChannels.find((item) => item.href?.startsWith("mailto:"));

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-5">
          <span className="section-kicker">Bento AIII</span>
          <div className="max-w-md space-y-3">
            <h2 className="text-2xl font-semibold text-white">
              AI applications and LLM systems with a tighter product shape.
            </h2>
            <p className="text-sm leading-7 text-slate-400">
              {companyProfile.description}
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Navigate
          </h3>
          <div className="space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm text-slate-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Contact
          </h3>
          <div className="space-y-3 text-sm leading-7 text-slate-300">
            <a
              href={emailChannel?.href ?? "mailto:hello@bentoaiii.com"}
              className="block hover:text-white"
            >
              {emailChannel?.value ?? "hello@bentoaiii.com"}
            </a>
            <p className="text-slate-400">Edmonton, Alberta / remote</p>
            <p className="text-slate-500">
              Public material on the site is intentionally limited to information Bento AIII
              can reasonably stand behind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
