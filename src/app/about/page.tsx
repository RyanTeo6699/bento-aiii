import type { Metadata } from "next";

import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import {
  getCapabilityPillars,
  getCompanyProfile,
  getRoadmap,
  getValues
} from "@/lib/site-data";

export function generateMetadata(): Metadata {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const companyProfile = getCompanyProfile(locale);

  return createPageMetadata({
    locale,
    title: dictionary.nav.find((item) => item.href === "/about")?.label ?? "About",
    description: companyProfile.positioning,
    path: "/about"
  });
}

export default function AboutPage() {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const companyProfile = getCompanyProfile(locale);
  const capabilityPillars = getCapabilityPillars(locale);
  const values = getValues(locale);
  const roadmap = getRoadmap(locale);

  return (
    <>
      <PageHero
        eyebrow={dictionary.about.hero.eyebrow}
        title={dictionary.about.hero.title}
        description={companyProfile.positioning}
        metrics={dictionary.about.hero.metrics}
      />

      <section className="py-24">
        <div className="shell grid gap-6 lg:grid-cols-2">
          <Reveal className="surface pixel-corner p-8">
            <span className="section-kicker">{dictionary.about.brief.kicker}</span>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              {dictionary.about.brief.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              {companyProfile.description}
            </p>
            <p className="mt-4 text-base leading-8 text-slate-400">
              {dictionary.about.brief.body}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="surface pixel-corner p-8">
            <span className="section-kicker">{dictionary.about.publicInfo.kicker}</span>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              {dictionary.about.publicInfo.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              {companyProfile.disclosure}
            </p>
            <div className="mt-8 space-y-4">
              <div className="border-t border-white/10 pt-4">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  {dictionary.about.publicInfo.whyLabel}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {dictionary.about.publicInfo.whyText}
                </p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  {dictionary.about.publicInfo.missionLabel}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {companyProfile.mission}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={dictionary.about.businessDirections.eyebrow}
              title={dictionary.about.businessDirections.title}
              description={dictionary.about.businessDirections.description}
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {capabilityPillars.slice(0, 3).map((pillar, index) => (
              <Reveal
                key={pillar.title}
                delay={0.06 * index}
                className="surface pixel-corner p-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-accent">
                  {dictionary.about.businessDirections.trackPrefix} 0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{pillar.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={dictionary.about.technicalCapability.eyebrow}
              title={dictionary.about.technicalCapability.title}
              description={dictionary.about.technicalCapability.description}
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {capabilityPillars.map((pillar, index) => (
              <Reveal
                key={pillar.title}
                delay={0.05 * index}
                className="surface pixel-corner p-6"
              >
                <h3 className="text-2xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{pillar.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {pillar.bullets.map((item) => (
                    <span key={item} className="signal-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={dictionary.about.values.eyebrow}
              title={dictionary.about.values.title}
              description={dictionary.about.values.description}
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <Reveal
                key={value.title}
                delay={0.05 * index}
                className="surface pixel-corner p-6"
              >
                <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={dictionary.about.roadmap.eyebrow}
              title={dictionary.about.roadmap.title}
              description={dictionary.about.roadmap.description}
            />
          </Reveal>

          <div className="mt-12 space-y-5">
            {roadmap.map((item, index) => (
              <Reveal
                key={item.phase}
                delay={0.05 * index}
                className="surface pixel-corner grid gap-5 p-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-start"
              >
                <div>
                  <p className="section-kicker text-[0.58rem]">{item.phase}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        eyebrow={dictionary.about.finalCta.eyebrow}
        title={dictionary.about.finalCta.title}
        description={dictionary.about.finalCta.description}
        primaryLabel={dictionary.about.finalCta.primaryLabel}
        primaryHref="/contact"
        secondaryLabel={dictionary.about.finalCta.secondaryLabel}
        secondaryHref="/projects"
      />
    </>
  );
}
