/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/LzGqPR4UkN1
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
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const formatDate = (date: Date) => {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
  return formattedDate;
};

export function Receipt(data: any) {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: 'Print This Document',
    removeAfterPrint: true
  });

  return (
    <Card className="w-full max-w-2xl" id="receipt" ref={componentRef}>
      <CardHeader className="flex items-center justify-between bg-muted/50 px-6 py-4">
        <div className="flex items-center gap-2">
          <BanknoteIcon className="h-6 w-6" />
          <h2 className="text-lg font-semibold">Proxima Heritage Crest</h2>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            handlePrint(null, () => componentRef.current);
          }}
        >
          <PrinterIcon className="h-4 w-4" />
          <span className="sr-only">Print</span>
        </Button>
      </CardHeader>
      <CardContent className="px-6 py-4">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Date</span>
            <span>{formatDate(data.data.date)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Name</span>
            <span>
              {data.data.firstName} {data.data.lastName}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Amount</span>
            <span className="font-medium">-${data.data.amount}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Account Number</span>
            <span className="font-medium">
              {data.data.receiverAccountNumber}
            </span>
          </div>
          <Separator className="my-4" />
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Account Balance</span>
            <span className="font-medium">${data.data.accountBalance}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between bg-muted/50 px-6 py-4">
        <div className="text-sm text-muted-foreground">
          Proxima Heritage Crest | 123 Main St, Anytown USA | (555) 555-5555
        </div>
        <div className="text-sm text-muted-foreground">
          www.proximaheritagecrest.com
        </div>
      </CardFooter>
    </Card>
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

function PrinterIcon(props: any) {
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
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
    </svg>
  );
}
