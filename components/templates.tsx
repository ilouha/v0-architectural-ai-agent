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
    <div className="bg-card border border-border rounded-2xl p-4 lg:p-6 shadow-lg h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm font-medium">Project Folders</p>
          <p className="text-xs text-muted-foreground">Auto-organized structure</p>
        </div>
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
          <Folder className="w-4 h-4 text-primary" />
        </div>
      </div>
      <div className="space-y-1">
        {folders.map((folder, i) => (
          <div key={i}>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary/50 cursor-pointer group">
              <folder.icon className={`w-4 h-4 ${folder.isOpen ? "text-primary" : "text-muted-foreground"}`} />
              <span className="text-sm flex-1">{folder.name}</span>
              <ChevronRight className={`w-3 h-3 text-muted-foreground transition-transform ${folder.isOpen ? "rotate-90" : ""}`} />
            </div>
            {folder.isOpen && folder.children && (
              <div className="ml-4 pl-3 border-l border-border space-y-1 mt-1">
                {folder.children.map((child, j) => (
                  <div key={j} className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-secondary/50 cursor-pointer">
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
    <div className="bg-card border border-border rounded-2xl p-4 lg:p-6 shadow-lg h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm font-medium">Cost Breakdown</p>
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
              <span className="text-xs font-medium">${item.amount.toLocaleString()}</span>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-700"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-border flex items-center justify-between">
        <span className="text-sm font-medium">Total Budget</span>
        <span className="text-lg font-semibold">${total.toLocaleString()}</span>
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
    <div className="bg-card border border-border rounded-2xl p-4 lg:p-6 shadow-lg h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm font-medium">Contractor List</p>
          <p className="text-xs text-muted-foreground">Vetted professionals</p>
        </div>
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
          <Users className="w-4 h-4 text-primary" />
        </div>
      </div>
      
      <div className="space-y-3">
        {contacts.map((contact, i) => (
          <div key={i} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer">
            <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Building2 className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium truncate">{contact.name}</p>
                {contact.status === "verified" && (
                  <Check className="w-3 h-3 text-primary flex-shrink-0" />
                )}
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
              <button className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Phone className="w-3.5 h-3.5" />
              </button>
              <button className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
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
    signed: { bg: "bg-green-500/10", text: "text-green-600" },
    pending: { bg: "bg-amber-500/10", text: "text-amber-600" },
    verified: { bg: "bg-primary/10", text: "text-primary" },
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-4 lg:p-6 shadow-lg h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm font-medium">Files & Contracts</p>
          <p className="text-xs text-muted-foreground">Everything in one place</p>
        </div>
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
          <FileSignature className="w-4 h-4 text-primary" />
        </div>
      </div>
      
      <div className="space-y-2">
        {files.map((file, i) => (
          <div key={i} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer group">
            <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{file.name}</p>
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{file.date}</span>
              </div>
            </div>
            <div className={`px-2 py-1 rounded-md text-xs font-medium ${statusColors[file.status].bg} ${statusColors[file.status].text}`}>
              {file.status}
            </div>
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Eye className="w-3.5 h-3.5" />
              </button>
              <button className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
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

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % templates.length)
  }

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + templates.length) % templates.length)
  }

  return (
    <section className="py-16 lg:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-16">
          <p className="text-xs sm:text-sm font-medium tracking-widest text-muted-foreground uppercase mb-3 lg:mb-4">
            Ready to use
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-3 lg:mb-4 px-2">
            Preset templates curated by professionals
          </h2>
          <p className="text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Start organized from day one. Our templates are designed by construction professionals 
            to help you track costs, manage contacts, and keep everything in one place.
          </p>
        </div>

        {/* Isometric cards carousel */}
        <div className="relative max-w-sm lg:max-w-md mx-auto h-[420px] lg:h-[480px] mb-8 lg:mb-12" style={{ perspective: "1200px" }}>
          {templates.map((template, index) => {
            const offset = (index - activeIndex + templates.length) % templates.length
            const isActive = offset === 0
            const isNext = offset === 1
            const isPrev = offset === templates.length - 1
            
            let translateX = 0
            let translateY = 0
            let translateZ = 0
            let zIndex = 0
            let opacity = 0
            
            if (isActive) {
              translateX = 0
              translateY = 0
              translateZ = 0
              zIndex = 30
              opacity = 1
            } else if (isNext) {
              translateX = 80
              translateY = 40
              translateZ = -100
              zIndex = 20
              opacity = 0.7
            } else if (isPrev) {
              translateX = -80
              translateY = 40
              translateZ = -100
              zIndex = 10
              opacity = 0.5
            } else {
              translateX = 0
              translateY = 60
              translateZ = -200
              zIndex = 0
              opacity = 0
            }

            const CardComponent = template.component

            return (
              <div
                key={template.id}
                className="absolute inset-0 transition-all duration-500 ease-out cursor-pointer"
                style={{
                  transform: `
                    rotateX(12deg) 
                    rotateY(-8deg) 
                    rotateZ(2deg)
                    translateX(${translateX}px) 
                    translateY(${translateY}px) 
                    translateZ(${translateZ}px)
                  `,
                  zIndex,
                  opacity,
                  transformStyle: "preserve-3d",
                  boxShadow: isActive 
                    ? "20px 30px 60px -10px rgba(0,0,0,0.15), 0 10px 20px -5px rgba(0,0,0,0.1)" 
                    : "10px 15px 30px -5px rgba(0,0,0,0.1)",
                }}
                onClick={() => {
                  if (isNext) nextCard()
                  else if (isPrev) prevCard()
                }}
              >
                <CardComponent />
              </div>
            )
          })}
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <Button
            variant="outline"
            size="icon"
            onClick={prevCard}
            className="w-10 h-10 rounded-full bg-transparent"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex items-center gap-2">
            {templates.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? "w-8 bg-primary" 
                    : "w-2 bg-muted hover:bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextCard}
            className="w-10 h-10 rounded-full bg-transparent"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Current card title */}
        <div className="text-center mb-12">
          <p className="text-lg font-semibold">{templates[activeIndex].title}</p>
          <p className="text-sm text-muted-foreground">{templates[activeIndex].description}</p>
        </div>

        {/* Features list */}
        <div className="grid grid-cols-2 lg:flex lg:flex-wrap items-center justify-center gap-x-6 lg:gap-x-8 gap-y-3 lg:gap-y-4 pt-8 lg:pt-12 border-t border-border">
          {[
            "Instant setup",
            "Industry-standard",
            "Customizable",
            "Email sync"
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-primary" />
              </div>
              <span className="text-xs lg:text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
