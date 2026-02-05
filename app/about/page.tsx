import { PageHero } from '@/components/page-hero';
import { AnimatedSection } from '@/components/animated-section';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Engineering impact through process-led transformation"
        description="Process Heart combines technical depth and execution discipline to solve operational challenges across complex industries."
      />
      <AnimatedSection className="section-shell pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Our Mission</h2>
            <p className="mt-3 text-slate-600">
              To help organizations achieve sustainable performance by improving systems, people capability, and digital
              maturity.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Our Approach</h2>
            <p className="mt-3 text-slate-600">
              Diagnose root causes, co-create practical roadmaps, and execute with transparent metrics and governance.
            </p>
          </article>
        </div>
      </AnimatedSection>
    </>
  );
}
