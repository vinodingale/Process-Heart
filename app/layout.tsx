import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://process-heart.vercel.app'),
  title: {
    default: 'Process Heart | Engineering Consulting',
    template: '%s | Process Heart'
  },
  description:
    'Process Heart is an engineering consulting company delivering operational excellence, digital transformation, and sustainable growth.',
  openGraph: {
    title: 'Process Heart',
    description:
      'Engineering consulting for operational excellence, digital process engineering, and transformation programs.',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
