import type { Metadata } from "next";

import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { TeamCard } from "@/components/team-card";
import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import { getTeamMembers } from "@/lib/team-data";

export function generateMetadata(): Metadata {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);

  return createPageMetadata({
    locale,
    title: dictionary.nav.find((item) => item.href === "/team")?.label ?? "Team",
    description: dictionary.team.hero.description,
    path: "/team"
  });
}

export default function TeamPage() {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const teamMembers = getTeamMembers(locale).slice(0, 5);

  return (
    <>
      <PageHero
        eyebrow={dictionary.team.hero.eyebrow}
        title={dictionary.team.hero.title}
        description={dictionary.team.hero.description}
        metrics={dictionary.team.hero.metrics}
      />

      <section className="py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={dictionary.team.overview.eyebrow}
              title={dictionary.team.overview.title}
              description={dictionary.team.overview.description}
            />
          </Reveal>

          <div className="mt-8 surface pixel-corner p-6">
            <p className="section-kicker text-[0.58rem]">
              {dictionary.team.introCard.kicker}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              {dictionary.team.introCard.body}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Reveal key={member.id} delay={0.05 * index}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-24">
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
              <Reveal
                key={item.title}
                delay={0.06 * index}
                className="surface pixel-corner p-6"
              >
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-6 lg:grid-cols-2">
          <Reveal className="surface pixel-corner p-8">
            <span className="section-kicker">{dictionary.team.fit.kicker}</span>
            <p className="mt-4 text-2xl font-semibold text-white">
              {dictionary.team.fit.title}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              {dictionary.team.fit.body}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="surface pixel-corner p-8">
            <span className="section-kicker">{dictionary.team.collaboration.kicker}</span>
            <p className="mt-4 text-2xl font-semibold text-white">
              {dictionary.team.collaboration.title}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              {dictionary.team.collaboration.body}
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCta
        eyebrow={dictionary.team.finalCta.eyebrow}
        title={dictionary.team.finalCta.title}
        description={dictionary.team.finalCta.description}
        primaryLabel={dictionary.team.finalCta.primaryLabel}
        primaryHref="/contact"
        secondaryLabel={dictionary.team.finalCta.secondaryLabel}
        secondaryHref="/projects"
      />
    </>
  );
}
