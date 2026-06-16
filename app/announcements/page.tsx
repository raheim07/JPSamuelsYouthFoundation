import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, Calendar, Clock, Megaphone, Sparkles, FileText } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Announcements | Jean Pierre Samuels Youth Foundation",
  description: "Stay updated with the latest news and announcements from the Jean Pierre Samuels Youth Foundation.",
}

const announcements = [
  {
    icon: Megaphone,
    title: "Applications Opening Soon",
    description: "We are excited to announce that our scholarship and grant applications will be opening soon. Stay tuned for the official launch date and application guidelines.",
    date: "Coming Soon",
    category: "Applications",
    status: "upcoming" as const,
  },
  {
    icon: Sparkles,
    title: "Scholarship Updates",
    description: "Details about our scholarship programs, eligibility criteria, and selection process will be announced shortly. Follow us for the latest updates.",
    date: "Coming Soon",
    category: "Scholarships",
    status: "upcoming" as const,
  },
  {
    icon: FileText,
    title: "Foundation News",
    description: "Important updates about the Jean Pierre Samuels Youth Foundation, our initiatives, and community impact will be shared here.",
    date: "Coming Soon",
    category: "News",
    status: "upcoming" as const,
  },
]

const categoryColors: Record<string, string> = {
  Applications: "bg-blue-100 text-blue-800 border-blue-300",
  Scholarships: "bg-green-100 text-green-800 border-green-300",
  News: "bg-gold/20 text-gold-dark border-gold/40",
}

export default function AnnouncementsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-black text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Stay Updated
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mt-3 text-balance">
              Announcements
            </h1>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              The latest news, updates, and important announcements from the foundation.
            </p>
          </div>
        </section>

        {/* Announcements Section */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Notice */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="bg-white border-2 border-gold/30 rounded-xl p-6 flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Bell className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h2 className="font-semibold text-lg mb-1">Stay Informed</h2>
                  <p className="text-muted-foreground">
                    We are currently setting up our communications. Check back regularly for 
                    important updates about application deadlines, scholarship awards, and 
                    foundation news.
                  </p>
                </div>
              </div>
            </div>

            {/* Announcements Grid */}
            <div className="max-w-3xl mx-auto space-y-6">
              {announcements.map((announcement, index) => (
                <Card key={index} className="border-2 hover:border-gold/30 transition-colors">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                          <announcement.icon className="h-6 w-6 text-gold" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={categoryColors[announcement.category] || "bg-muted"}>
                              {announcement.category}
                            </Badge>
                            <Badge variant="outline" className="border-gold/30 text-muted-foreground">
                              <Clock className="h-3 w-3 mr-1" />
                              Coming Soon
                            </Badge>
                          </div>
                          <CardTitle className="font-serif text-xl">
                            {announcement.title}
                          </CardTitle>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {announcement.description}
                    </CardDescription>
                    <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{announcement.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State Note */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground">
                More announcements will be posted as they become available.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
