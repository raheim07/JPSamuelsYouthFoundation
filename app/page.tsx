import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { EventsSection } from "@/components/home/events-section"
import { FeaturedStories } from "@/components/home/featured-stories"
import { LegacyPreview } from "@/components/home/legacy-preview"
import { MissionSection } from "@/components/home/mission-section"
import { ProgramsPreview } from "@/components/home/programs-preview"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { GallerySection } from "@/components/home/gallery-section"
import { ImpactSection } from "@/components/home/impact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <EventsSection />
        <FeaturedStories />
        <LegacyPreview />
        <MissionSection />
        <ProgramsPreview />
        <TestimonialsSection />
        <GallerySection />
        <ImpactSection />
      </main>
      <Footer />
    </div>
  )
}
