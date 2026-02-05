import { PageHero } from '@/components/page-hero';

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build impactful consulting careers"
        description="We are always looking for curious and driven professionals passionate about operational transformation."
      />
      <section className="section-shell pb-16">
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
          <p className="text-slate-600">Open roles will be listed here soon. Share your profile at info@processheart.com.</p>
        </div>
      </section>
    </>
  );
}
