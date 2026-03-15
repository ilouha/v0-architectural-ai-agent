import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { JustCCArchie } from "@/components/just-cc-archie"
import { HowItWorks } from "@/components/how-it-works"
import { Templates } from "@/components/templates"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Compass } from "lucide-react"

function SectionDivider() {
  return (
    <div className="section-divider max-w-4xl mx-auto">
      <div className="section-divider-icon">
        <Compass className="w-3.5 h-3.5" />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SectionDivider />
      <HowItWorks />
      <Templates />
      <SectionDivider />
      <JustCCArchie />
      <Services />
      <SectionDivider />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
