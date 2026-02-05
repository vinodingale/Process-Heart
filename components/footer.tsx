import Link from 'next/link';
import { company } from '@/lib/site-content';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-200">
      <div className="section-shell grid gap-8 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{company.name}</h3>
          <p className="mt-3 text-sm text-slate-300">
            Engineering better operations through process intelligence, execution rigor, and digital enablement.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>{company.email}</li>
            <li>{company.phone}</li>
            <li>{company.location}</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white">
                Careers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
