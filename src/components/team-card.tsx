import type { TeamMember } from "@/lib/team-data";

type TeamCardProps = {
  member: TeamMember;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="pack-card flex h-full min-h-[25rem] flex-col p-6 md:p-7">
      <div className="flex min-h-[5rem] items-start gap-4">
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-[1.1rem] border-[3px] border-[rgb(var(--ink))] bg-[rgb(var(--secondary-container))] font-[var(--font-label)] text-sm font-extrabold uppercase tracking-[0.16em] text-[rgb(var(--ink))] shadow-[4px_4px_0_0_rgb(var(--shadow))]">
          {getInitials(member.name)}
        </div>

        <div className="min-w-0 space-y-3">
          <h3 className="text-3xl font-black leading-[0.96] tracking-[-0.05em] text-[rgb(var(--ink))]">
            {member.name}
          </h3>
          <p className="inline-flex rounded-full border-[3px] border-[rgb(var(--ink))] bg-[rgb(var(--tertiary-container))] px-3 py-2 font-[var(--font-label)] text-[0.72rem] font-extrabold uppercase tracking-[0.12em] text-[rgb(var(--ink))] shadow-[3px_3px_0_0_rgb(var(--shadow))]">
            {member.role}
          </p>
        </div>
      </div>

      <p className="mt-6 min-h-[9rem] flex-1 text-sm leading-7 text-[rgb(var(--ink-soft))]">
        {member.bio}
      </p>

      <div className="mt-6 flex min-h-[4.5rem] flex-wrap content-start gap-2">
        {member.tags.map((item) => (
          <span key={item} className="project-chip">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
