import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock3 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/config/site"

const formatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
})

export function generateStaticParams() {
  return siteConfig.blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = siteConfig.blogPosts.find((item) => item.slug === params.slug)
  if (!post) {
    return {
      title: siteConfig.name,
    }
  }

  return {
    title: `${post.title} — ${siteConfig.name}`,
    description: post.summary,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = siteConfig.blogPosts.find((item) => item.slug === params.slug)

  if (!post) {
    notFound()
  }

  const hero = (
    <section className="border-b border-border/60 bg-muted/30">
      <div className="container space-y-6 py-16">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <Badge variant="secondary">{post.category}</Badge>
            <span>{formatter.format(new Date(post.publishedOn))}</span>
            <span className="inline-flex items-center gap-1">
              <Clock3 className="h-4 w-4" />
              {post.readingTime}
            </span>
          </div>
          <h1 className="font-display text-h1 font-semibold md:text-display-2">{post.title}</h1>
          <p className="text-body-lg text-muted-foreground">{post.summary}</p>
        </div>
      </div>
    </section>
  )

  return (
    <div className="pb-16">
      {hero}
      <article className="container prose prose-invert max-w-3xl space-y-6 py-16">
        <p>
          SwiftLaunch partners with ambitious marketing and product teams to ship beautiful customer-facing experiences
          without the usual rewrites. This article dives into the repeatable process we follow with every launch: align
          on business metrics, choreograph the content system, wire analytics from day one, and create a design system
          that developers can actually ship.
        </p>
        <p>
          The playbook blends technical guardrails (Next.js App Router, type-safe APIs, shadcn/ui primitives) with
          conversion best practices so every section pushes prospects toward an intentional action. We encourage teams to
          start with modular data—pricing plans, testimonials, feature matrices—so future campaigns reuse the same
          content without reinventing layout logic.
        </p>
        <p>
          Inside the repository you will find configuration-driven components, opinionated hooks for analytics, and form
          patterns that make experimentation faster. Clone it, swap the data sources, and focus on the story you want to
          tell instead of plumbing.
        </p>
      </article>
    </div>
  )
}
