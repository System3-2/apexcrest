import { prisma } from '@/lib/prisma';

/**
 * Generates a unique 10-digit account number.
 * @returns {Promise<string>} A unique 10-digit account number.
 */
export async function generateUniqueAccountNumber(): Promise<string> {
  let isUnique = false;
  let accountNumber = '';

  while (!isUnique) {
    // Generate a random 10-digit number as a string
    accountNumber = Math.floor(
      1000000000 + Math.random() * 9000000000
    ).toString();

    // Check if the account number already exists
    const existingUser = await prisma.user.findUnique({
      where: { accountNumber }
    });

    if (!existingUser) {
      isUnique = true;
    }
    // If exists, the loop continues to generate a new number
  }

  return accountNumber;
}
