import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { siteConfig } from '../data/config'

function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="section-padding bg-white">
      <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <p className="text-gold-600 font-body text-sm uppercase tracking-[0.3em] font-medium mb-4">
            About
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Crafted With Care
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              {siteConfig.about.intro}
            </p>
            <ul className="space-y-4">
              {siteConfig.about.qualities.map((quality, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="flex-shrink-0 w-2 h-2 bg-gold-500 rounded-full" />
                  {quality}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-square">
              <img
                src="/api/images/about.jpg"
                alt="Professional nail workspace"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gold-100 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
