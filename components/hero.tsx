"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"

function AnimatedNumber({ value, prefix = "", suffix = "", decimals = 0 }: { value: number; prefix?: string; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(current)
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <span ref={ref}>
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}{suffix}
    </span>
  )
}

const chatMessages = [
  { role: "user", text: "I want to add a second story to my 1960s ranch" },
  { role: "archie", text: "Great project. First, let's check your foundation and local height restrictions. What city are you in? I'll pull the relevant zoning codes." },
  { role: "user", text: "Portland, Oregon" },
  { role: "archie", text: "Portland allows 30ft max height in R5 zones. Your ranch likely has a post-and-beam foundation. I'd recommend a structural engineer assessment first. Want me to walk you through what to ask them?" },
]

export function Hero() {
  const [visibleMessages, setVisibleMessages] = useState(0)
  const mobileMessagesRef = useRef<HTMLDivElement>(null)
  const desktopMessagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (visibleMessages < chatMessages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages((prev) => prev + 1)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [visibleMessages])

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    if (mobileMessagesRef.current) {
      mobileMessagesRef.current.scrollTop = mobileMessagesRef.current.scrollHeight
    }
    if (desktopMessagesRef.current) {
      desktopMessagesRef.current.scrollTop = desktopMessagesRef.current.scrollHeight
    }
  }, [visibleMessages])

  return (
    <section className="min-h-screen pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-32">
        {/* Mobile only: Badge and Chat first */}
        <div className="md:hidden flex flex-col gap-6 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent rounded-full w-fit border border-ring/20">
            <div className="w-1.5 h-1.5 bg-ring rounded-full animate-pulse" />
            <span className="text-xs font-medium text-accent-foreground">AI-powered construction guidance</span>
          </div>
          
          {/* Chat interface for mobile/tablet */}
          <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-xl max-w-sm md:max-w-md mx-auto">
            <div className="flex items-center gap-2 px-3 py-2.5 bg-background border-b border-border">
              <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-[10px]">A</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-xs text-foreground">Archie</p>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                <span className="text-[10px] text-muted-foreground">Online</span>
              </div>
            </div>
            <div ref={mobileMessagesRef} className="px-3 py-3 h-[140px] md:h-[160px] flex flex-col gap-2 bg-background overflow-y-auto">
              {chatMessages.slice(0, visibleMessages).map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                >
                  {msg.role === "archie" && (
                    <div className="w-5 h-5 bg-primary rounded flex items-center justify-center mr-1.5 flex-shrink-0 mt-0.5">
                      <span className="text-primary-foreground font-bold text-[8px]">A</span>
                    </div>
                  )}
                  <div
                    className={`max-w-[180px] md:max-w-[220px] px-2.5 py-1.5 rounded-xl text-[11px] leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "border border-border text-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {visibleMessages < chatMessages.length && (
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 bg-primary rounded flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-[8px]">A</span>
                  </div>
                  <div className="flex gap-1 px-2.5 py-1.5 border border-border rounded-xl rounded-bl-sm">
                    <span className="w-1 h-1 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1 h-1 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1 h-1 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>
            <div className="px-3 py-2.5 bg-background border-t border-border rounded-b-2xl">
              <div className="flex items-center gap-2 border border-border rounded-lg px-2.5 py-1.5">
                <input
                  type="text"
                  placeholder="Ask Archie anything..."
                  className="flex-1 bg-transparent text-[11px] text-foreground placeholder:text-muted-foreground outline-none min-w-0"
                />
                <Button size="sm" className="h-6 text-[10px] px-2">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-32 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Badge - hidden on mobile, shown on tablet/desktop */}
            <div className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 bg-accent rounded-full w-fit border border-ring/20">
              <div className="w-1.5 h-1.5 bg-ring rounded-full animate-pulse" />
              <span className="text-xs font-medium text-accent-foreground">AI-powered construction guidance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
              Meet{" "}
              <span 
                className="bg-gradient-to-r from-primary via-ring to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient"
                style={{
                  animation: "gradient 3s linear infinite",
                }}
              >
                Archie
              </span>
              , your pocket architect for every build
            </h1>
            <style jsx>{`
              @keyframes gradient {
                0% { background-position: 0% center; }
                100% { background-position: 200% center; }
              }
            `}</style>

            <p className="text-base lg:text-lg text-muted-foreground max-w-lg leading-relaxed">
              Archie is an AI agent that helps homeowners navigate renovations and 
              construction projects. From permits to punch lists, get expert guidance 
              through every phase.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" className="h-12 px-6 gap-2">
                Start building with Archie
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-6 bg-transparent">
                Watch demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 lg:pt-8 border-t border-border">
              <div>
                <p className="text-xl sm:text-3xl lg:text-5xl font-semibold tracking-tight">
                  <AnimatedNumber value={500} suffix="+" />
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Projects guided</p>
              </div>
              <div className="border-l border-border pl-3 sm:pl-6">
                <p className="text-xl sm:text-3xl lg:text-5xl font-semibold tracking-tight">
                  <AnimatedNumber value={15} suffix="%" />
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Costs saved</p>
              </div>
              <div className="border-l border-border pl-3 sm:pl-6">
                <p className="text-xl sm:text-3xl lg:text-5xl font-semibold tracking-tight">
                  <AnimatedNumber value={4.9} decimals={1} />
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">User rating</p>
              </div>
            </div>
          </div>

          {/* Right - Chat interface (tablet and desktop) */}
          <div className="relative hidden md:block">
            <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-2xl">
              {/* Chat header */}
              <div className="flex items-center gap-2 lg:gap-3 px-3 lg:px-5 py-2.5 lg:py-4 bg-background border-b border-border">
                <div className="w-7 h-7 lg:w-10 lg:h-10 bg-primary rounded-lg lg:rounded-xl flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-[10px] lg:text-sm">A</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-xs lg:text-sm text-foreground">Archie</p>
                  <p className="text-[10px] lg:text-xs text-muted-foreground hidden lg:block">Your construction AI agent</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-500 rounded-full" />
                  <span className="text-[10px] lg:text-xs text-muted-foreground">Online</span>
                </div>
              </div>

              {/* Chat messages */}
              <div ref={desktopMessagesRef} className="px-3 lg:px-5 py-3 lg:py-6 h-[180px] lg:h-[340px] flex flex-col gap-2 lg:gap-4 bg-background overflow-y-auto">
                {chatMessages.slice(0, visibleMessages).map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                  >
                    {msg.role === "archie" && (
                      <div className="w-6 h-6 lg:w-7 lg:h-7 bg-primary rounded-lg flex items-center justify-center mr-1.5 lg:mr-2 flex-shrink-0 mt-0.5">
                        <span className="text-primary-foreground font-bold text-[10px] lg:text-xs">A</span>
                      </div>
                    )}
                    <div
                      className={`max-w-[180px] lg:max-w-[280px] px-2.5 lg:px-4 py-1.5 lg:py-3 rounded-xl lg:rounded-2xl text-[11px] lg:text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground rounded-br-sm lg:rounded-br-md"
                          : "border border-border text-foreground rounded-bl-sm lg:rounded-bl-md"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                
                {visibleMessages < chatMessages.length && (
                  <div className="flex items-center gap-1.5 lg:gap-2">
                    <div className="w-6 h-6 lg:w-7 lg:h-7 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-[10px] lg:text-xs">A</span>
                    </div>
                    <div className="flex gap-1 px-2.5 lg:px-4 py-2 lg:py-3 border border-border rounded-xl lg:rounded-2xl rounded-bl-sm lg:rounded-bl-md">
                      <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                )}
              </div>

              {/* Chat input */}
              <div className="px-3 lg:px-5 py-2.5 lg:py-4 bg-background border-t border-border rounded-b-2xl">
                <div className="flex items-center gap-2 border border-border rounded-lg lg:rounded-xl px-2.5 lg:px-4 py-1.5 lg:py-3">
                  <input
                    type="text"
                    placeholder="Ask Archie anything..."
                    className="flex-1 bg-transparent text-[11px] lg:text-sm text-foreground placeholder:text-muted-foreground outline-none min-w-0"
                  />
                  <Button size="sm" className="h-6 lg:h-8 text-[10px] lg:text-sm px-2 lg:px-3">
                    Send
                  </Button>
                </div>
              </div>
            </div>

            {/* Decorative elements - hidden on mobile to prevent overflow */}
            <div className="hidden md:block absolute -z-10 top-6 -right-6 lg:top-8 lg:-right-8 w-full h-full bg-secondary rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
