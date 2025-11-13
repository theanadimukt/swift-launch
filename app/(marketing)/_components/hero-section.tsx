import { Button } from "@/components/ui/button"
import { Zap, Globe, CheckCircle, Star } from "lucide-react"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-200 to-orange-200 dark:from-yellow-900/40 dark:to-orange-900/40 rounded-full filter blur-3xl opacity-20 dark:opacity-60 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900/40 dark:to-pink-900/40 rounded-full filter blur-3xl opacity-15 dark:opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-200 to-cyan-200 dark:from-blue-900/40 dark:to-cyan-900/40 rounded-full filter blur-2xl opacity-25 dark:opacity-30 animate-pulse delay-500"></div>

        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.08)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(251,191,36,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.04)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center min-h-[80vh] flex flex-col justify-center">

          {/* Enhanced Content */}
          <div className="space-y-8">

            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 animate-fadeIn">
              <div className="flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-5 py-3 rounded-full text-sm font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse shadow-lg"></div>
                <span className="text-lg">🏆</span>
                <span className="ml-2">Product of the day</span>
                <span className="ml-3 bg-black/30 px-3 py-1 rounded-full text-xs text-white font-bold shadow-inner">2nd</span>
              </div>
            </div>

            {/* Enhanced Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight text-foreground">
                <span className="inline animate-slideInUp">Launch your startup </span>
                <span className="inline animate-slideInUp delay-100">in days, </span>
                <span className="relative inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-xl transform -rotate-1 shadow-xl hover:rotate-0 hover:shadow-2xl transition-all duration-300 animate-slideInUp delay-200 hover:scale-105 cursor-pointer">
                  not weeks
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto animate-slideInUp delay-300 text-center">
                The <span className="text-foreground font-semibold">NextJS boilerplate</span> with all you need to build your
                <span className="text-yellow-600 dark:text-yellow-400 font-semibold"> SaaS, AI tool</span>,
                or any other web app and make your first <span className="text-green-600 font-bold">$ online fast</span>.
              </p>
            </div>

            {/* Enhanced CTA Section */}
            <div className="space-y-4 animate-slideInUp delay-400 flex flex-col items-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold text-xl px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <Zap className="h-6 w-6 mr-3 animate-pulse" />
                  Get SwiftLaunch
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button variant="outline" className="border-2 border-yellow-500 text-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 hover:text-black dark:text-yellow-400 dark:hover:text-black font-semibold text-lg px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105">
                  <Globe className="h-5 w-5 mr-2" />
                  View Demo
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-3 text-green-600 dark:text-green-400 font-medium bg-green-50 dark:bg-green-900/20 px-4 py-3 rounded-xl border border-green-200 dark:border-green-800 max-w-fit mx-auto">
                <CheckCircle className="h-5 w-5 animate-pulse" />
                <span className="text-lg font-bold">$100 OFF</span>
                <span className="text-muted-foreground">for the first 7700 customers</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold animate-pulse">(7 left)</span>
              </div>
            </div>

            {/* Enhanced Social Proof */}
            <div className="flex flex-col items-center space-y-4 pt-4 animate-slideInUp delay-500">
              <div className="flex items-center space-x-6">
                <div className="flex -space-x-3">
                  {[
                    { type: "avatar", src: "/images/avatar.png" },
                    { type: "avatar", src: "/images/avatar.png" },
                    { type: "avatar", src: "/images/avatar.png" },
                    { type: "text", bg: "bg-gradient-to-r from-pink-500 to-pink-600", text: "VU" },
                    { type: "text", bg: "bg-gradient-to-r from-yellow-500 to-yellow-600", text: "+K" }
                  ].map((avatar, i) => (
                    <div key={i} className={`w-12 h-12 border-3 border-background rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer ${avatar.type === 'text' ? `${avatar.bg} flex items-center justify-center text-white font-bold text-sm` : 'overflow-hidden'}`}>
                      {avatar.type === 'avatar' ? (
                        <img
                          src={avatar.src}
                          alt="SwiftLaunch User"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        avatar.text
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-pulse" style={{animationDelay: `${i * 100}ms`}} />
                    ))}
                  </div>
                  <span className="text-lg font-bold text-foreground">5.0</span>
                </div>
              </div>

              <div className="text-muted-foreground text-center">
                <span className="text-2xl font-bold text-foreground">12,693</span>
                <span className="ml-2">developers building faster</span>
              </div>
            </div>

            {/* Enhanced Command Line */}
            <div className="bg-card border-2 border-border rounded-2xl p-6 font-mono max-w-md mx-auto shadow-xl animate-slideInUp delay-600 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-200"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-400"></div>
                <span className="text-muted-foreground ml-4 text-sm">~/swiftlaunch</span>
              </div>
              <div className="text-foreground text-base">
                <span className="text-yellow-500">$</span>
                <span className="ml-2">git clone swift-launch</span>
                <span className="animate-pulse ml-1 text-yellow-500">|</span>
              </div>
              <div className="text-green-500 text-sm mt-2">
                ✓ Ready in 2 minutes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
