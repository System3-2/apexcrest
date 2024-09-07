import NextAuth from 'next-auth';
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      accountNumber: string;
      role: 'ADMIN' | 'USER';
    } & DefaultSession['user'];
  }
}
