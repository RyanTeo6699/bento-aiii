import type { CoreRole } from "@/lib/site-data";

type TeamCardProps = {
  role: CoreRole;
};

export function TeamCard({ role }: TeamCardProps) {
  return (
    <article className="surface pixel-corner flex h-full flex-col p-6">
      <div className="space-y-3">
        <p className="section-kicker text-[0.58rem]">{role.label}</p>
        <h3 className="text-2xl font-semibold text-white">{role.title}</h3>
        <p className="text-sm leading-7 text-slate-300">{role.summary}</p>
      </div>

      <div className="mt-6 border-t border-white/10 pt-5">
        <p className="neo-microcopy">Primary focus</p>
        <p className="mt-2 text-sm leading-7 text-slate-400">{role.focus}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {role.responsibilities.map((item) => (
          <span key={item} className="signal-chip">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-8">
        <p className="text-sm leading-7 text-slate-500">{role.note}</p>
      </div>
    </article>
  );
}
