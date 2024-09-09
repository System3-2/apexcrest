'use server';
import { prisma } from '@/lib/prisma';
import { transferSchema } from '@/lib/validations/auth';
import { Decimal } from '@prisma/client/runtime/library';
import * as z from 'zod';
import bcrypt from 'bcryptjs';

export const transfer = async (
  data: z.infer<typeof transferSchema>,
  senderEmail: string | undefined
) => {
  if (!senderEmail) return { error: 'Uuh, something went wrong' };

  const validatedFields = transferSchema.safeParse(data);
  if (!validatedFields.success) return { error: 'Invalid fields' };

  const {
    accountNumber,
    amount: price,
    description,
    pin
  } = validatedFields.data;
  const amount = new Decimal(price);

  const sender = await prisma.user.findUnique({
    where: { email: senderEmail }
  });

  const reciever = await prisma.user.findUnique({
    where: { accountNumber: accountNumber }
  });

  if (!sender) return { error: 'Sender not found' };
  if (!reciever) return { error: 'Reciever not found' };

  // verify pin
  const isPinValid = await bcrypt.compare(pin, sender.pin);
  if (!isPinValid) return { error: 'Incorrect pin' };

  if (sender?.id === reciever?.id) {
    console.log(true);
    return { error: 'Sender cannot be reciever' };
  }

  if (amount.greaterThan(sender.accountBalance)) {
    console.log(true);
    return { error: 'Insufficient balance' };
  }

  if (!reciever) {
    console.log(true);
    return { error: 'Incorrect account number' };
  }

  // prisma transaction
  const transactionResult = await prisma.$transaction(async (prisma) => {
    // deduct from sender
    const updateSender = await prisma.user.update({
      where: { email: senderEmail },
      data: { accountBalance: { decrement: amount } }
    });

    // credit reciever
    const updateReciever = await prisma.user.update({
      where: { accountNumber: accountNumber },
      data: { accountBalance: { increment: amount } }
    });

    // Record transaction result
    const transaction = await prisma.transaction.create({
      data: {
        amount,
        description,
        senderId: updateSender?.id,
        receiverId: updateReciever.id
      }
    });

    return { transaction, updateSender, updateReciever };
  });
  return { success: 'Transaction successful!', transactionResult };
};
