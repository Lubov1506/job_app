"use client"

import { signOut } from "@/lib/auth/auth-client"
import { DropdownMenuItem } from "./ui/dropdown-menu"
import { useRouter } from "next/navigation"

export default function SighOutButton() {
  const router = useRouter()
  const handleSignOut = async () => {
    const result = await signOut()
    if (result.data) {
      router.push("/sign-in")
    } else {
      console.log("Sign out error")
    }
  }
  return <DropdownMenuItem onClick={handleSignOut}>Log out</DropdownMenuItem>
}
