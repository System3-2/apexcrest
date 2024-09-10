/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/PQ7xHGbn9hk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Eczar } from 'next/font/google'
import { Caudex } from 'next/font/google'

eczar({
  subsets: ['latin'],
  display: 'swap',
})

caudex({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from 'next/link';

export function About() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        <section className="w-full bg-primary py-12 text-primary-foreground md:py-24 lg:py-32 xl:py-48">
          <div className="container flex flex-col items-center px-4 text-center md:px-6">
            <BanknoteIcon className="h-12 w-12" />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Proxima Heritage Crest
            </h1>
            <p className="mt-4 max-w-[700px] text-lg">
              Trusted by generations, committed to your financial well-being.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter">
                  Our History
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Proxima Heritage Crest was founded in 1902 with the mission of
                  providing exceptional financial services to the local
                  community. Over the past century, we have grown to become a
                  trusted institution, serving generations of families and
                  businesses with integrity and dedication.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter">
                  Our Values
                </h2>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckIcon className="mr-2 h-6 w-6 text-primary" />
                    <span>
                      Integrity: We are committed to honesty and ethical
                      behavior in all our dealings.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="mr-2 h-6 w-6 text-primary" />
                    <span>
                      Community: We believe in supporting the communities we
                      serve and making a positive impact.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="mr-2 h-6 w-6 text-primary" />
                    <span>
                      Excellence: We strive for excellence in all aspects of our
                      work, from customer service to financial management.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-center text-3xl font-bold tracking-tighter">
              Our Services
            </h2>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center text-center">
                <UserIcon className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-bold">Personal Banking</h3>
                <p className="mt-2 text-muted-foreground">
                  Comprehensive personal banking solutions to meet your
                  financial needs.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BriefcaseIcon className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-bold">Business Banking</h3>
                <p className="mt-2 text-muted-foreground">
                  Tailored banking services to support the growth and success of
                  your business.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <CoinsIcon className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-bold">Wealth Management</h3>
                <p className="mt-2 text-muted-foreground">
                  Comprehensive wealth management solutions to help you achieve
                  your financial goals.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter">
                  Community Involvement
                </h2>
                <p className="mt-4 text-muted-foreground">
                  At Proxima Heritage Crest, we believe in giving back to the
                  communities we serve. Through our charitable initiatives and
                  volunteer programs, we strive to make a positive impact and
                  support the causes that are important to our customers and
                  neighbors.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-start">
                  <HandshakeIcon className="mr-4 h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Charitable Giving</h3>
                    <p className="mt-2 text-muted-foreground">
                      We proudly support local and national charities through
                      financial donations and employee volunteer efforts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <UsersIcon className="mr-4 h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Volunteer Programs</h3>
                    <p className="mt-2 text-muted-foreground">
                      Our employees are encouraged to volunteer their time and
                      skills to make a difference in our communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function BanknoteIcon(props: any) {
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
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  );
}

function BriefcaseIcon(props: any) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CheckIcon(props: any) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
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

function HandshakeIcon(props: any) {
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
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </svg>
  );
}

function UserIcon(props: any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
