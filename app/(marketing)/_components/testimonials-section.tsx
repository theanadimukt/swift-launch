import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <Badge variant="secondary" className="mb-4 bg-yellow-100 text-yellow-700">Testimonials</Badge>
        <h2 className="text-4xl font-bold text-foreground mb-4">Loved by Developers</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          See what our community has to say about SwiftLaunch
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            name: "Sarah Chen",
            role: "Senior Developer at TechCorp",
            avatar: "👩‍💻",
            content: "SwiftLaunch saved me weeks of setup time. The components are beautiful and the DX is incredible!",
            rating: 5
          },
          {
            name: "Mike Johnson",
            role: "Founder of StartupXYZ",
            avatar: "👨‍💼",
            content: "We went from idea to MVP in just 3 days using SwiftLaunch. Absolutely game-changing!",
            rating: 5
          },
          {
            name: "Alex Rodriguez",
            role: "Full-stack Developer",
            avatar: "👨‍💻",
            content: "The best Next.js boilerplate I've ever used. Clean code, great documentation, perfect setup.",
            rating: 5
          }
        ].map((testimonial, index) => (
          <Card key={index} className="border border-border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-card">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <CardTitle className="text-lg text-foreground">{testimonial.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{testimonial.role}</CardDescription>
                </div>
              </div>
              <div className="flex space-x-1 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground italic text-base leading-relaxed">&quot;{testimonial.content}&quot;</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
