import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  compact?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  compact = false,
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-4xl flex-col",
        compact ? "gap-4" : "gap-5",
        align === "center" ? "mx-auto items-center text-center" : "items-start",
        className
      )}
    >
      <span
        className={cn(
          "section-kicker",
          align === "center" ? "sticker-rotate-1" : "sticker-rotate-3"
        )}
      >
        {eyebrow}
      </span>
      <div className={cn(compact ? "space-y-3" : "space-y-4", align === "center" && "items-center")}>
        <h2
          className={cn(
            "max-w-4xl text-[rgb(var(--ink))]",
            compact
              ? "text-[2rem] font-bold leading-[1] tracking-[-0.055em] md:text-[2.75rem]"
              : "text-4xl font-black leading-[0.96] tracking-[-0.05em] md:text-5xl"
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "max-w-3xl text-[rgb(var(--ink-soft))]",
            compact ? "text-[0.98rem] leading-7 md:text-[1.02rem] md:leading-8" : "text-base leading-8 md:text-lg"
          )}
        >
          {description}
        </p>
      </div>
      <span className="hud-line max-w-xl" />
    </div>
  );
}
