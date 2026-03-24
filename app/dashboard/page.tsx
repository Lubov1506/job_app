import KanbanBoard from "@/components/kanban-board"
import { getSession } from "@/lib/auth/auth"
import connectDB from "@/lib/db"
import { Board } from "@/lib/models"
import { redirect } from "next/navigation"
import { Suspense } from "react"

async function getBoard(userId: string) {
  "use cache"

  await connectDB()

  const boarDoc = await Board.findOne({
    userId: userId,
    name: "Job Hunt",
  }).populate({
    path: "columns",
    populate: {
      path: "jobApplications",
    },
  })
  if (!boarDoc) return null

  const board = JSON.parse(JSON.stringify(boarDoc))
  return board
}
async function DashboardPage() {
  const session = await getSession()
  const board = await getBoard(session?.user.id ?? "")

  if (!session?.user) {
    redirect("/sign-in")
  }

  return (
    <div className='min-h-screen bg-white'>
      <div className='container mx-auto p-6'>
        <div className='mb-6'>
          <h1>{board.name}</h1>
          <p>Track your job application</p>
        </div>
        <KanbanBoard board={board} userId={session.user.id} />
      </div>
    </div>
  )
}
export default async function Dashboard() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <DashboardPage />
    </Suspense>
  )
}
