import Link from 'next/link';
import { company, navLinks } from '@/lib/site-content';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="section-shell py-16">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">{company.name}</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              Enterprise engineering and operations consulting to unlock measurable performance, resilience, and
              transformation at scale.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Navigate</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-300 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>{company.email}</li>
              <li>{company.phone}</li>
              <li>{company.location}</li>
              <li>
                <Link href="/privacy-policy" className="transition hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
