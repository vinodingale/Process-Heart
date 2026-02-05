import { PageHero } from '@/components/page-hero';
import { services } from '@/lib/site-content';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="High-value services designed for enterprise complexity"
        description="Our service portfolio spans strategy, execution, and capability building to deliver transformation that sticks."
      />
      <section className="section-shell pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.title} className="panel p-8">
              <p className="text-sm font-semibold text-brand-700">0{index + 1}</p>
              <h2 className="font-display mt-3 text-2xl font-bold">{service.title}</h2>
              <p className="mt-4 leading-8 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
