"use client"

import { useState, useEffect } from "react"
import { Mail, Brain, FileSearch, MessageSquare, CheckCircle2, Sparkles } from "lucide-react"

const steps = [
  { id: 1, title: "CC Archie on any email", description: "Simply add archie@architype.ai to your contractor emails", visual: "email" },
  { id: 2, title: "Archie reads the conversation", description: "AI analyzes the full email thread and context", visual: "reading" },
  { id: 3, title: "Archie processes the details", description: "Extracting quotes, timelines, and key decisions", visual: "processing" },
  { id: 4, title: "You get expert guidance", description: "Receive actionable advice tailored to your project", visual: "response" }
]

function EmailVisual({ active }: { active: boolean }) {
  return (
    <div className={`transition-all duration-500 ${active ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
      <div className="bg-white border border-border rounded-lg p-6 max-w-sm mx-auto shadow-lg shadow-black/5">
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">New Email</p>
            <p className="text-xs text-muted-foreground">to: contractor@build.com</p>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">To:</span>
            <span className="text-foreground">contractor@build.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">CC:</span>
            <span className="bg-primary text-white px-2.5 py-0.5 rounded-md text-xs font-medium">
              archie@architype.ai
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Subject:</span>
            <span className="text-foreground">Kitchen renovation quote</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Hi Mike, thanks for the quote. Can you break down the $45k estimate? Also, what{"'"}s the timeline looking like...
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
      const interval = setInterval(() => setScanLine(prev => (prev + 1) % 5), 600)
      return () => clearInterval(interval)
    }
  }, [active])

  return (
    <div className={`transition-all duration-500 ${active ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
      <div className="bg-white border border-border rounded-lg p-6 max-w-sm mx-auto shadow-lg shadow-black/5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <FileSearch className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Archie is reading</p>
            <p className="text-xs text-muted-foreground">Analyzing email thread...</p>
          </div>
        </div>
        <div className="space-y-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-3 rounded transition-all duration-300 ${
                i === scanLine ? "bg-primary" : i < scanLine ? "bg-primary/20" : "bg-secondary"
              }`}
              style={{ width: `${70 + Math.random() * 30}%` }}
            />
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
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
      <div className="bg-white border border-border rounded-lg p-6 max-w-sm mx-auto shadow-lg shadow-black/5">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Brain className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Processing project</p>
            <p className="text-xs text-muted-foreground">Organizing your data</p>
          </div>
        </div>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="bg-secondary rounded-md px-4 py-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">{item.label}</span>
                </div>
                {progress[i] === 100 && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
              </div>
              <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
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
      <div className="bg-white border border-border rounded-lg p-6 max-w-sm mx-auto shadow-lg shadow-black/5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Archie{"'"}s Analysis</p>
            <p className="text-xs text-muted-foreground">Ready for you</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className={`p-3 bg-primary/5 border border-primary/10 rounded-md transition-all duration-300 ${showItems[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
            <p className="text-xs font-medium text-primary mb-1">Quote Analysis</p>
            <p className="text-sm text-foreground">{'"'}The $45k estimate is 12% above market rate for your area{'"'}</p>
          </div>
          <div className={`p-3 bg-amber-light/50 border border-amber/20 rounded-md transition-all duration-300 ${showItems[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
            <p className="text-xs font-medium text-amber-foreground mb-1">Recommendation</p>
            <p className="text-sm text-foreground">{'"'}Ask for itemized breakdown of cabinet and labor costs{'"'}</p>
          </div>
          <div className={`p-3 bg-secondary rounded-md transition-all duration-300 ${showItems[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
            <p className="text-xs font-medium text-muted-foreground mb-1">Suggested Response</p>
            <p className="text-sm text-muted-foreground">{'"'}Hi Mike, could you provide a detailed breakdown...{'"'}</p>
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
    <section className="py-24 lg:py-40 overflow-hidden relative bg-secondary/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <p className="text-xs font-medium tracking-widest text-primary uppercase mb-4 font-[var(--font-heading)]">
            Seamless integration
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-[var(--font-heading)]">
            Just add <span className="gradient-text">Archie</span> to any conversation
          </h2>
        </div>

        {/* Steps row */}
        <div className="hidden lg:grid grid-cols-4 gap-3 mb-16">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`text-left p-4 rounded-md transition-all duration-300 cursor-pointer border ${
                index === activeStep
                  ? "bg-white border-primary/30 shadow-md shadow-primary/5"
                  : "bg-white/50 border-border hover:border-primary/20 hover:shadow-sm"
              }`}
            >
              <span className={`text-xs font-mono font-medium ${index === activeStep ? "text-primary" : "text-muted-foreground"}`}>
                0{index + 1}
              </span>
              <p className={`text-sm font-medium mt-2 ${index === activeStep ? "text-foreground" : "text-muted-foreground"}`}>
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
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === activeStep ? "w-10 bg-primary" : "w-6 bg-border"
              }`}
              aria-label={`Step ${index + 1}`}
            />
          ))}
        </div>

        {/* Visual area */}
        <div className="relative min-h-[360px] lg:min-h-[420px] flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            {activeStep === 0 && <EmailVisual active={activeStep === 0} />}
            {activeStep === 1 && <ReadingVisual active={activeStep === 1} />}
            {activeStep === 2 && <ProcessingVisual active={activeStep === 2} />}
            {activeStep === 3 && <ResponseVisual active={activeStep === 3} />}
          </div>
        </div>

        {/* Step label */}
        <div className="text-center mt-8">
          <p className="text-xs font-mono tracking-widest text-primary uppercase mb-2">
            Step {activeStep + 1} of {steps.length}
          </p>
          <h4 className="text-xl font-semibold text-foreground font-[var(--font-heading)]">{currentStep.title}</h4>
          <p className="text-sm text-muted-foreground mt-1">{currentStep.description}</p>
        </div>
      </div>
    </section>
  )
}
