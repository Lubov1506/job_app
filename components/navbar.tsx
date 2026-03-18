"use client"
import { Briefcase } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { getSession, signOut } from "@/lib/auth/auth"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { useSession } from "@/lib/auth/auth-client"
import SighOutButton from "./sign-out-btn"

export default function Navbar() {
  const { data: session } = useSession()
  return (
    <nav className='border-b border-gray-200 bg-white flex justify-between  sticky top-0'>
      <div className='container mx-auto flex h-16 items-center px-4'>
        <Link
          href='/'
          className='flex items-center gap-2 font-semibold text-primary '
        >
          <Briefcase />
          Job Tracker
        </Link>
      </div>
      <div className='flex items-center gap-2 px-2'>
        {session?.user ? (
          <>
            <Link href='/dashboard'>
              <Button
                className='text-gray-700 hover:text-black'
                variant='ghost'
              >
                Dashboard
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className='relative h-8 w-8 rounded-full'>
                <Avatar className='h-8 w-8'>
                  <AvatarFallback className='bg-primary text-white'>
                    {session.user.name[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56' align="end">
                <DropdownMenuGroup className='font-normal flex flex-col space-y-1'>
                  <DropdownMenuLabel className='text-sm font-medium leading-none'>
                    {session.user.name}
                  </DropdownMenuLabel>
                  <DropdownMenuLabel className='text-sm leading-none text-muted-foreground'>
                    {session.user.email}
                  </DropdownMenuLabel>
                </DropdownMenuGroup>
                <DropdownMenuGroup>
                  <SighOutButton />
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <>
            <Link href='/sign-in'>
              <Button
                className='text-gray-700 hover:text-primary bg-transparent '
                variant='ghost'
              >
                Log In
              </Button>
            </Link>
            <Link href='/sign-up'>
              <Button className=''>Start for free</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}
