import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Shield, Users, Star, Zap, CheckCircle, Globe, Database, Smartphone } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <Badge variant="secondary" className="mb-4 bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border-yellow-500/30">Features</Badge>
        <h2 className="text-4xl font-bold text-foreground mb-4">Everything You Need</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Built with modern technologies and best practices to help you ship faster
        </p>
      </div>

      {/* Featured Highlights */}
      <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
        {[
          {
            title: "Lightning Fast",
            description: "Built on Next.js 14 with App Router for optimal performance and SEO",
            icon: Rocket,
            gradient: "from-blue-500 to-cyan-500",
            features: ["Server Components", "Edge Runtime", "Static Generation"]
          },
          {
            title: "TypeScript Ready",
            description: "Full TypeScript support with type safety and excellent developer experience",
            icon: Shield,
            gradient: "from-indigo-500 to-purple-500",
            features: ["Type Safety", "IntelliSense", "Auto-completion"]
          },
          {
            title: "Radix UI Components",
            description: "Beautiful, accessible components built with Radix UI and Tailwind CSS",
            icon: Users,
            gradient: "from-emerald-500 to-teal-500",
            features: ["Accessibility", "Customizable", "Dark Mode"]
          }
        ].map((feature, index) => (
          <Card key={index} className="relative overflow-hidden border-0 bg-card shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105">
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
            <CardHeader className="relative z-10 p-8">
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                {feature.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground text-lg leading-relaxed mb-6">
                {feature.description}
              </CardDescription>
              <div className="space-y-2">
                {feature.features.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-base text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Additional Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            title: "Modern Design System",
            description: "Clean, modern design that looks great on all devices",
            icon: Star,
            color: "text-pink-600 dark:text-pink-400",
            bgColor: "bg-pink-100 dark:bg-pink-900/30"
          },
          {
            title: "Easy Customization",
            description: "Flexible components and styling that adapts to your brand",
            icon: Zap,
            color: "text-yellow-600 dark:text-yellow-400",
            bgColor: "bg-yellow-100 dark:bg-yellow-900/30"
          },
          {
            title: "Production Ready",
            description: "Optimized for production with best practices and performance",
            icon: CheckCircle,
            color: "text-green-600 dark:text-green-400",
            bgColor: "bg-green-100 dark:bg-green-900/30"
          },
          {
            title: "SEO Optimized",
            description: "Built-in SEO best practices for better search rankings",
            icon: Globe,
            color: "text-blue-600 dark:text-blue-400",
            bgColor: "bg-blue-100 dark:bg-blue-900/30"
          },
          {
            title: "Database Integration",
            description: "Seamless database integration with Prisma ORM",
            icon: Database,
            color: "text-purple-600 dark:text-purple-400",
            bgColor: "bg-purple-100 dark:bg-purple-900/30"
          },
          {
            title: "Mobile Responsive",
            description: "Perfect responsive design for all screen sizes",
            icon: Smartphone,
            color: "text-indigo-600 dark:text-indigo-400",
            bgColor: "bg-indigo-100 dark:bg-indigo-900/30"
          }
        ].map((feature, index) => (
          <Card key={index} className="border border-border/50 bg-card/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 group hover:scale-105 p-6">
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <div className="flex-1">
                <CardTitle className="text-lg font-semibold text-foreground mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
