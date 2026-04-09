import type { Metadata } from "next";

import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { TeamCard } from "@/components/team-card";
import { getSharedCtas } from "@/lib/cta";
import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import { getTeamPageCopy, getTeamSections } from "@/lib/team-data";

export function generateMetadata(): Metadata {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const teamCopy = getTeamPageCopy(locale);

  return createPageMetadata({
    locale,
    title: dictionary.nav.find((item) => item.href === "/team")?.label ?? "Team",
    description: teamCopy.pageDescription,
    path: "/team"
  });
}

export default function TeamPage() {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const sharedCtas = getSharedCtas(locale);
  const teamCopy = getTeamPageCopy(locale);
  const teamSections = getTeamSections(locale);

  return (
    <>
      <PageHero
        eyebrow={dictionary.team.hero.eyebrow}
        title={teamCopy.pageTitle}
        description={teamCopy.pageDescription}
        metrics={teamCopy.metrics}
      />

      <section className="py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={dictionary.team.overview.eyebrow}
              title={teamCopy.overviewTitle}
              description={teamCopy.overviewDescription}
            />
          </Reveal>

          <div className="mt-8 surface p-6">
            <p className="section-kicker sticker-rotate-3 text-[0.68rem]">
              {dictionary.team.introCard.kicker}
            </p>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-[rgb(var(--ink-soft))]">
              {dictionary.team.introCard.body}
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {teamSections.map((section, sectionIndex) => (
              <div
                key={section.id}
                className={sectionIndex === 0 ? "" : "border-t-[3px] border-dashed border-[rgb(var(--outline))] pt-16"}
              >
                <Reveal>
                  <div className="max-w-3xl space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="sticker-badge bg-[rgb(var(--tertiary-container))] text-[rgb(var(--ink))]">
                        0{sectionIndex + 1}
                      </span>
                      <span className="hud-line max-w-xs" />
                    </div>
                    <h2 className="text-4xl font-black leading-[0.96] tracking-[-0.05em] text-[rgb(var(--ink))] md:text-5xl">
                      {section.title}
                    </h2>
                    <p className="text-base leading-8 text-[rgb(var(--ink-soft))]">
                      {section.subtitle}
                    </p>
                  </div>
                </Reveal>

                <div
                  className={`mt-10 grid gap-6 md:grid-cols-2 ${
                    section.members.length === 2 ? "xl:grid-cols-2" : "xl:grid-cols-3"
                  }`}
                >
                  {section.members.map((member, memberIndex) => (
                    <Reveal key={member.id} delay={0.05 * memberIndex}>
                      <TeamCard member={member} />
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={dictionary.team.workingModel.eyebrow}
              title={dictionary.team.workingModel.title}
              description={dictionary.team.workingModel.description}
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {dictionary.team.workingModel.cards.map((item, index) => (
              <Reveal key={item.title} delay={0.06 * index}>
                <div className={`surface p-6 ${index === 1 ? "sticker-rotate-1" : ""}`}>
                  <h3 className="text-3xl font-black leading-[0.98] tracking-[-0.05em] text-[rgb(var(--ink))]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[rgb(var(--ink-soft))]">{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-6 lg:grid-cols-2">
          <Reveal className="surface p-8">
            <span className="section-kicker sticker-rotate-1">{dictionary.team.fit.kicker}</span>
            <p className="mt-5 text-3xl font-black leading-[0.98] tracking-[-0.05em] text-[rgb(var(--ink))]">
              {dictionary.team.fit.title}
            </p>
            <p className="mt-4 text-sm leading-7 text-[rgb(var(--ink-soft))]">
              {dictionary.team.fit.body}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="surface p-8">
            <span className="section-kicker sticker-rotate-3">{dictionary.team.collaboration.kicker}</span>
            <p className="mt-5 text-3xl font-black leading-[0.98] tracking-[-0.05em] text-[rgb(var(--ink))]">
              {dictionary.team.collaboration.title}
            </p>
            <p className="mt-4 text-sm leading-7 text-[rgb(var(--ink-soft))]">
              {dictionary.team.collaboration.body}
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCta
        locale={locale}
        eyebrow={dictionary.team.finalCta.eyebrow}
        title={dictionary.team.finalCta.title}
        description={dictionary.team.finalCta.description}
        primaryLabel={sharedCtas.startConversation}
        primaryHref="/contact"
        secondaryLabel={sharedCtas.viewProjects}
        secondaryHref="/projects"
      />
    </>
  );
}
