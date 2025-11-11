import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/config/site"
import { EngagementChart } from "@/components/charts/engagement-chart"

const hero = (
  <section className="border-b border-border/60 bg-muted/30">
    <div className="container space-y-4 py-16">
      <Badge variant="secondary" className="w-fit">Our story</Badge>
      <h1 className="font-display text-h1 font-semibold md:text-display-2">
        Crafting marketing systems that feel bespoke without sacrificing velocity
      </h1>
      <p className="text-body-lg text-muted-foreground max-w-3xl">
        SwiftLaunch exists so marketing, product, and engineering teams can collaborate on one source of truth and ship
        faster together.
      </p>
    </div>
  </section>
)

export default function AboutPage() {
  return (
    <div className="pb-16">
      {hero}

      <section className="container grid gap-8 py-16 lg:grid-cols-3">
        {siteConfig.highlights.map((item) => (
          <Card key={item.label} className="border-border/70 bg-card/80">
            <CardHeader>
              <CardDescription>{item.label}</CardDescription>
              <CardTitle className="text-3xl">{item.value}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Built-in sections, analytics wiring, and form patterns mean less thrash for your launch team.
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="container grid gap-8 pb-16 lg:grid-cols-[3fr_2fr]">
        <Card className="border-border/70 bg-card/80">
          <CardHeader>
            <CardTitle>What we believe</CardTitle>
            <CardDescription>Opinionated defaults unlock creative energy.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Marketing teams deserve the same quality of tooling that product teams enjoy. SwiftLaunch ships with
              reusable sections, data-driven configuration, and analytics hooks so every experiment compounds.
            </p>
            <p>
              Instead of rebuilding pricing tables, testimonial sliders, or lead capture forms for every campaign, we
              encourage teams to work from one design system and evolve it together.
            </p>
          </CardContent>
        </Card>
        <EngagementChart />
      </section>
    </div>
  )
}
