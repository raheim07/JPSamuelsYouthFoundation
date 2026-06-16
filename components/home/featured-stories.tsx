import Link from "next/link"
import { ArrowRight } from "lucide-react"

const featuredCards = [
  {
    title: "Scholarship Opportunities",
    description: "Supporting promising students with financial assistance to pursue their educational dreams and build a foundation for success.",
    href: "/programs",
    // TODO: Replace with actual image path when available
    image: "/gallery/photo-48.jpg"
  },
  {
    title: "Youth Empowerment",
    description: "Equipping young people with mentorship, resources, and guidance to develop leadership skills and reach their full potential.",
    href: "/programs",
    // TODO: Replace with actual image path when available
    image: "/gallery/photo-49.jpg"
  },
]

export function FeaturedStories() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Our Focus Areas
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mt-3 text-balance">
            Making a Difference
          </h2>
        </div>

        {/* Featured Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {featuredCards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="group relative block overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[16/10]"
            >
              {/* Image Placeholder */}
              {/* TODO: Replace this div with an actual Image component when images are available */}
              <img src={card.image} alt={card.title} />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                  {card.title}
                </h3>
                <p className="text-white/80 text-sm lg:text-base leading-relaxed mb-4 max-w-md">
                  {card.description}
                </p>
                <span className="inline-flex items-center text-gold font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
