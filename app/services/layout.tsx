import { Footer } from '@/components/footer';
import { RootNavbar } from '@/components/layout/navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Banking Services - Proxima Heritage Crest',
  description:
    'Explore the wide range of banking services offered by Proxima Heritage Crest, including savings, loans, business banking, and more. Discover personalized financial solutions tailored to your needs.',
  keywords:
    'Proxima Heritage Crest, banking services, savings, loans, business banking, financial solutions, personalized banking, secure banking services',
  openGraph: {
    title: 'Banking Services - Proxima Heritage Crest',
    description:
      'From savings and loans to business banking, Proxima Heritage Crest offers secure and personalized banking services to meet your financial needs. Explore our services today.',
    url: '/services',
    type: 'website'
  }
};

export default function ServicesLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RootNavbar />
      {children}
      <Footer />
    </>
  );
}
