'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const faqs = [
  {
    question: 'What is Swift Launch?',
    answer:
      'Swift Launch is a production-ready Next.js 16 starter kit that includes authentication, payments, database, email service, and everything you need to launch your SaaS product quickly.',
  },
  {
    question: 'Do I need to know how to code?',
    answer:
      'Yes, Swift Launch is designed for developers. You should be familiar with React, Next.js, and TypeScript to make the most of this starter kit.',
  },
  {
    question: 'What tech stack does it use?',
    answer:
      'Next.js 16, TypeScript, PostgreSQL, Prisma ORM, Auth.js (NextAuth v5), Stripe, Resend, Tailwind CSS, shadcn/ui, Vitest, Playwright, and Docker.',
  },
  {
    question: 'Can I use this for commercial projects?',
    answer:
      'Yes! Once you purchase Swift Launch, you can use it for unlimited commercial projects. The code is yours to customize and deploy.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      "Yes, we offer a 14-day money-back guarantee. If you're not satisfied with Swift Launch, contact us within 14 days for a full refund.",
  },
  {
    question: 'How do I get support?',
    answer:
      'Pro and Enterprise plans include priority email support. We also have comprehensive documentation and a community Discord server for all users.',
  },
  {
    question: 'Is there a lifetime license?',
    answer:
      'Currently, we offer monthly and annual subscriptions. A lifetime license option may be available in the future.',
  },
  {
    question: 'Can I customize the code?',
    answer:
      "Absolutely! You have full access to the source code and can customize it however you like. That's the whole point - you own the code.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-muted/30 py-20 sm:py-32">
      <div className="container max-w-4xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions? We have answers. Can't find what you're looking for? Contact our support
            team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-border/50">
              <CardContent className="p-0">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-muted/50"
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="border-t border-border/50 px-6 py-4 text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Still have questions?{' '}
            <a
              href="mailto:support@swiftlaunch.com"
              className="font-medium text-primary hover:underline"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
