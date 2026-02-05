import { PageHero } from '@/components/page-hero';
import { services } from '@/lib/site-content';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Consulting services tailored to your operations"
        description="From strategy to implementation, we design and deliver transformations that improve reliability, quality, and growth."
      />
      <section className="section-shell pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="mt-3 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
