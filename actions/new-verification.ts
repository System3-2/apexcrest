'use server';
import { prisma } from '@/lib/prisma';
import { getVerificationTokenByToken } from '@/data/verification-token';

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: 'Token does not exist' };
  }

  const hasExpired = new Date(existingToken.expires) > new Date();

  if (hasExpired) {
    return { error: 'Token has expired' };
  }

  const existingUser = await prisma.user.findUnique({
    where: { email: existingToken.email }
  });

  if (!existingUser) {
    return { error: 'User does not exist' };
  }
  await prisma.user.update({
    where: { email: existingUser.email },
    data: {
      emailVerified: true,
      email: existingToken.email
    }
  });
  await prisma.verificationToken.delete({
    where: { email: existingToken.email }
  });

  return { success: 'Email verified' };
};
