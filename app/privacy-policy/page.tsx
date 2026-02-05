import { PageHero } from '@/components/page-hero';
import { company } from '@/lib/site-content';

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Privacy and data handling"
        description="Learn how Process Heart manages information shared through this website and business communication channels."
      />
      <section className="section-shell pb-24">
        <article className="panel max-w-4xl p-10">
          <p className="leading-8 text-slate-600">
            {company.name} collects information voluntarily submitted through contact forms, email, or direct business
            communication. This information is used only for responding to requests and improving service quality.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            We do not sell personal information. For any requests related to personal data, contact us at {company.email}.
          </p>
        </article>
      </section>
    </>
  );
}
