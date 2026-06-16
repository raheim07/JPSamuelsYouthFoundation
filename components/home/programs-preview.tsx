import Link from "next/link"
import { GraduationCap, Gift, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const programs = [
  {
    icon: GraduationCap,
    title: "Scholarships",
    description: "Financial support for students from primary to tertiary level to pursue their educational goals and dreams.",
    features: ["Tuition assistance", "Book allowances", "Educational resources"],
    status: "coming-soon" as const,
  },
  {
    icon: Gift,
    title: "Grants",
    description: "Project-based funding to help young people bring their innovative ideas and community initiatives to life.",
    features: ["Project funding", "Mentorship support", "Resource access"],
    status: "coming-soon" as const,
  },
]

export function ProgramsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Our Programs
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mt-3 text-balance">
            Supporting the Next Generation
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We offer various programs designed to help young people access education and opportunities.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden border-2 border-border hover:border-gold/50 transition-colors duration-300"
            >
              {/* Coming Soon Badge */}
              {program.status === "coming-soon" && (
                <Badge className="absolute top-4 right-4 bg-gold/10 text-gold hover:bg-gold/20 border-gold/30">
                  Coming Soon
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <program.icon className="h-6 w-6 text-gold" />
                </div>
                <CardTitle className="font-serif text-2xl">{program.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full border-gold/50 text-foreground hover:bg-gold hover:text-black hover:border-gold"
                >
                  <Link href="/programs">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild className="bg-gold hover:bg-gold-dark text-black font-semibold">
            <Link href="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
