import { PageHero } from '@/components/page-hero';
import { company } from '@/lib/site-content';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let&apos;s discuss your transformation priorities"
        description="Reach out to our team to schedule a discovery call and explore collaboration opportunities."
      />
      <section className="section-shell pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Contact Details</h2>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>Email: {company.email}</li>
              <li>Phone: {company.phone}</li>
              <li>Location: {company.location}</li>
            </ul>
          </div>
          <form className="rounded-2xl border border-slate-200 bg-white p-6" aria-label="Contact form">
            <h2 className="text-xl font-semibold">Send a Message</h2>
            <p className="mt-2 text-sm text-slate-500">This is a placeholder form ready for backend integration.</p>
            <div className="mt-4 space-y-3">
              <input className="w-full rounded-lg border border-slate-300 p-3" placeholder="Name" aria-label="Name" />
              <input className="w-full rounded-lg border border-slate-300 p-3" placeholder="Email" aria-label="Email" />
              <textarea
                className="h-28 w-full rounded-lg border border-slate-300 p-3"
                placeholder="How can we help?"
                aria-label="Message"
              />
              <button className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
