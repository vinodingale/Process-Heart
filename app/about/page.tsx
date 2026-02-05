import { AnimatedSection } from '@/components/animated-section';
import { PageHero } from '@/components/page-hero';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Process Heart"
        title="A consulting firm engineered for measurable transformation"
        description="We combine deep industry context with system thinking to translate strategic intent into operational outcomes."
      />
      <AnimatedSection className="section-shell pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="panel p-8">
            <h2 className="font-display text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Enable organizations to deliver stronger, more resilient performance through process excellence, digital
              maturity, and leadership alignment.
            </p>
          </article>
          <article className="panel p-8">
            <h2 className="font-display text-2xl font-bold">Our Method</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Diagnose operational constraints, prioritize value pools, implement with governance rigor, and embed
              capability so impact sustains after engagement.
            </p>
          </article>
        </div>
      </AnimatedSection>
    </>
  );
}
