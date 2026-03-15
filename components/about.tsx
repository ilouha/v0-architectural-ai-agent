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
    <section id="about" className="py-24 lg:py-36 overflow-hidden relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/40 to-secondary/20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="relative rounded-2xl p-8 lg:p-14 overflow-hidden bg-white text-foreground card-shadow-lg">
          {/* Subtle inner gradient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_30%_20%,rgba(30,90,168,0.03),transparent_60%)] pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-secondary/60 to-secondary/30 rounded-xl p-8 lg:p-10 flex flex-col justify-between">
                {/* Archie avatar */}
                <div>
                  <div className="w-14 lg:w-16 h-14 lg:h-16 bg-primary rounded-full flex items-center justify-center mb-6 shadow-[0_4px_16px_rgba(30,90,168,0.25)]">
                    <span className="text-white font-bold text-xl lg:text-2xl font-[var(--font-heading)]">A</span>
                  </div>
                  <p className="text-xl lg:text-2xl font-normal leading-snug max-w-sm text-foreground/80 font-[var(--font-heading)]">
                    {'"'}I{"'"}m here to make your project less stressful, not more complicated.{'"'}
                  </p>
                </div>

                {/* Personality tags */}
                <div className="flex flex-wrap gap-2 pt-8">
                  {["Knowledgeable", "Patient", "Practical", "Honest"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-foreground/70 shadow-[0_1px_3px_rgba(30,90,168,0.06)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex flex-col gap-7">
              <div>
                <p className="text-sm font-medium text-primary mb-3 font-[var(--font-heading)]">
                  Meet Archie
                </p>
                <h2 className="text-3xl lg:text-[2.5rem] font-bold tracking-tight mb-5 text-foreground font-[var(--font-heading)] leading-[1.1]">
                  Not just smart. <span className="gradient-text">Genuinely helpful.</span>
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We built Archie because everyone deserves access to expert construction guidance.
                  Renovations are among the biggest investments you{"'"}ll make, yet most homeowners
                  navigate them without professional support. Archie changes that.
                </p>
              </div>

              <ul className="flex flex-col gap-2.5">
                {traits.map((trait) => (
                  <li key={trait} className="flex items-start gap-3">
                    <div className="w-4 h-4 bg-primary/8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{trait}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-8 pt-6 border-t border-border/50">
                <div>
                  <p className="text-2xl font-semibold text-foreground font-[var(--font-heading)]">24/7</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Always available</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-foreground font-[var(--font-heading)]">{"<"}15s</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Response time</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-foreground font-[var(--font-heading)]">98%</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Satisfaction</p>
                </div>
              </div>

              <Button size="lg" className="w-fit gap-2 h-11 text-sm rounded-lg">
                Start a conversation
                <ArrowRight className="w-3.5 h-3.5 btn-arrow" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
