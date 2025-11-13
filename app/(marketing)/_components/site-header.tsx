"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowRight, Menu, X } from "lucide-react"
import Link from "next/link"

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-background/98 backdrop-blur-xl border-b border-border/80 shadow-lg'
        : 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-sm'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="/images/logo.png"
                alt="Swift Launch"
                className="size-16 rounded-2xl transition-all duration-300 group-hover:scale-125 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">
                Swift Launch
              </span>
              <span className="text-xs text-muted-foreground -mt-1 font-medium tracking-wide">
                Next.js Accelerator
              </span>
            </div>
          </Link>

          {/* Simplified Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <Link href="#features" className="relative text-muted-foreground hover:text-foreground transition-colors font-semibold text-lg group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link href="#pricing" className="relative text-muted-foreground hover:text-foreground transition-colors font-semibold text-lg group">
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link href="#testimonials" className="relative text-muted-foreground hover:text-foreground transition-colors font-semibold text-lg group">
                Wall of Developer
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* Simplified Utility Section */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <ThemeToggle />

            </div>
          </div>

          {/* Enhanced Mobile Menu Section */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-9 h-9 p-0 text-muted-foreground hover:text-foreground"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="space-y-4">
              <div className="space-y-3">
                <Link
                  href="#features"
                  className="block text-muted-foreground hover:text-foreground font-semibold text-lg py-2 px-3 rounded-lg hover:bg-muted transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#pricing"
                  className="block text-muted-foreground hover:text-foreground font-semibold text-lg py-2 px-3 rounded-lg hover:bg-muted transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="#testimonials"
                  className="block text-muted-foreground hover:text-foreground font-semibold text-lg py-2 px-3 rounded-lg hover:bg-muted transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Wall of Developer
                </Link>
              </div>

              <div className="border-t border-border pt-4 space-y-3">
                <Button
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold shadow-lg"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
