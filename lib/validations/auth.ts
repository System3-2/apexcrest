import * as z from 'zod';

export const userAuthSchema = z.object({
  email: z.string().email(),
  password: z.string()
});

export const userSignupSchema = z
  .object({
    firstName: z.string().min(1, { message: 'First Name cannot be empty' }),
    lastName: z.string().min(1, { message: 'Last Name cannot be empty' }),
    email: z.string().email().trim(),
    password: z
      .string()
      .trim()
      .min(6, { message: 'Password must be at least 6 characters' })
      .regex(/\d/, { message: 'Password must contain at least one number' }),
    confirmPassword: z.string(),
    pin: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'] // path of error
  });

export const userResetSchema = z.object({
  email: z.string().email()
});

export const userNewPassowordSchema = z
  .object({
    password: z
      .string()
      .trim()
      .min(6, { message: 'Password must be at least 6 characters' })
      .regex(/\d/, { message: 'Password must contain at least one number' }),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'] // path of error
  });

export const transferSchema = z.object({
  amount: z.coerce
    .number({ invalid_type_error: 'Amount must be a number' })
    .min(10, { message: 'Amount must be at least $10' }),
  accountNumber: z.coerce
    .number({
      invalid_type_error: 'Account number must be a number',
      required_error: 'Account number is required'
    })
    .gte(10, { message: 'Account number must be at least 10' }),
  description: z.string(),
  pin: z.string()
});
