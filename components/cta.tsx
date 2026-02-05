"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-16 lg:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative bg-[rgb(55,90,140)] text-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-16 overflow-hidden shadow-2xl">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left content */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight mb-4 lg:mb-6 leading-tight">
                Ready to start your project?
              </h2>
              <p className="text-sm lg:text-base text-primary-foreground/70 leading-relaxed max-w-md mb-6 lg:mb-8">
                Archie is ready to help you navigate your renovation journey. Whether you{"'"}re 
                in the dreaming phase or ready to break ground, start a conversation today.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="secondary" size="lg" className="h-12 px-6 gap-2">
                  Meet Archie now
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-12 px-6 border-primary-foreground/20 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
                >
                  Schedule demo
                </Button>
              </div>

              <p className="text-sm text-primary-foreground/50 mt-6">
                Free to start. No credit card required.
              </p>
            </div>

            {/* Right - Stats */}
            <div className="flex flex-col gap-6 lg:pl-16 lg:border-l lg:border-background/10">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary-foreground rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-xl">A</span>
                </div>
                <div>
                  <p className="font-semibold text-lg">archie</p>
                  <p className="text-sm text-primary-foreground/60">Your pocket architect</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-4 lg:pt-6 border-t border-primary-foreground/10">
                <div>
                  <p className="text-xl lg:text-3xl font-semibold">10k+</p>
                  <p className="text-xs text-primary-foreground/50 mt-1">Projects</p>
                </div>
                <div>
                  <p className="text-xl lg:text-3xl font-semibold">$47M</p>
                  <p className="text-xs text-primary-foreground/50 mt-1">Guided</p>
                </div>
                <div>
                  <p className="text-xl lg:text-3xl font-semibold">4.9</p>
                  <p className="text-xs text-primary-foreground/50 mt-1">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
