"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { CSSProperties } from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type ArchitectureTone = "primary" | "secondary" | "tertiary";

type ArchitectureModule = {
  id: string;
  title: string;
  displayTitle: string;
  summary: string;
  bullets: string[];
  headline: string;
  descriptor: string;
  status: string;
  focus: string;
  flow: string;
  tone: ArchitectureTone;
};

type ArchitectureCore = {
  label: string;
  headline: string;
  summary: string;
  chips: string[];
  primaryActionLabel?: string;
  primaryActionHref?: string;
  secondaryActionLabel?: string;
  secondaryActionHref?: string;
  context: string;
};

type ArchitectureLabels = {
  activeModule: string;
  currentRole: string;
  executionPath: string;
  systemContext: string;
};

type ArchitectureNode = ArchitectureModule & {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  path: string;
  dotX: number;
  dotY: number;
  tilt: string;
};

const orbitLayout = [
  {
    top: "6%",
    left: "3%",
    path: "M500 380 C430 308 346 224 248 150",
    dotX: 248,
    dotY: 150,
    tilt: "-rotate-2"
  },
  {
    top: "6%",
    right: "3%",
    path: "M500 380 C570 308 654 224 752 150",
    dotX: 752,
    dotY: 150,
    tilt: "rotate-[1.5deg]"
  },
  {
    top: "31%",
    left: "0.5%",
    path: "M500 380 C408 366 304 352 190 336",
    dotX: 190,
    dotY: 336,
    tilt: "-rotate-1"
  },
  {
    top: "31%",
    right: "0.5%",
    path: "M500 380 C592 366 696 352 810 336",
    dotX: 810,
    dotY: 336,
    tilt: "rotate-2"
  },
  {
    bottom: "7%",
    left: "6%",
    path: "M500 380 C438 456 366 538 286 606",
    dotX: 286,
    dotY: 606,
    tilt: "rotate-1"
  },
  {
    bottom: "7%",
    right: "6%",
    path: "M500 380 C562 456 634 538 714 606",
    dotX: 714,
    dotY: 606,
    tilt: "-rotate-[1.5deg]"
  }
] as const;

const overlayGridStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(214, 208, 199, 0.75) 1px, transparent 1px), linear-gradient(90deg, rgba(214, 208, 199, 0.75) 1px, transparent 1px)",
  backgroundSize: "24px 24px",
  maskImage: "linear-gradient(180deg, rgba(255,255,255,0.84), transparent 92%)"
};

const toneClasses: Record<
  ArchitectureTone,
  {
    badge: string;
    dot: string;
    activeBorder: string;
    activeLabel: string;
    pathStroke: string;
  }
> = {
  primary: {
    badge: "border-slate-300 bg-slate-100 text-slate-700",
    dot: "bg-slate-600",
    activeBorder: "border-slate-400/90",
    activeLabel: "text-slate-700",
    pathStroke: "rgba(71, 85, 105, 0.68)"
  },
  secondary: {
    badge: "border-[#c9d2de] bg-[#eef2f7] text-[#556c85]",
    dot: "bg-[#607791]",
    activeBorder: "border-[#aebccc]",
    activeLabel: "text-[#556c85]",
    pathStroke: "rgba(96, 119, 145, 0.66)"
  },
  tertiary: {
    badge: "border-[#d9d1c3] bg-[#f4efe7] text-[#84725d]",
    dot: "bg-[#9a866d]",
    activeBorder: "border-[#cdbfaa]",
    activeLabel: "text-[#7e6d59]",
    pathStroke: "rgba(154, 134, 109, 0.62)"
  }
};

const actionClassName =
  "inline-flex min-h-10 items-center justify-center rounded-full border border-[rgb(var(--outline))] bg-[rgba(255,255,255,0.9)] px-4 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink))] transition hover:-translate-y-0.5 hover:border-[rgb(var(--outline-strong))] hover:shadow-[0_14px_28px_rgba(15,23,42,0.08)]";

const secondaryActionClassName =
  "inline-flex min-h-10 items-center justify-center rounded-full border border-[rgb(var(--outline)/0.82)] bg-[rgba(247,244,239,0.82)] px-4 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-soft))] transition hover:-translate-y-0.5 hover:border-[rgb(var(--outline-strong))] hover:text-[rgb(var(--ink))] hover:shadow-[0_14px_28px_rgba(15,23,42,0.08)]";

function buildArchitectureNode(module: ArchitectureModule, index: number): ArchitectureNode {
  return {
    ...module,
    ...orbitLayout[index]
  };
}

function OrbitNode({
  module,
  index,
  active,
  onSelect,
  compact = false
}: {
  module: ArchitectureNode;
  index: number;
  active: boolean;
  onSelect: () => void;
  compact?: boolean;
}) {
  const tone = toneClasses[module.tone];

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={cn(
        "w-full rounded-[1.15rem] border bg-[rgba(255,255,255,0.78)] text-left shadow-[0_10px_22px_rgba(15,23,42,0.05)] backdrop-blur transition",
        compact ? "p-3.5" : "p-3.5 xl:p-4",
        active
          ? cn(tone.activeBorder, "opacity-100 shadow-[0_18px_36px_rgba(15,23,42,0.1)]")
          : "border-[rgb(var(--outline)/0.72)] opacity-55 hover:opacity-90 hover:shadow-[0_14px_28px_rgba(15,23,42,0.07)]"
      )}
      animate={{
        y: active ? [0, -1.5, 0] : [0, -0.5, 0],
        scale: active ? 1.01 : 0.975,
        opacity: active ? 1 : 0.58
      }}
      whileHover={{ y: active ? -1.5 : -1, scale: active ? 1.01 : 0.985, opacity: 0.94 }}
      transition={{
        duration: active ? 6.8 : 8.2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.16
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className={cn("text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]", active && tone.activeLabel)}>
            {module.title}
          </p>
          <p className="mt-2 text-[0.86rem] font-semibold leading-5 tracking-[-0.03em] text-[rgb(var(--ink))]">
            {module.displayTitle}
          </p>
        </div>
        <span className={cn("mt-1 inline-flex h-2.5 w-2.5 rounded-full", active ? tone.dot : "bg-[rgba(148,163,184,0.8)]")} />
      </div>
    </motion.button>
  );
}

type HeroSceneProps = {
  modules: ArchitectureModule[];
  core: ArchitectureCore;
  labels: ArchitectureLabels;
};

export function HeroScene({ modules, core, labels }: HeroSceneProps) {
  const architectureNodes = modules.slice(0, 6).map(buildArchitectureNode);
  const [activeId, setActiveId] = useState(architectureNodes[0]?.id ?? "");
  const rawActiveIndex = architectureNodes.findIndex((module) => module.id === activeId);
  const activeIndex = rawActiveIndex >= 0 ? rawActiveIndex : 0;
  const activeModule = architectureNodes[activeIndex] ?? architectureNodes[0];

  if (!activeModule) {
    return null;
  }

  const activeTone = toneClasses[activeModule.tone];

  const ActiveModuleSurface = (
    <>
      <div className="grid gap-3.5">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--ink-muted))]">
          {core.label}
        </p>
        <h3 className="max-w-[14ch] text-[1.34rem] font-semibold leading-[1.05] tracking-[-0.05em] text-[rgb(var(--ink))] xl:text-[1.44rem]">
          {core.headline}
        </h3>
        <p className="max-w-[31ch] text-[0.88rem] leading-6 text-[rgb(var(--ink-soft))]">
          {core.summary}
        </p>

        <div className="flex flex-wrap gap-2.5">
          {core.chips.slice(0, 3).map((chip) => (
            <span
              key={chip}
              className={cn(
                "inline-flex items-center justify-center rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em]",
                activeTone.badge
              )}
            >
              {chip}
            </span>
          ))}
        </div>

        {(core.primaryActionLabel && core.primaryActionHref) || (core.secondaryActionLabel && core.secondaryActionHref) ? (
          <div className="flex flex-wrap gap-2.5">
            {core.primaryActionLabel && core.primaryActionHref ? (
              <Link href={core.primaryActionHref} className={actionClassName}>
                {core.primaryActionLabel}
              </Link>
            ) : null}
            {core.secondaryActionLabel && core.secondaryActionHref ? (
              <Link href={core.secondaryActionHref} className={secondaryActionClassName}>
                {core.secondaryActionLabel}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="my-5 h-px bg-[linear-gradient(90deg,rgba(31,36,48,0.18),rgba(109,120,141,0.12),transparent)]" />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeModule.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="rounded-[1.4rem] border border-[rgb(var(--outline)/0.78)] bg-[rgba(255,255,255,0.72)] p-4 shadow-[0_18px_36px_rgba(15,23,42,0.07)]"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
                {labels.activeModule}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span
                  className={cn(
                    "inline-flex items-center justify-center rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em]",
                    activeTone.badge
                  )}
                >
                  {activeModule.displayTitle}
                </span>
                <span className="inline-flex min-w-[2.15rem] items-center justify-center rounded-full border border-[rgb(var(--outline)/0.78)] bg-[rgb(var(--surface-lowest))] px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[rgb(var(--ink-muted))]">
                  0{activeIndex + 1}
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--outline)/0.78)] bg-[rgba(255,255,255,0.86)] px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-[rgb(var(--ink-soft))]">
              <span className={cn("inline-flex h-2.5 w-2.5 rounded-full", activeTone.dot)} />
              <span>{activeModule.status}</span>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <p className={cn("text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]", activeTone.activeLabel)}>
              {activeModule.descriptor}
            </p>
            <h4 className="max-w-[16ch] text-[1.08rem] font-semibold leading-[1.08] tracking-[-0.042em] text-[rgb(var(--ink))] xl:text-[1.18rem]">
              {activeModule.headline}
            </h4>
          </div>

          <p className="mt-4 text-[0.86rem] leading-6 text-[rgb(var(--ink-soft))]">{activeModule.summary}</p>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-[1.15rem] border border-[rgb(var(--outline)/0.76)] bg-[rgba(255,255,255,0.76)] p-4">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
                {labels.currentRole}
              </p>
              <p className="mt-3 text-[0.8rem] leading-6 text-[rgb(var(--ink-soft))]">{activeModule.focus}</p>
            </div>
            <div className="rounded-[1.15rem] border border-[rgb(var(--outline)/0.76)] bg-[rgba(255,255,255,0.76)] p-4">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
                {labels.executionPath}
              </p>
              <p className={cn("mt-3 text-[0.8rem] leading-6", activeTone.activeLabel)}>{activeModule.flow}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2.5">
            {activeModule.bullets.slice(0, 2).map((item) => (
              <span
                key={item}
                className={cn(
                  "inline-flex items-center justify-center rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em]",
                  activeTone.badge
                )}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-5 border-t border-[rgb(var(--outline)/0.72)] pt-4">
        <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
          {labels.systemContext}
        </p>
        <p className="mt-3 text-[0.82rem] leading-6 text-[rgb(var(--ink-soft))]">{core.context}</p>
      </div>
    </>
  );

  return (
    <div className="relative overflow-hidden rounded-[2.15rem] border border-[rgb(var(--outline)/0.82)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(244,240,233,0.9))] p-4 shadow-[0_30px_72px_rgba(15,23,42,0.08)] md:p-6">
      <div className="pointer-events-none absolute inset-0 opacity-58" style={overlayGridStyle} />
      <div className="pointer-events-none absolute inset-x-[22%] top-[5%] h-24 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.96),rgba(255,255,255,0))] blur-3xl" />

      <div className="relative space-y-4 lg:hidden">
        <div className="rounded-[1.75rem] border border-[rgb(var(--outline)/0.82)] bg-[rgba(255,255,255,0.9)] p-5 shadow-[0_20px_48px_rgba(15,23,42,0.08)]">
          {ActiveModuleSurface}
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {architectureNodes.map((module, index) => (
            <OrbitNode
              key={module.id}
              module={module}
              index={index}
              active={module.id === activeModule.id}
              onSelect={() => setActiveId(module.id)}
              compact
            />
          ))}
        </div>
      </div>

      <div className="relative hidden h-[39rem] lg:block xl:h-[41rem]">
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 760" fill="none" aria-hidden="true">
          {architectureNodes.map((module) => (
            <path
              key={`${module.id}-base`}
              d={module.path}
              stroke="rgba(181, 188, 197, 0.42)"
              strokeWidth="1.05"
              strokeDasharray="8 16"
            />
          ))}

          <motion.path
            key={`${activeModule.id}-active-path`}
            d={activeModule.path}
            stroke={activeTone.pathStroke}
            strokeWidth="2.35"
            strokeLinecap="round"
            strokeDasharray="10 12"
            animate={{ opacity: [0.42, 0.92, 0.42], strokeDashoffset: [0, -14] }}
            transition={{
              opacity: { duration: 2.9, repeat: Infinity, ease: "easeInOut" },
              strokeDashoffset: { duration: 2.4, repeat: Infinity, ease: "linear" }
            }}
          />

          {architectureNodes.map((module) => {
            const tone = toneClasses[module.tone];
            const isActive = module.id === activeModule.id;

            return (
              <circle
                key={`${module.id}-dot`}
                cx={module.dotX}
                cy={module.dotY}
                r={isActive ? 5.5 : 3.3}
                fill={isActive ? tone.pathStroke : "rgba(167, 174, 184, 0.85)"}
              />
            );
          })}

          <motion.circle
            key={`${activeModule.id}-pulse`}
            cx={activeModule.dotX}
            cy={activeModule.dotY}
            r="6"
            fill="none"
            stroke={activeTone.pathStroke}
            strokeOpacity="0.4"
            animate={{ r: [5, 9.5, 5], opacity: [0.24, 0.54, 0.24] }}
            transition={{ duration: 2.9, repeat: Infinity, ease: "easeInOut" }}
          />

          <circle cx="500" cy="380" r="6" fill="rgba(71, 85, 105, 0.86)" />
        </svg>

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(165,171,180,0.24)]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[27rem] w-[27rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(165,171,180,0.16)]" />

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[11.5rem] w-[11.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.96),rgba(244,240,233,0.65)_48%,rgba(255,255,255,0)_76%)]"
          animate={{ scale: [0.98, 1.02, 0.98], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute left-1/2 top-1/2 z-20 w-[22.75rem] -translate-x-1/2 -translate-y-1/2 xl:w-[23.75rem]">
          <div className="rounded-[1.85rem] border border-[rgb(var(--outline)/0.84)] bg-[rgba(255,255,255,0.9)] px-5 py-5 shadow-[0_26px_64px_rgba(15,23,42,0.1)] backdrop-blur xl:px-6 xl:py-6">
            {ActiveModuleSurface}
          </div>
        </div>

        {architectureNodes.map((module, index) => (
          <motion.div
            key={module.id}
            className={cn("absolute w-[8.3rem] xl:w-[8.85rem]", module.tilt)}
            style={{
              top: module.top,
              left: module.left,
              right: module.right,
              bottom: module.bottom
            }}
          >
            <OrbitNode
              module={module}
              index={index}
              active={module.id === activeModule.id}
              onSelect={() => setActiveId(module.id)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
