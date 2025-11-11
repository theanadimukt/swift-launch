import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="bg-yellow-500 rounded-3xl p-12 text-center text-black">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of developers who are building amazing products with SwiftLaunch
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-4 bg-black text-white hover:bg-slate-800">
            Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
