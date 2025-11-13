import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Users, ArrowRight } from "lucide-react"

export function FaqSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <Badge variant="secondary" className="mb-4 bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border-yellow-500/30">FAQ</Badge>
        <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Got questions about pricing? We've got answers.
        </p>

        {/* Customer Support Team */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <div className="flex -space-x-3">
            <img src="/images/avatar.png" alt="Support Team" className="w-12 h-12 rounded-full border-3 border-background object-cover shadow-lg" />
            <img src="/images/avatar.png" alt="Support Team" className="w-12 h-12 rounded-full border-3 border-background object-cover shadow-lg" />
            <img src="/images/avatar.png" alt="Support Team" className="w-12 h-12 rounded-full border-3 border-background object-cover shadow-lg" />
          </div>
          <div className="text-left">
            <p className="text-base font-semibold text-foreground">Our Support Team</p>
            <p className="text-base text-muted-foreground">Ready to help you succeed</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {[
            {
              question: "Is this a one-time payment?",
              answer: "Yes! Pay once and use SwiftLaunch forever. No monthly subscriptions or hidden fees. You own the code and can use it for as many projects as your plan allows.",
              icon: "💳"
            },
            {
              question: "Do I get source code access?",
              answer: "Absolutely! You get full access to all source code and can modify it however you want. The code is clean, well-documented, and follows industry best practices.",
              icon: "💻"
            },
            {
              question: "What if I'm not satisfied?",
              answer: "We offer a 30-day money-back guarantee. If you're not happy with SwiftLaunch for any reason, we'll refund your purchase - no questions asked.",
              icon: "✅"
            },
            {
              question: "How often do you update SwiftLaunch?",
              answer: "We release updates monthly with new features, bug fixes, security patches, and the latest Next.js improvements. Stay ahead with the latest web development trends.",
              icon: "🔄"
            },
            {
              question: "Can I use this for client projects?",
              answer: "Yes! All plans include a commercial license. Pro and Enterprise plans allow unlimited projects. Build websites for your clients without any restrictions.",
              icon: "🏢"
            },
            {
              question: "Do you provide support?",
              answer: "Yes! All plans include community support through our Discord server. Pro and Enterprise customers get priority email support with faster response times.",
              icon: "🛟"
            },
            {
              question: "What technologies are included?",
              answer: "SwiftLaunch includes Next.js 14, TypeScript, Tailwind CSS, shadcn/ui components, Prisma ORM, NextAuth.js, Stripe integration, and many more modern tools.",
              icon: "⚡"
            },
            {
              question: "Is there a refund policy?",
              answer: "We offer a 30-day money-back guarantee on all purchases. If SwiftLaunch doesn't meet your expectations, contact us for a full refund within 30 days.",
              icon: "💰"
            }
          ].map((faq, index) => (
            <Card key={index} className="group bg-card border border-border/50 hover:border-yellow-500/30 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardHeader className="pb-0">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 dark:bg-yellow-500/20 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {faq.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-foreground leading-tight group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                      {faq.question}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4 pl-16">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-8 max-w-2xl mx-auto border border-yellow-200 dark:border-yellow-500/20">
          <div className="mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Users className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Join our community of 5000+ developers or reach out to our support team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-2 border-yellow-500 text-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 hover:text-black dark:text-yellow-400 dark:hover:text-black font-semibold">
              <Users className="mr-2 h-4 w-4" />
              Join Discord Community
            </Button>
            <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold shadow-lg">
              Contact Support
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
