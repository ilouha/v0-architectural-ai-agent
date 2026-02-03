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
    <section id="how-it-works" className="py-16 lg:py-32 bg-gradient-to-b from-background via-secondary to-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-10 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-3 lg:mb-4">
            From vision to reality, guided every step
          </h2>
          <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
            A clear process that transforms overwhelming construction projects into manageable, achievable milestones.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-px bg-border" />
              )}
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center border border-border group-hover:border-foreground/20 transition-colors">
                    <step.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <span className="text-sm font-mono text-muted-foreground">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
