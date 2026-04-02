import type { Metadata } from "next";

import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { companyProfile, projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Project index for Bento AIII AI applications, systems, and workflow tooling."
};

const stageSummary = [
  {
    label: "Prototype",
    value: `${projects.filter((project) => project.status === "Prototype").length} tracks`
  },
  {
    label: "Internal",
    value: `${projects.filter((project) => project.status === "Internal").length} tracks`
  },
  {
    label: "Concept",
    value: `${projects.filter((project) => project.status === "Concept").length} tracks`
  }
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Current tracks across external work, internal builds, and concept studies."
        description="This page shows project directions and system tracks, not inflated public case studies. Some work remains internal, early-stage, or private."
        metrics={[
          { label: "Tracks", value: `${projects.length} published directions` },
          { label: "Status model", value: "Prototype / Internal / Concept" },
          { label: "Disclosure", value: "Public detail stays intentionally limited" }
        ]}
      />

      <section className="py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Portfolio view"
              title="A compact view of current Bento AIII project directions."
              description="The list spans applied tracks, internal capability work, and concept studies that illustrate the problems Bento AIII is set up to handle."
            />
          </Reveal>

          <Reveal delay={0.05} className="mt-8 surface pixel-corner p-6">
            <p className="section-kicker text-[0.58rem]">Read this page as intended</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              {companyProfile.disclosure}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {stageSummary.map((item, index) => (
              <Reveal
                key={item.label}
                delay={0.06 * index}
                className="surface pixel-corner p-6"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-3 text-xl font-semibold text-white">{item.value}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={0.04 * index}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="How to read the tracks"
              title="The page mixes external, internal, and concept work on purpose."
              description="That split makes the portfolio more honest and easier to evaluate."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "External tracks",
                copy: "Applied directions for customer-facing or partner-facing work where the workflow and outcomes matter more than a flashy demo."
              },
              {
                title: "Internal builds",
                copy: "Reusable operating layers and tooling Bento AIII uses to make future product work more structured and maintainable."
              },
              {
                title: "Concept studies",
                copy: "Exploratory directions that are intentionally marked as concept-only until scope and operating fit are better proven."
              }
            ].map((item, index) => (
              <Reveal
                key={item.title}
                delay={0.06 * index}
                className="surface pixel-corner p-6"
              >
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        eyebrow="Contact"
        title="If one of these tracks matches your workflow, start there."
        description="Bento AIII can take a concept, a rough internal tool, or a broken workflow and shape it into a more reliable product direction."
        primaryLabel="Discuss a project"
        primaryHref="/contact"
        secondaryLabel="Learn about the company"
        secondaryHref="/about"
      />
    </>
  );
}
