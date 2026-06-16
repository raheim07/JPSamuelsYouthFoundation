import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function LegacyPreview() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Our Foundation
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold mt-3 mb-6 text-balance">
              Honoring a Legacy
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Jean Pierre Samuels Youth Foundation was created in loving 
                remembrance of Jean Pierre Samuels, whose passion for helping young 
                people and belief in the power of education continues to inspire our work.
              </p>
              <p>
                Through scholarships, grants, mentorship, and community support, we 
                carry forward his legacy by providing young people with the tools, 
                guidance, and opportunities they need to succeed. Every program we 
                offer reflects his commitment to uplifting the next generation.
              </p>
            </div>
            <Button 
              asChild 
              size="lg"
              className="mt-8 bg-gold hover:bg-gold-dark text-black font-semibold"
            >
              <Link href="/about">
                Read Our Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Video Player */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/30">
              <video
                src="/VIDEO.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[4/3] object-cover rounded-xl"
              />
              {/* Gold accent overlay on corners */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/50 rounded-tl-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/50 rounded-br-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
