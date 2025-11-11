import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const plans = [
  {
    name: 'Free',
    price: 0,
    description: 'Perfect for trying out the platform',
    features: [
      'Basic authentication',
      'Up to 100 users',
      'Community support',
      'Basic analytics',
      '1 GB storage',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: 29,
    description: 'Best for growing businesses',
    features: [
      'Everything in Free',
      'Unlimited users',
      'Priority support',
      'Advanced analytics',
      'Custom domain',
      '10 GB storage',
      'API access',
      'Team collaboration',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    description: 'For large organizations',
    features: [
      'Everything in Pro',
      'Dedicated support',
      'SLA guarantee',
      'Advanced security',
      'Custom integrations',
      'Unlimited storage',
      'White-label options',
      'Training & onboarding',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-background py-20 sm:py-32">
      <div className="container max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your needs. All plans include 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col ${
                plan.popular ? 'border-primary shadow-lg' : 'border-border/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <Badge className="px-4 py-1">Most Popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>All plans include SSL certificate, automatic backups, and 99.9% uptime guarantee.</p>
        </div>
      </div>
    </section>
  )
}
