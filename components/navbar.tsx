'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, company } from '@/lib/site-content';

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-600 text-sm font-bold text-white shadow-soft">
            PH
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-slate-900">{company.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  active
                    ? 'bg-brand-100 text-brand-700'
                    : 'text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-sm'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="mailto:info@processheart.com"
            className="hidden text-sm font-medium text-slate-600 transition hover:text-slate-900 md:inline"
          >
            info@processheart.com
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Schedule a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
