import Link from "next/link";

import { StatusBadge } from "@/components/status-badge";
import type { Locale } from "@/lib/i18n";
import { buildLocalizedPath } from "@/lib/locale-routing";
import type { CommercialProjectView } from "@/lib/project-commercial";

type ProjectCardProps = {
  locale: Locale;
  project: CommercialProjectView;
  copy: {
    stageLabel: string;
    viewProject: string;
  };
};

export function ProjectCard({ locale, project, copy }: ProjectCardProps) {
  return (
    <article className="py-8 md:py-9 lg:grid lg:grid-cols-[minmax(0,1fr)_14.25rem] lg:items-start lg:gap-10">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} label={project.statusLabel} />
          <span className="project-chip bg-[rgb(var(--surface-container-high))] text-[rgb(var(--ink-soft))]">
            {project.category}
          </span>
        </div>

        <div className="mt-5 max-w-[42rem] space-y-3.5">
          <div className="space-y-1.5">
            {project.alternateName ? (
              <p className="text-[0.78rem] font-medium tracking-[0.08em] text-[rgb(var(--ink-muted))]">
                {project.alternateName}
              </p>
            ) : null}
            <h3 className="text-[1.75rem] font-semibold leading-[0.98] tracking-[-0.055em] text-[rgb(var(--ink))] md:text-[2.1rem]">
              {project.name}
            </h3>
          </div>
          <p className="max-w-[38rem] text-[0.98rem] leading-7 text-[rgb(var(--ink-soft))]">
            {project.definition}
          </p>
        </div>
      </div>

      <div className="mt-7 border-t border-[rgb(var(--outline)/0.66)] pt-5 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
        <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
          {copy.stageLabel}
        </p>
        <p className="mt-2.5 text-[0.92rem] leading-7 text-[rgb(var(--ink))]">{project.currentStatus.stage}</p>

        <div className="mt-6">
          <Link
            href={buildLocalizedPath(locale, `/projects/${project.slug}`)}
            className="button-secondary w-full justify-center text-center lg:w-auto"
          >
            {copy.viewProject}
          </Link>
        </div>
      </div>
    </article>
  );
}
