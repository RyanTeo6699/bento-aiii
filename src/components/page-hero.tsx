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
    <section className="pt-32 md:pt-36">
      <div className="shell">
        <div className="boxed-section px-6 py-10 md:px-10 md:py-12">
          <Reveal className="max-w-5xl space-y-6">
            <span className="section-kicker sticker-rotate-1">{eyebrow}</span>
            <h1 className="headline-page max-w-5xl">{title}</h1>
            <p className="max-w-3xl text-lg leading-8 text-[rgb(var(--ink-soft))]">
              {description}
            </p>
          </Reveal>

          {metrics ? (
            <Reveal delay={0.08} className="mt-10 grid gap-4 md:grid-cols-3">
              {metrics.map((item, index) => (
                <div
                  key={item.label}
                  className={`surface p-5 ${index === 1 ? "sticker-rotate-1" : index === 2 ? "sticker-rotate-3" : ""}`}
                >
                  <p className="neo-microcopy">{item.label}</p>
                  <p className="mt-3 text-lg font-extrabold text-[rgb(var(--ink))]">
                    {item.value}
                  </p>
                </div>
              ))}
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
