"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { siteConfig } from "@/config/site"
import {
  ArrowRight, Zap, Rocket, Shield, Users,
  ChevronDown, Bell, Search, User, Menu, X, Clock
} from "lucide-react"
import Link from "next/link"

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const brandName = siteConfig.name
  const brandTagline = siteConfig.tagline

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
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Zap className="h-7 w-7 text-black" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary/80 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">
                {brandName}
              </span>
              <span className="text-xs text-muted-foreground -mt-1 font-medium tracking-wide">
                {brandTagline}
              </span>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {/* Features Dropdown */}
              <div className="relative group">
                <Link href="#features" className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors font-medium group">
                  <span>Features</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-4 space-y-3">
                    <Link href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Rocket className="h-4 w-4 text-primary/90" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Performance</div>
                        <div className="text-xs text-muted-foreground">Lightning fast load times</div>
                      </div>
                    </Link>
                    <Link href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Shield className="h-4 w-4 text-primary/90" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Security</div>
                        <div className="text-xs text-muted-foreground">Enterprise-grade protection</div>
                      </div>
                    </Link>
                    <Link href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Users className="h-4 w-4 text-primary/90" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Components</div>
                        <div className="text-xs text-muted-foreground">50+ ready-to-use components</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/pricing" className="relative text-muted-foreground hover:text-foreground transition-colors font-medium group">
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link href="/docs" className="relative text-muted-foreground hover:text-foreground transition-colors font-medium group">
                Docs
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link href="/about" className="relative text-muted-foreground hover:text-foreground transition-colors font-medium group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* Enhanced Utility Section */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <Button variant="ghost" size="sm" className="w-9 h-9 p-0 hover:bg-muted text-muted-foreground hover:text-foreground">
                <Search className="h-4 w-4" />
              </Button>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Notifications */}
              <div className="relative">
                <Button variant="ghost" size="sm" className="w-9 h-9 p-0 hover:bg-muted text-muted-foreground hover:text-foreground">
                  <Bell className="h-4 w-4" />
                </Button>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-background"></div>
              </div>

              {/* Divider */}
              <div className="w-px h-6 bg-border"></div>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-3">
                <Button
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground hover:bg-muted font-medium px-6 py-2.5 transition-all duration-200"
                >
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Button
                  className="bg-primary hover:bg-primary/90 text-black font-semibold px-6 py-2.5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced Mobile Menu Section */}
          <div className="lg:hidden flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="w-9 h-9 p-0 text-muted-foreground hover:text-foreground">
              <Search className="h-4 w-4" />
            </Button>
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
                  className="block text-muted-foreground hover:text-foreground font-medium py-2 px-3 rounded-lg hover:bg-muted transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="block text-muted-foreground hover:text-foreground font-medium py-2 px-3 rounded-lg hover:bg-muted transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/docs"
                  className="block text-muted-foreground hover:text-foreground font-medium py-2 px-3 rounded-lg hover:bg-muted transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Documentation
                </Link>
                <Link
                  href="/about"
                  className="block text-muted-foreground hover:text-foreground font-medium py-2 px-3 rounded-lg hover:bg-muted transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </div>

              <div className="border-t border-border pt-4 space-y-3">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-black font-semibold shadow-lg"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Premium Status Bar */}
      <div className="bg-primary text-black text-center py-3">
        <div className="flex items-center justify-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
            <span className="text-sm font-medium">🎉 Limited Time: Get 50% off Pro plans</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20"></div>
          <div className="hidden sm:flex items-center space-x-2 text-sm">
            <Clock className="h-4 w-4" />
            <span>Ends Dec 31st</span>
          </div>
          <Link
            href="/pricing"
            className="inline-flex items-center space-x-1 bg-black/20 hover:bg-black/30 px-3 py-1 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
          >
            <span>Claim Offer</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </nav>
  )
}
