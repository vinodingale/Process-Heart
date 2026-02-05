import Link from 'next/link';
import { AnimatedSection } from '@/components/animated-section';
import { company, industries, services } from '@/lib/site-content';

const proofStats = [
  { value: '120+', label: 'Transformation initiatives supported' },
  { value: '18-30%', label: 'Typical productivity uplift' },
  { value: '40%', label: 'Faster execution cycle times' }
];

const testimonials = [
  {
    quote:
      'Process Heart helped us redesign operating governance, create visibility across plants, and unlock measurable gains in under two quarters.',
    author: 'COO, Multi-Site Industrial Business'
  },
  {
    quote:
      'Their consultants combined boardroom strategy and on-ground execution with exceptional discipline. Adoption rates improved significantly.',
    author: 'VP Transformation, Energy Enterprise'
  }
];

export default function Home() {
  return (
    <>
      <section className="section-shell section-padding relative overflow-hidden pb-20">
        <div className="absolute -left-32 -top-10 -z-10 h-72 w-72 rounded-full bg-brand-200/50 blur-3xl" />
        <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />

        <AnimatedSection className="grid items-end gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">Enterprise Engineering Consulting</p>
            <h1 className="font-display mt-7 text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Transform complex operations into a <span className="text-gradient">competitive advantage</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              {company.name} partners with leadership teams to deliver high-impact process transformation, digital
              modernization, and sustained operational excellence.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Book Executive Consultation
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
              >
                View Service Portfolio
              </Link>
            </div>
          </div>

          <div className="panel p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Impact Snapshot</p>
            <div className="mt-8 space-y-6">
              {proofStats.map((item) => (
                <div key={item.label} className="border-b border-slate-200 pb-5 last:border-b-0 last:pb-0">
                  <p className="font-display text-4xl font-bold text-slate-900">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      <AnimatedSection className="section-shell pb-10">
        <div className="panel grid gap-8 p-10 lg:grid-cols-[1fr_1.2fr]">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900">Who we are</h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            {company.name} is a specialized consulting partner for process-intensive organizations. We bring together
            operations strategy, engineering rigor, and digital enablement to help clients scale performance and make
            better decisions faster.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell section-padding">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Core Services</p>
            <h2 className="font-display mt-5 text-4xl font-bold tracking-tight">Where we create enterprise value</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group panel p-8 transition duration-500 hover:-translate-y-1.5 hover:shadow-soft"
            >
              <p className="text-sm font-semibold text-brand-700">0{index + 1}</p>
              <h3 className="mt-4 font-display text-2xl font-bold text-slate-900 transition group-hover:text-brand-700">
                {service.title}
              </h3>
              <p className="mt-4 text-slate-600 leading-7">{service.description}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell pb-24">
        <div className="rounded-3xl bg-slate-900 p-10 text-white sm:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">Industries / Solutions</p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Built for high-stakes sectors</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell pb-24">
        <h2 className="font-display text-4xl font-bold tracking-tight">Why enterprises choose us</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            'Board-to-shopfloor execution alignment',
            'Clear value realization governance',
            'Sustained capability transfer to client teams'
          ].map((point) => (
            <div key={point} className="panel p-7">
              <p className="font-semibold text-slate-900">{point}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell pb-24">
        <h2 className="font-display text-4xl font-bold tracking-tight">Client perspective</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.author} className="panel p-8">
              <p className="text-lg leading-8 text-slate-700">“{testimonial.quote}”</p>
              <cite className="mt-6 block text-sm font-semibold not-italic text-slate-500">{testimonial.author}</cite>
            </blockquote>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell pb-10">
        <div className="rounded-3xl bg-gradient-to-r from-brand-700 via-brand-600 to-accent-600 px-10 py-12 text-white sm:px-14">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Let&apos;s engineer your next leap in performance</h2>
          <p className="mt-4 max-w-3xl text-brand-50">
            Speak with our team to define a practical transformation roadmap for your operations, technology, and
            leadership priorities.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand-700"
          >
            Talk to Process Heart
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}
