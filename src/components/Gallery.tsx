import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Lightbox from './Lightbox'

// ─────────────────────────────────────────────────────────────
// GALLERY IMAGES
// Add your image filenames here. Images are served from /app/images/
// via the /api/images/ endpoint. Just add the filename.
// ─────────────────────────────────────────────────────────────
const galleryImages = [
  { src: '/api/images/gallery-1.jpg', alt: 'Luxury gel nail design' },
  { src: '/api/images/gallery-2.jpg', alt: 'Custom nail art' },
  { src: '/api/images/gallery-3.jpg', alt: 'French tip perfection' },
  { src: '/api/images/gallery-4.jpg', alt: 'Elegant nail extensions' },
  { src: '/api/images/gallery-5.jpg', alt: 'Detailed nail artwork' },
  { src: '/api/images/gallery-6.jpg', alt: 'Premium gel finish' },
  { src: '/api/images/gallery-7.jpg', alt: 'Creative nail design' },
  { src: '/api/images/gallery-8.jpg', alt: 'Bridal nail art' },
  { src: '/api/images/gallery-9.jpg', alt: 'Minimalist nail design' },
]

const masonryHeights = ['aspect-[3/4]', 'aspect-square', 'aspect-[4/5]', 'aspect-[3/4]', 'aspect-[4/5]', 'aspect-square', 'aspect-square', 'aspect-[3/4]', 'aspect-[4/5]']

function Gallery() {
  const { ref, isVisible } = useScrollAnimation()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () => setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1))
  const nextImage = () => setLightboxIndex((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0))

  return (
    <section id="gallery" className="section-padding bg-white">
      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <p className="text-gold-600 font-body text-sm uppercase tracking-[0.3em] font-medium mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            My Work
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6" />
          <p className="text-gray-500 max-w-md mx-auto">
            Every set tells a story. Browse through my latest creations.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => openLightbox(index)}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className={`relative ${masonryHeights[index % masonryHeights.length]} rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          src={galleryImages[lightboxIndex].src}
          alt={galleryImages[lightboxIndex].alt}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  )
}

export default Gallery
