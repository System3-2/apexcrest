'use server';

import * as z from 'zod';
import { userResetSchema } from '@/lib/validations/auth';
import { prisma } from '@/lib/prisma';
import { generatePasswordResetToken } from '@/lib/tokens';
import { sendPasswordResetEmail } from '@/lib/mail';

export const reset = async (data: z.infer<typeof userResetSchema>) => {
  const validatedFields = userResetSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: 'Invalid email' };
  }

  const { email } = validatedFields.data;

  const existingUser = await prisma.user.findUnique({
    where: { email }
  });

  if (!existingUser) {
    return { error: 'Email not found' };
  }

  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );
  return { success: 'Reset Email sent!' };
};
