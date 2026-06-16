import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Globe, Heart, Target, ArrowRight } from "lucide-react"

const values = [
  {
    icon: Users,
    title: "Diversity",
    description: "We celebrate the unique backgrounds, perspectives, and experiences that each young person brings.",
  },
  {
    icon: Globe,
    title: "Inclusivity",
    description: "We ensure that opportunities are accessible to all, regardless of circumstances or background.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "We approach our work with empathy and genuine care for the wellbeing of every individual we serve.",
  },
  {
    icon: Target,
    title: "Commitment",
    description: "We are dedicated to making a lasting impact in the lives of young people and our communities.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Mission Statement */}
          <div>
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Our Mission
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mt-3 mb-6">
              Empowering Futures
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              To provide youths with the resources, guidance, and support systems 
              necessary to excel and build brighter futures.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We believe that every young person deserves access to quality education 
              and the opportunities to develop their potential. Through scholarships, 
              grants, and mentorship, we work to remove barriers and create pathways 
              to success.
            </p>
            <Button asChild className="bg-gold hover:bg-gold-dark text-black font-semibold">
              <Link href="/programs">
                View Our Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Core Values */}
          <div>
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Core Values
            </span>
            <h3 className="font-serif text-2xl font-bold mt-3 mb-8">
              What Guides Us
            </h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <value.icon className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{value.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
