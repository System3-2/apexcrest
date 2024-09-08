'use server';
import * as z from 'zod';
import { userSignupSchema } from '@/lib/validations/auth';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { generateUniqueAccountNumber } from '@/lib/generate-account-number';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { generateVerificationToken } from '@/lib/tokens';
import { sendVerificationEmail } from '@/lib/mail';

export async function register(data: z.infer<typeof userSignupSchema>) {
  const validatedFields = userSignupSchema.safeParse(data);
  if (!validatedFields.success) {
    return { error: 'Something went wrong' };
  }
  //@ts-ignore
  const { firstName, lastName, email, password, confirmPassword, pin } =
    validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const hashedPin = await bcrypt.hash(pin, 10);
  const accountNumber = await generateUniqueAccountNumber();

  try {
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        pin: hashedPin,
        accountNumber
      }
    });
    if (user) {
      const verificationToken = await generateVerificationToken(email)
      await sendVerificationEmail(verificationToken.email, verificationToken.token)
      return { success: 'Confirmation email sent' };
    }
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return { error: 'Account already exists' };
      }
    }
    return { error: 'Something went wrong' };
  }
  return { error: 'Something went wrong' };
}
