import { Users, BookOpen, HeartHandshake, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "Youth",
    label: "Empowerment",
    description: "Inspiring the next generation",
  },
  {
    icon: BookOpen,
    value: "Education",
    label: "Support",
    description: "From primary to tertiary",
  },
  {
    icon: HeartHandshake,
    value: "Community",
    label: "Impact",
    description: "Building stronger futures",
  },
  {
    icon: Award,
    value: "Excellence",
    label: "Recognition",
    description: "Honoring achievement",
  },
]

export function ImpactSection() {
  return (
    <section className="py-20 lg:py-28 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Our Impact
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mt-3 text-balance">
            Making a Difference
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Together, we are building a foundation for lasting change in the lives of young people.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-7 w-7 text-gold" />
              </div>
              <div className="font-serif text-2xl font-bold text-gold mb-1">
                {stat.value}
              </div>
              <div className="font-semibold text-white mb-1">
                {stat.label}
              </div>
              <p className="text-sm text-white/60">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-white/50 text-sm mt-12 max-w-xl mx-auto">
          As a newly established foundation, we are excited to begin our journey of impact. 
          Statistics will be updated as we grow and serve more youth.
        </p>
      </div>
    </section>
  )
}
