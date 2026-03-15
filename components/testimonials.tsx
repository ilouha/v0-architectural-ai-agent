"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Archie walked me through our entire kitchen remodel like a patient friend who actually knew what they were talking about. Went from overwhelmed to confident in our first conversation.",
    author: "Sarah M.",
    role: "Kitchen Renovation",
    location: "Austin, TX"
  },
  {
    quote: "The permit process for our ADU seemed impossible until Archie broke it down step by step. Saved us months of confusion and probably thousands in mistakes we would have made.",
    author: "Michael & David",
    role: "ADU Addition",
    location: "Los Angeles, CA"
  },
  {
    quote: "What I love about Archie is the 24/7 availability. At 2am when I was stress-scrolling contractor reviews, Archie helped me think through what actually mattered.",
    author: "Jennifer K.",
    role: "Full Home Renovation",
    location: "Denver, CO"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 lg:py-36 relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(30,90,168,0.025),transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-primary mb-3 font-[var(--font-heading)]">
            Testimonials
          </p>
          <h2 className="text-3xl lg:text-[2.75rem] font-bold tracking-tight mb-4 text-foreground font-[var(--font-heading)] leading-[1.1]">
            Trusted by{" "}
            <span className="text-muted-foreground">homeowners</span>
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">4.9 average rating</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="group bg-white p-6 rounded-xl border border-border/40 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300"
            >
              {/* Decorative quote */}
              <span className="text-4xl leading-none text-primary/[0.12] font-serif select-none inline-block transition-transform duration-300 group-hover:scale-125 group-hover:text-primary/20">{'"'}</span>

              <blockquote className="text-sm text-foreground leading-relaxed mt-1 mb-6">
                {testimonial.quote}
              </blockquote>
              <div className="flex items-center justify-between pt-4 border-t border-border/40">
                <div>
                  <p className="font-medium text-sm text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
                <span className="text-xs text-muted-foreground px-2 py-0.5 bg-secondary rounded-md">
                  {testimonial.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
