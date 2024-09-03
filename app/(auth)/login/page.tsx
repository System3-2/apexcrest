import { Metadata } from "next"
import Link from "next/link"
import { UserAuthForm } from "@/components/ui/user-login-form"

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
}

export default function Login() {
  return (
    <div className="flex h-screen flex-col items-center pt-32 md:pt-0 md:justify-center px-4">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-1/4">
        <div className="flex flex-col space-y-2 text-center items-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
        </div>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/signup"
            className="hover:text-brand underline underline-offset-4"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}