import { Plus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Button } from "./ui/button"

interface CreateJobApplicationDialogProps {
  boardId: string
  columnId: string
}
export default function CreateJobApplicationDialog({
  boardId,
  columnId,
}: CreateJobApplicationDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>
          <Plus />
          Add job
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add job application</DialogTitle>
          <DialogDescription>Track a new job app</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
