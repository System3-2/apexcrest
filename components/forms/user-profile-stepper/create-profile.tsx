'use client';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { profileSchema } from '@/lib/validations/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator
} from '@/components/ui/input-otp';
import { FormField } from '@/components/ui/form';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import * as z from 'zod';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { useCurrentUser } from '@/hooks/use-current-user';
import { toast } from 'sonner';
import { updateProfile } from '@/actions/settings';

type FormData = z.infer<typeof profileSchema>;

export const CreateProfileOne = () => {
  const [isLoading, setIsLoading] = useState(false);
  const title = 'Update Your Profile';
  const description =
    'To update your profile, we first need some basic information about you.';
  const user = useCurrentUser();

  const form = useForm<FormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email
    }
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = form;

  const processForm = (data: z.infer<typeof profileSchema>) => {
    console.log('data ==>', data);
    // api call and reset
    updateProfile(data)
      .then((res) => {
        if (res.error) {
          toast.error('Error', {
            description: res.error,
            position: 'bottom-center'
          });
        }
        if (res.success) {
          toast.success('Success', {
            description: res.success,
            position: 'bottom-center'
          });
        }
      })
      .catch(() => {
        toast.error('Error', {
          description: 'Something went wrong',
          position: 'bottom-center'
        });
      });
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
      </div>
      <Separator />
      <div className="grid gap-6">
        <form onSubmit={handleSubmit(processForm)}>
          <div className="grid md:grid-cols-2">
            <div className="grid gap-1">
              <Label className="" htmlFor="email">
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
              <Label className="" htmlFor="email">
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
          <div className="grid gap-4 gap-y-6 md:grid-cols-2">
            <div className="grid gap-1">
              <Label className="" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled
                {...register('email')}
              />
              {errors?.email && (
                <p className="px-1 text-xs text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="grid gap-1">
              <Label className="" htmlFor="password">
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
              {errors?.password?.message && (
                <p className="px-1 text-xs text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-4 gap-y-6 md:grid-cols-2">
            <div className="grid gap-1">
              <Label className="" htmlFor="newPassword">
                New Password
              </Label>
              <Input
                id="newPassword"
                placeholder="*********"
                type="password"
                autoCapitalize="none"
                autoComplete="new-password"
                autoCorrect="off"
                disabled={isLoading}
                {...register('newPassword')}
              />
              {errors?.newPassword?.message && (
                <p className="px-1 text-xs text-red-600">
                  {errors.newPassword.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid gap-4 gap-y-6 md:grid-cols-2">
            <div className="grid gap-1">
              <Label className="" htmlFor="pin">
                New Pin
              </Label>
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
          </div>

          <div className="grid gap-4 gap-y-6 pt-4 md:grid-cols-2">
            <button
              className={cn(buttonVariants())}
              disabled={isLoading}
              type="submit"
            >
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
