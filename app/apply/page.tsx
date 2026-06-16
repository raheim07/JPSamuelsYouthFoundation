import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ApplicationForm } from "@/components/apply/application-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apply | Jean Pierre Samuels Youth Foundation",
  description: "Apply for scholarships and grants from the Jean Pierre Samuels Youth Foundation.",
}

export default function ApplyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-black text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Application
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mt-3 text-balance">
              Apply for Support
            </h1>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              Complete the application form below to be considered for our scholarship 
              and grant programs.
            </p>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="container mx-auto px-4 lg:px-8">
            <ApplicationForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
