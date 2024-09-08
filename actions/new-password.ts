'use server';

import { getPasswordResetTokenByToken } from '@/data/password-reset-token';
import { prisma } from '@/lib/prisma';
import { userNewPassowordSchema } from '@/lib/validations/auth';
import * as z from 'zod';
import bcrypt from 'bcryptjs';

export const newPassword = async (
  data: z.infer<typeof userNewPassowordSchema>,
  token?: string | null
) => {
  if (!token) {
    return { error: 'Missing token' };
  }

  const validatedFields = userNewPassowordSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: 'Invalid fields' };
  }

  const { password } = validatedFields.data;

  const existingToken = await getPasswordResetTokenByToken(token);

  if (!existingToken) {
    return { error: 'Invalid token' };
  }

  const hasExpired = new Date(existingToken.expires) > new Date();

  if (hasExpired) {
    return { error: 'Token has expired' };
  }

  const existingUser = await prisma.user.findUnique({
    where: { email: existingToken.email }
  });

  if (!existingUser) {
    return { error: 'Email does not exist' };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await prisma.user.update({
    where: { email: existingUser.email },
    data: { password: hashedPassword }
  });

  await prisma.passwordReset.delete({
    where: { email: existingToken.email }
  });

  return { success: 'Password updated'}
};
