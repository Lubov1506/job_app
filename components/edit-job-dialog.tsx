"use client"
import { Plus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import React, { useState } from "react"
import { updateJobApplication } from "@/lib/actions/job-application"
import { JobApplication } from "@/lib/models/models.types"

interface EditJobApplicationDialogProps {
  boardId?: string
  columnId?: string
  job: JobApplication
  isEdit: boolean
  onOpen: (isEdit: boolean) => void
}

export default function EditJobApplicationDialog({
  job,
  isEdit,
  onOpen,
}: EditJobApplicationDialogProps) {
  const [formData, setFormData] = useState({
    company: job.company,
    position: job.position,
    location: job.location || "",
    notes: job.notes || "",
    salary: job.salary || "",
    jobUrl: job.jobUrl || "",
    columnId: job.columnId || "",
    tags: job.tags?.join(", ") || "",
    description: job.description || "",
  })
  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault()
    try {
      const result = await updateJobApplication(job._id, {
        ...formData,
        tags: formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag.length > 0),
      })
      console.log(result)

      if (!result.error) {
        onOpen(false)
      }
    } catch (error) {
      console.error("Failed to move app")
      throw error
    }
  }

  return (
    <Dialog open={isEdit} onOpenChange={onOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit job application</DialogTitle>
          <DialogDescription>Track a new job app</DialogDescription>
        </DialogHeader>
        <form className='space-y-4' onSubmit={handleUpdate}>
          <div className='space-y-4'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='company'>Company *</Label>
                <Input
                  id='company'
                  required
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='position'>Position *</Label>
                <Input
                  id='position'
                  required
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })
                  }
                />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='location'>Location </Label>
                <Input
                  id='location'
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='salary'>Salary </Label>
                <Input
                  id='salary'
                  placeholder='e.g. $100K-$500k'
                  value={formData.salary}
                  onChange={(e) =>
                    setFormData({ ...formData, salary: e.target.value })
                  }
                />
              </div>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='jobUrl'>Job Url</Label>
              <Input
                id='jobUrl'
                placeholder='https://...'
                value={formData.jobUrl}
                onChange={(e) =>
                  setFormData({ ...formData, jobUrl: e.target.value })
                }
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='tags'>Tags (comma separated)*</Label>
              <Input
                id='tags'
                placeholder='JS, NodeJS, NextJS'
                value={formData.tags}
                onChange={(e) =>
                  setFormData({ ...formData, tags: e.target.value })
                }
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='description'>Description</Label>
              <Textarea
                rows={3}
                id='description'
                value={formData.description}
                placeholder='Description of the role ...'
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='notes'>Notes </Label>
              <Textarea
                id='notes'
                rows={4}
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
              />
            </div>
          </div>
          <DialogFooter className='flex flex-row justify-end gap-2'>
            <Button
              variant='outline'
              type='button'
              onClick={() => onOpen(false)}
            >
              Cancel
            </Button>
            <Button type='submit' variant='default'>
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
