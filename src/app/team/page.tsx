import type { Metadata } from "next";

import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { TeamCard } from "@/components/team-card";
import { coreRoles } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Team",
  description: "The Bento AIII team across product, design, engineering, and AI systems."
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="A role-based team page is more credible than invented bios."
        description="Bento AIII is intentionally small. This page shows the public-facing roles that shape delivery instead of padded personal profiles."
        metrics={[
          { label: "Studio model", value: "Compact, cross-functional delivery" },
          { label: "Public team policy", value: "Roles first, biographies only when verifiable" },
          { label: "Working style", value: "Product, systems, design, rollout" }
        ]}
      />

      <section className="py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Core roles"
              title="The company publishes roles rather than fabricated personal profiles."
              description="That keeps the page tighter, more accurate, and more in line with the current scale of the studio."
            />
          </Reveal>

          <div className="mt-8 surface pixel-corner p-6">
            <p className="section-kicker text-[0.58rem]">Why it is structured this way</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              Bento AIII does not currently publish headshots, speculative job titles, or
              empty profile links. The site focuses on who covers what, which is the more
              useful information for a small delivery company.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {coreRoles.map((role, index) => (
              <Reveal key={role.id} delay={0.05 * index}>
                <TeamCard role={role} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="The team stays small, but the working model is structured."
              description="Bento AIII projects typically move through a few tightly connected lanes instead of handoffs between isolated departments."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Frame the product",
                copy: "Clarify the workflow, users, operating constraints, and success conditions before building the system."
              },
              {
                title: "Design the system",
                copy: "Define retrieval, prompting, integrations, evaluation, and review controls in parallel with the UI."
              },
              {
                title: "Ship and refine",
                copy: "Roll out with staged delivery, operational visibility, and adjustments based on actual usage."
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

      <section className="py-24">
        <div className="shell grid gap-6 lg:grid-cols-2">
          <Reveal className="surface pixel-corner p-8">
            <span className="section-kicker">Who this setup fits</span>
            <p className="mt-4 text-2xl font-semibold text-white">
              Teams building AI products for actual business motion.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              The best fit is usually a company that already knows where the friction is:
              knowledge bottlenecks, repetitive decision paths, fragmented internal tools, or
              a product direction that needs sharper structure.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="surface pixel-corner p-8">
            <span className="section-kicker">Collaboration style</span>
            <p className="mt-4 text-2xl font-semibold text-white">
              Close to the problem, not detached from it.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Bento AIII works well with founders, product leads, operations teams, and
              internal platform groups that want a build partner with product judgment and
              technical depth in the same loop.
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCta
        eyebrow="Connect"
        title="Need a team that can bridge product, engineering, and AI systems?"
        description="Bring Bento AIII into the conversation when the project needs more than a prototype and less than a disconnected vendor chain."
        primaryLabel="Contact Bento AIII"
        primaryHref="/contact"
        secondaryLabel="Browse project work"
        secondaryHref="/projects"
      />
    </>
  );
}
