'use client';
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/mHHtGBhfLkz
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
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator
} from '@/components/ui/input-otp';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import React, { useState } from 'react';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { Input } from '@/components/ui/input';
import * as z from 'zod';
import { transferSchema } from '@/lib/validations/auth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormField } from './ui/form';
import { Icons } from './icons';

interface TransferFormProps extends React.HTMLAttributes<HTMLDivElement> {}
type FormData = z.infer<typeof transferSchema>;

export function TransferForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch
  } = useForm<FormData>({
    resolver: zodResolver(transferSchema)
  });
  const [showPinModal, setShowPinModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // Watch the form fields
  const watchedAmount = watch('amount');
  const watchedAccountNumber = watch('accountNumber');
  const watchedDescription = watch('description');
  const watchedPin = watch('pin');

  const allFieldsFilled =
    watchedAmount && watchedAccountNumber && watchedDescription && watchedPin;

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    console.log({ data });
    setIsLoading(false);
  };

  const openModal = () => {
    if (!errors.amount && !errors.accountNumber && !errors.description) {
      setShowPinModal(true);
    }
  };
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Transfer Money</CardTitle>
        <CardDescription>Send money to another account.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              placeholder="$0.00"
              {...register('amount')}
              disabled={isLoading}
            />
            {errors?.amount && (
              <p className="px-1 text-xs text-red-600">
                {errors.amount.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="account">Account Number</Label>
            <Input
              id="account"
              placeholder="Enter account number"
              {...register('accountNumber')}
              disabled={isLoading}
            />
            {errors?.accountNumber && (
              <p className="px-1 text-xs text-red-600">
                {errors.accountNumber.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Add a description"
              {...register('description')}
              disabled={isLoading}
            />
            {errors?.description && (
              <p className="px-1 text-xs text-red-600">
                {errors.description.message}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          {!allFieldsFilled && (
            <Button
              onClick={() => {
                openModal();
              }}
              type="button"
            >
              Submit
            </Button>
          )}
        </CardFooter>
        {showPinModal && (
          <Dialog open={showPinModal} onOpenChange={setShowPinModal}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Enter PIN</DialogTitle>
                <DialogDescription>
                  Please enter your 4-digit PIN to complete the transfer.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <FormField
                  control={control}
                  name="pin"
                  render={({ field }) => (
                    <InputOTP
                      maxLength={6}
                      pattern={REGEXP_ONLY_DIGITS}
                      {...field}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSeparator />

                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                      </InputOTPGroup>
                      {errors?.pin && (
                        <p className="px-1 text-xs text-red-600">
                          {errors.pin.message}
                        </p>
                      )}
                    </InputOTP>
                  )}
                />
              </div>
              <DialogFooter>
                <Button type="button" onClick={() => setShowPinModal(false)}>
                  Confirm
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
        {allFieldsFilled && (
          <CardFooter className="flex justify-center">
            <Button type="submit">
              {isLoading && (
                <Icons.spinner className="mx-auto h-4 w-full animate-spin" />
              )}
              Transfer
            </Button>
          </CardFooter>
        )}
      </form>
    </Card>
  );
}
