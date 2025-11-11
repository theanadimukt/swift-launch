import {
  Database,
  Lock,
  CreditCard,
  Zap,
  Code2,
  TestTube2,
  Mail,
  Palette,
  Shield,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: Lock,
    title: 'Authentication',
    description: 'Auth.js (NextAuth v5) with GitHub & Google OAuth ready to use.',
  },
  {
    icon: Database,
    title: 'Database & ORM',
    description: 'PostgreSQL with Prisma ORM. Type-safe database queries out of the box.',
  },
  {
    icon: CreditCard,
    title: 'Stripe Integration',
    description: 'Accept payments, manage subscriptions, and handle webhooks seamlessly.',
  },
  {
    icon: Mail,
    title: 'Email Service',
    description: 'Send beautiful emails with Resend and React Email components.',
  },
  {
    icon: Palette,
    title: 'UI Components',
    description: 'Beautiful, accessible components with shadcn/ui and Tailwind CSS.',
  },
  {
    icon: TestTube2,
    title: 'Testing Ready',
    description: 'Unit tests with Vitest and E2E tests with Playwright configured.',
  },
  {
    icon: Zap,
    title: 'Next.js 16',
    description: 'Latest Next.js with App Router, Server Actions, and React 19.',
  },
  {
    icon: Code2,
    title: 'TypeScript',
    description: 'Fully typed codebase with strict mode for better developer experience.',
  },
  {
    icon: Shield,
    title: 'Production Ready',
    description: 'Docker, CI/CD, ESLint, Prettier, and security headers configured.',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-muted/30 py-20 sm:py-32">
      <div className="container max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to launch
          </h2>
          <p className="text-lg text-muted-foreground">
            Skip months of setup. Start with a production-ready foundation and focus on building
            your unique features.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="group border-border/50 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Tech Stack */}
        <div className="mt-20 text-center">
          <p className="mb-8 text-sm font-medium text-muted-foreground">
            BUILT WITH MODERN TECHNOLOGIES
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-muted-foreground">
            {['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'Tailwind CSS', 'Docker'].map((tech) => (
              <span
                key={tech}
                className="text-sm font-medium transition-colors hover:text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
