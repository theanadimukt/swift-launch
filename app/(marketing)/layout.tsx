import type { ReactNode } from "react"
import type { Metadata } from "next"

import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
}

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex-1">{children}</main>
    </div>
  )
}
