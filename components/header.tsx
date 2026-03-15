"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
      scrolled || isMenuOpen
        ? "bg-white/90 backdrop-blur-xl border border-border/60 rounded-full shadow-[0_1px_3px_rgba(30,90,168,0.06),0_8px_24px_rgba(30,90,168,0.06)]"
        : "border border-transparent rounded-full"
    }`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Archie — Home">
            <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center transition-transform group-hover:scale-105" aria-hidden="true">
              <span className="text-white font-bold text-xs font-[var(--font-heading)]">A</span>
            </div>
            <span className="font-semibold text-[15px] tracking-tight text-foreground font-[var(--font-heading)]">archie</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {["How it works", "Capabilities", "About"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="nav-link text-[13px] text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-full hover:bg-primary/5 transition-colors duration-150"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-[13px] text-muted-foreground hover:text-foreground rounded-full h-8">
              Log in
            </Button>
            <Button size="sm" className="gap-1.5 rounded-full h-8 text-[13px]">
              Get started
              <ArrowRight className="w-3 h-3 btn-arrow" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-1">
              {["How it works", "Capabilities", "About"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="py-2.5 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="flex gap-2 pt-4 mt-2 border-t border-border/50">
                <Button variant="outline" size="sm" className="flex-1 rounded-full">
                  Log in
                </Button>
                <Button size="sm" className="flex-1 gap-1.5 rounded-full">
                  Get started
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
