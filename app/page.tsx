import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
export default function Home() {
  return (
    <div className='flex min-w-[calc(100vh-64px)] '>
      <main className='flex-1'>
        <section className='container mx-auto px-4 py-32  '>
          <div className='mx-auto max-w-4xl text-center'>
            <h1 className='mb-6 text-6xl font-bold'>
              A better way to track your job application
            </h1>
            <p className='mb-10 text-xl'>
              Capture, organize and manage your job search in one place
            </p>
            <div className='flex flex-col gap-4 items-center'>
              <Link href='/sign-up'>
                <Button size='lg' className='h-12 px-8 text-lg font-medium'>
                  <p>Start for free!</p> <ArrowRight />
                </Button>
              </Link>
              <p className='text-muted-foreground mb-10 text-sm'>
                Fre forever. No credit card required
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
