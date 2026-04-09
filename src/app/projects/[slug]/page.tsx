import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/project-card";
import { StatusBadge } from "@/components/status-badge";
import { getSharedCtas } from "@/lib/cta";
import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import { buildLocalizedPath } from "@/lib/locale-routing";
import { createPageMetadata } from "@/lib/metadata";
import {
  getProjectBySlug,
  getProjectPresentationCopy,
  getProjectSlugs,
  getProjects
} from "@/lib/project-commercial";

type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({
    slug
  }));
}

export function generateMetadata({ params }: ProjectDetailPageProps): Metadata {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const project = getProjectBySlug(locale, params.slug);

  if (!project) {
    return createPageMetadata({
      locale,
      title: dictionary.notFound.title,
      description: dictionary.notFound.description,
      path: `/projects/${params.slug}`
    });
  }

  return createPageMetadata({
    locale,
    title: project.name,
    description: project.positioning,
    path: `/projects/${params.slug}`
  });
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const sharedCtas = getSharedCtas(locale);
  const projectCopy = getProjectPresentationCopy(locale);
  const projects = getProjects(locale);
  const project = getProjectBySlug(locale, params.slug);

  if (!project) {
    notFound();
  }

  const related = projects.filter((entry) => entry.slug !== project.slug).slice(0, 2);

  return (
    <>
      <section className="pt-32 md:pt-36">
        <div className="shell">
          <div className="boxed-section px-6 py-8 md:px-10 md:py-10">
            <Link
              href={buildLocalizedPath(locale, "/projects")}
              className="button-secondary inline-flex w-fit"
            >
              {dictionary.common.backToProjects}
            </Link>

            <Reveal className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <StatusBadge status={project.status} label={project.statusLabel} />
                  <span className="project-chip bg-[rgb(var(--surface-container-high))]">
                    {project.platform}
                  </span>
                </div>

                <h1 className="headline-page max-w-4xl">{project.name}</h1>
                <p className="max-w-3xl text-lg leading-8 text-[rgb(var(--ink))]">
                  {project.positioning}
                </p>
                <p className="max-w-3xl text-base leading-8 text-[rgb(var(--ink-soft))]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={tag}
                      className={`project-chip ${
                        index === 0
                          ? "bg-[rgb(var(--secondary-container))]"
                          : index === 1
                            ? "bg-[rgb(var(--tertiary-container))]"
                            : ""
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="surface p-6">
                <p className="neo-microcopy">{projectCopy.valueCase}</p>
                <p className="mt-3 text-sm leading-7 text-[rgb(var(--ink-soft))]">
                  {project.commercial.valueCase}
                </p>

                <div className="mt-6 border-t-[3px] border-dashed border-[rgb(var(--outline))] pt-5">
                  <p className="neo-microcopy">{projectCopy.deliveryScope}</p>
                  <p className="mt-3 text-sm leading-7 text-[rgb(var(--ink-muted))]">
                    {project.commercial.deliveryScope}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <Reveal className="surface p-8">
            <span className="section-kicker sticker-rotate-1">{projectCopy.whatItDoes}</span>
            <div className="mt-5 space-y-4">
              {project.detail.whatItDoes.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-[rgb(var(--ink-soft))]">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06} className="surface p-8">
            <span className="section-kicker sticker-rotate-3">{projectCopy.whyItMatters}</span>
            <p className="mt-5 text-base leading-8 text-[rgb(var(--ink-soft))]">
              {project.detail.whyItMatters}
            </p>

            <div className="mt-8 border-t-[3px] border-dashed border-[rgb(var(--outline))] pt-6">
              <p className="neo-microcopy">{projectCopy.platformLabel}</p>
              <p className="mt-3 text-sm leading-7 text-[rgb(var(--ink))]">{project.platform}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <SectionHeaderStub label={projectCopy.systemHighlights} title={project.name} />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {project.detail.highlights.map((item, index) => (
              <Reveal key={item.title} delay={0.05 * index}>
                <div className={`pack-card p-6 ${index % 2 === 0 ? "sticker-rotate-1" : ""}`}>
                  <h3 className="text-3xl font-black leading-[0.98] tracking-[-0.05em] text-[rgb(var(--ink))]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[rgb(var(--ink-soft))]">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <SectionHeaderStub label={projectCopy.howItWorks} title={project.positioning} />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {project.detail.flowSteps.map((step, index) => (
              <Reveal key={step.title} delay={0.05 * index}>
                <div className="surface p-6">
                  <p className="sticker-badge bg-[rgb(var(--tertiary-container))] text-[rgb(var(--ink))]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-5 text-3xl font-black leading-[0.98] tracking-[-0.05em] text-[rgb(var(--ink))]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[rgb(var(--ink-soft))]">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-6 lg:grid-cols-2">
          <Reveal className="surface p-8">
            <span className="section-kicker sticker-rotate-1">{projectCopy.systemLayer}</span>
            <p className="mt-5 text-base leading-8 text-[rgb(var(--ink-soft))]">
              {project.detail.systemLayer}
            </p>

            <div className="mt-8 border-t-[3px] border-dashed border-[rgb(var(--outline))] pt-6">
              <p className="neo-microcopy">{projectCopy.deliveryScope}</p>
              <p className="mt-3 text-sm leading-7 text-[rgb(var(--ink-muted))]">
                {project.commercial.deliveryScope}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="surface p-8">
            <span className="section-kicker sticker-rotate-3">{projectCopy.statusNext}</span>
            <p className="mt-5 text-base leading-8 text-[rgb(var(--ink-soft))]">{project.detail.stage}</p>

            <div className="mt-8 border-t-[3px] border-dashed border-[rgb(var(--outline))] pt-6">
              <p className="neo-microcopy">{dictionary.common.nextStep}</p>
              <p className="mt-3 text-sm leading-7 text-[rgb(var(--ink-soft))]">
                {project.detail.nextStep}
              </p>
            </div>

            <div className="mt-8 border-t-[3px] border-dashed border-[rgb(var(--outline))] pt-6">
              <p className="neo-microcopy">{dictionary.common.disclosure}</p>
              <p className="mt-3 text-sm leading-7 text-[rgb(var(--ink-muted))]">{project.disclosure}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <SectionHeaderStub label={dictionary.common.relatedWork} title={projectCopy.relatedTitle} />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {related.map((entry, index) => (
              <Reveal key={entry.slug} delay={0.06 * index}>
                <ProjectCard
                  locale={locale}
                  project={entry}
                  variant={entry.comingSoon ? "emerging" : "default"}
                  copy={{
                    viewDetail: projectCopy.viewProject,
                    learnMore: projectCopy.learnMore,
                    idealUsers: projectCopy.idealUsers,
                    deliveryScope: projectCopy.deliveryScope,
                    keyOutcome: projectCopy.keyOutcome,
                    valueCase: projectCopy.valueCase,
                    platformLabel: projectCopy.platformLabel,
                    statusLabels: dictionary.common.statusLabels
                  }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        locale={locale}
        eyebrow={dictionary.common.nextStep}
        title={dictionary.projects.detail.finalCta.title}
        description={dictionary.projects.detail.finalCta.description}
        primaryLabel={sharedCtas.startConversation}
        primaryHref="/contact"
        secondaryLabel={sharedCtas.viewProjects}
        secondaryHref="/projects"
      />
    </>
  );
}

function SectionHeaderStub({ label, title }: { label: string; title: string }) {
  return (
    <>
      <span className="section-kicker sticker-rotate-1">{label}</span>
      <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.96] tracking-[-0.05em] text-[rgb(var(--ink))] md:text-5xl">
        {title}
      </h2>
    </>
  );
}
