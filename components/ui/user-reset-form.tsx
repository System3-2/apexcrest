'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React, { HTMLAttributes, useState } from "react"
import * as z from 'zod'
import { userResetSchema } from "@/lib/validations/auth"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Icons } from "../icons"
import { reset } from "@/actions/reset"
import { FormError } from "../forms/form-error"
import { FormSuccess } from "../forms/form-success"

interface UserResetFormProps extends React.HTMLAttributes<HTMLDivElement> { }
type FormData = z.infer<typeof userResetSchema>

export function UserResetForm({ className, ...props }: UserResetFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(userResetSchema)
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")

  const onSubmit = (data: FormData) => {
    setIsLoading(true)
    reset(data)
    .then((res) => {
      setSuccess(res.success)
      setError(res.error)
    }).catch(() => {
      setError("Something went wrong")
    })
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col items-center justify-center  py-12 px-4 ">
      <div className="mx-auto w-full max-w-md space-y-8">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label htmlFor="email" className="sr-only">
              Email address
            </Label>
            <Input id="email" type="email" autoComplete="email" required placeholder="Email address"
              {...register("email")}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
            <div className="">
              {error && <FormError message={error} />}
              {success && <FormSuccess message={success} />}
            </div>
          <Button type="submit" className="w-full">
            {isLoading && (

              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Reset password
          </Button>
        </form>
        <div className="flex justify-center">
          <Link
            href="/login"
            className="text-sm font-medium "
            prefetch={false}
          >
            Back to login
          </Link>
        </div>
      </div>
    </div>
  )
}