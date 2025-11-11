import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/config/site"

export default function BlogIndexPage() {
  const hero = (
    <section className="border-b border-border/60 bg-muted/30">
      <div className="container space-y-4 py-16">
        <Badge variant="secondary" className="w-fit">Insights</Badge>
        <h1 className="font-display text-h1 font-semibold md:text-display-2">
          Lessons from shipping high-performing marketing sites
        </h1>
        <p className="text-body-lg text-muted-foreground max-w-3xl">
          Actionable guides on pricing strategy, conversion design, and creating a seamless collaboration loop between
          marketing and engineering.
        </p>
      </div>
    </section>
  )

  return (
    <div className="pb-16">
      {hero}
      <div className="container grid gap-8 py-16 md:grid-cols-2">
        {siteConfig.blogPosts.map((post) => (
          <Card key={post.slug} className="flex flex-col border-border/70 bg-card/80">
            <CardHeader>
              <div className="flex items-center gap-3 text-xs uppercase tracking-wide text-muted-foreground">
                <span>{post.category}</span>
                <span>&bull;</span>
                <span>{new Date(post.publishedOn).toLocaleDateString()}</span>
              </div>
              <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
              <CardDescription>{post.summary}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Read article
                <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
