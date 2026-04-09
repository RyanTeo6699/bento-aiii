import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-4xl flex-col gap-5",
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
      <div className={cn("space-y-4", align === "center" && "items-center")}>
        <h2 className="max-w-4xl text-4xl font-black leading-[0.96] tracking-[-0.05em] text-[rgb(var(--ink))] md:text-5xl">
          {title}
        </h2>
        <p className="max-w-3xl text-base leading-8 text-[rgb(var(--ink-soft))] md:text-lg">
          {description}
        </p>
      </div>
      <span className="hud-line max-w-xl" />
    </div>
  );
}
