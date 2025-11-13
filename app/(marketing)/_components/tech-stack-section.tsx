import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Zap, Shield, Code, CheckCircle, Rocket, Star } from "lucide-react"

export function TechStackSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <Badge variant="secondary" className="mb-4 bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border-yellow-500/30">Technology Stack</Badge>
        <h2 className="text-4xl font-bold text-foreground mb-4">Built with the Best</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Powered by industry-leading technologies and frameworks for modern web development
        </p>

        {/* Tech Stack Experts */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <img src="/images/avatar.png" alt="Tech Expert" className="w-14 h-14 rounded-full border-2 border-blue-200 object-cover shadow-lg" />
          <div className="text-left">
            <p className="text-base font-semibold text-foreground">Curated by Experts</p>
            <p className="text-base text-muted-foreground">Every technology in SwiftLaunch is carefully chosen for performance, developer experience, and scalability.</p>
          </div>
        </div>
      </div>

      {/* Main Technologies Grid - Featured */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
        {[
          {
            name: "Next.js 14",
            description: "React framework with App Router",
            icon: Zap,
            features: ["Server Components", "App Router", "Static Generation"]
          },
          {
            name: "TypeScript",
            description: "Type-safe JavaScript development",
            icon: Shield,
            features: ["Type Safety", "IntelliSense", "Error Prevention"]
          },
          {
            name: "Tailwind CSS",
            description: "Utility-first CSS framework",
            icon: Code,
            features: ["Responsive Design", "Custom Components", "Dark Mode"]
          }
        ].map((tech, index) => (
          <Card key={index} className="relative overflow-hidden bg-card border border-border shadow-xl hover:shadow-2xl group hover:scale-105 transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-foreground">{tech.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2">
                {tech.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-base text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-500/5 rounded-full transform -translate-x-12 translate-y-12"></div>
          </Card>
        ))}
      </div>

      {/* Supporting Technologies */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-semibold text-foreground mb-4">Plus Many More...</h3>
        <p className="text-muted-foreground mb-8">Complete ecosystem of modern development tools</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 max-w-7xl mx-auto">
        {[
          { name: "shadcn/ui", icon: "🧩", color: "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700" },
          { name: "Prisma", icon: "🔺", color: "bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50" },
          { name: "NextAuth", icon: "🔐", color: "bg-green-50 dark:bg-green-900/30 hover:bg-green-100 dark:hover:bg-green-900/50" },
          { name: "Stripe", icon: "💳", color: "bg-purple-50 dark:bg-purple-900/30 hover:bg-purple-100 dark:hover:bg-purple-900/50" },
          { name: "Vercel", icon: "▲", color: "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700" },
          { name: "Framer Motion", icon: "🎭", color: "bg-pink-50 dark:bg-pink-900/30 hover:bg-pink-100 dark:hover:bg-pink-900/50" },
          { name: "React Hook Form", icon: "📋", color: "bg-orange-50 dark:bg-orange-900/30 hover:bg-orange-100 dark:hover:bg-orange-900/50" },
          { name: "Zod", icon: "✅", color: "bg-teal-50 dark:bg-teal-900/30 hover:bg-teal-100 dark:hover:bg-teal-900/50" }
        ].map((tech, index) => (
          <div key={index} className="text-center group cursor-pointer">
            <div className="w-28 h-28 bg-card border border-border hover:border-yellow-500/50 rounded-2xl shadow-md hover:shadow-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
              <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{tech.icon}</span>
            </div>
            <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              {tech.name}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-8 max-w-2xl mx-auto border border-yellow-200 dark:border-yellow-500/20">
          <h3 className="text-2xl font-bold text-foreground mb-3">Modern Stack, Proven Results</h3>
          <p className="text-muted-foreground mb-6">
            Every technology in SwiftLaunch is carefully chosen for performance, developer experience, and scalability.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Rocket className="h-4 w-4 text-green-500" />
              <span>Production Ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>Industry Standard</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-blue-500" />
              <span>High Performance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
