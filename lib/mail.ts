import { Resend } from 'resend';

const resend = new Resend(process.env.EMAIL_API_SECRET);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${process.env.DEV_URL}/new-verification?token=${token}`;
  await resend.emails.send({
    from: 'mail@proximaheritagecrest.org',
    to: email,
    subject: 'Confirm your email',
    html: `
  <div>
 <p>Click <a href=${confirmLink}>here</a> to confirm email</p> </div>
 <p>Or copy the link below into your browser</p>
 <p>${confirmLink}</p>
  `
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${process.env.DEV_URL}/new-password?token=${token}`;

  await resend.emails.send({
    from: 'mail@proximaheritagecrest.org',
    to: email,
    subject: 'Reset your password',
    html: `
  <div>
 <p>Click <a href=${resetLink}>here</a> to reset your password</p> </div>
 <p>Or copy the link below into your browser</p>
 <p>${resetLink}</p>
  `
  });
};
