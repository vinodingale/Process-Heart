import { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="section-shell py-16 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">{eyebrow}</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{title}</h1>
      <p className="mt-6 max-w-2xl text-lg text-slate-600">{description}</p>
      {children}
    </section>
  );
}
