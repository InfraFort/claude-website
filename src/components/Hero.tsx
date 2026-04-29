import { siteConfig } from '../data/config'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream-50">
      {/* Subtle animated background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold-100 rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-50 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cream-200 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="text-center lg:text-left space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-gold-600 font-body text-sm uppercase tracking-[0.3em] font-medium">
              Premium Nail Artistry
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 leading-tight">
              {siteConfig.businessName}
            </h1>
            <p className="font-display text-xl md:text-2xl text-gold-700 italic">
              {siteConfig.tagline}
            </p>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            {siteConfig.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#gallery"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-sm uppercase tracking-wider hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gold-500 text-gold-700 rounded-full font-medium text-sm uppercase tracking-wider hover:bg-gold-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative animate-scale-in">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto lg:max-w-none">
            <img
              src="/api/images/hero.jpg"
              alt="Luxury nail art showcase"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
          {/* Decorative frame */}
          <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold-300 rounded-3xl -z-10 hidden lg:block" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gold-400 rounded-full" />
        </div>
      </div>
    </section>
  )
}

export default Hero
