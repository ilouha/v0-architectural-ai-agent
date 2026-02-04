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
    <section id="capabilities" className="py-16 lg:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-10 lg:mb-16">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-2 lg:mb-3">Capabilities</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
              Agents that work for you as an infinite team
            </h2>
          </div>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
          >
            View all features
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {capabilities.map((capability) => (
            <div 
              key={capability.title}
              className="group p-4 lg:p-6 bg-secondary rounded-2xl hover:bg-secondary/80 transition-colors"
            >
              <div className="w-9 h-9 lg:w-10 lg:h-10 bg-accent rounded-lg flex items-center justify-center mb-4 lg:mb-5 border border-ring/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <capability.icon className="w-4 h-4 lg:w-5 lg:h-5" />
              </div>
              <h3 className="text-base lg:text-lg font-semibold mb-2">{capability.title}</h3>
              <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed mb-3 lg:mb-4">{capability.description}</p>
              <div className="flex flex-wrap gap-2">
                {capability.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs font-medium text-muted-foreground px-2.5 py-1 bg-card backdrop-blur-xl rounded-md border border-border"
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
