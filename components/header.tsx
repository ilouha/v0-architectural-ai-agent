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
    <header className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-lg ${
      scrolled || isMenuOpen
        ? "bg-white backdrop-blur-xl border border-border shadow-lg shadow-black/5 rounded-lg"
        : ""
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-sm font-[var(--font-heading)]">A</span>
            </div>
            <span className="font-semibold text-lg tracking-tight text-foreground font-[var(--font-heading)]">archie</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {["How it works", "Capabilities", "About"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-primary/5 transition-all duration-200"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Log in
            </Button>
            <Button size="sm" className="gap-1.5">
              Get started
              <ArrowRight className="w-3.5 h-3.5" />
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
                <Button variant="outline" size="sm" className="flex-1">
                  Log in
                </Button>
                <Button size="sm" className="flex-1 gap-1.5">
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
