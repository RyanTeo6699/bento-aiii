"use client";

import { motion } from "framer-motion";

const lanes = [
  { label: "Workflow framing", value: "inputs, decisions, review path" },
  { label: "Model layer", value: "retrieval, prompting, evaluation" },
  { label: "Operator surface", value: "context, traceability, actions" },
  { label: "Delivery fit", value: "handoff, ownership, rollout" }
];

const systemSignals = [
  { label: "Retrieval", value: "grounded answers" },
  { label: "Review", value: "visible checkpoints" },
  { label: "Runtime", value: "practical scope" }
];

const runtimeLog = [
  "scope.workflow -> operator goals + risk points",
  "shape.interface -> readable states + review history",
  "connect.system -> retrieval + prompt behavior",
  "ship.iteration -> controlled rollout + feedback"
];

export function HeroScene() {
  return (
    <div className="surface pixel-corner relative h-[440px] w-full p-4 lg:h-[560px] lg:p-5">
      <div className="absolute inset-0 outline-grid opacity-30" />

      <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
        <span className="section-kicker text-[0.58rem]">System board</span>
        <span className="signal-chip">Bento AIII</span>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-4">
          <div className="terminal-panel outline-grid relative overflow-hidden p-5">
            <motion.div
              className="absolute left-0 right-0 top-0 h-12 bg-gradient-to-b from-accent/12 to-transparent"
              animate={{ y: [-48, 216, -48] }}
              transition={{ duration: 7.6, repeat: Infinity, ease: "linear" }}
            />
            <p className="neo-microcopy">Delivery lanes</p>
            <div className="mt-4 space-y-4">
              {lanes.map((lane, index) => (
                <div key={lane.label} className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-pixel text-[0.68rem] uppercase tracking-[0.18em] text-slate-300">
                      0{index + 1} {lane.label}
                    </span>
                    <span className="text-xs text-slate-500">active</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent/80 via-accent/40 to-violet/50"
                      initial={{ width: "35%" }}
                      animate={{ width: ["35%", "82%", "58%"] }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: index * 0.35,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                  <p className="text-xs leading-6 text-slate-500">{lane.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="terminal-panel p-5">
              <p className="neo-microcopy">Product surface</p>
              <p className="mt-3 text-lg font-semibold text-white">
                Interfaces shaped around operators, not prompt demos.
              </p>
            </div>
            <div className="terminal-panel p-5">
              <p className="neo-microcopy">System layer</p>
              <p className="mt-3 text-lg font-semibold text-white">
                Retrieval, prompting, review, and delivery fit kept in one frame.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="terminal-panel p-5">
            <p className="neo-microcopy">Signal panel</p>
            <div className="mt-4 space-y-3">
              {systemSignals.map((signal, index) => (
                <motion.div
                  key={signal.label}
                  className="flex items-center justify-between gap-4 border-t border-white/10 pt-3 first:border-t-0 first:pt-0"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{
                    duration: 4.6,
                    repeat: Infinity,
                    delay: index * 0.45,
                    ease: "easeInOut"
                  }}
                >
                  <span className="font-pixel text-[0.68rem] uppercase tracking-[0.18em] text-slate-300">
                    {signal.label}
                  </span>
                  <span className="text-sm text-slate-400">{signal.value}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="terminal-panel p-5">
            <p className="neo-microcopy">Runtime log</p>
            <div className="mt-4 space-y-3 font-pixel text-[0.68rem] uppercase tracking-[0.12em] text-slate-400">
              {runtimeLog.map((line, index) => (
                <motion.p
                  key={line}
                  animate={{ opacity: [0.45, 1, 0.45] }}
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

          <div className="terminal-panel p-5">
            <p className="section-kicker text-[0.56rem]">Brand readout</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Bento AIII</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              AI applications, LLM systems, and workflow software built to stay legible
              under real operating conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
