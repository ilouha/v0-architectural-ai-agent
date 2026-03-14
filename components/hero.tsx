"use client"

import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"
import { ArchieBlueprintAnimation } from "./archie-blueprint"

function AnimatedNumber({ value, prefix = "", suffix = "", decimals = 0 }: { value: number; prefix?: string; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(current)
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <span ref={ref}>
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}{suffix}
    </span>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden">
      {/* Warm background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-background to-background" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-light/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full w-fit">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs font-medium text-primary">Trusted by 500+ homeowners</span>
            </div>

            {/* Mobile/Tablet blueprint animation - above the title */}
            <div className="lg:hidden w-full aspect-square max-w-[340px] sm:max-w-[400px] mx-auto overflow-hidden">
              <ArchieBlueprintAnimation />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground font-[var(--font-heading)]">
              Meet{" "}
              <span className="gradient-text">Archie</span>
              , your project <span className="whitespace-nowrap">co-pilot</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Expert guidance for your renovation or construction project. From permits and zoning to budgets and contractor coordination - Archie has your back.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="h-13 px-8 gap-2 text-base">
                Start building with Archie
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="h-13 px-8 gap-2 text-base">
                <Play className="w-4 h-4" />
                Watch demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground font-[var(--font-heading)]">
                  <AnimatedNumber value={500} suffix="+" />
                </p>
                <p className="text-sm text-muted-foreground mt-1">Projects guided</p>
              </div>
              <div className="border-l border-border pl-6">
                <p className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground font-[var(--font-heading)]">
                  <AnimatedNumber value={15} suffix="%" />
                </p>
                <p className="text-sm text-muted-foreground mt-1">Costs saved</p>
              </div>
              <div className="border-l border-border pl-6">
                <p className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground font-[var(--font-heading)]">
                  <AnimatedNumber value={4.9} decimals={1} />
                </p>
                <p className="text-sm text-muted-foreground mt-1">User rating</p>
              </div>
            </div>
          </div>

          {/* Right - Blueprint animation (desktop only) */}
          <div className="relative hidden lg:block">
            <div className="w-[156%] aspect-square max-w-[780px] -mr-[28%]">
              <ArchieBlueprintAnimation />
            </div>
          </div>
        </div>
      </div>

      {/* Trusted by section */}
      <div className="relative z-10 border-t border-border mt-12 lg:mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase text-center mb-8">
            Trusted by homeowners and professionals
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["Zillow", "Houzz", "HomeAdvisor", "Angi", "BuilderTrend"].map((brand) => (
              <span key={brand} className="text-lg font-semibold text-border font-[var(--font-heading)] tracking-tight">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
