import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary/20),transparent)]" />

      <div className="container max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Ship your SaaS in days, not months</span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Build Your SaaS{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              10x Faster
            </span>
          </h1>

          {/* Description */}
          <p className="mb-10 text-lg leading-8 text-muted-foreground sm:text-xl">
            The production-ready Next.js 16 starter kit with authentication, payments, database, and
            everything you need to launch your SaaS product.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/register">
              <Button size="lg" className="w-full gap-2 sm:w-auto">
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="#pricing">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Pricing
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-primary/20 to-primary/40"
                  />
                ))}
              </div>
              <span>1000+ developers</span>
            </div>
            <div className="hidden sm:block">•</div>
            <span className="hidden sm:inline">⭐️ 5.0 rating</span>
          </div>
        </div>

        {/* Hero Image/Demo */}
        <div className="mt-16 sm:mt-24">
          <div className="relative mx-auto max-w-5xl rounded-xl border border-border bg-muted/50 p-2 shadow-2xl">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
