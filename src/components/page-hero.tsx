import { Reveal } from "@/components/motion/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  metrics?: Array<{
    label: string;
    value: string;
  }>;
};

export function PageHero({
  eyebrow,
  title,
  description,
  metrics
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(46,232,255,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(139,96,255,0.12),transparent_22%)]" />
      <div className="shell relative pb-16 pt-10">
        <Reveal className="max-w-4xl space-y-5">
          <div className="flex items-center gap-3">
            <span className="section-kicker">{eyebrow}</span>
            <span className="hud-line max-w-xs" />
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            {description}
          </p>
        </Reveal>

        {metrics ? (
          <Reveal delay={0.08} className="mt-12 grid gap-4 md:grid-cols-3">
            {metrics.map((item) => (
              <div key={item.label} className="surface pixel-corner p-5">
                <p className="neo-microcopy">
                  {item.label}
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
