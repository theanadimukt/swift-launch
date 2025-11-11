import { ArrowRight, Check } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/config/site"

const hero = (
  <section className="border-b border-border/60 bg-gradient-to-b from-background to-muted/50">
    <div className="container space-y-6 py-16 text-center">
      <Badge variant="secondary" className="mx-auto w-fit">
        Pricing
      </Badge>
      <div className="space-y-4">
        <h1 className="font-display text-h1 font-semibold md:text-display-2">
          Plans that scale with every product launch
        </h1>
        <p className="text-body-lg text-muted-foreground">
          Start with the Starter kit and graduate to fully-managed support when the stakes get high.
        </p>
      </div>
    </div>
  </section>
)

export default function PricingPage() {
  const plans = siteConfig.pricingPlans

  return (
    <div className="pb-16">
      {hero}

      <section className="container grid gap-8 py-16 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`relative flex flex-col border-border/70 ${plan.highlight ? "ring-2 ring-amber-400" : ""}`}
          >
            {plan.highlight && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-xs font-semibold uppercase text-black">
                Most popular
              </span>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-semibold">
                  {plan.priceLabel ?? `$${plan.priceMonthly}`}
                </span>
                {!plan.priceLabel && <span className="text-muted-foreground">/month</span>}
              </div>
              <p className="text-sm text-muted-foreground">{plan.bestFor}</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.highlight ? "default" : "secondary"}>
                {plan.ctaLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      <section className="container grid gap-8 pb-16 lg:grid-cols-[2fr_3fr]">
        <Card className="border-border/70 bg-card/80">
          <CardHeader>
            <CardTitle>Need a custom engagement?</CardTitle>
            <CardDescription>We partner with revenue teams that need more than a static template.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>Book a collaborative session with our solutions team to design a launch roadmap tailored to your KPIs.</p>
            <ul className="space-y-2">
              <li>• Technical architecture review</li>
              <li>• Journey mapping workshop</li>
              <li>• Experiment backlog planning</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild>
              <a href="mailto:sales@swiftlaunch.dev">Talk with sales</a>
            </Button>
          </CardFooter>
        </Card>
        <Card className="border-border/70 bg-card/80">
          <CardHeader>
            <CardTitle>What teams ask before upgrading</CardTitle>
            <CardDescription>Three quick answers to help you choose.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-sm">
            {[
              {
                question: "Can we self-host the Starter plan?",
                answer: "Yes. Clone the repo, deploy to your infra, and upgrade later without rewriting sections.",
              },
              {
                question: "Do you support design hand-offs?",
                answer: "Growth and Scale plans include paired sessions with our design systems team for pixel-perfect hand-offs.",
              },
              {
                question: "How fast can we launch?",
                answer: "Teams typically launch in under two weeks with Growth. Scale engagements include dedicated engineering help.",
              },
            ].map((item) => (
              <div key={item.question}>
                <p className="font-semibold">{item.question}</p>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
