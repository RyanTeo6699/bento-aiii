import Link from "next/link";

import { StatusBadge } from "@/components/status-badge";
import type { Locale } from "@/lib/i18n";
import { buildLocalizedPath } from "@/lib/locale-routing";
import type { CommercialProjectView } from "@/lib/project-commercial";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  locale: Locale;
  project: CommercialProjectView;
  copy: {
    viewDetail: string;
    learnMore?: string;
    idealUsers: string;
    deliveryScope: string;
    keyOutcome: string;
    valueCase: string;
    platformLabel?: string;
    statusLabels: Record<string, string>;
  };
  variant?: "default" | "featured" | "emerging";
};

function getRotationClass(slug: string, variant: ProjectCardProps["variant"]) {
  if (variant !== "featured") {
    return "";
  }

  if (slug === "shiok") {
    return "sticker-rotate-1";
  }

  if (slug === "you-wife-list") {
    return "sticker-rotate-3";
  }

  return "sticker-rotate-2";
}

export function ProjectCard({
  locale,
  project,
  copy,
  variant = "default"
}: ProjectCardProps) {
  const actionLabel = variant === "emerging" ? copy.learnMore ?? copy.viewDetail : copy.viewDetail;
  const isFeatured = variant === "featured";
  const isEmerging = variant === "emerging";

  return (
    <article
      className={cn(
        "pack-card paper-texture flex h-full flex-col",
        getRotationClass(project.slug, variant),
        isFeatured ? "p-8 md:p-9" : isEmerging ? "p-5 md:p-6" : "p-6"
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <StatusBadge
          status={project.status}
          label={project.statusLabel ?? copy.statusLabels[project.status]}
        />
        <span className="project-chip bg-[rgb(var(--surface-container-high))]">
          {project.platform}
        </span>
      </div>

      <div className={cn("space-y-3", isEmerging ? "mt-5" : "mt-6")}>
        <p className="label-caps">{copy.platformLabel ?? project.platform}</p>
        <h3
          className={cn(
            "font-black leading-[0.96] tracking-[-0.05em] text-[rgb(var(--ink))]",
            isFeatured ? "text-[2.15rem]" : "text-3xl"
          )}
        >
          {project.name}
        </h3>
        <p className="text-base leading-7 text-[rgb(var(--ink))]">{project.positioning}</p>
        <p className="text-sm leading-7 text-[rgb(var(--ink-soft))]">{project.summary}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="project-chip">
            {tag}
          </span>
        ))}
      </div>

      {isEmerging ? (
        <div className="mt-6 rounded-[1.35rem] border-[3px] border-[rgb(var(--ink))] bg-white/80 p-4 shadow-[4px_4px_0_0_rgb(var(--shadow))]">
          <p className="text-sm leading-7 text-[rgb(var(--ink-muted))]">{project.disclosure}</p>
        </div>
      ) : (
        <div className="mt-6 space-y-4 border-t-[3px] border-dashed border-[rgb(var(--outline))] pt-5">
          <div>
            <p className="neo-microcopy">{copy.valueCase}</p>
            <p className="mt-2 text-sm leading-7 text-[rgb(var(--ink-soft))]">
              {project.commercial.valueCase}
            </p>
          </div>

          <div className="border-t-[3px] border-dashed border-[rgb(var(--outline))] pt-4">
            <p className="neo-microcopy">{copy.keyOutcome}</p>
            <p className="mt-2 text-sm leading-7 text-[rgb(var(--ink-muted))]">{project.outcome}</p>
          </div>

          {isFeatured ? (
            <div className="border-t-[3px] border-dashed border-[rgb(var(--outline))] pt-4">
              <p className="neo-microcopy">{copy.deliveryScope}</p>
              <p className="mt-2 text-sm leading-7 text-[rgb(var(--ink-muted))]">
                {project.commercial.deliveryScope}
              </p>
            </div>
          ) : null}
        </div>
      )}

      <div className="mt-auto pt-8">
        <Link
          href={buildLocalizedPath(locale, `/projects/${project.slug}`)}
          className={isFeatured ? "button-primary" : "button-secondary"}
        >
          {actionLabel}
        </Link>
      </div>
    </article>
  );
}
