/* eslint-disable react/no-unescaped-entities */
"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { EngagementChart } from "@/components/charts/engagement-chart"
import { siteConfig } from "@/config/site"
import { ArrowRight, Zap, Shield, Rocket, Users, Star, CheckCircle, Code, Globe, Database, Smartphone, Clock, Github, Twitter, Linkedin, Menu, X, ChevronDown, Bell, Search, User } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const brandName = siteConfig.name
  const brandTagline = siteConfig.tagline
  const highlightStats = siteConfig.highlights

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Premium Navigation */}
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
                <div className="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Zap className="h-7 w-7 text-black" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white"></div>
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
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-4 space-y-3">
                      <Link href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors">
                        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                          <Rocket className="h-4 w-4 text-yellow-600" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">Performance</div>
                          <div className="text-xs text-muted-foreground">Lightning fast load times</div>
                        </div>
                      </Link>
                      <Link href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors">
                        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                          <Shield className="h-4 w-4 text-yellow-600" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">Security</div>
                          <div className="text-xs text-muted-foreground">Enterprise-grade protection</div>
                        </div>
                      </Link>
                      <Link href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors">
                        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                          <Users className="h-4 w-4 text-yellow-600" />
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
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
                
                <Link href="/docs" className="relative text-muted-foreground hover:text-foreground transition-colors font-medium group">
                  Docs
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
                
                <Link href="/about" className="relative text-muted-foreground hover:text-foreground transition-colors font-medium group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
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
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full border-2 border-background"></div>
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
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2.5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold shadow-lg"
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
        <div className="bg-yellow-500 text-black text-center py-3">
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

      {/* Hero Section - Modern Design */}
      <section className="relative py-20 overflow-hidden bg-background">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Subtle floating orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-100 dark:bg-yellow-50 rounded-full filter blur-3xl opacity-30 dark:opacity-60"></div>
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
                <div className="flex items-center bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
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
                  <span className="relative inline-block bg-yellow-500 text-black px-3 py-1 rounded-lg transform -rotate-1 shadow-lg">
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
                <button className="group bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center">
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
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
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
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
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
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-yellow-500 rounded-2xl flex items-center justify-center shadow-2xl z-20 hover:scale-105 transition-transform duration-300">
                  <Zap className="h-10 w-10 text-black" />
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-2xl blur-xl"></div>
                </div>
                
                {/* Tech Stack Items - Enhanced */}
                {[
                  { name: "Next.js", icon: "⚡", position: "top-2 left-1/2 -translate-x-1/2", color: "bg-card border border-border text-foreground shadow-lg", pulse: "animate-pulse" },
                  { name: "Tailwind", icon: "🎨", position: "top-12 right-8", color: "bg-cyan-500 text-white shadow-lg", pulse: "" },
                  { name: "Stripe", icon: "S", position: "right-2 top-1/2 -translate-y-1/2", color: "bg-purple-600 text-white shadow-lg", pulse: "" },
                  { name: "MongoDB", icon: "🍃", position: "bottom-12 right-8", color: "bg-green-600 text-white shadow-lg", pulse: "" },
                  { name: "Auth", icon: "🔐", position: "bottom-2 left-1/2 -translate-x-1/2", color: "bg-yellow-500 text-black shadow-lg", pulse: "" },
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
                    <div className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-gradient-to-r from-yellow-500/50 to-transparent transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                ))}
              </div>
              
              {/* Enhanced Bottom Text with Better Positioning */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
                <div className="bg-card/80 backdrop-blur-sm border border-border rounded-full px-6 py-3 shadow-lg">
                  <p className="text-muted-foreground text-sm font-medium">
                    <span className="text-yellow-500">+</span> all the boring stuff 
                    <span className="text-muted-foreground/70">(SEO, API, support)</span>
                  </p>
                </div>
              </div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute -bottom-8 -right-8">
                <div className="relative">
                  <div className="text-yellow-500 text-4xl font-bold transform rotate-12 animate-bounce">
                    ↘
                  </div>
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-500 rounded-full animate-ping"></div>
                </div>
              </div>
              
              {/* Floating Elements for Visual Interest */}
              <div className="absolute top-8 -left-4 w-2 h-2 bg-yellow-500/30 rounded-full animate-pulse"></div>
              <div className="absolute -top-4 right-12 w-1 h-1 bg-cyan-500/40 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-16 -left-8 w-1.5 h-1.5 bg-purple-500/30 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-8 pb-12">
        <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
          <Card className="border-border/70 bg-card/80 shadow-2xl">
            <CardHeader className="flex flex-col gap-2">
              <Badge variant="secondary" className="w-fit">Momentum</Badge>
              <CardTitle className="text-3xl font-semibold">Launch impact in real time</CardTitle>
              <CardDescription>
                {brandName} tracks the exact signals your team needs so you know every marketing iteration is working.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-3">
              {highlightStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/70 bg-background/60 p-4 shadow-inner"
                >
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-semibold">{stat.value}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <EngagementChart />
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-50/50 to-orange-50/50 dark:from-yellow-900/10 dark:to-orange-900/10 rounded-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          
          <div className="relative z-10 py-16">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border-yellow-500/30">
                Trusted by Thousands
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Join the Community</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                SwiftLaunch is trusted by developers worldwide to build amazing products
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
              {[
                { 
                  number: "10K+", 
                  label: "Active Developers", 
                  icon: Users, 
                  color: "text-blue-600 dark:text-blue-400",
                  bgColor: "bg-blue-100 dark:bg-blue-900/30"
                },
                { 
                  number: "50K+", 
                  label: "Projects Created", 
                  icon: Rocket, 
                  color: "text-green-600 dark:text-green-400",
                  bgColor: "bg-green-100 dark:bg-green-900/30"
                },
                { 
                  number: "99.9%", 
                  label: "Uptime", 
                  icon: Shield, 
                  color: "text-purple-600 dark:text-purple-400",
                  bgColor: "bg-purple-100 dark:bg-purple-900/30"
                },
                { 
                  number: "24/7", 
                  label: "Support", 
                  icon: Clock, 
                  color: "text-orange-600 dark:text-orange-400",
                  bgColor: "bg-orange-100 dark:bg-orange-900/30"
                }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <Card className="border border-border/50 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-6">
                    <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-foreground mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium text-base md:text-lg">
                      {stat.label}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
            
            {/* Trust Indicators */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">Loved by developers at</p>
              <div className="flex items-center justify-center space-x-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <div className="text-2xl font-bold text-muted-foreground">Google</div>
                <div className="text-2xl font-bold text-muted-foreground">Microsoft</div>
                <div className="text-2xl font-bold text-muted-foreground">Netflix</div>
                <div className="text-2xl font-bold text-muted-foreground">Spotify</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border-yellow-500/30">Features</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">Everything You Need</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with modern technologies and best practices to help you ship faster
          </p>
        </div>
        
        {/* Featured Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {[
            {
              title: "Lightning Fast",
              description: "Built on Next.js 14 with App Router for optimal performance and SEO",
              icon: Rocket,
              gradient: "from-blue-500 to-cyan-500",
              features: ["Server Components", "Edge Runtime", "Static Generation"]
            },
            {
              title: "TypeScript Ready", 
              description: "Full TypeScript support with type safety and excellent developer experience",
              icon: Shield,
              gradient: "from-indigo-500 to-purple-500", 
              features: ["Type Safety", "IntelliSense", "Auto-completion"]
            },
            {
              title: "Radix UI Components",
              description: "Beautiful, accessible components built with Radix UI and Tailwind CSS", 
              icon: Users,
              gradient: "from-emerald-500 to-teal-500",
              features: ["Accessibility", "Customizable", "Dark Mode"]
            }
          ].map((feature, index) => (
            <Card key={index} className="relative overflow-hidden border-0 bg-card shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <CardHeader className="relative z-10 p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {feature.description}
                </CardDescription>
                <div className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-base text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
        
        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Modern Design System",
              description: "Clean, modern design that looks great on all devices",
              icon: Star,
              color: "text-pink-600 dark:text-pink-400",
              bgColor: "bg-pink-100 dark:bg-pink-900/30"
            },
            {
              title: "Easy Customization", 
              description: "Flexible components and styling that adapts to your brand",
              icon: Zap,
              color: "text-yellow-600 dark:text-yellow-400",
              bgColor: "bg-yellow-100 dark:bg-yellow-900/30"
            },
            {
              title: "Production Ready",
              description: "Optimized for production with best practices and performance",
              icon: CheckCircle,
              color: "text-green-600 dark:text-green-400", 
              bgColor: "bg-green-100 dark:bg-green-900/30"
            },
            {
              title: "SEO Optimized",
              description: "Built-in SEO best practices for better search rankings",
              icon: Globe,
              color: "text-blue-600 dark:text-blue-400",
              bgColor: "bg-blue-100 dark:bg-blue-900/30"
            },
            {
              title: "Database Integration",
              description: "Seamless database integration with Prisma ORM",
              icon: Database,
              color: "text-purple-600 dark:text-purple-400",
              bgColor: "bg-purple-100 dark:bg-purple-900/30"
            },
            {
              title: "Mobile Responsive",
              description: "Perfect responsive design for all screen sizes",
              icon: Smartphone,
              color: "text-indigo-600 dark:text-indigo-400",
              bgColor: "bg-indigo-100 dark:bg-indigo-900/30"
            }
          ].map((feature, index) => (
            <Card key={index} className="border border-border/50 bg-card/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 group hover:scale-105 p-6">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg font-semibold text-foreground mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Enhanced Technology Stack Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border-yellow-500/30">Technology Stack</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">Built with the Best</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powered by industry-leading technologies and frameworks for modern web development
          </p>
        </div>
        
        {/* Main Technologies Grid - Featured */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {[
            { 
              name: "Next.js 14", 
              description: "React framework with App Router",
              icon: "⚡",
              features: ["Server Components", "App Router", "Static Generation"]
            },
            { 
              name: "TypeScript", 
              description: "Type-safe JavaScript development",
              icon: "📘",
              features: ["Type Safety", "IntelliSense", "Error Prevention"]
            },
            { 
              name: "Tailwind CSS", 
              description: "Utility-first CSS framework",
              icon: "🎨",
              features: ["Responsive Design", "Custom Components", "Dark Mode"]
            }
          ].map((tech, index) => (
            <Card key={index} className="relative overflow-hidden bg-card border border-border shadow-xl hover:shadow-2xl group hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center group-hover:bg-yellow-600 transition-colors duration-300 shadow-lg">
                    <span className="text-2xl">{tech.icon}</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground">{tech.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-base text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-500/5 rounded-full transform -translate-x-12 translate-y-12"></div>
            </Card>
          ))}
        </div>
        
        {/* Supporting Technologies */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-4">Plus Many More...</h3>
          <p className="text-muted-foreground mb-8">Complete ecosystem of modern development tools</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 max-w-6xl mx-auto">
          {[
            { name: "shadcn/ui", icon: "🧩", color: "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700" },
            { name: "Prisma", icon: "🔺", color: "bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50" },
            { name: "NextAuth", icon: "🔐", color: "bg-green-50 dark:bg-green-900/30 hover:bg-green-100 dark:hover:bg-green-900/50" },
            { name: "Stripe", icon: "💳", color: "bg-purple-50 dark:bg-purple-900/30 hover:bg-purple-100 dark:hover:bg-purple-900/50" },
            { name: "Vercel", icon: "▲", color: "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700" },
            { name: "Framer Motion", icon: "🎭", color: "bg-pink-50 dark:bg-pink-900/30 hover:bg-pink-100 dark:hover:bg-pink-900/50" },
            { name: "React Hook Form", icon: "�", color: "bg-orange-50 dark:bg-orange-900/30 hover:bg-orange-100 dark:hover:bg-orange-900/50" },
            { name: "Zod", icon: "✅", color: "bg-teal-50 dark:bg-teal-900/30 hover:bg-teal-100 dark:hover:bg-teal-900/50" }
          ].map((tech, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="w-20 h-20 bg-card border border-border hover:border-yellow-500/50 rounded-2xl shadow-md hover:shadow-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{tech.icon}</span>
              </div>
              <div className="text-base font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-8 max-w-2xl mx-auto border border-yellow-200 dark:border-yellow-500/20">
            <h3 className="text-2xl font-bold text-foreground mb-3">Modern Stack, Proven Results</h3>
            <p className="text-muted-foreground mb-6">
              Every technology in SwiftLaunch is carefully chosen for performance, developer experience, and scalability.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Rocket className="h-4 w-4 text-green-500" />
                <span>Production Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>Industry Standard</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-blue-500" />
                <span>High Performance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
                <p className="text-muted-foreground italic text-base leading-relaxed">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Enhanced Use Cases Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border-yellow-500/30">Use Cases</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">Perfect For Any Project</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From startups to enterprise, SwiftLaunch adapts to your needs and scales with your growth
          </p>
        </div>
        
        {/* Main Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Rocket,
              title: "SaaS Applications",
              description: "Build scalable software-as-a-service platforms with subscription management",
              gradient: "from-purple-500 to-pink-500",
              features: ["User Authentication", "Payment Processing", "Analytics Dashboard"],
              popularity: "Most Popular"
            },
            {
              icon: Globe,
              title: "Landing Pages", 
              description: "Create stunning marketing websites that convert visitors into customers",
              gradient: "from-blue-500 to-cyan-500",
              features: ["SEO Optimized", "Fast Loading", "Conversion Focused"],
              popularity: "High Converting"
            },
            {
              icon: Smartphone,
              title: "Mobile Apps",
              description: "Responsive designs that work perfectly on any device or screen size",
              gradient: "from-green-500 to-emerald-500",
              features: ["PWA Ready", "Touch Optimized", "Offline Support"],
              popularity: "Mobile First"
            },
            {
              icon: Database,
              title: "Admin Dashboards",
              description: "Powerful data management interfaces for complex business operations",
              gradient: "from-orange-500 to-red-500",
              features: ["Real-time Data", "Role Management", "Custom Reports"],
              popularity: "Enterprise Ready"
            }
          ].map((useCase, index) => (
            <Card key={index} className="relative overflow-hidden border border-border shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-card hover:scale-105">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Popularity Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-yellow-500 text-black text-xs font-semibold px-2 py-1">
                  {useCase.popularity}
                </Badge>
              </div>
              
              <CardHeader className="relative z-10 p-8">
                {/* Icon with Gradient */}
                <div className={`w-20 h-20 mb-6 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <useCase.icon className="h-10 w-10 text-white" />
                </div>
                
                {/* Content */}
                <CardTitle className="text-2xl font-bold text-foreground mb-4 text-center group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                  {useCase.title}
                </CardTitle>
                
                <CardDescription className="text-base text-muted-foreground leading-relaxed text-center mb-6">
                  {useCase.description}
                </CardDescription>
                
                {/* Features List */}
                <div className="space-y-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardHeader>
              
              {/* Decorative Elements */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full transform translate-x-16 translate-y-16"></div>
              <div className="absolute top-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-12 -translate-y-12"></div>
            </Card>
          ))}
        </div>
        
        {/* Industry Examples */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-4">Trusted by Industries</h3>
          <p className="text-lg text-muted-foreground mb-8">
            See how different industries use SwiftLaunch to build amazing products
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              industry: "FinTech",
              example: "Payment platforms, trading apps, digital wallets",
              icon: "💳",
              companies: ["Stripe", "PayPal", "Square"]
            },
            {
              industry: "HealthTech", 
              example: "Telemedicine, patient portals, health tracking",
              icon: "🏥",
              companies: ["Teladoc", "23andMe", "Fitbit"]
            },
            {
              industry: "EdTech",
              example: "Learning platforms, course management, assessments",
              icon: "📚",
              companies: ["Coursera", "Udemy", "Khan Academy"]
            }
          ].map((industry, index) => (
            <Card key={index} className="bg-card border border-border hover:border-yellow-500/30 shadow-md hover:shadow-lg transition-all duration-300 p-6">
              <div className="text-center">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h4 className="text-xl font-semibold text-foreground mb-2">{industry.industry}</h4>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">{industry.example}</p>
                <div className="flex justify-center space-x-2 text-sm text-muted-foreground">
                  {industry.companies.map((company, companyIndex) => (
                    <span key={companyIndex} className="bg-muted px-2 py-1 rounded text-xs">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-8 max-w-3xl mx-auto border border-yellow-200 dark:border-yellow-500/20">
            <h3 className="text-2xl font-bold text-foreground mb-3">Ready to Build Your Project?</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Whether you're building a simple landing page or a complex SaaS platform, SwiftLaunch has everything you need to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold shadow-lg">
                <Rocket className="mr-2 h-4 w-4" />
                Start Building Now
              </Button>
              <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black dark:text-yellow-400 dark:hover:text-black">
                <Globe className="mr-2 h-4 w-4" />
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border-yellow-500/30">Pricing</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. One-time payment, lifetime access.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Starter",
              price: "$99",
              period: "one-time",
              description: "Perfect for indie developers and small projects",
              features: [
                "Complete Next.js 14 boilerplate",
                "TypeScript configuration",
                "Tailwind CSS + shadcn/ui",
                "Authentication system",
                "Basic payment integration",
                "Email templates",
                "Database setup",
                "6 months of updates"
              ],
              popular: false,
              cta: "Get Starter"
            },
            {
              name: "Pro",
              price: "$199",
              period: "one-time",
              description: "For serious developers building to scale",
              features: [
                "Everything in Starter",
                "Advanced dashboard templates",
                "Admin panel components",
                "Multi-tenant architecture",
                "Advanced analytics setup",
                "SEO optimization",
                "Priority support",
                "12 months of updates",
                "Deployment guides"
              ],
              popular: true,
              cta: "Get Pro"
            },
            {
              name: "Enterprise",
              price: "$399",
              period: "one-time",
              description: "For teams and agencies building multiple projects",
              features: [
                "Everything in Pro",
                "White-label license",
                "Custom integrations",
                "Team collaboration features",
                "Advanced security features",
                "Custom components library",
                "Dedicated support",
                "Lifetime updates",
                "1-on-1 setup call"
              ],
              popular: false,
              cta: "Get Enterprise"
            }
          ].map((plan, index) => (
            <Card key={index} className={`relative border border-border shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer bg-card ${plan.popular ? 'ring-2 ring-yellow-500 scale-105' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black font-semibold px-4 py-1 z-10 shadow-lg">
                  Most Popular
                </Badge>
              )}
              <CardHeader className={`text-center ${plan.popular ? 'pt-8' : 'pt-6'}`}>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className={`w-full mb-6 ${plan.popular 
                    ? 'bg-yellow-500 hover:bg-yellow-600 text-black font-semibold shadow-lg' 
                    : 'bg-muted hover:bg-muted/80 text-foreground hover:bg-foreground hover:text-background'
                  } transition-all duration-300 group-hover:scale-105`}
                  size="lg"
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-foreground mb-3">What's included:</div>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-base leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Pricing Benefits */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Lifetime Access</h3>
              <p className="text-muted-foreground text-base">One-time payment, use forever. No recurring fees.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">30-Day Guarantee</h3>
              <p className="text-muted-foreground text-base">Not satisfied? Get your money back, no questions asked.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Community Support</h3>
              <p className="text-muted-foreground text-base">Join our Discord community of 5000+ developers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Pricing FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border-yellow-500/30">FAQ</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions about pricing? We've got answers.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {[
              {
                question: "Is this a one-time payment?",
                answer: "Yes! Pay once and use SwiftLaunch forever. No monthly subscriptions or hidden fees. You own the code and can use it for as many projects as your plan allows.",
                icon: "💳"
              },
              {
                question: "Do I get source code access?",
                answer: "Absolutely! You get full access to all source code and can modify it however you want. The code is clean, well-documented, and follows industry best practices.",
                icon: "💻"
              },
              {
                question: "What if I'm not satisfied?",
                answer: "We offer a 30-day money-back guarantee. If you're not happy with SwiftLaunch for any reason, we'll refund your purchase - no questions asked.",
                icon: "✅"
              },
              {
                question: "How often do you update SwiftLaunch?",
                answer: "We release updates monthly with new features, bug fixes, security patches, and the latest Next.js improvements. Stay ahead with the latest web development trends.",
                icon: "🔄"
              },
              {
                question: "Can I use this for client projects?",
                answer: "Yes! All plans include a commercial license. Pro and Enterprise plans allow unlimited projects. Build websites for your clients without any restrictions.",
                icon: "🏢"
              },
              {
                question: "Do you provide support?",
                answer: "Yes! All plans include community support through our Discord server. Pro and Enterprise customers get priority email support with faster response times.",
                icon: "🛟"
              },
              {
                question: "What technologies are included?",
                answer: "SwiftLaunch includes Next.js 14, TypeScript, Tailwind CSS, shadcn/ui components, Prisma ORM, NextAuth.js, Stripe integration, and many more modern tools.",
                icon: "⚡"
              },
              {
                question: "Is there a refund policy?",
                answer: "We offer a 30-day money-back guarantee on all purchases. If SwiftLaunch doesn't meet your expectations, contact us for a full refund within 30 days.",
                icon: "💰"
              }
            ].map((faq, index) => (
              <Card key={index} className="group bg-card border border-border/50 hover:border-yellow-500/30 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 dark:bg-yellow-500/20 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                      {faq.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-foreground leading-tight group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                        {faq.question}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 pl-16">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-8 max-w-2xl mx-auto border border-yellow-200 dark:border-yellow-500/20">
            <div className="mb-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Join our community of 5000+ developers or reach out to our support team.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black dark:text-yellow-400 dark:hover:text-black font-semibold">
                <Users className="mr-2 h-4 w-4" />
                Join Discord Community
              </Button>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold shadow-lg">
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border-yellow-500/30">Why Choose SwiftLaunch</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">SwiftLaunch vs. Building from Scratch</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Building from Scratch - Time Breakdown */}
          <div className="relative">
            <Card className="border border-red-500/30 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/40 dark:to-orange-950/40 backdrop-blur-sm p-8">
              <div className="text-center mb-8">
                <Clock className="h-12 w-12 text-red-500 dark:text-red-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-2">Building from Scratch</h3>
                <p className="text-red-600 dark:text-red-200/80 text-lg">Time you'll spend on setup instead of features</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {[
                  { task: "Setting up Next.js + TypeScript", time: "6 hrs" },
                  { task: "Configuring Tailwind + UI components", time: "8 hrs" },
                  { task: "Authentication & user management", time: "12 hrs" },
                  { task: "Database setup & migrations", time: "4 hrs" },
                  { task: "API routes & error handling", time: "6 hrs" },
                  { task: "Email templates & notifications", time: "5 hrs" },
                  { task: "Payment integration (Stripe)", time: "8 hrs" },
                  { task: "SEO optimization & meta tags", time: "3 hrs" },
                  { task: "Testing & bug fixes", time: "10 hrs" },
                  { task: "Deployment & CI/CD setup", time: "4 hrs" },
                  { task: "Security hardening", time: "6 hrs" },
                  { task: "Documentation & setup guides", time: "4 hrs" },
                  { task: "Debugging configuration issues", time: "∞ hrs" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-red-700 dark:text-red-200 text-base">
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 dark:bg-red-400 rounded-full mr-3"></div>
                      {item.task}
                    </span>
                    <span className="text-red-600 dark:text-red-300 font-semibold">{item.time}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-red-300 dark:border-red-400/30 pt-6 text-center">
                <div className="text-3xl font-bold text-red-600 dark:text-red-300 mb-2">= 76+ hours</div>
                <div className="text-red-700 dark:text-red-200 flex items-center justify-center">
                  <span>of setup headaches</span>
                  <div className="ml-2 text-red-500 dark:text-red-400">😵‍💫</div>
                </div>
              </div>
            </Card>
          </div>

          {/* With SwiftLaunch */}
          <div className="relative pt-6">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white font-semibold px-4 py-1 z-10 shadow-lg">
              Recommended
            </Badge>
            <Card className="border border-green-500/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/40 dark:to-emerald-950/40 backdrop-blur-sm p-8">
              <div className="text-center mb-8">
                <Zap className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-2">With SwiftLaunch</h3>
                <p className="text-green-600 dark:text-green-200/80 text-lg">Focus on what matters - your unique features</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {[
                  { task: "Clone SwiftLaunch repository", time: "2 min" },
                  { task: "Install dependencies", time: "3 min" },
                  { task: "Configure environment variables", time: "5 min" },
                  { task: "Deploy to production", time: "10 min" },
                  { task: "Customize brand colors & content", time: "30 min" },
                  { task: "Add your unique features", time: "∞ hrs" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-green-700 dark:text-green-200 text-base">
                    <span className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mr-3" />
                      {item.task}
                    </span>
                    <span className="text-green-600 dark:text-green-300 font-semibold">{item.time}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-green-300 dark:border-green-400/30 pt-6 text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-300 mb-2">= 50 minutes</div>
                <div className="text-green-700 dark:text-green-200 flex items-center justify-center">
                  <span>to production-ready app</span>
                  <div className="ml-2 text-green-600 dark:text-green-400">🚀</div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-100 dark:bg-green-500/10 rounded-xl border border-green-200 dark:border-green-500/20">
                <div className="text-center text-green-700 dark:text-green-200">
                  <div className="text-lg font-semibold mb-1">Time Saved:</div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-300">75+ hours</div>
                  <div className="text-sm text-green-600 dark:text-green-300/80">That's almost 2 weeks of work!</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="text-muted-foreground mb-4 flex items-center justify-center">
            <span>⬇️ There's an easier way</span>
          </div>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            Skip the Setup, Start Building <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* CTA Section */}
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
            {/* <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-black text-black hover:bg-black hover:text-white">
              View Documentation
            </Button> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-black" />
                </div>
                <span className="text-2xl font-bold">SwiftLaunch</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md">
                The fastest way to build your next big idea. Join thousands of developers who trust SwiftLaunch for their projects.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                  <Github className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                  <Twitter className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                  <Linkedin className="h-5 w-5" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li><Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li><Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li><Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Community</Link></li>
                <li><Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Status</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-300 dark:border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-600 dark:text-slate-400">&copy; 2024 SwiftLaunch. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Privacy Policy</Link>
              <Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Terms of Service</Link>
              <Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
