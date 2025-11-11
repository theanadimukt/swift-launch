import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EngagementChart } from "@/components/charts/engagement-chart"
import { siteConfig } from "@/config/site"

export function StatsSection() {
  const brandName = siteConfig.name
  const highlightStats = siteConfig.highlights

  return (
    <section className="container mx-auto px-4 -mt-8 pb-12">
      <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
        <Card className="border-border/70 bg-card/80 shadow-2xl">
          <CardHeader className="flex flex-col gap-2">
            <Badge variant="secondary" className="w-fit">Momentum</Badge>
            <CardTitle className="text-3xl font-semibold">Launch impact in real time</CardTitle>
            <CardDescription>
              {brandName} tracks the exact signals your team needs so you know every marketing iteration is working.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {highlightStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/70 bg-background/60 p-4 shadow-inner"
              >
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-3xl font-semibold">{stat.value}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <EngagementChart />
      </div>
    </section>
  )
}
