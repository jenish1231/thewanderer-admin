import { useState } from "react"
import { FormField } from "@/components/common/FormField"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetBody,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"

interface InviteAdminSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function InviteAdminSheet({ open, onOpenChange }: InviteAdminSheetProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // ponytail: no-op until the admin invite API exists
    onOpenChange(false)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Invite admin</SheetTitle>
          <SheetDescription>Send an invitation email to grant admin access.</SheetDescription>
        </SheetHeader>
        <SheetBody>
          <form id="invite-admin-form" onSubmit={handleSubmit} className="flex flex-col gap-5">
            <FormField label="Full name" htmlFor="admin-name">
              <Input id="admin-name" placeholder="Sara Nomvete" value={name} onChange={(e) => setName(e.target.value)} />
            </FormField>
            <FormField label="Email address" htmlFor="admin-email" hint="They'll receive an invite link at this address.">
              <Input
                id="admin-email"
                type="email"
                placeholder="sara@thewanderer.co"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormField>
          </form>
        </SheetBody>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button type="submit" form="invite-admin-form">Send invite</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
