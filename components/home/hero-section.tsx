import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/MAIN JPSYF Logo light gold.png"
              alt="JP Samuels Youth Foundation"
              width={280}
              height={93}
              className="h-24 lg:h-32 w-auto"
              priority
            />
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Empowering Youth.{" "}
            <span className="text-gold">Honoring a Legacy.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            The Jean Pierre Samuels Youth Foundation supports young people through 
            scholarships, grants, guidance, and opportunities to build brighter futures.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg"
              className="bg-gold hover:bg-gold-dark text-black font-semibold px-8"
            >
              <Link href="/about">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8"
            >
              <Link href="/apply">Apply Soon</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gold Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  )
}
