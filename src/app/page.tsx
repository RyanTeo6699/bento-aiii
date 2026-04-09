import Link from "next/link";
import type { Metadata } from "next";

import { FinalCta } from "@/components/final-cta";
import { HeroScene } from "@/components/hero-scene";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { TeamCard } from "@/components/team-card";
import { getSharedCtas } from "@/lib/cta";
import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import { buildLocalizedPath } from "@/lib/locale-routing";
import { createPageMetadata } from "@/lib/metadata";
import { getProjectPresentationCopy, getProjects as getCommercialProjects } from "@/lib/project-commercial";
import { getFeaturedTeamMembers, getTeamPageCopy } from "@/lib/team-data";
import { getCapabilityPillars, getCompanyProfile } from "@/lib/site-data";

const heroBadgeCopy = {
  en: ["AI Systems", "LLM Workflows", "Product Delivery", "Built in Progress"],
  "zh-Hant": ["AI 系統", "LLM 工作流", "產品交付", "持續建構中"],
  ja: ["AI システム", "LLM ワークフロー", "プロダクトデリバリー", "継続構築中"]
} as const;

export function generateMetadata(): Metadata {
  const locale = getCurrentLocale();
  const companyProfile = getCompanyProfile(locale);

  return createPageMetadata({
    locale,
    title:
      locale === "en"
        ? "AI Applications & LLM Systems"
        : locale === "zh-Hant"
          ? "AI 應用與 LLM 系統"
          : "AI アプリケーションと LLM システム",
    description: companyProfile.positioning,
    path: "/"
  });
}

export default function HomePage() {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const sharedCtas = getSharedCtas(locale);
  const projectPresentationCopy = getProjectPresentationCopy(locale);
  const teamCopy = getTeamPageCopy(locale);
  const companyProfile = getCompanyProfile(locale);
  const capabilityPillars = getCapabilityPillars(locale);
  const featuredProjects = getCommercialProjects(locale).filter((project) => project.featured);
  const featuredMembers = getFeaturedTeamMembers(locale);

  return (
    <>
      <section className="pt-32 md:pt-36">
        <div className="shell">
          <div className="boxed-section px-6 py-8 md:px-10 md:py-10">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(430px,0.92fr)] lg:items-center">
              <div className="max-w-3xl">
                <Reveal className="space-y-6">
                  <div className="hero-marquee">
                    {heroBadgeCopy[locale].map((item, index) => (
                      <span
                        key={item}
                        className={`sticker-badge text-[rgb(var(--ink))] ${
                          index === 0
                            ? "bg-[rgb(var(--secondary-container))] sticker-rotate-1"
                            : index === 1
                              ? "bg-white sticker-rotate-3"
                              : index === 2
                                ? "bg-[rgb(var(--tertiary-container))]"
                                : "bg-[rgb(var(--primary-container))] sticker-rotate-2"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <p className="label-caps">{dictionary.home.hero.location}</p>
                    <h1 className="headline-display">
                      {dictionary.home.hero.title}
                      <span className="mt-4 block text-[0.5em] not-italic font-black tracking-[-0.05em] text-[rgb(var(--secondary))]">
                        {dictionary.home.hero.subtitle}
                      </span>
                    </h1>
                  </div>

                  <p className="max-w-2xl text-2xl leading-tight text-[rgb(var(--ink))] md:text-[2rem]">
                    {dictionary.home.hero.lead}
                  </p>

                  <p className="max-w-2xl text-base leading-8 text-[rgb(var(--ink-soft))]">
                    {companyProfile.description} {dictionary.home.hero.body}
                  </p>
                </Reveal>

                <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-4">
                  <Link href={buildLocalizedPath(locale, "/contact")} className="button-primary">
                    {sharedCtas.startConversation}
                  </Link>
                  <Link href={buildLocalizedPath(locale, "/projects")} className="button-secondary">
                    {sharedCtas.viewProjects}
                  </Link>
                </Reveal>

                <Reveal delay={0.16} className="mt-10 grid gap-4 md:grid-cols-3">
                  {dictionary.home.hero.signals.map((signal, index) => (
                    <div
                      key={signal.label}
                      className={`surface p-5 ${index === 1 ? "sticker-rotate-1" : index === 2 ? "sticker-rotate-3" : ""}`}
                    >
                      <p className="neo-microcopy">{signal.label}</p>
                      <p className="mt-3 text-sm leading-7 text-[rgb(var(--ink-soft))]">
                        {signal.value}
                      </p>
                    </div>
                  ))}
                </Reveal>
              </div>

              <Reveal delay={0.12} className="lg:pl-4">
                <HeroScene copy={dictionary.home.heroScene} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow={dictionary.home.about.eyebrow}
              title={dictionary.home.about.title}
              description={companyProfile.description}
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            <Reveal delay={0.06} className="surface p-6">
              <p className="section-kicker sticker-rotate-1 text-[0.68rem]">
                {dictionary.home.about.missionLabel}
              </p>
              <p className="mt-5 text-lg leading-8 text-[rgb(var(--ink))]">
                {companyProfile.mission}
              </p>
            </Reveal>

            <Reveal delay={0.12} className="surface p-6">
              <p className="section-kicker sticker-rotate-3 text-[0.68rem]">
                {dictionary.home.about.publicMaterialLabel}
              </p>
              <p className="mt-5 text-sm leading-7 text-[rgb(var(--ink-soft))]">
                {companyProfile.disclosure}
              </p>
              <div className="mt-6 border-t-[3px] border-dashed border-[rgb(var(--outline))] pt-4">
                <p className="neo-microcopy">{dictionary.home.about.sitePolicyLabel}</p>
                <p className="mt-2 text-sm leading-7 text-[rgb(var(--ink-muted))]">
                  {dictionary.home.about.sitePolicyText}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={dictionary.home.capabilities.eyebrow}
              title={dictionary.home.capabilities.title}
              description={dictionary.home.capabilities.description}
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {capabilityPillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={0.06 * index}>
                <div className={`pack-card p-6 md:p-7 ${index % 2 === 0 ? "sticker-rotate-1" : "sticker-rotate-3"}`}>
                  <p className="sticker-badge bg-[rgb(var(--tertiary-container))] text-[rgb(var(--ink))]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-5 text-3xl font-black leading-[0.98] tracking-[-0.05em] text-[rgb(var(--ink))]">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[rgb(var(--ink-soft))]">
                    {pillar.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {pillar.bullets.map((item) => (
                      <span key={item} className="project-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow={dictionary.home.projects.eyebrow}
                title={dictionary.home.projects.title}
                description={dictionary.home.projects.description}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <Link href={buildLocalizedPath(locale, "/projects")} className="button-secondary">
                {sharedCtas.viewProjects}
              </Link>
            </Reveal>
          </div>

          <div className="deck-grid mt-12 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={0.06 * index}>
                <div className={index === 1 ? "card-stack md:translate-y-5" : index === 2 ? "card-stack md:-translate-y-2" : "card-stack"}>
                  <ProjectCard
                    locale={locale}
                    project={project}
                    variant="featured"
                    copy={{
                      viewDetail: dictionary.common.viewDetail,
                      idealUsers: projectPresentationCopy.idealUsers,
                      deliveryScope: projectPresentationCopy.deliveryScope,
                      keyOutcome: projectPresentationCopy.keyOutcome,
                      valueCase: projectPresentationCopy.valueCase,
                      platformLabel: projectPresentationCopy.platformLabel,
                      statusLabels: dictionary.common.statusLabels
                    }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow={dictionary.home.team.eyebrow}
                title={teamCopy.homeTitle}
                description={teamCopy.homeDescription}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <Link href={buildLocalizedPath(locale, "/team")} className="button-secondary">
                {sharedCtas.viewTeam}
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredMembers.map((member, index) => (
              <Reveal key={member.id} delay={0.06 * index}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        locale={locale}
        eyebrow={dictionary.home.finalCta.eyebrow}
        title={dictionary.home.finalCta.title}
        description={dictionary.home.finalCta.description}
        primaryLabel={sharedCtas.startConversation}
        primaryHref="/contact"
        secondaryLabel={sharedCtas.viewProjects}
        secondaryHref="/projects"
      />
    </>
  );
}
