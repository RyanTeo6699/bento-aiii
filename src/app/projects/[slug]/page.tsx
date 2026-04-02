import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/project-card";
import { StatusBadge } from "@/components/status-badge";
import { projects } from "@/lib/site-data";

type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export function generateMetadata({ params }: ProjectDetailPageProps): Metadata {
  const project = projects.find((entry) => entry.slug === params.slug);

  if (!project) {
    return {
      title: "Project not found"
    };
  }

  return {
    title: project.name,
    description: project.description
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((entry) => entry.slug === params.slug);

  if (!project) {
    notFound();
  }

  const related = projects
    .filter((entry) => entry.slug !== project.slug)
    .slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(46,232,255,0.16),transparent_24%),radial-gradient(circle_at_86%_18%,rgba(139,96,255,0.12),transparent_20%)]" />
        <div className="shell relative pb-16 pt-8">
          <Link
            href="/projects"
            className="section-kicker inline-flex items-center gap-2 text-accent/90 hover:text-accent"
          >
            Back to projects
          </Link>

          <Reveal className="mt-8 max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={project.status} />
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
            <span className="section-kicker">Outcome</span>
            <p className="mt-4 text-lg leading-8 text-slate-200">{project.outcome}</p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="neo-microcopy">Stage</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {project.detail.stage}
              </p>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="neo-microcopy">Current focus</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {project.detail.currentFocus}
              </p>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="neo-microcopy">Disclosure</p>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                {project.disclosure}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.05} className="surface pixel-corner p-8">
              <span className="section-kicker">Problem</span>
              <p className="mt-4 text-base leading-8 text-slate-300">
                {project.detail.problem}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="surface pixel-corner p-8">
              <span className="section-kicker">System</span>
              <p className="mt-4 text-base leading-8 text-slate-300">
                {project.detail.system}
              </p>
            </Reveal>

            <Reveal delay={0.15} className="surface pixel-corner p-8">
              <span className="section-kicker">Architecture</span>
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
            <span className="section-kicker">Related work</span>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              More Bento AIII project directions
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {related.map((entry, index) => (
              <Reveal key={entry.slug} delay={0.06 * index}>
                <ProjectCard project={entry} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        eyebrow="Next step"
        title="Need a system with this kind of structure?"
        description="Bento AIII can shape the interface, workflow, and system layer together instead of treating them as separate tracks."
        primaryLabel="Talk about your workflow"
        primaryHref="/contact"
        secondaryLabel="See all projects"
        secondaryHref="/projects"
      />
    </>
  );
}
