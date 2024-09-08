'use server';
import { prisma } from '@/lib/prisma';

export const getTransactionsSummary = async (userId: number | undefined) => {
  if (!userId) return { error: 'No user specified' };

  if (!userId) return { error: 'No user specified' };

  const totalTransactions = await prisma.transaction.count({
    where: {
      OR: [{ senderId: userId }, { receiverId: userId }]
    }
  });

  const lastFiveTransactions = await prisma.transaction.findMany({
    where: {
      OR: [{ senderId: userId }, { receiverId: userId }]
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 5,
    include: {
      sender: true,
      receiver: true
    }
  });

  return { totalTransactions, lastFiveTransactions };
};
