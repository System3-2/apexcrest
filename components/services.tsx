/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/APhiHPCYlsZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Judson } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'

judson({
  subsets: ['latin'],
  display: 'swap',
})

cormorant_garamond({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from 'next/link';

export function Services() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">
                Discover the Power of Proxima Heritage Crest
              </h1>
              <p className="text-lg text-primary-foreground md:text-xl">
                Experience the ultimate in banking services with Proxima
                Heritage Crest. Our innovative solutions and personalized
                approach will elevate your financial journey.
              </p>
              <Link
                href="/signup"
                className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-6 font-medium text-secondary-foreground transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                prefetch={false}
              >
                Get Started
              </Link>
            </div>
            <div className="hidden md:block">
              <img
                src="/banner.jpg"
                width="500"
                height="400"
                alt="Hero Image"
                className="rounded-xl"
                style={{ aspectRatio: '500/400', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
            Our Services
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-lg bg-card p-6 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-md bg-secondary p-3">
                  <CreditCardIcon className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Credit Cards</h3>
              </div>
              <p className="text-muted-foreground">
                Enjoy a wide range of credit card options tailored to your
                needs, with competitive rates and exclusive benefits.
              </p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-md bg-secondary p-3">
                  <SaveIcon className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Savings Accounts</h3>
              </div>
              <p className="text-muted-foreground">
                Grow your wealth with our high-yield savings accounts, designed
                to help you reach your financial goals.
              </p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-md bg-secondary p-3">
                  <CreditCardIcon className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Loans</h3>
              </div>
              <p className="text-muted-foreground">
                Access the financing you need with our competitive loan options,
                tailored to your unique financial situation.
              </p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-md bg-secondary p-3">
                  <CoinsIcon className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Investments</h3>
              </div>
              <p className="text-muted-foreground">
                Grow your wealth with our comprehensive investment solutions,
                designed to help you achieve your financial goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CoinsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  );
}

function CreditCardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function SaveIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
      <path d="M7 3v4a1 1 0 0 0 1 1h7" />
    </svg>
  );
}
