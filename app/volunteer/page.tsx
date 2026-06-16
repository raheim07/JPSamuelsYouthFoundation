import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { VolunteerForm } from "@/components/volunteer/volunteer-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Become a Volunteer | Jean Pierre Samuels Youth Foundation",
  description:
    "Join the Jean Pierre Samuels Youth Foundation as a volunteer and help empower young people in our community.",
}

export default function VolunteerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-black text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Get Involved
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mt-3 text-balance">
              Become a Volunteer
            </h1>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              Lend your time and talents to help us empower the next generation. Fill out
              the form below and our team will reach out about volunteer opportunities.
            </p>
          </div>
        </section>

        {/* Volunteer Form Section */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="container mx-auto px-4 lg:px-8">
            <VolunteerForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
