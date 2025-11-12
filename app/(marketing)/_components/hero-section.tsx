/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"
import { Zap, ArrowRight, CheckCircle, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 dark:bg-primary text-white/5 rounded-full filter blur-3xl opacity-30 dark:opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-purple-100 dark:bg-purple-50 rounded-full filter blur-3xl opacity-20 dark:opacity-40"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* Left Content */}
          <div className="space-y-6">

            {/* Badge */}
            <div className="inline-flex items-center gap-3">
              <div className="flex items-center bg-primary text-white text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                🏆 Product of the day
                <span className="ml-2 bg-black/20 px-2 py-0.5 rounded text-xs text-white">2nd</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-display text-display-2 font-semibold text-foreground lg:text-display-1">
                <span className="block">Launch your startup</span>
                <span className="block">in days, </span>
                <span className="relative inline-block bg-primary text-white text-black px-3 py-1 rounded-lg transform -rotate-1 shadow-lg">
                  not weeks
                </span>
              </h1>

              <p className="text-body-lg text-muted-foreground leading-relaxed max-w-lg">
                The NextJS boilerplate with all you need to build your SaaS, AI tool,
                or any other web app and make your first $ online fast.
              </p>
            </div>

            {/* CTA Button */}
            <div className="space-y-3">
              <button className="group bg-primary hover:bg-primary text-white/90 text-black font-bold text-lg px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                Get SwiftLaunch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center space-x-2 text-green-600 text-sm font-medium">
                <CheckCircle className="h-4 w-4" />
                <span>$100 off</span>
                <span className="text-slate-500">for the first 7700 customers (7 left)</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-3 pt-4">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-8 h-8 bg-muted border-2 border-background rounded-full flex items-center justify-center text-foreground font-bold text-xs shadow-sm">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-yellow-400 text-primary/80" />
                ))}
              </div>
              <span className="text-slate-600 font-medium text-sm">
                <span className="text-slate-900 font-bold">7693</span> makers ship faster
              </span>
            </div>

            {/* Command Line */}
            <div className="bg-muted border border-border rounded-lg p-3 font-mono text-sm max-w-sm">
              <div className="flex items-center space-x-1 mb-1">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-primary text-white/80 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-muted-foreground">
                <span className="text-muted-foreground/70">$</span> git clone swift-base
                <span className="animate-pulse">|</span>
              </div>
            </div>
          </div>

          {/* Right Visual - Advanced Tech Stack */}
          <div className="relative flex items-center justify-center">

            {/* Tech Stack Layout with Enhanced Design */}
            <div className="relative w-96 h-96">

              {/* Animated Background Circles */}
              <div className="absolute inset-0">
                <div className="absolute inset-8 border border-border/30 rounded-full animate-pulse"></div>
                <div className="absolute inset-12 border border-border/20 rounded-full"></div>
                <div className="absolute inset-16 border border-border/10 rounded-full"></div>
              </div>

              {/* Center Logo with Glow Effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center shadow-2xl z-20 hover:scale-105 transition-transform duration-300">
                <Zap className="h-10 w-10 text-black" />
                <div className="absolute inset-0 bg-primary text-white/80/20 rounded-2xl blur-xl"></div>
              </div>

              {/* Tech Stack Items - Enhanced */}
              {[
                { name: "Next.js", icon: "⚡", position: "top-2 left-1/2 -translate-x-1/2", color: "bg-card border border-border text-foreground shadow-lg", pulse: "animate-pulse" },
                { name: "Tailwind", icon: "🎨", position: "top-12 right-8", color: "bg-cyan-500 text-white shadow-lg", pulse: "" },
                { name: "Stripe", icon: "S", position: "right-2 top-1/2 -translate-y-1/2", color: "bg-purple-600 text-white shadow-lg", pulse: "" },
                { name: "MongoDB", icon: "🍃", position: "bottom-12 right-8", color: "bg-green-600 text-white shadow-lg", pulse: "" },
                { name: "Auth", icon: "🔐", position: "bottom-2 left-1/2 -translate-x-1/2", color: "bg-primary text-white shadow-lg", pulse: "" },
                { name: "Email", icon: "📧", position: "bottom-12 left-8", color: "bg-card border border-border text-foreground shadow-lg", pulse: "" },
                { name: "TypeScript", icon: "TS", position: "left-2 top-1/2 -translate-y-1/2", color: "bg-blue-600 text-white shadow-lg", pulse: "" },
                { name: "Database", icon: "🗄️", position: "top-12 left-8", color: "bg-card border border-border text-foreground shadow-lg", pulse: "" }
              ].map((tech, index) => (
                <div key={index} className={`absolute ${tech.position} group cursor-pointer z-10`}>
                  <div className={`w-14 h-14 ${tech.color} rounded-xl flex items-center justify-center hover:shadow-2xl transition-all duration-500 hover:scale-125 font-bold text-sm backdrop-blur-sm ${tech.pulse}`}>
                    {tech.icon}
                  </div>

                  {/* Enhanced Tooltip */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-card border border-border text-foreground px-3 py-2 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 whitespace-nowrap shadow-xl">
                    {tech.name}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-card border-l border-t border-border rotate-45"></div>
                  </div>

                  {/* Connection Lines */}
                  <div className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              ))}
            </div>

            {/* Enhanced Bottom Text with Better Positioning */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-full px-6 py-3 shadow-lg">
                <p className="text-muted-foreground text-sm font-medium">
                  <span className="text-primary">+</span> all the boring stuff
                  <span className="text-muted-foreground/70">(SEO, API, support)</span>
                </p>
              </div>
            </div>

            {/* Enhanced Decorative Elements */}
            <div className="absolute -bottom-8 -right-8">
              <div className="relative">
                <div className="text-primary text-4xl font-bold transform rotate-12 animate-bounce">
                  ↘
                </div>
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary text-white rounded-full animate-ping"></div>
              </div>
            </div>

            {/* Floating Elements for Visual Interest */}
            <div className="absolute top-8 -left-4 w-2 h-2 bg-primary text-white/30 rounded-full animate-pulse"></div>
            <div className="absolute -top-4 right-12 w-1 h-1 bg-cyan-500/40 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-16 -left-8 w-1.5 h-1.5 bg-purple-500/30 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
