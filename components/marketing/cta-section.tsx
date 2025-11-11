import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CtaSection() {
  return (
    <section className="bg-background py-20 sm:py-32">
      <div className="container max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/90 to-primary px-8 py-16 shadow-2xl sm:px-16">
          {/* Background pattern */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.background/20),transparent)]" />

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to ship faster?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90">
              Join thousands of developers who are building their SaaS products with Swift Launch.
              Start your 14-day free trial today.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/register">
                <Button size="lg" variant="secondary" className="w-full gap-2 shadow-lg sm:w-auto">
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/80">
              No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
