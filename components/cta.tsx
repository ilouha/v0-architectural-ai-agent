"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 lg:py-36 overflow-hidden relative">
      {/* Gradient into CTA */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="relative rounded-2xl p-8 lg:p-14 overflow-hidden bg-white text-foreground card-shadow-lg">
          {/* Inner gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_70%_50%,rgba(30,90,168,0.03),transparent_60%)] pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight mb-5 leading-[1.1] text-foreground font-[var(--font-heading)]">
                Ready to start <span className="gradient-text">your project?</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md mb-8">
                Archie is ready to help you navigate your renovation journey. Whether you{"'"}re
                in the dreaming phase or ready to break ground, start a conversation today.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="h-11 px-7 gap-2 text-sm rounded-lg">
                  Meet Archie now
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-11 px-7 text-sm rounded-lg"
                >
                  Schedule demo
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-5">
                Free to start. No credit card required.
              </p>
            </div>

            {/* Right - Stats */}
            <div className="flex flex-col gap-6 lg:pl-14 lg:border-l lg:border-border/40">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_4px_16px_rgba(30,90,168,0.25)]">
                  <span className="text-white font-bold text-lg font-[var(--font-heading)]">A</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground font-[var(--font-heading)]">archie</p>
                  <p className="text-xs text-muted-foreground">Your project co-pilot</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-5 border-t border-border/40">
                <div>
                  <p className="text-2xl font-semibold text-foreground font-[var(--font-heading)]">10k+</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Projects</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-foreground font-[var(--font-heading)]">$47M</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Guided</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-foreground font-[var(--font-heading)]">4.9</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
