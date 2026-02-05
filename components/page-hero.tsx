import { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="section-shell section-padding pb-14">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="font-display mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
      {children}
    </section>
  );
}
