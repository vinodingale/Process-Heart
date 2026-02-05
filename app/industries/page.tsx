import { PageHero } from '@/components/page-hero';
import { industries } from '@/lib/site-content';

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries / Solutions"
        title="Sector-aware transformation solutions"
        description="Every engagement is adapted to operational realities, regulatory context, and competitive dynamics of your industry."
      />
      <section className="section-shell pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article key={industry} className="panel p-7">
              <h2 className="font-display text-xl font-bold text-slate-900">{industry}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Transformation programs tailored for strategic and operational imperatives in {industry.toLowerCase()}.
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
