import Credentials from 'next-auth/providers/credentials';
import type { NextAuthConfig } from 'next-auth';
import { prisma } from './lib/prisma';
import bcrypt from 'bcryptjs';

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials;
        const user = await prisma.user.findUnique({
          where: { email: email as string },
          select: {
            email: true,
            firstName: true,
            lastName: true,
            accountNumber: true,
            password: true
          }
        });
        if (!user) {
          return null
        }
        const pwMatches = await bcrypt.compare(
          password as string,
          user.password
        );

        if (!pwMatches) {
          return null;
        }
        return user;
      }
    })
  ]
} satisfies NextAuthConfig;
