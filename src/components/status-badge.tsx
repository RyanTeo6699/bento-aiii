import type { ProjectStatus } from "@/lib/project-commercial";
import { cn } from "@/lib/utils";

const statusStyles: Record<ProjectStatus, string> = {
  Live: "bg-[rgb(196,243,212)] text-[rgb(var(--ink))]",
  Prototype: "bg-[rgb(var(--secondary-container))] text-[rgb(var(--ink))]",
  Internal: "bg-[rgb(var(--primary-container))] text-[rgb(var(--ink))]",
  Concept: "bg-[rgb(var(--tertiary-container))] text-[rgb(var(--ink))]"
};

export function StatusBadge({
  status,
  label
}: {
  status: ProjectStatus;
  label?: string;
}) {
  return (
    <span
      className={cn(
        "sticker-badge sticker-rotate-3",
        statusStyles[status]
      )}
    >
      {label ?? status}
    </span>
  );
}
