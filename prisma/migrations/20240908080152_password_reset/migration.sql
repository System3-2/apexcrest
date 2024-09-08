-- CreateTable
CREATE TABLE "PasswordResetSchema" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PasswordResetSchema_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PasswordResetSchema_email_key" ON "PasswordResetSchema"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordResetSchema_token_key" ON "PasswordResetSchema"("token");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordResetSchema_email_token_key" ON "PasswordResetSchema"("email", "token");
