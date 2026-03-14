"use client"

import { Compass, FileCheck, Calculator, FolderOpen, Users, Calendar, ArrowRight } from "lucide-react"

const capabilities = [
  {
    icon: Compass,
    title: "Design guidance",
    description: "Space planning, materials selection, and aesthetic choices tailored to your style and budget.",
    tags: ["Interior Planning", "Materials", "Style"]
  },
  {
    icon: FileCheck,
    title: "Permit navigation",
    description: "Demystify local requirements with guidance on codes, documentation, and approval timelines.",
    tags: ["Zoning", "Codes", "Documentation"]
  },
  {
    icon: Calculator,
    title: "Budget planning",
    description: "Detailed cost breakdowns, hidden cost identification, and advice on where to invest.",
    tags: ["Estimates", "ROI", "Value Engineering"]
  },
  {
    icon: FolderOpen,
    title: "Project documentation",
    description: "Keep everything organized with guidance on contracts, specs, and change management.",
    tags: ["Contracts", "Specs", "Change Orders"]
  },
  {
    icon: Users,
    title: "Contractor support",
    description: "Learn what questions to ask, red flags to watch, and how to communicate with your team.",
    tags: ["Vetting", "Communication", "QC"]
  },
  {
    icon: Calendar,
    title: "Timeline management",
    description: "Realistic schedules, critical milestones, and strategies to keep your project on track.",
    tags: ["Scheduling", "Milestones", "Delays"]
  }
]

export function Services() {
  return (
    <section id="capabilities" className="py-24 lg:py-40 relative overflow-hidden bg-white">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-12 lg:mb-20">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-widest text-primary uppercase mb-4 font-[var(--font-heading)]">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-[var(--font-heading)]">
              Agents that work for you{" "}
              <span className="text-muted-foreground">as an infinite team</span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all cursor-pointer"
          >
            View all features
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="group p-6 bg-background border border-border rounded-lg hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
            >
              <div className="w-11 h-11 bg-primary/10 rounded-md flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <capability.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground font-[var(--font-heading)]">{capability.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{capability.description}</p>
              <div className="flex flex-wrap gap-2">
                {capability.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-muted-foreground px-2.5 py-1 bg-secondary border border-border rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
