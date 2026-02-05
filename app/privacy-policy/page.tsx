import { PageHero } from '@/components/page-hero';
import { company } from '@/lib/site-content';

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="How we handle information"
        description="This page outlines the privacy practices followed by Process Heart for website visitors and business communication."
      />
      <section className="section-shell pb-16">
        <article className="prose max-w-none rounded-2xl border border-slate-200 bg-white p-8 prose-headings:text-slate-900 prose-p:text-slate-600">
          <p>
            {company.name} collects only the information voluntarily shared via our contact channels. We use this data
            to respond to inquiries and improve service delivery.
          </p>
          <p>
            We do not sell personal information. If you need support regarding your data or communications, contact us
            at {company.email}.
          </p>
        </article>
      </section>
    </>
  );
}
