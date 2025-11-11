import { Mail, MapPin, Phone } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/forms/contact-form"
import { siteConfig } from "@/config/site"

const hero = (
  <section className="border-b border-border/60 bg-gradient-to-b from-background to-muted/50">
    <div className="container space-y-4 py-16">
      <Badge variant="secondary" className="w-fit">Contact</Badge>
      <h1 className="font-display text-h1 font-semibold md:text-display-2">
        Let’s plan your next launch together
      </h1>
      <p className="text-body-lg text-muted-foreground max-w-3xl">
        Our solutions team responds within one business day. Share context below or email us directly.
      </p>
    </div>
  </section>
)

const contactIcons = {
  Sales: Mail,
  Support: Mail,
  Phone: Phone,
}

export default function ContactPage() {
  return (
    <div className="pb-16">
      {hero}

      <section className="container grid gap-8 py-16 lg:grid-cols-[2fr_3fr]">
        <div className="space-y-6">
          {siteConfig.contactChannels.map((channel) => {
            const Icon = contactIcons[channel.label as keyof typeof contactIcons] ?? MapPin
            return (
              <Card key={channel.label} className="border-border/70 bg-card/80">
                <CardHeader className="flex flex-row items-center gap-3">
                  <Icon className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-base">{channel.label}</CardTitle>
                    <CardDescription>{channel.value}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  We route every request to the right specialist instantly so you get a focused response.
                </CardContent>
              </Card>
            )
          })}
          <Card className="border-border/70 bg-card/80">
            <CardHeader>
              <CardTitle>Visit us</CardTitle>
              <CardDescription>300 Market Street, San Francisco</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" /> Hybrid office hours Mon–Thu
            </CardContent>
          </Card>
        </div>
        <ContactForm />
      </section>
    </div>
  )
}
