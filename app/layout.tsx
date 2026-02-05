import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://process-heart.vercel.app'),
  title: {
    default: 'Process Heart | Enterprise Engineering Consulting',
    template: '%s | Process Heart'
  },
  description:
    'Process Heart delivers enterprise-grade engineering consulting, operational transformation, and digital process modernization.',
  keywords: ['Process Heart', 'engineering consulting', 'operations excellence', 'digital transformation'],
  openGraph: {
    title: 'Process Heart',
    description:
      'Enterprise consulting for process engineering, operational excellence, and sustainable value creation.',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
