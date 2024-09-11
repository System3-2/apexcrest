'use server';
import { prisma } from '@/lib/prisma';
import { profileSchema } from '@/lib/validations/auth';
import { currentUser } from '@/lib/auth';
import bcrypt from 'bcryptjs';
import * as z from 'zod';

export const updateProfile = async (data: z.infer<typeof profileSchema>) => {
  const validatedFields = profileSchema.safeParse(data);

  if (!validatedFields.success) return { error: 'Invalid fields' };

  const { email, firstName, lastName, password, pin, newPassword } =
    validatedFields.data;

  const user = await currentUser();

  if (!user) return { error: 'Unauthorized' };

  const dbUser = await prisma.user.findUnique({
    where: { email: user.email }
  });

  if (!dbUser) return { error: 'Unauthorized' };

  if (password && firstName && dbUser.password) {
    console.log(true);
    const pwMatches = await bcrypt.compare(password, dbUser.password);
    if (!pwMatches) {
      return { error: 'Password incorrect' };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('hashedPassword ==>', hashedPassword);
    data.password = hashedPassword;
  }
  if (password && lastName && dbUser.password) {
    console.log(true);
    const pwMatches = await bcrypt.compare(password, dbUser.password);
    if (!pwMatches) {
      return { error: 'Password incorrect' };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('hashedPassword ==>', hashedPassword);
    data.password = hashedPassword;
  }

  if (password && newPassword && dbUser.password) {
    console.log(true);
    const pwMatches = await bcrypt.compare(password, dbUser.password);
    if (!pwMatches) {
      return { error: 'Password incorrect' };
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    console.log('hashedPassword ==>', hashedPassword);
    data.password = hashedPassword;
  }
  if (pin && password) {
    const pwMatches = await bcrypt.compare(password, dbUser.password);
    if (!pwMatches) {
      return { error: 'Password incorrect' };
    }
    const hashedPin = await bcrypt.hash(pin, 10);
    console.log('hashedPassword ==>', hashedPin);
    data.pin = hashedPin;
    data.pin = hashedPin;
  }

  console.log({ data });
  const up = await prisma.user.update({
    where: { email: dbUser.email },
    data: {
      firstName,
      lastName,
      email,
      pin: data.pin,
      password: data.password
    }
  });
  console.log({ up });

  return { success: 'Profile updated successfully' };
};
