import Image from "next/image"

export function StorySection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mt-3 mb-6">
              A Foundation Built on Excellence
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Jean Pierre Samuels Youth Foundation was established in loving remembrance 
                of Jean Pierre Samuels, a remarkable young man whose life exemplified the power 
                of education and determination.
              </p>
              <p>
                Jean Pierre was a proud old boy of Wolmer&apos;s Boys&apos; School and a graduate of 
                the University of the West Indies, Mona. He completed his Master&apos;s degree in 
                Corporate Finance, demonstrating exceptional academic prowess throughout his 
                educational journey.
              </p>
              <p>
                As an exceptional mathematics student, Jean Pierre excelled despite his 
                circumstances, proving that with dedication and the right support, any young 
                person can achieve their dreams.
              </p>
              <p>
                His passing shortly after completing his Master&apos;s degree left a profound impact 
                on all who knew him. This foundation carries forward his spirit of excellence 
                and his belief in the transformative power of education.
              </p>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-cream border-2 border-gold/20 flex items-center justify-center overflow-hidden">
              <Image
                src="/JPSYF Logo Black.png"
                alt="JP Samuels Youth Foundation"
                width={400}
                height={400}
                className="w-3/4 h-auto opacity-50"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
