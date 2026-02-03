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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <JustCCArchie />
      <Templates />
      <Services />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
