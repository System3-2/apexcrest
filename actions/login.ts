'use server';

import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';
import * as z from 'zod';
import { userAuthSchema } from '@/lib/validations/auth';
import { signIn } from '@/auth';

export async function login(data: z.infer<typeof userAuthSchema>) {
  const validatedFields = userAuthSchema.safeParse(data);

  if (!validatedFields) {
    return { error: 'Invalid fields' };
  }

  //@ts-ignore
  const { email, password } = validatedFields.data;
  try {
    await signIn('credentials', {
      email,
      password,
      redirect: true,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    });
  } catch (error) {
    if (error instanceof AuthError) {
      // Check if error is an instance of AuthError
      if (error instanceof AuthError) {
        if (error.type === 'CredentialsSignin') {
          return { error: 'Invalid credentials' };
        }
      }
      // Fallback error message for unhandled errors
      return { error: 'Uhh! something went wrong' };
    }
    throw error;
  }
}
