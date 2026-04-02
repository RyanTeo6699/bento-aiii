"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="shell pt-4">
        <div className="surface px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-3">
              <span className="grid grid-cols-2 gap-1">
                <span className="h-2.5 w-2.5 bg-accent shadow-[0_0_16px_rgba(46,232,255,0.8)]" />
                <span className="h-2.5 w-2.5 bg-white/15" />
                <span className="h-2.5 w-2.5 bg-white/15" />
                <span className="h-2.5 w-2.5 bg-violet" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-[0.14em] text-white">
                  Bento AIII
                </span>
                <span className="font-pixel text-[0.6rem] uppercase tracking-[0.22em] text-slate-500">
                  AI applications / LLM systems
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === item.href
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-[0.9rem] px-4 py-2 text-sm transition",
                      active
                        ? "bg-white/[0.08] text-white"
                        : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:block">
              <Link href="/contact" className="button-primary">
                Project inquiry
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[0.9rem] border border-white/10 bg-white/[0.03] text-white md:hidden"
              aria-expanded={open}
              aria-label="Toggle navigation"
            >
              <span className="flex flex-col gap-1.5">
                <span className="h-px w-5 bg-white" />
                <span className="h-px w-5 bg-white" />
                <span className="h-px w-5 bg-white" />
              </span>
            </button>
          </div>

          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                className="overflow-hidden md:hidden"
              >
                <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
                  {navItems.map((item) => {
                    const active =
                      item.href === "/"
                        ? pathname === item.href
                        : pathname.startsWith(item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "block rounded-[1rem] px-4 py-3 text-sm transition",
                          active
                            ? "bg-white/[0.08] text-white"
                            : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                  <Link href="/contact" className="button-primary mt-2 w-full">
                    Project inquiry
                  </Link>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
