"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const traits = [
  "Explains complex concepts in simple terms",
  "Available 24/7 whenever you have questions",
  "Remembers your project details and preferences",
  "Gives honest advice, not just what you want to hear"
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-40 overflow-hidden bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-lg p-8 lg:p-16 overflow-hidden bg-primary/5 border border-primary/15 text-foreground">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-[120px]" />
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Visual */}
            <div className="relative">
              <div className="aspect-square bg-white/60 rounded-lg p-8 lg:p-12 flex flex-col justify-between border border-border">
                {/* Archie avatar */}
                <div>
                  <div className="w-16 lg:w-20 h-16 lg:h-20 bg-primary rounded-full flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-2xl lg:text-3xl font-[var(--font-heading)]">A</span>
                  </div>
                  <p className="text-xl lg:text-3xl font-semibold leading-tight max-w-sm text-foreground font-[var(--font-heading)]">
                    {'"'}I{"'"}m here to make your project less stressful, not more complicated.{'"'}
                  </p>
                </div>

                {/* Personality tags */}
                <div className="flex flex-wrap gap-2 pt-8">
                  {["Knowledgeable", "Patient", "Practical", "Honest"].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-primary/10 border border-primary/15 rounded-full text-sm font-medium text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs font-medium tracking-widest text-primary uppercase mb-3 font-[var(--font-heading)]">
                  Meet Archie
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6 text-foreground font-[var(--font-heading)]">
                  Not just smart. <span className="gradient-text">Genuinely helpful.</span>
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We built Archie because everyone deserves access to expert construction guidance.
                  Renovations are among the biggest investments you{"'"}ll make, yet most homeowners
                  navigate them without professional support. Archie changes that.
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {traits.map((trait) => (
                  <li key={trait} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{trait}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-8 pt-6 border-t border-border">
                <div>
                  <p className="text-3xl font-bold text-foreground font-[var(--font-heading)]">24/7</p>
                  <p className="text-sm text-muted-foreground">Always available</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground font-[var(--font-heading)]">{"<"}15s</p>
                  <p className="text-sm text-muted-foreground">Response time</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground font-[var(--font-heading)]">98%</p>
                  <p className="text-sm text-muted-foreground">Satisfaction</p>
                </div>
              </div>

              <Button size="lg" className="w-fit gap-2">
                Start a conversation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
