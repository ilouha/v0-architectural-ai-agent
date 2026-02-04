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
    <section className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-3">Testimonials</p>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
            Trusted by homeowners
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
              ))}
            </div>
            <span className="text-muted-foreground">4.9 average rating</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.author}
              className="bg-card backdrop-blur-xl p-6 rounded-2xl border border-border"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>
              <blockquote className="text-foreground leading-relaxed mb-6">
                {`"${testimonial.quote}"`}
              </blockquote>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
                <span className="text-xs font-medium text-muted-foreground px-2.5 py-1 bg-secondary rounded-md">
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
