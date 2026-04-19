import type { Metadata } from "next";

import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/project-card";
import { getSharedCtas } from "@/lib/cta";
import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import { getProjectPresentationCopy, getProjects } from "@/lib/project-commercial";

export function generateMetadata(): Metadata {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const projectCopy = getProjectPresentationCopy(locale);

  return createPageMetadata({
    locale,
    title: dictionary.nav.find((item) => item.href === "/projects")?.label ?? "Projects",
    description: projectCopy.heroDescription,
    path: "/projects"
  });
}

export default function ProjectsPage() {
  const locale = getCurrentLocale();
  const sharedCtas = getSharedCtas(locale);
  const projectCopy = getProjectPresentationCopy(locale);
  const projects = getProjects(locale);

  return (
    <>
      <section className="site-hero-section">
        <div className="shell">
          <div className="boxed-section site-hero-frame">
            <Reveal className="max-w-4xl space-y-6">
              <span className="section-kicker sticker-rotate-1">{projectCopy.heroEyebrow}</span>
              <h1 className="headline-page max-w-4xl">{projectCopy.heroTitle}</h1>
              <p className="max-w-3xl text-lg leading-8 text-[rgb(var(--ink-soft))]">
                {projectCopy.heroDescription}
              </p>
              <div className="max-w-2xl space-y-2 border-l border-[rgb(var(--outline)/0.72)] pl-4">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
                  {projectCopy.sharedLogicEyebrow}
                </p>
                <p className="text-[1rem] font-medium leading-7 tracking-[-0.02em] text-[rgb(var(--ink))]">
                  {projectCopy.sharedLogicTitle}
                </p>
                <p className="text-sm leading-7 text-[rgb(var(--ink-muted))]">
                  {projectCopy.sharedLogicDescription}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="mt-10 border-t border-[rgb(var(--outline)/0.72)] pt-6">
              <div className="grid gap-6 md:grid-cols-3">
                {projectCopy.sharedLogic.map((item, index) => (
                  <div
                    key={item.title}
                    className={`${index > 0 ? "md:border-l md:border-[rgb(var(--outline)/0.6)] md:pl-6" : ""}`}
                  >
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
                      {item.title}
                    </p>
                    <p className="mt-3 max-w-[22rem] text-[0.95rem] leading-7 text-[rgb(var(--ink-soft))]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="shell">
          <Reveal className="max-w-4xl space-y-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
              {projectCopy.portfolioEyebrow}
            </p>
            <h2 className="max-w-4xl text-[2rem] font-semibold leading-[0.98] tracking-[-0.055em] text-[rgb(var(--ink))] md:text-[2.75rem]">
              {projectCopy.portfolioTitle}
            </h2>
            <p className="max-w-3xl text-[1rem] leading-8 text-[rgb(var(--ink-soft))]">
              {projectCopy.portfolioDescription}
            </p>
          </Reveal>

          <div className="mt-12 divide-y divide-[rgb(var(--outline)/0.72)] border-y border-[rgb(var(--outline)/0.72)]">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={0.06 * index}>
                <ProjectCard
                  locale={locale}
                  project={project}
                  copy={{
                    stageLabel: projectCopy.stageLabel,
                    viewProject: projectCopy.viewProject
                  }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        locale={locale}
        eyebrow={projectCopy.indexFinalEyebrow}
        title={projectCopy.indexFinalTitle}
        description={projectCopy.indexFinalDescription}
        primaryLabel={sharedCtas.startConversation}
        primaryHref="/contact"
        secondaryLabel={sharedCtas.aboutCompany}
        secondaryHref="/about"
      />
    </>
  );
}
