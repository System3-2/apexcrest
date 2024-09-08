
import { Metadata } from "next"
import Link from "next/link"
import { UserResetForm } from "@/components/ui/user-reset-form"

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Reset your password",
}

export default function Reset() {
  return (
    <div className="flex h-screen flex-col items-center pt-32 md:pt-0 md:justify-center px-4">
      <div className="mx-auto flex w-full flex-col justify-center sm:w-1/4">
        <div className="flex flex-col text-center items-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Reset your password
          </h1>
          <p className="mt-2 text-center text-xs ">
            Enter the email address associated with your account and we'll send you a link to reset your password.
          </p>
        </div>
        <UserResetForm />
      </div>
    </div>
  )
}