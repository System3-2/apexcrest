import Providers from '@/components/layout/providers';
import { Toaster } from '@/components/ui/sonner';
import '@uploadthing/react/styles.css';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Inter } from 'next/font/google';
import './globals.css';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

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

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={`${inter.className} `} suppressHydrationWarning={true}>
        <NextTopLoader showSpinner={false} />
        <Providers>
          <SessionProvider session={session}>
            <Toaster richColors />
            {children}
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
