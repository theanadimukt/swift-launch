import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Clock, Zap } from "lucide-react"

export function ComparisonSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <Badge variant="secondary" className="mb-4 bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border-yellow-500/30">Why Choose SwiftLaunch</Badge>
        <h2 className="text-4xl font-bold text-foreground mb-4">SwiftLaunch vs. Building from Scratch</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Building from Scratch - Time Breakdown */}
        <div className="relative">
          <Card className="border border-red-500/30 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/40 dark:to-orange-950/40 backdrop-blur-sm p-8">
            <div className="text-center mb-8">
              <Clock className="h-12 w-12 text-red-500 dark:text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-2">Building from Scratch</h3>
              <p className="text-red-600 dark:text-red-200/80 text-lg">Time you&apos;ll spend on setup instead of features</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                { task: "Setting up Next.js + TypeScript", time: "6 hrs" },
                { task: "Configuring Tailwind + UI components", time: "8 hrs" },
                { task: "Authentication & user management", time: "12 hrs" },
                { task: "Database setup & migrations", time: "4 hrs" },
                { task: "API routes & error handling", time: "6 hrs" },
                { task: "Email templates & notifications", time: "5 hrs" },
                { task: "Payment integration (Stripe)", time: "8 hrs" },
                { task: "SEO optimization & meta tags", time: "3 hrs" },
                { task: "Testing & bug fixes", time: "10 hrs" },
                { task: "Deployment & CI/CD setup", time: "4 hrs" },
                { task: "Security hardening", time: "6 hrs" },
                { task: "Documentation & setup guides", time: "4 hrs" },
                { task: "Debugging configuration issues", time: "∞ hrs" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center text-red-700 dark:text-red-200 text-base">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 dark:bg-red-400 rounded-full mr-3"></div>
                    {item.task}
                  </span>
                  <span className="text-red-600 dark:text-red-300 font-semibold">{item.time}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-red-300 dark:border-red-400/30 pt-6 text-center">
              <div className="text-3xl font-bold text-red-600 dark:text-red-300 mb-2">= 76+ hours</div>
              <div className="text-red-700 dark:text-red-200 flex items-center justify-center">
                <span>of setup headaches</span>
                <div className="ml-2 text-red-500 dark:text-red-400">😵‍💫</div>
              </div>
            </div>
          </Card>
        </div>

        {/* With SwiftLaunch */}
        <div className="relative pt-6">
          <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white font-semibold px-4 py-1 z-10 shadow-lg">
            Recommended
          </Badge>
          <Card className="border border-green-500/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/40 dark:to-emerald-950/40 backdrop-blur-sm p-8">
            <div className="text-center mb-8">
              <Zap className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-2">With SwiftLaunch</h3>
              <p className="text-green-600 dark:text-green-200/80 text-lg">Focus on what matters - your unique features</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                { task: "Clone SwiftLaunch repository", time: "2 min" },
                { task: "Install dependencies", time: "3 min" },
                { task: "Configure environment variables", time: "5 min" },
                { task: "Deploy to production", time: "10 min" },
                { task: "Customize brand colors & content", time: "30 min" },
                { task: "Add your unique features", time: "∞ hrs" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center text-green-700 dark:text-green-200 text-base">
                  <span className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mr-3" />
                    {item.task}
                  </span>
                  <span className="text-green-600 dark:text-green-300 font-semibold">{item.time}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-green-300 dark:border-green-400/30 pt-6 text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-300 mb-2">= 50 minutes</div>
              <div className="text-green-700 dark:text-green-200 flex items-center justify-center">
                <span>to production-ready app</span>
                <div className="ml-2 text-green-600 dark:text-green-400">🚀</div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-100 dark:bg-green-500/10 rounded-xl border border-green-200 dark:border-green-500/20">
              <div className="text-center text-green-700 dark:text-green-200">
                <div className="text-lg font-semibold mb-1">Time Saved:</div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-300">75+ hours</div>
                <div className="text-sm text-green-600 dark:text-green-300/80">That&apos;s almost 2 weeks of work!</div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="text-center mt-12">
        <div className="text-muted-foreground mb-4 flex items-center justify-center">
          <span>⬇️ There&apos;s an easier way</span>
        </div>
        <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
          Skip the Setup, Start Building <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
