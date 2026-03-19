"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "@/lib/auth/auth-client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SignIn() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const result = await signIn.email({
        password,
        email,
      })
      if (result.error) {        
        setError(result.error.message ?? "Failed to sign in")
      } else {
        router.push("/dashboard")
      }
    } catch (error) {
      setError("An unexpected error occurred")
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className='flex max-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4'>
      <Card className='w-full max-w-md border-gray-200 shadow-lg'>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-2xl font-bold text-black'>
            Sign In
          </CardTitle>
          <CardDescription className='text-gray-600'>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <CardContent className='space-y-4'>
            {error && (
              <div className='bg-destructive/15 rounded-md text-sm text-destructive'>
                {error}
              </div>
            )}
            <div className='space-y-2'>
              <Label htmlFor='email' className='text-gray-700'>
                Email
              </Label>
              <Input
                id='email'
                type='email'
                placeholder='jogndoe@gmail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='border-gray-300 focus-visible:border-primary focus-visible:ring-primary/50'
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='password' className='text-gray-700'>
                Password
              </Label>
              <Input
                id='password'
                type='password'
                placeholder='********'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='border-gray-300 focus-visible:border-primary  focus-visible:ring-primary/50'
              />
            </div>
          </CardContent>
          <CardFooter className='flex flex-col space-y-4'>
            <Button
              type='submit'
              className='w-full bg-primary hover:bg-primary/90'
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>

            <p className='space-x-2 text-center text-sm text-gray-600'>
              <span>{"Don't have an account?"}</span>
              <Link
                href='/sign-up'
                className='font-medium hover:underline text-primary'
              >
                Sign Up
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
