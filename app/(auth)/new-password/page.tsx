
import { Metadata } from "next"
import Link from "next/link"
import { UserNewPassword } from "@/components/ui/user-new-password-form"

export const metadata: Metadata = {
  title: "New password",
  description: "Create your new password",
}

export default function NewPassword() {
  return (
    <div className="flex h-screen flex-col items-center pt-32 md:pt-0 md:justify-center px-4">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-1/4">
        <div className="flex flex-col space-y-2 text-center items-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create new password
          </h1>
        </div>
        <UserNewPassword />
      </div>
    </div>
  )
}