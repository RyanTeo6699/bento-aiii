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
    <article className="surface pixel-corner flex h-full min-h-[25rem] flex-col p-6">
      <div className="flex min-h-[4.75rem] items-start gap-4">
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-[1rem] border border-white/10 bg-white/[0.04] font-pixel text-sm uppercase tracking-[0.16em] text-white">
          {getInitials(member.name)}
        </div>

        <div className="min-w-0 space-y-2">
          <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
          <p className="min-h-[2.4rem] font-pixel text-[0.68rem] uppercase tracking-[0.18em] text-accent">
            {member.role}
          </p>
        </div>
      </div>

      <p className="mt-6 min-h-[9rem] flex-1 text-sm leading-7 text-slate-300">
        {member.bio}
      </p>

      <div className="mt-6 flex min-h-[4.5rem] flex-wrap content-start gap-2">
        {member.tags.map((item) => (
          <span key={item} className="signal-chip">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
