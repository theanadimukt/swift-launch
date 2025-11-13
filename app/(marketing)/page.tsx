"use client"

import {
  SiteHeader,
  HeroSection,
  StatsSection,
  FeaturesSection,
  TechStackSection,
  TestimonialsSection,
  UseCasesSection,
  PricingSection,
  FaqSection,
  ComparisonSection,
  CtaSection,
  SiteFooter
} from './_components'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <TechStackSection />
      <TestimonialsSection />
      <UseCasesSection />
      <PricingSection />
      <FaqSection />
      <ComparisonSection />
      <CtaSection />
      <SiteFooter />
    </div>
  )
}
