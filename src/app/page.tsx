import Link from "next/link";

import { FinalCta } from "@/components/final-cta";
import { HeroScene } from "@/components/hero-scene";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { TeamCard } from "@/components/team-card";
import {
  capabilityPillars,
  companyProfile,
  coreRoles,
  heroSignals,
  projects
} from "@/lib/site-data";

const featuredProjects = projects.filter((project) => project.featured);
const featuredRoles = coreRoles.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_24%,rgba(46,232,255,0.16),transparent_28%),radial-gradient(circle_at_88%_14%,rgba(139,96,255,0.12),transparent_22%)]" />
        <div className="shell relative grid gap-14 pb-20 pt-10 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.98fr)] lg:items-center">
          <div className="max-w-2xl">
            <Reveal className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="section-kicker">AI applications / LLM systems</span>
                <span className="hud-line max-w-xs" />
              </div>

              <div className="space-y-3">
                <p className="font-pixel text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">
                  Edmonton / Remote
                </p>
                <h1 className="text-5xl font-semibold leading-none tracking-[-0.04em] text-white md:text-[5.5rem]">
                  Bento AIII
                </h1>
              </div>

              <p className="max-w-2xl text-2xl leading-tight text-slate-100 md:text-[1.95rem]">
                AI applications, LLM systems, and workflow software built for real operating work.
              </p>

              <p className="max-w-xl text-base leading-8 text-slate-400">
                {companyProfile.description} The company works where product shape, system
                behavior, and delivery constraints all need to stay in the same conversation.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="button-primary">
                Project inquiry
              </Link>
              <Link href="/projects" className="button-secondary">
                View project tracks
              </Link>
            </Reveal>

            <Reveal
              delay={0.16}
              className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3"
            >
              {heroSignals.map((signal) => (
                <div key={signal.label} className="space-y-3">
                  <p className="neo-microcopy">{signal.label}</p>
                  <p className="text-sm leading-7 text-slate-300">{signal.value}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:pl-8">
            <HeroScene />
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="A small company focused on practical AI delivery rather than polished case-study theater."
              description={companyProfile.description}
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            <Reveal delay={0.06} className="surface pixel-corner p-6">
              <p className="section-kicker text-[0.58rem]">Mission</p>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                {companyProfile.mission}
              </p>
            </Reveal>

            <Reveal delay={0.12} className="surface pixel-corner p-6">
              <p className="section-kicker text-[0.58rem]">Public material</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {companyProfile.disclosure}
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="neo-microcopy">Site policy</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Project pages represent current tracks and capability areas. If a detail is
                  not public or not yet stable, it stays out of the copy.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="Core capability areas across product, system design, and delivery."
              description="Each track is designed to support AI products that need more than a prototype. Bento AIII builds the layer around the model as carefully as the model interaction itself."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {capabilityPillars.map((pillar, index) => (
              <Reveal
                key={pillar.title}
                delay={0.06 * index}
                className="surface pixel-corner p-6 md:p-7"
              >
                <p className="font-pixel text-[0.68rem] uppercase tracking-[0.18em] text-accent/80">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {pillar.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {pillar.bullets.map((item) => (
                    <span key={item} className="signal-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Projects"
                title="Current tracks across external work, internal builds, and concept studies."
                description="The list is intentionally written as project directions rather than inflated public case studies."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <Link href="/projects" className="button-secondary">
                See all tracks
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={0.06 * index}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-24">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Core roles"
                title="The team page stays role-based until there is public information worth publishing."
                description="Bento AIII is intentionally small. The site shows the roles that shape delivery instead of inventing biographies and profile links."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <Link href="/team" className="button-secondary">
                View core roles
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredRoles.map((role, index) => (
              <Reveal key={role.id} delay={0.06 * index}>
                <TeamCard role={role} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        eyebrow="Start"
        title="If the workflow is real, the software around the model should be too."
        description="Bring Bento AIII a process, internal tool, or AI product direction that needs credible scope and dependable implementation."
        primaryLabel="Start a project inquiry"
        primaryHref="/contact"
        secondaryLabel="Read the company brief"
        secondaryHref="/about"
      />
    </>
  );
}
