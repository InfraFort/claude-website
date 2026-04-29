import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { services } from '../data/services'

function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="services" className="section-padding bg-cream-50">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <p className="text-gold-600 font-body text-sm uppercase tracking-[0.3em] font-medium mb-4">
            Services
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            What I Offer
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-cream-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold text-gray-900 group-hover:text-gold-700 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-cream-300 flex items-center justify-between">
                  <span className="text-gold-700 font-semibold text-lg">
                    {service.price}
                  </span>
                  {service.duration && (
                    <span className="text-gray-400 text-sm">
                      {service.duration}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
