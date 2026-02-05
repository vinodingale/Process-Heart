import { PageHero } from '@/components/page-hero';

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the future of engineering transformation"
        description="Join a team that combines analytical excellence, operational empathy, and execution discipline."
      />
      <section className="section-shell pb-24">
        <div className="panel p-10 text-center">
          <p className="text-lg text-slate-600">
            We are growing. Open positions will be published soon. Share your profile at info@processheart.com.
          </p>
        </div>
      </section>
    </>
  );
}
