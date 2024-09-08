'use client'

import { useCallback, useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { BeatLoader } from 'react-spinners'
import { useSearchParams } from "next/navigation"
import { newVerification } from "@/actions/new-verification"

export function VerificationCard() {
  const [isLoading, setIsLoading] = useState(true)
  const [isVerified, setIsVerified] = useState(false)
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const searchParams = useSearchParams()

  const token = searchParams.get("token")

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing token")
    }
    //@ts-ignore
    newVerification(token).then((data) => {
      setSuccess(data.success)
      setError(data.error)
    }).catch(() => {
      setError("Something went wrong")
    })
  }, [token])

  useEffect(() => {
    onSubmit()
  }, [onSubmit])
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Verify Email</CardTitle>
          <CardDescription>Please wait while we verify your email address.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center space-y-4">
          {(!error &&
            !success
          ) &&
            <>
              <div className="h-8 w-8 animate-spin text-primary" />
              <BeatLoader color="#5d32f5" />
            </>
          }
          {success && (

            <div className="flex flex-col items-center space-y-2">
              <CircleCheckIcon className="h-12 w-12 text-green-500" />
              <p className="text-lg font-medium">Email verified successfully!</p>
            </div>
          )}
          {error && (

            <div className="flex flex-col items-center space-y-2">
              <TriangleAlertIcon className="h-12 w-12 text-red-500" />
              <p className="text-lg font-medium">{error}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

function CircleCheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function TriangleAlertIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}