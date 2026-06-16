"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

// TODO: Add more photos to this array as events and programs unfold
// Simply add more paths like "/gallery/photo-9.jpg", "/gallery/photo-10.jpg", etc.
const galleryImages = [
  "/gallery/photo-1.jpg",
  "/gallery/photo-2.jpg",
  "/gallery/photo-3.jpg",
  "/gallery/photo-4.jpg",
  "/gallery/photo-5.jpg",
  "/gallery/photo-6.jpg",
  "/gallery/photo-7.jpg",
  "/gallery/photo-8.jpg",
]

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  // Duplicate the array for seamless infinite scrolling
  const duplicatedImages = [...galleryImages, ...galleryImages]

  const openLightbox = (index: number) => {
    // Convert duplicated index to actual image index
    const actualIndex = index % galleryImages.length
    setCurrentIndex(actualIndex)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }, [])

  const goToNext = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
    setTimeout(() => setIsAnimating(false), 300)
  }, [isAnimating])

  const goToPrevious = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
    setTimeout(() => setIsAnimating(false), 300)
  }, [isAnimating])

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'ArrowLeft') goToPrevious()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, closeLightbox, goToNext, goToPrevious])

  // Preload nearby images
  useEffect(() => {
    if (!lightboxOpen) return
    
    const preloadIndexes = [
      (currentIndex + 1) % galleryImages.length,
      (currentIndex - 1 + galleryImages.length) % galleryImages.length,
    ]
    
    preloadIndexes.forEach((index) => {
      const img = new window.Image()
      img.src = galleryImages[index]
    })
  }, [currentIndex, lightboxOpen])

  // Touch handlers for swipe support
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    
    if (isLeftSwipe) goToNext()
    if (isRightSwipe) goToPrevious()
  }

  return (
    <section className="py-20 lg:py-28 bg-cream overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mt-3 text-balance">
            Moments & Milestones
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A growing collection of the people, programs, and stories connected to the foundation.
          </p>
        </div>
      </div>

      {/* Auto-scrolling Carousel */}
      <div className="relative group">
        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <div 
          className="flex gap-6 animate-scroll group-hover:[animation-play-state:paused]"
          style={{
            width: 'max-content',
          }}
        >
          {duplicatedImages.map((src, index) => (
            <button
              key={`${src}-${index}`}
              onClick={() => openLightbox(index)}
              className="relative flex-shrink-0 w-72 h-52 md:w-80 md:h-60 rounded-xl overflow-hidden shadow-lg group/card cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
              aria-label={`View gallery photo ${(index % galleryImages.length) + 1}`}
            >
              {/* Image with fallback placeholder */}
              <Image
                src={src}
                alt={`Gallery photo ${(index % galleryImages.length) + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  target.parentElement?.classList.add('bg-gradient-to-br', 'from-neutral-700', 'to-neutral-900')
                }}
              />
              
              {/* Placeholder fallback display */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900 -z-10">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '20px 20px'
                }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover/card:border-gold/50 rounded-xl transition-colors duration-300 pointer-events-none" />
              
              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/0 group-hover/card:bg-white/90 flex items-center justify-center transition-all duration-300 scale-0 group-hover/card:scale-100">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Note for future updates */}
      {/* <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-muted-foreground text-sm mt-10">
          More photos will be added as events and programs unfold.
        </p>
      </div> */}

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
        >
          {/* Dark overlay */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-fade-in"
            onClick={closeLightbox}
          />
          
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors group"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6 text-white group-hover:text-gold transition-colors" />
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 z-10 px-4 py-2 bg-white/10 rounded-full">
            <span className="text-white font-medium">
              {currentIndex + 1} <span className="text-white/60">/</span> {galleryImages.length}
            </span>
          </div>

          {/* Previous button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-gold/80 flex items-center justify-center transition-all group"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-black transition-colors" />
          </button>

          {/* Next button */}
          <button
            onClick={goToNext}
            className="absolute right-4 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-gold/80 flex items-center justify-center transition-all group"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-black transition-colors" />
          </button>

          {/* Main image container */}
          <div 
            className="relative w-full h-full max-w-5xl max-h-[80vh] mx-4 md:mx-16 flex items-center justify-center"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className={`relative w-full h-full transition-opacity duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
              <Image
                src={galleryImages[currentIndex]}
                alt={`Gallery photo ${currentIndex + 1}`}
                fill
                className="object-contain animate-scale-in"
                priority
                sizes="(max-width: 768px) 100vw, 80vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              
              {/* Fallback placeholder in lightbox */}
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <div className="w-full max-w-2xl aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4">
                      <svg className="w-10 h-10 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-white/40">Image Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Gold frame accent */}
            <div className="absolute inset-0 border border-gold/20 rounded-lg pointer-events-none" />
          </div>

          {/* Thumbnail strip */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-full max-w-[90vw] overflow-x-auto">
            {galleryImages.map((src, index) => (
              <button
                key={src}
                onClick={() => {
                  setIsAnimating(true)
                  setCurrentIndex(index)
                  setTimeout(() => setIsAnimating(false), 300)
                }}
                className={`relative w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 ${
                  index === currentIndex 
                    ? 'ring-2 ring-gold scale-110' 
                    : 'opacity-60 hover:opacity-100'
                }`}
                aria-label={`Go to photo ${index + 1}`}
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="56px"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900 -z-10" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        @keyframes scale-in {
          from { 
            opacity: 0;
            transform: scale(0.95);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}
