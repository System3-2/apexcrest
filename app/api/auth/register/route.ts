import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hash } from 'bcryptjs';
import { userSignupSchema } from '@/lib/validations/auth';
import { generateUniqueAccountNumber } from '@/lib/generate-account-number';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = userSignupSchema.parse(body);

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email }
    });

    const users = await prisma.user.findMany();
    console.log(users);

    if (existingUser) {
      return Response.json('An account already exists', {
        status: 400
      });
    }

    // Hash the password
    const hashedPassword = await hash(data.password, 10);

    // Generate a unique 10-digit account number
    const accountNumber = await generateUniqueAccountNumber();

    // Create the user
    const user = await prisma.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hashedPassword,
        pin: data.pin,
        accountNumber
      }
    });

    return new Response('User registered successfully', {
      status: 201
    });
  } catch (error) {
    console.error(error);
    return Response.json('Something went wrong', {
      status: 400
    });
  }
}
