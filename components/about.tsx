"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const traits = [
  "Explains complex concepts in simple terms",
  "Available 24/7 whenever you have questions",
  "Remembers your project details and preferences",
  "Gives honest advice, not just what you want to hear"
]

function GridAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-foreground" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      
      {/* Floating particles - using deterministic positions based on index */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary-foreground/20 rounded-full animate-pulse"
          style={{
            left: `${(i * 17 + 5) % 100}%`,
            top: `${(i * 23 + 10) % 100}%`,
            animationDelay: `${(i * 0.15) % 3}s`,
            animationDuration: `${2 + (i * 0.15) % 3}s`,
          }}
        />
      ))}
      
      {/* Animated diagonal lines */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div 
          className="absolute w-[200%] h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent -rotate-45 origin-left"
          style={{ 
            top: '20%', 
            animation: 'slideRight 8s linear infinite',
          }}
        />
        <div 
          className="absolute w-[200%] h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent -rotate-45 origin-left"
          style={{ 
            top: '50%', 
            animation: 'slideRight 12s linear infinite',
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute w-[200%] h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent -rotate-45 origin-left"
          style={{ 
            top: '80%', 
            animation: 'slideRight 10s linear infinite',
            animationDelay: '4s'
          }}
        />
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-primary-foreground/5" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-primary-foreground/5" />
      
      <style jsx>{`
        @keyframes slideRight {
          0% { transform: translateX(-50%) rotate(-45deg); }
          100% { transform: translateX(0%) rotate(-45deg); }
        }
      `}</style>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="py-16 lg:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative bg-[rgb(55,90,140)] text-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-16 overflow-hidden shadow-2xl">
          {/* Background pattern - same as CTA */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
          </div>
          <GridAnimation />
          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left - Visual */}
            <div className="relative">
              <div className="aspect-square bg-primary-foreground/5 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 flex flex-col justify-between">
                {/* Archie avatar */}
                <div>
                  <div className="w-14 h-14 lg:w-20 lg:h-20 bg-primary-foreground rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6">
                    <span className="text-primary font-bold text-xl lg:text-3xl">A</span>
                  </div>
                  <p className="text-lg sm:text-xl lg:text-3xl font-semibold leading-tight max-w-sm">
                    {"\"I'm here to make your project less stressful, not more complicated.\""}
                  </p>
                </div>
                
                {/* Personality tags */}
                <div className="flex flex-wrap gap-1.5 lg:gap-2 pt-6 lg:pt-8">
                  <span className="px-3 py-1.5 lg:px-4 lg:py-2 bg-primary-foreground/10 rounded-full text-xs lg:text-sm font-medium">Knowledgeable</span>
                  <span className="px-3 py-1.5 lg:px-4 lg:py-2 bg-primary-foreground/10 rounded-full text-xs lg:text-sm font-medium">Patient</span>
                  <span className="px-3 py-1.5 lg:px-4 lg:py-2 bg-primary-foreground/10 rounded-full text-xs lg:text-sm font-medium">Practical</span>
                  <span className="px-3 py-1.5 lg:px-4 lg:py-2 bg-primary-foreground/10 rounded-full text-xs lg:text-sm font-medium">Honest</span>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex flex-col gap-6 lg:gap-8">
              <div>
                <p className="text-xs lg:text-sm font-medium text-primary-foreground/60 mb-2 lg:mb-3">Meet Archie</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-4 lg:mb-6">
                  Not just smart. Genuinely helpful.
                </h2>
                <p className="text-sm lg:text-base text-primary-foreground/70 leading-relaxed">
                  We built Archie because everyone deserves access to expert construction guidance. 
                  Renovations are among the biggest investments you{"'"}ll make, yet most homeowners 
                  navigate them without professional support. Archie changes that.
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {traits.map((trait) => (
                  <li key={trait} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary-foreground/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-primary-foreground/80">{trait}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-4">
                <div>
                  <p className="text-xl lg:text-3xl font-semibold">24/7</p>
                  <p className="text-xs lg:text-sm text-primary-foreground/60">Always available</p>
                </div>
                <div>
                  <p className="text-xl lg:text-3xl font-semibold">{"<"}15s</p>
                  <p className="text-xs lg:text-sm text-primary-foreground/60">Response time</p>
                </div>
                <div>
                  <p className="text-xl lg:text-3xl font-semibold">98%</p>
                  <p className="text-xs lg:text-sm text-primary-foreground/60">Satisfaction</p>
                </div>
              </div>

              <Button variant="secondary" size="lg" className="w-fit gap-2 mt-2">
                Start a conversation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
