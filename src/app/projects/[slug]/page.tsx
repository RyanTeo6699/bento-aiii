import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { StatusBadge } from "@/components/status-badge";
import { getSharedCtas } from "@/lib/cta";
import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import { buildLocalizedPath } from "@/lib/locale-routing";
import { createPageMetadata } from "@/lib/metadata";
import {
  getProjectBySlug,
  getProjectPresentationCopy,
  getProjectSlugs
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
    description: project.definition,
    path: `/projects/${params.slug}`
  });
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const sharedCtas = getSharedCtas(locale);
  const projectCopy = getProjectPresentationCopy(locale);
  const project = getProjectBySlug(locale, params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="site-hero-section">
        <div className="shell">
          <div className="boxed-section site-hero-frame">
            <Link
              href={buildLocalizedPath(locale, "/projects")}
              className="button-secondary inline-flex w-fit"
            >
              {dictionary.common.backToProjects}
            </Link>

            <Reveal className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3">
                  <StatusBadge status={project.status} label={project.statusLabel} />
                  <span className="project-chip bg-[rgb(var(--surface-container-high))] text-[rgb(var(--ink-soft))]">
                    {project.category}
                  </span>
                </div>

                <div className="mt-6 space-y-5">
                  {project.alternateName ? (
                    <p className="text-[0.82rem] font-medium tracking-[0.08em] text-[rgb(var(--ink-muted))]">
                      {project.alternateName}
                    </p>
                  ) : null}
                  <h1 className="headline-page max-w-4xl">{project.name}</h1>
                  <p className="max-w-3xl text-lg leading-8 text-[rgb(var(--ink))]">
                    {project.definition}
                  </p>
                  <p className="max-w-3xl text-base leading-8 text-[rgb(var(--ink-soft))]">
                    {project.heroLead}
                  </p>
                </div>
              </div>

              <div className="surface p-6">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
                  {projectCopy.stageLabel}
                </p>
                <p className="mt-2.5 text-sm leading-7 text-[rgb(var(--ink))]">
                  {project.currentStatus.stage}
                </p>

                <div className="mt-6 border-t border-[rgb(var(--outline)/0.72)] pt-5">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
                    {projectCopy.publicDemoLabel}
                  </p>
                  <p className="mt-2.5 text-sm leading-7 text-[rgb(var(--ink-soft))]">
                    {project.visual.publicDemo}
                  </p>
                </div>

                {project.visual.projectLink ? (
                  <div className="mt-6 border-t border-[rgb(var(--outline)/0.72)] pt-5">
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
                      {projectCopy.projectLinkLabel}
                    </p>
                    <a
                      href={project.visual.projectLink.href}
                      className="mt-3 inline-flex text-sm font-medium leading-7 text-[rgb(var(--ink))] underline decoration-[rgb(var(--outline))] underline-offset-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.visual.projectLink.label}
                    </a>
                  </div>
                ) : null}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="site-section-tight">
        <div className="shell">
          <Reveal>
            <ProjectSectionIntro title={projectCopy.problemEyebrow} description={project.problem} />
          </Reveal>
        </div>
      </section>

      <section className="site-section-tight">
        <div className="shell">
          <Reveal>
            <ProjectSectionIntro title={projectCopy.whatItDoesEyebrow} description={project.whatItDoes} />
          </Reveal>
        </div>
      </section>

      <section className="site-section-tight">
        <div className="shell">
          <Reveal>
            <ProjectSectionIntro title={projectCopy.coreWorkflowEyebrow} />
          </Reveal>

          <div className="mt-8 grid gap-x-8 gap-y-6 md:grid-cols-2 xl:grid-cols-3">
            {project.coreWorkflow.map((step, index) => (
              <Reveal key={step} delay={0.05 * index}>
                <article className="border-t border-[rgb(var(--outline)/0.72)] pt-4">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
                    Step 0{index + 1}
                  </p>
                  <p className="mt-3 text-[0.96rem] leading-7 text-[rgb(var(--ink))]">{step}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section-tight">
        <div className="shell">
          <Reveal>
            <ProjectSectionIntro title={projectCopy.coreFeaturesEyebrow} />
          </Reveal>

          <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {project.coreFeatures.map((feature, index) => (
              <Reveal key={feature.title} delay={0.05 * index}>
                <article className="border-t border-[rgb(var(--outline)/0.72)] pt-4">
                  <h3 className="text-[1rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[rgb(var(--ink))]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[rgb(var(--ink-soft))]">
                    {feature.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section-tight">
        <div className="shell">
          <Reveal>
            <ProjectSectionIntro title={projectCopy.differentiationEyebrow} />
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            <Reveal>
              <div className="border-t border-[rgb(var(--outline)/0.72)] pt-4">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
                  Not trying to be
                </p>
                <div className="mt-4 space-y-3">
                  {project.differentiation.not.map((item) => (
                    <div
                      key={item}
                      className="border-t border-[rgb(var(--outline)/0.66)] pt-3 text-sm leading-7 text-[rgb(var(--ink-soft))] first:border-t-0 first:pt-0"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="border-t border-[rgb(var(--outline)/0.72)] pt-4">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
                  Value
                </p>
                <p className="mt-4 max-w-[42rem] text-[0.98rem] leading-8 text-[rgb(var(--ink-soft))]">
                  {project.differentiation.value}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="site-section-tight">
        <div className="shell">
          <Reveal>
            <ProjectSectionIntro
              title={projectCopy.bentoAngleEyebrow}
              description={project.bentoAngle.summary}
            />
          </Reveal>

          <div className="mt-8 grid gap-x-8 gap-y-6 md:grid-cols-3">
            {project.bentoAngle.layers.map((layer, index) => (
              <Reveal key={layer.title} delay={0.05 * index}>
                <div className="border-t border-[rgb(var(--outline)/0.72)] pt-4">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
                    {layer.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[rgb(var(--ink-soft))]">{layer.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-3xl text-base leading-8 text-[rgb(var(--ink-soft))]">
              {project.bentoAngle.conclusion}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="site-section-tight">
        <div className="shell">
          <Reveal>
            <ProjectSectionIntro
              title={projectCopy.currentStatusEyebrow}
              description={`${projectCopy.stageLabel}: ${project.currentStatus.stage}`}
            />
          </Reveal>

          <div className="mt-8 grid gap-10 border-t border-[rgb(var(--outline)/0.72)] pt-6 md:grid-cols-2">
            <Reveal delay={0.04}>
              <StatusList label={project.currentStatus.alreadyLabel} items={project.currentStatus.already} />
            </Reveal>
            <Reveal delay={0.08}>
              <StatusList label={project.currentStatus.nextLabel} items={project.currentStatus.next} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="shell">
          <Reveal>
            <ProjectSectionIntro title={projectCopy.visualDemoEyebrow} />
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <div className="border-t border-[rgb(var(--outline)/0.72)] pt-4">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
                  {projectCopy.availableMaterialsLabel}
                </p>
                <div className="mt-4 space-y-3">
                  {project.visual.availableMaterials.map((item) => (
                    <div
                      key={item}
                      className="border-t border-[rgb(var(--outline)/0.66)] pt-3 text-sm leading-7 text-[rgb(var(--ink-soft))] first:border-t-0 first:pt-0"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="border-t border-[rgb(var(--outline)/0.72)] pt-4">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
                  {projectCopy.publicDemoLabel}
                </p>
                <p className="mt-4 text-sm leading-7 text-[rgb(var(--ink-soft))]">
                  {project.visual.publicDemo}
                </p>

                {project.visual.projectLink ? (
                  <div className="mt-8 border-t border-[rgb(var(--outline)/0.66)] pt-4">
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
                      {projectCopy.projectLinkLabel}
                    </p>
                    <a
                      href={project.visual.projectLink.href}
                      className="mt-3 inline-flex text-sm font-medium leading-7 text-[rgb(var(--ink))] underline decoration-[rgb(var(--outline))] underline-offset-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.visual.projectLink.label}
                    </a>
                  </div>
                ) : null}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCta
        locale={locale}
        eyebrow={projectCopy.closingEyebrow}
        title={project.closingCta}
        description={projectCopy.closingDescription}
        primaryLabel={sharedCtas.startConversation}
        primaryHref="/contact"
        secondaryLabel={sharedCtas.viewProjects}
        secondaryHref="/projects"
      />
    </>
  );
}

function ProjectSectionIntro({
  title,
  description
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-4xl space-y-4">
      <h2 className="text-[1.9rem] font-semibold leading-[0.98] tracking-[-0.055em] text-[rgb(var(--ink))] md:text-[2.45rem]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-[0.98rem] leading-8 text-[rgb(var(--ink-soft))]">{description}</p>
      ) : null}
      <span className="block h-px max-w-xl bg-[rgb(var(--outline)/0.72)]" />
    </div>
  );
}

function StatusList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
        {label}
      </p>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="border-t border-[rgb(var(--outline)/0.66)] pt-3 text-sm leading-7 text-[rgb(var(--ink-soft))] first:border-t-0 first:pt-0"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
