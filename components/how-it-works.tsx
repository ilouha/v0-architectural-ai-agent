"use client"

import { MessageSquare, FileSearch, ClipboardList, HardHat } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Describe your project",
    description: "Tell Archie what you're building. Kitchen remodel, home addition, or full renovation - Archie understands scope, goals, and constraints."
  },
  {
    icon: FileSearch,
    number: "02",
    title: "Get expert analysis",
    description: "Receive personalized guidance on permits, zoning, materials, and timeline. Archie pulls from local regulations and industry best practices."
  },
  {
    icon: ClipboardList,
    number: "03",
    title: "Plan with clarity",
    description: "Get detailed cost breakdowns, contractor questions, and milestone roadmaps. Know what to expect before breaking ground."
  },
  {
    icon: HardHat,
    number: "04",
    title: "Build with confidence",
    description: "Throughout construction, Archie stays with you. Get real-time answers, progress tracking, and help navigating any challenges."
  }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-40 relative overflow-hidden bg-white">
      {/* Warm accent background */}
      <div className="absolute top-0 left-0 w-[300px] h-[400px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-xs font-medium tracking-widest text-primary uppercase mb-4 font-[var(--font-heading)]">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground font-[var(--font-heading)]">
            From vision to reality,{" "}
            <span className="text-muted-foreground">guided every step</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            A clear process that transforms overwhelming construction projects into manageable, achievable milestones.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(100%+0.5rem)] w-[calc(100%-1rem)] h-px bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="flex flex-col gap-5 p-6 rounded-lg bg-white border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-2xl font-bold text-border/60 font-[var(--font-heading)]">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground font-[var(--font-heading)]">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
