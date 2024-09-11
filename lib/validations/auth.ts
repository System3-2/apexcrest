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
  accountNumber: z
    .string({
      invalid_type_error: 'Account number must be a number',
      required_error: 'Account number is required'
    })
    .length(10, { message: 'Account number must be at least 10' }),
  description: z.string(),
  pin: z.string()
});

export const profileSchema = z
  .object({
    firstName: z.optional(z.string()),
    lastName: z.optional(z.string()),
    email: z.optional(z.string().email()),
    pin: z.optional(z.string()),
    password: z.string().min(1, { message: 'Password required' }),
    newPassword: z
      .string()
      .optional()
      .refine((value) => {
        // If newPassword is provided, it must be at least 8 characters
        return !value || value.length >= 8;
      }, 'New password must be at least 8 characters long if provided')
  })
  .refine(
    (data) => {
      // if (data.password && !data.newPassword) {
      //   return false;
      // }
      if (data.newPassword && !data.password) {
        return false;
      }
      return true;
    },
    {
      message: 'Password must match',
      path: ['newPassword']
    }
  );
