import { GraduationCap, Trophy, Heart, Sparkles } from "lucide-react"

const legacyPoints = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Wolmer's Boys' School old boy and UWI Mona graduate with a Master's in Corporate Finance.",
  },
  {
    icon: Trophy,
    title: "Mathematical Brilliance",
    description: "An exceptional mathematics student who demonstrated outstanding analytical abilities.",
  },
  {
    icon: Heart,
    title: "Resilient Spirit",
    description: "Excelled despite circumstances, embodying the belief that determination overcomes obstacles.",
  },
  {
    icon: Sparkles,
    title: "Lasting Inspiration",
    description: "His legacy inspires us to help others access the opportunities they deserve.",
  },
]

export function LegacySection() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Jean Pierre&apos;s Legacy
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mt-3 text-balance">
            Honoring Excellence
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Jean Pierre Samuels&apos;s life was a testament to what can be achieved through 
            education, hard work, and unwavering determination.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {legacyPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <point.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-serif text-2xl lg:text-3xl italic text-foreground/80">
              &quot;Excellence is not a destination but a continuous journey of growth, 
              learning, and giving back.&quot;
            </p>
            <footer className="mt-4 text-muted-foreground">
              — In the spirit of Jean Pierre Samuels
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
