import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Star, CheckCircle, ArrowRight } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-orange-50/30 to-purple-50/50 dark:from-yellow-900/10 dark:via-orange-900/10 dark:to-purple-900/10"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-orange-400/20 to-yellow-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 dark:bg-gradient-to-r dark:from-yellow-500/20 dark:to-orange-500/20 dark:text-yellow-400 dark:border-yellow-500/30 px-6 py-2 text-sm font-semibold">
            Testimonials
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Loved by <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Developers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See what our community has to say about SwiftLaunch and how it's transforming their development workflow
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center space-x-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">10K+</div>
              <div className="text-sm text-muted-foreground">Happy Developers</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">4.9</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              name: "Sarah Chen",
              role: "Senior Developer at TechCorp",
              company: "TechCorp",
              content: "SwiftLaunch saved me weeks of setup time. The components are beautiful and the DX is incredible!",
              rating: 5,
              verified: true,
              highlight: false
            },
            {
              name: "Mike Johnson",
              role: "Founder of StartupXYZ",
              company: "StartupXYZ",
              content: "We went from idea to MVP in just 3 days using SwiftLaunch. Absolutely game-changing!",
              rating: 5,
              verified: true,
              highlight: true
            },
            {
              name: "Alex Rodriguez",
              role: "Full-stack Developer",
              company: "FreelanceHub",
              content: "The best Next.js boilerplate I've ever used. Clean code, great documentation, perfect setup.",
              rating: 5,
              verified: true,
              highlight: false
            }
          ].map((testimonial, index) => (
            <Card key={index} className={`relative group transition-all duration-500 hover:scale-105 ${
              testimonial.highlight
                ? 'bg-gradient-to-br from-white to-yellow-50/80 dark:from-gray-900/80 dark:to-yellow-900/20 border-2 border-gradient-to-r from-yellow-400/50 to-orange-400/50 shadow-2xl shadow-yellow-500/20 dark:shadow-yellow-500/10'
                : 'bg-card/80 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl hover:border-yellow-400/30'
            }`}>
              {/* Spotlight Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 group-hover:from-yellow-500/5 group-hover:via-orange-500/5 group-hover:to-yellow-500/5 rounded-lg transition-all duration-500"></div>

              {/* Featured Badge */}
              {testimonial.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold px-4 py-1 shadow-lg">
                    ⭐ Featured
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-gradient-to-r from-yellow-400 to-orange-400 p-0.5">
                        <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                          <img
                            src="/images/avatar.png"
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      {testimonial.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-foreground mb-1 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground font-medium">
                        {testimonial.role}
                      </CardDescription>
                      <div className="text-xs text-muted-foreground/80 mt-1">
                        @ {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center space-x-2 mt-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">5.0</span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="relative">
                  {/* Quote Icon */}
                  <div className="absolute -top-2 -left-2 text-4xl text-yellow-400/30 font-serif leading-none">"</div>
                  <p className="text-foreground/90 text-lg leading-relaxed font-medium pl-6 pr-2 relative z-10">
                    {testimonial.content}
                  </p>
                  <div className="absolute -bottom-4 -right-2 text-4xl text-yellow-400/30 font-serif leading-none rotate-180">"</div>
                </div>

                {/* Date */}
                <div className="mt-6 pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>✓ Verified Purchase</span>
                    <span>2 weeks ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-8 py-4 shadow-lg">
            <div className="flex -space-x-3">
              {[1,2,3,4,5].map((i) => (
                <img
                  key={i}
                  src="/images/avatar.png"
                  alt={`Developer ${i}`}
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 object-cover"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-foreground">Join 10,000+ developers</div>
              <div className="text-xs text-muted-foreground">Building amazing products with SwiftLaunch</div>
            </div>
            <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold shadow-lg">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
