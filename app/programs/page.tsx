import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { GraduationCap, Gift, FileText, CheckCircle, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Programs | Jean Pierre Samuels Youth Foundation",
  description: "Explore our scholarship and grant programs designed to support students from primary to tertiary level.",
}

const programs = [
  {
    icon: GraduationCap,
    title: "Scholarships",
    description: "Financial support for students committed to academic excellence and personal growth.",
    purpose: "To provide financial assistance to students who demonstrate academic promise and a commitment to making a positive impact in their communities.",
    eligibility: [
      "Students from primary to tertiary level",
      "Demonstrated academic achievement",
      "Financial need",
      "Good character and community involvement",
    ],
    requirements: [
      "Completed application form",
      "Academic transcripts",
      "Valid identification",
      "Personal essay",
      "Recommendation letter",
    ],
    status: "coming-soon" as const,
  },
  {
    icon: Gift,
    title: "Grants",
    description: "Project-based funding for innovative initiatives that benefit youth and communities.",
    purpose: "To support young people in bringing their ideas to life through funding for educational projects, community initiatives, and personal development activities.",
    eligibility: [
      "Young people aged 13-25",
      "Clear project plan and objectives",
      "Community or educational focus",
      "Demonstrated leadership potential",
    ],
    requirements: [
      "Detailed project proposal",
      "Budget breakdown",
      "Timeline and milestones",
      "Valid identification",
      "Endorsement from school or community leader",
    ],
    status: "coming-soon" as const,
  },
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-black text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Our Programs
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mt-3 text-balance">
              Scholarships & Grants
            </h1>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              Discover our programs designed to support young people in their educational 
              journey and personal development.
            </p>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-12">
              {programs.map((program, index) => (
                <Card key={index} className="overflow-hidden border-2 hover:border-gold/30 transition-colors">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Program Info */}
                    <div className="lg:col-span-1 bg-cream p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                          <program.icon className="h-7 w-7 text-gold" />
                        </div>
                        <Badge className="bg-gold/10 text-gold hover:bg-gold/20 border-gold/30">
                          <Clock className="h-3 w-3 mr-1" />
                          Coming Soon
                        </Badge>
                      </div>
                      <CardTitle className="font-serif text-2xl mb-3">{program.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {program.description}
                      </CardDescription>
                    </div>

                    {/* Details */}
                    <div className="lg:col-span-2 p-8">
                      <div className="mb-6">
                        <h3 className="font-semibold text-lg mb-2">Purpose</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {program.purpose}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Eligibility */}
                        <div>
                          <h3 className="font-semibold text-lg mb-3 flex items-center">
                            <CheckCircle className="h-5 w-5 text-gold mr-2" />
                            Eligibility
                          </h3>
                          <ul className="space-y-2">
                            {program.eligibility.map((item, i) => (
                              <li key={i} className="flex items-start text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold mr-3 mt-2 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Requirements */}
                        <div>
                          <h3 className="font-semibold text-lg mb-3 flex items-center">
                            <FileText className="h-5 w-5 text-gold mr-2" />
                            Requirements
                          </h3>
                          <ul className="space-y-2">
                            {program.requirements.map((item, i) => (
                              <li key={i} className="flex items-start text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold mr-3 mt-2 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-4">
              Ready to Apply?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Applications will be opening soon. Visit our application page to learn more 
              about the process and prepare your documents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gold hover:bg-gold-dark text-black font-semibold">
                <Link href="/apply">
                  View Application
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-gold/50 hover:bg-gold hover:text-black hover:border-gold">
                <Link href="/announcements">Check Announcements</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
