"use client"

import { useState } from "react"
import { Folder, FolderOpen, FileText, DollarSign, Users, Phone, Mail, Building2, ChevronRight, Check, Star, ChevronLeft, FileSignature, Download, Eye, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

function FolderStructureVisual() {
  const folders = [
    {
      name: "Kitchen Renovation",
      icon: FolderOpen,
      isOpen: true,
      children: [
        { name: "Contracts", icon: Folder },
        { name: "Quotes", icon: Folder },
        { name: "Permits", icon: Folder },
        { name: "Receipts", icon: Folder },
      ]
    },
    { name: "Bathroom Remodel", icon: Folder },
    { name: "Deck Addition", icon: Folder },
  ]

  return (
    <div className="bg-white border border-border rounded-lg p-6 shadow-lg shadow-black/5 h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm font-medium text-foreground font-[var(--font-heading)]">Project Folders</p>
          <p className="text-xs text-muted-foreground">Auto-organized structure</p>
        </div>
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
          <Folder className="w-4 h-4 text-primary" />
        </div>
      </div>
      <div className="space-y-1">
        {folders.map((folder, i) => (
          <div key={i}>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary cursor-pointer group">
              <folder.icon className={`w-4 h-4 ${folder.isOpen ? "text-primary" : "text-muted-foreground"}`} />
              <span className="text-sm flex-1 text-foreground">{folder.name}</span>
              <ChevronRight className={`w-3 h-3 text-muted-foreground transition-transform ${folder.isOpen ? "rotate-90" : ""}`} />
            </div>
            {folder.isOpen && folder.children && (
              <div className="ml-4 pl-3 border-l border-border space-y-1 mt-1">
                {folder.children.map((child, j) => (
                  <div key={j} className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-secondary cursor-pointer">
                    <child.icon className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{child.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function CostTemplateVisual() {
  const items = [
    { category: "Materials", amount: 12500, percentage: 35 },
    { category: "Labor", amount: 18000, percentage: 50 },
    { category: "Permits", amount: 2500, percentage: 7 },
    { category: "Contingency", amount: 2850, percentage: 8 },
  ]
  const total = items.reduce((sum, item) => sum + item.amount, 0)

  return (
    <div className="bg-white border border-border rounded-lg p-6 shadow-lg shadow-black/5 h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm font-medium text-foreground font-[var(--font-heading)]">Cost Breakdown</p>
          <p className="text-xs text-muted-foreground">Pre-built budget template</p>
        </div>
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
          <DollarSign className="w-4 h-4 text-primary" />
        </div>
      </div>
      <div className="space-y-3 mb-6">
        {items.map((item, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs text-muted-foreground">{item.category}</span>
              <span className="text-xs font-medium text-foreground">${item.amount.toLocaleString()}</span>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-700"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="pt-4 border-t border-border flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">Total Budget</span>
        <span className="text-lg font-semibold text-foreground font-[var(--font-heading)]">${total.toLocaleString()}</span>
      </div>
    </div>
  )
}

function ContactListVisual() {
  const contacts = [
    { name: "Mike's Plumbing", role: "Plumber", rating: 4.9, status: "verified" },
    { name: "Elite Electric", role: "Electrician", rating: 4.8, status: "verified" },
    { name: "ABC Contracting", role: "General", rating: 4.7, status: "verified" },
    { name: "City Permits", role: "Permits Office", rating: null, status: "official" },
  ]

  return (
    <div className="bg-white border border-border rounded-lg p-6 shadow-lg shadow-black/5 h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm font-medium text-foreground font-[var(--font-heading)]">Contractor List</p>
          <p className="text-xs text-muted-foreground">Vetted professionals</p>
        </div>
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
          <Users className="w-4 h-4 text-primary" />
        </div>
      </div>
      <div className="space-y-3">
        {contacts.map((contact, i) => (
          <div key={i} className="flex items-center gap-3 p-3 bg-secondary/50 border border-border rounded-md hover:bg-secondary transition-colors cursor-pointer">
            <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Building2 className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-foreground truncate">{contact.name}</p>
                {contact.status === "verified" && <Check className="w-3 h-3 text-emerald-600 flex-shrink-0" />}
              </div>
              <div className="flex items-center gap-2">
                <p className="text-xs text-muted-foreground">{contact.role}</p>
                {contact.rating && (
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span className="text-xs text-muted-foreground">{contact.rating}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-1.5">
              <button className="w-7 h-7 rounded-lg bg-white border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer">
                <Phone className="w-3.5 h-3.5" />
              </button>
              <button className="w-7 h-7 rounded-lg bg-white border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer">
                <Mail className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FilesContractsVisual() {
  const files = [
    { name: "General Contract.pdf", type: "contract", status: "signed", date: "Jan 15" },
    { name: "Kitchen Scope.pdf", type: "scope", status: "pending", date: "Jan 18" },
    { name: "Insurance Certificate.pdf", type: "document", status: "verified", date: "Jan 10" },
    { name: "Change Order #1.pdf", type: "contract", status: "signed", date: "Feb 2" },
  ]

  const statusColors: Record<string, { bg: string; text: string }> = {
    signed: { bg: "bg-emerald-50", text: "text-emerald-700" },
    pending: { bg: "bg-amber-50", text: "text-amber-700" },
    verified: { bg: "bg-primary/10", text: "text-primary" },
  }

  return (
    <div className="bg-white border border-border rounded-lg p-6 shadow-lg shadow-black/5 h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm font-medium text-foreground font-[var(--font-heading)]">Files & Contracts</p>
          <p className="text-xs text-muted-foreground">Everything in one place</p>
        </div>
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
          <FileSignature className="w-4 h-4 text-primary" />
        </div>
      </div>
      <div className="space-y-2">
        {files.map((file, i) => (
          <div key={i} className="flex items-center gap-3 p-3 bg-secondary/50 border border-border rounded-md hover:bg-secondary transition-colors cursor-pointer group">
            <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{file.name}</p>
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{file.date}</span>
              </div>
            </div>
            <div className={`px-2 py-1 rounded-md text-xs font-medium ${statusColors[file.status].bg} ${statusColors[file.status].text}`}>
              {file.status}
            </div>
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="w-7 h-7 rounded-lg bg-white border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer">
                <Eye className="w-3.5 h-3.5" />
              </button>
              <button className="w-7 h-7 rounded-lg bg-white border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer">
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
        <span className="text-xs text-muted-foreground">4 documents</span>
        <span className="text-xs text-primary font-medium cursor-pointer hover:underline">View all</span>
      </div>
    </div>
  )
}

const templates = [
  { id: 0, title: "Project Folders", description: "Auto-organized structure", component: FolderStructureVisual },
  { id: 1, title: "Cost Breakdown", description: "Pre-built budget template", component: CostTemplateVisual },
  { id: 2, title: "Contractor List", description: "Vetted professionals", component: ContactListVisual },
  { id: 3, title: "Files & Contracts", description: "Everything in one place", component: FilesContractsVisual },
]

export function Templates() {
  const [activeIndex, setActiveIndex] = useState(0)
  const nextCard = () => setActiveIndex((prev) => (prev + 1) % templates.length)
  const prevCard = () => setActiveIndex((prev) => (prev - 1 + templates.length) % templates.length)

  return (
    <section className="py-24 lg:py-40 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <p className="text-xs font-medium tracking-widest text-primary uppercase mb-4 font-[var(--font-heading)]">
            Ready to use
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground font-[var(--font-heading)]">
            Industry knowledge{" "}
            <span className="text-muted-foreground">curated by professionals</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Start organized from day one. Our templates are designed by construction professionals
            to help you track costs, manage contacts, and keep everything in one place.
          </p>
        </div>

        {/* Stacked cards carousel */}
        <div className="relative max-w-sm lg:max-w-md mx-auto h-[380px] lg:h-[420px] mb-12">
          {templates.map((template, index) => {
            const offset = (index - activeIndex + templates.length) % templates.length
            const isActive = offset === 0
            const isNext = offset === 1
            const isPrev = offset === templates.length - 1

            let transform = "", zIndex = 0, opacity = 0, scale = 1

            if (isActive) { transform = "translateX(0) rotateY(0deg)"; zIndex = 30; opacity = 1; scale = 1 }
            else if (isNext) { transform = "translateX(30px) rotateY(-8deg)"; zIndex = 20; opacity = 0.6; scale = 0.92 }
            else if (isPrev) { transform = "translateX(-30px) rotateY(8deg)"; zIndex = 10; opacity = 0.4; scale = 0.88 }
            else { transform = "translateX(0) rotateY(0deg)"; zIndex = 0; opacity = 0; scale = 0.85 }

            const CardComponent = template.component

            return (
              <div
                key={template.id}
                className="absolute inset-0 transition-all duration-500 ease-out cursor-pointer"
                style={{ transform: `perspective(1000px) ${transform} scale(${scale})`, zIndex, opacity, transformStyle: "preserve-3d" }}
                onClick={() => { if (isNext) nextCard(); else if (isPrev) prevCard() }}
              >
                <CardComponent />
              </div>
            )
          })}
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <Button variant="outline" size="icon" onClick={prevCard} className="w-10 h-10 rounded-full">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <div className="flex items-center gap-2">
            {templates.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === activeIndex ? "w-8 bg-primary" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
          <Button variant="outline" size="icon" onClick={nextCard} className="w-10 h-10 rounded-full">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Current card title */}
        <div className="text-center mb-12">
          <p className="text-lg font-semibold text-foreground font-[var(--font-heading)]">{templates[activeIndex].title}</p>
          <p className="text-sm text-muted-foreground">{templates[activeIndex].description}</p>
        </div>

        {/* Features list */}
        <div className="grid grid-cols-2 lg:flex lg:flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-8 border-t border-border">
          {["Instant setup", "Industry-standard", "Customizable", "Email sync"].map((feature, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
