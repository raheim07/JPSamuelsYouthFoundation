import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, User, GraduationCap, Award, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Recipients | Jean Pierre Samuels Youth Foundation",
  description: "Meet the scholarship and grant recipients of the Jean Pierre Samuels Youth Foundation.",
}

// Placeholder recipients for future use
const placeholderRecipients = [
  {
    name: "Future Scholar",
    school: "To Be Announced",
    program: "Scholarship",
    year: "2024",
  },
  {
    name: "Future Scholar",
    school: "To Be Announced",
    program: "Scholarship",
    year: "2024",
  },
  {
    name: "Future Grant Recipient",
    school: "To Be Announced",
    program: "Grant",
    year: "2024",
  },
]

export default function RecipientsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-black text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Our Scholars
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mt-3 text-balance">
              Recipients & Winners
            </h1>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              Celebrating the achievements of our scholarship and grant recipients.
            </p>
          </div>
        </section>

        {/* Recipients Section */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Coming Soon Banner */}
            <div className="max-w-3xl mx-auto mb-16">
              <div className="bg-white border-2 border-gold/30 rounded-xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-gold" />
                </div>
                <h2 className="font-serif text-2xl font-bold mb-3">
                  Recipients Coming Soon
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-4">
                  As a newly established foundation, we are excited to announce our first 
                  cohort of scholarship and grant recipients soon. This page will showcase 
                  the achievements of young people who exemplify the spirit of Jean Pierre Samuels.
                </p>
                <Badge className="bg-gold/10 text-gold hover:bg-gold/20 border-gold/30 px-4 py-1">
                  <Clock className="h-3 w-3 mr-2" />
                  Announcements Coming Soon
                </Badge>
              </div>
            </div>

            {/* Placeholder Cards */}
            <div className="max-w-4xl mx-auto">
              <h3 className="font-semibold text-lg mb-6 text-center text-muted-foreground">
                Future Recipients Preview
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {placeholderRecipients.map((recipient, index) => (
                  <Card key={index} className="border-2 border-dashed border-border/50 bg-white/50">
                    <CardContent className="pt-6 text-center">
                      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                        <User className="h-10 w-10 text-muted-foreground/50" />
                      </div>
                      <Badge variant="outline" className="mb-3 border-gold/30 text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        Coming Soon
                      </Badge>
                      <h4 className="font-semibold text-muted-foreground/70 mb-1">
                        {recipient.name}
                      </h4>
                      <p className="text-sm text-muted-foreground/50 flex items-center justify-center gap-1 mb-2">
                        <GraduationCap className="h-4 w-4" />
                        {recipient.school}
                      </p>
                      <Badge className="bg-gold/10 text-gold/70 hover:bg-gold/20 border-gold/20">
                        <Award className="h-3 w-3 mr-1" />
                        {recipient.program}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-4">
                Want to be featured here? Apply for our programs when applications open.
              </p>
              <a 
                href="/programs" 
                className="text-gold hover:text-gold-dark font-semibold underline underline-offset-4"
              >
                View Our Programs
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
