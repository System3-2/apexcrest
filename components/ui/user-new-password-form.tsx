
'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { cn } from '@/lib/utils';
import { userNewPassowordSchema } from '@/lib/validations/auth';
import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from './label';
import { Icons } from '../icons';
import { login } from '@/actions/login';
import { FormSuccess } from '../forms/form-success';
import { FormError } from '../forms/form-error';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { newPassword } from '@/actions/new-password';

interface UserNewPassowordProps extends React.HTMLAttributes<HTMLDivElement> { }

type FormData = z.infer<typeof userNewPassowordSchema>;

export function UserNewPassword({ className, ...props }: UserNewPassowordProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(userNewPassowordSchema)
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<string | undefined>('');
  const [error, setError] = React.useState<string | undefined>('');
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    newPassword(data, token)
      .then((res) => {
        setSuccess(res?.success)
        setError(res?.error)

      })
    setIsLoading(false);
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Password
            </Label>
            <Input
              id="password"
              placeholder="********"
              type="password"
              autoCapitalize="none"
              autoComplete="email"
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
              id="cofirmPassword"
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
            <div className="grid gap-1">
              {error && <FormError message={error} />}
              {success && <FormSuccess message={success} />}
            </div>
          </div>
          <Link
            href="/login"
            className="hover:text-brand underline underline-offset-4 text-xs"
          >
            Login
          </Link>
          <button
            className={cn(buttonVariants())}
            disabled={isLoading}
            type="submit"
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Submit
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
