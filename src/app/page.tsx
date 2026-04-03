import Link from "next/link";
import type { Metadata } from "next";

import { FinalCta } from "@/components/final-cta";
import { HeroScene } from "@/components/hero-scene";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { TeamCard } from "@/components/team-card";
import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import { getTeamMembers } from "@/lib/team-data";
import {
  getCapabilityPillars,
  getCompanyProfile,
  getProjects
} from "@/lib/site-data";

export function generateMetadata(): Metadata {
  const locale = getCurrentLocale();
  const companyProfile = getCompanyProfile(locale);

  return createPageMetadata({
    locale,
    description: companyProfile.positioning,
    path: "/"
  });
}

export default function HomePage() {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const companyProfile = getCompanyProfile(locale);
  const capabilityPillars = getCapabilityPillars(locale);
  const featuredProjects = getProjects(locale).filter((project) => project.featured);
  const featuredMembers = getTeamMembers(locale).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_24%,rgba(46,232,255,0.16),transparent_28%),radial-gradient(circle_at_88%_14%,rgba(139,96,255,0.12),transparent_22%)]" />
        <div className="shell relative grid gap-14 pb-20 pt-10 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.98fr)] lg:items-center">
          <div className="max-w-2xl">
            <Reveal className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="section-kicker">{dictionary.home.hero.kicker}</span>
                <span className="hud-line max-w-xs" />
              </div>

              <div className="space-y-3">
                <p className="font-pixel text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">
                  {dictionary.home.hero.location}
                </p>
                <h1 className="text-5xl font-semibold leading-none tracking-[-0.04em] text-white md:text-[5.5rem]">
                  {dictionary.home.hero.title}
                  <span className="mt-3 block text-[0.48em] font-medium tracking-[-0.03em] text-slate-200">
                    {dictionary.home.hero.subtitle}
                  </span>
                </h1>
              </div>

              <p className="max-w-2xl text-2xl leading-tight text-slate-100 md:text-[1.95rem]">
                {dictionary.home.hero.lead}
              </p>

              <p className="max-w-xl text-base leading-8 text-slate-400">
                {companyProfile.description} {dictionary.home.hero.body}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="button-primary">
                {dictionary.home.hero.ctaPrimary}
              </Link>
              <Link href="/projects" className="button-secondary">
                {dictionary.home.hero.ctaSecondary}
              </Link>
            </Reveal>

            <Reveal
              delay={0.16}
              className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3"
            >
              {dictionary.home.hero.signals.map((signal) => (
                <div key={signal.label} className="space-y-3">
                  <p className="neo-microcopy">{signal.label}</p>
                  <p className="text-sm leading-7 text-slate-300">{signal.value}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:pl-8">
            <HeroScene copy={dictionary.home.heroScene} />
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow={dictionary.home.about.eyebrow}
              title={dictionary.home.about.title}
              description={companyProfile.description}
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            <Reveal delay={0.06} className="surface pixel-corner p-6">
              <p className="section-kicker text-[0.58rem]">
                {dictionary.home.about.missionLabel}
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                {companyProfile.mission}
              </p>
            </Reveal>

            <Reveal delay={0.12} className="surface pixel-corner p-6">
              <p className="section-kicker text-[0.58rem]">
                {dictionary.home.about.publicMaterialLabel}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {companyProfile.disclosure}
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="neo-microcopy">{dictionary.home.about.sitePolicyLabel}</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {dictionary.home.about.sitePolicyText}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-24">
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
              <Reveal
                key={pillar.title}
                delay={0.06 * index}
                className="surface pixel-corner p-6 md:p-7"
              >
                <p className="font-pixel text-[0.68rem] uppercase tracking-[0.18em] text-accent">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {pillar.description}
                </p>
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
              <Link href="/projects" className="button-secondary">
                {dictionary.home.projects.cta}
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={0.06 * index}>
                <ProjectCard project={project} copy={dictionary.common} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-24">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow={dictionary.home.team.eyebrow}
                title={dictionary.home.team.title}
                description={dictionary.home.team.description}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <Link href="/team" className="button-secondary">
                {dictionary.home.team.cta}
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
        eyebrow={dictionary.home.finalCta.eyebrow}
        title={dictionary.home.finalCta.title}
        description={dictionary.home.finalCta.description}
        primaryLabel={dictionary.home.finalCta.primaryLabel}
        primaryHref="/contact"
        secondaryLabel={dictionary.home.finalCta.secondaryLabel}
        secondaryHref="/about"
      />
    </>
  );
}
