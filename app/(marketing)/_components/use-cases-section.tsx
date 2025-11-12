import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Globe, Smartphone, Database, CheckCircle } from "lucide-react"

export function UseCasesSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary dark:bg-primary text-white/20 dark:text-primary/80 dark:border-primary/30">Use Cases</Badge>
        <h2 className="text-4xl font-bold text-foreground mb-4">Perfect For Any Project</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          From startups to enterprise, SwiftLaunch adapts to your needs and scales with your growth
        </p>
      </div>

      {/* Main Use Cases Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          {
            icon: Rocket,
            title: "SaaS Applications",
            description: "Build scalable software-as-a-service platforms with subscription management",
            gradient: "from-purple-500 to-pink-500",
            features: ["User Authentication", "Payment Processing", "Analytics Dashboard"],
            popularity: "Most Popular"
          },
          {
            icon: Globe,
            title: "Landing Pages",
            description: "Create stunning marketing websites that convert visitors into customers",
            gradient: "from-blue-500 to-cyan-500",
            features: ["SEO Optimized", "Fast Loading", "Conversion Focused"],
            popularity: "High Converting"
          },
          {
            icon: Smartphone,
            title: "Mobile Apps",
            description: "Responsive designs that work perfectly on any device or screen size",
            gradient: "from-green-500 to-emerald-500",
            features: ["PWA Ready", "Touch Optimized", "Offline Support"],
            popularity: "Mobile First"
          },
          {
            icon: Database,
            title: "Admin Dashboards",
            description: "Powerful data management interfaces for complex business operations",
            gradient: "from-orange-500 to-red-500",
            features: ["Real-time Data", "Role Management", "Custom Reports"],
            popularity: "Enterprise Ready"
          }
        ].map((useCase, index) => (
          <Card key={index} className="relative overflow-hidden border border-border shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-card hover:scale-105">
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

            {/* Popularity Badge */}
            <div className="absolute top-4 right-4 z-10">
              <Badge className="bg-primary text-white text-black text-xs font-semibold px-2 py-1">
                {useCase.popularity}
              </Badge>
            </div>

            <CardHeader className="relative z-10 p-8">
              {/* Icon with Gradient */}
              <div className={`w-20 h-20 mb-6 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <useCase.icon className="h-10 w-10 text-white" />
              </div>

              {/* Content */}
              <CardTitle className="text-2xl font-bold text-foreground mb-4 text-center group-hover:text-primary/90 dark:group-hover:text-primary/80 transition-colors duration-300">
                {useCase.title}
              </CardTitle>

              <CardDescription className="text-base text-muted-foreground leading-relaxed text-center mb-6">
                {useCase.description}
              </CardDescription>

              {/* Features List */}
              <div className="space-y-2">
                {useCase.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardHeader>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full transform translate-x-16 translate-y-16"></div>
            <div className="absolute top-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-12 -translate-y-12"></div>
          </Card>
        ))}
      </div>

      {/* Industry Examples */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-semibold text-foreground mb-4">Trusted by Industries</h3>
        <p className="text-lg text-muted-foreground mb-8">
          See how different industries use SwiftLaunch to build amazing products
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          {
            industry: "FinTech",
            example: "Payment platforms, trading apps, digital wallets",
            icon: "💳",
            companies: ["Stripe", "PayPal", "Square"]
          },
          {
            industry: "HealthTech",
            example: "Telemedicine, patient portals, health tracking",
            icon: "🏥",
            companies: ["Teladoc", "23andMe", "Fitbit"]
          },
          {
            industry: "EdTech",
            example: "Learning platforms, course management, assessments",
            icon: "📚",
            companies: ["Coursera", "Udemy", "Khan Academy"]
          }
        ].map((industry, index) => (
          <Card key={index} className="bg-card border border-border hover:border-primary/30 shadow-md hover:shadow-lg transition-all duration-300 p-6">
            <div className="text-center">
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h4 className="text-xl font-semibold text-foreground mb-2">{industry.industry}</h4>
              <p className="text-muted-foreground mb-4 text-base leading-relaxed">{industry.example}</p>
              <div className="flex justify-center space-x-2 text-sm text-muted-foreground">
                {industry.companies.map((company, companyIndex) => (
                  <span key={companyIndex} className="bg-muted px-2 py-1 rounded text-xs">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-8 max-w-3xl mx-auto border border-primary/20 dark:border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-3">Ready to Build Your Project?</h3>
          <p className="text-muted-foreground mb-6 text-lg">
            Whether you&apos;re building a simple landing page or a complex SaaS platform, SwiftLaunch has everything you need to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary text-white/90 text-black font-semibold shadow-lg">
              <Rocket className="mr-2 h-4 w-4" />
              Start Building Now
            </Button>
            <Button variant="outline" className="border-primary text-primary/90 hover:bg-primary text-white hover:text-black dark:text-primary/80 dark:hover:text-black">
              <Globe className="mr-2 h-4 w-4" />
              View Examples
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
