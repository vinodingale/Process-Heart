import Link from 'next/link';
import { AnimatedSection } from '@/components/animated-section';
import { company, industries, services } from '@/lib/site-content';

const testimonials = [
  {
    quote:
      'Process Heart helped us redesign production governance and unlock significant throughput without capital-heavy expansion.',
    author: 'Operations Director, Industrial Manufacturing Group'
  },
  {
    quote:
      'Their cross-functional approach combined digital tools and on-ground coaching that accelerated adoption across teams.',
    author: 'Transformation Lead, Energy Enterprise'
  }
];

export default function Home() {
  return (
    <>
      <section className="section-shell relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.18),_transparent_45%)]" />
        <AnimatedSection className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Engineering Excellence</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Build resilient, high-performance operations with {company.name}.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            We partner with ambitious organizations to optimize processes, enable digital capabilities, and deliver
            measurable business outcomes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
            >
              Explore Services
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <AnimatedSection className="section-shell py-16">
        <div className="glass-card p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-slate-900">Company Introduction</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            {company.name} is a consulting partner focused on process engineering, operations excellence, and strategic
            transformation. Our teams combine industry expertise with data-driven execution to help organizations scale
            sustainably.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Services</h2>
          <p className="mt-3 text-slate-600">Outcome-led offerings built for modern engineering organizations.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-brand-700">{service.title}</h3>
              <p className="mt-3 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-16">
        <h2 className="text-3xl font-bold tracking-tight">Industries Served</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {industries.map((industry) => (
            <span key={industry} className="rounded-full bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
              {industry}
            </span>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-16">
        <h2 className="text-3xl font-bold tracking-tight">Why Choose Us</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {['Proven delivery framework', 'Experienced domain consultants', 'Data-driven transformation roadmap'].map(
            (point) => (
              <div key={point} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="font-semibold text-slate-900">{point}</p>
              </div>
            )
          )}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-16">
        <h2 className="text-3xl font-bold tracking-tight">Client Testimonials</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.author} className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-slate-700">“{testimonial.quote}”</p>
              <cite className="mt-4 block text-sm font-medium text-slate-500">{testimonial.author}</cite>
            </blockquote>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-16">
        <div className="rounded-3xl bg-gradient-to-r from-brand-700 to-brand-500 p-10 text-white">
          <h2 className="text-3xl font-bold">Ready to improve speed, quality, and resilience?</h2>
          <p className="mt-4 max-w-2xl text-brand-50">
            Partner with {company.name} to build robust operations and a future-ready transformation roadmap.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700"
          >
            Connect with us
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}
