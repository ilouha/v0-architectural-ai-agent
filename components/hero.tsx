"use client"

import { useEffect, useRef } from "react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Animated gradient noise overlay
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const drawNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      for (let i = 0; i < imageData.data.length; i += 4) {
        const val = Math.random() * 255
        imageData.data[i] = val
        imageData.data[i + 1] = val
        imageData.data[i + 2] = val
        imageData.data[i + 3] = 12
      }
      ctx.putImageData(imageData, 0, 0)
    }

    drawNoise()
    const interval = setInterval(drawNoise, 150)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div 
        className="absolute inset-0 -z-20"
        style={{
          background: "linear-gradient(135deg, #a088a8 0%, #c89b7b 25%, #d4a88c 40%, #b8a0b8 55%, #8fb8b4 75%, #a8a0c0 100%)"
        }}
      />
      
      {/* Noise texture overlay */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 -z-10 pointer-events-none opacity-40"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/10">
          <div className="w-5 h-5 bg-primary rounded flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-[9px]">A</span>
          </div>
          <span className="text-xs font-medium text-white/80">AI-powered construction guidance</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-tight">
          The AI Agent Built for
          <br />
          <span className="font-serif italic">Construction</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 lg:mt-8 text-base lg:text-lg text-white/70 max-w-xl leading-relaxed">
          Helping homeowners navigate renovations and construction 
          projects faster and more efficiently, from permits to punch lists.
        </p>

        {/* CTA */}
        <div className="mt-8 lg:mt-10">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-[#b8886e]/80 hover:bg-[#b8886e] backdrop-blur-sm rounded-full transition-colors tracking-wide uppercase"
          >
            Schedule a Demo
          </a>
        </div>
      </div>

      {/* Bottom logo bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-6 lg:gap-10">
          <span className="text-[10px] text-white/40 uppercase tracking-wider whitespace-nowrap flex-shrink-0">
            Trusted<br />by builders at:
          </span>
          <div className="flex items-center gap-8 lg:gap-12 overflow-x-auto no-scrollbar">
            {["BuildCo", "ArchStudio", "Renovate", "StructurAI", "PlanWorks", "CivicBuild"].map((name) => (
              <span key={name} className="text-sm font-medium text-white/30 whitespace-nowrap tracking-wide">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
