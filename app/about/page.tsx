import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StorySection } from "@/components/about/story-section"
import { LegacySection } from "@/components/about/legacy-section"
import { ValuesSection } from "@/components/about/values-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Jean Pierre Samuels Youth Foundation",
  description: "Learn about the Jean Pierre Samuels Youth Foundation, our story, mission, and the legacy we honor.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-black text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mt-3 text-balance">
              Our Story & Mission
            </h1>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              Honoring a remarkable legacy by empowering the next generation.
            </p>
          </div>
        </section>

        <StorySection />
        <LegacySection />
        <ValuesSection />
      </main>
      <Footer />
    </div>
  )
}
