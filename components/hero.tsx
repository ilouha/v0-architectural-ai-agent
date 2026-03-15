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
      {/* Radial spotlight gradient — light source from top center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(30,90,168,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-10">
            {/* Badge */}
            <p className="text-sm text-muted-foreground hero-animate">
              <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mr-2 relative top-[-1px]" />
              Trusted by 500+ homeowners
            </p>

            {/* Mobile/Tablet blueprint animation */}
            <div className="lg:hidden w-full aspect-square max-w-[340px] sm:max-w-[400px] mx-auto overflow-hidden hero-visual-animate">
              <ArchieBlueprintAnimation />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[4.25rem] font-bold tracking-tight leading-[0.95] text-foreground font-[var(--font-heading)] hero-animate hero-animate-delay-1">
              Meet{" "}
              <span className="gradient-text">Archie</span>
              , your project{" "}
              <span className="whitespace-nowrap">co-pilot</span>
            </h1>

            <p className="text-base lg:text-lg text-muted-foreground max-w-lg leading-relaxed hero-animate hero-animate-delay-2">
              Expert guidance for your renovation or construction project. From permits and zoning to budgets and contractor coordination.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 hero-animate hero-animate-delay-3">
              <Button size="lg" className="h-11 px-7 gap-2 text-sm rounded-lg">
                Start building with Archie
                <ArrowRight className="w-3.5 h-3.5 btn-arrow" />
              </Button>
              <Button variant="outline" size="lg" className="h-11 px-7 gap-2 text-sm rounded-lg">
                <Play className="w-3.5 h-3.5" />
                Watch demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/60 hero-animate hero-animate-delay-4">
              <div>
                <p className="text-2xl lg:text-4xl font-semibold tracking-tight text-foreground font-[var(--font-heading)]">
                  <AnimatedNumber value={500} suffix="+" />
                </p>
                <p className="text-xs text-muted-foreground mt-1.5">Projects guided</p>
              </div>
              <div className="border-l border-border/60 pl-6">
                <p className="text-2xl lg:text-4xl font-semibold tracking-tight text-foreground font-[var(--font-heading)]">
                  <AnimatedNumber value={15} suffix="%" />
                </p>
                <p className="text-xs text-muted-foreground mt-1.5">Costs saved</p>
              </div>
              <div className="border-l border-border/60 pl-6">
                <p className="text-2xl lg:text-4xl font-semibold tracking-tight text-foreground font-[var(--font-heading)]">
                  <AnimatedNumber value={4.9} decimals={1} />
                </p>
                <p className="text-xs text-muted-foreground mt-1.5">User rating</p>
              </div>
            </div>
          </div>

          {/* Right - Blueprint animation (desktop only) — clean, no extra blobs */}
          <div className="relative hidden lg:block hero-visual-animate">
            <div className="w-[156%] aspect-square max-w-[780px] -mr-[28%]">
              <ArchieBlueprintAnimation />
            </div>
          </div>
        </div>
      </div>

      {/* Trusted by section — marquee */}
      <div className="relative z-10 mt-12 lg:mt-20 hero-animate hero-animate-delay-5">
        <div className="border-t border-border/40 bg-gradient-to-b from-secondary/30 to-transparent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
            <p className="text-xs text-muted-foreground text-center mb-6 tracking-widest uppercase">
              Trusted by homeowners and professionals
            </p>
            <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
              <div className="marquee-track">
                {[...Array(2)].map((_, dupeIdx) => (
                  <div key={dupeIdx} className="flex items-center shrink-0">
                    {["Zillow", "Houzz", "HomeAdvisor", "Angi", "BuilderTrend", "Thumbtack", "Porch"].map((brand) => (
                      <span key={`${brand}-${dupeIdx}`} className="text-xl font-semibold text-foreground/20 font-[var(--font-heading)] tracking-tight mx-10 whitespace-nowrap select-none">
                        {brand}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
