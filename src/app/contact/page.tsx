import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { contactChannels } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Bento AIII for AI product, system, and workflow conversations."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Bring the workflow, the problem, or the product direction."
        description="Bento AIII is best engaged on practical AI product work, language model systems, internal tooling, and delivery partnerships."
        metrics={[
          { label: "General", value: "hello@bentoaiii.com" },
          { label: "Response", value: "Usually within 1-2 business days" },
          { label: "Base", value: "Edmonton, Alberta / remote" }
        ]}
      />

      <section className="py-24">
        <div className="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <Reveal>
              <SectionHeading
                eyebrow="Reach out"
                title="A few ways to start the conversation."
                description="Use the contact form for structure, or jump directly to the right channel below."
              />
            </Reveal>

            <div className="grid gap-6">
              {contactChannels.map((channel, index) => (
                <Reveal
                  key={channel.label}
                  delay={0.06 * index}
                  className="surface pixel-corner p-6"
                >
                  <p className="neo-microcopy">{channel.label}</p>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="mt-3 block text-2xl font-semibold text-white hover:text-accent"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <p className="mt-3 text-2xl font-semibold text-white">{channel.value}</p>
                  )}
                  <p className="mt-3 text-sm leading-7 text-slate-400">{channel.note}</p>
                </Reveal>
              ))}

              <Reveal delay={0.18} className="surface pixel-corner p-6">
                <p className="section-kicker text-[0.58rem]">Submission path</p>
                <div className="mt-5 space-y-4">
                  <div className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                    <p className="neo-microcopy">01 Intake</p>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      Submit a short brief, current workflow, or the constraint that is
                      blocking delivery.
                    </p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <p className="neo-microcopy">02 Review</p>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      Bento AIII reviews fit, delivery shape, and whether the problem should
                      be treated as product, systems, or workflow work.
                    </p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <p className="neo-microcopy">03 Follow-up</p>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      If the fit is good, the next step is a scoped conversation rather than a
                      generic sales chain.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
