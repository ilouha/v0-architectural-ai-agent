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
    <section id="how-it-works" className="py-24 lg:py-36 relative overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(30,90,168,0.03),transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-14 lg:mb-16">
          <p className="text-sm font-medium text-primary mb-3 font-[var(--font-heading)]">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight mb-4 text-foreground font-[var(--font-heading)] leading-[1.1]">
            From vision to reality,{" "}
            <span className="text-muted-foreground">guided every step</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A clear process that transforms overwhelming construction projects into manageable, achievable milestones.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {steps.map((step) => (
            <div key={step.number} className="group">
              <div className="flex flex-col gap-4 p-5 rounded-xl bg-white border border-border/40 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-primary/8 rounded-lg flex items-center justify-center">
                    <step.icon className="w-[18px] h-[18px] text-primary" />
                  </div>
                  <span className="text-[2rem] font-bold text-primary/[0.08] font-[var(--font-heading)] leading-none">{step.number}</span>
                </div>
                <h3 className="text-[15px] font-semibold text-foreground font-[var(--font-heading)]">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
