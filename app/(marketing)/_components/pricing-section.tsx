import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Shield, Users } from "lucide-react"

export function PricingSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <Badge variant="secondary" className="mb-4 bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border-yellow-500/30">Pricing</Badge>
        <h2 className="text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that fits your needs. One-time payment, lifetime access.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            name: "Starter",
            price: "$99",
            period: "one-time",
            description: "Perfect for indie developers and small projects",
            features: [
              "Complete Next.js 14 boilerplate",
              "TypeScript configuration",
              "Tailwind CSS + shadcn/ui",
              "Authentication system",
              "Basic payment integration",
              "Email templates",
              "Database setup",
              "6 months of updates"
            ],
            popular: false,
            cta: "Get Starter"
          },
          {
            name: "Pro",
            price: "$199",
            period: "one-time",
            description: "For serious developers building to scale",
            features: [
              "Everything in Starter",
              "Advanced dashboard templates",
              "Admin panel components",
              "Multi-tenant architecture",
              "Advanced analytics setup",
              "SEO optimization",
              "Priority support",
              "12 months of updates",
              "Deployment guides"
            ],
            popular: true,
            cta: "Get Pro"
          },
          {
            name: "Enterprise",
            price: "$399",
            period: "one-time",
            description: "For teams and agencies building multiple projects",
            features: [
              "Everything in Pro",
              "White-label license",
              "Custom integrations",
              "Team collaboration features",
              "Advanced security features",
              "Custom components library",
              "Dedicated support",
              "Lifetime updates",
              "1-on-1 setup call"
            ],
            popular: false,
            cta: "Get Enterprise"
          }
        ].map((plan, index) => (
          <Card key={index} className={`relative border border-border shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer bg-card ${plan.popular ? 'ring-2 ring-yellow-500 scale-105' : ''}`}>
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black font-semibold px-4 py-1 z-10 shadow-lg">
                Most Popular
              </Badge>
            )}
            <CardHeader className={`text-center ${plan.popular ? 'pt-8' : 'pt-6'}`}>
              <CardTitle className="text-2xl font-bold text-foreground mb-2">{plan.name}</CardTitle>
              <div className="mb-4">
                <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>
              <CardDescription className="text-base text-muted-foreground leading-relaxed">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                className={`w-full mb-6 ${plan.popular
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-black font-semibold shadow-lg'
                  : 'bg-muted hover:bg-muted/80 text-foreground hover:bg-foreground hover:text-background'
                } transition-all duration-300 group-hover:scale-105`}
                size="lg"
              >
                {plan.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <div className="space-y-3">
                <div className="text-sm font-semibold text-foreground mb-3">What&apos;s included:</div>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-base leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pricing Benefits */}
      <div className="mt-16 text-center">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Lifetime Access</h3>
            <p className="text-muted-foreground text-base">One-time payment, use forever. No recurring fees.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">30-Day Guarantee</h3>
            <p className="text-muted-foreground text-base">Not satisfied? Get your money back, no questions asked.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Community Support</h3>
            <p className="text-muted-foreground text-base">Join our Discord community of 5000+ developers.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
