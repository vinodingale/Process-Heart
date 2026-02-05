import { PageHero } from '@/components/page-hero';
import { company } from '@/lib/site-content';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation with our consulting team"
        description="Discuss your operating priorities, strategic challenges, and transformation goals with Process Heart experts."
      />
      <section className="section-shell pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="panel p-8">
            <h2 className="font-display text-2xl font-bold">Contact Information</h2>
            <ul className="mt-5 space-y-3 leading-8 text-slate-600">
              <li>Email: {company.email}</li>
              <li>Phone: {company.phone}</li>
              <li>Location: {company.location}</li>
            </ul>
          </div>
          <form className="panel p-8" aria-label="Contact form">
            <h2 className="font-display text-2xl font-bold">Send an Inquiry</h2>
            <p className="mt-2 text-sm text-slate-500">Form ready for backend/API integration.</p>
            <div className="mt-5 space-y-3">
              <input className="w-full rounded-xl border border-slate-300 bg-white p-3" placeholder="Name" aria-label="Name" />
              <input className="w-full rounded-xl border border-slate-300 bg-white p-3" placeholder="Email" aria-label="Email" />
              <textarea
                className="h-32 w-full rounded-xl border border-slate-300 bg-white p-3"
                placeholder="How can we help?"
                aria-label="Message"
              />
              <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
