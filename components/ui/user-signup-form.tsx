'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { cn } from '@/lib/utils';
import { userSignupSchema } from '@/lib/validations/auth';
import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from './label';
import { Icons } from '../icons';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator
} from '@/components/ui/input-otp';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { FormField } from '@/components/ui/form';
import { register as signup } from '@/actions/register';
import { FormError } from '../forms/form-error';
import { FormSuccess } from '../forms/form-success';
import { toast } from 'sonner';
import Link from 'next/link';

interface UserSignupFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userSignupSchema>;

export function UserSignupForm({ className, ...props }: UserSignupFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(userSignupSchema)
  });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [, startTransition] = React.useTransition();
  const [success, setSuccess] = React.useState<string | undefined>('');
  const [error, setError] = React.useState<string | undefined>('');

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    const res = signup(data);
    let success = (await res).success;
    let err = (await res).error;
    if (err) {
      toast.error('Error', {
        description: err,
        position: 'bottom-center'
      });
    }
    setSuccess(success);
    if (success) {
      toast.success('Success', {
        description: success,
        position: 'bottom-center'
      });
    }
    setError(err);
    setIsLoading(false);
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid gap-2 md:grid-cols-2">
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                First Name
              </Label>
              <Input
                id="firstName"
                placeholder="John"
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isLoading}
                {...register('firstName')}
              />
              {errors?.firstName && (
                <p className="px-1 text-xs text-red-600">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                Last Name
              </Label>
              <Input
                id="lastName"
                placeholder="Doe"
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isLoading}
                {...register('lastName')}
              />
              {errors?.lastName && (
                <p className="px-1 text-xs text-red-600">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register('email')}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="*********"
              type="password"
              autoCapitalize="none"
              autoComplete="new-password"
              autoCorrect="off"
              disabled={isLoading}
              {...register('password')}
            />
            {errors?.password && (
              <p className="px-1 text-xs text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              placeholder="*********"
              type="password"
              autoCapitalize="none"
              autoComplete="new-password"
              autoCorrect="off"
              disabled={isLoading}
              {...register('confirmPassword')}
            />
            {errors?.confirmPassword && (
              <p className="px-1 text-xs text-red-600">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="grid gap-1">
            <FormField
              control={control}
              name="pin"
              render={({ field }) => (
                <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} {...field}>
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
          <div className="grid gap-1">
            {error && <FormError message={error} />}
            {success && <FormSuccess message={success} />}
          </div>
          <Link
            href="/login"
            className="hover:text-brand text-xs underline underline-offset-4"
          >
            Already have an account? Login
          </Link>
          <button
            className={cn(buttonVariants())}
            disabled={isLoading}
            type="submit"
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Get started
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
      </div>
    </div>
  );
}
