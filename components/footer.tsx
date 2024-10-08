/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/02phTLEMxSP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-muted py-6">
      <div className="container flex max-w-7xl items-center justify-between">
        <div className="text-sm text-muted-foreground">
          &copy; 2024 Proxima Heritage Crest
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/terms" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline" prefetch={false}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
