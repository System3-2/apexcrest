import NextAuth from 'next-auth';
import authConfig from './auth.config';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from './lib/prisma';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  callbacks: {
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await prisma.user.findUnique({
        where: { email: token.email as string }
      });
      if (!existingUser) return token;
      token.firstName = existingUser.firstName;
      token.lastName = existingUser.lastName;
      token.accountNumber = existingUser.accountNumber;
      token.role = existingUser.role;
      token.accountBalance = existingUser.accountBalance;
      token.id = existingUser.id;
      return token;
    },
    async session({ token, session }) {
      if (
        token.role &&
        token.firstName &&
        token.lastName &&
        token.accountNumber &&
        token.id &&
        session.user
      ) {
        session.user.role = token.role as 'ADMIN' | 'USER';
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
        session.user.accountNumber = token.accountNumber as string;
        session.user.accountBalance = token.accountBalance as number;
        //@ts-ignore
        session.user.id = token.id as number;
      }
      return session;
    },
    async signIn({ user, account }) {
      if (account?.provider !== 'credentials') return true;
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email as string }
      });
      if (!existingUser?.emailVerified) return false;
      return true;
    }
  },
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' }
});
