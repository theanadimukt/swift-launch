import type { Metadata } from 'next'
import { ThemeProvider } from '@/contexts/theme-context'

export const metadata: Metadata = {
  title: 'SwiftLaunch - Ship your startup in days, not weeks',
  description: 'The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app and make your first $ online fast.',
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}
