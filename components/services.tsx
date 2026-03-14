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
    <section id="capabilities" className="py-24 lg:py-36 relative overflow-hidden">
      {/* Gradient fade from previous section */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(30,90,168,0.04),transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary mb-3 font-[var(--font-heading)]">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-foreground font-[var(--font-heading)] leading-[1.1]">
              Agents that work for you{" "}
              <span className="text-muted-foreground">as an infinite team</span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all cursor-pointer"
          >
            View all features
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="group p-5 bg-white rounded-xl border border-border/40 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-9 h-9 bg-primary/8 rounded-lg flex items-center justify-center mb-4">
                <capability.icon className="w-[18px] h-[18px] text-primary" />
              </div>
              <h3 className="text-[15px] font-semibold mb-2 text-foreground font-[var(--font-heading)]">{capability.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{capability.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {capability.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-muted-foreground/70 px-2 py-0.5 bg-secondary rounded-md"
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
