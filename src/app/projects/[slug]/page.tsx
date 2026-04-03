import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/project-card";
import { StatusBadge } from "@/components/status-badge";
import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import { getProjectSlugs, getProjects } from "@/lib/site-data";

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
  const project = getProjects(locale).find((entry) => entry.slug === params.slug);

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
    description: project.summary,
    path: `/projects/${params.slug}`
  });
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const projects = getProjects(locale);
  const project = projects.find((entry) => entry.slug === params.slug);

  if (!project) {
    notFound();
  }

  const related = projects.filter((entry) => entry.slug !== project.slug).slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(46,232,255,0.16),transparent_24%),radial-gradient(circle_at_86%_18%,rgba(139,96,255,0.12),transparent_20%)]" />
        <div className="shell relative pb-16 pt-8">
          <Link
            href="/projects"
            className="section-kicker inline-flex items-center gap-2 text-accent hover:opacity-100"
          >
            {dictionary.common.backToProjects}
          </Link>

          <Reveal className="mt-8 max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge
                status={project.status}
                label={dictionary.common.statusLabels[project.status]}
              />
              <span className="neo-microcopy">{project.track}</span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              {project.name}
            </h1>
            <p className="text-lg leading-8 text-slate-300">{project.summary}</p>
            <p className="max-w-3xl text-base leading-8 text-slate-400">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[0.85rem] border border-white/10 px-3 py-1 text-xs text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="surface pixel-corner p-8">
            <span className="section-kicker">{dictionary.common.outcome}</span>
            <p className="mt-4 text-lg leading-8 text-slate-200">{project.outcome}</p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="neo-microcopy">{dictionary.common.stage}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {project.detail.stage}
              </p>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="neo-microcopy">{dictionary.common.currentFocus}</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {project.detail.currentFocus}
              </p>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="neo-microcopy">{dictionary.common.disclosure}</p>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                {project.disclosure}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.05} className="surface pixel-corner p-8">
              <span className="section-kicker">{dictionary.common.problem}</span>
              <p className="mt-4 text-base leading-8 text-slate-300">
                {project.detail.problem}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="surface pixel-corner p-8">
              <span className="section-kicker">{dictionary.common.system}</span>
              <p className="mt-4 text-base leading-8 text-slate-300">
                {project.detail.system}
              </p>
            </Reveal>

            <Reveal delay={0.15} className="surface pixel-corner p-8">
              <span className="section-kicker">{dictionary.common.architecture}</span>
              <div className="mt-5 space-y-4">
                {project.detail.architecture.map((item) => (
                  <div
                    key={item}
                    className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                  >
                    <p className="text-sm leading-7 text-slate-400">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-24">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <span className="section-kicker">{dictionary.common.relatedWork}</span>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              {dictionary.common.moreProjectDirections}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {related.map((entry, index) => (
              <Reveal key={entry.slug} delay={0.06 * index}>
                <ProjectCard project={entry} copy={dictionary.common} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        eyebrow={dictionary.common.nextStep}
        title={dictionary.projects.detail.finalCta.title}
        description={dictionary.projects.detail.finalCta.description}
        primaryLabel={dictionary.projects.detail.finalCta.primaryLabel}
        primaryHref="/contact"
        secondaryLabel={dictionary.projects.detail.finalCta.secondaryLabel}
        secondaryHref="/projects"
      />
    </>
  );
}
