import { PageHero } from '@/components/page-hero';
import { industries } from '@/lib/site-content';

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Solutions aligned with sector-specific realities"
        description="We support operational improvement and digital enablement across diverse process-heavy industries."
      />
      <section className="section-shell pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article key={industry} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-slate-900">{industry}</h2>
              <p className="mt-2 text-sm text-slate-600">End-to-end transformation programs designed for {industry.toLowerCase()}.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
