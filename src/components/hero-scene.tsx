"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { CSSProperties } from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type SystemModuleNode = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
};

type ModuleTone = "primary" | "secondary" | "tertiary";

type LiveModuleNode = SystemModuleNode & {
  headline: string;
  state: string;
  signal: string;
  trace: string;
  tone: ModuleTone;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  path: string;
  dotX: number;
  dotY: number;
  tilt: string;
};

const desktopNodeLayout = [
  {
    top: "5%",
    left: "2.5%",
    path: "M500 380 C432 304 346 214 246 144",
    dotX: 246,
    dotY: 144,
    tilt: "-rotate-2"
  },
  {
    top: "5%",
    right: "2.5%",
    path: "M500 380 C568 304 654 214 754 144",
    dotX: 754,
    dotY: 144,
    tilt: "rotate-[1.5deg]"
  },
  {
    top: "30%",
    left: "0.75%",
    path: "M500 380 C410 366 305 350 188 334",
    dotX: 188,
    dotY: 334,
    tilt: "-rotate-1"
  },
  {
    top: "30%",
    right: "0.75%",
    path: "M500 380 C590 366 695 350 812 334",
    dotX: 812,
    dotY: 334,
    tilt: "rotate-2"
  },
  {
    bottom: "6%",
    left: "6%",
    path: "M500 380 C440 456 368 540 286 608",
    dotX: 286,
    dotY: 608,
    tilt: "rotate-1"
  },
  {
    bottom: "6%",
    right: "6%",
    path: "M500 380 C560 456 632 540 714 608",
    dotX: 714,
    dotY: 608,
    tilt: "-rotate-[1.5deg]"
  }
] as const;

const moduleMeta: Record<
  string,
  {
    headline: string;
    state: string;
    signal: string;
    trace: string;
    tone: ModuleTone;
  }
> = {
  INPUT_STRUCTURING: {
    headline: "Normalize raw demand into executable cases.",
    state: "SCHEMA PASS / LIVE",
    signal: "missing-field detection + intake normalization active",
    trace: "raw_signal -> case_schema -> missing_field_map",
    tone: "secondary"
  },
  CONSTRAINT_ROUTING: {
    headline: "Apply policy and risk before any route is allowed.",
    state: "RULE GATES / ACTIVE",
    signal: "policy threshold checks + path qualification active",
    trace: "constraint_layer -> risk_gate -> valid_path_set",
    tone: "primary"
  },
  DUAL_SIDE_EVALUATION: {
    headline: "Score demand and supply as one operating decision.",
    state: "FIT MATRIX / ACTIVE",
    signal: "compatibility, trust, capacity, and history in sync",
    trace: "demand_fit + supply_fit -> trust_weighted score",
    tone: "secondary"
  },
  WORKFLOW_EXECUTION: {
    headline: "Keep execution inside one traceable control surface.",
    state: "TASK FLOW / ACTIVE",
    signal: "state transitions, ownership, and escalation in control",
    trace: "assignment -> owner_state -> evidence -> escalation",
    tone: "primary"
  },
  OUTCOME_MEMORY: {
    headline: "Convert outcomes into reusable operational memory.",
    state: "MEMORY LOOP / WARM",
    signal: "failures, delays, disputes, and completions retained",
    trace: "outcome_capture -> learning_weights -> future routing",
    tone: "primary"
  },
  DOMAIN_ADAPTATION: {
    headline: "Swap domain packs without replacing the system core.",
    state: "PACK SWITCH / READY",
    signal: "schema overlays and policy packs remain modular",
    trace: "domain_pack -> schema_overlay -> workflow variant",
    tone: "tertiary"
  }
};

const toneClasses: Record<
  ModuleTone,
  {
    badge: string;
    dot: string;
    activeRing: string;
    activeBorder: string;
    activeGlow: string;
    activeText: string;
    pathStroke: string;
    panelGlow: CSSProperties;
  }
> = {
  primary: {
    badge: "border-[rgb(var(--primary))] bg-[rgb(var(--primary-veil))] text-[rgb(var(--primary))]",
    dot: "bg-[rgb(var(--primary))]",
    activeRing: "shadow-[0_0_0_1px_rgba(111,255,176,0.28),0_0_30px_rgba(111,255,176,0.16)]",
    activeBorder: "border-[rgb(var(--primary))]",
    activeGlow: "text-[rgb(var(--primary))]",
    activeText: "text-[rgb(var(--ink))]",
    pathStroke: "rgb(var(--primary))",
    panelGlow: {
      boxShadow:
        "inset 0 1px 0 rgba(255,255,255,0.04), 0 0 0 1px rgba(111,255,176,0.16), 0 0 34px rgba(111,255,176,0.16), 0 26px 56px rgba(0,0,0,0.36)"
    }
  },
  secondary: {
    badge: "border-[rgb(var(--secondary))] bg-[rgb(var(--secondary-veil))] text-[rgb(var(--secondary))]",
    dot: "bg-[rgb(var(--secondary))]",
    activeRing: "shadow-[0_0_0_1px_rgba(80,212,255,0.24),0_0_30px_rgba(80,212,255,0.14)]",
    activeBorder: "border-[rgb(var(--secondary))]",
    activeGlow: "text-[rgb(var(--secondary))]",
    activeText: "text-[rgb(var(--ink))]",
    pathStroke: "rgb(var(--secondary))",
    panelGlow: {
      boxShadow:
        "inset 0 1px 0 rgba(255,255,255,0.04), 0 0 0 1px rgba(80,212,255,0.15), 0 0 34px rgba(80,212,255,0.14), 0 26px 56px rgba(0,0,0,0.36)"
    }
  },
  tertiary: {
    badge: "border-[rgb(var(--tertiary))] bg-[rgb(var(--tertiary-container))] text-[rgb(var(--ink))]",
    dot: "bg-[rgb(var(--tertiary))]",
    activeRing: "shadow-[0_0_0_1px_rgba(144,166,255,0.24),0_0_28px_rgba(144,166,255,0.14)]",
    activeBorder: "border-[rgb(var(--tertiary))]",
    activeGlow: "text-[rgb(var(--ink))]",
    activeText: "text-[rgb(var(--ink))]",
    pathStroke: "rgb(var(--tertiary))",
    panelGlow: {
      boxShadow:
        "inset 0 1px 0 rgba(255,255,255,0.04), 0 0 0 1px rgba(144,166,255,0.14), 0 0 30px rgba(144,166,255,0.12), 0 26px 56px rgba(0,0,0,0.36)"
    }
  }
};

function buildLiveModule(module: SystemModuleNode, index: number): LiveModuleNode {
  const layout = desktopNodeLayout[index];
  const meta = moduleMeta[module.id] ?? {
    headline: module.title,
    state: "NODE / ACTIVE",
    signal: module.summary,
    trace: module.bullets.join(" -> "),
    tone: "secondary" as const
  };

  return {
    ...module,
    ...meta,
    ...layout
  };
}

function ModuleSelector({
  module,
  index,
  active,
  onSelect,
  compact = false
}: {
  module: LiveModuleNode;
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
        "system-node system-node-button w-full text-left",
        compact ? "p-4" : "p-4 xl:p-[0.95rem]",
        active ? cn("z-20", tone.activeBorder, tone.activeRing) : "z-10 opacity-70"
      )}
      animate={{
        y: active ? [0, -6, 0] : [0, -2, 0],
        scale: active ? 1.03 : 0.97,
        opacity: active ? 1 : 0.7
      }}
      whileHover={{
        y: active ? -6 : -4,
        scale: active ? 1.04 : 0.99,
        opacity: 1
      }}
      transition={{
        duration: active ? 4.2 : 5.2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.16
      }}
      style={active ? tone.panelGlow : undefined}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1.5">
          <p className={cn("label-caps", active ? tone.activeGlow : "text-[rgb(var(--ink-muted))]")}>
            {module.title}
          </p>
          <p className="text-[0.63rem] font-semibold uppercase tracking-[0.14em] text-[rgb(var(--ink-muted))]">
            Node 0{index + 1}
          </p>
        </div>
        <span
          className={cn(
            "mt-0.5 h-2.5 w-2.5 rounded-full",
            active ? tone.dot : "bg-[rgb(var(--outline-strong))]"
          )}
        />
      </div>

      <p
        className={cn(
          "system-node-summary mt-3",
          compact ? "text-[0.8rem] leading-6" : "text-[0.78rem] leading-6 xl:text-[0.82rem]"
        )}
      >
        {module.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        <span className={cn("project-chip", active ? tone.badge : "")}>
          {module.bullets[0]}
        </span>
      </div>
    </motion.button>
  );
}

export function HeroScene({
  modules,
  coreTitle,
  coreSummary
}: {
  modules: SystemModuleNode[];
  coreTitle: string;
  coreSummary: string;
}) {
  const liveModules = modules.slice(0, 6).map(buildLiveModule);
  const [activeId, setActiveId] = useState(liveModules[0]?.id ?? "");
  const activeModule = liveModules.find((module) => module.id === activeId) ?? liveModules[0];

  if (!activeModule) {
    return null;
  }

  const activeTone = toneClasses[activeModule.tone];

  return (
    <div
      className="terminal-panel relative min-h-[24rem] overflow-hidden p-4 md:p-5 lg:min-h-[39rem]"
      aria-label={`${coreTitle} live module map`}
    >
      <div className="absolute inset-0 outline-grid opacity-40" />
      <div
        className="absolute inset-x-0 top-0 h-24"
        style={{
          background:
            "radial-gradient(circle at top, rgba(80, 212, 255, 0.14), transparent 68%)"
        }}
      />

      <div className="relative space-y-4 lg:hidden">
        <div className="system-node system-node-core system-core-console p-5" style={activeTone.panelGlow}>
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-2">
              <p className="label-caps text-[rgb(var(--primary))]">ACTIVE_MODULE</p>
              <span className={cn("sticker-badge", activeTone.badge)}>{activeModule.title}</span>
            </div>
            <div className="system-focus-indicator">
              <span className={cn("h-2.5 w-2.5 rounded-full", activeTone.dot)} />
              <span className="label-caps text-[0.6rem]">{activeModule.state}</span>
            </div>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeModule.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-5 space-y-4"
            >
              <h3 className="max-w-[14ch] text-[1.48rem] font-bold tracking-[-0.055em] text-[rgb(var(--ink))] md:text-[1.72rem]">
                {activeModule.headline}
              </h3>
              <p className="max-w-[34ch] text-[0.9rem] leading-6 text-[rgb(var(--ink-soft))] md:text-[0.94rem] md:leading-7">
                {activeModule.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {activeModule.bullets.map((item) => (
                  <span key={item} className={cn("project-chip", activeTone.badge)}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="system-focus-readout">
                <div className="system-focus-readout-panel">
                  <p className="label-caps">SIGNAL_STATE</p>
                  <p className="mt-2 text-[0.8rem] leading-6 text-[rgb(var(--ink-soft))]">
                    {activeModule.signal}
                  </p>
                </div>
                <div className="system-focus-readout-panel">
                  <p className="label-caps">TRACE_PATH</p>
                  <p className="mt-2 text-[0.78rem] leading-6 text-[rgb(var(--ink-muted))]">
                    {activeModule.trace}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-5 border-t border-[rgb(var(--outline))] pt-4">
            <p className="label-caps">OPERATING_CONTEXT</p>
            <p className="mt-2 text-[0.8rem] leading-6 text-[rgb(var(--ink-muted))]">{coreSummary}</p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {liveModules.map((module, index) => (
            <ModuleSelector
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

      <div className="relative hidden h-[35rem] lg:block xl:h-[37rem]">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1000 760"
          fill="none"
          aria-hidden="true"
        >
          {liveModules.map((module) => (
            <path
              key={`${module.id}-base`}
              d={module.path}
              stroke="rgb(var(--outline-strong))"
              strokeOpacity="0.3"
              strokeWidth="1.4"
              strokeDasharray="7 11"
            />
          ))}

          <motion.path
            key={`${activeModule.id}-active-path`}
            d={activeModule.path}
            stroke={activeTone.pathStroke}
            strokeWidth="2.35"
            strokeLinecap="round"
            strokeDasharray="10 10"
            animate={{
              opacity: [0.45, 0.95, 0.45],
              strokeDashoffset: [0, -18]
            }}
            transition={{
              opacity: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
              strokeDashoffset: { duration: 2.4, repeat: Infinity, ease: "linear" }
            }}
          />

          {liveModules.map((module) => {
            const tone = toneClasses[module.tone];
            const isActive = module.id === activeModule.id;

            return (
              <circle
                key={`${module.id}-dot`}
                cx={module.dotX}
                cy={module.dotY}
                r={isActive ? 6 : 4.5}
                fill={isActive ? tone.pathStroke : "rgb(var(--outline-strong))"}
                fillOpacity={isActive ? "1" : "0.75"}
              />
            );
          })}

          <motion.circle
            key={`${activeModule.id}-pulse`}
            cx={activeModule.dotX}
            cy={activeModule.dotY}
            r="7"
            fill="none"
            stroke={activeTone.pathStroke}
            strokeOpacity="0.45"
            animate={{ r: [6, 10, 6], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />

          <circle cx="500" cy="380" r="7" fill="rgb(var(--primary))" />
        </svg>

        <div
          className="absolute left-1/2 top-1/2 h-[19rem] w-[19rem] -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{ borderColor: "rgb(var(--outline) / 0.44)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{ borderColor: "rgb(var(--grid) / 0.48)" }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 h-[11rem] w-[11rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgb(var(--primary))]"
          style={{
            background:
              "radial-gradient(circle, rgba(111, 255, 176, 0.14), rgba(17, 33, 25, 0.1) 55%, transparent 70%)"
          }}
          animate={{ scale: [0.96, 1.02, 0.96], opacity: [0.68, 1, 0.68] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute left-1/2 top-1/2 z-20 w-[22rem] -translate-x-1/2 -translate-y-1/2 xl:w-[23rem]">
          <div className="system-node system-node-core system-core-console px-5 py-5 xl:px-6 xl:py-6" style={activeTone.panelGlow}>
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-2">
                <p className="label-caps text-[rgb(var(--primary))]">ACTIVE_MODULE</p>
                <span className={cn("sticker-badge", activeTone.badge)}>{activeModule.title}</span>
              </div>
              <div className="system-focus-indicator">
                <span className={cn("h-2.5 w-2.5 rounded-full", activeTone.dot)} />
                <span className="label-caps text-[0.6rem]">{activeModule.state}</span>
              </div>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeModule.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="mt-5 space-y-4"
              >
                <h3 className="max-w-[15ch] text-[1.5rem] font-bold tracking-[-0.055em] text-[rgb(var(--ink))] xl:text-[1.72rem]">
                  {activeModule.headline}
                </h3>
                <p className="max-w-[34ch] text-[0.88rem] leading-6 text-[rgb(var(--ink-soft))] xl:text-[0.92rem] xl:leading-7">
                  {activeModule.summary}
                </p>

                <div className="flex flex-wrap gap-2">
                  {activeModule.bullets.map((item) => (
                    <span key={item} className={cn("project-chip", activeTone.badge)}>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="system-focus-readout">
                  <div className="system-focus-readout-panel">
                    <p className="label-caps">SIGNAL_STATE</p>
                    <p className="mt-2 text-[0.8rem] leading-6 text-[rgb(var(--ink-soft))]">
                      {activeModule.signal}
                    </p>
                  </div>
                  <div className="system-focus-readout-panel">
                    <p className="label-caps">TRACE_PATH</p>
                    <p className="mt-2 text-[0.78rem] leading-6 text-[rgb(var(--ink-muted))]">
                      {activeModule.trace}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-5 border-t border-[rgb(var(--outline))] pt-4">
              <p className="label-caps">OPERATING_CONTEXT</p>
              <p className="mt-2 text-[0.8rem] leading-6 text-[rgb(var(--ink-muted))]">{coreSummary}</p>
            </div>
          </div>
        </div>

        {liveModules.map((module, index) => (
          <motion.div
            key={module.id}
            className={cn("absolute w-[10.85rem] xl:w-[11.5rem]", module.tilt)}
            style={{
              top: module.top,
              left: module.left,
              right: module.right,
              bottom: module.bottom
            }}
          >
            <ModuleSelector
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
