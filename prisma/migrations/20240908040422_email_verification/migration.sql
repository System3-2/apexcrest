/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `verificationToken` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "verificationToken_token_key";

-- CreateIndex
CREATE UNIQUE INDEX "verificationToken_email_key" ON "verificationToken"("email");
