"use client";

import { motion } from "framer-motion";

type HeroSceneCopy = {
  kicker: string;
  chip: string;
  lanesLabel: string;
  activeLabel: string;
  lanes: Array<{ label: string; value: string }>;
  productSurfaceLabel: string;
  productSurfaceText: string;
  systemLayerLabel: string;
  systemLayerText: string;
  brandFrameLabel: string;
  brandDescription: string;
  brandPrinciples: string[];
  signalPanelLabel: string;
  signals: Array<{ label: string; value: string }>;
  runtimeLogLabel: string;
  runtimeLog: string[];
};

export function HeroScene({ copy }: { copy: HeroSceneCopy }) {
  const featuredLanes = copy.lanes.slice(0, 3);

  return (
    <div className="boxed-section relative flex h-full min-h-[30rem] w-full flex-col overflow-hidden px-4 py-4 md:px-5 md:py-5 lg:min-h-[35rem]">
      <div className="absolute inset-0 outline-grid opacity-35" />

      <div className="relative flex items-center justify-between gap-3 border-b-[3px] border-[rgb(var(--ink))] pb-4">
        <span className="section-kicker sticker-rotate-3 text-[0.66rem]">{copy.kicker}</span>
        <span className="sticker-badge bg-[rgb(var(--secondary-container))] text-[rgb(var(--ink))]">
          {copy.chip}
        </span>
      </div>

      <div className="relative mt-4 grid flex-1 gap-4 lg:grid-cols-[minmax(0,1.04fr)_minmax(15rem,0.96fr)]">
        <div className="terminal-panel relative flex flex-col overflow-hidden p-5">
          <motion.div
            className="absolute left-3 right-3 top-3 h-12 rounded-[1rem] bg-[linear-gradient(90deg,rgba(255,113,153,0.22),rgba(38,230,255,0.18),transparent)]"
            animate={{ x: [-16, 18, -16] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative flex items-center justify-between gap-4">
            <p className="neo-microcopy">{copy.lanesLabel}</p>
            <span className="project-chip bg-[rgb(var(--surface-container-high))]">
              {copy.activeLabel}
            </span>
          </div>

          <div className="relative mt-5 grid gap-3">
            {featuredLanes.map((lane, index) => (
              <div
                key={lane.label}
                className="rounded-[1.2rem] border-[2px] border-[rgb(var(--ink))] bg-white/85 p-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="label-caps text-[rgb(var(--ink))]">
                    0{index + 1} {lane.label}
                  </span>
                </div>

                <div className="mt-3 h-3 overflow-hidden rounded-full border-[2px] border-[rgb(var(--ink))] bg-white">
                  <motion.div
                    className="h-full rounded-full bg-[linear-gradient(90deg,rgb(var(--primary-container)),rgb(var(--secondary-container)),rgb(var(--tertiary-container)))]"
                    initial={{ width: "42%" }}
                    animate={{ width: ["42%", "88%", "64%"] }}
                    transition={{
                      duration: 5.8,
                      repeat: Infinity,
                      repeatType: "mirror",
                      delay: index * 0.34,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                <p className="mt-3 text-sm leading-6 text-[rgb(var(--ink-soft))]">{lane.value}</p>
              </div>
            ))}
          </div>

          <div className="relative mt-auto grid gap-3 pt-4 sm:grid-cols-2">
            <div className="rounded-[1.15rem] border-[2px] border-[rgb(var(--ink))] bg-white/85 p-4">
              <p className="neo-microcopy">{copy.productSurfaceLabel}</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-[rgb(var(--ink))]">
                {copy.productSurfaceText}
              </p>
            </div>
            <div className="rounded-[1.15rem] border-[2px] border-[rgb(var(--ink))] bg-white/85 p-4">
              <p className="neo-microcopy">{copy.systemLayerLabel}</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-[rgb(var(--ink))]">
                {copy.systemLayerText}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="terminal-panel flex flex-col justify-between p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3">
                <p className="neo-microcopy">{copy.brandFrameLabel}</p>
                <h3 className="text-[2.4rem] font-black leading-none tracking-[-0.06em] text-[rgb(var(--ink))]">
                  Bento AIII
                </h3>
                <p className="max-w-[18rem] text-sm leading-7 text-[rgb(var(--ink-soft))]">
                  {copy.brandDescription}
                </p>
              </div>

              <div className="brand-mark h-12 w-12 shrink-0 sticker-rotate-2 md:h-[3.2rem] md:w-[3.2rem]">
                <span className="brand-grid">
                  <span className="bg-[rgb(var(--primary-container))]" />
                  <span className="bg-[rgb(var(--secondary-container))]" />
                  <span className="bg-white" />
                  <span className="bg-[rgb(var(--tertiary-container))]" />
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {copy.brandPrinciples.map((item, index) => (
                <span
                  key={item}
                  className={`signal-chip ${
                    index === 1
                      ? "bg-[rgb(var(--secondary-container))]"
                      : index === 2
                        ? "bg-[rgb(var(--tertiary-container))]"
                        : ""
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="terminal-panel p-5">
            <p className="neo-microcopy">{copy.signalPanelLabel}</p>
            <div className="mt-4 grid gap-3">
              {copy.signals.map((signal, index) => (
                <motion.div
                  key={signal.label}
                  className="flex items-center justify-between gap-4 rounded-[1rem] border-[2px] border-[rgb(var(--ink))] bg-white/85 px-4 py-3"
                  animate={{ y: [0, -2, 0] }}
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    delay: index * 0.45,
                    ease: "easeInOut"
                  }}
                >
                  <span className="label-caps text-[rgb(var(--ink))]">{signal.label}</span>
                  <span className="text-sm font-semibold text-[rgb(var(--ink-soft))]">
                    {signal.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
