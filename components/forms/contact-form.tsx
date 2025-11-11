"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      ;(e.target as HTMLFormElement).reset()
    }, 3000)
  }

  return (
    <Card className="border-border/70 bg-card/80 shadow-lg">
      <CardHeader>
        <CardTitle>Send us a message</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you shortly</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" name="firstName" placeholder="John" required disabled={isSubmitting} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" name="lastName" placeholder="Doe" required disabled={isSubmitting} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company (optional)</Label>
            <Input id="company" name="company" placeholder="Acme Inc." disabled={isSubmitting} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Tell us about your project..."
              required
              disabled={isSubmitting}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : isSubmitted ? "Message sent!" : "Send message"}
          </Button>

          {isSubmitted && (
            <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 text-sm text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800">
              Thank you for your message! We'll get back to you within one business day.
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
