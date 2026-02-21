"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-4">
        <div className="flex items-center justify-between h-14 bg-[#2a2226]/80 backdrop-blur-md rounded-full px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-white/90 font-semibold text-base tracking-[0.15em] uppercase">Archie</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="#how-it-works" 
              className="text-sm text-white/60 hover:text-white/90 transition-colors"
            >
              How it works
            </Link>
            <Link 
              href="#capabilities" 
              className="text-sm text-white/60 hover:text-white/90 transition-colors"
            >
              Capabilities
            </Link>
            <Link 
              href="#about" 
              className="text-sm text-white/60 hover:text-white/90 transition-colors"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm text-white/60 hover:text-white/90 transition-colors"
            >
              Login
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="#"
              className="text-sm font-medium text-white bg-white/15 hover:bg-white/25 transition-colors rounded-full px-5 py-2"
            >
              Schedule a Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-white/80"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-[#2a2226]/90 backdrop-blur-md rounded-2xl p-4">
            <nav className="flex flex-col gap-1">
              <Link 
                href="#how-it-works" 
                className="py-2.5 px-3 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                How it works
              </Link>
              <Link 
                href="#capabilities" 
                className="py-2.5 px-3 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Capabilities
              </Link>
              <Link 
                href="#about" 
                className="py-2.5 px-3 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#" 
                className="py-2.5 px-3 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <div className="pt-3 mt-2 border-t border-white/10">
                <Link
                  href="#"
                  className="block text-center text-sm font-medium text-white bg-white/15 hover:bg-white/25 transition-colors rounded-full px-5 py-2.5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Schedule a Demo
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
