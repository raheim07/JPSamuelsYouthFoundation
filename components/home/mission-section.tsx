import { Target, Eye, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide youths with the resources, guidance, and support systems necessary to excel and build brighter futures.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "A world where every young person has access to the opportunities they need to reach their full potential, regardless of their circumstances.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Diversity, Inclusivity, Compassion, and Commitment guide everything we do as we work to uplift the next generation.",
  },
]

export function MissionSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            What We Stand For
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mt-3 text-balance">
            Building Foundations for Success
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((item, index) => (
            <Card 
              key={index} 
              className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <item.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Values Pills */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {["Diversity", "Inclusivity", "Compassion", "Commitment"].map((value) => (
            <span
              key={value}
              className="px-5 py-2 bg-white border border-gold/30 rounded-full text-sm font-medium text-foreground"
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
