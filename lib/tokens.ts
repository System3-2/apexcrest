import { getVerificationTokenByEmail } from '@/data/verification-token';
import { v4 as uuidv4, v4 } from 'uuid';
import { prisma } from './prisma';
import { getPasswordResetTokenByEmail } from '@/data/password-reset-token';

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 + 1000);

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await prisma.verificationToken.delete({
      //@ts-ignore
      where: { id: existingToken.id }
    });
  }

  const verificationToken = await prisma.verificationToken.create({
    data: {
      email,
      token,
      expires
    }
  });
  return verificationToken;
};

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 + 1000);

  const existingToken = await getPasswordResetTokenByEmail(email);
  if (existingToken) {
    await prisma.passwordReset.delete({
      where: { email: email }
    });
  }

  const passwordResetToken = await prisma.passwordReset.create({
    data: {
      email,
      token,
      expires
    }
  })
  return passwordResetToken;
};
