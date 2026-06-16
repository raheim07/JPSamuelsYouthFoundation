import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

// TODO: Replace with actual testimonial data from database or CMS
const testimonials = [
  {
    name: "Future Scholar Name",
    program: "Scholarship Recipient",
    school: "University Name",
    quote: "This foundation gave me the opportunity to pursue my dreams. The support I received went beyond financial assistance—it was mentorship, guidance, and belief in my potential.",
    // TODO: Replace with actual image path when available
    image: "/gallery/photo-46.jpg"
  },
  {
    name: "Future Graduate Name",
    program: "Grant Recipient",
    school: "College Name",
    quote: "Thanks to the JP Samuels Youth Foundation, I was able to focus on my education without the burden of financial stress. They truly invest in young people's futures.",
    // TODO: Replace with actual image path when available
    image: "/gallery/photo-47.jpg"
  },
  {
    name: "Future Leader Name",
    program: "Youth Program Participant",
    school: "High School Name",
    quote: "The mentorship and resources provided by this foundation helped me develop leadership skills I never knew I had. I am forever grateful for their belief in me.",
    // TODO: Replace with actual image path when available
    image: "/gallery/photo-48.jpg"
  },
  {
    name: "Future Leader Name",
    program: "Youth Program Participant",
    school: "High School Name",
    quote: "The mentorship and resources provided by this foundation helped me develop leadership skills I never knew I had. I am forever grateful for their belief in me.",
    // TODO: Replace with actual image path when available
    image: "/gallery/photo-49.jpg"
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Impact Stories
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mt-3 text-balance">
            Voices of Our Community
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Stories from scholarship recipients, program participants, and community 
            members whose lives have been touched by the foundation.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-cream border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Image Placeholder */}
              {/* TODO: Replace this div with an actual Image component when images are available */}
              <img src={testimonial.image} alt={testimonial.name} />

              <CardContent className="pt-6 pb-8">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-gold/40 mb-4" />
                
                {/* Testimonial Quote */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Person Info */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gold font-medium">
                    {testimonial.program}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {testimonial.school}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note for future updates */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          More stories coming soon as we continue to support and celebrate our community.
        </p>
      </div>
    </section>
  )
}
