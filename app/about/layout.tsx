import { Footer } from '@/components/footer';
import { RootNavbar } from '@/components/layout/navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proxima Heritage Crest - Modern Banking Solutions',
  description:
    'Proxima Heritage Crest offers innovative and reliable banking services to individuals and businesses. From savings and loans to business solutions, we help you achieve your financial goals with ease and security.',
  keywords:
    'Proxima Heritage Crest, banking, online banking, savings, loans, business banking, financial services, secure banking, personal finance, business solutions',
  openGraph: {
    title: 'Proxima Heritage Crest - Your Trusted Banking Partner',
    description:
      'Explore Proxima Heritage Crest for reliable and secure banking services that empower you to achieve financial success. Discover personalized banking solutions for individuals and businesses.',
    url: '',
    type: 'website',
    images: [
      {
        url: '',
        width: 800,
        height: 600,
        alt: 'Proxima Heritage Crest Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ProximaCrest',
    title: 'Proxima Heritage Crest - Modern Banking Solutions',
    description:
      'Proxima Heritage Crest provides secure, personalized banking solutions for individuals and businesses. Let us help you manage your finances efficiently.'
  }
};

export default async function AboutLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <RootNavbar />
      {children}
      <Footer />
    </main>
  );
}
