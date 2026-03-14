"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 lg:py-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-lg p-8 lg:p-16 overflow-hidden bg-primary/5 border border-primary/15 text-foreground">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary/3 rounded-full blur-[100px]" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight text-foreground font-[var(--font-heading)]">
                Ready to start <span className="gradient-text">your project?</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-md mb-8">
                Archie is ready to help you navigate your renovation journey. Whether you{"'"}re
                in the dreaming phase or ready to break ground, start a conversation today.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="h-13 px-8 gap-2 text-base">
                  Meet Archie now
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-13 px-8 text-base"
                >
                  Schedule demo
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                Free to start. No credit card required.
              </p>
            </div>

            {/* Right - Stats */}
            <div className="flex flex-col gap-6 lg:pl-16 lg:border-l lg:border-border">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl font-[var(--font-heading)]">A</span>
                </div>
                <div>
                  <p className="font-semibold text-lg text-foreground font-[var(--font-heading)]">archie</p>
                  <p className="text-sm text-muted-foreground">Your project co-pilot</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                <div>
                  <p className="text-3xl font-bold text-foreground font-[var(--font-heading)]">10k+</p>
                  <p className="text-xs text-muted-foreground mt-1">Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground font-[var(--font-heading)]">$47M</p>
                  <p className="text-xs text-muted-foreground mt-1">Guided</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground font-[var(--font-heading)]">4.9</p>
                  <p className="text-xs text-muted-foreground mt-1">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
