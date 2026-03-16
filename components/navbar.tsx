import { Briefcase } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

export default function Navbar() {
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
        <Link href='/sign-in'>
          <Button className='text-gray-700 hover:text-primary' variant='ghost'>
            Log In
          </Button>
        </Link>
        <Link href='/sign-up'>
          <Button className='bg-primary hover:bg-primary/90'>
            Start for free
          </Button>
        </Link>
      </div>
    </nav>
  )
}
