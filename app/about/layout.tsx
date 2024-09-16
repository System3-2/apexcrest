import { Footer } from '@/components/footer';
import { RootNavbar } from '@/components/layout/navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Proxima Heritage Crest',
  description:
    'Learn more about Proxima Heritage Crest, our values, mission, and commitment to providing innovative and reliable banking solutions for individuals and businesses.',
  keywords:
    'Proxima Heritage Crest, about us, banking values, financial mission, banking solutions, trusted bank, banking team',
  openGraph: {
    title: 'About Proxima Heritage Crest - Trusted Banking Solutions',
    description:
      'Discover the story and mission behind Proxima Heritage Crest. Learn about our commitment to providing secure and personalized banking services for individuals and businesses.',
    url: '/about',
    type: 'website'
  }
};

export default function AboutLayout({
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
