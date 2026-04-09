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
  return (
    <div className="boxed-section relative h-[470px] w-full overflow-hidden px-4 py-5 md:px-5 lg:h-[590px]">
      <div className="absolute inset-0 outline-grid opacity-40" />

      <div className="relative flex items-center justify-between gap-4 border-b-[3px] border-[rgb(var(--ink))] pb-4">
        <span className="section-kicker sticker-rotate-3 text-[0.68rem]">{copy.kicker}</span>
        <span className="sticker-badge bg-[rgb(var(--secondary-container))] text-[rgb(var(--ink))]">
          {copy.chip}
        </span>
      </div>

      <div className="relative mt-4 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-4">
          <div className="terminal-panel relative overflow-hidden p-5">
            <motion.div
              className="absolute left-3 right-3 top-3 h-10 rounded-[1rem] bg-[linear-gradient(90deg,rgba(255,113,153,0.24),rgba(38,230,255,0.18),transparent)]"
              animate={{ x: [-24, 22, -24] }}
              transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
            />

            <p className="neo-microcopy">{copy.lanesLabel}</p>
            <div className="mt-4 space-y-4">
              {copy.lanes.map((lane, index) => (
                <div key={lane.label} className="rounded-[1.2rem] border-[2px] border-[rgb(var(--ink))] bg-white/80 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="label-caps text-[rgb(var(--ink))]">
                      0{index + 1} {lane.label}
                    </span>
                    <span className="label-caps text-[rgb(var(--ink-muted))]">{copy.activeLabel}</span>
                  </div>

                  <div className="mt-3 h-3 overflow-hidden rounded-full border-[2px] border-[rgb(var(--ink))] bg-white">
                    <motion.div
                      className="h-full rounded-full bg-[linear-gradient(90deg,rgb(var(--primary-container)),rgb(var(--secondary-container)),rgb(var(--tertiary-container)))]"
                      initial={{ width: "38%" }}
                      animate={{ width: ["38%", "84%", "58%"] }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: index * 0.32,
                        ease: "easeInOut"
                      }}
                    />
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[rgb(var(--ink-soft))]">{lane.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="terminal-panel p-5">
              <p className="neo-microcopy">{copy.productSurfaceLabel}</p>
              <p className="mt-3 text-lg font-extrabold leading-7 text-[rgb(var(--ink))]">
                {copy.productSurfaceText}
              </p>
            </div>
            <div className="terminal-panel p-5">
              <p className="neo-microcopy">{copy.systemLayerLabel}</p>
              <p className="mt-3 text-lg font-extrabold leading-7 text-[rgb(var(--ink))]">
                {copy.systemLayerText}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="terminal-panel p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3">
                <p className="neo-microcopy">{copy.brandFrameLabel}</p>
                <h3 className="text-4xl font-black leading-none tracking-[-0.06em] text-[rgb(var(--ink))]">
                  Bento AIII
                </h3>
                <p className="max-w-[18rem] text-sm leading-7 text-[rgb(var(--ink-soft))]">
                  {copy.brandDescription}
                </p>
              </div>

              <div className="brand-mark sticker-rotate-2">
                <span className="brand-grid">
                  <span className="bg-[rgb(var(--primary-container))]" />
                  <span className="bg-[rgb(var(--secondary-container))]" />
                  <span className="bg-white" />
                  <span className="bg-[rgb(var(--tertiary-container))]" />
                </span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {copy.brandPrinciples.map((item, index) => (
                <span
                  key={item}
                  className={`signal-chip ${index === 1 ? "bg-[rgb(var(--secondary-container))]" : index === 2 ? "bg-[rgb(var(--tertiary-container))]" : ""}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="terminal-panel p-5">
            <p className="neo-microcopy">{copy.signalPanelLabel}</p>
            <div className="mt-4 space-y-3">
              {copy.signals.map((signal, index) => (
                <motion.div
                  key={signal.label}
                  className="flex items-center justify-between gap-4 rounded-[1rem] border-[2px] border-[rgb(var(--ink))] bg-white/80 px-4 py-3"
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 4.6,
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

          <div className="terminal-panel p-5">
            <p className="neo-microcopy">{copy.runtimeLogLabel}</p>
            <div className="mt-4 space-y-3 font-[var(--font-label)] text-[0.78rem] font-extrabold uppercase tracking-[0.08em] text-[rgb(var(--ink-soft))]">
              {copy.runtimeLog.map((line, index) => (
                <motion.p
                  key={line}
                  animate={{ opacity: [0.55, 1, 0.55] }}
                  transition={{
                    duration: 5.2,
                    repeat: Infinity,
                    delay: index * 0.4,
                    ease: "easeInOut"
                  }}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
