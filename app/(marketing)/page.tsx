"use client"

import {
  SiteHeader,
  HeroSection,
  StatsSection,
  CommunityStatsSection,
  FeaturesSection,
  TechStackSection,
  TestimonialsSection,
  UseCasesSection,
  PricingSection,
  FAQSection,
  ComparisonSection,
  CTASection,
  SiteFooter
} from "./_components"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <StatsSection />
      <CommunityStatsSection />
      <FeaturesSection />
      <TechStackSection />
      <TestimonialsSection />
      <UseCasesSection />
      <PricingSection />
      <FAQSection />
      <ComparisonSection />
      <CTASection />
      <SiteFooter />
    </div>
  )
}
