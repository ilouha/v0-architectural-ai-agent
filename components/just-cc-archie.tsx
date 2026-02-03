"use client"

import { useState, useEffect } from "react"
import { Mail, Brain, FileSearch, MessageSquare, CheckCircle2, ArrowRight, Sparkles } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "CC Archie on any email",
    description: "Simply add archie@architype.ai to your contractor emails",
    visual: "email"
  },
  {
    id: 2,
    title: "Archie reads the conversation",
    description: "AI analyzes the full email thread and context",
    visual: "reading"
  },
  {
    id: 3,
    title: "Archie processes the details",
    description: "Extracting quotes, timelines, and key decisions",
    visual: "processing"
  },
  {
    id: 4,
    title: "You get expert guidance",
    description: "Receive actionable advice tailored to your project",
    visual: "response"
  }
]

function EmailVisual({ active }: { active: boolean }) {
  return (
    <div className={`transition-all duration-500 ${active ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
      <div className="bg-card border border-border rounded-xl p-4 lg:p-6 max-w-xs lg:max-w-sm mx-auto shadow-sm">
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">New Email</p>
            <p className="text-xs text-muted-foreground">to: contractor@build.com</p>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">To:</span>
            <span>contractor@build.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">CC:</span>
            <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded text-xs font-medium">
              archie@architype.ai
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Subject:</span>
            <span>Kitchen renovation quote</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Hi Mike, thanks for the quote. Can you break down the $45k estimate? Also, what's the timeline looking like...
          </p>
        </div>
      </div>
    </div>
  )
}

function ReadingVisual({ active }: { active: boolean }) {
  const [scanLine, setScanLine] = useState(0)
  
  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        setScanLine(prev => (prev + 1) % 5)
      }, 600)
      return () => clearInterval(interval)
    }
  }, [active])

  return (
    <div className={`transition-all duration-500 ${active ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
      <div className="bg-card border border-border rounded-xl p-4 lg:p-6 max-w-xs lg:max-w-sm mx-auto shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
            <FileSearch className="w-5 h-5 text-background" />
          </div>
          <div>
            <p className="text-sm font-medium">Archie is reading</p>
            <p className="text-xs text-muted-foreground">Analyzing email thread...</p>
          </div>
        </div>
        <div className="space-y-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div 
              key={i}
              className={`h-3 rounded transition-all duration-300 ${
                i === scanLine 
                  ? "bg-foreground" 
                  : i < scanLine 
                    ? "bg-foreground/20" 
                    : "bg-muted"
              }`}
              style={{ width: `${70 + Math.random() * 30}%` }}
            />
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
          <p className="text-xs text-muted-foreground">Processing 3 emails in thread</p>
        </div>
      </div>
    </div>
  )
}

function ProcessingVisual({ active }: { active: boolean }) {
  const [progress, setProgress] = useState([0, 0, 0])
  
  useEffect(() => {
    if (active) {
      const timers = [
        setTimeout(() => setProgress(p => [100, p[1], p[2]]), 400),
        setTimeout(() => setProgress(p => [p[0], 100, p[2]]), 800),
        setTimeout(() => setProgress(p => [p[0], p[1], 75]), 1200),
      ]
      return () => timers.forEach(clearTimeout)
    } else {
      setProgress([0, 0, 0])
    }
  }, [active])

  const items = [
    { label: "Extracting quote details", icon: FileSearch },
    { label: "Analyzing timeline", icon: Brain },
    { label: "Checking market rates", icon: Sparkles },
  ]

  return (
    <div className={`transition-all duration-500 ${active ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
      <div className="bg-card border border-border rounded-xl p-4 lg:p-6 max-w-xs lg:max-w-sm mx-auto shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
            <Brain className="w-5 h-5 text-background" />
          </div>
          <div>
            <p className="text-sm font-medium">Processing project</p>
            <p className="text-xs text-muted-foreground">Organizing your data</p>
          </div>
        </div>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="bg-secondary/50 rounded-lg px-4 py-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{item.label}</span>
                </div>
                {progress[i] === 100 && (
                  <CheckCircle2 className="w-4 h-4 text-foreground" />
                )}
              </div>
              <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-foreground rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${progress[i]}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ResponseVisual({ active }: { active: boolean }) {
  const [showItems, setShowItems] = useState([false, false, false])
  
  useEffect(() => {
    if (active) {
      const timers = [
        setTimeout(() => setShowItems([true, false, false]), 300),
        setTimeout(() => setShowItems([true, true, false]), 600),
        setTimeout(() => setShowItems([true, true, true]), 900),
      ]
      return () => timers.forEach(clearTimeout)
    } else {
      setShowItems([false, false, false])
    }
  }, [active])

  return (
    <div className={`transition-all duration-500 ${active ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
      <div className="bg-card border border-border rounded-xl p-4 lg:p-6 max-w-xs lg:max-w-sm mx-auto shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-background" />
          </div>
          <div>
            <p className="text-sm font-medium">Archie's Analysis</p>
            <p className="text-xs text-muted-foreground">Ready for you</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className={`p-3 bg-secondary/50 rounded-lg transition-all duration-300 ${showItems[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
            <p className="text-xs font-medium text-muted-foreground mb-1">Quote Analysis</p>
            <p className="text-sm">"The $45k estimate is 12% above market rate for your area"</p>
          </div>
          <div className={`p-3 bg-secondary/50 rounded-lg transition-all duration-300 ${showItems[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
            <p className="text-xs font-medium text-muted-foreground mb-1">Recommendation</p>
            <p className="text-sm">"Ask for itemized breakdown of cabinet and labor costs"</p>
          </div>
          <div className={`p-3 bg-secondary/50 rounded-lg transition-all duration-300 ${showItems[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
            <p className="text-xs font-medium text-muted-foreground mb-1">Suggested Response</p>
            <p className="text-sm text-muted-foreground">"Hi Mike, could you provide a detailed breakdown..."</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function JustCCArchie() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const currentStep = steps[activeStep]

  return (
    <section className="py-16 lg:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-16">
          <p className="text-xs sm:text-sm font-medium tracking-widest text-muted-foreground uppercase mb-3 lg:mb-4">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Just CC Archie
          </h2>
        </div>

        {/* Steps row */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mb-12">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`text-left p-4 rounded-xl transition-all duration-300 ${
                index === activeStep 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-medium ${index === activeStep ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  0{index + 1}
                </span>
                {index < steps.length - 1 && (
                  <ArrowRight className={`w-3 h-3 ${index === activeStep ? "text-primary-foreground/40" : "text-muted-foreground/40"}`} />
                )}
              </div>
              <p className={`text-sm font-medium ${index === activeStep ? "text-primary-foreground" : "text-foreground"}`}>
                {step.title}
              </p>
            </button>
          ))}
        </div>

        {/* Mobile step indicators */}
        <div className="flex items-center justify-center gap-3 mb-8 lg:hidden">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeStep 
                  ? "w-10 bg-primary" 
                  : "w-6 bg-muted hover:bg-muted-foreground/30"
              }`}
              aria-label={`Step ${index + 1}`}
            />
          ))}
        </div>

        {/* Visual area */}
        <div className="relative min-h-[340px] lg:min-h-[400px] flex items-center justify-center px-2">
          <div className="absolute inset-0 flex items-center justify-center">
            {activeStep === 0 && <EmailVisual active={activeStep === 0} />}
            {activeStep === 1 && <ReadingVisual active={activeStep === 1} />}
            {activeStep === 2 && <ProcessingVisual active={activeStep === 2} />}
            {activeStep === 3 && <ResponseVisual active={activeStep === 3} />}
          </div>
        </div>

        {/* Step label below */}
        <div className="text-center mt-6 lg:mt-8 px-4">
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-2">
            Step {activeStep + 1} of {steps.length}
          </p>
          <h4 className="text-lg lg:text-xl font-semibold">{currentStep.title}</h4>
          <p className="text-xs lg:text-sm text-muted-foreground mt-1">
            {currentStep.description}
          </p>
        </div>
      </div>
    </section>
  )
}
