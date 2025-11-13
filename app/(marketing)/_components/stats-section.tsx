import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Users, Rocket, Shield, Clock } from "lucide-react"

export function StatsSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-50/50 to-orange-50/50 dark:from-yellow-900/10 dark:to-orange-900/10 rounded-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

        <div className="relative z-10 py-16">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border-yellow-500/30">
              Trusted by Thousands
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Join the Community</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              SwiftLaunch is trusted by developers worldwide to build amazing products
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                number: "10K+",
                label: "Active Developers",
                icon: Users,
                color: "text-blue-600 dark:text-blue-400",
                bgColor: "bg-blue-100 dark:bg-blue-900/30"
              },
              {
                number: "50K+",
                label: "Projects Created",
                icon: Rocket,
                color: "text-green-600 dark:text-green-400",
                bgColor: "bg-green-100 dark:bg-green-900/30"
              },
              {
                number: "99.9%",
                label: "Uptime",
                icon: Shield,
                color: "text-purple-600 dark:text-purple-400",
                bgColor: "bg-purple-100 dark:bg-purple-900/30"
              },
              {
                number: "24/7",
                label: "Support",
                icon: Clock,
                color: "text-orange-600 dark:text-orange-400",
                bgColor: "bg-orange-100 dark:bg-orange-900/30"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <Card className="border border-border/50 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-6">
                  <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-foreground mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium text-base md:text-lg">
                    {stat.label}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">Loved by developers at</p>
            <div className="flex items-center justify-center space-x-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <div className="text-2xl font-bold text-muted-foreground">Google</div>
              <div className="text-2xl font-bold text-muted-foreground">Microsoft</div>
              <div className="text-2xl font-bold text-muted-foreground">Netflix</div>
              <div className="text-2xl font-bold text-muted-foreground">Spotify</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
