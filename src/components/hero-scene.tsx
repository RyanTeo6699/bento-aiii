"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";

type SystemModuleNode = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
};

const desktopNodeLayout = [
  { top: "4.5%", left: "2.5%" },
  { top: "4.5%", right: "2.5%" },
  { top: "29.5%", left: "0.5%" },
  { top: "29.5%", right: "0.5%" },
  { bottom: "6%", left: "6%" },
  { bottom: "6%", right: "6%" }
] as const;

const desktopNodeTilt = [
  "-rotate-2",
  "rotate-1",
  "-rotate-1",
  "rotate-2",
  "rotate-1",
  "-rotate-1"
] as const;

export function HeroScene({
  modules,
  coreTitle,
  coreSummary
}: {
  modules: SystemModuleNode[];
  coreTitle: string;
  coreSummary: string;
}) {
  const featuredModules = modules.slice(0, 6);

  return (
    <div className="terminal-panel relative min-h-[24rem] overflow-hidden p-4 md:p-5 lg:min-h-[39rem]">
      <div className="absolute inset-0 outline-grid opacity-40" />
      <div
        className="absolute inset-x-0 top-0 h-24"
        style={{
          background:
            "radial-gradient(circle at top, rgba(80, 212, 255, 0.14), transparent 68%)"
        }}
      />

      <div className="relative space-y-4 lg:hidden">
        <div className="system-node system-node-core p-5">
          <p className="label-caps text-[rgb(var(--primary))]">SYSTEM_CORE</p>
          <h3 className="mt-3 max-w-[13ch] text-[1.55rem] font-bold tracking-[-0.05em] text-[rgb(var(--ink))] md:text-[1.75rem]">
            {coreTitle}
          </h3>
          <p className="mt-3 text-[0.88rem] leading-6 text-[rgb(var(--ink-soft))] md:text-[0.92rem] md:leading-7">
            {coreSummary}
          </p>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {featuredModules.map((module, index) => (
            <div key={module.id} className="system-node p-4">
              <div className="flex items-start justify-between gap-3">
                <p className="label-caps text-[rgb(var(--secondary))]">{module.title}</p>
                <span className="label-caps text-[0.6rem] text-[rgb(var(--ink-muted))]">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-3 text-[0.82rem] leading-6 text-[rgb(var(--ink-soft))]">
                {module.summary}
              </p>
            </div>
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
          <defs>
            <linearGradient id="system-path" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(80,212,255,0.55)" />
              <stop offset="100%" stopColor="rgba(111,255,176,0.75)" />
            </linearGradient>
          </defs>

          <path d="M500 380 L246 138" stroke="url(#system-path)" strokeWidth="2" strokeDasharray="8 10" />
          <path d="M500 380 L754 138" stroke="url(#system-path)" strokeWidth="2" strokeDasharray="8 10" />
          <path d="M500 380 L185 332" stroke="url(#system-path)" strokeWidth="2" strokeDasharray="8 10" />
          <path d="M500 380 L815 332" stroke="url(#system-path)" strokeWidth="2" strokeDasharray="8 10" />
          <path d="M500 380 L288 608" stroke="url(#system-path)" strokeWidth="2" strokeDasharray="8 10" />
          <path d="M500 380 L712 608" stroke="url(#system-path)" strokeWidth="2" strokeDasharray="8 10" />

          <circle cx="500" cy="380" r="7" fill="rgb(var(--primary))" />
          <circle cx="246" cy="138" r="5" fill="rgb(var(--secondary))" />
          <circle cx="754" cy="138" r="5" fill="rgb(var(--secondary))" />
          <circle cx="185" cy="332" r="5" fill="rgb(var(--primary))" />
          <circle cx="815" cy="332" r="5" fill="rgb(var(--primary))" />
          <circle cx="288" cy="608" r="5" fill="rgb(var(--secondary))" />
          <circle cx="712" cy="608" r="5" fill="rgb(var(--secondary))" />
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
          animate={{ scale: [0.96, 1.02, 0.96], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute left-1/2 top-1/2 z-20 w-[20rem] -translate-x-1/2 -translate-y-1/2 xl:w-[21.5rem]">
          <div className="system-node system-node-core px-5 py-5 xl:px-6 xl:py-6">
            <p className="label-caps text-[rgb(var(--primary))]">SYSTEM_CORE</p>
            <h3 className="mt-3 max-w-[14ch] text-[1.52rem] font-bold tracking-[-0.055em] text-[rgb(var(--ink))] xl:text-[1.7rem]">
              {coreTitle}
            </h3>
            <p className="mt-3 max-w-[31ch] text-[0.86rem] leading-6 text-[rgb(var(--ink-soft))] xl:text-[0.9rem] xl:leading-7">
              {coreSummary}
            </p>
          </div>
        </div>

        {featuredModules.map((module, index) => (
          <motion.div
            key={module.id}
            className={`absolute z-10 w-[11.25rem] xl:w-[11.85rem] ${desktopNodeTilt[index]}`}
            style={desktopNodeLayout[index] as CSSProperties}
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              delay: index * 0.28,
              ease: "easeInOut"
            }}
          >
            <div className="system-node p-4 xl:p-[0.95rem]">
              <div className="flex items-center justify-between gap-3">
                <p className="label-caps text-[rgb(var(--secondary))]">{module.title}</p>
                <span className="label-caps text-[0.6rem] text-[rgb(var(--ink-muted))]">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-3 text-[0.78rem] leading-6 text-[rgb(var(--ink-soft))] xl:text-[0.82rem]">
                {module.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {module.bullets.slice(0, 1).map((item) => (
                  <span key={item} className="project-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
