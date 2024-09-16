import { Footer } from '@/components/footer';
import { RootNavbar } from '@/components/layout/navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Help & Support - Proxima Heritage Crest',
  description:
    'Need assistance? Visit Proxima Heritage Crest’s help center for support with banking services, account issues, and general inquiries.',
  keywords:
    'Proxima Heritage Crest, help, customer support, banking assistance, account issues, FAQs, financial help, support center',
  openGraph: {
    title: 'Help & Support - Proxima Heritage Crest',
    description:
      'Get help and support for your banking needs. Find answers to frequently asked questions and solutions to common banking issues at Proxima Heritage Crest.',
    url: '/help',
    type: 'website'
  }
};

export default function HelpLayout({
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
