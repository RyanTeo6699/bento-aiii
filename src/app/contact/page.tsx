import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import { getContactChannels } from "@/lib/site-data";

export function generateMetadata(): Metadata {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);

  return createPageMetadata({
    locale,
    title: dictionary.nav.find((item) => item.href === "/contact")?.label ?? "Contact",
    description: dictionary.contact.hero.description,
    path: "/contact"
  });
}

export default function ContactPage() {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const contactChannels = getContactChannels(locale);

  return (
    <>
      <PageHero
        eyebrow={dictionary.contact.hero.eyebrow}
        title={dictionary.contact.hero.title}
        description={dictionary.contact.hero.description}
        metrics={dictionary.contact.hero.metrics}
      />

      <section className="py-24">
        <div className="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <Reveal>
              <SectionHeading
                eyebrow={dictionary.contact.reachOut.eyebrow}
                title={dictionary.contact.reachOut.title}
                description={dictionary.contact.reachOut.description}
              />
            </Reveal>

            <div className="grid gap-6">
              {contactChannels.map((channel, index) => (
                <Reveal key={channel.label} delay={0.06 * index}>
                  <div className={`surface p-6 ${index === 1 ? "sticker-rotate-1" : ""}`}>
                    <p className="neo-microcopy">{channel.label}</p>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        className="mt-4 block text-3xl font-black leading-[0.98] tracking-[-0.05em] text-[rgb(var(--ink))] hover:text-[rgb(var(--primary))]"
                      >
                        {channel.value}
                      </a>
                    ) : (
                      <p className="mt-4 text-3xl font-black leading-[0.98] tracking-[-0.05em] text-[rgb(var(--ink))]">
                        {channel.value}
                      </p>
                    )}
                    <p className="mt-3 text-sm leading-7 text-[rgb(var(--ink-soft))]">{channel.note}</p>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={0.18} className="surface p-6">
                <p className="section-kicker sticker-rotate-3 text-[0.68rem]">
                  {dictionary.contact.submissionPath.kicker}
                </p>
                <div className="mt-5 space-y-4">
                  {dictionary.contact.submissionPath.steps.map((step) => (
                    <div
                      key={step.label}
                      className="border-t-[3px] border-dashed border-[rgb(var(--outline))] pt-4 first:border-t-0 first:pt-0"
                    >
                      <p className="neo-microcopy">{step.label}</p>
                      <p className="mt-2 text-sm leading-7 text-[rgb(var(--ink-soft))]">
                        {step.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.08}>
            <ContactForm locale={locale} copy={dictionary.contactForm} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
